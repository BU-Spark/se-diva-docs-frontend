interface MemberData {
    id: string;
    first_name: string;
    last_name: string;
  }
  
  async function fetchMembers(): Promise<MemberData[]> {
    const response = await fetch('https://se-diva-docs.herokuapp.com/approvedapplicants/view');
    const data = await response.json();
    return data;
  }
  
  export { fetchMembers };
  