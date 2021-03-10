import React,{useState} from 'react';


//css
import './Form.css';

function Form(){
    return(
        <div className="FormContainer">
            <h2>Raise Ticket</h2>
            <form>
                <input type="text" placeholder="Category"/>
                <br></br>
                <input type="text" placeholder="Subject"/>
                <br></br>
                <textarea className="textAreaa" placeholder="Description"/>
                <br></br>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form;