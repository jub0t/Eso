// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
pub mod database;
pub mod pgp;

extern crate rsa;

fn main() {
    eso_lib::run()
}
