const axios = require("axios");
require("dotenv").config(); // ✅ INI PENTING!

const API_URL = "https://api-zawa.azickri.com/message";
const ID = process.env.ZAWA_ID;
const SESSION_ID = process.env.ZAWA_SESSION_ID;
const MESSAGE_ID = process.argv[2]; // ID template dari argumen CLI

if (!MESSAGE_ID || !ID || !SESSION_ID) {
  console.error("Missing required variables.");
  process.exit(1);
}

axios.post(API_URL, {
  messageId: MESSAGE_ID
}, {
  headers: {
    'id': ID,
    'session-id': SESSION_ID,
    'Content-Type': 'application/json'
  }
}).then(() => {
  console.log("✅ Message sent:", MESSAGE_ID);
}).catch(err => {
  console.error("❌ Failed:", err.response?.data || err.message);
  process.exit(1);
});
