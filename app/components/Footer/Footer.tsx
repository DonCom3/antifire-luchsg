import Image from 'next/image';
import styles from './Footer.module.css';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Image
                        src="/antifire-logo.png"
                        alt="Antifire Logo"
                        width={262}
                        height={147}
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Description Column */}
                <div className={styles.description}>
                    <p>Работаем по всей России!</p>
                    <p>Санкт-Петербург</p>
                    <p>Калининград</p>
                    <p>Екатеринбург</p>
                    <p>Пермь</p>
                    <p>Казань</p>
                    <p>Новосибирск</p>
                    <p>Тюмень</p>
                    <p>Омск</p>
                    <p>Нижний Новгород</p>
                    <p>Москва</p>
                    <p>Ижевск</p>
                    <p>Владивосток</p>
                    <p>Краснодар</p>
                    <a href="#">Политика конфиденциальности</a>
                </div>

                {/* Contact Information Column */}
                <div className={styles.contactInfo}>
                    <div className={styles.phone}>
                        <PhoneOutlined className={styles.icon} />
                        <a href="tel:8 (812) 339-69-14">8 (812) 339-69-14</a>
                    </div>
                    <div className={styles.phone}>
                        <PhoneOutlined className={styles.icon} />
                        <a href="tel:8 (812) 926-40-25">8 (812) 926-40-25</a>
                    </div>
                    <div className={styles.email}>
                        <MailOutlined className={styles.icon} />
                        <a href="mailto:info@antifire.spb.ru">
                            info@antifire.spb.ru
                        </a>
                    </div>
                    <div className={styles.address}>
                        Россия, Санкт-Петербург, пр. Тореза, д. 68, корпус 2
                    </div>
                </div>
            </div>
        </section>
    );
}
