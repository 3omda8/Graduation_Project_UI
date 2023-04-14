
import './App.css';

import React, { useEffect } from 'react';
import axios from 'axios';
import Uploadphoto from './components/UploadPhoto';
import Navbar from './components/navbar';




export default function App() {


  /*{useEffect(() => {axios.post('http://localhost:4000/comments',
  {"id": 3,
  "body": "many comments",
  "postId": 2}
  ).then(res => console.log(res.data))
  .catch(err => console.log(err))})}*/

  /*{useEffect(() => {axios.delete('http://localhost:4000/comments/2').then(res => console.log(res.data))
  .catch(err => console.log(err))})} */

  useEffect(() => {axios.get('http://localhost:4000/comments').then(res => console.log(res.data))
  .catch(err => console.log(err))})

  return (
<>
<section>
<Navbar />
</section>
<section className='custom'>
<Uploadphoto />
</section>
</>

  )


 
  
  
}


