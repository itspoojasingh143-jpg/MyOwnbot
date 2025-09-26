
// api/bot.js
import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start command
bot.start(ctx => ctx.reply('Namaste! Apna Roll Number bhejo.'));

// On text (roll number input)
bot.on('text', ctx => {
  const roll = ctx.message.text.trim();
  if(!/^\d+$/.test(roll)) {
    return ctx.reply('❌ Sahi Roll Number bhejo (sirf numbers)');
  }
  // Dummy result
  ctx.reply(`📊 Result for Roll ${roll}\nName: Demo Student\nMarks: 450/500\nStatus: PASS ✅`);
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    await bot.handleUpdate(req.body, res);
    res.status(200).end();
  } else {
    res.status(200).send("Bot is running...");
  }
}
