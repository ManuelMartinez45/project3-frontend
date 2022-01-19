import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'

function SideMenu(){
    const muscleGroups = ['arms', 'back', 'chest', 'core', 'legs']
    return (
        <section>
            <ul>
                <Stack gap={4}>
                {muscleGroups.map((mg, key) => (
                    <Link to={`/exercises/${mg}`} key={key}>
                        <li className='sideMenuLink'>{mg} </li>
                    </Link>
                ))}
                </Stack>
            </ul>
        </section>
    )
}

export default SideMenu