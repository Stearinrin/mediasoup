// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { WebRtcTransportOptions, WebRtcTransportOptionsT } from '../../fbs/web-rtc-transport/web-rtc-transport-options';


export class CreateWebRtcTransportRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CreateWebRtcTransportRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCreateWebRtcTransportRequest(bb:flatbuffers.ByteBuffer, obj?:CreateWebRtcTransportRequest):CreateWebRtcTransportRequest {
  return (obj || new CreateWebRtcTransportRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCreateWebRtcTransportRequest(bb:flatbuffers.ByteBuffer, obj?:CreateWebRtcTransportRequest):CreateWebRtcTransportRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CreateWebRtcTransportRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

transportId():string|null
transportId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
transportId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

options(obj?:WebRtcTransportOptions):WebRtcTransportOptions|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new WebRtcTransportOptions()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startCreateWebRtcTransportRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addTransportId(builder:flatbuffers.Builder, transportIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, transportIdOffset, 0);
}

static addOptions(builder:flatbuffers.Builder, optionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, optionsOffset, 0);
}

static endCreateWebRtcTransportRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // transport_id
  return offset;
}


unpack(): CreateWebRtcTransportRequestT {
  return new CreateWebRtcTransportRequestT(
    this.transportId(),
    (this.options() !== null ? this.options()!.unpack() : null)
  );
}


unpackTo(_o: CreateWebRtcTransportRequestT): void {
  _o.transportId = this.transportId();
  _o.options = (this.options() !== null ? this.options()!.unpack() : null);
}
}

export class CreateWebRtcTransportRequestT {
constructor(
  public transportId: string|Uint8Array|null = null,
  public options: WebRtcTransportOptionsT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const transportId = (this.transportId !== null ? builder.createString(this.transportId!) : 0);
  const options = (this.options !== null ? this.options!.pack(builder) : 0);

  CreateWebRtcTransportRequest.startCreateWebRtcTransportRequest(builder);
  CreateWebRtcTransportRequest.addTransportId(builder, transportId);
  CreateWebRtcTransportRequest.addOptions(builder, options);

  return CreateWebRtcTransportRequest.endCreateWebRtcTransportRequest(builder);
}
}
