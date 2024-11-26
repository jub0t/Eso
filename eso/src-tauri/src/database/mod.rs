use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Key {
    name: Cow<'static, str>,
}
