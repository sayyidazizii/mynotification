const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api-zawa.azickri.com/message";
const ID = process.env.ZAWA_ID;
const SESSION_ID = process.env.ZAWA_SESSION_ID;
const TO = process.env.ZAWA_TO || process.env.WA_NUMBER || "6285602678871";
const MESSAGE_ID = process.argv[2];

if (!MESSAGE_ID || !ID || !SESSION_ID || !TO) {
  console.error("Missing required variables.");
  process.exit(1);
}

axios.post(API_URL, {
  messageId: MESSAGE_ID,
  to: TO    // ✅ Tambahkan nomor tujuan di body request
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
  process.exit(1);
});
