import {MdSearch} from 'react-icons/md'

function Search({handleSearchText}){


    return(
        <div className="search">
            <MdSearch className='search-icon' size='2rem'/>
            <input 
                type='text' 
                placeholder='Search'
                onChange={
                    (event)=> handleSearchText(event.target.value) 
                }
            ></input>
        </div>
    )

}
export default Search;