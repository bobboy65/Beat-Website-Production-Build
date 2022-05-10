import React, { useState, useEffect } from 'react';
import './MainSec.css';  
import axios from "axios"
import { ImNext } from 'react-icons/im';
import {GiCircle} from 'react-icons/gi' 
import {FaUserAlt} from 'react-icons/fa'



function MainSec () {
    const [posts, setPosts] = useState([]);

    // useEffect(()=> {
    //     const fetchPosts = async()=> {
    //         const res = await axios.get("/login")
    //         console.log(res)
    //         setPosts(res.data);
    //     }
    //     fetchPosts();
    // },[])

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


    //href = 'http://localhost:8080'
    return (
        <>
            <div className = 'backsplash'>
                <a className = "login" href = 'http://localhost:8080' > 
                    <GiCircle color = {'#8A8A8A'} stroke-width = {5} size = {45} textAnchor="middle" alignmentBaseline="middle"  />
                    <FaUserAlt size = {25} color = {'#8A8A8A'}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        style={{ position: 'absolute', left: '.7em', bottom: '.75em', zIndex: '-1' }}   
                    />
                </a>  
                    {/* <img 
                    className = 'purplebeach'
                    src = 'images/purplebeach.jpg' 
                    alt='purplebeach'>
                    </img> */}
            </div>
        </>
    );

}

export default MainSec;
