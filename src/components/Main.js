import { Route, Switch, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Index from '../pages/Index'
import Home from '../pages/Home'
import MuscleGroup from '../pages/MuscleGroup'
import Exercise from '../pages/Exercise'
import Workouts from '../pages/Workouts'
import WorkoutDisplay from '../pages/WorkoutDisplay'
import Form from './Form'

function Main(){

    const [exercise, setExercise] = useState([])
    const [workout, setWorkout] = useState([])

    // const URL = 'https://wayte-backend.herokuapp.com/'
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

    async function createWorkout(workout){
        const response = await fetch(workoutURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(workout)
        })
        getWorkout()
        const workouts = await response.json()
        setWorkout(workouts)
    } 





    useEffect(() => getExercise(), [])
    useEffect(() => getWorkout(), [])

    return (
        <main>
            <Switch>
            <Route exact path='/' render={(props) => (
                <Home 
                    {...props}
                    exercise={exercise}
                    workout={workout}
                />
            )} />
            <Route exact strict path='/exercises'>
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
                exact
                strict
                path='/workouts'
                render={ (props) => (
                    <Workouts 
                        {...props}
                        workout={workout}
                        />
                )}
            />

            <Route 
                path='/workouts/new'
                render={ (props) => (
                    <Form 
                        {...props}
                        workout={workout}
                        createWorkout={createWorkout}
                        getWorkout={getWorkout}

                    />
                )}
            />
            
            <Route
                    path={'/workouts/:workout'}
                    render={(props) => (
                        <WorkoutDisplay
                            {...props}
                            workout={workout}
                            exercise={exercise}
                        />
                    )}
            />
   
            </Switch>
        </main>
    )
}

export default Main