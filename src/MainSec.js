import React, { useState, useEffect } from 'react';
import './MainSec.css';  

import {FaUserCircle} from 'react-icons/fa'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useToken} from "./useToken"
import axios from "axios"
import { useLocation } from 'react-router-dom';

function MainSec () {
    const [token, setToken] = useState(null);

// Dropdown Menu

    useEffect(()=> {
        const profileDropDown = async()=> {
            const $dropdownArrow = document.querySelector('.fa-angle-down');
            const $checkbox = document.getElementById('openDropdown');
            console.log($checkbox)
            const $dropdownMenu = document.querySelector('.dropdown-menu');
            
            $checkbox.addEventListener('change', () => {
              $dropdownArrow.classList.toggle('rotate-dropdown-arrow');
            });
            
            $dropdownMenu.addEventListener('click', (e) => {
              $checkbox.checked = false;
              // setting checked to false won't trigger 'change'
              // event, manually dispatch an event to rotate
              // dropdown arrow icon
              $checkbox.dispatchEvent(new Event('change'));
            });
        }
        profileDropDown();
    },[])

    let location = useLocation();
    let currentURL = window.location.href;

    function URLChecker() {
        // setTimeout(function(){
        //     console.log("Executed immediately");
            if (location.pathname.indexOf('/profile') === 0) {
                //setToken(true);
                return true;
            }
    }
    function tokenChanger() {
        setToken(true);
        console.log("finally ", token)
    }

    useEffect(()=> {
        //console.log("url checker is:" + URLChecker());
        if(URLChecker() == true){
            tokenChanger();
            console.log(location)
            console.log(token);
            if (token) {
                console.log("benis");
            }
        console.log(token);
        axios.get('http://localhost:8080/profile')
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        }  
    },[URLChecker])

    useEffect (() => {

    }, [token])
    //axios.defaults.baseURL = 'https://nextdaybeats.com';
    //axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    const makeRequest = (status) => {
        
        let type = status;
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        let fail = `http://localhost:8080/${type}`
        //console.log(fail)
    }
    const makeRequest2 = (status) => {
    const response = fetch("http://localhost8080/signin", {
    method: "GET",
    mode: "cors",
    headers: {
        Authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify(response),

});
console.log(response.json());

    }
    //href = 'http://localhost:8080'
    return (
        <>
            <div className = 'backsplash'>
            {/* href = 'http://localhost:8080' */}
                <div className = "login"  > 
                    <div class="dropdown-container">
                        <label for="openDropdown" className="dropdown">
                        <FaUserCircle class = "userCircle" size = {30}  />
                            <i className="fa fa-angle-down"></i>
                        </label>
                        <input type="checkbox" id="openDropdown" hidden>
                        </input>
                        <div class="dropdown-menu">
                            {/* <button onClick = {()=> { makeRequest('signup') }} > */}
                            <a href = "http://localhost:8080/signup">
                            <span >Sign up</span>
                            </a>
                            <a href = "http://localhost:8080/signin" >
                            <span>Sign in</span>
                            </a>
                            <a href = 'http://localhost:8080/profile' >
                            <span>Profile</span>
                            </a>
                            <a href = 'http://localhost:8080/logout' >
                            <span>Logout</span>
                            </a>
                        </div>
                    </div>

                   
                    {/* <a onClick = {useToken}>lol </a>
                    {console.log('benis')} */}
                </div>  
            </div>
        </>
    );

}

export default MainSec;
