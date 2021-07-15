import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import maintain from "../assets/maintain.svg";
import { Heading } from "@chakra-ui/react";

function EventPage() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "4rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Heading
            fontSize={"5xl"}
            py={10}
            color={"green.400"}
            fontWeight={"bold"}
          >
            This page is currently under maintenance
          </Heading>
        </div>

        <div>
          <img
            width="500px"
            height="450px"
            src={maintain}
            alt="under maintainece"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EventPage;
