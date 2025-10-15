import "../styles/authLayout.css";
import React from "react";
import logo from "../assets/images/logo.webp";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <div className="container">
      <div className="left">
        <img
          src={logo}
          alt="lagos state judiciary logo"
          className="logo_image"
        />
        <div className="note_board">
          <ol>
            <li>
              You can register as a Legal Counsel, Non-legal Counsel and also do
              E-Affidavit.
            </li>
            <li>
              For individual and organization registration you will need a Payer
              ID.
            </li>
            <li>
              If you have a Payer ID, select the option “I have a Payer ID.
            </li>
            <li>
              If you do not have a Payer ID, select the option “I do not have a
              Payer ID
            </li>
            <li>
              If you do not have a Payer ID you can generate the Payer ID during
              the registration process. It is mandatory to enter the NIN when
              the fields are displayed.
            </li>
            <li>
              Once you are done with the last step, click the Submit button to
              complete the registration process.
            </li>
          </ol>
        </div>
      </div>

      <div className="form_wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
