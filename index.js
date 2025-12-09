const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();

// Your Telegram Bot Token (BotFather theke je token paiso)
const TOKEN = "8265495082:AAEa3dBoBIa4uR52isoXdawOk-LMFLtEYFc";

// Owner pic URL
const OWNER_PHOTO_URL = "https://files.catbox.moe/tpqa1r.jpg";

// Make bot active with polling
const bot = new TelegramBot(TOKEN, { polling: true });

// ================================
//    START COMMAND — DANGER UI
// ================================
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase();

  if (text === "/start") {
    bot.sendPhoto(chatId, OWNER_PHOTO_URL, {
      caption:
        "🔥 WELCOME TO CK-ERROR DANGER BOT\n" +
        "💀 High-Security Telegram System Loaded...\n\n" +
        "⚡ Type /menu to open main panel.",
      parse_mode: "Markdown"
    });
  }

  // ================================
  //      MAIN MENU PANEL
  // ================================
  if (text === "/menu") {
    bot.sendMessage(
      chatId,
      "⚡ CK-ERROR MAIN CONTROL PANEL\n" +
      "💻 Select an operation from below:",
      {
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "👤 Owner", callback_data: "owner" },
              { text: "📜 Help", callback_data: "help" }
            ],
            [
              { text: "⚡ Ping", callback_data: "ping" }
            ],
            [
              { text: "🚀 Tools", callback_data: "tools" }
            ],
            [
              { text: "💣 Hacker Panel", callback_data: "hack_menu" }
            ],
            [
              { text: "🌐 Join Channel", url: "https://t.me/CK_ERROR_CHANNEL" }
            ]
          ]
        }
      }
    );
  }
});

// ================================
//    BUTTON HANDLER
// ================================
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  // 👤 Owner button
  if (query.data === "owner") {
    bot.sendPhoto(chatId, OWNER_PHOTO_URL, {
      caption:
        "👤 Owner: CK-ERROR\n" +
        "⚡ Professional Hacker | Developer | Creator\n",
      parse_mode: "Markdown"
    });
  }

  // 📜 Help
  if (query.data === "help") {
    bot.sendMessage(
      chatId,
      "📜 HELP PANEL\n\n" +
      "Use the main menu to select features.\n" +
      "If you need custom tools — bolo dada! 😎",
      { parse_mode: "Markdown" }
    );
  }

  // ⚡ Ping
  if (query.data === "ping") {
    bot.sendMessage(chatId, "🏓 PONG! — Bot is ALIVE ⚡");
  }

  // 🚀 Tools
  if (query.data === "tools") {
    bot.sendMessage(
      chatId,
      "🛠 TOOLS AVAILABLE SOON\n" +
      "➤ Number Info\n" +
      "➤ Text Encryptor\n" +
      "➤ IP Lookup\n" +
      "➤ Fake Info Generator\n\n" +
      "Want full tools? Bol dada 😈",
      { parse_mode: "Markdown" }
    );
  }

  // 💣 Hacker Panel
  if (query.data === "hack_menu") {
    bot.sendMessage(
      chatId,
      "💀 HACKER DANGER PANEL ACTIVATED\n\n" +
      "✔ System Scanner\n" +
      "✔ Dark Web Tools\n" +
      "✔ Device Analyzer\n" +
      "✔ Proxy Setup\n\n" +
      "(This is only UI. Real tools add korte hole bolo!)",
      { parse_mode: "Markdown" }
    );
  }
});

// EXPRESS SERVER — Render er optional ping
app.get("/", (req, res) => {
  res.send("CK-ERROR DANGER BOT RUNNING");
});

app.listen(3000, () => console.log("Server alive on 3000"));
