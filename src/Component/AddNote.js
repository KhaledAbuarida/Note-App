import { useState } from 'react';
import '../App.css'

function AddNote({newNote}){
    const [noteText , setNoteText] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const textLetterLimit = 200
    const titleLetterLimit = 20 

    const handleText=(event)=>{
        if(textLetterLimit - event.target.value.length >= 0)
        {
            setNoteText(event.target.value);
        }
    }

    const handleTitle= (e) => {
        if(titleLetterLimit - e.target.value.length >= 0)
        {
            setNoteTitle(e.target.value)
        }
    }

    const handelSaveBtn = ()=>{
        if(noteText.trim().length > 0)
        {
            newNote(noteText.trim(),noteTitle.trim());
            setNoteText('')
            setNoteTitle('')
        }
    }
    return(
        <div className='note add bg-warning'>
            <input
                className='bg-warning'
                type='text'
                placeholder='Title'
                value={noteTitle}
                onChange={handleTitle}
            />
            <textarea
                className='bg-warning'
                rows='4'
                placeholder='Add text...'
                value={noteText}
                onChange={handleText}
            >
            </textarea>
            <div className='note-footer mt-2'>
                <div>{textLetterLimit - noteText.length} Remaining</div>
                <button className='btn btn-light rounded-pill' onClick={handelSaveBtn}>Save</button>
            </div>
            
            
        </div>  
    )
}
export default AddNote;