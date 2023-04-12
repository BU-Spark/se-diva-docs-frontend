import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import Switch from 'react-switch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import "./directory.css";

const PAGE_SIZE = 12;

interface MemberData {
    id: string;
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
    const handleShowResume = (id: string) => {
        fetchResume(id = id);
        setShowResume(true);
    };
    const handleCloseResume = () => {
        setShowResume(false);
    };
    const fetchResume = async (id: string) => {
      try {
        const response = await fetch(`https://se-diva-docs.herokuapp.com/applicants/downloadresume/${id}.pdf`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <Card className = "mem-card m-2" >
        <Card.Body>
          <Card.Title style={{color: 'white'}}>{first_name} {last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
          <Card.Text>Bio</Card.Text>
          {resume_included_question.toLowerCase() == "yes" && (
            <Button variant="primary" onClick={()=>handleShowResume(id)} style={{backgroundColor: '#456B68', border: 'none', borderRadius: '16px', textAlign: 'center' }}>
              Resume
            </Button>
          )}
          {resume_included_question.toLowerCase() == "no" && (
            <Button variant="primary" disabled style={{backgroundColor: '#456B68', border: 'none', borderRadius: '16px', textAlign: 'center' }}>
              Resume
            </Button>
          )}
          <Button variant="primary" onClick={handleShowContact} style={{backgroundColor: '#456B68', border: 'none', borderRadius: '16px', textAlign: 'center' }}>
            Contact
          </Button>
        </Card.Body>
        <Modal show={showContact} onHide={handleCloseContact}>
            <Modal.Header closeButton>
            <Modal.Title>Contact {first_name} {last_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Phone number: <a href={`tel:${phone_number}`}>{phone_number}</a></p>
              <p>Email: <a href={`mailto:${primary_email}`}>{primary_email}</a></p>
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
    const specialties = [
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

    const regions = [
      { label: "region1`", value: "Region 1 - CT, ME, MA, NH, RI, and VT" },
      { label: "region2", value: "Region 2 - NJ, NY" },
      { label: "region3", value: "Region 3 - DC, DE, MD, PA, VA, and WV" },
      { label: "region4", value: "Region 4 - FL, GA, NC, and SC" },
      { label: "region5", value: "Region 5 - AL, LA, MS, TN, and PR" },
      { label: "region6", value: "Region 6 - IL, IN, KY, MI, and OH" },
      {
        label: "region7`",
        value: "Region 7 - AR, IA, KS, MN, NE, ND, OK, SD, and WI",
      },
      {
        label: "region8",
        value: "Region 8 - AZ, CO, ID, MT, NM, NV, TX, UT, and WY",
      },
      { label: "region9", value: "Region 9 - AK, CA, HI, OR, and WA" },
      { label: "region10", value: "Region 10 - Other International Affiliation" },
    ];

    const [members, setMembers] = useState<MemberData[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isResumeChecked, setIsResumeChecked] = useState(false);
    const [isConnectionChecked, setIsConnectionChecked] = useState(false);
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [collapsedSpecialtes, setCollapsedSpecialties] = useState(true);
    const [collapsedRegions, setCollapsedRegions] = useState(true);

    const sortedSpecialties = [...specialties].sort((a, b) => {
      const aIndex = selectedSpecialties.indexOf(a.value);
      const bIndex = selectedSpecialties.indexOf(b.value);
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

    const sortedRegions = [...regions].sort((a, b) => {
      const aIndex = selectedRegions.indexOf(a.value);
      const bIndex = selectedRegions.indexOf(b.value);
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
        .filter((member) =>
        {
            if (selectedSpecialties.length === 0) {
                return true; // No options selected, show all items
              }
              return selectedSpecialties.includes(member.specialty);
        })
        .filter((member) =>
        {
            if (selectedRegions.length === 0) {
                return true; // No options selected, show all items
              }
              return selectedRegions.includes(member.geographic_region);
        })
        .filter((member) => (!isResumeChecked || member.resume_included_question.toLowerCase() == "yes"))
        .filter((member) => (!isConnectionChecked || member.will_sponsor_question.sponsor_question_answer.toLowerCase() == "yes"))
        .sort((a, b) => a.last_name.localeCompare(b.last_name)); // Sort by last name in ascending order

    const [currentPage, setCurrentPage] = useState(0);
    const numPages = Math.ceil(filteredMembers.length / PAGE_SIZE);
    const startIdx = currentPage * PAGE_SIZE;
    const endIdx = startIdx + PAGE_SIZE;
    const visibleMembers = filteredMembers.slice(startIdx, endIdx);

    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
    };
  
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
              <button onClick={() => setCollapsedSpecialties(!collapsedSpecialtes)} className = "plus-button">
                {collapsedSpecialtes ? <><FaPlus /></> : <><FaMinus /></> }
              </button>
            </div>
            {/* Always show selected options */}
            {collapsedSpecialtes && (
              <div className="options-wrapper">
                <div className="options">
                  {selectedSpecialties.map((specialty) => (
                    <div key={specialty}>
                      <label>
                        <input
                          type="checkbox"
                          value={specialty}
                          checked={selectedSpecialties.includes(specialty)}
                          onChange={() => {
                            if (selectedSpecialties.includes(specialty)) {
                              setSelectedSpecialties(selectedSpecialties.filter((s) => s !== specialty));
                            } else {
                              setSelectedSpecialties([...selectedSpecialties, specialty]);
                            }
                          }}
                        />
                        {specialty}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Only show options if not collapsed */}
            {!collapsedSpecialtes && (
              <div className="options-wrapper" style={{ height: '200px', overflow: 'auto' }}>
                <div className="options">
                  {sortedSpecialties.map((specialty) => (
                    <div key={specialty.value}>
                      <label>
                        <input
                          type="checkbox"
                          value={specialty.value}
                          checked={selectedSpecialties.includes(specialty.value)}
                          onChange={() => {
                            if (selectedSpecialties.includes(specialty.value)) {
                              setSelectedSpecialties(selectedSpecialties.filter((s) => s !== specialty.value));
                            } else {
                              setSelectedSpecialties([...selectedSpecialties, specialty.value]);
                            }
                          }}
                        />
                        {specialty.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="options-container">
            <div className="switch">
              <span className="filter-label">Region</span>
              <button onClick={() => setCollapsedRegions(!collapsedRegions)} className = "plus-button">
                {collapsedRegions ? <><FaPlus /></> : <><FaMinus /></> }
              </button>
            </div>
            {/* Always show selected options */}
            {collapsedRegions && (
              <div className="options-wrapper">
                <div className="options">
                  {selectedRegions.map((region) => (
                    <div key={region}>
                      <label>
                        <input
                          type="checkbox"
                          value={region}
                          checked={selectedRegions.includes(region)}
                          onChange={() => {
                            if (selectedRegions.includes(region)) {
                              setSelectedRegions(selectedRegions.filter((s) => s !== region));
                            } else {
                              setSelectedRegions([...selectedRegions, region]);
                            }
                          }}
                        />
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Only show options if not collapsed */}
            {!collapsedRegions && (
              <div className="options-wrapper" style={{ height: '200px', overflow: 'auto' }}>
                <div className="options">
                  {sortedRegions.map((region) => (
                    <div key={region.value}>
                      <label>
                        <input
                          type="checkbox"
                          value={region.value}
                          checked={selectedRegions.includes(region.value)}
                          onChange={() => {
                            if (selectedRegions.includes(region.value)) {
                              setSelectedRegions(selectedRegions.filter((s) => s !== region.value));
                            } else {
                              setSelectedRegions([...selectedRegions, region.value]);
                            }
                          }}
                        />
                        {region.value}
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
        <div className="members">
          <div className="d-flex flex-wrap justify-content-center">
            {visibleMembers.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination currentPage={currentPage} numPages={numPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    );
  };
  
  interface PaginationProps {
    currentPage: number;
    numPages: number;
    onPageChange: (newPage: number) => void;
  }

  
  function Pagination({ currentPage, numPages, onPageChange }: PaginationProps) {
    const pages = Array.from({ length: numPages }, (_, i) => i);
    
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} 
            className={`page-item ${page === currentPage ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
 /*<span>{isResumeChecked ? 'Resume Available' : 'Show All Members With or Without resume'}</span>*/ 

  export default Directory;
  

