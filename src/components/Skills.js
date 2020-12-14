import React, { Component } from "react";

// This is the primary source component 
export class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            skills: ['HTML', 'CSS', 'Javascript', 'React', 'Visual Design'],
            newSkill: '',
            
            // These backups are here if the user makes edits but wants to cancel and revert back
            nameBackUp: 'Your Name',
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
            let newSkillsArray = [...this.state.skills];
            newSkillsArray.push(this.state.newSkill);

            this.setState({skills: newSkillsArray});
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
                        <button type="button" id="button_new-skill" onChange={this.addSkill}><i className="fas fa-arrow-right"></i></button>
                    </div>
                    <button type="button" className="button_primary" onClick={this.saveEdit}>Save</button>
                </form>
            )
        }

    render() {

    return (
        <div id="basic-info-parent">
            <h2 id="name">Skills</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders the list from the skills array */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div className="section-container">
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


