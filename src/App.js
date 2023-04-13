import logo from './logo.svg';
import './App.css';
import './components/Card.css'
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Card from './components/Card';
import axios from 'axios';
import About from "./components/About";
import Home from './components/Home';
import Button from './components/button';



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
<body>
  
    <Navbar />
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <Button />
    <div  className='custom'>
    <Card title='Our Services' link="https://www.google.com.eg/" />
    <Card title='About' link="https://www.google.com.eg/" />
    <Card title='Contact Us'  />
    </div>
   
</body>   
</>

  )


 
  
  
}


