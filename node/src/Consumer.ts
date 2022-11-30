import { Logger } from './Logger';
import { EnhancedEventEmitter } from './EnhancedEventEmitter';
import { Channel } from './Channel';
import { PayloadChannel } from './PayloadChannel';
import { TransportInternal } from './Transport';
import { ProducerStat } from './Producer';
import {
	MediaKind,
	RtpCapabilities,
	RtpEncodingParameters,
	RtpParameters,
	parseRtpEncodingParameters,
	parseRtpParameters
} from './RtpParameters';
import { Event, Notification } from './fbs/notification_generated';
import * as FbsRequest from './fbs/request_generated';
import * as FbsTransport from './fbs/transport_generated';
import * as FbsConsumer from './fbs/consumer_generated';
import * as FbsRtpStream from './fbs/rtpStream_generated';
import * as FbsRtxStream from './fbs/rtxStream_generated';
import { Type as FbsRtpParametersType } from './fbs/fbs/rtp-parameters/type';
import * as utils from './utils';

export type ConsumerOptions =
{
	/**
	 * The id of the Producer to consume.
	 */
	producerId: string;

	/**
	 * RTP capabilities of the consuming endpoint.
	 */
	rtpCapabilities: RtpCapabilities;

	/**
	 * Whether the Consumer must start in paused mode. Default false.
	 *
	 * When creating a video Consumer, it's recommended to set paused to true,
	 * then transmit the Consumer parameters to the consuming endpoint and, once
	 * the consuming endpoint has created its local side Consumer, unpause the
	 * server side Consumer using the resume() method. This is an optimization
	 * to make it possible for the consuming endpoint to render the video as far
	 * as possible. If the server side Consumer was created with paused: false,
	 * mediasoup will immediately request a key frame to the remote Producer and
	 * suych a key frame may reach the consuming endpoint even before it's ready
	 * to consume it, generating “black” video until the device requests a keyframe
	 * by itself.
	 */
	paused?: boolean;

	/**
	 * The MID for the Consumer. If not specified, a sequentially growing
	 * number will be assigned.
	 */
	mid?: string;

	/**
	 * Preferred spatial and temporal layer for simulcast or SVC media sources.
	 * If unset, the highest ones are selected.
	 */
	preferredLayers?: ConsumerLayers;

	/**
	 * Whether this Consumer should ignore DTX packets (only valid for Opus codec).
	 * If set, DTX packets are not forwarded to the remote Consumer.
	 */
	ignoreDtx?: boolean;

	/**
	 * Whether this Consumer should consume all RTP streams generated by the
	 * Producer.
	 */
	pipe?: boolean;

	/**
	 * Custom application data.
	 */
	appData?: Record<string, unknown>;
};

/**
 * Valid types for 'trace' event.
 */
export type ConsumerTraceEventType = 'rtp' | 'keyframe' | 'nack' | 'pli' | 'fir';

/**
 * 'trace' event data.
 */
export type ConsumerTraceEventData =
{
	/**
	 * Trace type.
	 */
	type: ConsumerTraceEventType;

	/**
	 * Event timestamp.
	 */
	timestamp: number;

	/**
	 * Event direction.
	 */
	direction: 'in' | 'out';

	/**
	 * Per type information.
	 */
	info: any;
};

export type ConsumerScore =
{
	/**
	 * The score of the RTP stream of the consumer.
	 */
	score: number;

	/**
	 * The score of the currently selected RTP stream of the producer.
	 */
	producerScore: number;

	/**
	 * The scores of all RTP streams in the producer ordered by encoding (just
	 * useful when the producer uses simulcast).
	 */
	producerScores: number[];
};

export type ConsumerLayers =
{
	/**
	 * The spatial layer index (from 0 to N).
	 */
	spatialLayer: number;

	/**
	 * The temporal layer index (from 0 to N).
	 */
	temporalLayer?: number;
};

export type ConsumerStat =
{
	// Common to all RtpStreams.
	type: string;
	timestamp: number;
	ssrc: number;
	rtxSsrc?: number;
	kind: string;
	mimeType: string;
	packetsLost: number;
	fractionLost: number;
	packetsDiscarded: number;
	packetsRetransmitted: number;
	packetsRepaired: number;
	nackCount: number;
	nackPacketCount: number;
	pliCount: number;
	firCount: number;
	score: number;
	packetCount: number;
	byteCount: number;
	bitrate: number;
	roundTripTime?: number;
};

/**
 * Consumer type.
 */
export type ConsumerType = 'simple' | 'simulcast' | 'svc' | 'pipe';

export type ConsumerEvents =
{ 
	transportclose: [];
	producerclose: [];
	producerpause: [];
	producerresume: [];
	score: [ConsumerScore];
	layerschange: [ConsumerLayers?];
	trace: [ConsumerTraceEventData];
	rtp: [Buffer];
	// Private events.
	'@close': [];
	'@producerclose': [];
};

export type ConsumerObserverEvents =
{
	close: [];
	pause: [];
	resume: [];
	score: [ConsumerScore];
	layerschange: [ConsumerLayers?];
	trace: [ConsumerTraceEventData];
};

export type SimpleConsumerDump = BaseConsumerDump & {
	type: string;
	rtpStream: RtpStreamDump;
};

export type SimulcastConsumerDump = BaseConsumerDump & {
	type: string;
	rtpStream: RtpStreamDump;
	preferredSpatialLayer: number;
	targetSpatialLayer: number;
	currentSpatialLayer: number;
	preferredTemporalLayer: number;
	targetTemporalLayer: number;
	currentTemporalLayer: number;
};

export type SvcConsumerDump = SimulcastConsumerDump;

export type PipeConsumerDump = BaseConsumerDump & {
	type: string;
	rtpStreams: RtpStreamDump[];
};

export type ConsumerDump =
	SimpleConsumerDump |
	SimulcastConsumerDump |
	SvcConsumerDump |
	PipeConsumerDump;

type ConsumerInternal = TransportInternal &
{
	consumerId: string;
};

type ConsumerData =
{
	producerId: string;
	kind: MediaKind;
	rtpParameters: RtpParameters;
	type: ConsumerType;
};

type BaseConsumerDump = {
	id: string;
	producerId:string;
	kind:MediaKind;
	rtpParameters:RtpParameters;
	consumableRtpEncodings?:RtpEncodingParameters[];
	supportedCodecPayloadTypes:number[];
	traceEventTypes:string[];
	paused:boolean;
	producerPaused:boolean;
	priority:number;
};

type RtpStreamParameters = {
	encodingIdx: number;
	ssrc: number;
	payloadType: number;
	mimeType: string;
	clockRate: number;
	rid?: string;
	cname: string;
	rtxSsrc?: number;
	rtxPayloadType?: number;
	useNack: boolean;
	usePli: boolean;
	useFir: boolean;
	useInBandFec: boolean;
	useDtx: boolean;
	spatialLayers: number;
	temporalLayers: number;
};

type RtpStreamDump = {
	params: RtpStreamParameters;
	score: number;
	rtxStream?: RtxStreamDump;
};

type RtxStreamParameters = {
	ssrc:number;
	payloadType:number;
	mimeType:string;
	clockRate: number;
	rrid?:string;
	cname:string;
};

type RtxStreamDump = {
	params: RtxStreamParameters;
};

const logger = new Logger('Consumer');

export class Consumer extends EnhancedEventEmitter<ConsumerEvents>
{
	// Internal data.
	readonly #internal: ConsumerInternal;

	// Consumer data.
	readonly #data: ConsumerData;

	// Channel instance.
	readonly #channel: Channel;

	// PayloadChannel instance.
	#payloadChannel: PayloadChannel;

	// Closed flag.
	#closed = false;

	// Custom app data.
	readonly #appData: Record<string, unknown>;

	// Paused flag.
	#paused = false;

	// Associated Producer paused flag.
	#producerPaused = false;

	// Current priority.
	#priority = 1;

	// Current score.
	#score: ConsumerScore;

	// Preferred layers.
	#preferredLayers?: ConsumerLayers;

	// Curent layers.
	#currentLayers?: ConsumerLayers;

	// Observer instance.
	readonly #observer = new EnhancedEventEmitter<ConsumerObserverEvents>();

	/**
	 * @private
	 */
	constructor(
		{
			internal,
			data,
			channel,
			payloadChannel,
			appData,
			paused,
			producerPaused,
			score = { score: 10, producerScore: 10, producerScores: [] },
			preferredLayers
		}:
		{
			internal: ConsumerInternal;
			data: ConsumerData;
			channel: Channel;
			payloadChannel: PayloadChannel;
			appData?: Record<string, unknown>;
			paused: boolean;
			producerPaused: boolean;
			score?: ConsumerScore;
			preferredLayers?: ConsumerLayers;
		})
	{
		super();

		logger.debug('constructor()');

		this.#internal = internal;
		this.#data = data;
		this.#channel = channel;
		this.#payloadChannel = payloadChannel;
		this.#appData = appData || {};
		this.#paused = paused;
		this.#producerPaused = producerPaused;
		this.#score = score;
		this.#preferredLayers = preferredLayers;

		this.handleWorkerNotifications();
	}

	/**
	 * Consumer id.
	 */
	get id(): string
	{
		return this.#internal.consumerId;
	}

	/**
	 * Associated Producer id.
	 */
	get producerId(): string
	{
		return this.#data.producerId;
	}

	/**
	 * Whether the Consumer is closed.
	 */
	get closed(): boolean
	{
		return this.#closed;
	}

	/**
	 * Media kind.
	 */
	get kind(): MediaKind
	{
		return this.#data.kind;
	}

	/**
	 * RTP parameters.
	 */
	get rtpParameters(): RtpParameters
	{
		return this.#data.rtpParameters;
	}

	/**
	 * Consumer type.
	 */
	get type(): ConsumerType
	{
		return this.#data.type;
	}

	/**
	 * Whether the Consumer is paused.
	 */
	get paused(): boolean
	{
		return this.#paused;
	}

	/**
	 * Whether the associate Producer is paused.
	 */
	get producerPaused(): boolean
	{
		return this.#producerPaused;
	}

	/**
	 * Current priority.
	 */
	get priority(): number
	{
		return this.#priority;
	}

	/**
	 * Consumer score.
	 */
	get score(): ConsumerScore
	{
		return this.#score;
	}

	/**
	 * Preferred video layers.
	 */
	get preferredLayers(): ConsumerLayers | undefined
	{
		return this.#preferredLayers;
	}

	/**
	 * Current video layers.
	 */
	get currentLayers(): ConsumerLayers | undefined
	{
		return this.#currentLayers;
	}

	/**
	 * App custom data.
	 */
	get appData(): Record<string, unknown>
	{
		return this.#appData;
	}

	/**
	 * Invalid setter.
	 */
	set appData(appData: Record<string, unknown>) // eslint-disable-line no-unused-vars
	{
		throw new Error('cannot override appData object');
	}

	/**
	 * Observer.
	 */
	get observer(): EnhancedEventEmitter<ConsumerObserverEvents>
	{
		return this.#observer;
	}

	/**
	 * @private
	 * Just for testing purposes.
	 */
	get channelForTesting(): Channel
	{
		return this.#channel;
	}

	/**
	 * Close the Consumer.
	 */
	close(): void
	{
		if (this.#closed)
			return;

		logger.debug('close()');

		this.#closed = true;

		// Remove notification subscriptions.
		this.#channel.removeAllListeners(this.#internal.consumerId);
		this.#payloadChannel.removeAllListeners(this.#internal.consumerId);

		/* Build Request. */

		const builder = this.#channel.bufferBuilder;
		const requestOffset = new FbsTransport.CloseConsumerRequestT(
			this.#internal.consumerId
		).pack(builder);

		this.#channel.request(
			FbsRequest.Method.TRANSPORT_CLOSE_CONSUMER,
			FbsRequest.Body.FBS_Transport_CloseConsumerRequest,
			requestOffset,
			this.#internal.transportId
		).catch(() => {});

		this.emit('@close');

		// Emit observer event.
		this.#observer.safeEmit('close');
	}

	/**
	 * Transport was closed.
	 *
	 * @private
	 */
	transportClosed(): void
	{
		if (this.#closed)
			return;

		logger.debug('transportClosed()');

		this.#closed = true;

		// Remove notification subscriptions.
		this.#channel.removeAllListeners(this.#internal.consumerId);
		this.#payloadChannel.removeAllListeners(this.#internal.consumerId);

		this.safeEmit('transportclose');

		// Emit observer event.
		this.#observer.safeEmit('close');
	}

	/**
	 * Dump Consumer.
	 */
	async dump(): Promise<ConsumerDump>
	{
		logger.debug('dump()');

		const response = await this.#channel.request(
			FbsRequest.Method.CONSUMER_DUMP,
			undefined,
			undefined,
			this.#internal.consumerId
		);

		/* Decode the response. */
		const dumpResponse = new FbsConsumer.DumpResponse();

		response.body(dumpResponse);

		return parseConsumerDump(dumpResponse);
	}

	/**
	 * Get Consumer stats.
	 */
	async getStats(): Promise<Array<ConsumerStat | ProducerStat>>
	{
		logger.debug('getStats()');

		const response = await this.#channel.request(
			FbsRequest.Method.CONSUMER_GET_STATS,
			undefined,
			undefined,
			this.#internal.consumerId
		);

		/* Decode the response. */
		const data = new FbsConsumer.GetStatsResponse();

		response.body(data);

		return JSON.parse(data.stats()!);
	}

	/**
	 * Pause the Consumer.
	 */
	async pause(): Promise<void>
	{
		logger.debug('pause()');

		const wasPaused = this.#paused || this.#producerPaused;

		await this.#channel.request(
			FbsRequest.Method.CONSUMER_PAUSE,
			undefined,
			undefined,
			this.#internal.consumerId
		);

		this.#paused = true;

		// Emit observer event.
		if (!wasPaused)
			this.#observer.safeEmit('pause');
	}

	/**
	 * Resume the Consumer.
	 */
	async resume(): Promise<void>
	{
		logger.debug('resume()');

		const wasPaused = this.#paused || this.#producerPaused;

		await this.#channel.request(
			FbsRequest.Method.CONSUMER_RESUME,
			undefined,
			undefined,
			this.#internal.consumerId
		);

		this.#paused = false;

		// Emit observer event.
		if (wasPaused && !this.#producerPaused)
			this.#observer.safeEmit('resume');
	}

	/**
	 * Set preferred video layers.
	 */
	async setPreferredLayers(
		{
			spatialLayer,
			temporalLayer
		}: ConsumerLayers
	): Promise<void>
	{
		logger.debug('setPreferredLayers()');

		if (typeof spatialLayer !== 'number')
			throw new TypeError('spatialLayer must be a number');
		if (temporalLayer && typeof temporalLayer !== 'number')
			throw new TypeError('if given, temporalLayer must be a number');

		const builder = this.#channel.bufferBuilder;

		FbsConsumer.ConsumerLayers.startConsumerLayers(builder);
		FbsConsumer.ConsumerLayers.addSpatialLayer(builder, spatialLayer);

		if (temporalLayer !== undefined)
			FbsConsumer.ConsumerLayers.addTemporalLayer(builder, temporalLayer);

		const preferredLayersOffset = FbsConsumer.ConsumerLayers.endConsumerLayers(builder);
		const requestOffset =
			FbsConsumer.SetPreferredLayersRequest.createSetPreferredLayersRequest(
				builder, preferredLayersOffset);

		const response = await this.#channel.request(
			FbsRequest.Method.CONSUMER_SET_PREFERRED_LAYERS,
			FbsRequest.Body.FBS_Consumer_SetPreferredLayersRequest,
			requestOffset,
			this.#internal.consumerId
		);

		/* Decode the response. */
		const data = new FbsConsumer.SetPreferredLayersResponse();

		let preferredLayers: ConsumerLayers | undefined;

		// Response is empty for non Simulcast Consumers.
		if (response.body(data))
		{
			const status = data.unpack();

			if (status.preferredLayers)
			{
				preferredLayers = {
					spatialLayer  : status.preferredLayers.spatialLayer,
					temporalLayer : status.preferredLayers.temporalLayer !== null ?
						status.preferredLayers.temporalLayer :
						undefined
				};
			}
		}

		this.#preferredLayers = preferredLayers;
	}

	/**
	 * Set priority.
	 */
	async setPriority(priority: number): Promise<void>
	{
		logger.debug('setPriority()');

		if (typeof priority !== 'number' || priority < 0)
			throw new TypeError('priority must be a positive number');

		const builder = this.#channel.bufferBuilder;
		const requestOffset = new FbsConsumer.SetPriorityRequestT(priority).pack(builder);

		const response = await this.#channel.request(
			FbsRequest.Method.CONSUMER_SET_PRIORITY,
			FbsRequest.Body.FBS_Consumer_SetPriorityRequest,
			requestOffset,
			this.#internal.consumerId
		);

		const data = new FbsConsumer.SetPriorityResponse();

		response.body(data);

		const status = data.unpack();

		this.#priority = status.priority;
	}

	/**
	 * Unset priority.
	 */
	async unsetPriority(): Promise<void>
	{
		logger.debug('unsetPriority()');

		await this.setPriority(1);
	}

	/**
	 * Request a key frame to the Producer.
	 */
	async requestKeyFrame(): Promise<void>
	{
		logger.debug('requestKeyFrame()');

		await this.#channel.request(
			FbsRequest.Method.CONSUMER_REQUEST_KEY_FRAME,
			undefined,
			undefined,
			this.#internal.consumerId
		);
	}

	/**
	 * Enable 'trace' event.
	 */
	async enableTraceEvent(types: ConsumerTraceEventType[] = []): Promise<void>
	{
		logger.debug('enableTraceEvent()');

		if (!Array.isArray(types))
			throw new TypeError('types must be an array');
		if (types.find((type) => typeof type !== 'string'))
			throw new TypeError('every type must be a string');

		/* Build Request. */

		const builder = this.#channel.bufferBuilder;
		const requestOffset = new FbsConsumer.EnableTraceEventRequestT(
			types
		).pack(builder);

		await this.#channel.request(
			FbsRequest.Method.CONSUMER_ENABLE_TRACE_EVENT,
			FbsRequest.Body.FBS_Consumer_EnableTraceEventRequest,
			requestOffset,
			this.#internal.consumerId
		);
	}

	private handleWorkerNotifications(): void
	{
		this.#channel.on(this.#internal.consumerId, (event: Event, data?: Notification) =>
		{
			switch (event)
			{
				case Event.CONSUMER_PRODUCER_CLOSE:
				{
					if (this.#closed)
						break;

					this.#closed = true;

					// Remove notification subscriptions.
					this.#channel.removeAllListeners(this.#internal.consumerId);
					this.#payloadChannel.removeAllListeners(this.#internal.consumerId);

					this.emit('@producerclose');
					this.safeEmit('producerclose');

					// Emit observer event.
					this.#observer.safeEmit('close');

					break;
				}

				case Event.CONSUMER_PRODUCER_PAUSE:
				{
					if (this.#producerPaused)
						break;

					const wasPaused = this.#paused || this.#producerPaused;

					this.#producerPaused = true;

					this.safeEmit('producerpause');

					// Emit observer event.
					if (!wasPaused)
						this.#observer.safeEmit('pause');

					break;
				}

				case Event.CONSUMER_PRODUCER_RESUME:
				{
					if (!this.#producerPaused)
						break;

					const wasPaused = this.#paused || this.#producerPaused;

					this.#producerPaused = false;

					this.safeEmit('producerresume');

					// Emit observer event.
					if (wasPaused && !this.#paused)
						this.#observer.safeEmit('resume');

					break;
				}

				case Event.CONSUMER_SCORE:
				{
					const notification = new FbsConsumer.ScoreNotification();

					data!.body(notification);

					const score = notification!.score()!.unpack();

					this.#score = score;

					this.safeEmit('score', score);

					// Emit observer event.
					this.#observer.safeEmit('score', score);

					break;
				}

				case Event.CONSUMER_LAYERS_CHANGE:
				{
					const notification = new FbsConsumer.LayersChangeNotification()!;

					data!.body(notification);

					const layers = notification.layers() ?
						parseConsumerLayers(notification.layers()!) :
						undefined;

					this.#currentLayers = layers;

					this.safeEmit('layerschange', layers);

					// Emit observer event.
					this.#observer.safeEmit('layerschange', layers);

					break;
				}

				case Event.CONSUMER_TRACE:
				{
					const notification = new FbsConsumer.TraceNotification();

					data!.body(notification);

					const trace = parseTraceEventData(notification);

					this.safeEmit('trace', trace);

					// Emit observer event.
					this.observer.safeEmit('trace', trace);

					this.safeEmit('trace', trace);

					// Emit observer event.
					this.#observer.safeEmit('trace', trace);

					break;
				}

				default:
				{
					logger.error('ignoring unknown event "%s"', event);
				}
			}
		});

		this.#payloadChannel.on(
			this.#internal.consumerId,
			(event: string, data: any | undefined, payload: Buffer) =>
			{
				switch (event)
				{
					case 'rtp':
					{
						if (this.#closed)
							break;

						const packet = payload;

						this.safeEmit('rtp', packet);

						break;
					}

					default:
					{
						logger.error('ignoring unknown event "%s"', event);
					}
				}
			});
	}
}

export function parseTraceEventData(
	trace: FbsConsumer.TraceNotification
): ConsumerTraceEventData
{
	let info: any;

	if (trace.infoType() !== FbsConsumer.TraceInfo.NONE)
	{
		const accessor = trace.info.bind(trace);

		info = FbsConsumer.unionToTraceInfo(trace.infoType(), accessor);

		trace.info(info);
	}

	return {
		type      : fbstraceType2String(trace.type()),
		timestamp : trace.timestamp() as unknown as number,
		direction : trace.direction() === FbsTransport.TraceDirection.IN ? 'in' : 'out',
		info      : info ? info.unpack() : undefined
	};
}

function fbstraceType2String(traceType: FbsConsumer.TraceType): ConsumerTraceEventType
{
	switch (traceType)
	{
		case FbsConsumer.TraceType.KEYFRAME:
			return 'keyframe';
		case FbsConsumer.TraceType.FIR:
			return 'fir';
		case FbsConsumer.TraceType.NACK:
			return 'nack';
		case FbsConsumer.TraceType.PLI:
			return 'pli';
		case FbsConsumer.TraceType.RTP:
			return 'rtp';
		default:
			throw new TypeError(`invalid TraceType: ${traceType}`);
	}
}

function parseConsumerLayers(data: FbsConsumer.ConsumerLayers): ConsumerLayers
{
	const spatialLayer = data.spatialLayer();
	const temporalLayer = data.temporalLayer() !== null ? data.temporalLayer()! : undefined;

	return {
		spatialLayer,
		temporalLayer
	};
}

function parseRtpStreamParameters(data: FbsRtpStream.Params): RtpStreamParameters
{
	return {
		encodingIdx    : data.encodingIdx(),
		ssrc           : data.ssrc(),
		payloadType    : data.payloadType(),
		mimeType       : data.mimeType()!,
		clockRate      : data.clockRate(),
		rid            : data.rid()!.length > 0 ? data.rid()! : undefined,
		cname          : data.cname()!,
		rtxSsrc        : data.rtxSsrc() !== null ? data.rtxSsrc()! : undefined,
		rtxPayloadType : data.rtxPayloadType() !== null ? data.rtxPayloadType()! : undefined,
		useNack        : data.useNack(),
		usePli         : data.usePli(),
		useFir         : data.useFir(),
		useInBandFec   : data.useInBandFec(),
		useDtx         : data.useDtx(),
		spatialLayers  : data.spatialLayers(),
		temporalLayers : data.temporalLayers()
	};
}

function parseRtxStreamParameters(data: FbsRtxStream.Params): RtxStreamParameters
{
	return {
		ssrc        : data.ssrc(),
		payloadType : data.payloadType(),
		mimeType    : data.mimeType()!,
		clockRate   : data.clockRate(),
		rrid        : data.rrid()!.length > 0 ? data.rrid()! : undefined,
		cname       : data.cname()!
	};
}

function parseRtxStream(data: FbsRtxStream.RtxDump): RtxStreamDump
{
	const params = parseRtxStreamParameters(data.params()!);

	return {
		params
	};
}

function parseRtpStream(data: FbsRtpStream.Dump): RtpStreamDump
{
	const params = parseRtpStreamParameters(data.params()!);

	let rtxStream: RtxStreamDump | undefined;

	if (data.rtxStream())
	{
		rtxStream = parseRtxStream(data.rtxStream()!);
	}

	return {
		params,
		score : data.score(),
		rtxStream
	};
}

function parseBaseConsumerDump(data: FbsConsumer.BaseConsumerDump): BaseConsumerDump
{
	return {
		id         : data.id()!,
		producerId : data.producerId()!,
		kind       : data.kind() === FbsTransport.MediaKind.AUDIO ?
			'audio' :
			'video',
		rtpParameters          : parseRtpParameters(data.rtpParameters()!),
		consumableRtpEncodings : data.consumableRtpEncodingsLength() > 0 ?
			utils.parseVector(data, 'consumableRtpEncodings', parseRtpEncodingParameters) :
			undefined,
		traceEventTypes            : utils.parseVector(data, 'traceEventTypes'),
		supportedCodecPayloadTypes : utils.parseVector(data, 'supportedCodecPayloadTypes'),
		paused                     : data.paused(),
		producerPaused             : data.producerPaused(),
		priority                   : data.priority()
	};
}

function parseSimpleConsumerDump(data: FbsConsumer.SimpleConsumerDump): SimpleConsumerDump
{
	const baseDump = new FbsConsumer.BaseConsumerDump();

	const base = parseBaseConsumerDump(data.base()!.data(baseDump)!);
	const rtpStream = parseRtpStream(data.rtpStream()!);

	return {
		...base,
		type : 'simple',
		rtpStream
	};
}

function parseSimulcastConsumerDump(
	data: FbsConsumer.SimulcastConsumerDump
) : SimulcastConsumerDump
{
	const baseDump = new FbsConsumer.BaseConsumerDump();

	const base = parseBaseConsumerDump(data.base()!.data(baseDump)!);
	const rtpStream = parseRtpStream(data.rtpStream()!);

	return {
		...base,
		type                   : 'simulcast',
		rtpStream,
		preferredSpatialLayer  : data.preferredSpatialLayer(),
		targetSpatialLayer     : data.targetSpatialLayer(),
		currentSpatialLayer    : data.currentSpatialLayer(),
		preferredTemporalLayer : data.preferredTemporalLayer(),
		targetTemporalLayer    : data.targetTemporalLayer(),
		currentTemporalLayer   : data.currentTemporalLayer()
	};
}

function parseSvcConsumerDump(
	data: FbsConsumer.SvcConsumerDump
) : SvcConsumerDump
{
	const dump = parseSimulcastConsumerDump(data);

	dump.type = 'svc';

	return dump;
}

function parsePipeConsumerDump(
	data: FbsConsumer.PipeConsumerDump
) : PipeConsumerDump
{
	const baseDump = new FbsConsumer.BaseConsumerDump();

	const base = parseBaseConsumerDump(data.base()!.data(baseDump)!);
	const rtpStreams = utils.parseVector(data, 'rtpStreams', parseRtpStream);

	return {
		...base,
		type : 'pipe',
		rtpStreams
	};
}

function parseConsumerDump(data: FbsConsumer.DumpResponse): ConsumerDump
{
	logger.warn(data.unpack());
	switch (data.type())
	{
		case FbsRtpParametersType.SIMPLE:
		{
			const dump = new FbsConsumer.SimpleConsumerDump();

			data.data(dump);

			return parseSimpleConsumerDump(dump);
		}

		case FbsRtpParametersType.SIMULCAST:
		{
			const dump = new FbsConsumer.SimulcastConsumerDump();

			data.data(dump);

			return parseSimulcastConsumerDump(dump);
		}

		case FbsRtpParametersType.SVC:
		{
			const dump = new FbsConsumer.SvcConsumerDump();

			data.data(dump);

			return parseSvcConsumerDump(dump);
		}

		case FbsRtpParametersType.PIPE:
		{
			const dump = new FbsConsumer.PipeConsumerDump();

			data.data(dump);

			return parsePipeConsumerDump(dump);
		}

		default:
		{
			throw new TypeError(`invalid Consumer type: ${data.type()}`);
		}
	}
}
