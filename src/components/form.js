import React, {useState} from 'react';

// css
import './form.css';

const Form = ({addUser}) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const handleUserAdd = (e) =>{
        e.preventDefault();
        validateForm();
        if(usernameError === ""){
            addUser(username);
        }
    }
    const validateForm = () => {
        setUsernameError("");
        if(username === "")
            setUsernameError(usernameError + 'User name should not be empty. ');
    }
    return <>
            <div className="form-wrapper">
                <form className="form">
                <input 
                    className="username-input" 
                    name="username" value={username} placeholder="Github Login" onChange={(e) => setUsername(e.target.value)} />
                        <button className="add-btn" type="submit" onClick={handleUserAdd}>Add</button>
                </form>

                <span className="username-error">{usernameError}</span>
                </div>
            <hr />
            </>
}

export default Form;