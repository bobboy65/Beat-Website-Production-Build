import React, { useState, useEffect } from 'react';
// import AudioPlayer from '../Audioplayer'
// import '../Audioplayer.css';

import './About.css'




export default function About() {    





  return(

    <div className = "loginPage">
      <section className = "loginSection">
          <header className = "websiteLogo">
              <a href = "/" >
              NextDayBeats.com
              </a>
          </header>
    
          <form className = "loginForm" action = "http://localhost:8080/signin" >

              <br>
              </br>  
              <button className = "loginButton" type = "submit" >
                  Sign in
              </button>
          </form>
          
          <h2 class = "hr1">
          </h2>
          <span class = "orSpan">
              OR
          </span>
          
          
          <form class = "registerForm" action = "http://localhost:8080/signup">
          <button className = "loginRegisterButton" >
              <div className = "registerLink"  >
                  Register
              </div> 
          </button>
          
    
          </form>
          
      </section>
      
        
        
        <div className = "starterText" >
          New & Improved, MERN up and Running SOON! 
        </div>

        <div className = "starterText2">
            Dm comments/inquiries on Insta
        </div>

        <div className = "starterText3">
        Enjoy
        </div>

        <div className = "starterText4">
        </div>

       
    
    </div>
    
    

    
    );
    }
        
    
   

