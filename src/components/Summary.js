import React, { Component } from "react";

// This is the primary source component 
export class Summary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,

            summary: 'I am a frontend developer with a background in UX, visual design, video, and marketing. Rooted in atomic design principles, I am most passionate about effective design systems and developing high-quality user experiences that speak for the product and brand. I am experienced and comfortable working in an agile environment - both in an office and remote.',


          /* this state exists as the reference point for the name is updated on save. It prevents updating in real time as the user types since
             it screws with the syling if the name is long */ 
            savedSummary: 'I am a frontend developer with a background in UX, visual design, video, and marketing. Rooted in atomic design principles, I am most passionate about effective design systems and developing high-quality user experiences that speak for the product and brand. I am experienced and comfortable working in an agile environment - both in an office and remote.',
            
            // This backup is here if the user makes edits but wants to cancel and revert back
            summaryBackUp: 'I am a frontend developer with a background in UX, visual design, video, and marketing. Rooted in atomic design principles, I am most passionate about effective design systems and developing high-quality user experiences that speak for the product and brand. I am experienced and comfortable working in an agile environment - both in an office and remote.',
        };

    };

        toggleEditMode = (event) => {
            // this function toggles edit mode on and off
            this.setState({editMode: !this.state.editMode})
            }

        handleChange = (event) => {
            this.setState({
                summary: event.target.value
            })
        }

        saveEdit = () => {
            //this function saves the new backups before exiting edit mode
            this.setState({summaryBackup: this.state.summary});

            //it also updates the savedSummary state so the summary changes only after the user hits save
            this.setState({savedSummary: this.state.summary});

            this.toggleEditMode();
        }

        cancelEdit = () => {
            // this function reverts the value back to it's backup before canceling edit mode
            this.setState({summary: this.state.summaryBackUp});

            this.toggleEditMode();
        }

        
        // this function handles the information edits
        renderEditMode = () => {
            return (
                <form id="summary-edit">
                    <label>Summary
                        <textarea id="textarea_summary" value={this.state.summary} onChange={this.handleChange} placeholder="Type your summary here"></textarea>
                    </label>
                    <button type="button" className="button_primary" onClick={this.saveEdit}>Save</button>
                    <button type="button" className="button_secondary" onClick={this.cancelEdit}>Cancel</button>
                </form>
            )
        }

    render() {

    return (
        <div id="summary-parent" className="section-container">
            <h2 id="summary">Summary</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div id="basic-info-details"> 
              {/* this is normal mode */}
              <p>{this.state.savedSummary}</p>
              <button type="button" className="button_edit" onClick={this.toggleEditMode}><i className="far fa-edit"></i></button>
            </div>
            }
        </div>
    )
}
};


