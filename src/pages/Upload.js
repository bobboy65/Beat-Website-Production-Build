import React, { useState, useEffect,useRef, useContext } from 'react';
import {ImFileMusic} from 'react-icons/im';
import {ImImage} from 'react-icons/im';
import axios from "axios";
import {Context} from "../context/Context"


import './Upload.css'

export default function Upload() {    

const trackRef = useRef();
const artistRef = useRef();
const moodRef = useRef();
const audioRef = useRef();
const imageRef = useRef();

const [title,setTitle] = useState(null);
const [artist,setArtist] = useState(null);
const [mood,setMood] = useState(null);
const [songFile, setSongFile] = useState(null);
const [imgFile, setImgFile] = useState(null);
const [bpm, setBPM] = useState(null);
const [scale, setScale] = useState(null);
const [status, setStatus] = useState(undefined);


const {user, dispatch} = useContext(Context);

//The server URI we want to send our post data to
const PF = "http://localhost:8080/upload";


const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('fileUpload', songFile);
        data.append('fileUpload', imgFile);
        data.append('mood', mood);
        data.append('artist', artist);
        data.append('title', title);
        data.append('bpm', bpm);
        data.append('scale', scale);
        data.append('songFile', songFile.name)
        data.append('imgFile', imgFile.name)
        
        
    if (songFile && imgFile && title && artist && mood) {
        try {
            setStatus({type: 'success'})
            await axios.post(PF, data)
        } catch (err) {
            setStatus({type: 'error' , err });
        }
    }
    else {
        setStatus({type: 'error'});
    }    
}

    return(

            <div className = 'uploadMenu'>
                {/* action = "../../post" method = "post" */}
                <h1 class = "uploadTitle"> Please Fill out Track Info: </h1>
            
            <form className = "uploadForm" enctype = "multipart/form-data" 
                    //action = "/upload" method = "POST"
                    > 
                <div class = "fieldContainer">
                    <label className = "newTrack"> Title* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "trackInput"
                    placeholder = "New Track"
                    ref = {trackRef}
                    onChange = {e=>setTitle(e.target.value)}
                    name = "fileUpload"
                    value = {title}
                    />    
                        <br></br>

                    <label className = "newTrack"> Artist* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "artistInput"
                    placeholder = "Artist Name"
                    ref = {artistRef}
                    name = "fileUpload" 
                    onChange = {e=>setArtist(e.target.value)}
                    value = {artist}
                    />    
                        <br></br>

                    <label className = "newTrack"> Mood* </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "moodInput"
                    placeholder = "One word description"
                    ref = {moodRef}
                    name = "fileUpload" 
                    onChange = {e=>setMood(e.target.value)}
                    value = {mood}   
                    />    
                        <br></br>
                    
                        <label className = "newTrack"> BPM </label>
                        <br></br>
                    <input 
                    type = "number"
                    className = "bpmInput"
                    placeholder = "Number, how fast your head bobs"
                    
                    name = "fileUpload" 
                    onChange = {e=>setBPM(e.target.value)}
                    value = {bpm}   
                    />    
                        <br></br>
                        <label className = "newTrack"> Scale of Beat </label>
                        <br></br>
                    <input 
                    type = "text"
                    className = "scaleInput"
                    placeholder = "e.g. G major"
                    
                    name = "fileUpload" 
                    onChange = {e=>setScale(e.target.value)}
                    value = {scale}   
                    />    
                        <br></br>
                </div>

                <div class = "fileContainer">
                <div class = "songInput"> Mp3/Wav File For Upload* 
                <br/>
                <br/>
                <ImFileMusic  size = {90}/>
                <br/>
                <br/>
                <input 
                accept="audio/*" 
                id="musicUpload"
                type="file" 
                ref = {audioRef}
                onChange = {(e) => setSongFile(e.target.files[0])}
                name = "fileUpload"
                />
                </div>
                
                <div class = "imgInput"> jpg/jpeg/png for Upload*
                <br/>
                <br/>
                <ImImage aria-label = "upload image" class = "imgHolder" size = {90}/>
                <br/>
                <br/>
                <input 
                accept="image/*" 
                action = "/upload"
                id="fileUpload"
                type="file" 
                ref = {imageRef} 
                name = "imgUpload"
                onChange = {(e) => setImgFile(e.target.files[0])}
                 />
                </div>
               
                </div>
            <button class = "uploadButton" type = "submit" onClick = {handleSubmit}> + Upload </button>
            {status?.type === 'success' && <p> Successful Upload!</p>}
            {status?.type === 'error' && (
                <p> Unsuccessful Upload, make sure to fill out all fields </p>
            )}
            </form>
            </div> 

        );
}
    