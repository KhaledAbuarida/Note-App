import Note from './Note'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import AddNote from './AddNote.js'


function NoteList({note, generateNote, handleDelete}){
    return(
        <div className='note-list container'>
            {note.map((note) => (<Note
                id={note.id}
                title={note.title}
                text={note.text}
                date={note.date}
                handleDelete={handleDelete}
                /> 
            ))}
            <AddNote newNote={generateNote}/>
        </div>
    )   


}
export default NoteList;


