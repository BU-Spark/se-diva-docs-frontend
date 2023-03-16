import React, { useState, useEffect } from 'react';
import { fetchMembers } from '../components/api';
import Member from '../components/member';

interface MemberData {
    id: string;
    first_name: string;
    last_name: string;
  }

const Directory: React.FC = () => {
  const [members, setMembers] = useState<MemberData[]>([]);

  useEffect(() => {
    async function getMembers() {
      const data = await fetchMembers();
      setMembers(data);
    }

    getMembers();
  }, []);

  return (
    <div>
      <h1>Membership Directory</h1>
      {members.map((member, index) => (
        <Member
          key={index}
          name={member.id}
          email={member.first_name}
          phone={member.last_name}
        />
      ))}
    </div>
  );
};

export default Directory;
