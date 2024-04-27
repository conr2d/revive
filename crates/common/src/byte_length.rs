//!
//! The common sizes in bytes.
//!

/// The byte-length.
pub const BYTE_LENGTH_BYTE: usize = 1;

/// The x86 word byte-length.
pub const BYTE_LENGTH_X32: usize = 4;

/// Native stack alignment size in bytes
pub const BYTE_LENGTH_STACK_ALIGN: usize = BYTE_LENGTH_X64;

/// The x86_64 word byte-length.
pub const BYTE_LENGTH_X64: usize = 8;

/// The ETH address byte-length.
pub const BYTE_LENGTH_ETH_ADDRESS: usize = 20;

/// The field byte-length.
pub const BYTE_LENGTH_FIELD: usize = 32;

/// Byte length of the runtime value type.
pub const BYTE_LENGTH_VALUE: usize = 16;
