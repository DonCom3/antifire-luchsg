'use client';
import { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './Carousel.module.css';

interface IOwnProps {
    images: string[];
    width?: number;
    height?: number;
}

export default function Carousel({ images = [], width, height }: IOwnProps) {
    const swiperRef = useRef<SwiperClass>(null);

    return (
        <div style={{ position: 'relative', width, height }}>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                className={styles.swiper}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={img}
                            alt={`slide-${index}`}
                            height={height}
                            width={width}
                            style={{ objectFit: 'cover' }}
                        />
                    </SwiperSlide>
                ))}

                <button
                    onClick={() => swiperRef?.current?.slidePrev()}
                    className={styles['arrow-button']}
                >
                    <LeftCircleOutlined className={styles['arrow-icon']} />
                </button>

                <button
                    onClick={() => swiperRef?.current?.slideNext()}
                    className={styles['arrow-button']}
                >
                    <RightCircleOutlined className={styles['arrow-icon']} />
                </button>
            </Swiper>
        </div>
    );
}
