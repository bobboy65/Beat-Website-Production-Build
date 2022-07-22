//Accessing Files from S3 Storage Logic:
import React, { useState, useEffect,useRef, useContext } from 'react';
import axios from "axios"
const PF = "http://localhost:8080/download"

export const getNewSong = async () => {
    try {
    const res = await axios.get(PF, {
    });
    const newSong = res.data
    console.log({newSong})
    } catch (err) {
        console.error(err)
    }
}



export const SongList = [

    {
    title: "Table for Humina",
    artist: "Toni",
    img_src: "../images/humina.jpg",
    src: "../beats/tableforhumina prod.mp3",
    mood: "Rebellious",
    time: "4:02"
    }        ,

    {
    title: "Trapavelli",
    artist: "Toni",
    img_src: "../images/ig88.jfif",
    src: "../beats/trapavelliprod1.mp3",
    mood: "Enraged",
    time: "2:24"
    },
    {
        title: "Mimosa",  
        artist: "Toni",
        img_src: "../images/mimosa.jfif",
        src: "../beats/hornsprod.mp3",
        mood: "Calm",
        time: "2:08"
          //index loaded into site initially
      },
    {
    title: "Delta Ave",
    artist: "Toni",
    img_src: "../images/hoh.jpg",
    src: "../beats/delta ave prod.mp3",
    mood: "Crunk",
    time: "2:30"
    },
    {
    title: "Riding out",
    artist: "Toni",
    img_src: "../images/kfc.jfif",
    src: "../beats/Riding out.mp3",
    mood: "Inspiring",
    time: "3:07"
    },

    {
    title: "You Ain't Ever",
    artist: "Toni",
    img_src: "../images/youaintever.jpeg",
    src: "../beats/you ain't ever prod.mp3",
    mood: "Energetic",
    time: "3:27"
    }        ,

    {
    title: "Basic",
    artist: "Toni",
    img_src: "../images/boppers.jpeg",
    src: "../beats/basic b C#.mp3",
    mood: "",
    time: ""
    }        ,
    
    {
    title: "Beach Peach",
    artist: "Toni",
    img_src: "../images/corral.jpeg",
    src: "../beats/beach peach 146 a minor.mp3",
    mood: "Confident",
    time: "2:54"
    }        ,
    {
    title: "Red's Dub",
    artist: "Toni",
    img_src: "../images/red dub.gif",
    src: "../beats/red dub.mp3",
    mood: "Happy",
    time: "4:24"
    }        ,
    {
    title: "Beneath the Waves",
    artist: "Toni",
    img_src: "../images/swim.jpeg",
    src: "../beats/beneath the waves freestyle.mp3",
    mood: "",
    time: ""
    }        ,
    {
    title: "Scamalot",
    artist: "Toni",
    img_src: "../images/scamalot.jpeg",
    src: "../beats/scamalot prod.mp3",
    mood: "Crazy",
    time: "2:58"
    }        ,
    {
    title: "Diamonds Dancing",
    artist: "Toni",
    img_src: "../images/diamondsdancing.jpeg",
    src: "../beats/Diamonds Dancing (work in  progress).mp3",
    mood: "Dark",
    time: "2:32"
    },
    {
        title: "el Bandito",
        artist: "Toni",
        img_src: "../images/24karat.jpeg",
        src: "../beats/el bandito f.mp3",
        mood: "",
        time: ""
        },
        
    {
    title: "Jacko",
    artist: "Toni",
    //img_src: "../images/",
    src: "../beats/jacko C#.mp3",
    mood: "",
    time: ""
    } ,
    {
        title: "Mountain Tones",
        artist: "Toni",
        //img_src: "../images/humina.jpg",
        src: "../beats/Mountain Tones a minor.mp3",
        mood: "",
        time: ""
        } ,
{
    title: "Powa Outage 2",
    artist: "Toni",
    //img_src: "../images/humina.jpg",
    src: "../beats/Powa Outage 2 G.mp3",
    mood: "",
    time: ""
    } ,
    {
        title: "Reach a Round",
        artist: "Toni",
        //img_src: "../images/humina.jpg",
        src: "../beats/ReachAround f.mp3",
        mood: "",
        time: ""
        } ,
        {
            title: "Revolution Trap",
            artist: "Toni",
         //   img_src: "../images/humina.jpg",
            src: "../beats/Revolution Trap freestyle.mp3",
            mood: "",
            time: ""
            }             
                
]

export default {
        SongList,
        getNewSong
}

