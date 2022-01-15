import { Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Index from '../pages/Index'
import Home from '../pages/Home'

function Main(){
    const [exercise, setExercise] = useState([])

    const URL = 'http://localhost:3001/exercises/'
    
    async function getExercise(){
        const response = await fetch(URL);
        const data = await response.json()
        setExercise(data)
    }

    useEffect(() => getExercise(), [])

    return (
        <main>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/exercises'>
                <Index exercise={exercise} />
            </Route>
            </Switch>
        </main>
    )
}

export default Main