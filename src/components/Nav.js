import { Link } from 'react-router-dom'
import { BiDumbbell, BiSearch } from 'react-icons/bi'
import { FaUserCircle, FaUsers} from 'react-icons/fa'
import { login, logout } from '../services/firebase'

function Nav(props){
    if(props.user) console.log(props.user)
    return (
        <nav className="nav">
            <Link id='homeLogo'to='/'>
                <span >WAYTE</span>
            </Link>
            <Link to='/exercises'>
                <BiDumbbell />
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
            <Link  to='/'id='search'>
                < BiSearch />
            </Link>
        </nav>
    )
}

export default Nav