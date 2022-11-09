import React, { Dispatch, SetStateAction, useState } from "react";

const ContactInfo = (name: any, setName: Dispatch<SetStateAction<string>>) => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <div>
      <h1> Contact / General Information </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactInfo;
