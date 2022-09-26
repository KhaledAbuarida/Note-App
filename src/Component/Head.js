import { MdDarkMode,MdLightMode } from 'react-icons/md'
import '../App.css'


function Header({ setDarkModeState , modeState }){

    const toggleMode = ()=> {
        setDarkModeState(prevMode => !prevMode);
    }

    return(
        <div className="header">
            <p className="app-logo">Notes</p>
            <button 
                className='mode-btn btn btn-light rounded-circle shadow-sm me-5'
                onClick={toggleMode}
            >
                {
                    modeState ? <MdLightMode className='mode-icon'/> : <MdDarkMode className='mode-icon'/>
                }                    
            </button>
        </div>
    )
}
export default Header;