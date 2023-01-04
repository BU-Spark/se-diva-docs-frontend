import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);