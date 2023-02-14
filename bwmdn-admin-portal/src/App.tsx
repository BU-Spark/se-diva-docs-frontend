import { Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";

const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
  );
  

export default App;