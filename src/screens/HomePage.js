import NavBar from '../components/Navbar'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Sponsor from '../components/Sponsor'
import { Divider } from '@chakra-ui/layout';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Stats />
            <Features />
            <Sponsor />
            <br />
            <Divider />
            <Footer />
        </div>
    );
}

export default HomePage;