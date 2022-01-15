import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "../components/Event";
import Cards from "../components/Cards";
/* import Card from '../components/Card';
 */
/* import maintain from "../assets/maintain.svg";
import { Heading } from "@chakra-ui/react"; */

function EventPage() {
  return (
    <div>
      <NavBar />
      <Event />
      <div><conatiner>
          <Cards />
          <Cards /> 
      </conatiner></div>
     
      {/* <FetchProjects /> */}
      <Footer />
    </div>
  );
}

export default EventPage;
