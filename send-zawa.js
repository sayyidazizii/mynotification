// send-zawa.js
const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api-zawa.azickri.com/message";
const ID = process.env.ZAWA_ID;
const SESSION_ID = process.env.ZAWA_SESSION_ID;
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
