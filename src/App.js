import NoteList from './Component/NoteList'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Search from './Component/Search'
import { MdSettingsInputAntenna } from 'react-icons/md'
function App(){
  const [note, setNote] = useState([
    {
      id: nanoid(),
      title: 'Science',
      text: 'this is a science note here some sort of text more and more',
      date: '20/5/2014'
    },
    {
      id: nanoid(),
      title: 'Economic',
      text: 'this is a content about economics here some sort of text more and more',
      date: '16/3/2018'
    },
    {
      id: nanoid(),
      title: 'Studying',
      text: 'this is a studying content',
      date: '25/9/2015'
    }
  ])

  const addNote = (text,title) => {
    const date = new Date();
    const Note = {
      id: nanoid(),
      title: title,
      text : text,
      date: date.toLocaleDateString(),
    }
    const newNoteList = [...note,Note];
    setNote(newNoteList)
  }

  const deleteNote = (id) => {
    const newNotes = note.filter((note)=> note.id !== id)
    setNote(newNotes);
  }
  
  const [searchText, setSearchText] = useState('');
  return(
    <div className='container'>
      <Search  handleSearchText={setSearchText}/>
      <NoteList 
        note={note.filter((note) => note.text.toLowerCase().includes(searchText))} 
        generateNote={addNote} 
        handleDelete={deleteNote}/>
    </div>
  )

}
export default App;