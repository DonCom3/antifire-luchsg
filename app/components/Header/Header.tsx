import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <section className={styles.section}>
            <header className={styles.content}>
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
                    <h4>
                        Производство и поставка противопожарных материалов и
                        оборудования для систем пожаротушения
                    </h4>
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
            </header>
        </section>
    );
}
