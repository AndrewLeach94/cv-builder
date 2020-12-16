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
        
        handleNewSummary = (event) => {
            this.setState({
                newSummary: event.target.value
            })
        }
        
        deleteJob = (props) => {
            let newJobsArray = [...this.state.jobs]
            newJobsArray.splice(props, 1);

            this.setState({jobs: newJobsArray});
        }
        
        //this function constructs a new job object before adding it to the jobs array state
        addNewWorkExperience = () => {
            let newJob;

            const generateYearsWorked = () => {
                //this function converts the yearEnd and yearStart to one string
                let yearStart = this.state.yearStart;
                let yearEnd = this.state.yearEnd;

                let yearsWorked = `${yearStart}-${yearEnd}`;
                return yearsWorked
            }

            newJob = {
                jobTitle: this.state.newTitle,
                company: this.state.newCompany,
                yearsWorked: generateYearsWorked(),
                summary: this.state.newSummary
            }
            
            const newJobsArray = [...this.state.jobs, newJob];
            this.setState({
                jobs: newJobsArray,
                newTitle: '',
                newCompany: '',
                yearStart: '',
                yearEnd: '',
                newSummary: '',
            });

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
                                <button type="button" onClick={() => this.deleteJob(this.state.jobs.indexOf(element))}> <i className="far fa-trash-alt"></i></button>
                            </div>
                        )
                    })}

                    <form id="basic-info-edit">
                        <label>Job Title:
                            <input value={this.state.newTitle} onChange={this.handleNewTitle}></input>
                        </label>
                        <label>Company:
                            <input value={this.state.newCompany} onChange={this.handleNewCompany}></input>
                        </label>
                        <label>Start year:
                            <input value={this.state.yearStart} onChange={this.handleYearStart} placeholder="eg. 2018"/>
                        </label>
                        <label>End year:
                            <input value={this.state.yearEnd} onChange={this.handleYearEnd} placeholder="eg. 2020"/>
                        </label>
                        <label>Job Summary:
                            <textarea id="textarea_job-summary" value={this.state.newSummary} onChange={this.handleNewSummary}></textarea>
                        </label>
                        <button type="button" className="button_primary" onClick={this.addNewWorkExperience}>Add Job</button>
                    </form>
                        <button type="button" className="button_primary" onClick={this.toggleEditMode}>Save</button>
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


