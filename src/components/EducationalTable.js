import React from "react";
import { Button, Table } from "react-bootstrap";

function EducationalTable({ getEditableEducation, updateShowModal, educationalData }) {

    const sendEducationData = (education, index) => {
        getEditableEducation(education, index)
    }
    return (
        <div style={{ display:'block', width:'96vw', textAlign:'center' }} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{ width: '250px' }}>Education</th>
                        <th style={{ width: '250px' }}>Course</th>
                        <th style={{ width: '250px' }}>Institution</th>
                        <th style={{ width: '250px' }}>Year of Passing</th>
                        <th style={{ width: '250px' }}>Percentage</th>
                        <th style={{ width: '250px' }}><Button variant="outline-primary" onClick={() => { updateShowModal('add', true) }}>Add</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {educationalData.map((education, index) => {
                        return (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{education.education}</td>
                                <td>{education.course}</td>
                                <td>{education.institution}</td>
                                <td>{education.yop}</td>
                                <td>{education.percentage}</td>
                                <td>
                                    <Button style={{ marginRight: '10px' }}
                                        variant="outline-success" onClick={() => {
                                            sendEducationData(education, index)
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

export default EducationalTable;
