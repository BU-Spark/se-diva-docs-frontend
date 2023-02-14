import { Datagrid, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="middle_name" />
            <TextField source="last_name" />
            <TextField source="suffix" />
            <TextField source="primary_email" />
            <TextField source="secondary_email" />
            <TextField source="phone_number" />
            <TextField source="address.street" />
            <TextField source="address_type" />
            <TextField source="current_academic_affiliation" />
            <TextField source="current_hospital_company" />
            <TextField source="current_position" />
            <TextField source="specialty" />
            <TextField source="areas_of_work" />
            <TextField source="geographic_region" />
            <TextField source="bwmdn_chapter_question" />
            <TextField source="membership_directory_agreement" />
            <TextField source="resume_included_question" />
            <TextField source="divadocs_boston_member.divadocs_boston_member_question" />
            <TextField source="race_ethnicity" />
            <TextField source="gender_identity" />
            <TextField source="pronouns" />
            <TextField source="will_sponsor_question.sponsor_question_answer" />
        </Datagrid>
    </List>
);