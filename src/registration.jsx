import React, { useState } from 'react';
import './registration.css'; 

const FormDataSheetForm = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby7ySa2_vMi3fKHvcD4ezgpA8xSZFycVajqvawB-G2HAobhjSeltd24O9eokAyJTizq/exec';
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: new FormData(e.target) });
            if (response.ok) {
                setSuccessMessage('Saved');
            } else {
                console.error('Error!', response.statusText);
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
       
            <body>
                
                <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                    
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required /><br /><br />

                    <label htmlFor="occupation">Occupation:</label><br />
                    <input type="text" id="occupation" name="occupation" required /><br /><br />

                    <label htmlFor="institution">Current/Last Educational Institution:</label><br />
                    <input type="text" id="institution" name="institution" required /><br /><br />

                    <label htmlFor="dob">Date of Birth:</label><br />
                    <input type="text" id="dob" name="dob" required /><br /><br />

                    <label>Email:</label><br />
                    <input type="email" name="email" required /><br /><br />

                    <label>Contact Number:</label><br />
                    <input type="text" name="phone" required /><br /><br />

                    <label htmlFor="whatsapp">Whatsapp Number:</label><br />
                    <input type="text" id="whatsapp" name="whatsapp" required /><br /><br />

                    <label htmlFor="nationality">Nationality:</label><br />
                    <input type="text" id="nationality" name="nationality" required /><br /><br />

                    <label htmlFor="city">Current Residing City:</label><br />
                    <input type="text" id="city" name="city" required /><br /><br />

                    <label>1st Committee Preference:</label> <br />
                    <input type="radio" name="committee1" value="DISEC" /><label>UNDISEC</label>
                    <input type="radio" name="committee1" value="CSW" /><label>UNCSW</label>
                    <input type="radio" name="committee1" value="HCR" /><label>UNHCR</label>
                    <input type="radio" name="committee1" value="Lok Sabha" /><label>Lok Sabha</label>
                    <input type="radio" name="committee1" value="VPC" /><label>VPC</label>
                    <input type="radio" name="committee1" value="IP" /><label>IP</label> <br /><br />

                    <label>Position Preference:</label> <br />
                    <input type="radio" name="post1" value="Chairperson/Speaker" /><label>Chairperson</label>
                    <input type="radio" name="post1" value="ViceChairperson/DeputySpeaker" /><label>Vice-Chairperson</label>
                    <input type="radio" name="post1" value="Director" /><label>Director</label>
                    <input type="radio" name="post1" value="IPHead" /><label>IP Head</label>
                    <input type="radio" name="post1" value="PhotographyHead" /><label>Photography Head</label><br /><br />

                    <label htmlFor="agenda1">Propose 2 Agendas for preferred committee with Reasoning:</label><br />
                    <textarea id="agenda1" name="agenda1" rows="6" cols="50" required></textarea><br /><br />

                    <label>2nd Committee Preference:</label> <br />
                    <input type="radio" name="committee2" value="DISEC" /><label>UNDISEC</label>
                    <input type="radio" name="committee2" value="CSW" /><label>UNCSW</label>
                    <input type="radio" name="committee2" value="HCR" /><label>UNHCR</label>
                    <input type="radio" name="committee2" value="Lok Sabha" /><label>Lok Sabha</label>
                    <input type="radio" name="committee2" value="VPC" /><label>VPC</label>
                    <input type="radio" name="committee2" value="IP" /><label>IP</label> <br /><br />

                    <label>Position Preference:</label> <br />
                    <input type="radio" name="post2" value="Chairperson/Speaker" /><label>Chairperson</label>
                    <input type="radio" name="post2" value="ViceChairperson/DeputySpeaker" /><label>Vice-Chairperson</label>
                    <input type="radio" name="post2" value="Director" /><label>Director</label><br /><br />

                    <input type="radio" name="post2" value="IPHead" /><label>IP Head</label>
                    <input type="radio" name="post2" value="PhotographyHead" /><label>Photography Head</label><br /><br />

                    <label htmlFor="agenda2">Propose 2 Agendas for preferred committee with Reasoning:</label><br />
                    <textarea id="agenda2" name="agenda2" rows="6" cols="50" required></textarea><br /><br />
                    <label>Will the applicant require accommodation?</label> <br />
                <input type="radio" name="accommodation" value="yes" /><label>Yes</label>
                <input type="radio" name="accommodation" value="no" /><label>No</label><br /><br />

                <label>Will the applicant be open to a position below their preferences?</label> <br />
                <input type="radio" name="openToPositionBelowTheirPreference" value="yes" /><label>Yes</label>
                <input type="radio" name="openToPositionBelowTheirPreference" value="no" /><label>No</label><br /><br />

                <label htmlFor="munCV">Upload link of your MUN CV (enable access):</label><br />
                <textarea id="munCV" name="munCV" rows="6" cols="50" required></textarea><br /><br />

                <label htmlFor="marksheet">Upload link of your MUN marksheet (enable access):</label><br />
                <textarea id="marksheet" name="marksheet" rows="6" cols="50" required></textarea><br /><br />

                <button type="submit" className="submit-button">Register</button>
            </form>

            {successMessage && <span id="success">{successMessage}</span>}
        </body>
    
);
};

export default FormDataSheetForm;
