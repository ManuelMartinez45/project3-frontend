import { Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Index from '../pages/Index'
import Home from '../pages/Home'
import Nav from './Nav'
import SideMenu from './SideMenu'
import MuscleGroup from '../pages/MuscleGroup'
import Exercise from '../pages/Exercise'

function Main(){
    const [exercise, setExercise] = useState([])

    // const URL = 'https://wayte-backend.herokuapp.com/exercises'
    const URL = 'http://localhost:3001/exercises'
    
    async function getExercise(){
        const response = await fetch(URL);
        const data = await response.json()
        setExercise(data)
    }

    useEffect(() => getExercise(), [])

    return (
        <main>
            <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/exercises'>
                <Index exercise={exercise}/>
            </Route>
            <Route 
                exact
                strict
                path='/exercises/:muscleGroup'
                render={(props) => (
                    <MuscleGroup
                        {...props}
                        exercise={exercise}
                    />
                )}
            />
            <Route 
                path='/exercises/:muscleGroup/:exercise'
                render={ (props) => (
                    <Exercise 
                        {...props}
                        exercise={exercise}
                        />
                )}
            />
            </Switch>
        </main>
    )
}

export default Main