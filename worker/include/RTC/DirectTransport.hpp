#ifndef MS_RTC_DIRECT_TRANSPORT_HPP
#define MS_RTC_DIRECT_TRANSPORT_HPP

#include "RTC/Transport.hpp"

namespace RTC
{
	class DirectTransport : public RTC::Transport
	{
	public:
		DirectTransport(
		  const std::string& id,
		  RTC::Transport::Listener* listener,
		  const FBS::DirectTransport::DirectTransportOptions* options);
		~DirectTransport() override;

	public:
		void FillJsonStats(json& jsonArray) override;
		virtual flatbuffers::Offset<FBS::Transport::DumpResponse> FillBuffer(
		  flatbuffers::FlatBufferBuilder& builder) const override;

	private:
		bool IsConnected() const override;
		void SendRtpPacket(
		  RTC::Consumer* consumer,
		  RTC::RtpPacket* packet,
		  RTC::Transport::onSendCallback* cb = nullptr) override;
		void SendRtcpPacket(RTC::RTCP::Packet* packet) override;
		void SendRtcpCompoundPacket(RTC::RTCP::CompoundPacket* packet) override;
		void SendMessage(
		  RTC::DataConsumer* dataConsumer,
		  uint32_t ppid,
		  const uint8_t* msg,
		  size_t len,
		  onQueuedCallback* cb = nullptr) override;
		void SendSctpData(const uint8_t* data, size_t len) override;
		void RecvStreamClosed(uint32_t ssrc) override;
		void SendStreamClosed(uint32_t ssrc) override;

		/* Methods inherited from Channel::ChannelSocket::RequestHandler. */
	public:
		void HandleRequest(Channel::ChannelRequest* request) override;

		/* Methods inherited from PayloadChannel::PayloadChannelSocket::NotificationHandler. */
	public:
		void HandleNotification(PayloadChannel::PayloadChannelNotification* notification) override;
	};
} // namespace RTC

#endif
