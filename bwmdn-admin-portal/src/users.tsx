import * as React from 'react';
import { Datagrid, DateField, List, TextField, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { useRecordContext} from "react-admin";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="middle_name" />
            <TextField source="last_name" />
            <DateField source="suffix" />
            <TextField source="primary_email" />
            <DateField source="secondary_email" />
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
            <TextField source="race" />
            <TextField source="ethnicity" />
            <TextField source="gender_identity" />
            <TextField source="pronouns" />
            <TextField source="will_sponsor_question.sponsor_question_answer" />
            <DateField source="applicant_status.subscription_tier" />
        </Datagrid>
    </List>
);

const EditTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.first_name} ${record.last_name}` : ''}</span>;
};

export const UserEdit = () => (
    <Edit title={<EditTitle />}>
        <SimpleForm>
            <Typography variant="h6" gutterBottom>
                Identity
            </Typography>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="first_name" disabled fullWidth helperText={false}/>
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="last_name" disabled fullWidth helperText={false}/>
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="race" disabled fullWidth helperText={false}/>
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="ethnicity" disabled fullWidth helperText={false}/>
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="gender_identity" disabled fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="pronouns" disabled fullWidth />
                </Box>
            </Box>

            <Typography variant="h6" gutterBottom>
                Contact
            </Typography>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="primary_email" disabled fullWidth helperText={false}/>
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="secondary_email" disabled fullWidth helperText={false}/>
                </Box>
            </Box>
            <TextInput source="phone_number" disabled fullWidth/>

            <Typography variant="h6" gutterBottom>
                Address
            </Typography>
            <TextInput
                source="address.street"
                multiline
                fullWidth
                helperText={false}
                disabled
            />
            <Box display={{ xs: 'block', sm: 'flex', width: '100%'}}>
                <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="address.city" disabled fullWidth helperText={false} />
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput
                        source="address.state"
                        fullWidth
                        helperText={false}
                        disabled
                    />
                </Box>
                <Box flex={2}>
                    <TextInput source="address.zip_code" disabled fullWidth helperText={false} />
                </Box>
            </Box>
            <TextInput source="address_type" disabled fullWidth/>

            <Typography variant="h6" gutterBottom>
                Experience
            </Typography>
            <TextInput
                source="current_academic_affiliation"
                multiline
                fullWidth
                helperText={false}
                disabled
            />
            <TextInput
                source="current_hospital_company"
                multiline
                fullWidth
                helperText={false}
                disabled
            />
            <TextInput
                source="current_position"
                multiline
                fullWidth
                helperText={false}
                disabled
            />
            <TextInput
                source="specialty"
                multiline
                fullWidth
                helperText={false}
                disabled
            />
            <TextInput
                source="areas_of_work"
                multiline
                fullWidth
                helperText={false}
                disabled
            />
            <TextInput
                source="geographic_region"
                multiline
                fullWidth
                disabled
            />

            <Typography variant="h6" gutterBottom>
                BWMDN Information
            </Typography>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="bwmdn_chapter_question" disabled fullWidth helperText={false} />
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput
                        source="membership_directory_agreement"
                        fullWidth
                        helperText={false}
                        disabled
                    />
                </Box>
                <Box flex={1}>
                    <TextInput source="resume_included_question" disabled fullWidth helperText={false} />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="divadocs_boston_member.divadocs_boston_member_question" disabled fullWidth helperText={false}/>
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="divadocs_boston_member.years" disabled fullWidth helperText={false}/>
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="will_sponsor_question.sponsor_question_answer" disabled fullWidth helperText={false}/>
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="will_sponsor_question.activities_interested" disabled fullWidth helperText={false}/>
                </Box>
            </Box>
        </SimpleForm>
    </Edit>
);