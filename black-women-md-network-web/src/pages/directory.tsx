import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import Switch from 'react-switch';
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
          <Card.Text>Bio</Card.Text>
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
    const options = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Non-binary', value: 'non-binary' },
        // Add more options here as needed
      ];
      
    const [members, setMembers] = useState<MemberData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isResumeChecked, setIsResumeChecked] = useState(false);
    const [isConnectionChecked, setIsConnectionChecked] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  
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
      .filter((member) => (!isResumeChecked || member.resume_included_question.toLowerCase() == "yes"))
      .filter((member) => (!isConnectionChecked || member.will_sponsor_question.sponsor_question_answer.toLowerCase() == "yes"));
  
    return (
      <div>
        {options.map((option) => (
            <div key={option.value}>
                <label>
                <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={(event) => {
                    if (event.target.checked) {
                        setSelectedOptions([...selectedOptions, option.value]);
                    } else {
                        setSelectedOptions(
                        selectedOptions.filter((value) => value !== option.value)
                        );
                    }
                    }}
                />
                {option.label}
                </label>
            </div>
        ))}
        <div className="form-group">
          <label>
            <span>Resume Available</span>
            <Switch
                onChange={(checked) => setIsResumeChecked(checked)}
                checked={isResumeChecked}
                uncheckedIcon={false}
                checkedIcon={false}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span>Open to Connect</span>
            <Switch
                onChange={(checked) => setIsConnectionChecked(checked)}
                checked={isConnectionChecked}
                uncheckedIcon={false}
                checkedIcon={false}
            />
          </label>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    );
  };
  
 /*<span>{isResumeChecked ? 'Resume Available' : 'Show All Members With or Without resume'}</span>*/ 

  export default Directory;
  