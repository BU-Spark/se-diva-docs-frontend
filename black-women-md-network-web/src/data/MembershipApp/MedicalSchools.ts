const MedicalSchools = [
  { label: "0", value: "N/A If Not Applicable" },
  { label: "1", value: "AL-University of Alabama School of Medicine" },
  { label: "2", value: "AL-University of South Alabama College of Medicine" },
  { label: "3", value: "AR-University of Arkansas College of Medicine" },
  { label: "4", value: "AR-UAMS College of Medicine" },
  {
    label: "5",
    value: "AZ-Mayo Clinic Alix School of Medicine - Arizona Campus",
  },
  {
    label: "6",
    value: "AZ-University of Arizona College of Medicine - Phoenix",
  },
  { label: "7", value: "AZ-University of Arizona School of Medicine - Tuscon" },
  {
    label: "8",
    value: "CA-California North state University College of Medicine",
  },
  {
    label: "9",
    value:
      "CA-California University of Science and Medicine School of Medicine",
  },
  {
    label: "10",
    value: "CA-Kaiser Permanente School of Medicine",
  },
  {
    label: "11",
    value:
      "CA-Keck School of Medicine of the University of Southern California",
  },
  {
    label: "12",
    value: "CA-Loma Linda University School of Medicine",
  },
  {
    label: "13",
    value: "CA-Stanford University School of Medicine",
  },
  {
    label: "14",
    value: "CA-UCLA/Drew Medical Education Program",
  },
  {
    label: "15",
    value: "CA-University of California, Davis School of Medicine",
  },
  {
    label: "16",
    value: "CA-University of California, Irvine, School of Medicine",
  },
  {
    label: "17",
    value:
      "CA-University of California, Los Angeles David Geffen School of Medicine",
  },
  {
    label: "18",
    value: "CA-University of California, Riverside, School of Medicine",
  },
  {
    label: "19",
    value: "CA-University of California, San Diego School of Medicine",
  },
  {
    label: "20",
    value: "CA-University of California, San Francisco, School of Medicine",
  },
  {
    label: "21",
    value: "CO-University of Colorado School of Medicine",
  },
  {
    label: "22",
    value: "CT-Frank H. Netter MD School of Medicine at Quinnipiac University",
  },
  {
    label: "23",
    value: "CT-University of Connecticut School of Medicine",
  },
  {
    label: "24",
    value: "CT-Yale University School of Medicine",
  },
  {
    label: "25",
    value:
      "DC-George Washington University School of Medicine and Health Sciences",
  },
  {
    label: "26",
    value: "DC-Georgetown University School of Medicine",
  },
  {
    label: "27",
    value: "DC-Howard University College of Medicine",
  },
  {
    label: "28",
    value:
      "FL-Charles E. Schmidt College of Medicine at Florida Atlantic University",
  },
  {
    label: "29",
    value: "FL-Florida International University Wertheim College of Medicine",
  },
  {
    label: "30",
    value: "FL-Florida State University College of Medicine",
  },
  {
    label: "31",
    value:
      "FL-Nova Southeastern University Dr. Kiran C. Patel College of Allopathic Medicine",
  },
  {
    label: "32",
    value: "FL-University of Central Florida College of Medicine",
  },
  {
    label: "33",
    value: "FL-University of Florida College of Medicine",
  },
  {
    label: "34",
    value: "FL-University of Miami Leonard M. Miller School of Medicine",
  },
  {
    label: "35",
    value: "FL-University of Miami Leonard M. Miller School of Medicine",
  },
  {
    label: "36",
    value:
      "FL-University of South Florida College of Medicine Morsani College of Medicine",
  },
  {
    label: "37",
    value: "GA-Emory University School of Medicine",
  },
  {
    label: "38",
    value: "GA-Medical College of Georgia at Augusta University",
  },
  {
    label: "39",
    value: "GA-Mercer University School of Medicine",
  },
  {
    label: "40",
    value: "GA-Morehouse School of Medicine",
  },
  {
    label: "41",
    value: "HI-University of Hawaii, John A. Burns School of Medicine",
  },
  {
    label: "42",
    value: "IL-Carle Illinois College of Medicine",
  },
  {
    label: "43",
    value:
      "IL-Chicago Medical School at Rosalind Franklin University of Medicine & Science",
  },
  {
    label: "44",
    value: "IL-Loyola University Chicago Stritch School of Medicine",
  },
  {
    label: "45",
    value: "IL-Northwestern University The Feinberg School of Medicine",
  },
  {
    label: "46",
    value: "IL-Rush Medical College of Rush University Medical Center",
  },
  {
    label: "47",
    value: "IL-Southern Illinois University School of Medicine",
  },
  {
    label: "48",
    value:
      "IL-University of Chicago Division of the Biological Sciences The Pritzker School of Medicine",
  },
  {
    label: "49",
    value: "IL-University of Illinois College of Medicine",
  },
  {
    label: "50",
    value: "IN-Indiana University School of Medicine",
  },
  {
    label: "51",
    value:
      "IA-University of Iowa Roy J. and Lucille A. Carver College of Medicine",
  },
  {
    label: "52",
    value: "KS-University of Kansas School of Medicine",
  },
  {
    label: "53",
    value: "KY-University of Kentucky College of Medicine",
  },
  {
    label: "54",
    value: "KY-University of Louisville School of Medicine",
  },
  {
    label: "55",
    value: "LA-Louisiana State University School of Medicine in New Orleans",
  },
  {
    label: "56",
    value: "LA-Louisiana State University School of Medicine in Shreveport",
  },
  {
    label: "57",
    value: "LA-Tulane University School of Medicine",
  },
  {
    label: "58",
    value: "MD-Johns Hopkins University School of Medicine",
  },
  {
    label: "59",
    value:
      "MD-Uniformed Services Univ. of the Health Sciences F. Edward Herbert School of Medicine",
  },
  {
    label: "60",
    value: "MD-University of Maryland School of Medicine",
  },
  {
    label: "61",
    value: "MA-Boston University School of Medicine",
  },
  {
    label: "62",
    value: "MA-Harvard Medical School",
  },
  {
    label: "63",
    value: "MA-Tufts University School of Medicine",
  },
  {
    label: "64",
    value: "MA-University of Massachusetts Medical School",
  },
  {
    label: "65",
    value: "MI-Central Michigan University College of Medicine",
  },
  {
    label: "66",
    value: "MI-Michigan State University College of Human Medicine",
  },
  {
    label: "67",
    value: "MI-Oakland University William Beaumont School of Medicine",
  },
  {
    label: "68",
    value: "MI-University of Michigan Medical School",
  },
  {
    label: "69",
    value: "MI-Wayne State University School of Medicine",
  },
  {
    label: "70",
    value:
      "MI-Western Michigan University Homer Stryker M.D. School of Medicine",
  },
  {
    label: "71",
    value: "MN-Mayo Clinic Alix School of Medicine",
  },
  {
    label: "72",
    value: "MN-University of Minnesota Medical School",
  },
  {
    label: "73",
    value: "MS-University of Mississippi School of Medicine",
  },
  {
    label: "74",
    value: "MO-Saint Louis University School of Medicine",
  },
  {
    label: "75",
    value: "MO-University of Missouri - Columbia School of Medicine",
  },
  {
    label: "76",
    value: "MO-University of Missouri - Kansas City",
  },
  {
    label: "77",
    value: "MO-Washington University in St. Louis School of Medicine",
  },
  {
    label: "78",
    value: "NE-Creighton University School of Medicine",
  },
  {
    label: "79",
    value: "NE-University of Nebraska College of Medicine",
  },
  {
    label: "80",
    value: "NV-University of Nevada, Las Vegas School of Medicine",
  },
  {
    label: "81",
    value: "NV-University of Nevada, Reno School of Medicine",
  },
  {
    label: "82",
    value: "NH-Geisel School of Medicine at Dartmouth",
  },
  {
    label: "83",
    value: "NJ-Cooper Medical School of Rowan University",
  },
  {
    label: "84",
    value: "NJ-Rutgers New Jersey Medical School",
  },
  {
    label: "85",
    value: "NJ-Rutgers, Robert Wood Johnson Medical School",
  },
  {
    label: "86",
    value: "NJ-Seton Hall - Hackensack Meridian",
  },
  {
    label: "87",
    value: "NM-University of New Mexico School of Medicine",
  },
  {
    label: "88",
    value: "NY-Albany Medical College",
  },
  {
    label: "89",
    value: "NY-Albert Einstein College of Medicine of Yeshiva University",
  },
  {
    label: "90",
    value: " NY-Columbia University Vagelos College of Physicians and Surgeons",
  },
  {
    label: "91",
    value:
      "NY-CUNY School of Medicine - The Sophie Davis Biomedical Education Program",
  },
  {
    label: "92",
    value:
      "NY-Donald and Barbara Zucker School of Medicine at Hofstra/Northwell",
  },
  {
    label: "93",
    value: "NY-Icahn School of Medicine at Mount Sinai",
  },
  {
    label: "94",
    value:
      "NY-Jacobs School of Medicine and Biomedical Sciences at the University at Buffalo",
  },
  {
    label: "95",
    value: "NY-New York Medical College",
  },
  {
    label: "96",
    value: "NY-New York University School of Medicine",
  },
  {
    label: "97",
    value: "NY-New York University Long Island School of Medicine",
  },
  {
    label: "97",
    value: "NY-Renaissance School of Medicine at Stony Brook University",
  },
  {
    label: "98",
    value:
      "NY-State University of New York Downstate Medical Center College of Medicine",
  },
  {
    label: "99",
    value:
      "NY-State University of New York Upstate Medical Univ. College of Medicine",
  },
  {
    label: "100",
    value: "NY-University of Rochester School of Medicine and Dentistry",
  },
  {
    label: "101",
    value: "NY-Weill Cornell Medical College",
  },
  {
    label: "102",
    value: "NC-Brody School of Medicine at East Carolina University",
  },
  {
    label: "103",
    value: "NC-Duke University School of Medicine",
  },
  {
    label: "104",
    value: "NC-Univ. of North Carolina at Chapel Hill School of Medicine",
  },
  {
    label: "105",
    value: "NC-Wake Forest University School of Medicine",
  },
  {
    label: "106",
    value: "ND-Univ. of North Dakota School of Medicine and Health Sciences",
  },
  {
    label: "107",
    value: "OH-Case Western Reserve University School of Medicine",
  },
  {
    label: "108",
    value: "OH-Cleveland Clinic Lerner College of Medicine",
  },
  {
    label: "109",
    value: "OH-Northeast Ohio Medical University",
  },
  {
    label: "110",
    value: "OH-Ohio State University College of Medicine",
  },
  {
    label: "111",
    value: "OH-The University of Toledo College of Medicine and Life Sciences",
  },
  {
    label: "112",
    value: "OH-University of Cincinnati College of Medicine",
  },
  {
    label: "113",
    value: "OH-Wright State University Boonshoft School of Medicine",
  },
  {
    label: "114",
    value: "OK-University of Oklahoma College of Medicine",
  },
  {
    label: "115",
    value: "OR-Oregon Health & Science University School of Medicine",
  },
  {
    label: "116",
    value: "PA-Geisinger Commonwealth School of Medicine",
  },
  {
    label: "117",
    value: "PA-Drexel University College of Medicine",
  },
  {
    label: "118",
    value: "PA-Lewis Katz School of Medicine at Temple University",
  },
  {
    label: "119",
    value: "PA-Pennsylvania State University College of Medicine",
  },
  {
    label: "120",
    value: "PA-Perelman School of Medicine at the University of Pennsylvania",
  },
  {
    label: "121",
    value: "PA-Sidney Kimmel Medical College at Thomas Jefferson University",
  },
  {
    label: "122",
    value: "PA-University of Pittsburgh School of Medicine",
  },
  {
    label: "123",
    value: "PR-Universidad Central del Caribe School of Medicine",
  },
  {
    label: "124",
    value: "PR-Ponce School of Medicine",
  },
  {
    label: "125",
    value: "PR-San Juan Bautista School of Medicine",
  },
  {
    label: "126",
    value: "PR-University of Puerto Rico School of Medicine",
  },
  {
    label: "127",
    value: "RI-The Warren Alpert Medical School of Brown Univ.",
  },
  {
    label: "128",
    value: "SC-Medical University of South Carolina College of Medicine",
  },
  {
    label: "129",
    value: "SC-University of South Carolina School of Medicine",
  },
  {
    label: "130",
    value: "SC-University of South Carolina School of Medicine Greenville",
  },
  {
    label: "131",
    value: "SD-Sanford School of Medicine of The University of South Dakota",
  },
  {
    label: "132",
    value:
      "TN-East Tennessee State University James H. Quillen College of Medicine",
  },
  {
    label: "133",
    value: "TN-Meharry Medical College School of Medicine",
  },
  {
    label: "134",
    value:
      "TN-University of Tennessee Health Science Center College of Medicine",
  },
  {
    label: "135",
    value: "TN-Vanderbilt University School of Medicine",
  },
  {
    label: "136",
    value: "TTX-Baylor College of Medicine",
  },
  {
    label: "137",
    value:
      "TX-McGovern Medical School at the University of Texas Health Science Center at Houston",
  },
  {
    label: "138",
    value:
      "TX-TCU School of Medicine and University of North Texas Health Science Center",
  },
  {
    label: "139",
    value:
      "TX-Texas A & M University System Health Science Center College of Medicine",
  },
  {
    label: "140",
    value:
      "TX-Texas Tech University Health Sciences Center Paul L. Foster School of Medicine",
  },
  {
    label: "141",
    value:
      "TX-Texas Tech University Health Sciences Center School of Medicine*",
  },
  {
    label: "141",
    value: "TX-Texas Tech University Health Sciences Center School of Medicine",
  },
  {
    label: "142",
    value:
      "TX-The University of Texas Health Science Center at San Antonio Joe R. and Teresa Lozano Long School of Medicine",
  },
  {
    label: "143",
    value: "TX-University of Houston College of Medicine",
  },
  {
    label: "144",
    value: "TX-University of Texas at Austin Dell Medical School",
  },
  {
    label: "145",
    value:
      "TX-University of Texas Medical Branch School of Medicine at Galveston",
  },
  {
    label: "146",
    value: "TX-University of Texas Rio Grande Valley School of Medicine",
  },
  {
    label: "147",
    value: "TX-University of Texas Southwestern Medical School at Dallas",
  },
  {
    label: "148",
    value: "UT-University of Utah School of Medicine",
  },
  {
    label: "149",
    value:
      "VT-Robert Larner, M.D., College of Medicine at the University of Vermont",
  },
  {
    label: "150",
    value: "VA-Eastern Virginia Medical School",
  },
  {
    label: "151",
    value: "VA-University of Virginia School of Medicine",
  },
  {
    label: "152",
    value:
      "VA-VCU School of Medicine, Medical College of Virginia Health Sciences Division",
  },
  {
    label: "153",
    value: "VA-Virginia Tech Carilion School of Medicine",
  },
  {
    label: "154",
    value: "WA-University of Washington School of Medicine",
  },
  {
    label: "155",
    value: " WA-Washington State University Elson S. Floyd College of Medicine",
  },
  {
    label: "156",
    value: "WV-Joan C. Edwards School of Medicine at Marshall University",
  },
  {
    label: "157",
    value: "WI-Medical College of Wisconsin",
  },
  {
    label: "158",
    value: "WI-University of Wisconsin School of Medicine and Public Health",
  },
];

export default MedicalSchools;
