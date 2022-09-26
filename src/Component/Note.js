import { RiDeleteBinLine } from 'react-icons/ri'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'


function Note({id,text,title,date,handleDelete}){
    return(
        <div className='note shadow'>
            <div className='note-body'>
                <div className='note-title'>
                    {title}
                </div>
                <div className='note-text'> 
                    <p>
                        {text}
                    </p>
                </div>
            </div>
            <div className='note-footer'>
                <span className='note-date'>{date}</span>
                <RiDeleteBinLine className='delete-icon' onClick={() => handleDelete(id)} size='1.7rem'/>
            </div>
        </div>
    )



}
export default Note;