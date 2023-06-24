import React, { useState } from "react";

export const Contact = () => {
    //hooks to set to memory the state of the item
    const [status, setStatus] = useState("Submit");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    //Handler for submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        //workaround for email val
        const em = e.target[1].value
        const info = {name, em, subject, message}
        let response = await fetch("http://localhost:5000/send", {
            method:"POST",
            body: JSON.stringify(info),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => {setEmail(e.target.email); console.log(e.target.email)}} required />
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required />
            </div>
        <button type="submit">{status}</button>
        </form>
    );
};

export default Contact;