
const TelegramBot = require('node-telegram-bot-api');

// TOKEN БОТА
const token = '8647548050:AAHcq9UtZrOa1pzIgdoEa9qvw1N4YeZq3a8';

// ТВОЙ TELEGRAM ID
const ADMIN_ID = 5999138785;

const bot = new TelegramBot(token, { polling: true });

// Хранилище пользователей
const waitingUsers = {};

// START
bot.onText(/\/start/, (msg) => {

    const chatId = msg.chat.id;

    const text = `
🔥 Добро пожаловать!

🍑 НА ПОПУЛЯРНЫЕ СЛИВЫ КАЗАШЕК

━━━━━━━━━━━━━━

🫦 Видео МЕРЕКЕ №1 — 500 тг

🐥 Видео ДАРИ №2 — 500 тг

😻 Видео Айым №3 — 500 тг

🎁 Комплект из трех — 1000 тг

🎦 Доступ тгк канал — 2000 тг

━━━━━━━━━━━━━━

✅ Доступ после оплаты
`;

    const options = {
        reply_markup: {
            inline_keyboard: [

                [
                    {
                        text: '🛒 Купить Видео 1',
                        callback_data: 'buy1'
                    }
                ],

                [
                    {
                        text: '🛒 Купить Видео 2',
                        callback_data: 'buy2'
                    }
                ],

                [
                    {
                        text: '🛒 Купить Видео 3',
                        callback_data: 'buy3'
                    }
                ],

                [
                    {
                        text: '🎁 Купить комплект',
                        callback_data: 'buyall'
                    }
                ],

                [
                    {
                        text: '🎦 Доступ TGK канал',
                        callback_data: 'tgk'
                    }
                ],

                [
                    {
                        text: '⭐ Отзывы',
                        callback_data: 'reviews'
                    }
                ],

                [
                    {
                        text: '📞 Связаться',
                        callback_data: 'contact'
                    }
                ],

                [
                    {
                        text: '📖 Инструкция',
                        callback_data: 'help'
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, text, options);
});

// CALLBACK
bot.on('callback_query', (query) => {

    const chatId = query.message.chat.id;
    const data = query.data;

    // ВИДЕО 1
    if (data === 'buy1') {

        waitingUsers[chatId] = 'Видео №1';

        bot.sendMessage(chatId,
`💳 ОПЛАТА Видео №1

💰 Стоимость: 500 тг

📱 Оплата на card:

4400 4302 1066 1242

После оплаты:
1️⃣ Нажмите кнопку ниже
2️⃣ Отправьте чек`,
{
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '✅ Я оплатил',
                    callback_data: 'paid'
                }
            ]
        ]
    }
});

    }

    // ВИДЕО 2
    if (data === 'buy2') {

        waitingUsers[chatId] = 'Видео №2';

        bot.sendMessage(chatId,
`💳 ОПЛАТА Видео №2

💰 Стоимость: 500 тг

📱 Оплата на card:

4400 4302 1066 1242

После оплаты:
1️⃣ Нажмите кнопку ниже
2️⃣ Отправьте чек`,
{
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '✅ Я оплатил',
                    callback_data: 'paid'
                }
            ]
        ]
    }
});

    }

    // ВИДЕО 3
    if (data === 'buy3') {

        waitingUsers[chatId] = 'Видео №3';

        bot.sendMessage(chatId,
`💳 ОПЛАТА Видео №3

💰 Стоимость: 500 тг

📱 Оплата на card:

4400 4302 1066 1242

После оплаты:
1️⃣ Нажмите кнопку ниже
2️⃣ Отправьте чек`,
{
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '✅ Я оплатил',
                    callback_data: 'paid'
                }
            ]
        ]
    }
});

    }

    // КОМПЛЕКТ
    if (data === 'buyall') {

        waitingUsers[chatId] = 'Комплект';

        bot.sendMessage(chatId,
`🔥 КОМПЛЕКТ СО СКИДКОЙ

📦 3 видео

💰 Стоимость: 1000 тг

📱 Оплата на card:

4400 4302 1066 1242

После оплаты:
1️⃣ Нажмите кнопку ниже
2️⃣ Отправьте чек`,
{
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '✅ Я оплатил',
                    callback_data: 'paid'
                }
            ]
        ]
    }
});

    }

    // TGK
    if (data === 'tgk') {

        waitingUsers[chatId] = 'TGK Канал';

        bot.sendMessage(chatId,
`🎦 ДОСТУП TGK КАНАЛ

💰 Стоимость: 2000 тг

📱 Оплата на card:

4400 4302 1066 1242

После оплаты:
1️⃣ Нажмите кнопку ниже
2️⃣ Отправьте чек`,
{
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '✅ Я оплатил',
                    callback_data: 'paid'
                }
            ]
        ]
    }
});

    }

    // ОПЛАТИЛ
    if (data === 'paid') {

        bot.sendMessage(chatId,
`📸 Теперь отправьте чек или скриншот оплаты.`);
    }

    // ОТЗЫВЫ
    if (data === 'reviews') {

        bot.sendMessage(chatId,
`⭐ ОТЗЫВЫ

🔥 Всё пришло

🔥 Спасибо большое

🔥 Быстро ответили`);
    }

    // КОНТАКТЫ
    if (data === 'contact') {

        bot.sendMessage(chatId,
`📞 СВЯЗЬ СО МНОЙ

Telegram:
@hotgirls

Телефон:
+7777777777`);
    }

    // ИНСТРУКЦИЯ
    if (data === 'help') {

        bot.sendMessage(chatId,
`📖 ИНСТРУКЦИЯ

1️⃣ Выберите Видео

2️⃣ Оплатите

3️⃣ Отправьте чек

4️⃣ Дождитесь подтверждения

5️⃣ Получите доступ`);
    }

    // ПОДТВЕРЖДЕНИЕ
    if (data.startsWith('accept_')) {

        const userId = data.split('_')[1];

        bot.sendMessage(userId,
`✅ Оплата подтверждена!

🎉 Спасибо за покупку.`);

        bot.answerCallbackQuery(query.id, {
            text: 'Оплата подтверждена'
        });
    }

    // ОТКЛОНЕНИЕ
    if (data.startsWith('decline_')) {

        const userId = data.split('_')[1];

        bot.sendMessage(userId,
`❌ Оплата отклонена.

Проверьте оплату и попробуйте снова.`);

        bot.answerCallbackQuery(query.id, {
            text: 'Оплата отклонена'
        });
    }

});

// ПРИЁМ ФОТО
bot.on('photo', (msg) => {

    const chatId = msg.chat.id;

    const photo = msg.photo[msg.photo.length - 1].file_id;

    const course = waitingUsers[chatId] || 'Неизвестный товар';

    bot.sendPhoto(ADMIN_ID, photo, {

        caption:
`💰 НОВАЯ ОПЛАТА

👤 Пользователь: ${chatId}

📦 Товар: ${course}`,

        reply_markup: {
            inline_keyboard: [

                [
                    {
                        text: '✅ Подтвердить',
                        callback_data: `accept_${chatId}`
                    }
                ],

                [
                    {
                        text: '❌ Отклонить',
                        callback_data: `decline_${chatId}`
                    }
                ]
            ]
        }
    });

    bot.sendMessage(chatId,
`⏳ Чек отправлен на проверку.`);
});

// ПРИЁМ ФАЙЛОВ
bot.on('document', (msg) => {

    const chatId = msg.chat.id;

    const document = msg.document.file_id;

    const course = waitingUsers[chatId] || 'Неизвестный товар';

    bot.sendDocument(ADMIN_ID, document, {

        caption:
`💰 НОВАЯ ОПЛАТА

👤 Пользователь: ${chatId}

📦 Товар: ${course}`,

        reply_markup: {
            inline_keyboard: [

                [
                    {
                        text: '✅ Подтвердить',
                        callback_data: `accept_${chatId}`
                    }
                ],

                [
                    {
                        text: '❌ Отклонить',
                        callback_data: `decline_${chatId}`
                    }
                ]
            ]
        }
    });

    bot.sendMessage(chatId,
`⏳ Чек отправлен на проверку.`);
});

console.log('Бот запущен 🚀');
