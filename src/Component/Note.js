import { RiDeleteBinLine } from 'react-icons/ri'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'


function Note({id,text,title,date,handleDelete}){
    return(
        <div className='note shadow bg-info bg-opacity-50 bg-gradient'>
            <div className='note-body'>
                <div className='note-title'>
                    {title}
                </div>
                <div className='note-text p-1'> 
                    {text}
                </div>
            </div>
            <div className='note-footer'>
                <span className='note-date text-black-50'>{date}</span>
                <RiDeleteBinLine className='delete-icon' onClick={() => handleDelete(id)} size='1.2rem'/>
            </div>
        </div>
    )



}
export default Note;