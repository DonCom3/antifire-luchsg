'use server';

import nodemailer from 'nodemailer';
import TelegramBot from 'node-telegram-bot-api';

const telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN || '', {
    polling: false,
});

interface RequestData {
    name: string;
    phone: string;
    email: string;
}

export async function submitRequest(data: RequestData) {
    const { name, phone, email } = data;
    const message = `Новая заявка:
Имя: ${name}
Номер телефона: ${phone}
Email: ${email}`;

    const results = {
        email: false,
        telegram: false,
        error: null as string | null,
    };

    try {
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        const emailTo = process.env.EMAIL_TO || 'ekzo.tech@gmail.com';

        if (emailUser && emailPass) {
            try {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.yandex.ru',
                    port: 465,
                    secure: true,
                    auth: {
                        user: emailUser,
                        pass: emailPass,
                    },
                });

                await transporter.sendMail({
                    from: emailUser,
                    to: emailTo,
                    subject: 'Новая заявка с сайта',
                    text: message,
                });

                results.email = true;
            } catch (error) {
                console.error('Email sending failed:', error);
            }
        }

        const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
        const telegramChatId = process.env.TELEGRAM_CHAT_ID;

        if (telegramToken && telegramChatId) {
            try {
                await telegramBot.sendMessage(telegramChatId, message);
                results.telegram = true;
            } catch (error) {
                console.error('Telegram sending failed:', error);
                if (error instanceof Error) {
                    console.error('Telegram error details:', error.message);
                }
            }
        }

        if (!results.email && !results.telegram) {
            return {
                success: false,
                error: 'Failed to send notifications through any channel',
            };
        }

        return {
            success: true,
            results,
        };
    } catch (error) {
        console.error('Request submission failed:', error);
        return {
            success: false,
            error: 'Failed to process request',
            results,
        };
    }
}
