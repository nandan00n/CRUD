import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Modal ,Form } from 'react-bootstrap'

function EducationalForm(props) {
    const [educationFormData, seteducationFormData] = useState({
        education:' ',
        course: '',
        institution: '',
        yop: '',
        percentage: ' '
    })
    const handleClose = () => {
        props.updateShowModal('', false)
    }
    const saveData = () => {
        props.getEducationData(educationFormData)

    }
    useEffect(() => {
        seteducationFormData({ ...props.editableEducation })
    }, [props.editableEducation])

    return (
        <div >
            <Modal show={props.showModal} onHide={handleClose} >
                <Modal.Header closeButton style={{ borderRadius: '10px', boxShadow: '1px 2px 2px black' }}>
                    <Modal.Title>Educational Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup style={{fontWeight: 'bold' }}>
                            <label style={{display:'block' , marginLeft:'11px' }}  >Education: </label>
                            <input style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={educationFormData.education}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                education: e.target.value
                            })
                        }} /><br />
                            <label style={{ display: 'block', marginLeft: '11px' }}  >Course: </label>
                            <input   style={{ margin: '10px',borderRadius:'5px', boxShadow: '1px 2px 2px black' }}
                                value={educationFormData.course}
                                onChange={(e) => {
                                    seteducationFormData({
                                        ...educationFormData,
                                        course: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', margin: '11px' }} >Institute: </label>
                            <input   style={{ margin: '10px',borderRadius:'5px', boxShadow: '1px 2px 2px black' }}
                        value={educationFormData.institution}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                institution: e.target.value
                            })
                                }} /><br />
                            <label style={{ display: 'block', margin: '11px' }} >Year of Passing: </label>
                            <input   style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={educationFormData.yop}
                                onChange={(e) => {
                                    seteducationFormData({
                                        ...educationFormData,
                                        yop: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', marginLeft: '11px'    }}  >Percentage: </label>
                            <input   style={{ margin: '10px', borderRadius: '5px' , boxShadow: '1px 2px 2px black'}}
                        value={educationFormData.percentage}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                percentage: e.target.value
                            })
                        }} />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveData}>
                        {props.modalType === 'add' ? 'ADD' : 'EDIT'}
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EducationalForm
