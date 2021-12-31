import React from "react";
import { useState } from "react";
import Cards from "./user";
import "./App.css";

function App() {
    const [isDateLoaded, setIsDateloaded] = React.useState(false);
    const [userData, setUserData] = React.useState([]);
    const [isButtonClick, setisButtonClick] = React.useState(false);
    const handleClick = () => {
        setisButtonClick(true);
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((res) => {
                setUserData(res.data);
                setInterval(() => {
                    setIsDateloaded(true);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });

    };
    return (
        <>  <div class="swiper-container">
            <div class="bg bg3"></div>
            <section className="wholecontainer">

                <div class="nav" id="mynav">
                    <h1> LetsGrowMore </h1>
                </div>

                <div className="container" align="center">
                    <div className="row justify-content-center" >
                        {
                            isButtonClick ? (
                                isDateLoaded ? (
                                    <Cards userData={userData} />
                                ) : (
                                    <div class="loader"></div>
                                )
                            ) : (
                                <div className="instruction">
                                    <h2><strong> Click Button To View Users </strong></h2>
                                </div>

                            )}
                    </div>
                    <div class="bottom" id="mybottom">
                        <a href="#getusers" class="btn" onClick={handleClick}><b> Get Users</b></a>
                    </div>
                </div>
            </section>
        </div>
        </>

    );
} export default App;

