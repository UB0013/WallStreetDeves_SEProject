import React from "react";
import homeImg  from "../images/main_pic.png";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      {/* <div className="display-1 text-center text-primary fw-bold">Alma Mingle</div> */}
      <div class="d-flex justify-content-center">
          <img src={homeImg} alt="" className="w-50 shadow-lg rounded mt-5" />
      </div>
      <p className="py-4">
        AlmaMingle serves as a central platform for University of North Texas (UNT) alumni, playing a vital role in fostering seamless connectivity and interaction among its members. By harnessing carefully crafted features and functionalities, the project aims to cultivate a lively and active community where alumni are empowered to participate, share experiences, and contribute to the enduring legacy of the university.

        Through AlmaMingle, UNT alumni gain access to a virtual environment where they can effortlessly connect with fellow graduates, regardless of geographic barriers or time limitations. The platform is designed with careful consideration to enable various forms of interaction, such as networking, discussions, and collaboration on a wide range of topics of interest.
      </p>
    </Container>
  );
}

export default Home;
