import React, { Component } from "react";

// This is the primary source component 
export class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,

            education: [ 
                {
                yearsStudied: '2013-2017',
                university: 'Loyola University New Orleans',
                degree: "B.A. Mass Communication"
            }],

            yearStart: '',
            yearEnd: '',
            newUniversity: '',
            newDegree: '',
        };

    };

     toggleEditMode = (event) => {
         // this function toggles edit mode on and off
        this.setState({editMode: !this.state.editMode})
        }

        handleNewUniversity = (event) => {
            this.setState({
                newUniversity: event.target.value
            })
        }
        
        handleNewDegree = (event) => {
            this.setState({
                newDegree: event.target.value
            })
        }

        handleYearStart = (event) => {
            this.setState({
                yearStart: event.target.value
            })
        }
        
        handleYearEnd = (event) => {
            this.setState({
                yearEnd: event.target.value
            })
        }

        
        
        deleteEducation = (props) => {
            let newEducationArray = [...this.state.education]
            newEducationArray.splice(props, 1);

            this.setState({education: newEducationArray});
        }
        
        //this function constructs a new job object before adding it to the education array state
        addNewEducation = () => {
            let newEducation;

            const generateYearsStudied = () => {
                //this function converts the yearEnd and yearStart to one string
                let yearStart = this.state.yearStart;
                let yearEnd = this.state.yearEnd;

                let yearsWorked = `${yearStart}-${yearEnd}`;
                return yearsWorked
            }

            newEducation = {
                yearsStudied: generateYearsStudied(),
                university: this.state.newUniversity,
                degree: this.state.newDegree,
            }
            
            const newEducationArray = [...this.state.education, newEducation];
            this.setState({
                education: newEducationArray,
                newUniversity: '',
                newDegree: '',
                yearStart: '',
                yearEnd: '',
            });

        }
        
        
        
        
        // this function handles the information edits
        renderEditMode = () => {
            return (
                <div id="education-list-edit">
                    {this.state.education.map(element => {
                        return (
                            <div key={element.university + "-container-edit"}className="education-container">
                                <h3 key={element.university + "-university-edit"}className="education_university">{element.university}</h3>
                                <p key={element.university + "-years-studied-edit"}className="education_years">{element.yearsStudied}</p>
                                <p key={element.university + "-degree-edit"}className="education_degree">{element.degree}</p>
                                <button type="button" className="button_delete-education" onClick={() => this.deleteEducation(this.state.education.indexOf(element))}> <i className="far fa-trash-alt"></i></button>
                            </div>
                        )
                    })}

                    <form id="basic-info-edit">
                        <label>University:
                            <input value={this.state.newUniversity} onChange={this.handleNewUniversity}></input>
                        </label>
                        <label>Degree:
                            <input value={this.state.newDegree} onChange={this.handleNewDegree}></input>
                        </label>
                        <label>Start year:
                            <input value={this.state.yearStart} onChange={this.handleYearStart} placeholder="eg. 2018"/>
                        </label>
                        <label>End year:
                            <input value={this.state.yearEnd} onChange={this.handleYearEnd} placeholder="eg. 2020"/>
                        </label>
                        <button type="button" className="button_primary" id="button_add-education" onClick={this.addNewEducation}>Add Education <i className="fas fa-arrow-right"></i></button>
                    </form>
                        <button type="button" className="button_primary" onClick={this.toggleEditMode}>Done</button>
                </div>
            )
        }

    render() {

    return (
        <div id="education-parent" className="section-container">
            <h2 id="education">Education</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div id="education-experience-details"> 
              {/* this function renders the list of education milestones */}
                {this.state.education.map(element => {
                   return (
                        <div key={element.university + "-container"}className="education-container">
                            <h3 key={element.university + "-university"}className="education_university">{element.university}</h3>
                            <p key={element.university + "-years-studied"}className="education_years">{element.yearsStudied}</p>
                            <p key={element.university + "-degree"}className="education_degree">{element.degree}</p>
                        </div>
                   )
                })}
                <button type="button" className="button_edit" onClick={this.toggleEditMode}><i className="far fa-edit"></i></button>
            </div>
            }
        </div>
    )
}
};


