// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_DIRECTTRANSPORT_FBS_DIRECTTRANSPORT_H_
#define FLATBUFFERS_GENERATED_DIRECTTRANSPORT_FBS_DIRECTTRANSPORT_H_

#include "flatbuffers/flatbuffers.h"

// Ensure the included flatbuffers.h is the same version as when this file was
// generated, otherwise it may not be compatible.
static_assert(FLATBUFFERS_VERSION_MAJOR == 2 &&
              FLATBUFFERS_VERSION_MINOR == 0 &&
              FLATBUFFERS_VERSION_REVISION == 8,
             "Non-compatible flatbuffers version included");

#include "transport_generated.h"

namespace FBS {
namespace DirectTransport {

struct DirectTransportOptions;
struct DirectTransportOptionsBuilder;

inline const flatbuffers::TypeTable *DirectTransportOptionsTypeTable();

struct DirectTransportOptions FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  typedef DirectTransportOptionsBuilder Builder;
  static const flatbuffers::TypeTable *MiniReflectTypeTable() {
    return DirectTransportOptionsTypeTable();
  }
  enum FlatBuffersVTableOffset FLATBUFFERS_VTABLE_UNDERLYING_TYPE {
    VT_BASE = 4
  };
  const FBS::Transport::BaseTransportOptions *base() const {
    return GetPointer<const FBS::Transport::BaseTransportOptions *>(VT_BASE);
  }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyOffset(verifier, VT_BASE) &&
           verifier.VerifyTable(base()) &&
           verifier.EndTable();
  }
};

struct DirectTransportOptionsBuilder {
  typedef DirectTransportOptions Table;
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_base(flatbuffers::Offset<FBS::Transport::BaseTransportOptions> base) {
    fbb_.AddOffset(DirectTransportOptions::VT_BASE, base);
  }
  explicit DirectTransportOptionsBuilder(flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  flatbuffers::Offset<DirectTransportOptions> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = flatbuffers::Offset<DirectTransportOptions>(end);
    return o;
  }
};

inline flatbuffers::Offset<DirectTransportOptions> CreateDirectTransportOptions(
    flatbuffers::FlatBufferBuilder &_fbb,
    flatbuffers::Offset<FBS::Transport::BaseTransportOptions> base = 0) {
  DirectTransportOptionsBuilder builder_(_fbb);
  builder_.add_base(base);
  return builder_.Finish();
}

inline const flatbuffers::TypeTable *DirectTransportOptionsTypeTable() {
  static const flatbuffers::TypeCode type_codes[] = {
    { flatbuffers::ET_SEQUENCE, 0, 0 }
  };
  static const flatbuffers::TypeFunction type_refs[] = {
    FBS::Transport::BaseTransportOptionsTypeTable
  };
  static const char * const names[] = {
    "base"
  };
  static const flatbuffers::TypeTable tt = {
    flatbuffers::ST_TABLE, 1, type_codes, type_refs, nullptr, nullptr, names
  };
  return &tt;
}

}  // namespace DirectTransport
}  // namespace FBS

#endif  // FLATBUFFERS_GENERATED_DIRECTTRANSPORT_FBS_DIRECTTRANSPORT_H_
