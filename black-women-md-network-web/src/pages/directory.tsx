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
    current_position: string;
    specialty: string;
    resume_included_question: string;
    will_sponsor_question: {
        sponsor_question_answer: String,
        activities_interested: []
      };
  }

  const MemberCard: React.FC<MemberData> = ({ id, first_name, last_name, primary_email, phone_number, current_position, specialty, resume_included_question }) => {
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
        { label: 'Allergy & Immunology', value: 'Allergy & Immunology' },
        { label: 'Anesthesiology', value: 'Anesthesiology' },
        { label: 'Cardiology', value: "Cardiology" },
        { label: 'Coaching', value: 'Coaching' },
        { label: 'Critical Care Medicine', value: 'Critical Care Medicine' },
        { label: 'Dermatology', value: 'Dermatology' },
        { label: 'Emergency Medicine', value: 'Emergency Medicine' },
        { label: 'Endocrinology', value: 'Endocrinology' },
        { label: 'Family Medicine', value: 'Family Medicine' },
        { label: 'Gastroenterology', value: 'Gastroenterology' },
        { label: 'Geriatrics', value: 'Geriatrics' },
        { label: 'Hematology & Oncology', value: 'Hematology & Oncology' },
        { label: 'Infectious Disease', value: 'Infectious Disease' },
        { label: 'Internal Medicine', value: 'Internal Medicine' },
        // Add more options here as needed
      ];
      
    const [members, setMembers] = useState<MemberData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isResumeChecked, setIsResumeChecked] = useState(false);
    const [isConnectionChecked, setIsConnectionChecked] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [collapsed, setCollapsed] = useState(true);

  
    useEffect(() => {
      const fetchMembers = async () => {
        const response = await fetch('https://se-diva-docs.herokuapp.com/approvedapplicants/view');
        const data = await response.json();
        setMembers(data)
      };
      fetchMembers();
    }, []);
  
    const searchTerms = searchTerm.toLowerCase().split(" ");

    const filteredMembers = members
        .filter((member) =>
            searchTerms.every((term) =>
                [member.first_name, member.last_name, member.current_position]
                    .join(" ")
                    .toLowerCase()
                    .includes(term)
            )
        )
        /*.filter((member) =>
            selectedOptions.map((option) =>
            member.specialty.includes(option)
            )
        )*/
        .filter((member) =>
        {
            if (selectedOptions.length === 0) {
                return true; // No options selected, show all items
              }
              return selectedOptions.includes(member.specialty);
        })
        .filter((member) => (!isResumeChecked || member.resume_included_question.toLowerCase() == "yes"))
        .filter((member) => (!isConnectionChecked || member.will_sponsor_question.sponsor_question_answer.toLowerCase() == "yes"));
  
    return (
      <div>
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            placeholder="Search by name, position, ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="options-container">
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? 'Show specialties' : 'Hide specialties'}
          </button>

          {/* Only show options if not collapsed */}
          {!collapsed && (
            <div className="options">
              {options.map((option) => (
                <div key={option.value}>
                  <label>
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={() => {
                        if (selectedOptions.includes(option.value)) {
                          setSelectedOptions(selectedOptions.filter((s) => s !== option.value));
                        } else {
                          setSelectedOptions([...selectedOptions, option.value]);
                        }
                      }}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
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
  