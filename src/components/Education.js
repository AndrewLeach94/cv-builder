import React, { useState } from "react";

// This is the primary source component 
export const Education = () => {

    const [editMode, setEditMode] = useState(false);
    const [education, setEducation] = useState([{
        yearsStudied: '2013-2017',
        university: 'Loyola University New Orleans',
        degree: "B.A. Mass Communication"
    }]);

    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');
    const [newUniversity, setNewUniversity] = useState('')
    const [newDegree, setNewDegree] = useState('');


     function toggleEditMode(event) {
         // this function toggles edit mode on and off
        setEditMode(!editMode);
        }

        function handleNewUniversity(event) {
            setNewUniversity(event.target.value)
        }
        
        function handleNewDegree(event) {
            setNewDegree(event.target.value)
        }

        function handleYearStart (event) {
            setYearStart(event.target.value)
                
        }
        
        function handleYearEnd(event) {
            setYearEnd(event.target.value)
        }

        
        
        function deleteEducation(props) {
            let newEducationArray = [...education]
            newEducationArray.splice(props, 1);

            setEducation(newEducationArray);
        }
        
        //this function constructs a new job object before adding it to the education array state
        function addNewEducation() {
            let newEducation;

            const generateYearsStudied = () => {
                //this function converts the yearEnd and yearStart to one string
                let newYearStart = yearStart;
                let newYearEnd = yearEnd;

                let yearsWorked = `${newYearStart}-${newYearEnd}`;
                return yearsWorked
            }

            newEducation = {
                yearsStudied: generateYearsStudied(),
                university: newUniversity,
                degree: newDegree,
            }
            
            const newEducationArray = [...education, newEducation];
                setEducation(newEducationArray)
                setNewUniversity('')
                setNewDegree('')
                setYearStart('')
                setYearEnd('')
        }
        
        // this function handles the information edits
        function renderEditMode() {
            return (
                <div id="education-list-edit">
                    {education.map(element => {
                        return (
                            <div key={element.university + "-container-edit"}className="education-container">
                                <h3 key={element.university + "-university-edit"}className="education_university">{element.university}</h3>
                                <p key={element.university + "-years-studied-edit"}className="education_years">{element.yearsStudied}</p>
                                <p key={element.university + "-degree-edit"}className="education_degree">{element.degree}</p>
                                <button type="button" className="button_delete-education" onClick={() => deleteEducation(education.indexOf(element))}> <i className="far fa-trash-alt"></i></button>
                            </div>
                        )
                    })}

                    <form id="basic-info-edit">
                        <label>University:
                            <input value={newUniversity} onChange={handleNewUniversity}></input>
                        </label>
                        <label>Degree:
                            <input value={newDegree} onChange={handleNewDegree}></input>
                        </label>
                        <label>Start year:
                            <input value={yearStart} onChange={handleYearStart} placeholder="eg. 2018"/>
                        </label>
                        <label>End year:
                            <input value={yearEnd} onChange={handleYearEnd} placeholder="eg. 2020"/>
                        </label>
                        <button type="button" className="button_primary" id="button_add-education" onClick={addNewEducation}>Add Education <i className="fas fa-arrow-right"></i></button>
                    </form>
                        <button type="button" className="button_primary" onClick={toggleEditMode}>Done</button>
                </div>
            )
        }

    return (
        <div id="education-parent" className="section-container">
            <h2 id="education">Education</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {editMode
            ? renderEditMode()
            : <div id="education-experience-details"> 
              {/* this function renders the list of education milestones */}
                {education.map(element => {
                   return (
                        <div key={element.university + "-container"}className="education-container">
                            <h3 key={element.university + "-university"}className="education_university">{element.university}</h3>
                            <p key={element.university + "-years-studied"}className="education_years">{element.yearsStudied}</p>
                            <p key={element.university + "-degree"}className="education_degree">{element.degree}</p>
                        </div>
                   )
                })}
                <button type="button" className="button_edit" onClick={toggleEditMode}><i className="far fa-edit"></i></button>
            </div>
            }
        </div>
    )

};






