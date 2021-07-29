import React, { useState } from "react";
import "./contact.css";


const Contact= () => {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    //const { name, email, message } = e.target.elements;
    let details = {
      name: name,
      email: email,
      message: message,
    };


      //syntax : fetch(url, {options})
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
  
      },
      body: JSON.stringify(details)
    });

    console.log(details);
    
                         
    setStatus("Submit");

    //convert receving data into json
    let result = await response.json(); 
     alert(result.status);
    
  };
  
  return (
    <>
    <h2 className="title">Get In Touch</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="Name" type="text" id="name" required 
        class="name formEntry" value={name} onChange={e => setName(e.target.value)}/>
        
        <input placeholder="Email" type="text" id="email" required 
        class="name formEntry" value={email} onChange={e => setEmail(e.target.value)} />
        
        <textarea placeholder="Message" id="message" required 
        class="message formEntry" value={message} onChange={e => setMessage(e.target.value)}/>
        <button type="submit" class="submit formEntry">{status}</button>
      
      </div>
    
    </form>
    
    </>
  );
};

export default Contact;