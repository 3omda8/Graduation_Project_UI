
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import { Routes,Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

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
<br></br> <br></br> <br></br> <br></br>
<Routes>
    <Route path="/" element={<Home />} />
     <Route path="about"   element={<About />} />
     <Route path="contact"   element={<Contact />} />
</Routes>

</>

  )


 
  
  
}


