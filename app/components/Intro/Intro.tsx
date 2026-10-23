import styles from './Intro.module.css';
import Cash from '../icons/Cash';
import Document from '../icons/Document';
import Protractor from '../icons/Protractor';
import Time from '../icons/Time';
import PlusMinus from '../icons/PlusMinus';
import RequestForm from '../RequestForm/RequestForm';

interface ProsItemProps {
    title: string;
    description: string;
    icon: React.ReactElement;
}

function ProsItem({ title, description, icon }: ProsItemProps) {
    return (
        <div className={styles['pros-item']}>
            <div className={styles['pros-item-image-wrapper']}>{icon}</div>
            <div className={styles['pros-item-title-wrapper']}>
                <h4 className={styles['pros-item-title']}>{title}</h4>
                <p className={styles['pros-item-subtitle']}>{description}</p>
            </div>
        </div>
    );
}

const pros: ProsItemProps[] = [
    {
        title: 'Труба со сроком службы 50 лет по цене стального трубопровода',
        description:
            'Общая стоимость системы автоматического пожаротушения (материал + монтаж) с использованием труб AntiFire равна стоимости системы с использованием стальных трубопроводов.',
        icon: <Cash color={'#f3ca77'} height={55} width={55} />,
    },
    {
        title: 'Полное соответствие требованиям ГОСТ 58832 и СП 485.1311500.2020',
        description:
            'Пожаростойкие трубы AntiFire прошли огневые испытания на пожаростойкость в Санкт-Петербургском университете ГПС МЧС России и разрешены для применения в 1, 2, 4.1, 5 и 6 группах помещений.',
        icon: <Document color={'#f3ca77'} height={55} width={55} />,
    },
    {
        title: 'Бесплатный гидравлический расчет системы пожаротушения',
        description:
            'Для Вашего удобства, наши проектировщики бесплатно проведут гидравлический расчет и помогут спроектировать систему пожаротушения с нашими трубами.',
        icon: <Protractor color={'#f3ca77'} height={55} width={55} />,
    },
    {
        title: 'Лидер по скорости монтажа',
        description:
            'Скорость монтажа пожаростойких труб в 4 раза выше! Один человек за смену прокладывает 200 метров трубы AntiFire и всего 50 метров стальной.',
        icon: <Time color={'#f3ca77'} height={55} width={55} />,
    },
    {
        title: 'Только плюсы и никаких минусов',
        description:
            'Пожаростойкие трубы не требуют покраски и не ржавеют. В системе пожаротушения  не будут засорятся оросители и задвижки. Стоимость ежегодного обслуживания системы равна нулю.',
        icon: <PlusMinus color={'#f3ca77'} height={55} width={55} />,
    },
];

export default function Intro() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Пожаростойкие пластиковые трубы AntiFire с бесплатной
                    доставкой по России
                </h1>
                <p className={styles.subtitle}>
                    с 2013 года мы реализовали более 1000 объектов по России и
                    СНГ
                </p>
                <div className={styles['pros-form-wrapper']}>
                    <div className={styles['pros-item-wrapper']}>
                        {pros.map((i) => (
                            <ProsItem
                                key={i.title}
                                title={i.title}
                                icon={i.icon}
                                description={i.description}
                            />
                        ))}
                    </div>
                    <RequestForm />
                </div>
            </div>
        </section>
    );
}
