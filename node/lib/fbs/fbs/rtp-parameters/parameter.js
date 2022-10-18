"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterT = exports.Parameter = void 0;
const flatbuffers = require("flatbuffers");
const value_1 = require("../../fbs/rtp-parameters/value");
class Parameter {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsParameter(bb, obj) {
        return (obj || new Parameter()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsParameter(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Parameter()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    name(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    valueType() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : value_1.Value.NONE;
    }
    value(obj) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
    }
    static startParameter(builder) {
        builder.startObject(3);
    }
    static addName(builder, nameOffset) {
        builder.addFieldOffset(0, nameOffset, 0);
    }
    static addValueType(builder, valueType) {
        builder.addFieldInt8(1, valueType, value_1.Value.NONE);
    }
    static addValue(builder, valueOffset) {
        builder.addFieldOffset(2, valueOffset, 0);
    }
    static endParameter(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createParameter(builder, nameOffset, valueType, valueOffset) {
        Parameter.startParameter(builder);
        Parameter.addName(builder, nameOffset);
        Parameter.addValueType(builder, valueType);
        Parameter.addValue(builder, valueOffset);
        return Parameter.endParameter(builder);
    }
    unpack() {
        return new ParameterT(this.name(), this.valueType(), (() => {
            let temp = (0, value_1.unionToValue)(this.valueType(), this.value.bind(this));
            if (temp === null) {
                return null;
            }
            return temp.unpack();
        })());
    }
    unpackTo(_o) {
        _o.name = this.name();
        _o.valueType = this.valueType();
        _o.value = (() => {
            let temp = (0, value_1.unionToValue)(this.valueType(), this.value.bind(this));
            if (temp === null) {
                return null;
            }
            return temp.unpack();
        })();
    }
}
exports.Parameter = Parameter;
class ParameterT {
    name;
    valueType;
    value;
    constructor(name = null, valueType = value_1.Value.NONE, value = null) {
        this.name = name;
        this.valueType = valueType;
        this.value = value;
    }
    pack(builder) {
        const name = (this.name !== null ? builder.createString(this.name) : 0);
        const value = builder.createObjectOffset(this.value);
        return Parameter.createParameter(builder, name, this.valueType, value);
    }
}
exports.ParameterT = ParameterT;
