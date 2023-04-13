import React, { useState } from 'react'
import './button.css'


export default function Button() {

  const [image, setImage] = useState('');

  const convert2base64 = (e) =>{
      const file = e.target.files[0];
      const reader = new FileReader() ;

      reader.onloadend = () =>{

        setImage(reader.result.toString());

      };

      reader.readAsDataURL(file);

  };

  return (
    <>
      {image ?  
      ( <img src={image} /> ) : 
      (<div> <input id='fileupload' type='file' accept='image/*' className='hidden' onChange={e => convert2base64(e)}/> <br></br>
      <label htmlFor='fileupload'>Upload photo</label>
      </div>) 
      }

    </>
  )
}
