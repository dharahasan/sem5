import React, { useRef } from "react";
import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;

    try {
      const response = await fetch("http://localhost/mywebsite/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("You are a member of our Club") // Success message from PHP
      } else {
        console.error(result.message); // Error message from PHP
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Enter your email"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
