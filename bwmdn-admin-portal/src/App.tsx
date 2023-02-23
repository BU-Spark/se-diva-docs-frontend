import { Admin, ListGuesser, EditGuesser, Resource, ShowGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./components/users";
//import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = jsonServerProvider('http://localhost:3000');
//const dataProvider = jsonServerProvider('https://se-diva-docs.herokuapp.com');
//const dataProvider = simpleRestProvider('https://se-diva-docs.herokuapp.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} show={ShowGuesser}/>
  </Admin>
  );
  

export default App;