"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRtcServerDumpT = exports.WebRtcServerDump = void 0;
const flatbuffers = require("flatbuffers");
const ice_user_name_fragment_1 = require("../../fbs/web-rtc-server/ice-user-name-fragment");
const ip_port_1 = require("../../fbs/web-rtc-server/ip-port");
const tuple_hash_1 = require("../../fbs/web-rtc-server/tuple-hash");
class WebRtcServerDump {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsWebRtcServerDump(bb, obj) {
        return (obj || new WebRtcServerDump()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsWebRtcServerDump(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new WebRtcServerDump()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    id(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    udpSockets(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new ip_port_1.IpPort()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    udpSocketsLength() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    tcpServers(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new ip_port_1.IpPort()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    tcpServersLength() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    webRtcTransportIds(index, optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
    }
    webRtcTransportIdsLength() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    localIceUsernameFragments(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new ice_user_name_fragment_1.IceUserNameFragment()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    localIceUsernameFragmentsLength() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    tupleHashes(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? (obj || new tuple_hash_1.TupleHash()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    tupleHashesLength() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startWebRtcServerDump(builder) {
        builder.startObject(6);
    }
    static addId(builder, idOffset) {
        builder.addFieldOffset(0, idOffset, 0);
    }
    static addUdpSockets(builder, udpSocketsOffset) {
        builder.addFieldOffset(1, udpSocketsOffset, 0);
    }
    static createUdpSocketsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startUdpSocketsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addTcpServers(builder, tcpServersOffset) {
        builder.addFieldOffset(2, tcpServersOffset, 0);
    }
    static createTcpServersVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startTcpServersVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addWebRtcTransportIds(builder, webRtcTransportIdsOffset) {
        builder.addFieldOffset(3, webRtcTransportIdsOffset, 0);
    }
    static createWebRtcTransportIdsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startWebRtcTransportIdsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addLocalIceUsernameFragments(builder, localIceUsernameFragmentsOffset) {
        builder.addFieldOffset(4, localIceUsernameFragmentsOffset, 0);
    }
    static createLocalIceUsernameFragmentsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startLocalIceUsernameFragmentsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static addTupleHashes(builder, tupleHashesOffset) {
        builder.addFieldOffset(5, tupleHashesOffset, 0);
    }
    static createTupleHashesVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startTupleHashesVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static endWebRtcServerDump(builder) {
        const offset = builder.endObject();
        builder.requiredField(offset, 4); // id
        return offset;
    }
    static createWebRtcServerDump(builder, idOffset, udpSocketsOffset, tcpServersOffset, webRtcTransportIdsOffset, localIceUsernameFragmentsOffset, tupleHashesOffset) {
        WebRtcServerDump.startWebRtcServerDump(builder);
        WebRtcServerDump.addId(builder, idOffset);
        WebRtcServerDump.addUdpSockets(builder, udpSocketsOffset);
        WebRtcServerDump.addTcpServers(builder, tcpServersOffset);
        WebRtcServerDump.addWebRtcTransportIds(builder, webRtcTransportIdsOffset);
        WebRtcServerDump.addLocalIceUsernameFragments(builder, localIceUsernameFragmentsOffset);
        WebRtcServerDump.addTupleHashes(builder, tupleHashesOffset);
        return WebRtcServerDump.endWebRtcServerDump(builder);
    }
    unpack() {
        return new WebRtcServerDumpT(this.id(), this.bb.createObjList(this.udpSockets.bind(this), this.udpSocketsLength()), this.bb.createObjList(this.tcpServers.bind(this), this.tcpServersLength()), this.bb.createScalarList(this.webRtcTransportIds.bind(this), this.webRtcTransportIdsLength()), this.bb.createObjList(this.localIceUsernameFragments.bind(this), this.localIceUsernameFragmentsLength()), this.bb.createObjList(this.tupleHashes.bind(this), this.tupleHashesLength()));
    }
    unpackTo(_o) {
        _o.id = this.id();
        _o.udpSockets = this.bb.createObjList(this.udpSockets.bind(this), this.udpSocketsLength());
        _o.tcpServers = this.bb.createObjList(this.tcpServers.bind(this), this.tcpServersLength());
        _o.webRtcTransportIds = this.bb.createScalarList(this.webRtcTransportIds.bind(this), this.webRtcTransportIdsLength());
        _o.localIceUsernameFragments = this.bb.createObjList(this.localIceUsernameFragments.bind(this), this.localIceUsernameFragmentsLength());
        _o.tupleHashes = this.bb.createObjList(this.tupleHashes.bind(this), this.tupleHashesLength());
    }
}
exports.WebRtcServerDump = WebRtcServerDump;
class WebRtcServerDumpT {
    id;
    udpSockets;
    tcpServers;
    webRtcTransportIds;
    localIceUsernameFragments;
    tupleHashes;
    constructor(id = null, udpSockets = [], tcpServers = [], webRtcTransportIds = [], localIceUsernameFragments = [], tupleHashes = []) {
        this.id = id;
        this.udpSockets = udpSockets;
        this.tcpServers = tcpServers;
        this.webRtcTransportIds = webRtcTransportIds;
        this.localIceUsernameFragments = localIceUsernameFragments;
        this.tupleHashes = tupleHashes;
    }
    pack(builder) {
        const id = (this.id !== null ? builder.createString(this.id) : 0);
        const udpSockets = WebRtcServerDump.createUdpSocketsVector(builder, builder.createObjectOffsetList(this.udpSockets));
        const tcpServers = WebRtcServerDump.createTcpServersVector(builder, builder.createObjectOffsetList(this.tcpServers));
        const webRtcTransportIds = WebRtcServerDump.createWebRtcTransportIdsVector(builder, builder.createObjectOffsetList(this.webRtcTransportIds));
        const localIceUsernameFragments = WebRtcServerDump.createLocalIceUsernameFragmentsVector(builder, builder.createObjectOffsetList(this.localIceUsernameFragments));
        const tupleHashes = WebRtcServerDump.createTupleHashesVector(builder, builder.createObjectOffsetList(this.tupleHashes));
        return WebRtcServerDump.createWebRtcServerDump(builder, id, udpSockets, tcpServers, webRtcTransportIds, localIceUsernameFragments, tupleHashes);
    }
}
exports.WebRtcServerDumpT = WebRtcServerDumpT;
