# 🔔 WhatsApp Alarm Bot via Zawa

Bot ini secara otomatis mengirimkan pesan alarm dan pengingat ke WhatsApp menggunakan [Zawa API](https://zawa.azickri.com) dan dijalankan melalui GitHub Actions (tanpa server).

## 📦 Fitur

- ⏰ Kirim alarm pagi otomatis jam 06.00 WIB
- 📝 Pengingat absen pagi jam 08.15 WIB
- 📌 Pengingat absen sore jam 17.10 WIB
- Dapat dijalankan manual via tombol `Run workflow`
- Tidak perlu server (gunakan GitHub Actions)

---

## ⚙️ Teknologi

- Node.js
- Axios
- dotenv
- GitHub Actions (cron + workflow dispatch)
- Zawa API (WhatsApp Gateway)

---

## 🚀 Cara Deploy

### 1. Clone Repo

```bash
git clone https://github.com/username/whatsapp-alarm-bot.git
cd whatsapp-alarm-bot
