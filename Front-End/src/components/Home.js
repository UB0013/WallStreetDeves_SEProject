import React from "react";
import homeImg from "../images/main_pic.png";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      {/* <div className="display-1 text-center text-primary fw-bold">Alma Mingle</div> */}
      <div className="d-flex justify-content-center">
        <img src={homeImg} alt="" className="w-50 shadow-lg rounded mt-5" />
      </div>
      <p className="py-4">
        <strong>Welcome to AlmaMingle: Connect, Learn, Thrive!</strong>
        <br />
        <br />
        At AlmaMingle, we believe in fostering vibrant connections within the academic community. Whether you're a student, faculty member, or alumni, AlmaMingle is your digital hub for networking, collaboration, and growth.
        <br />
        <br />
        <strong>What We Offer:</strong>
        <br />
        <br />
        1. <strong>Networking Opportunities:</strong> Expand your professional and academic circles by connecting with peers, mentors, and industry leaders. Our platform makes it easy to find and engage with like-minded individuals who share your interests and goals.
        <br />
        2. <strong>Knowledge Sharing:</strong> Dive into a treasure trove of educational resources, discussions, and insights. From study groups to expert-led webinars, AlmaMingle is your go-to destination for learning and intellectual exchange.
        <br />
        3. <strong>Career Development:</strong> Elevate your career prospects with our suite of career development tools and services. Explore internship opportunities, job postings, resume workshops, and more to take the next step towards your professional goals.
        <br />
        4. <strong>Alumni Engagement:</strong> Stay connected with your alma mater and fellow alumni through our dedicated alumni network. Reconnect with old friends, mentor current students, and stay updated on campus news and events.
        <br />
        <br />
        <strong>Why Choose AlmaMingle:</strong>
        <br />
        - <strong>User-Friendly Interface:</strong> Our intuitive platform is designed to streamline your experience, making it easy to navigate, connect, and engage.
        <br />
        - <strong>Privacy and Security:</strong> Your privacy is our top priority. Rest assured that your personal information is protected with state-of-the-art security measures.
        <br />
        - <strong>Community-Centric Approach:</strong> We're more than just a platform—we're a community. Join us in building meaningful connections and supporting each other's academic and professional journeys.
        <br />
        <br />
        <strong>Join AlmaMingle Today:</strong>
        <br />
        Ready to embark on a journey of connection, learning, and growth? Sign up for free and become part of the AlmaMingle community today!
        <br />
        <br />
        <em>Connect. Learn. Thrive. With AlmaMingle.</em>
      </p>
    </Container>
  );
}

export default Home;
