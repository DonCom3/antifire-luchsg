'use client';
import Carousel from '../Carousel/Carousel';
import { Button, Modal } from 'antd';
import RequestForm from '../RequestForm/RequestForm';
import styles from './Complementary.module.css';
import { useState } from 'react';

interface IComplementaryItem {
    images: string[];
    title: string;
    subtitle: string;
    price: string;
}

const complementaryItems: IComplementaryItem[] = [
    {
        title: 'Гофрированная труба из нержавеющей стали',
        subtitle:
            'Применяется для систем пожаротушения, водо- и газоснабжения. Давление до 15 Атм.',
        images: [
            '/complementary/stainless-steel-pipe-1.webp',
            '/complementary/stainless-steel-pipe-2.webp',
        ],
        price: 'от 115 ₽/метр',
    },
    {
        title: 'Сварочные аппараты и насадки',
        subtitle:
            'Сварочные аппараты мощностью до 2 кВт и весь ассортимент насадок для монтажа труб и фитингов.',
        images: [
            '/complementary/pipe-welder-1.webp',
            '/complementary/pipe-welder-2.webp',
            '/complementary/pipe-welder-3.webp',
        ],
        price: 'от 1650 ₽/шт.',
    },
    {
        title: 'Станции пожаротушения',
        subtitle:
            'Подберем станцию пожаротушения согласно вашим параметрам.Бесплатное тех обслуживание и гарантия до 5 лет. ',
        images: [
            '/complementary/pump-station-1.webp',
            '/complementary/pump-station-2.webp',
        ],
        price: 'Индивидуальный расчёт стоимости',
    },
];

function ComplementaryItem({
    images,
    title,
    subtitle,
    price,
}: IComplementaryItem) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles['complementary-item']}>
            <Carousel images={images} key={title} height={360} width={360} />
            <h6 className={styles['complementary-item-title']}>{title}</h6>
            <p className={styles['complementary-item-subtitle']}>{subtitle}</p>
            <p className={styles['complementary-item-price']}>{price}</p>
            <Button
                type="primary"
                onClick={showModal}
                className={styles['order-button']}
            >
                Заказать
            </Button>
            <Modal
                title={title}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <RequestForm />
            </Modal>
        </div>
    );
}

export default function Complementary() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles.title}>
                        Пожаростойкие трубы разрешено использовать для систем
                        АУПТ и ВПВ в 1, 2, 4.1, 5 и 6 группах помещений.
                    </h2>
                </div>
                <div className={styles['complementary-items-wrapper']}>
                    {complementaryItems.map((item) => (
                        <ComplementaryItem
                            key={item.title}
                            images={item.images}
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
