"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionListToSpecificTransportDumpData = exports.unionToSpecificTransportDumpData = exports.SpecificTransportDumpData = void 0;
const web_rtc_transport_dump_1 = require("../../fbs/transport/web-rtc-transport-dump");
var SpecificTransportDumpData;
(function (SpecificTransportDumpData) {
    SpecificTransportDumpData[SpecificTransportDumpData["NONE"] = 0] = "NONE";
    SpecificTransportDumpData[SpecificTransportDumpData["WebRtcTransportDump"] = 1] = "WebRtcTransportDump";
})(SpecificTransportDumpData = exports.SpecificTransportDumpData || (exports.SpecificTransportDumpData = {}));
function unionToSpecificTransportDumpData(type, accessor) {
    switch (SpecificTransportDumpData[type]) {
        case 'NONE': return null;
        case 'WebRtcTransportDump': return accessor(new web_rtc_transport_dump_1.WebRtcTransportDump());
        default: return null;
    }
}
exports.unionToSpecificTransportDumpData = unionToSpecificTransportDumpData;
function unionListToSpecificTransportDumpData(type, accessor, index) {
    switch (SpecificTransportDumpData[type]) {
        case 'NONE': return null;
        case 'WebRtcTransportDump': return accessor(index, new web_rtc_transport_dump_1.WebRtcTransportDump());
        default: return null;
    }
}
exports.unionListToSpecificTransportDumpData = unionListToSpecificTransportDumpData;
