'use client';

import Image from 'next/image';
import styles from './Customers.module.css';
import { Modal } from 'antd';

import { useState } from 'react';
import RequestForm from '../RequestForm/RequestForm';

const customers: string[] = [
    '/customers/aquilon.webp',
    '/customers/eurostroy.webp',
    '/customers/glorax.webp',
    '/customers/kalashnikov.webp',
    '/customers/kamaz.webp',
    '/customers/kapo.webp',
    '/customers/karusel.webp',
    '/customers/kirov-zavod.webp',
    '/customers/lenta.webp',
    '/customers/lider.webp',
    '/customers/maria.webp',
    '/customers/mirage.webp',
    '/customers/mnogo-mebeli.webp',
    '/customers/nc.webp',
    '/customers/renaissance.webp',
    '/customers/sber.webp',
    '/customers/kp.webp',
    '/customers/samolet.webp',
    '/customers/wb.webp',
    '/customers/pik.webp',
];

export default function Customers() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles.title}>
                        Заказчики, которые выбирают нашу продукцию:
                    </h2>
                </div>
                <div className={styles['customers-wrapper']}>
                    {customers.map((item) => (
                        <Image
                            key={item}
                            src={item}
                            alt={item}
                            width={140}
                            height={140}
                            style={{ objectFit: 'contain' }}
                            className={styles['customer-image']}
                        />
                    ))}
                </div>
            </div>
            <Modal open={isModalOpen} footer={null} onCancel={handleClose}>
                <RequestForm
                    isModal={true}
                    onClose={handleClose}
                    onSuccess={() => {
                        handleClose();
                    }}
                />
            </Modal>
        </section>
    );
}
