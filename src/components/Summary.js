import React, { useState } from "react";

// This is the primary source component 
export const Summary = () => {
    const [editMode, setEditMode] = useState(false);
    const [summary, setSummary] = useState('I am a frontend developer with a background in UX, visual design, video, and marketing. Rooted in atomic design principles, I am most passionate about effective design systems and developing high-quality user experiences that speak for the product and brand. I am experienced and comfortable working in an agile environment - both in an office and remote.');
    const [savedSummary, setSavedSummary] = useState('I am a frontend developer with a background in UX, visual design, video, and marketing. Rooted in atomic design principles, I am most passionate about effective design systems and developing high-quality user experiences that speak for the product and brand. I am experienced and comfortable working in an agile environment - both in an office and remote.');
    const [summaryBackup, setSummaryBackup] = useState('I am a frontend developer with a background in UX, visual design, video, and marketing. Rooted in atomic design principles, I am most passionate about effective design systems and developing high-quality user experiences that speak for the product and brand. I am experienced and comfortable working in an agile environment - both in an office and remote.');



        function toggleEditMode(event) {
            // this function toggles edit mode on and off
            setEditMode(!editMode);
            }

        function handleChange(event) {
            setSummary(event.target.value)
        }

        function saveEdit() {
            //this function saves the new backups before exiting edit mode
            setSummaryBackup(summary);

            //it also updates the savedSummary state so the summary changes only after the user hits save
            setSavedSummary(summary);

            toggleEditMode();
        }

        function cancelEdit() {
            // this function reverts the value back to it's backup before canceling edit mode
            setSummary(summaryBackup);

            toggleEditMode();
        }

        
        // this function handles the information edits
        function renderEditMode() {
            return (
                <form id="summary-edit">
                    <label>Summary
                        <textarea id="textarea_summary" value={summary} onChange={handleChange} placeholder="Type your summary here"></textarea>
                    </label>
                    <button type="button" className="button_primary" onClick={saveEdit}>Save</button>
                    <button type="button" className="button_secondary" onClick={cancelEdit}>Cancel</button>
                </form>
            )
        }

    return (
        <div id="summary-parent" className="section-container">
            <h2 id="summary">Summary</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {editMode
            ? renderEditMode()
            : <div id="basic-info-details"> 
              {/* this is normal mode */}
              <p>{savedSummary}</p>
              <button type="button" className="button_edit" onClick={toggleEditMode}><i className="far fa-edit"></i></button>
            </div>
            }
        </div>
    )

}
