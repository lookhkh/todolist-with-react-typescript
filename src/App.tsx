import { useState,} from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import MainPage from './pages/MainPage';
import { Switch, Route,Link} from 'react-router-dom'
import InsertPage from './pages/InsertPage';
import styled from 'styled-components';
import Imgs from './pages/Imgs'

const CONST = {
  MAIN:'main',
 INSERT:'insert'
}


function App() {

  const [mode,setMode] = useState(CONST.MAIN)
  
  
  return (
    <div style={{width:'100vw',height:'100vh',backgroundColor:'gray',}} className="App">
      <Container>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route path="/insert">
            <InsertPage />
          </Route>
          <Route path="/imgs">
            <Imgs/>
            </Route>
        </Switch>

        {mode===CONST.MAIN && 
        <Link to="/insert">
          <FontAwesomeIcon onClick={()=>setMode(CONST.INSERT)} style={{fontSize:'3rem',position:'fixed', right:'50px',bottom:'0', color:'white'}} icon={faPlusCircle}/>    
        </Link>}

        {mode===CONST.INSERT && 
        <Link to="/">
          <FontAwesomeIcon onClick={()=>setMode(CONST.MAIN)} style={{fontSize:'3rem',position:'fixed', right:'50px',bottom:'0', color:'white'}} icon={faPlusCircle}/>    
        </Link>}

      </Container>
    </div>

)}

export default App;

const Container=styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #ac8585;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 
`
