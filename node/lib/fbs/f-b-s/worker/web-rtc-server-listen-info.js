"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRtcServerListenInfoT = exports.WebRtcServerListenInfo = void 0;
const flatbuffers = require("flatbuffers");
const transport_protocol_1 = require("../../f-b-s/worker/transport-protocol");
class WebRtcServerListenInfo {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsWebRtcServerListenInfo(bb, obj) {
        return (obj || new WebRtcServerListenInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsWebRtcServerListenInfo(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new WebRtcServerListenInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    protocol() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : transport_protocol_1.TransportProtocol.UDP;
    }
    ip(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    announcedIp(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    port() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
    }
    static startWebRtcServerListenInfo(builder) {
        builder.startObject(4);
    }
    static addProtocol(builder, protocol) {
        builder.addFieldInt8(0, protocol, transport_protocol_1.TransportProtocol.UDP);
    }
    static addIp(builder, ipOffset) {
        builder.addFieldOffset(1, ipOffset, 0);
    }
    static addAnnouncedIp(builder, announcedIpOffset) {
        builder.addFieldOffset(2, announcedIpOffset, 0);
    }
    static addPort(builder, port) {
        builder.addFieldInt16(3, port, 0);
    }
    static endWebRtcServerListenInfo(builder) {
        const offset = builder.endObject();
        builder.requiredField(offset, 6); // ip
        return offset;
    }
    static createWebRtcServerListenInfo(builder, protocol, ipOffset, announcedIpOffset, port) {
        WebRtcServerListenInfo.startWebRtcServerListenInfo(builder);
        WebRtcServerListenInfo.addProtocol(builder, protocol);
        WebRtcServerListenInfo.addIp(builder, ipOffset);
        WebRtcServerListenInfo.addAnnouncedIp(builder, announcedIpOffset);
        WebRtcServerListenInfo.addPort(builder, port);
        return WebRtcServerListenInfo.endWebRtcServerListenInfo(builder);
    }
    unpack() {
        return new WebRtcServerListenInfoT(this.protocol(), this.ip(), this.announcedIp(), this.port());
    }
    unpackTo(_o) {
        _o.protocol = this.protocol();
        _o.ip = this.ip();
        _o.announcedIp = this.announcedIp();
        _o.port = this.port();
    }
}
exports.WebRtcServerListenInfo = WebRtcServerListenInfo;
class WebRtcServerListenInfoT {
    protocol;
    ip;
    announcedIp;
    port;
    constructor(protocol = transport_protocol_1.TransportProtocol.UDP, ip = null, announcedIp = null, port = 0) {
        this.protocol = protocol;
        this.ip = ip;
        this.announcedIp = announcedIp;
        this.port = port;
    }
    pack(builder) {
        const ip = (this.ip !== null ? builder.createString(this.ip) : 0);
        const announcedIp = (this.announcedIp !== null ? builder.createString(this.announcedIp) : 0);
        return WebRtcServerListenInfo.createWebRtcServerListenInfo(builder, this.protocol, ip, announcedIp, this.port);
    }
}
exports.WebRtcServerListenInfoT = WebRtcServerListenInfoT;
