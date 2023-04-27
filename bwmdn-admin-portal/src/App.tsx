import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./components/users";
//import authProvider from "./authprovider";
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

type FetchOptions = {
  headers?: Headers;
  // add other properties as needed
}

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    options.headers = new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${JSON.parse(auth).access_token}`,
    });
  }
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('https://se-diva-docs.herokuapp.com', fetchJson);

const headers = { Authorization: "" };

//const dataProvider = jsonServerProvider('https://se-diva-docs.herokuapp.com');
//const dataProvider = simpleRestProvider('https://se-diva-docs.herokuapp.com');
const authProvider = {
  login: ({ username, password }: { username: string, password: string }) => {
    const request = new Request('https://se-diva-docs.herokuapp.com/admin_login', {
      method: 'POST',
      body: new URLSearchParams({
        username,
        password,
      }),
      headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    });
    console.log(request)
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(auth => {
        localStorage.setItem('auth', JSON.stringify(auth));
        console.log(localStorage.getItem('auth'))
      });
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkError: ({ status }: { status?: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="applicants/view" list={UserList} edit={UserEdit} show={ShowGuesser}/>
  </Admin>
);
  

export default App;
