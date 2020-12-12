import React, { Component } from "react";

// This is the primary source component 
export class BasicInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,

            phoneNumber: '123-456-7890',
            emailAddress: 'example@example.com',
            gitHub: 'GitHub URL',
            
            // These backups are here if the user makes edits but wants to cancel and revert back
            phoneNumberBackUp: '123-456-7890',
            emailAddressBackUp: 'example@example.com',
            gitHubBackUp: 'GitHub URL',
        };

    };

     toggleEditMode = (event) => {
         // this function toggles edit mode on and off
        this.setState({editMode: !this.state.editMode})
        }

        handlePhoneChange = (event) => {
            this.setState({
                phoneNumber: event.target.value
            })
        }
        
        handleEmailChange = (event) => {
            this.setState({
                emailAddress: event.target.value
            })
        }
        
        handleGitHubChange = (event) => {
            this.setState({
                gitHub: event.target.value
            })
        }

        saveEdit = () => {
            //this function saves the new backups before exiting edit mode
            this.setState({phoneNumberBackup: this.state.phoneNumber});
            this.setState({emailAddressBackup: this.state.emailAddress});
            this.setState({gitHubBackup: this.state.gitHub});

            this.toggleEditMode();
        }

        cancelEdit = () => {
            // this function reverts the values back to their backups before canceling edit mode
            this.setState({phoneNumber: this.state.phoneNumberBackUp});
            this.setState({emailAddress: this.state.emailAddressBackUp});
            this.setState({gitHub: this.state.gitHubBackUp});

            this.toggleEditMode();
        }

        
        // this function handles the information edits
        renderEditMode = () => {
            return (
                <form id="basic-info-edit">
                    <input name="phone" type="tel" value={this.state.phoneNumber} placeholder="eg. 123-456-7890" onChange={this.handlePhoneChange}/>
                    <input name="emailAddress" type="email" value={this.state.emailAddress} placeholder="example@example.com" onChange={this.handleEmailChange}/>
                    <input name="gitHub" value={this.state.gitHub} placeholder="GitHub URL" onChange={this.handleGitHubChange}/>
                    <button type="button" className="button_primary" onClick={this.saveEdit}>Save</button>
                    <button type="button" className="button_secondary" onClick={this.cancelEdit}>Cancel</button>
                </form>
            )
        }

    render() {

    return (
        <div>
            <h2>Basic Info:</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div> 
              {/* this is normal mode */}
              <button type="button" className="button_edit" onClick={this.toggleEditMode}><i className="far fa-edit"></i></button>
              <ul id="list_basic-info">
                  <li>{this.state.phoneNumber}</li>
                  <li>{this.state.emailAddress}</li>
                  <li>{this.state.gitHub}</li>
              </ul>
            </div>
            }
        </div>
    )
}
};


