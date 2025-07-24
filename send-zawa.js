// send-zawa.js
const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api-zawa.azickri.com/message";
const ID = 6881a2da9ce087ceba8cd495;
const SESSION_ID = e3d88fb2-7665-4310-9288-f77352f5bc9b;
const TO = process.env.ZAWA_TO;
const TEXT = process.argv[2]; // pesan teks langsung

if (!TEXT || !ID || !SESSION_ID || !TO) {
  console.error("❌ Missing required variables.");
  process.exit(1);
}

axios.post(API_URL, {
  phone: TO,
  type: "text",
  text: TEXT
}, {
  headers: {
    'id': ID,
    'session-id': SESSION_ID,
    'Content-Type': 'application/json'
  }
}).then(() => {
  console.log("✅ Message sent to:", TO);
}).catch(err => {
  console.error("❌ Failed:", err.response?.data || err.message);
  console.log({ ID, SESSION_ID, TO, TEXT });
  process.exit(1);
});
