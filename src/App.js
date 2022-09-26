import NoteList from './Component/NoteList'
import { useEffect , useState } from 'react'
import { nanoid } from 'nanoid'
import Search from './Component/Search'
import Header from './Component/Head'


function App(){

  // INITIALZING NOTE LIST STATE 
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
  //SAVING TO LOCAL STORAGE

  useEffect(()=>{
    const note = JSON.parse(localStorage.getItem('note'));

    if(note){
      setNote(note);
    }
      
  },[]);

  useEffect(()=>{
    if(note.length>0){
      localStorage.setItem('note',JSON.stringify(note))
    }
  },[note]);


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
        <NoteList 
          note={note.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          generateNote={addNote} 
          handleDelete={deleteNote}/>
      </div>
    </div>
  )

}
export default App;