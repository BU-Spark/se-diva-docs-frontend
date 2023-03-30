import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import Switch from 'react-switch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import "./directory.css";

interface MemberData {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    primary_email: string;
    secondary_email: string;
    phone_number: string;
    address: {
      street: string,
      apartment: string,
      city: string,
      state: string,
      zip_code: string,
      country: string
    };
    address_type: string;
    current_academic_affiliation: string;
    current_hospital_company: string;
    current_position: string;
    specialty: string;
    areas_of_work: [];
    geographic_region: string;
    bwmdn_chapter_question: string;
    membership_directory_agreement: string;
    resume_included_question: string;
    will_sponsor_question: {
        sponsor_question_answer: String,
        activities_interested: []
      };
    
  }

  const MemberCard: React.FC<MemberData> = ({ id, first_name, last_name, primary_email, phone_number, current_position, specialty, resume_included_question }) => {
    const [showContact, setShowContact] = useState(false);
    const handleShowContact = () => {
        setShowContact(true);
    };
    const handleCloseContact = () => {
        setShowContact(false);
    };

    const [showResume, setShowResume] = useState(false);
    const handleShowResume = () => {
        setShowContact(true);
    };
    const handleCloseResume = () => {
        setShowContact(false);
    };

    return (
      <Card className = "mem-card m-2" >
        <Card.Body>
          <Card.Title style={{color: 'white'}}>{first_name} {last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
          <Card.Text>Bio</Card.Text>
          {resume_included_question.toLowerCase() == "yes" && (
            <Button variant="primary" onClick={handleShowResume} style={{backgroundColor: '#456B68', border: 'none', borderRadius: '16px', textAlign: 'center' }}>
              Resume
            </Button>
          )}
          {resume_included_question.toLowerCase() == "no" && (
            <Button variant="primary" disabled onClick={handleShowResume} style={{backgroundColor: '#456B68', border: 'none', borderRadius: '16px', textAlign: 'center' }}>
              Resume
            </Button>
          )}
          <Button variant="primary" onClick={handleShowResume} style={{backgroundColor: '#456B68', border: 'none', borderRadius: '16px', textAlign: 'center' }}>
            Contact
          </Button>
        </Card.Body>
        <Modal show={showContact} onHide={handleCloseContact}>
            <Modal.Header closeButton>
            <Modal.Title>Contact {first_name} {last_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Phone number: {phone_number}</p>
            <p>Email: {primary_email}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseContact}>
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
        { label: 'Critical Care Medicine', value: 'Critical Care Medicine' },
        { label: 'Dermatology', value: 'Dermatology' },
        { label: 'Diagnostic', value: 'Diagnostic' },
        { label: 'Emergency Medicine', value: 'Emergency Medicine' },
        { label: 'Endocrinology', value: 'Endocrinology' },
        { label: 'Family Medicine', value: 'Family Medicine' },
        { label: 'Gastroenterology', value: 'Gastroenterology' },
        { label: 'Geriatrics', value: 'Geriatrics' },
        { label: 'Head & Neck', value: 'Head & Neck' },
        { label: 'Hematology & Oncology', value: 'Hematology & Oncology' },
        { label: 'Infectious Disease', value: 'Infectious Disease' },
        { label: 'Internal Medicine', value: 'Internal Medicine' },
        { label: 'Interventional', value: 'Interventional' },
        { label: 'Medical Genetics & Genomics', value: 'Medical Genetics & Genomics' },
        { label: 'Nephrology', value: 'Nephrology' },
        { label: 'Neurology', value: 'Neurology' },
        { label: 'Nuclear Medicine', value: 'Nuclear Medicine' },
        { label: 'Nuclear Medicine', value: 'Nuclear Medicine' },
        { label: 'Obstetrics & Gynecology', value: 'Obstetrics & Gynecology' },
        { label: 'Oncology', value: 'Oncology' },
        { label: 'Ophthalmology', value: 'Ophthalmology' },
        { label: 'Otolaryngology', value: 'Otolaryngology' },
        { label: 'Pain Medicine', value: 'Pain Medicine' },
        { label: 'Palliative Care', value: 'Palliative Care' },
        { label: 'Pathology', value: 'Pathology' },
        { label: 'Pediatrics', value: 'Pediatrics' },
        { label: 'Physical Medicine & Rehabilitation', value: 'Physical Medicine & Rehabilitation' },
        { label: 'Preventive Medicine', value: 'Preventive Medicine' },
        { label: 'Psychiatry', value: 'Psychiatry' },
        { label: 'Radiation', value: 'Radiation' },
        { label: 'Radiology', value: 'Radiology' },
        { label: 'Rheumatology', value: 'Rheumatology' },
        { label: 'Sleep Medicine', value: 'Sleep Medicine' },
        { label: 'Sports Medicine', value: 'Sports Medicine' },
        { label: 'Surgery, General', value: 'Surgery, General' },
        { label: 'Surgery, Neurologic', value: 'Surgery, Neurologic' },
        { label: 'Surgery, Ophthalmic', value: 'Surgery, Ophthalmic' },
        { label: 'Surgery, Orthopedic', value: 'Surgery, Orthopedic' },
        { label: 'Surgery, Otolaryngology', value: 'Surgery, Otolaryngology' },
        { label: 'Surgery, Pediatric', value: 'Surgery, Pediatric' },
        { label: 'Surgery, Plastic', value: 'Surgery, Plastic' },
        { label: 'Surgery, Thoracic', value: 'Surgery, Thoracic' },
        { label: 'Surgery, Vascular', value: 'Surgery, Vascular' },
        { label: 'Toxicology', value: 'Toxicology' },
        { label: 'Urology', value: 'Urology' },
        { label: "Women's Health", value: "Women's Health" },
        { label: 'Radiology', value: 'Radiology' }
    ];
      
    const [members, setMembers] = useState<MemberData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isResumeChecked, setIsResumeChecked] = useState(false);
    const [isConnectionChecked, setIsConnectionChecked] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [collapsed, setCollapsed] = useState(true);

    const sortedOptions = [...options].sort((a, b) => {
      const aIndex = selectedOptions.indexOf(a.value);
      const bIndex = selectedOptions.indexOf(b.value);
      if (aIndex === -1 && bIndex === -1) {
        return 0;
      } else if (aIndex === -1) {
        return 1;
      } else if (bIndex === -1) {
        return -1;
      } else {
        return aIndex - bIndex;
      }
    });

    useEffect(() => {
      const fetchMembers = async () => {
        const response = await fetch('https://se-diva-docs.herokuapp.com/membershipapplicants/view');
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
      <div className = "directory-body">
        <div className="filters">
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
            <div className="switch">
              <span className="filter-label">Specialty</span>
              <button onClick={() => setCollapsed(!collapsed)} className = "plus-button">
                {collapsed ? <><FaPlus /></> : <><FaMinus /></> }
              </button>
            </div>
            {/* Always show selected options */}
            {collapsed && (
              <div className="options-wrapper">
                <div className="options">
                  {selectedOptions.map((option) => (
                    <div key={option}>
                      <label>
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedOptions.includes(option)}
                          onChange={() => {
                            if (selectedOptions.includes(option)) {
                              setSelectedOptions(selectedOptions.filter((s) => s !== option));
                            } else {
                              setSelectedOptions([...selectedOptions, option]);
                            }
                          }}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Only show options if not collapsed */}
            {!collapsed && (
              <div className="options-wrapper" style={{ height: '200px', overflow: 'auto' }}>
                <div className="options">
                  {sortedOptions.map((option) => (
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
              </div>
            )}
          </div>
          <div className="form-group switch" >
            <label>
              <span className="filter-label">Resume Available</span>
            </label>
            <label>
              <Switch
                  onChange={(checked) => setIsResumeChecked(checked)}
                  checked={isResumeChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
              />
            </label>
          </div>
          <div className="form-group switch" >
            <label>
              <span className="filter-label">Will Sponsor</span>
            </label>
            <label>
              <Switch
                  onChange={(checked) => setIsConnectionChecked(checked)}
                  checked={isConnectionChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
              />
            </label>
          </div>
        </div>
        <div className = "members">
          <div className="d-flex flex-wrap justify-content-center">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
 /*<span>{isResumeChecked ? 'Resume Available' : 'Show All Members With or Without resume'}</span>*/ 

  export default Directory;
  

/*Region 1 - CT, ME, MA, NH, RI, and VT
Region 2 - NJ, NY
Region 3 - DC, DE, MD, PA, VA, and WV
Region 4 - FL, GA, NC, and SC
Region 5 - AL, LA, MS, TN, and PR
Region 6 - IL, IN, KY, MI, and OH
Region 7 - AR, IA, KS, MN, NE, ND, OK, SD, and WI
Region 8 - AZ, CO, ID, MT, NM, NV, TX, UT, and WY
Region 9 - AK, CA, HI, OR, and WA
Region 10 - Other International Affiliation*/