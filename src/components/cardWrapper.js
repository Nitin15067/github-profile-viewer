import React from 'react';

// CSS
import '../styles/cardWrapper.css';

// Images
import deleteIcon from '../assets/images/deleteIcon.png';

const CardWrapper = ({users, deleteUser}) => {
    const routeChange = (username) => {
        window.open(`https://github.com/${username}`, '_blank'); 
          }
    return <div className="card-wrapper">
        {users.map((userData, idx) => {
            return (
                <div className="card-content">
                <img className="delete-card-img" onClick={() => deleteUser(idx)} src={deleteIcon} alt="" height={20} width={20} title="Delete" />
                <div className="card tooltip" key={idx} onClick={() => routeChange(userData.login)}>
                    {userData.bio ? <span class="tooltiptext">{userData.bio}</span> : null }
                <img src={userData.avatar_url} alt="" height="200" width="200" />
                <div className="user-details">
                    <p className="name">{userData.name}</p>
                    <hr />
                    <p className="location">{userData.location}</p>
                    <p className="followers"><b>Followers: </b>{userData.followers}</p>
                </div>
            </div>
            </div>

             )
        })}
    </div>
}

export default CardWrapper;