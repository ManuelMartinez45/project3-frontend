import { Link } from 'react-router-dom'

function SideMenu(){
    const muscleGroups = ['arms', 'back', 'chest', 'core', 'legs']
    return (
        <section id='sideMenu'>
            <ul>
                {muscleGroups.map((mg) => (
                    <Link to={`/exercises/${mg}`}>
                        <li className='sideMenuLink'>{mg} </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default SideMenu