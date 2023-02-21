const MedicalSchools = [
  "AL-University of Alabama School of Medicine",
  "AL-University of South Alabama College of Medicine",
  "AR-University of Arkansas College of Medicine",
  "AR-UAMS College of Medicine",
  "AZ-Mayo Clinic Alix School of Medicine - Arizona Campus",
  "AZ-University of Arizona College of Medicine - Phoenix",
  // AZ-University of Arizona School of Medicine - Tuscon
  // CA-California North state University College of Medicine
  // CA-California University of Science and Medicine School of Medicine
  // CA-Kaiser Permanente School of Medicine
  // CA-Keck School of Medicine of the University of Southern California
  // CA-Loma Linda University School of Medicine
  // CA-Stanford University School of Medicine
  // CA-UCLA/Drew Medical Education Program
  // CA-University of California, Davis School of Medicine
  // CA-University of California, Irvine, School of Medicine
  // CA-University of California, Los Angeles David Geffen School of Medicine
  // CA-University of California, Riverside, School of Medicine
  // CA-University of California, San Diego School of Medicine
  // CA-University of California, San Francisco, School of Medicine
  // CO-University of Colorado School of Medicine
  // CT-Frank H. Netter MD School of Medicine at Quinnipiac University
  // CT-University of Connecticut School of Medicine
  // CT-Yale University School of Medicine
  // DC-George Washington University School of Medicine and Health Sciences
  // DC-Georgetown University School of Medicine
  // DC-Howard University College of Medicine
  // FL-Charles E. Schmidt College of Medicine at Florida Atlantic University
  // FL-Florida International University Wertheim College of Medicine
  // FL-Florida State University College of Medicine
  // FL-Nova Southeastern University Dr. Kiran C. Patel College of Allopathic Medicine
  // FL-University of Central Florida College of Medicine
  // FL-University of Florida College of Medicine
  // FL-University of Miami Leonard M. Miller School of Medicine
  // FL-University of South Florida College of Medicine Morsani College of Medicine
  // GA-Emory University School of Medicine
  // GA-Medical College of Georgia at Augusta University
  // GA-Mercer University School of Medicine
  // GA-Morehouse School of Medicine
  // HI-University of Hawaii, John A. Burns School of Medicine
  // IL-Carle Illinois College of Medicine
  // IL-Chicago Medical School at Rosalind Franklin University of Medicine & Science
  // IL-Loyola University Chicago Stritch School of Medicine
  // IL-Northwestern University The Feinberg School of Medicine
  // IL-Rush Medical College of Rush University Medical Center
  // IL-Southern Illinois University School of Medicine
  // IL-University of Chicago Division of the Biological Sciences The Pritzker School of Medicine
  // IL-University of Illinois College of Medicine
  // IN-Indiana University School of Medicine
  // IA-University of Iowa Roy J. and Lucille A. Carver College of Medicine
  // KS-University of Kansas School of Medicine
  // KY-University of Kentucky College of Medicine
  // KY-University of Louisville School of Medicine
  // LA-Louisiana State University School of Medicine in New Orleans
  // LA-Louisiana State University School of Medicine in Shreveport
  // LA-Tulane University School of Medicine
  // MD-Johns Hopkins University School of Medicine
  // MD-Uniformed Services Univ. of the Health Sciences F. Edward Herbert School of Medicine
  // MD-University of Maryland School of Medicine
  // MA-Boston University School of Medicine
  // MA-Harvard Medical School
  // MA-Tufts University School of Medicine
  // MA-University of Massachusetts Medical School
  // MI-Central Michigan University College of Medicine
  // MI-Michigan State University College of Human Medicine
  // MI-Oakland University William Beaumont School of Medicine
  // MI-University of Michigan Medical School
  // MI-Wayne State University School of Medicine
  // MI-Western Michigan University Homer Stryker M.D. School of Medicine
  // MN-Mayo Clinic Alix School of Medicine
  // MN-University of Minnesota Medical School
  // MS-University of Mississippi School of Medicine
  // MO-Saint Louis University School of Medicine
  // MO-University of Missouri - Columbia School of Medicine
  // MO-University of Missouri - Kansas City
  // MO-Washington University in St. Louis School of Medicine
  // NE-Creighton University School of Medicine
  // NE-University of Nebraska College of Medicine
  // NV-University of Nevada, Las Vegas School of Medicine
  // NV-University of Nevada, Reno School of Medicine
  // NH-Geisel School of Medicine at Dartmouth
  // NJ-Cooper Medical School of Rowan University
  // NJ-Rutgers New Jersey Medical School
  // NJ-Rutgers, Robert Wood Johnson Medical School
  // NJ-Seton Hall - Hackensack Meridian
  // NM-University of New Mexico School of Medicine
  // NY-Albany Medical College
  // NY-Albert Einstein College of Medicine of Yeshiva University
  // NY-Columbia University Vagelos College of Physicians and Surgeons
  // NY-CUNY School of Medicine - The Sophie Davis Biomedical Education Program*
  // NY-Donald and Barbara Zucker School of Medicine at Hofstra/Northwell
  // NY-Icahn School of Medicine at Mount Sinai
  // NY-Jacobs School of Medicine and Biomedical Sciences at the University at Buffalo
  // NY-New York Medical College
  // NY-New York University School of Medicine
  // NY-New York University Long Island School of Medicine
  // NY-Renaissance School of Medicine at Stony Brook University
  // NY-State University of New York Downstate Medical Center College of Medicine
  // NY-State University of New York Upstate Medical Univ. College of Medicine
  // NY-University of Rochester School of Medicine and Dentistry
  // NY-Weill Cornell Medical College
  // NC-Brody School of Medicine at East Carolina University
  // NC-Duke University School of Medicine
  // NC-Univ. of North Carolina at Chapel Hill School of Medicine
  // NC-Wake Forest University School of Medicine
  // ND-Univ. of North Dakota School of Medicine and Health Sciences
  // OH-Case Western Reserve University School of Medicine
  // OH-Cleveland Clinic Lerner College of Medicine
  // OH-Northeast Ohio Medical University
  // OH-Ohio State University College of Medicine
  // OH-The University of Toledo College of Medicine and Life Sciences
  // OH-University of Cincinnati College of Medicine
  // OH-Wright State University Boonshoft School of Medicine
  // OK-University of Oklahoma College of Medicine
  // OR-Oregon Health & Science University School of Medicine
  // PA-Geisinger Commonwealth School of Medicine
  // PA-Drexel University College of Medicine
  // PA-Lewis Katz School of Medicine at Temple University
  // PA-Pennsylvania State University College of Medicine
  // PA-Perelman School of Medicine at the University of Pennsylvania
  // PA-Sidney Kimmel Medical College at Thomas Jefferson University
  // PA-University of Pittsburgh School of Medicine
  // PR-Universidad Central del Caribe School of Medicine
  // PR-Ponce School of Medicine
  // PR-San Juan Bautista School of Medicine
  // PR-University of Puerto Rico School of Medicine
  // RI-The Warren Alpert Medical School of Brown Univ.
  // SC-Medical University of South Carolina College of Medicine
  // SC-University of South Carolina School of Medicine
  // SC-University of South Carolina School of Medicine Greenville
  // SD-Sanford School of Medicine of The University of South Dakota
  // TN-East Tennessee State University James H. Quillen College of Medicine
  // TN-Meharry Medical College School of Medicine
  // TN-University of Tennessee Health Science Center College of Medicine
  // TN-Vanderbilt University School of Medicine
  // TX-Baylor College of Medicine
  // TX-McGovern Medical School at the University of Texas Health Science Center at Houston
  // TX-TCU School of Medicine and University of North Texas Health Science Center
  // TX-Texas A & M University System Health Science Center College of Medicine*
  // TX-Texas Tech University Health Sciences Center Paul L. Foster School of Medicine*
  // TX-Texas Tech University Health Sciences Center School of Medicine*
  // TX-The University of Texas Health Science Center at San Antonio Joe R. and Teresa Lozano Long School of Medicine*
  // TX-University of Houston College of Medicine
  // TX-University of Texas at Austin Dell Medical School
  // TX-University of Texas Medical Branch School of Medicine at Galveston*
  // TX-University of Texas Rio Grande Valley School of Medicine
  // TX-University of Texas Southwestern Medical School at Dallas*
  // UT-University of Utah School of Medicine
  // VT-Robert Larner, M.D., College of Medicine at the University of Vermont
  // VA-Eastern Virginia Medical School
  // VA-University of Virginia School of Medicine
  // VA-VCU School of Medicine, Medical College of Virginia Health Sciences Division
  // VA-Virginia Tech Carilion School of Medicine
  // WA-University of Washington School of Medicine
  // WA-Washington State University Elson S. Floyd College of Medicine
  // WV-Joan C. Edwards School of Medicine at Marshall University
  // WV-West Virginia University School of Medicine
  // WI-Medical College of Wisconsin
  // WI-University of Wisconsin School of Medicine and Public Health"
];

export default MedicalSchools;
