import React, { useState } from "react";
import * as EmailValidator from "email-validator";

function Invitations(props) {
  const [emailAddress, setEmailAddress] = useState("");
  let status;
  if (!emailAddress) {
    status = {
      code: 0,
      msg: "Enter an email address",
      className: "danger",
      disabled: true
    };
  } else if (EmailValidator.validate(emailAddress)) {
    status = {
      code: 1,
      msg: "Valid Email Address",
      className: "success",
      disabled: false
    };
  } else {
    status = {
      code: 1,
      msg: "You must enter a valid email address",
      className: "warning",
      disabled: true
    };
  }
  return (
    <div className="row d-flex justify-content-center my-1">
      <div className="col-md-6">
        <div className="alert alert-primary">
          <h3>Invitations</h3>
        </div>
        <div className={`alert alert-${status.className}`}>{status.msg}</div>
        <input className="form-control my-2" type="email" onChange={e => setEmailAddress(e.target.value)} />
        <button className={`btn btn-${status.className} form-control`} disabled={status.disabled}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Invitations;
