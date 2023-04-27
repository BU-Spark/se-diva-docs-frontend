import React, { useState, useEffect } from 'react';
import { Datagrid, DateField, List, TextField, EmailField, Edit, SimpleForm, TextInput, Toolbar, SaveButton, DeleteButton, Show, SimpleShowLayout, useNotify, useRedirect, useCreate, SelectInput, ReferenceInput, RecordContext } from 'react-admin';
import { useRecordContext} from "react-admin";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from 'react-admin';


export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="middle_name" />
            <TextField source="last_name" />
            <EmailField source="primary_email" />
            <TextField source="current_position" />
            <TextField source="specialty" />
            <TextField source="geographic_region" />
            <TextField source="divadocs_boston_member.divadocs_boston_member_question" />
        </Datagrid>
    </List>
);


/*export const UserEdit = () => {
    const [create] = useCreate();
    const postSave = (data:any) => {
        create('applicants/approveapplicant', { data });
    };
    return (
        <Edit>
            <SimpleForm onSubmit={postSave}>
                <TextInput source="first_name" fullWidth helperText={false}/>
            </SimpleForm>
        </Edit>
    );
};*/

const EditTitle = () => {
    const record = useRecordContext(); 
    return <span>{record ? `${record.first_name} ${record.last_name}` : ''}</span>;
};

const ApproveButton = (props:any) => <SaveButton {...props} icon={<AddBoxIcon />} label="Approve" alwaysEnable/>;
const DeclineButton = (props:any) => <SaveButton {...props} icon={<AddBoxIcon />} label="Decline" alwaysEnable/>;


const MyToolbar = () => (
    <Toolbar>
        <ApproveButton/>
        <DeclineButton/>
    </Toolbar>
);


export const UserEdit = () => {
    const record = useRecordContext();

    const [button, setButton] = useState("");

    const handleApprove = () => {
        setButton("approve");
    }
    const handleDecline = () => {
        setButton("decline");
    }
    const MyToolbar = () => (
        <Toolbar>
            <ApproveButton onClick={handleApprove}/>
            <DeclineButton onClick={handleDecline}/>
        </Toolbar>
    );
    const [create] = useCreate();
    const redirect = useRedirect();
    const approveORdecline = async (data:any) => {
        if (button == "approve"){
            console.log(data);
            //data.applicant_status.subscription_tier = 
            try {
                await create('applicants/approveapplicant', { data } );

            } catch (error) {
                console.log('error');
                console.log(error);
            }
            redirect('list');
        }
        else if (button == "decline"){
            console.log(data);
            try {
                await create('applicants/declineapplicant', { data });
            } catch (error) {
                console.log('error');
                console.log(error);
            }
            redirect('list');
        }
    };
    
    const PdfButton = () => {
        const record = useRecordContext();
  
        const handleShowResume = async () => {
          try {
            const id = await record.id;
            const response = await fetch(`https://se-diva-docs.herokuapp.com/applicants/downloadresume/${id}.pdf`,{
                headers: {Authorization: `Bearer ${await localStorage.getItem('auth')}`, }});
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
          } catch (error) {
            console.error(error);
          }
        };
      
        useEffect(() => {
          // your effect here
        }, []);
      
        return (
          <Button label="Download PDF" onClick={handleShowResume}/>
        );
      };
      
      
    return(
    <Edit title={<EditTitle />} >
        <SimpleForm  toolbar={<MyToolbar/>} onSubmit={approveORdecline} >
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
            <PdfButton />
            <SelectInput
            required 
            multiline
            fullWidth
            source="applicant_status.subscription_tier"
            optionText="name" 
            choices={[
                { id: 'Joycelyn Elders Society', name: 'Joycelyn Elders Society' },
                { id: 'Barbara Ross Society', name: 'Barbara Ross Society' },
                { id: 'Alexa Canaday Society', name: 'Alexa Canaday Society' },
                { id: 'Mae Jemison Society', name: 'Mae Jemison Society' },
                { id: 'Nancy Oriol Society', name: 'Nancy Oriol Society' },
            ]} 
            />
        </SimpleForm>
    </Edit>
);
};

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);