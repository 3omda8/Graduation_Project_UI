import'./Home.css'
import { useState} from "react";
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import { AiFillFileImage } from "react-icons/ai"
import React, { useEffect } from 'react';
import axios from 'axios';



export default function Home() {
    const [image,setImage]=useState(null);
    const [fileName,setFileName] =useState("No Selected File");
    const [generate,setGenerate] = useState(false);
    return(
    <>
    <main>

    {generate && <label className='result'> Result is : <br></br> bala7 </label>}
        <form className='fm1'
        onClick={() => document.querySelector(".input-field").click()}
        >
           
            <input type="file"  accept="image/*"  className="input-field" hidden 
             
            onChange={({target : {files}}) => {
    
                files[0] && setFileName(files[0].name)
                if(files){
    
                    setImage(URL.createObjectURL(files[0]))
                }
    
            } }
    
            />
            { image ?
             <img src={image} width={412} height={312} alt={fileName}/> 
             : 
            <> 
            <MdCloudUpload color="#1475cf"  size={60}  /> 
            <p className="font">Browse Files To Upload Photo</p>
            </>
            }
        </form>
        <section className="Upload-row">
    
    <AiFillFileImage color="#1475cf" />
    <span className="upload-content">
    
        {fileName} -
        <MdDelete size={20}
        onClick={() => {
            setFileName("No Selected File")
            setImage(null)
         }}
        />
    
    </span>
    </section>
    
    <div className="btnstyle">
     
    <button className="fontsi" onClick={() => setGenerate(!generate)} > Generate </button>
    
    
    </div>
    
    </main>
    
    </>
    );



}