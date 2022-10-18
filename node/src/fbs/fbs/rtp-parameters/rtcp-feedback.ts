// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class RtcpFeedback {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RtcpFeedback {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRtcpFeedback(bb:flatbuffers.ByteBuffer, obj?:RtcpFeedback):RtcpFeedback {
  return (obj || new RtcpFeedback()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRtcpFeedback(bb:flatbuffers.ByteBuffer, obj?:RtcpFeedback):RtcpFeedback {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RtcpFeedback()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

type():string|null
type(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
type(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

parameter():string|null
parameter(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
parameter(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startRtcpFeedback(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addType(builder:flatbuffers.Builder, typeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, typeOffset, 0);
}

static addParameter(builder:flatbuffers.Builder, parameterOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, parameterOffset, 0);
}

static endRtcpFeedback(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // type
  return offset;
}

static createRtcpFeedback(builder:flatbuffers.Builder, typeOffset:flatbuffers.Offset, parameterOffset:flatbuffers.Offset):flatbuffers.Offset {
  RtcpFeedback.startRtcpFeedback(builder);
  RtcpFeedback.addType(builder, typeOffset);
  RtcpFeedback.addParameter(builder, parameterOffset);
  return RtcpFeedback.endRtcpFeedback(builder);
}

unpack(): RtcpFeedbackT {
  return new RtcpFeedbackT(
    this.type(),
    this.parameter()
  );
}


unpackTo(_o: RtcpFeedbackT): void {
  _o.type = this.type();
  _o.parameter = this.parameter();
}
}

export class RtcpFeedbackT {
constructor(
  public type: string|Uint8Array|null = null,
  public parameter: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const type = (this.type !== null ? builder.createString(this.type!) : 0);
  const parameter = (this.parameter !== null ? builder.createString(this.parameter!) : 0);

  return RtcpFeedback.createRtcpFeedback(builder,
    type,
    parameter
  );
}
}
