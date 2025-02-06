import Navbar from '@/components/Navbar/Navbar';
import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import Services from '../sections/Services';
import About from '../sections/About';
import Reviews from '@/sections/Reviews';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Expertise />
            <Services />
            <About />
            <Reviews />
            <Contact />
            <Footer />
        </main>
    );
}
