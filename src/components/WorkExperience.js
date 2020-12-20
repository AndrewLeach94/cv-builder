import React, { useState } from "react";

// This is the primary source component 
export const WorkExperience = () => {

        const [editMode, setEditMode] = useState(false);
        const [jobs, setJobs] = useState([{
            jobTitle: 'Job Title', 
            company: 'Company Name', 
            yearsWorked: '2018-2020', 
            summary: 'A summary of job responsibilities',
        }]);

        const [newTitle, setNewTitle] = useState('');
        const [newCompany, setNewCompany] = useState('');
        const [yearStart, setYearStart] = useState('');
        const [yearEnd, setYearEnd] = useState('');
        const [newSummary, setNewSummary] = useState('');

     function toggleEditMode(event) {
         // this function toggles edit mode on and off
        setEditMode(!editMode)
        }

        function handleNewTitle(event) {
            setNewTitle(event.target.value);
        }
        
        function handleNewCompany(event) {
            setNewCompany(event.target.value);
        }
        
        function handleYearStart(event) {
            setYearStart(event.target.value);
        }
        
        function handleYearEnd(event) {
            setYearEnd(event.target.value);

        }
        
        function handleNewSummary(event) {
            setNewSummary(event.target.value);

        }
        
        function deleteJob(props) {
            let newJobsArray = [...jobs]
            newJobsArray.splice(props, 1);

            setJobs(newJobsArray);
        }
        
        //this function constructs a new job object before adding it to the jobs array state
        function addNewWorkExperience() {
            let newJob;

            const generateYearsWorked = () => {
                //this function converts the yearEnd and yearStart to one string
                let newYearStart = yearStart;
                let newYearEnd = yearEnd;

                let yearsWorked = `${newYearStart}-${newYearEnd}`;
                return yearsWorked
            }

            newJob = {
                jobTitle: newTitle,
                company: newCompany,
                yearsWorked: generateYearsWorked(),
                summary: newSummary
            }
            
            const newJobsArray = [...jobs, newJob];
                setJobs(newJobsArray);
                setNewTitle('');
                setNewCompany('');
                setYearStart('');
                setYearEnd('');
                setNewSummary('');

        }
        
        
        
        
        // this function handles the information edits
        function renderEditMode() {
            return (
                <div id="jobs-list-edit">
                    {jobs.map(element => {
                        return (
                            <div key={element.company + "-container-edit"}className="job-container">
                                <h3 key={element.company + "-title-edit"}className="job_position">{element.jobTitle}</h3>
                                <p key={element.company + "-company-edit"}className="job_company">{element.company}</p>
                                <p key={element.company + "-years-edit"}className="job_years">{element.yearsWorked}</p>
                                <p key={element.company + "-summary-edit"}className="job_summary">{element.summary}</p>
                                <button type="button" className="button_delete-work" onClick={() => deleteJob(jobs.indexOf(element))}> <i className="far fa-trash-alt"></i></button>
                            </div>
                        )
                    })}

                    <form id="work-experience-edit">
                        <label>Job Title:
                            <input value={newTitle} onChange={handleNewTitle}></input>
                        </label>
                        <label>Company:
                            <input value={newCompany} onChange={handleNewCompany}></input>
                        </label>
                        <label>Start year:
                            <input value={yearStart} onChange={handleYearStart} placeholder="eg 2018"/>
                        </label>
                        <label>End year:
                            <input value={yearEnd} onChange={handleYearEnd} placeholder="eg 2020"/>
                        </label>
                        <label>Job Summary:
                            <textarea id="textarea_job-summary" value={newSummary} onChange={handleNewSummary} placeholder="A brief summary of your work experience"></textarea>
                        </label>
                        <button type="button" id="button_add-work" className="button_primary" onClick={addNewWorkExperience}>Add Job <i className="fas fa-arrow-right"></i></button>
                    </form>
                        <button type="button" className="button_primary" onClick={toggleEditMode}>Done</button>
                </div>
            )
        }

    return (
        <div id="work-experience-parent" className="section-container">
            <h2 id="work-experience">Work Experience</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {editMode
            ? renderEditMode()
            : <div id="work-experience-details"> 
              {/* this function renders the list of jobs */}
                {jobs.map(element => {
                   return (
                        <div key={element.company + "-container"}className="job-container">
                            <h3 key={element.company + "-title"}className="job_position">{element.jobTitle}</h3>
                            <p key={element.company + "-company"}className="job_company">{element.company}</p>
                            <p key={element.company + "-years"}className="job_years">{element.yearsWorked}</p>
                            <p key={element.company + "-summary"}className="job_summary">{element.summary}</p>
                        </div>
                   )
                })}
                <button type="button" className="button_edit" onClick={toggleEditMode}><i className="far fa-edit"></i></button>
            </div>
            }
        </div>
    )
};


