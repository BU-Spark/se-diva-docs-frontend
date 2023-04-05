import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./components/users";
import authProvider from "./authprovider";
//import simpleRestProvider from 'ra-data-simple-rest';





const dataProvider = jsonServerProvider('https://se-diva-docs.herokuapp.com');
//const dataProvider = simpleRestProvider('https://se-diva-docs.herokuapp.com');
console.log(dataProvider)

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="applicants/view" list={UserList} edit={UserEdit} show={ShowGuesser}/>
  </Admin>
);
  

export default App;
