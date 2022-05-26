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
    const substring = '2b$10$'
    useEffect(() => {
        console.log(location)
        if(window.location.href.indexOf(substring) != -1){
            var status = true
            setToken(location.pathname);
            console.log(status)
        }
        else{
            setToken(null)
        }
    },[location]);
    console.log(token)

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
                            <a href = 'http://localhost:8080/signup' >
                            <span>Sign up</span>
                            </a>
                            <a href = 'http://localhost:8080/signin' >
                            <span>Sign in</span>
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
