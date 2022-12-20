import React from 'react';
  
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const SignIn = () => <Admin dataProvider={dataProvider} />;

  
export default SignIn;