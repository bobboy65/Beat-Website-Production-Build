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
        title: "42 Dugg",
        artist: "Toni",
        img_src: "../images/piano.jfif",
        src: "../beats/dugg.mp3",
        mood: "Eccentric",
        time: "3:58"
        },
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
    title: "Bopper",
    artist: "Toni",
    img_src: "../images/boppers.jpeg",
    src: "../beats/Bopper a minor.mp3",
    mood: "Epic",
    time: "1:53"
    }        ,
    
    {
    title: "Golden Corral",
    artist: "Toni",
    img_src: "../images/corral.jpeg",
    src: "../beats/Corral Prod.mp3",
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
    title: "Swim",
    artist: "Toni",
    img_src: "../images/swim.jpeg",
    src: "../beats/Swim Prod.mp3",
    mood: "Lonely",
    time: "3:10"
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
        title: "24karat",
        artist: "Toni",
        img_src: "../images/24karat.jpeg",
        src: "../beats/24karat prod.mp3",
        mood: "Hyper",
        time: "2:31"
        }     
]

export default {
        SongList,
        getNewSong
}

