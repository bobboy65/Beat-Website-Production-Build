import React, { useState, useEffect } from 'react';
import './MainSec.css';  
import axios from "axios"
import { ImNext } from 'react-icons/im';

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
                <a className = "login"   >
                    Sign in
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
