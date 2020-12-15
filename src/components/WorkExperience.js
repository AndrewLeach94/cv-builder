import React, { Component } from "react";

// This is the primary source component 
export class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,

            jobs: [ 
                {
                jobTitle: 'Job Title', 
                company: 'Company Name', 
                yearsWorked: '2018-2020', 
                summary: 'A summary of job responsibilities',
            }],

            newTitle: '',
            newCompany: '',
            yearStart: '',
            yearEnd: '',
            newSummary: '',
        };

    };

     toggleEditMode = (event) => {
         // this function toggles edit mode on and off
        this.setState({editMode: !this.state.editMode})
        }

        handleNewTitle = (event) => {
            this.setState({
                newTitle: event.target.value
            })
        }
        
        handleNewCompany = (event) => {
            this.setState({
                newCompany: event.target.value
            })
        }

        
        // this function handles the information edits
        renderEditMode = () => {
            return (
                <div id="jobs-list-edit">
                    {this.state.jobs.map(element => {
                        return (
                            <div key={element.company + "-container-edit"}className="job-container">
                                <h3 key={element.company + "-title-edit"}className="job_position">{element.jobTitle}</h3>
                                <p key={element.company + "-company-edit"}className="job_company">{element.company}</p>
                                <p key={element.company + "-years-edit"}className="job_years">{element.yearsWorked}</p>
                                <p key={element.company + "-summary-edit"}className="job_summary">{element.summary}</p>
                                <button type="button"> <i className="far fa-trash-alt"></i></button>
                            </div>
                        )
                    })}

                    <form id="basic-info-edit">
                        <label>Job Title:
                            <input value={this.state.newTitle} onChange={this.handleNewTitle}></input>
                        </label>
                        <label>Company:
                            <input value={this.state.newCompany} onChange={this.handleNewTitle}></input>
                        </label>
                        <label>Years:
                            <input value={this.state.newCompany} type="date" placeHolder="Year Start:"onChange={this.handleNewTitle}></input>
                            <input value={this.state.newCompany} type="date" placeHolder="Year End:"onChange={this.handleNewTitle}></input>
                        </label>
                        <label>Job Summary:
                            <textarea id="textarea_job-summary"></textarea>
                        </label>
                        <button type="button" className="button_primary" onClick={this.saveEdit}>Save</button>
                    </form>
                </div>
            )
        }

    render() {

    return (
        <div id="work-experience-parent" className="section-container">
            <h2 id="work-experience">{this.state.savedName}</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div id="work-experience-details"> 
              {/* this function renders the list of jobs */}
                {this.state.jobs.map(element => {
                   return (
                        <div key={element.company + "-container"}className="job-container">
                            <h3 key={element.company + "-title"}className="job_position">{element.jobTitle}</h3>
                            <p key={element.company + "-company"}className="job_company">{element.company}</p>
                            <p key={element.company + "-years"}className="job_years">{element.yearsWorked}</p>
                            <p key={element.company + "-summary"}className="job_summary">{element.summary}</p>
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


