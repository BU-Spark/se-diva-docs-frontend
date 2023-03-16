import React from 'react';

interface MemberProps {
  name: string;
  email: string;
  phone: string;
}

const Member: React.FC<MemberProps> = ({ name, email, phone }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Member;
