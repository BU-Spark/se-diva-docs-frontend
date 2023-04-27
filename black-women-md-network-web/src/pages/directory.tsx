import React, { useState, useEffect } from "react";
import { Card, Button, Badge, Modal } from "react-bootstrap";
import { useSignIn, useAuthHeader } from "react-auth-kit";
import Switch from "react-switch";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./directory.css";
import regions from "../data/MembershipApp/regions";
import specialties from "../data/MembershipApp/Specialties";

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
    street: string;
    apartment: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
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
    sponsor_question_answer: String;
    activities_interested: [];
  };
}

const MemberCard: React.FC<MemberData> = ({
  id,
  first_name,
  last_name,
  primary_email,
  phone_number,
  current_position,
  specialty,
  resume_included_question,
  current_hospital_company,
  areas_of_work,
}) => {
  const [showContact, setShowContact] = useState(false);
  const handleShowContact = () => {
    setShowContact(true);
  };
  const handleCloseContact = () => {
    setShowContact(false);
  };

  const [showResume, setShowResume] = useState(false);
  const handleShowResume = (id: string) => {
    fetchResume((id = id));
    setShowResume(true);
  };
  const handleCloseResume = () => {
    setShowResume(false);
  };
  const authToken = useAuthHeader();
  const fetchResume = async (id: string) => {
    try {
      const response = await fetch(
        `https://se-diva-docs.herokuapp.com/applicants/downloadresume/${id}.pdf`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken(),
          },
        }
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mem-card m-2">
      <Card.Body>
        <Card.Title style={{ color: "#1E1A1D" }}>
          {first_name} {last_name}
        </Card.Title>
        <Card.Subtitle style={{ color: "#1E1A1D" }} className="mb-2">
          {specialty}
        </Card.Subtitle>
        <Card.Text style={{ color: "#1E1A1D" }}>
          Works as a {current_position} at {current_hospital_company}.
        </Card.Text>
        {resume_included_question.toLowerCase() == "yes" && (
          <Button
            variant="primary"
            onClick={() => handleShowResume(id)}
            style={{
              backgroundColor: "#6750A4",
              border: "none",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            Resume
          </Button>
        )}
        {resume_included_question.toLowerCase() == "no" && (
          <Button
            variant="primary"
            disabled
            style={{
              backgroundColor: "#6750A4",
              border: "none",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            Resume
          </Button>
        )}
        <Button
          variant="primary"
          onClick={handleShowContact}
          style={{
            backgroundColor: "#6750A4",
            border: "none",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          Contact
        </Button>
      </Card.Body>
      <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>
            Contact {first_name} {last_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Phone number: <a href={`tel:${phone_number}`}>{phone_number}</a>
          </p>
          <p>
            Email: <a href={`mailto:${primary_email}`}>{primary_email}</a>
          </p>
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
  const [members, setMembers] = useState<MemberData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isResumeChecked, setIsResumeChecked] = useState(false);
  const [isConnectionChecked, setIsConnectionChecked] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [collapsedSpecialties, setCollapsedSpecialties] = useState(true);
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
  const authToken = useAuthHeader();
  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch(
        "https://se-diva-docs.herokuapp.com/membershipapplicants/view",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken(),
          },
        }
      );
      console.log("calling");
      const data = await response.json();
      setMembers(data);
    };
    fetchMembers();
  }, []);

  const searchTerms = searchTerm.toLowerCase().split(" ");

  const filteredMembers = members
    .filter((member) =>
      searchTerms.every((term) =>
        [
          member.first_name,
          member.last_name,
          member.current_position,
          member.geographic_region,
          member.specialty,
        ]
          .join(" ")
          .toLowerCase()
          .includes(term)
      )
    )
    .filter((member) => {
      if (selectedSpecialties.length === 0) {
        return true; // No options selected, show all items
      }
      return selectedSpecialties.includes(member.specialty);
    })
    .filter((member) => {
      if (selectedRegions.length === 0) {
        return true; // No options selected, show all items
      }
      return selectedRegions.includes(member.geographic_region);
    })
    .filter(
      (member) =>
        !isResumeChecked ||
        member.resume_included_question.toLowerCase() == "yes"
    )
    .filter(
      (member) =>
        !isConnectionChecked ||
        member.will_sponsor_question.sponsor_question_answer.toLowerCase() ==
          "yes"
    )
    .filter(
      (member) => member.membership_directory_agreement.toLowerCase() == "yes"
    )
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
    <div className="directory-body">
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
            <button
              onClick={() => setCollapsedSpecialties(!collapsedSpecialties)}
              className="plus-button"
            >
              {collapsedSpecialties ? (
                <>
                  <FaPlus />
                </>
              ) : (
                <>
                  <FaMinus />
                </>
              )}
            </button>
          </div>
          {/* Always show selected options */}
          {collapsedSpecialties && (
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
                            setSelectedSpecialties(
                              selectedSpecialties.filter((s) => s !== specialty)
                            );
                          } else {
                            setSelectedSpecialties([
                              ...selectedSpecialties,
                              specialty,
                            ]);
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
          {!collapsedSpecialties && (
            <div
              className="options-wrapper"
              style={{ height: "200px", overflow: "auto" }}
            >
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
                            setSelectedSpecialties(
                              selectedSpecialties.filter(
                                (s) => s !== specialty.value
                              )
                            );
                          } else {
                            setSelectedSpecialties([
                              ...selectedSpecialties,
                              specialty.value,
                            ]);
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
            <button
              onClick={() => setCollapsedRegions(!collapsedRegions)}
              className="plus-button"
            >
              {collapsedRegions ? (
                <>
                  <FaPlus />
                </>
              ) : (
                <>
                  <FaMinus />
                </>
              )}
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
                            setSelectedRegions(
                              selectedRegions.filter((s) => s !== region)
                            );
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
            <div
              className="options-wrapper"
              style={{ height: "200px", overflow: "auto" }}
            >
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
                            setSelectedRegions(
                              selectedRegions.filter((s) => s !== region.value)
                            );
                          } else {
                            setSelectedRegions([
                              ...selectedRegions,
                              region.value,
                            ]);
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
        <div className="form-group switch">
          <label>
            <span className="filter-label">Resume Available</span>
          </label>
          <label>
            <Switch
              onChange={(checked) => setIsResumeChecked(checked)}
              checked={isResumeChecked}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#6750A4"
            />
          </label>
        </div>
        <div className="form-group switch">
          <label>
            <span className="filter-label">Will Sponsor</span>
          </label>
          <label>
            <Switch
              onChange={(checked) => setIsConnectionChecked(checked)}
              checked={isConnectionChecked}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#6750A4"
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
          <Pagination
            currentPage={currentPage}
            numPages={numPages}
            onPageChange={handlePageChange}
          />
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
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
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
