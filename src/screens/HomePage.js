import NavBar from '../components/Navbar'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import { Divider } from '@chakra-ui/layout';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero/>
            <Stats/>
            <Divider/>
            <Features />
            <br/>
            <Footer/>
        </div>
    );
}

export default HomePage;