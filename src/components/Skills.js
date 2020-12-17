import React, { Component } from "react";

// This is the primary source component 
export class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            skills: ['HTML', 'CSS', 'Javascript', 'React', 'Visual Design'],
            newSkill: '',
        };

    };

        toggleEditMode = (event) => {
         // this function toggles edit mode on and off
        this.setState({editMode: !this.state.editMode})
        }

        handleNewSkill = (event) => {
            this.setState({newSkill: event.target.value});
        }


        addSkill = (props) => {
            let newSkill = this.state.newSkill;
            let newSkillsArray = [...this.state.skills, newSkill];

            this.setState({skills: newSkillsArray});
            this.setState({newSkill: ''});
        }

        deleteSkill = (props) => {
            let newSkillsArray = [...this.state.skills];
            newSkillsArray.splice(props, 1);
            
            this.setState({skills: newSkillsArray});
        }

        
        // this function handles the information edits
        renderEditMode = () => {
            return (
                <form id="basic-info-edit">
                    {/* This renders the list of elements */}
                    <ul id="skills-list-edit">
                        {this.state.skills.map(element => {
                            return <li key={this.state.skills.indexOf(element)} data-index={this.state.skills.indexOf(element)}>{element}</li>
                        })}
                    
                    {/* This renders the bin icons to delete the skill it's paired with by index #*/}
                    {this.state.skills.map(element => {
                        return <button type="button" 
                                key={"delete-" + element }
                                className="button_delete" 
                                data-index={this.state.skills.indexOf(element)}
                                onClick={() => this.deleteSkill(this.state.skills.indexOf(element))}>
                                <i className="far fa-trash-alt"></i>
                                </button>
                    })}
                    </ul>
                    <div id="new-skill-container">
                        <input id="input_new-skill" 
                        value={this.state.newSkill} 
                        placeholder="Add additional skills"
                        onChange={this.handleNewSkill}>
                        </input>
                        <button type="button" id="button_new-skill" onClick={this.addSkill}><i className="fas fa-arrow-right"></i></button>
                    </div>
                    <button type="button" className="button_primary-lighter" onClick={this.toggleEditMode}>Save</button>
                </form>
            )
        }

    render() {

    return (
        <div id="skills-parent" className="section-container">
            <h2 id="skills">Skills</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders the list from the skills array */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div id="skills-container">
                <ul id="skills-list">
                    {this.state.skills.map(element => {
                        return <li key={element}>{element}</li>
                    })}
                </ul>
                <button type="button" className="button_edit" onClick={this.toggleEditMode}><i className="far fa-edit"></i></button>
              </div>
            }
        </div>
    )
}
};


