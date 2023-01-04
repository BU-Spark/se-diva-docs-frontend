import { Admin, Resource, EditGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/users";
import { PostList } from "./components/posts";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} recordRepresentation="name"/>
    <Resource name="posts" list={PostList} edit={EditGuesser}/>
  </Admin>
);

export default App;