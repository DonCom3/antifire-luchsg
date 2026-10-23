'use client';
import '@ant-design/v5-patch-for-react-19';
import About from './components/About/About';
import Complementary from './components/Complementary/Complementary';
import Customers from './components/Customers/Customers';
import Examples from './components/Examples/Examples';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Map from './components/Map/Map';
import Nomenclature from './components/Nomenclature/Nomenclature';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Header />
                <Intro />
                <About />
                <Nomenclature />
                <Examples />
                <Customers />
                <Complementary />
                <Map />
                <Footer />
            </main>
        </div>
    );
}
