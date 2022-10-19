// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class CloseRouterRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CloseRouterRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCloseRouterRequest(bb:flatbuffers.ByteBuffer, obj?:CloseRouterRequest):CloseRouterRequest {
  return (obj || new CloseRouterRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCloseRouterRequest(bb:flatbuffers.ByteBuffer, obj?:CloseRouterRequest):CloseRouterRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CloseRouterRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

routerId():string|null
routerId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
routerId(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startCloseRouterRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addRouterId(builder:flatbuffers.Builder, routerIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, routerIdOffset, 0);
}

static endCloseRouterRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // router_id
  return offset;
}

static createCloseRouterRequest(builder:flatbuffers.Builder, routerIdOffset:flatbuffers.Offset):flatbuffers.Offset {
  CloseRouterRequest.startCloseRouterRequest(builder);
  CloseRouterRequest.addRouterId(builder, routerIdOffset);
  return CloseRouterRequest.endCloseRouterRequest(builder);
}

unpack(): CloseRouterRequestT {
  return new CloseRouterRequestT(
    this.routerId()
  );
}


unpackTo(_o: CloseRouterRequestT): void {
  _o.routerId = this.routerId();
}
}

export class CloseRouterRequestT {
constructor(
  public routerId: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const routerId = (this.routerId !== null ? builder.createString(this.routerId!) : 0);

  return CloseRouterRequest.createCloseRouterRequest(builder,
    routerId
  );
}
}
