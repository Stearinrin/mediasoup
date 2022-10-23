// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { WebRtcServerListenInfo, WebRtcServerListenInfoT } from '../../fbs/web-rtc-server/web-rtc-server-listen-info';


export class CreateWebRtcServerRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CreateWebRtcServerRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCreateWebRtcServerRequest(bb:flatbuffers.ByteBuffer, obj?:CreateWebRtcServerRequest):CreateWebRtcServerRequest {
  return (obj || new CreateWebRtcServerRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCreateWebRtcServerRequest(bb:flatbuffers.ByteBuffer, obj?:CreateWebRtcServerRequest):CreateWebRtcServerRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CreateWebRtcServerRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

webRtcServerId():string|null
webRtcServerId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
webRtcServerId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

listenInfos(index: number, obj?:WebRtcServerListenInfo):WebRtcServerListenInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new WebRtcServerListenInfo()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

listenInfosLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startCreateWebRtcServerRequest(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addWebRtcServerId(builder:flatbuffers.Builder, webRtcServerIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, webRtcServerIdOffset, 0);
}

static addListenInfos(builder:flatbuffers.Builder, listenInfosOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, listenInfosOffset, 0);
}

static createListenInfosVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startListenInfosVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endCreateWebRtcServerRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // web_rtc_server_id
  return offset;
}

static createCreateWebRtcServerRequest(builder:flatbuffers.Builder, webRtcServerIdOffset:flatbuffers.Offset, listenInfosOffset:flatbuffers.Offset):flatbuffers.Offset {
  CreateWebRtcServerRequest.startCreateWebRtcServerRequest(builder);
  CreateWebRtcServerRequest.addWebRtcServerId(builder, webRtcServerIdOffset);
  CreateWebRtcServerRequest.addListenInfos(builder, listenInfosOffset);
  return CreateWebRtcServerRequest.endCreateWebRtcServerRequest(builder);
}

unpack(): CreateWebRtcServerRequestT {
  return new CreateWebRtcServerRequestT(
    this.webRtcServerId(),
    this.bb!.createObjList(this.listenInfos.bind(this), this.listenInfosLength())
  );
}


unpackTo(_o: CreateWebRtcServerRequestT): void {
  _o.webRtcServerId = this.webRtcServerId();
  _o.listenInfos = this.bb!.createObjList(this.listenInfos.bind(this), this.listenInfosLength());
}
}

export class CreateWebRtcServerRequestT {
constructor(
  public webRtcServerId: string|Uint8Array|null = null,
  public listenInfos: (WebRtcServerListenInfoT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const webRtcServerId = (this.webRtcServerId !== null ? builder.createString(this.webRtcServerId!) : 0);
  const listenInfos = CreateWebRtcServerRequest.createListenInfosVector(builder, builder.createObjectOffsetList(this.listenInfos));

  return CreateWebRtcServerRequest.createCreateWebRtcServerRequest(builder,
    webRtcServerId,
    listenInfos
  );
}
}
