import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./directory.css";

interface MemberData {
    id: number;
    first_name: string;
    last_name: string;
    primary_email: string;
    phone_number: string;
  }

  const MemberCard: React.FC<MemberData> = ({ id, first_name, last_name, primary_email, phone_number }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{first_name} {last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{primary_email}</Card.Subtitle>
          <Card.Text>{phone_number}</Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    );
  };
  
  
  const Directory: React.FC = () => {
    const [members, setMembers] = useState<MemberData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
  
    useEffect(() => {
      const fetchMembers = async () => {
        const response = await fetch('https://se-diva-docs.herokuapp.com/approvedapplicants/view');
        const data = await response.json();
        setMembers(data);
      };
      fetchMembers();
    }, []);
  
    const filteredMembers = members.filter((member) =>
      member.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    );
  };
  

  export default Directory;
  