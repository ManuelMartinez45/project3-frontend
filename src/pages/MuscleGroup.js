import { Link, useParams} from 'react-router-dom'
import { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap'


function MuscleGroup(props){
    const muscleGroup = props.match.params.muscleGroup
    const exercises = props.exercise.filter(e => e.main.toLowerCase() === muscleGroup)
    
    
    return(
        <Container id='muscleGroupPage'>
                <Row>
                    <h1 id='muscleHeading'>{muscleGroup}</h1>
                    {exercises.map((exercise, key) => (
                        // <div className='exerciseBlock' key={key}>
                        //     <Link to={`/exercises/${muscleGroup}/${exercise.name}`} >
                        //         <h3>{exercise.name}</h3>
                        //     </Link>
                        // </div>
                        <Col className='exerciseBlock' key={key} lg={{span: 8, offset: 2}}>
                            <div className="exercise" >
                                {/* <Link to={/exercises/${exercise.main}/${exercise.name}}> */}
                                <Link to={{
                                    pathname: `/exercises/${exercise.main}/${exercise.name}`
                                    }}
                                    >
                                    <h3>{exercise.name}</h3>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
    </Container>

// <Container id="indexPage">
//             <h1>
//                 Exercise Guide List
//             </h1>
//             <hr></hr>
//             <Row>
//                 {props.exercise.map((exercise, key) => {
//                     return <Col  className='whatthe'lg={{span: 8, offset: 2}}>
//                         <div className="exercise" key={key}>
//                         <Link to={`/exercises/${exercise.main}/${exercise.name}`}>
//                             {/* <img  src={exercise.img} alt={exercise.name} /> */}
//                             <h3>{exercise.name}</h3>
//                         </Link>
//                         </div>
//                         </Col>
//                 })}
//             </Row>
//         </Container>
            
    ) 
}

export default MuscleGroup