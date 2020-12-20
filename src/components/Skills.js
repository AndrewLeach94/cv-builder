import React, { useState } from "react";

// This is the primary source component 
export const Skills = () => {

        const [editMode, setEditMode] = useState(false);
        const [skills, setSkills] = useState(['HTML', 'CSS', 'Javascript', 'React', 'Visual Design']);
        const [newSkill, setNewSkill] = useState('');


        function toggleEditMode(event) {
         // this function toggles edit mode on and off
        setEditMode(!editMode);
        }

        function handleNewSkill(event) {
            setNewSkill(event.target.value);
        }


        function addSkill(props) {
            let newestSkill = newSkill;
            let newestSkillsArray = [...skills, newestSkill];

            setSkills(newestSkillsArray);
            setNewSkill('');
        }

        function deleteSkill(props) {
            let newSkillsArray = [...skills];
            newSkillsArray.splice(props, 1);
            
            setSkills(newSkillsArray);
        }

        
        // this function handles the information edits
        function renderEditMode() {
            return (
                <form id="basic-info-edit">
                    {/* This renders the list of elements */}
                    <ul id="skills-list-edit">
                        {skills.map(element => {
                            return <li key={skills.indexOf(element)} data-index={skills.indexOf(element)}>{element}</li>
                        })}
                    
                    {/* This renders the bin icons to delete the skill it's paired with by index #*/}
                    {skills.map(element => {
                        return <button type="button" 
                                key={"delete-" + element }
                                className="button_delete" 
                                data-index={skills.indexOf(element)}
                                onClick={() => deleteSkill(skills.indexOf(element))}>
                                <i className="far fa-trash-alt"></i>
                                </button>
                    })}
                    </ul>
                    <div id="new-skill-container">
                        <input id="input_new-skill" 
                        value={newSkill} 
                        placeholder="Add additional skills"
                        onChange={handleNewSkill}>
                        </input>
                        <button type="button" id="button_new-skill" onClick={addSkill}><i className="fas fa-arrow-right"></i></button>
                    </div>
                    <button type="button" className="button_primary" onClick={toggleEditMode}>Save</button>
                </form>
            )
        }

    return (
        <div id="skills-parent" className="section-container">
            <h2 id="skills">Skills</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders the list from the skills array */}
            {editMode
            ? renderEditMode()
            : <div id="skills-container">
                <ul id="skills-list">
                    {skills.map(element => {
                        return <li key={element}>{element}</li>
                    })}
                </ul>
                <button type="button" className="button_edit" onClick={toggleEditMode}><i className="far fa-edit"></i></button>
              </div>
            }
        </div>
    )
};


