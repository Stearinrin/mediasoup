"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumeRequest = exports.BaseTransportDumpT = exports.BaseTransportDump = exports.NumSctpStreamsT = exports.NumSctpStreams = exports.unionListToValue = exports.unionToValue = exports.Value = exports.Type = exports.StringT = exports.String = exports.RtxT = exports.Rtx = exports.RtpParametersT = exports.RtpParameters = exports.RtpHeaderExtensionParametersT = exports.RtpHeaderExtensionParameters = exports.RtpEncodingParametersT = exports.RtpEncodingParameters = exports.RtpCodecParametersT = exports.RtpCodecParameters = exports.RtcpParametersT = exports.RtcpParameters = exports.RtcpFeedbackT = exports.RtcpFeedback = exports.ParameterT = exports.Parameter = exports.MediaKind = exports.IntegerArrayT = exports.IntegerArray = exports.IntegerT = exports.Integer = exports.DoubleT = exports.Double = exports.BooleanT = exports.Boolean = exports.ConsumerScoreT = exports.ConsumerScore = exports.ConsumerLayersT = exports.ConsumerLayers = exports.Uint32StringT = exports.Uint32String = exports.Uint16StringT = exports.Uint16String = exports.StringUint8T = exports.StringUint8 = exports.StringStringArrayT = exports.StringStringArray = exports.StringStringT = exports.StringString = void 0;
exports.WebRtcTransportOptionsT = exports.WebRtcTransportOptions = exports.WebRtcTransportListenServerT = exports.WebRtcTransportListenServer = exports.WebRtcTransportListenIndividualT = exports.WebRtcTransportListenIndividual = exports.unionListToWebRtcTransportListen = exports.unionToWebRtcTransportListen = exports.WebRtcTransportListen = exports.WebRtcTransportDumpT = exports.WebRtcTransportDump = exports.TupleT = exports.Tuple = exports.TransportListenIpT = exports.TransportListenIp = exports.unionListToTransportDumpData = exports.unionToTransportDumpData = exports.TransportDumpData = exports.TransportDumpT = exports.TransportDump = exports.SrtpParametersT = exports.SrtpParameters = exports.SctpParametersT = exports.SctpParameters = exports.SctpListenerT = exports.SctpListener = exports.RtpListenerT = exports.RtpListener = exports.PlainTransportDumpT = exports.PlainTransportDump = exports.PipeTransportDumpT = exports.PipeTransportDump = exports.IceParametersT = exports.IceParameters = exports.IceCandidateT = exports.IceCandidate = exports.FingerprintT = exports.Fingerprint = exports.DtlsParametersT = exports.DtlsParameters = exports.DirectTransportDumpT = exports.DirectTransportDump = exports.ConsumeResponseT = exports.ConsumeResponse = exports.ConsumeRequestT = void 0;
var string_string_1 = require("./fbs/common/string-string");
Object.defineProperty(exports, "StringString", { enumerable: true, get: function () { return string_string_1.StringString; } });
Object.defineProperty(exports, "StringStringT", { enumerable: true, get: function () { return string_string_1.StringStringT; } });
var string_string_array_1 = require("./fbs/common/string-string-array");
Object.defineProperty(exports, "StringStringArray", { enumerable: true, get: function () { return string_string_array_1.StringStringArray; } });
Object.defineProperty(exports, "StringStringArrayT", { enumerable: true, get: function () { return string_string_array_1.StringStringArrayT; } });
var string_uint8_1 = require("./fbs/common/string-uint8");
Object.defineProperty(exports, "StringUint8", { enumerable: true, get: function () { return string_uint8_1.StringUint8; } });
Object.defineProperty(exports, "StringUint8T", { enumerable: true, get: function () { return string_uint8_1.StringUint8T; } });
var uint16string_1 = require("./fbs/common/uint16string");
Object.defineProperty(exports, "Uint16String", { enumerable: true, get: function () { return uint16string_1.Uint16String; } });
Object.defineProperty(exports, "Uint16StringT", { enumerable: true, get: function () { return uint16string_1.Uint16StringT; } });
var uint32string_1 = require("./fbs/common/uint32string");
Object.defineProperty(exports, "Uint32String", { enumerable: true, get: function () { return uint32string_1.Uint32String; } });
Object.defineProperty(exports, "Uint32StringT", { enumerable: true, get: function () { return uint32string_1.Uint32StringT; } });
var consumer_layers_1 = require("./fbs/consumer/consumer-layers");
Object.defineProperty(exports, "ConsumerLayers", { enumerable: true, get: function () { return consumer_layers_1.ConsumerLayers; } });
Object.defineProperty(exports, "ConsumerLayersT", { enumerable: true, get: function () { return consumer_layers_1.ConsumerLayersT; } });
var consumer_score_1 = require("./fbs/consumer/consumer-score");
Object.defineProperty(exports, "ConsumerScore", { enumerable: true, get: function () { return consumer_score_1.ConsumerScore; } });
Object.defineProperty(exports, "ConsumerScoreT", { enumerable: true, get: function () { return consumer_score_1.ConsumerScoreT; } });
var boolean_1 = require("./fbs/rtp-parameters/boolean");
Object.defineProperty(exports, "Boolean", { enumerable: true, get: function () { return boolean_1.Boolean; } });
Object.defineProperty(exports, "BooleanT", { enumerable: true, get: function () { return boolean_1.BooleanT; } });
var double_1 = require("./fbs/rtp-parameters/double");
Object.defineProperty(exports, "Double", { enumerable: true, get: function () { return double_1.Double; } });
Object.defineProperty(exports, "DoubleT", { enumerable: true, get: function () { return double_1.DoubleT; } });
var integer_1 = require("./fbs/rtp-parameters/integer");
Object.defineProperty(exports, "Integer", { enumerable: true, get: function () { return integer_1.Integer; } });
Object.defineProperty(exports, "IntegerT", { enumerable: true, get: function () { return integer_1.IntegerT; } });
var integer_array_1 = require("./fbs/rtp-parameters/integer-array");
Object.defineProperty(exports, "IntegerArray", { enumerable: true, get: function () { return integer_array_1.IntegerArray; } });
Object.defineProperty(exports, "IntegerArrayT", { enumerable: true, get: function () { return integer_array_1.IntegerArrayT; } });
var media_kind_1 = require("./fbs/rtp-parameters/media-kind");
Object.defineProperty(exports, "MediaKind", { enumerable: true, get: function () { return media_kind_1.MediaKind; } });
var parameter_1 = require("./fbs/rtp-parameters/parameter");
Object.defineProperty(exports, "Parameter", { enumerable: true, get: function () { return parameter_1.Parameter; } });
Object.defineProperty(exports, "ParameterT", { enumerable: true, get: function () { return parameter_1.ParameterT; } });
var rtcp_feedback_1 = require("./fbs/rtp-parameters/rtcp-feedback");
Object.defineProperty(exports, "RtcpFeedback", { enumerable: true, get: function () { return rtcp_feedback_1.RtcpFeedback; } });
Object.defineProperty(exports, "RtcpFeedbackT", { enumerable: true, get: function () { return rtcp_feedback_1.RtcpFeedbackT; } });
var rtcp_parameters_1 = require("./fbs/rtp-parameters/rtcp-parameters");
Object.defineProperty(exports, "RtcpParameters", { enumerable: true, get: function () { return rtcp_parameters_1.RtcpParameters; } });
Object.defineProperty(exports, "RtcpParametersT", { enumerable: true, get: function () { return rtcp_parameters_1.RtcpParametersT; } });
var rtp_codec_parameters_1 = require("./fbs/rtp-parameters/rtp-codec-parameters");
Object.defineProperty(exports, "RtpCodecParameters", { enumerable: true, get: function () { return rtp_codec_parameters_1.RtpCodecParameters; } });
Object.defineProperty(exports, "RtpCodecParametersT", { enumerable: true, get: function () { return rtp_codec_parameters_1.RtpCodecParametersT; } });
var rtp_encoding_parameters_1 = require("./fbs/rtp-parameters/rtp-encoding-parameters");
Object.defineProperty(exports, "RtpEncodingParameters", { enumerable: true, get: function () { return rtp_encoding_parameters_1.RtpEncodingParameters; } });
Object.defineProperty(exports, "RtpEncodingParametersT", { enumerable: true, get: function () { return rtp_encoding_parameters_1.RtpEncodingParametersT; } });
var rtp_header_extension_parameters_1 = require("./fbs/rtp-parameters/rtp-header-extension-parameters");
Object.defineProperty(exports, "RtpHeaderExtensionParameters", { enumerable: true, get: function () { return rtp_header_extension_parameters_1.RtpHeaderExtensionParameters; } });
Object.defineProperty(exports, "RtpHeaderExtensionParametersT", { enumerable: true, get: function () { return rtp_header_extension_parameters_1.RtpHeaderExtensionParametersT; } });
var rtp_parameters_1 = require("./fbs/rtp-parameters/rtp-parameters");
Object.defineProperty(exports, "RtpParameters", { enumerable: true, get: function () { return rtp_parameters_1.RtpParameters; } });
Object.defineProperty(exports, "RtpParametersT", { enumerable: true, get: function () { return rtp_parameters_1.RtpParametersT; } });
var rtx_1 = require("./fbs/rtp-parameters/rtx");
Object.defineProperty(exports, "Rtx", { enumerable: true, get: function () { return rtx_1.Rtx; } });
Object.defineProperty(exports, "RtxT", { enumerable: true, get: function () { return rtx_1.RtxT; } });
var string_1 = require("./fbs/rtp-parameters/string");
Object.defineProperty(exports, "String", { enumerable: true, get: function () { return string_1.String; } });
Object.defineProperty(exports, "StringT", { enumerable: true, get: function () { return string_1.StringT; } });
var type_1 = require("./fbs/rtp-parameters/type");
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return type_1.Type; } });
var value_1 = require("./fbs/rtp-parameters/value");
Object.defineProperty(exports, "Value", { enumerable: true, get: function () { return value_1.Value; } });
Object.defineProperty(exports, "unionToValue", { enumerable: true, get: function () { return value_1.unionToValue; } });
Object.defineProperty(exports, "unionListToValue", { enumerable: true, get: function () { return value_1.unionListToValue; } });
var num_sctp_streams_1 = require("./fbs/sctp-parameters/num-sctp-streams");
Object.defineProperty(exports, "NumSctpStreams", { enumerable: true, get: function () { return num_sctp_streams_1.NumSctpStreams; } });
Object.defineProperty(exports, "NumSctpStreamsT", { enumerable: true, get: function () { return num_sctp_streams_1.NumSctpStreamsT; } });
var base_transport_dump_1 = require("./fbs/transport/base-transport-dump");
Object.defineProperty(exports, "BaseTransportDump", { enumerable: true, get: function () { return base_transport_dump_1.BaseTransportDump; } });
Object.defineProperty(exports, "BaseTransportDumpT", { enumerable: true, get: function () { return base_transport_dump_1.BaseTransportDumpT; } });
var consume_request_1 = require("./fbs/transport/consume-request");
Object.defineProperty(exports, "ConsumeRequest", { enumerable: true, get: function () { return consume_request_1.ConsumeRequest; } });
Object.defineProperty(exports, "ConsumeRequestT", { enumerable: true, get: function () { return consume_request_1.ConsumeRequestT; } });
var consume_response_1 = require("./fbs/transport/consume-response");
Object.defineProperty(exports, "ConsumeResponse", { enumerable: true, get: function () { return consume_response_1.ConsumeResponse; } });
Object.defineProperty(exports, "ConsumeResponseT", { enumerable: true, get: function () { return consume_response_1.ConsumeResponseT; } });
var direct_transport_dump_1 = require("./fbs/transport/direct-transport-dump");
Object.defineProperty(exports, "DirectTransportDump", { enumerable: true, get: function () { return direct_transport_dump_1.DirectTransportDump; } });
Object.defineProperty(exports, "DirectTransportDumpT", { enumerable: true, get: function () { return direct_transport_dump_1.DirectTransportDumpT; } });
var dtls_parameters_1 = require("./fbs/transport/dtls-parameters");
Object.defineProperty(exports, "DtlsParameters", { enumerable: true, get: function () { return dtls_parameters_1.DtlsParameters; } });
Object.defineProperty(exports, "DtlsParametersT", { enumerable: true, get: function () { return dtls_parameters_1.DtlsParametersT; } });
var fingerprint_1 = require("./fbs/transport/fingerprint");
Object.defineProperty(exports, "Fingerprint", { enumerable: true, get: function () { return fingerprint_1.Fingerprint; } });
Object.defineProperty(exports, "FingerprintT", { enumerable: true, get: function () { return fingerprint_1.FingerprintT; } });
var ice_candidate_1 = require("./fbs/transport/ice-candidate");
Object.defineProperty(exports, "IceCandidate", { enumerable: true, get: function () { return ice_candidate_1.IceCandidate; } });
Object.defineProperty(exports, "IceCandidateT", { enumerable: true, get: function () { return ice_candidate_1.IceCandidateT; } });
var ice_parameters_1 = require("./fbs/transport/ice-parameters");
Object.defineProperty(exports, "IceParameters", { enumerable: true, get: function () { return ice_parameters_1.IceParameters; } });
Object.defineProperty(exports, "IceParametersT", { enumerable: true, get: function () { return ice_parameters_1.IceParametersT; } });
var pipe_transport_dump_1 = require("./fbs/transport/pipe-transport-dump");
Object.defineProperty(exports, "PipeTransportDump", { enumerable: true, get: function () { return pipe_transport_dump_1.PipeTransportDump; } });
Object.defineProperty(exports, "PipeTransportDumpT", { enumerable: true, get: function () { return pipe_transport_dump_1.PipeTransportDumpT; } });
var plain_transport_dump_1 = require("./fbs/transport/plain-transport-dump");
Object.defineProperty(exports, "PlainTransportDump", { enumerable: true, get: function () { return plain_transport_dump_1.PlainTransportDump; } });
Object.defineProperty(exports, "PlainTransportDumpT", { enumerable: true, get: function () { return plain_transport_dump_1.PlainTransportDumpT; } });
var rtp_listener_1 = require("./fbs/transport/rtp-listener");
Object.defineProperty(exports, "RtpListener", { enumerable: true, get: function () { return rtp_listener_1.RtpListener; } });
Object.defineProperty(exports, "RtpListenerT", { enumerable: true, get: function () { return rtp_listener_1.RtpListenerT; } });
var sctp_listener_1 = require("./fbs/transport/sctp-listener");
Object.defineProperty(exports, "SctpListener", { enumerable: true, get: function () { return sctp_listener_1.SctpListener; } });
Object.defineProperty(exports, "SctpListenerT", { enumerable: true, get: function () { return sctp_listener_1.SctpListenerT; } });
var sctp_parameters_1 = require("./fbs/transport/sctp-parameters");
Object.defineProperty(exports, "SctpParameters", { enumerable: true, get: function () { return sctp_parameters_1.SctpParameters; } });
Object.defineProperty(exports, "SctpParametersT", { enumerable: true, get: function () { return sctp_parameters_1.SctpParametersT; } });
var srtp_parameters_1 = require("./fbs/transport/srtp-parameters");
Object.defineProperty(exports, "SrtpParameters", { enumerable: true, get: function () { return srtp_parameters_1.SrtpParameters; } });
Object.defineProperty(exports, "SrtpParametersT", { enumerable: true, get: function () { return srtp_parameters_1.SrtpParametersT; } });
var transport_dump_1 = require("./fbs/transport/transport-dump");
Object.defineProperty(exports, "TransportDump", { enumerable: true, get: function () { return transport_dump_1.TransportDump; } });
Object.defineProperty(exports, "TransportDumpT", { enumerable: true, get: function () { return transport_dump_1.TransportDumpT; } });
var transport_dump_data_1 = require("./fbs/transport/transport-dump-data");
Object.defineProperty(exports, "TransportDumpData", { enumerable: true, get: function () { return transport_dump_data_1.TransportDumpData; } });
Object.defineProperty(exports, "unionToTransportDumpData", { enumerable: true, get: function () { return transport_dump_data_1.unionToTransportDumpData; } });
Object.defineProperty(exports, "unionListToTransportDumpData", { enumerable: true, get: function () { return transport_dump_data_1.unionListToTransportDumpData; } });
var transport_listen_ip_1 = require("./fbs/transport/transport-listen-ip");
Object.defineProperty(exports, "TransportListenIp", { enumerable: true, get: function () { return transport_listen_ip_1.TransportListenIp; } });
Object.defineProperty(exports, "TransportListenIpT", { enumerable: true, get: function () { return transport_listen_ip_1.TransportListenIpT; } });
var tuple_1 = require("./fbs/transport/tuple");
Object.defineProperty(exports, "Tuple", { enumerable: true, get: function () { return tuple_1.Tuple; } });
Object.defineProperty(exports, "TupleT", { enumerable: true, get: function () { return tuple_1.TupleT; } });
var web_rtc_transport_dump_1 = require("./fbs/transport/web-rtc-transport-dump");
Object.defineProperty(exports, "WebRtcTransportDump", { enumerable: true, get: function () { return web_rtc_transport_dump_1.WebRtcTransportDump; } });
Object.defineProperty(exports, "WebRtcTransportDumpT", { enumerable: true, get: function () { return web_rtc_transport_dump_1.WebRtcTransportDumpT; } });
var web_rtc_transport_listen_1 = require("./fbs/web-rtc-transport/web-rtc-transport-listen");
Object.defineProperty(exports, "WebRtcTransportListen", { enumerable: true, get: function () { return web_rtc_transport_listen_1.WebRtcTransportListen; } });
Object.defineProperty(exports, "unionToWebRtcTransportListen", { enumerable: true, get: function () { return web_rtc_transport_listen_1.unionToWebRtcTransportListen; } });
Object.defineProperty(exports, "unionListToWebRtcTransportListen", { enumerable: true, get: function () { return web_rtc_transport_listen_1.unionListToWebRtcTransportListen; } });
var web_rtc_transport_listen_individual_1 = require("./fbs/web-rtc-transport/web-rtc-transport-listen-individual");
Object.defineProperty(exports, "WebRtcTransportListenIndividual", { enumerable: true, get: function () { return web_rtc_transport_listen_individual_1.WebRtcTransportListenIndividual; } });
Object.defineProperty(exports, "WebRtcTransportListenIndividualT", { enumerable: true, get: function () { return web_rtc_transport_listen_individual_1.WebRtcTransportListenIndividualT; } });
var web_rtc_transport_listen_server_1 = require("./fbs/web-rtc-transport/web-rtc-transport-listen-server");
Object.defineProperty(exports, "WebRtcTransportListenServer", { enumerable: true, get: function () { return web_rtc_transport_listen_server_1.WebRtcTransportListenServer; } });
Object.defineProperty(exports, "WebRtcTransportListenServerT", { enumerable: true, get: function () { return web_rtc_transport_listen_server_1.WebRtcTransportListenServerT; } });
var web_rtc_transport_options_1 = require("./fbs/web-rtc-transport/web-rtc-transport-options");
Object.defineProperty(exports, "WebRtcTransportOptions", { enumerable: true, get: function () { return web_rtc_transport_options_1.WebRtcTransportOptions; } });
Object.defineProperty(exports, "WebRtcTransportOptionsT", { enumerable: true, get: function () { return web_rtc_transport_options_1.WebRtcTransportOptionsT; } });
