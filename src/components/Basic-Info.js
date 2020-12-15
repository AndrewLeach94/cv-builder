import React, { Component } from "react";

// This is the primary source component 
export class BasicInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,

            name: 'Your Name',
            phoneNumber: '123-456-7890',
            emailAddress: 'example@example.com',
            gitHub: 'GitHub URL',

          /* this state exists as the reference point for the name is updated on save. It prevents updating in real time as the user types since
             it screws with the syling if the name is long */ 
            savedName: 'Your Name',
            
            // These backups are here if the user makes edits but wants to cancel and revert back
            nameBackUp: 'Your Name',
            phoneNumberBackUp: '123-456-7890',
            emailAddressBackUp: 'example@example.com',
            gitHubBackUp: 'GitHub URL',
        };

    };

     toggleEditMode = (event) => {
         // this function toggles edit mode on and off
        this.setState({editMode: !this.state.editMode})
        }

        handleNameChange = (event) => {
            this.setState({
                name: event.target.value
            })
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
            this.setState({nameBackup: this.state.name});
            this.setState({phoneNumberBackup: this.state.phoneNumber});
            this.setState({emailAddressBackup: this.state.emailAddress});
            this.setState({gitHubBackup: this.state.gitHub});

            //it also updates the savedName state so the name changes only after the user hits save
            this.setState({savedName: this.state.name});

            this.toggleEditMode();
        }

        cancelEdit = () => {
            // this function reverts the values back to their backups before canceling edit mode
            this.setState({name: this.state.nameBackUp});
            this.setState({phoneNumber: this.state.phoneNumberBackUp});
            this.setState({emailAddress: this.state.emailAddressBackUp});
            this.setState({gitHub: this.state.gitHubBackUp});

            this.toggleEditMode();
        }

        
        // this function handles the information edits
        renderEditMode = () => {
            return (
                <form id="basic-info-edit">
                    <input name="name" id="input_name" type="text" value={this.state.name} placeholder="Type your name..." onChange={this.handleNameChange}/>
                    <label> Phone:
                        <input name="phone" type="tel" value={this.state.phoneNumber} placeholder="eg. 123-456-7890" onChange={this.handlePhoneChange}/>
                    </label>
                    <label> Email:
                        <input name="emailAddress" type="email" value={this.state.emailAddress} placeholder="example@example.com" onChange={this.handleEmailChange}/>
                    </label>
                    <label>GitHub:
                        <input name="gitHub" value={this.state.gitHub} placeholder="GitHub URL" onChange={this.handleGitHubChange}/>
                    </label>
                    <button type="button" className="button_primary" onClick={this.saveEdit}>Save</button>
                    <button type="button" className="button_secondary" onClick={this.cancelEdit}>Cancel</button>
                </form>
            )
        }

    render() {

    return (
        <div id="basic-info-parent" className="section-container">
            <h2 id="name">{this.state.savedName}</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {this.state.editMode
            ? this.renderEditMode()
            : <div id="basic-info-details"> 
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


