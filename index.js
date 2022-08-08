const TelegramApi = require('node-telegram-bot-api');

const token = '5500741093:AAGQYfS8OmQWPlA5yrTxkbV0zSsJ8YXjaaw';
const bot = new TelegramApi(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Получить информацию о пользователе'},
    {command: '/vacations', description: 'Регламентирование образовательного процесса на 2022-2023 учебный год'},
    //{command: '/game', description: 'Игра угадай цифру'},
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    
    if (text === '/start') {
        await bot.sendPhoto(chatId, 'https://pbs.twimg.com/profile_images/891662882903130112/kDs2pRMr_400x400.jpg');
        //await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/80c/d19/80cd192c-d4f4-44c1-aaf2-03ed02c66b0c/1.webp');
        await bot.sendMessage(chatId, `Добро пожаловать в официальный канал ГБОУ Школа № 201`);
    }

    if (text === '/info') {
        await bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
    }
    if (text === '/vacations') {
        await bot.sendDocument(chatId, `./documents/vacations.pdf`);
    }
})