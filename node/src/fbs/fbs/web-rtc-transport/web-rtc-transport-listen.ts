// automatically generated by the FlatBuffers compiler, do not modify

import { WebRtcTransportListenIndividual, WebRtcTransportListenIndividualT } from '../../fbs/web-rtc-transport/web-rtc-transport-listen-individual';
import { WebRtcTransportListenServer, WebRtcTransportListenServerT } from '../../fbs/web-rtc-transport/web-rtc-transport-listen-server';


export enum WebRtcTransportListen {
  NONE = 0,
  WebRtcTransportListenIndividual = 1,
  WebRtcTransportListenServer = 2
}

export function unionToWebRtcTransportListen(
  type: WebRtcTransportListen,
  accessor: (obj:WebRtcTransportListenIndividual|WebRtcTransportListenServer) => WebRtcTransportListenIndividual|WebRtcTransportListenServer|null
): WebRtcTransportListenIndividual|WebRtcTransportListenServer|null {
  switch(WebRtcTransportListen[type]) {
    case 'NONE': return null; 
    case 'WebRtcTransportListenIndividual': return accessor(new WebRtcTransportListenIndividual())! as WebRtcTransportListenIndividual;
    case 'WebRtcTransportListenServer': return accessor(new WebRtcTransportListenServer())! as WebRtcTransportListenServer;
    default: return null;
  }
}

export function unionListToWebRtcTransportListen(
  type: WebRtcTransportListen, 
  accessor: (index: number, obj:WebRtcTransportListenIndividual|WebRtcTransportListenServer) => WebRtcTransportListenIndividual|WebRtcTransportListenServer|null, 
  index: number
): WebRtcTransportListenIndividual|WebRtcTransportListenServer|null {
  switch(WebRtcTransportListen[type]) {
    case 'NONE': return null; 
    case 'WebRtcTransportListenIndividual': return accessor(index, new WebRtcTransportListenIndividual())! as WebRtcTransportListenIndividual;
    case 'WebRtcTransportListenServer': return accessor(index, new WebRtcTransportListenServer())! as WebRtcTransportListenServer;
    default: return null;
  }
}
