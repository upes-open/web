import NavBar from '../components/Navbar'
import About from '../components/About';
import Features from '../components/Features'
import Footer from '../components/Footer';
import VerticalCard from '../components/VerticalCard';

function AboutPage() {
    return (
        <div>
            <NavBar />
            <About />
            <VerticalCard />
            <br/>
            <Features />
            <br/>
            <Footer/>
        </div>
    );
}

export default AboutPage;