import './styles.scss'
import './App.css';
import { auth } from './services/firebase'
import Nav from './components/Nav'
import SideMenu from './components/SideMenu'
import Main from './components/Main'
import { useState, useEffect } from 'react';

function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user))
  }, [])

  return (
    <div className="App">
      <Nav user = {user} />
      <SideMenu />
      <Main user = {user} />
    </div>
  );
}

export default App;
