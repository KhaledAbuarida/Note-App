import { useEffect , useState } from 'react'
import { nanoid } from 'nanoid'
import NoteList from './Component/NoteList'
import Search from './Component/Search'
import Header from './Component/Head'

function App(){

  // INITIALZING NOTE LIST STATE 
  const [note, setNote] = useState(
    ()=>{
      const getSavedNotes = localStorage.getItem('saved-notes');
      const intialNotes = JSON.parse(getSavedNotes);
      return intialNotes || ''
      
    })

  //SAVING TO LOCAL STORAGE

    useEffect(()=>{
      localStorage.setItem('saved-notes',JSON.stringify(note));
    },[note]);

  // useEffect(()=>{
  //   const note = JSON.parse(localStorage.getItem('note'));

  //   if(note){
  //     setNote(note);
  //   }
      
  // },[]);

  // useEffect(()=>{
  //   if(note.length>0){
  //     localStorage.setItem('note',JSON.stringify(note))
  //   }
  // },[note]);


  // ADDING NOTE 
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


  // DELETING NOTE
  const deleteNote = (id) => {
    const newNotes = note.filter((note)=> note.id !== id)
    setNote(newNotes);
  }
  

  // HANDLING SEARCH BAR TEXT 
  const [searchText, setSearchText] = useState('');


  // HANDLING TOGGLE MODE 
  const [darkMode , setDarkMode] = useState(false)

  return(
    <div className={`${darkMode && 'dark-mode'} body` }>
      <div className='container'>
        <Header 
          setDarkModeState={setDarkMode}
          modeState={darkMode}
        />
        <Search  handleSearchText={setSearchText}/>
        <addNote/>
        <NoteList 
          note={note.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          generateNote={addNote} 
          handleDelete={deleteNote}/>
      </div>
    </div>
  )

}
export default App;