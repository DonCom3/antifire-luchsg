import Carousel from '../Carousel/Carousel';
import styles from './Examples.module.css';

interface IExampleItem {
    images: string[];
    title: string;
    subtitle: string;
}

const exampleItems: IExampleItem[] = [
    {
        title: 'Подземный паркинг многоэтажного дома',
        subtitle: 'Санкт-Петербург',
        images: [
            '/examples/example-parking-1.webp',
            '/examples/example-parking-2.webp',
            '/examples/example-parking-3.webp',
        ],
    },
    {
        title: 'Монтаж АУПТ в торгово-развлекательном комплексе',
        subtitle: 'Ломоносов',
        images: [
            '/examples/example-mall-1.webp',
            '/examples/example-mall-2.webp',
        ],
    },
    {
        title: 'Пожаростойкие трубы в продуктовом гипермаркете',
        subtitle: 'Москва',
        images: [
            '/examples/example-lenta-1.webp',
            '/examples/example-lenta-2.webp',
        ],
    },
    {
        title: 'Торгово-выставочный комплекс',
        subtitle: 'Пятигорск',
        images: [
            '/examples/example-expo-1.webp',
            '/examples/example-expo-2.webp',
            '/examples/example-expo-3.webp',
        ],
    },
    {
        title: 'Тихвинская районная больница',
        subtitle: 'Тихвин',
        images: [
            '/examples/example-clinic-1.webp',
            '/examples/example-clinic-2.webp',
        ],
    },
    {
        title: 'Институт мировых цивилизаций',
        subtitle: 'Москва',
        images: [
            '/examples/example-iwc-1.webp',
            '/examples/example-iwc-2.webp',
        ],
    },
];

function ExampleItem({ images, title, subtitle }: IExampleItem) {
    return (
        <div className={styles['example-item']}>
            <Carousel images={images} key={title} height={360} width={360} />
            <h6 className={styles['example-item-title']}>{title}</h6>
            <p className={styles['example-item-subtitle']}>{subtitle}</p>
        </div>
    );
}

export default function Examples() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles['title-wrapper']}>
                    <h2 className={styles.title}>
                        Пожаростойкие трубы разрешено использовать для систем
                        АУПТ и ВПВ в 1, 2, 4.1, 5 и 6 группах помещений.
                    </h2>
                </div>
                <div className={styles['example-items-wrapper']}>
                    {exampleItems.map((item) => (
                        <ExampleItem
                            key={item.title}
                            images={item.images}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
