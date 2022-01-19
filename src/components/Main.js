import { Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Index from '../pages/Index'
import Home from '../pages/Home'
import MuscleGroup from '../pages/MuscleGroup'
import Exercise from '../pages/Exercise'
import Workout from '../pages/Workout'
function Main(){
    const [exercise, setExercise] = useState([])
    const [workout, setWorkout] = useState([])

    // const URL = 'https://wayte-backend.herokuapp.com/exercises'
    const exerciseURL = 'http://localhost:3001/'
    const workoutURL = 'http://localhost:3001/workouts'
    
    async function getExercise(){
        const response = await fetch(exerciseURL);
        const data = await response.json()
        setExercise(data)
    }

    async function getWorkout(){
        const response = await fetch(workoutURL);
        const data = await response.json()
        setWorkout(data)
    }

    useEffect(() => getExercise(), [])
    useEffect(() => getWorkout(), [])

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
            <Route 
                path='/workouts'
                render={ (props) => (
                    <Workout 
                        {...props}
                        workout={workout}
                        />
                )}
            />
            </Switch>
        </main>
    )
}

export default Main