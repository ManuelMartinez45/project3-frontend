import { Link } from 'react-router-dom'
import { BiDumbbell, BiSearch } from 'react-icons/bi'
import { FaUserCircle, FaUsers} from 'react-icons/fa'
import { IoIosJournal } from 'react-icons/io'
import { InputGroup, Button, FormControl} from 'react-bootstrap'
import { login, logout } from '../services/firebase'

function Nav(props){
    if(props.user) console.log(props.user)
    return (
        <nav className="nav">
            <Link id='homeLogo' className='menuLinks' to='/home'>
                <span >WAYTE</span>
            </Link>
            <Link className='menuLinks' to='/exercises'>
                {/* <BiDumbbell /> */}
                Exercises
            </Link>
            <Link className='menuLinks' to='/workouts'>
                {/* <IoIosJournal /> */}
                Workouts
            </Link>
            {
                props.user ? 
                <>
                    <span>{props.user.displayName}</span>
                    <button onClick={logout}>< FaUsers /></button>
                   
                </>
                : 
                <button onClick={login}>< FaUserCircle /></button>
            }
              
                <InputGroup id='search'>
                    <FormControl
                    id='searchBar'
                    placeholder='Search...'
                    aria-label="Example text with button addon"
                    aria-describedby="search bar"
                    />
                </InputGroup>
        </nav>
    )
}

export default Nav