import React, { useState } from 'react'
import ExperienceForm from './ExperienceForm'
import ExperienceTable from './ExperienceTable'

function ExperienceComponent() {
    const [experienceData, setexperienceData] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [modalType, setmodalType] = useState('')
    const [editableExperience, seteditableExperience] = useState({
        designation: ' ',
        company: '',
        workfrom: ' ',
        workingtill: ' ',
        city: ' '
    })
    const [selectedIndex, setselectedIndex] = useState()
    const updateShowModal = (type, isShow) => {
        setmodalType(type)
        setshowModal(isShow)
        seteditableExperience({
            designation: ' ',
            company: '',
            workfrom: ' ',
            workingtill: ' ',
            city: ' '
        })
    }
    const getExperienceData = (experienceData) => {
        console.log(experienceData);
        if (modalType === 'add') {
            const experienceDataCopy = [...experienceData]
            experienceDataCopy.push(experienceData)
            setexperienceData(experienceDataCopy)
            setshowModal(false)
        } else if (modalType === 'edit') {
            const updatedData = experienceData.map((data, index) => {
                if (selectedIndex === index) {
                    return experienceData
                } else {
                    return data
                }
            })
            const updatedDataCopy = [...updatedData]
            setexperienceData(updatedDataCopy)
            setshowModal(false)
        }

    }
    const getEditableExperience = (exp, index) => {
        console.log(exp);
        console.log(index);
        seteditableExperience({ ...exp })
        setselectedIndex(index)
        setmodalType('edit')
        setshowModal(true)
    }
    return (
        <div>
            <ExperienceTable
                experienceData={experienceData}
                updateShowModal={updateShowModal}
                getEditableExperience={getEditableExperience} />
            {showModal && <ExperienceForm
                showModal={showModal}
                updateShowModal={updateShowModal}
                getExperienceData={getExperienceData}
                editableExperience={editableExperience}
                modalType={modalType}
            />}
        </div>
    )
}

export default ExperienceComponent
