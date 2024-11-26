use serde::{Deserialize, Serialize};
use std::borrow:Cow;
use surrealdb::{Surreal};

#[derive(Serialize, Deserialize)]
struct Key {
    name: Cow<'static, str>,
}

struct Core {}
impl Core {
    pub fn new()->Self{
        let db = Surreal::new();
        return Self {

        };
    }
}
