import { useState } from 'react';
import '../App.css'

function AddNote({newNote}){
    const [noteText , setNoteText] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const TotalLetterLimit = 200

    const handleText=(event)=>{
        if(TotalLetterLimit - event.target.value.length >= 0)
        {
            setNoteText(event.target.value);
        }
    }

    const handleTitle= (e) => {
        setNoteTitle(e.target.value)
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
        <div className='note add'>
            <input
                type='text'
                placeholder='Title'
                value={noteTitle}
                onChange={handleTitle}
            />
            <textarea
                rows='9'
                placeholder='Add text...'
                value={noteText}
                onChange={handleText}
            >
            </textarea>
            <div className='note-footer mt-2'>
                <div>{TotalLetterLimit - noteText.length} Remaining</div>
                <button className='btn btn-light rounded-pill' onClick={handelSaveBtn}>Save</button>
            </div>
            
            
        </div>  
    )
}
export default AddNote;