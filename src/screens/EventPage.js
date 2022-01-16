import NavBar from "../components/Navbar";
import Event from "../components/Event";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function EventPage() {
  return (
    <div>
      <NavBar />
      <Event />
      <div>
        {/* <conatiner> */}
        <Cards />
        {/* </conatiner> */}
      </div>

      {/* <FetchProjects /> */}
      <Footer />
    </div>
  );
}

export default EventPage;
