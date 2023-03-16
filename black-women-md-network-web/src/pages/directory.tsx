import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./directory.css";

interface MemberData {
    id: number;
    first_name: string;
    last_name: string;
    primary_email: string;
    phone_number: string;
    specialty: string;
    resume_included_question: string;
    will_sponsor_question: {
        sponsor_question_answer: String,
        activities_interested: []
      };
  }

  const MemberCard: React.FC<MemberData> = ({ id, first_name, last_name, primary_email, phone_number, specialty, resume_included_question }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{last_name}, {first_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
          <Card.Text>{phone_number}</Card.Text>
          {resume_included_question.toLowerCase() == "yes" && (
            <Badge pill bg="success">
              Resume Available
            </Badge>
          )}
          {resume_included_question.toLowerCase() == "no" && (
            <Badge pill bg="secondary">
              Resume Not Available
            </Badge>
          )}
          <Card.Text>Bio</Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            Contact
          </Button>
        </Card.Body>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Contact {first_name} {last_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Phone number: {phone_number}</p>
            <p>Email: {primary_email}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </Card>
    );
  };
  
  
  
  const Directory: React.FC = () => {
    const [members, setMembers] = useState<MemberData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showResumeOnly, setShowResumeOnly] = useState<boolean>(false);
    const [showConnectionOnly, setShowConnectionOnly] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchMembers = async () => {
        const response = await fetch('https://se-diva-docs.herokuapp.com/approvedapplicants/view');
        const data = await response.json();
        setMembers(data);
      };
      fetchMembers();
    }, []);
  
    const filteredMembers = members
      .filter((member) =>
        member.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((member) => (!showResumeOnly || member.resume_included_question.toLowerCase() == "yes"))
      .filter((member) => (!showConnectionOnly || member.will_sponsor_question.sponsor_question_answer.toLowerCase() == "yes"));
  
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
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={showResumeOnly}
            onChange={(e) => setShowResumeOnly(e.target.checked)}
          />
          <label className="form-check-label">Resume Available</label>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={showConnectionOnly}
            onChange={(e) => setShowConnectionOnly(e.target.checked)}
          />
          <label className="form-check-label">Open to Connect</label>
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
  