import Factory from '../icons/Factory';
import Microscope from '../icons/Microscope';
import Strong from '../icons/Strong';
import styles from './About.module.css';

interface AboutItemProps {
    title: string;
    description: string;
    icon: React.ReactElement;
}

function AboutItem({ title, description, icon }: AboutItemProps) {
    return (
        <div className={styles['about-item']}>
            <div className={styles['about-item-image-wrapper']}>{icon}</div>
            <div className={styles['about-item-title-wrapper']}>
                <h4 className={styles['about-item-title']}>{title}</h4>
                <p className={styles['about-item-subtitle']}>{description}</p>
            </div>
        </div>
    );
}

const about: AboutItemProps[] = [
    {
        title: 'Собственное производство противопожарной изоляции',
        description:
            'Поэтому мы гарантируем высочайшее качество и минимальные цены на всю линейку нашей продукции.',
        icon: <Factory height={55} width={55} />,
    },
    {
        title: 'Только сертифицированная продукция ',
        description:
            'Вся продукция поставляемая нашей компанией прошла испытания и имеет всю необходимую документацию.',
        icon: <Microscope height={55} width={55} />,
    },
    {
        title: '3 складских терминала',
        description:
            'Склады в Санкт-Петербурге, Москве и Оренбурге, позволяют нам отгружать продукцию по всем регионам страны в сжатые сроки.',
        icon: <Strong height={55} width={55} />,
    },
];

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles['about-wrapper']}>
                    <h2 className={styles['about-title']}>О компании</h2>
                    <p className={styles['about-subtitle']}>
                        Компания &quot;ЭГИДА-ПРОФ&quot; - производитель и
                        поставщик противопожарных материалов и систем
                        пожаротушения. Главными направлениями компании является
                        поставка оборудования для систем пожаротушения, а так же
                        производство противопожарных материалов. Обратившись к
                        нам, Вы гарантировано получаете продукцию высочайшего
                        качества по выгодным ценам. Мы открыты для
                        сотрудничества и готовы обсуждать индивидуальные условия
                        с каждым клиентом.
                    </p>
                </div>
                <div className={styles['about-item-wrapper']}>
                    {about.map((item) => (
                        <AboutItem
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            key={item.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
