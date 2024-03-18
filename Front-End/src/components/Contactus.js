import React from 'react';

function Contactus() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Welcome to AlmaMingle, the premier blog post website for alumni of the University of North Texas (UNT). We are dedicated to connecting UNT graduates, sharing stories, and fostering a vibrant community. Whether you have questions, feedback, or just want to share your journey since graduation, we're here to listen.</p>
      
      <h2>Address:</h2>
      <p>University of North Texas<br />
         1155 Union Circle #311277<br />
         Denton, Texas 76203-5017
      </p>

      <h2>Email:</h2>
      <p><a href="mailto:info@almamingle.com">info@almamingle.com</a></p>

      <h2>Phone:</h2>
      <p>(555) 123-4567</p>

      <h2>Social Media:</h2>
      <p>
        Follow us on <a href="#">Facebook</a>, <a href="#">Twitter</a>, <a href="#">LinkedIn</a>
      </p>

      <h2>Contact Form:</h2>
      <form>
        <label>Name:</label><br />
        <input type="text" name="name" /><br />
        <label>Email:</label><br />
        <input type="email" name="email" /><br />
        <label>Subject:</label><br />
        <select name="subject">
          <option value="general">General Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="submission">Alumni Story Submission</option>
          <option value="other">Other</option>
        </select><br />
        <label>Message:</label><br />
        <textarea name="message"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contactus;
