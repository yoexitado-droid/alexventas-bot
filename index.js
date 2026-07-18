const TelegramBot = require('node-telegram-bot-api');

const token = 'AQUI_VA_TU_NUEVO_TOKEN';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🏪 Bienvenido a AlexVentas", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🛒 Productos", callback_data: "productos" }],
        [{ text: "💰 Comprar", callback_data: "comprar" }],
        [{ text: "👤 Mi Cuenta", callback_data: "cuenta" }],
        [{ text: "📞 Soporte", callback_data: "soporte" }]
      ]
    }
  });
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  if (query.data === "productos") {
    bot.sendMessage(chatId, "📦 Productos:\n\n• HG Cheats\n• Drip Client\n• Prime Hook");
  }

  if (query.data === "comprar") {
    bot.sendMessage(chatId, "💳 Selecciona un producto para comprar.");
  }

  if (query.data === "cuenta") {
    bot.sendMessage(chatId, "👤 Tu cuenta aún no tiene datos.");
  }

  if (query.data === "soporte") {
    bot.sendMessage(chatId, "📞 Contacta al administrador.");
  }

  bot.answerCallbackQuery(query.id);
});
