import Image from 'next/image';
import styles from './Nomenclature.module.css';

interface INomenclatureItem {
    title: string;
    description: string;
    price: string;
    image: string;
}

function NomenclatureItem({
    title,
    description,
    price,
    image,
}: INomenclatureItem) {
    return (
        <div className={styles['nomenclature-item']}>
            <div className={styles['nomenclature-item-image-wrapper']}>
                <Image
                    src={image}
                    alt={title}
                    height={70}
                    width={70}
                    className={styles['nomenclature-item-image']}
                    sizes="(max-width: 768px) 50px, 70px"
                />
            </div>
            <div className={styles['nomenclature-item-text-wrapper']}>
                <div
                    className={styles['nomenclature-item-title-price-wrapper']}
                >
                    <h6 className={styles['nomenclature-item-title']}>
                        {title}
                    </h6>
                    <div className={styles['connector']} />
                    <h6 className={styles['nomenclature-item-price']}>
                        {price}
                    </h6>
                </div>
                <p className={styles['nomenclature-item-description']}>
                    {description}
                </p>
            </div>
        </div>
    );
}

const nomenclatureItems: INomenclatureItem[] = [
    {
        title: 'Пожаростойкие трубы SDR 7.4',
        price: 'от 90 ₽/метр',
        description: 'Диаметр от 20 до 125 мм, рабочее давление до 2,4 МПа.',
        image: '/products/pipes-sdr.webp',
    },
    {
        title: 'Пожаростойкие трубы SDR 9',
        price: 'от 530 ₽/метр',
        description: 'Диаметр от 63 до 315 мм, рабочее давление до 1,6 МПа.',
        image: '/products/pipes-sdr9.webp',
    },
    {
        title: 'Соединительные и переходные муфты',
        price: 'от 9 ₽/шт.',
        description: 'Для соединений прямых участков трубопровода.',
        image: '/products/connect-fitting.webp',
    },
    {
        title: 'Тройники прямые и переходные',
        price: 'от 25 ₽/шт.',
        description: 'Для соединения трубы под углом 90 гр.',
        image: '/products/t-fitting.webp',
    },
    {
        title: 'Угольник AntiFire',
        price: 'от 18 ₽/шт.',
        description:
            'Производятся под углом 45° и 90°. Диаметром от 20 до 125 мм.',
        image: '/products/angle-fitting.webp',
    },
    {
        title: 'Комбинированные муфты',
        price: 'от 120 ₽/шт.',
        description:
            'С внутренней и наружней резьбой, для подключения запорной арматуры.',
        image: '/products/combined-fittings.webp',
    },
    {
        title: 'Комбинированные фитинги с резьбой 1/2" ВР',
        price: 'от 99 ₽/шт.',
        description:
            'Седла, тройники, угольник и муфты с резьбой 1/2" ВР для подключения спринклерных оросителей.',
        image: '/products/combined-fittings-1-2-bp.webp',
    },
    {
        title: 'Шаровый пожаростойкий кран',
        price: 'от 415 ₽/шт.',
        description:
            'Запорный кран из пожаростойкого компаунда. Диаметр от 20 до 40 мм.',
        image: '/products/valve.webp',
    },
    {
        title: 'Комбинированные муфты с резьбой 2" и 2 1/2"',
        price: 'от 2010 ₽/шт.',
        description: 'Для подключения пожарных кранов ПК 50 и 65',
        image: '/products/combined-fittings-2-2-1-2.webp',
    },
    {
        title: 'Бурт и фланец',
        price: 'от 251 ₽/шт.',
        description:
            'Для подключения трубопровода к насосной станции и запорной арматуре. Диаметр от 65 до 110 мм.',
        image: '/products/connector.webp',
    },
];

export default function Nomenclature() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles.title}>
                        Номенклатура труб и фитингов тм AntiFire
                    </h2>
                    <p className={styles.subtitle}>
                        более 350 фитингов и соединений
                    </p>
                </div>
                <div className={styles['nomenclature-list-wrapper']}>
                    {nomenclatureItems.map((item) => (
                        <NomenclatureItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
