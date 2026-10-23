import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = localFont({
    src: './fonts/Montserrat-VariableFont_wght.ttf',
    variable: '--font-montserrat',
    weight: '300 400 500 600 700 900',
});

const montserratItalic = localFont({
    src: './fonts/Montserrat-Italic-VariableFont_wght.ttf',
    variable: '--font-montserrat-italic',
    weight: '300 400 500 600 700 900',
});

export const metadata: Metadata = {
    title: 'Пожаростойкие пластиковые трубы Antifire',
    description:
        'Пожаростойкие пластиковые трубы Antifire для систем пожаротушения',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${montserratItalic.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
