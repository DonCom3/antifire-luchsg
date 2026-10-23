'use client';
import { useEffect } from 'react';

export default function Map() {
    // Get API key from environment variables
    const API_KEY = process.env.NEXT_PUBLIC_YANDEX_API_KEY || '';
    const center = [55.7558, 37.6176]; // Coordinates for Moscow, Russia
    const zoom = 10; // Zoom level

    useEffect(() => {
        // Dynamically load the Yandex Maps API script
        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
        script.onload = () => {
            // Initialize the map after the script is loaded
            window.ymaps?.ready(() => {
                //@ts-expect-error yandex
                const map = new window.ymaps.Map('yandex-map', {
                    center: center, // Coordinates of the map center
                    zoom: zoom, // Zoom level
                });

                // Add a marker (optional)
                //@ts-expect-error yandex
                const placemark = new window.ymaps.Placemark(center, {
                    hintContent: 'Your Location',
                    balloonContent: 'This is your location!',
                });
                map.geoObjects.add(placemark);
            });
        };
        document.body.appendChild(script);

        // Cleanup script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, [API_KEY, center, zoom]);

    // return (
    //     <section className={styles.section}>
    //         <div className={styles.content}>
    //             {/* Div for the Yandex Map */}
    //             <div
    //                 id="yandex-map"
    //                 style={{ width: '100%', height: '500px' }}
    //             ></div>
    //         </div>
    //     </section>
    // );

    return (
        <div id="yandex-map" style={{ width: '100%', height: '500px' }}></div>
    );
}
