import React, { useState, useEffect } from 'react';
import './MainSec.css';  

import {FaUserCircle} from 'react-icons/fa'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useToken} from "./useToken"
import axios from "axios"
import { useLocation } from 'react-router-dom';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

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

    const makeRequest = (status) => {
        let type = status;
        let fail = `http://localhost:8080/${type}`
        
        axios.get('http://localhost:8080/signin')
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    let location = useLocation();


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
                            <div href = "javascript:void(0);" onClick = {makeRequest("signup")}>
                            <span >Sign up</span>
                            </div>
                            <a href = "http://localhost:8080/signin" >
                            <span>Sign in</span>
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
