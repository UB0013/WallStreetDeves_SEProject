import React from "react";
import { Link } from "react-router-dom";
import './Signup.css'

export default function Signup() {
  const onButtonClick = () => {
    
  }
  return (
    <div className="mainContainer">
      <div className="signupform">
        <div className="signupheading">CREATE AN ACCOUNT</div>
        <form>
          <div className={'inputContainer'}>
            <label htmlFor="name">Name</label>
            <input type="text"  className={'inputBox'} id="name" placeholder="Enter your name" />
          </div>
          <div className={'inputContainer'}>
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name"  className={'inputBox'} placeholder="Enter your mail" />
          </div>
          <div className={'inputContainer'}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
              className={'inputBox'}
            />
          </div>
          <div className={'inputContainer'}>
          {/* <button type="submit">Submit</button> */}
          <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Signup'} />
          </div>
          <h2 align="center" class="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/login"> Login </Link>
        </p>
      </div>
    </div>
  );
}