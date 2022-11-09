import React from "react";

const MembershipType = () => {
  return (
    <div>
      <h1> Please Select your Membership Type </h1>

      <label>Membership Type</label>
      <input autoFocus required type="text" />

      <label>Medical Speciality</label>
      <input autoFocus required type="text" />
    </div>
  );
};

export default MembershipType;
