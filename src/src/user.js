import React from 'react';
import "./styles.css";
export default function Cards(props) {
    return (
        <>
            {props.userData.map((user, index) => {
                return (
                    <div class="column">
                        <div class="image">
                            <img src={user.avatar} alt="image"></img>
                        </div>
                        <div class="details">
                            <h2>
                                <span> <b> {user.first_name + ' ' + user.last_name} </b> </span>
                            </h2>
                            <p> {user.email}</p>
                            <a href="#services" class="read-more">
                                <span> know more </span>
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    );



}