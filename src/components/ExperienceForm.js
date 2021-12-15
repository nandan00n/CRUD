import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Modal, Form } from 'react-bootstrap'

function ExperienceForm(props) {
    const [experienceFormData, setexperienceFormData] = useState({
        designation: ' ',
        company: '',
        workfrom: '',
        workingtill: '',
        city: ' '
    })
    const handleClose = () => {
        props.updateShowModal('', false)
    }
    const saveData = () => {
        props.getExperienceData(experienceFormData)

    }
    useEffect(() => {
        setexperienceFormData({ ...props.editableExperience })
    }, [props.editableExperience])

    return (
        <div >
            <Modal show={props.showModal} onHide={handleClose} >
                <Modal.Header closeButton style={{ borderRadius: '10px', boxShadow: '1px 2px 2px black' }}>
                    <Modal.Title>Experience Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup style={{ fontWeight: 'bold' }}>
                            <label style={{ display: 'block', marginLeft: '11px' }}  >Designation: </label>
                            <input style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={experienceFormData.designation}
                                onChange={(e) => {
                                    setexperienceFormData({
                                        ...experienceFormData,
                                        designation: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', marginLeft: '11px' }}  >Company: </label>
                            <input style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={experienceFormData.company}
                                onChange={(e) => {
                                    setexperienceFormData({
                                        ...experienceFormData,
                                        company: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', margin: '11px' }} >Work From: </label>
                            <input style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={experienceFormData.workfrom}
                                onChange={(e) => {
                                    setexperienceFormData({
                                        ...experienceFormData,
                                        workfrom: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', margin: '11px' }} >Working Till: </label>
                            <input style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={experienceFormData.workingtill}
                                onChange={(e) => {
                                    setexperienceFormData({
                                        ...experienceFormData,
                                        workingtill: e.target.value
                                    })
                                }} /><br />
                            <label style={{ display: 'block', marginLeft: '11px' }}  >City: </label>
                            <input style={{ margin: '10px', borderRadius: '5px', boxShadow: '1px 2px 2px black' }}
                                value={experienceFormData.city}
                                onChange={(e) => {
                                    setexperienceFormData({
                                        ...experienceFormData,
                                        city: e.target.value
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

export default ExperienceForm
