import React, { useState } from "react";

// This is the primary source component 
export const BasicInfo = () => {

    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('Your Name');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [emailAddress, setEmailAddress] = useState('example@example.com');
    const [gitHub, setGitHub] = useState('GitHub URL');
    const [savedName, setSavedName] = useState('Your Name');
    const [nameBackup, setNameBackup] = useState('Your Name');
    const [phoneNumberBackup, setPhoneNumberBackup] = useState('123-456-7890');
    const [emailBackup, setEmailBackup] = useState('example@example.com');
    const [gitHubBackup, setGitHubBackup] = useState('GitHub URL');


     function toggleEditMode(event) {
         // this function toggles edit mode on and off
        setEditMode(!editMode)
        }

        function handleNameChange(event) {
           setName(event.target.value)
        }
        
        function handlePhoneChange(event) {
            setPhoneNumber(event.target.value)
        }
        
        function handleEmailChange(event) {
            setEmailAddress(event.target.value)
        }
        
        function handleGitHubChange(event) {
            setGitHub(event.target.value)

        }

        function saveEdit() {
            //this function saves the new backups before exiting edit mode
            setNameBackup(name);
            setPhoneNumberBackup(phoneNumber);
            setEmailBackup(emailAddress);
            setGitHubBackup(gitHub);

            //it also updates the savedName state so the name changes only after the user hits save
            setSavedName(name);

            toggleEditMode();
        }

        function cancelEdit() {
            // this function reverts the values back to their backups before canceling edit mode
            setName(nameBackup);
            setPhoneNumber(phoneNumberBackup);
            setEmailAddress(emailBackup);
            setGitHub(gitHubBackup);

            toggleEditMode();
        }

        
        // this function handles the information edits
        function renderEditMode() {
            return (
                <form id="basic-info-edit">
                    <input name="name" id="input_name" type="text" value={name} placeholder="Type your name..." onChange={handleNameChange}/>
                    <label> Phone:
                        <input name="phone" type="tel" value={phoneNumber} placeholder="eg. 123-456-7890" onChange={handlePhoneChange}/>
                    </label>
                    <label> Email:
                        <input name="emailAddress" type="email" value={emailAddress} placeholder="example@example.com" onChange={handleEmailChange}/>
                    </label>
                    <label>GitHub:
                        <input name="gitHub" value={gitHub} placeholder="GitHub URL" onChange={handleGitHubChange}/>
                    </label>
                    <button type="button" className="button_primary" onClick={saveEdit}>Save</button>
                    <button type="button" className="button_secondary" onClick={cancelEdit}>Cancel</button>
                </form>
            )
        }

    return (
        <div id="basic-info-parent" className="section-container">
            <h2 id="name">{savedName}</h2>
            {/* If edit mode is on, the component will re-render in edit mode. Otherwise it renders in display mode */}
            {editMode
            ? renderEditMode()
            : <div id="basic-info-details"> 
              {/* this is normal mode */}
              <button type="button" className="button_edit" onClick={toggleEditMode}><i className="far fa-edit"></i></button>
              <ul id="list_basic-info">
                  <li>{phoneNumber}</li>
                  <li>{emailAddress}</li>
                  <li>{gitHub}</li>
              </ul>
            </div>
            }
        </div>
    )

};


