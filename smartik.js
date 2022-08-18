import { Telegraf } from 'telegraf';
import fetch from 'node-fetch';
import randomPhraseGenerator from './modules/randomPhraseGenerator.js';
import phrasesRecord  from './modules/phrasesRecord.js';
import checkTriggerWords  from './modules/checkTriggerWords.js';
import token from './telegramToken.js';
const bot = new Telegraf(token);

bot.command('menu', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, "Menu",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Поточна погода в Києві", callback_data: "weather" },
          ]
        ]
      }
    }
  );
  bot.on('callback_query', (callbackQuery) => {
    let data = callbackQuery.update.callback_query.data;
    switch (data) {
      case "weather":
        const API = "https://api.open-meteo.com/v1/forecast?latitude=50.4422&longitude=30.5367&daily=temperature_2m_max&current_weather=true&timezone=auto";
        const sendRequest = (url) => fetch(url).then(response => response.json()).then(data => {
          const {temperature, windspeed} = data.current_weather;
          ctx.reply(`
          Поточна погода в Києві:
          Температура - ${temperature}°C
          Швидкість вітру - ${windspeed}Км/год
          `)
        });
        sendRequest(API);
        break;
    }
  })
})

bot.command('ping', ctx => ctx.reply("/pong"));

bot.on('message', ctx => {
  const message = ctx.message.text;
  if (typeof message === 'string' && checkTriggerWords(message)) {
    try {
      phrasesRecord(message);     
    } catch (error) {
      console.log("phrase record error");
    }
    ctx.reply(randomPhraseGenerator());
  }
});

bot.launch();

// let phrase = 'Может ты песшить стал "бля, какого хуя? Поехали, бак не пустой, тут не далеко, кассир отмена"';

// if(phrase.includes('"'));
// phrase = phrase.replace(/"/g, " ")
// console.log(phrase);

