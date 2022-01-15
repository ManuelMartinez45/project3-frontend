import { Link } from 'react-router-dom'
import { BiDumbbell, BiSearch } from 'react-icons/bi'
import { FaUserCircle, FaUsers} from 'react-icons/fa'

function Nav(props){
    return (
        <nav className="nav">
            <Link id='homeLogo'to='/'>
                <span >WAYTE</span>
            </Link>
            <Link to='/exercises'>
                <BiDumbbell />
            </Link>
            <Link>
                < FaUsers />
            </Link>
            <Link>
                < FaUserCircle />
            </Link>
            <Link id='search'>
                < BiSearch />
            </Link>
        </nav>
    )
}

export default Nav