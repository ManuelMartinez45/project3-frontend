import { Link } from 'react-router-dom'

function SideMenu(){
    const muscleGroups = ['arms', 'back', 'chest', 'core', 'legs']
    return (
        <section id='sideMenu'>
            <ul>
                {muscleGroups.map((mg, key) => (
                    <Link to={`/exercises/${mg}`} key={key}>
                        <li className='sideMenuLink'>{mg} </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default SideMenu