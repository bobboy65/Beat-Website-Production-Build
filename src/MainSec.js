import React, { useState, useEffect } from 'react';
import './MainSec.css';  
import axios from "axios"

import {FaUserCircle} from 'react-icons/fa'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MainSec () {
    const [posts, setPosts] = useState([]);

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

    // const getLoginAuth = async () => {
    //     try { 
    //         const res = await axios.get('http://localhost:8080', {
    //     }).catch((error) => {
    //         console.error(error)
    //     });
    //         console.log(res.data)
    //     }
    //     catch (err) { 
    //         console.log(err)
    //     }
        
    // }

    // const $dropdownArrow = document.querySelector('.fa-angle-down');
    // const $checkbox = document.getElementById('openDropdown');
    // console.log($checkbox)
    // const $dropdownMenu = document.querySelector('.dropdown-menu');
    
    // $checkbox.addEventListener('change', () => {
    //   $dropdownArrow.classList.toggle('rotate-dropdown-arrow');
    // });
    
    // $dropdownMenu.addEventListener('click', (e) => {
    //   $checkbox.checked = false;
    //   // setting checked to false won't trigger 'change'
    //   // event, manually dispatch an event to rotate
    //   // dropdown arrow icon
    //   $checkbox.dispatchEvent(new Event('change'));
    // });

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
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>

                        </div>
                    </div>

                </div>  
            </div>
        </>
    );

}

export default MainSec;
