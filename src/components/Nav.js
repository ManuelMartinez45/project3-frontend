import { Link } from 'react-router-dom'
import { BiDumbbell, BiSearch } from 'react-icons/bi'
import { FaUserCircle, FaUserSlash} from 'react-icons/fa'
import { IoIosJournal } from 'react-icons/io'
import { InputGroup, Button, FormControl} from 'react-bootstrap'
import { login, logout } from '../services/firebase'

function Nav(props){
    let userName
    if(props.user) {userName = props.user.displayName.split(' ')[0] }
    return (
        <nav className="nav">
            <Link id='homeLogo' className='menuLinks' to='/'>
                <span >WAYTE</span>
            </Link>
            <Link className='menuLinks' to='/exercises'>
                {/* <BiDumbbell /> */}
                Exercises
            </Link>
            <Link className='menuLinks' to='#'>
                Nutrition
            </Link>
            <Link className='menuLinks' to='#'>
                Articles
            </Link>
              
                <InputGroup id='search'>
                    <FormControl
                    id='searchBar'
                    placeholder='Search...'
                    aria-label="Example text with button addon"
                    aria-describedby="search bar"
                    />
                </InputGroup>
                {
                    props.user ? 
                    <>
                        <Link className='menuLinks' id='workouts' to='/workouts'>
                            {/* <IoIosJournal /> */}
                            Workouts
                        </Link>
                        <button id='Logout' onClick={logout}>< FaUserSlash /><br />{userName}</button>
                        <span id='userName'> </span>
                       
                    </>
                    : 
                    <button id='Login' className='menuLinks' onClick={login}>< FaUserCircle /></button>
                }
        </nav>
    )
}

export default Nav