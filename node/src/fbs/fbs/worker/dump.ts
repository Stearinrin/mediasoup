// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ChannelMessageHandlers, ChannelMessageHandlersT } from '../../fbs/worker/channel-message-handlers';


export class Dump {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Dump {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDump(bb:flatbuffers.ByteBuffer, obj?:Dump):Dump {
  return (obj || new Dump()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDump(bb:flatbuffers.ByteBuffer, obj?:Dump):Dump {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Dump()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

pid():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

webrtcServerIds(index: number):string
webrtcServerIds(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
webrtcServerIds(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

webrtcServerIdsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

routerIds(index: number):string
routerIds(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
routerIds(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

routerIdsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

channelMessageHandlers(obj?:ChannelMessageHandlers):ChannelMessageHandlers|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new ChannelMessageHandlers()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startDump(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addPid(builder:flatbuffers.Builder, pid:bigint) {
  builder.addFieldInt64(0, pid, BigInt('0'));
}

static addWebrtcServerIds(builder:flatbuffers.Builder, webrtcServerIdsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, webrtcServerIdsOffset, 0);
}

static createWebrtcServerIdsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startWebrtcServerIdsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addRouterIds(builder:flatbuffers.Builder, routerIdsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, routerIdsOffset, 0);
}

static createRouterIdsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRouterIdsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addChannelMessageHandlers(builder:flatbuffers.Builder, channelMessageHandlersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, channelMessageHandlersOffset, 0);
}

static endDump(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishDumpBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedDumpBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}


unpack(): DumpT {
  return new DumpT(
    this.pid(),
    this.bb!.createScalarList(this.webrtcServerIds.bind(this), this.webrtcServerIdsLength()),
    this.bb!.createScalarList(this.routerIds.bind(this), this.routerIdsLength()),
    (this.channelMessageHandlers() !== null ? this.channelMessageHandlers()!.unpack() : null)
  );
}


unpackTo(_o: DumpT): void {
  _o.pid = this.pid();
  _o.webrtcServerIds = this.bb!.createScalarList(this.webrtcServerIds.bind(this), this.webrtcServerIdsLength());
  _o.routerIds = this.bb!.createScalarList(this.routerIds.bind(this), this.routerIdsLength());
  _o.channelMessageHandlers = (this.channelMessageHandlers() !== null ? this.channelMessageHandlers()!.unpack() : null);
}
}

export class DumpT {
constructor(
  public pid: bigint = BigInt('0'),
  public webrtcServerIds: (string)[] = [],
  public routerIds: (string)[] = [],
  public channelMessageHandlers: ChannelMessageHandlersT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const webrtcServerIds = Dump.createWebrtcServerIdsVector(builder, builder.createObjectOffsetList(this.webrtcServerIds));
  const routerIds = Dump.createRouterIdsVector(builder, builder.createObjectOffsetList(this.routerIds));
  const channelMessageHandlers = (this.channelMessageHandlers !== null ? this.channelMessageHandlers!.pack(builder) : 0);

  Dump.startDump(builder);
  Dump.addPid(builder, this.pid);
  Dump.addWebrtcServerIds(builder, webrtcServerIds);
  Dump.addRouterIds(builder, routerIds);
  Dump.addChannelMessageHandlers(builder, channelMessageHandlers);

  return Dump.endDump(builder);
}
}
