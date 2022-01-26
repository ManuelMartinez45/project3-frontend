import './styles.scss'
import './App.css';
import { auth } from './services/firebase'
import Nav from './components/Nav'
import SideMenu from './components/SideMenu'
import Main from './components/Main'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap/'

function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user))
  }, [])

  return (
    <Container fluid id="App">
      <Row>
        {/* <Col md={2} id='sideMenu'>
          <SideMenu />
        </Col> */}
        <Nav user = {user} />
      </Row>
      <Row >
        <Col lg={12} md={10} sm={12}>
          <Main user = {user} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
