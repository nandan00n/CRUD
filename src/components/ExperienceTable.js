import React from "react";
import { Button, Table } from "react-bootstrap";

function ExperienceTable({ getEditableExperience, updateShowModal,  experienceData }) {

    const sendExperienceData = ( experience, index) => {
        getEditableExperience( experience, index)
    }
    return (
        <div style={{ display: 'block', width: '96vw', textAlign: 'center' }} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{ width: '250px' }}>Designation</th>
                        <th style={{ width: '250px' }}>Company</th>
                        <th style={{ width: '250px' }}>WorkForm</th>
                        <th style={{ width: '250px' }}>Working Till</th>
                        <th style={{ width: '250px' }}>City</th>
                        <th style={{ width: '250px' }}><Button variant="outline-primary" onClick={() => { updateShowModal('add', true) }}>Add</Button></th>
                    </tr>
                </thead>
                <tbody>
                    { experienceData.map(( experience, index) => {
                        return (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{ experience.designation}</td>
                                <td>{ experience.company}</td>
                                <td>{ experience.workfrom}</td>
                                <td>{ experience.workingtill}</td>
                                <td>{ experience.city}</td>
                                <td>
                                    <Button style={{ marginRight: '10px' }}
                                        variant="outline-success" onClick={() => {
                                            sendExperienceData(experience, index)
                                        }}>
                                        Update
                                    </Button>
                                    <Button variant="outline-danger">Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default ExperienceTable;
