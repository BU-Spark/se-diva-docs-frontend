import React, { Dispatch, SetStateAction, useState } from "react";

const ContactInfo = (name: any, setName: Dispatch<SetStateAction<string>>) => {
  return (
    <div>
      <h1> Contact / General Information </h1>

      <label>First Name</label>
      <input autoFocus required type="text" />

      <label>Last Name</label>
      <input autoFocus required type="text" />

      <label>Age</label>
      <input required min={1} type="number" />
    </div>
  );
};

export default ContactInfo;
