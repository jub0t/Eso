use rand;
use rsa::{Pkcs1v15Encrypt, RsaPrivateKey, RsaPublicKey};

pub fn generate_public_key(bits: usize) -> RsaPrivateKey {
    let mut rng = rand::thread_rng();
    let priv_key = RsaPrivateKey::new(&mut rng, bits).expect("failed to generate a key");

    return priv_key;
}
