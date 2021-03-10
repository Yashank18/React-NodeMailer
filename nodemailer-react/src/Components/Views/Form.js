import React,{useState} from 'react';
import axios from 'axios';


//css
import './Form.css';

function Form(){

    const [Category, setCategory] = useState('');
    const [Subject, setSubject] = useState('');
    const [Description, setDescription] = useState('');

    const submitForm=(e)=>{
        e.preventDefault(); 

        let data={
            Category:Category,
            Subject:Subject,
            Description:Description
        }

        axios.post('/api/forma',data)
        .then(res=>{
            console.log("Sent");
            setCategory('');
            setSubject('');
            setDescription('');
        })
        .catch(e=>{
            console.log("Error "+e);
        })
    }



    return(
        <div className="FormContainer">
            <h2>Raise Ticket</h2>
            <form onSubmit={submitForm}>
                <input type="text" value={Category} onChange={e=>setCategory(e.target.value)} placeholder="Category"/>
                <br></br>
                <input type="text" value={Subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject"/>
                <br></br>
                <textarea className="textAreaa" value={Description} onChange={e=>setDescription(e.target.value)} placeholder="Description"/>
                <br></br>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form;