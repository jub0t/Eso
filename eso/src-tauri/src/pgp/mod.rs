pub mod message;

use rand::thread_rng;
use rsa::{RsaPrivateKey, RsaPublicKey};

/// Generates an RSA private key with the specified number of bits.
pub fn generate_private_key(bits: usize) -> RsaPrivateKey {
    let mut rng = thread_rng();
    RsaPrivateKey::new(&mut rng, bits).expect("Failed to generate a key")
}

/// Derives an RSA public key from the given private key.
pub fn derive_public_key(private_key: &RsaPrivateKey) -> RsaPublicKey {
    RsaPublicKey::from(private_key)
}
