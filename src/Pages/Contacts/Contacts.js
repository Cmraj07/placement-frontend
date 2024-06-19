import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 2rem 0 1rem 0;
    text-align: center;

    .container {
      margin-top: 0.5rem;
      width: 80%;
      max-width: 50rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .contact-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        .contact-inputs {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input, textarea {
            color: black;
            width: 100%;
            padding: 1rem;
            border: 1px  #ccc;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            
            &:focus {
              border-color: #00bf72;
              box-shadow: 0 0 5px rgba(0, 191, 114, 0.5);
              outline: none;
            }
          }

          input[type="submit"] {
            cursor: pointer;
            background: #00bf72;
            color: white;
            font-weight: bold;
            transition: all 0.3s ease;
            margin-top: 0.5rem;
            
            &:hover {
              background-color: #008793;
              transform: translateY(-2px);
            }
          }
        }
      }
    }

    h1, h2, h3 {
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .Details {
      margin-bottom: 2rem;
      h3 {
        font-size: 1.3rem;
        margin: 0.5rem 0;
      }
    }
  `;

  return (
    <Wrapper
      style={{
        backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        minHeight: "130vh",
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <h1>Training and Placement Cell</h1>
      <h2>Contact Details</h2>

      <div className="Details">
        <h3>Head of T&P - Prof. xyz</h3>
        <h3>Contact Number - +91 123456789</h3>
        <h3>Contact Mail - Placement@college.com</h3>
      </div>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
