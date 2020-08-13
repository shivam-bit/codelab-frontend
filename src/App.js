import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import Navbar from './shared/components/Navbar'
import Login from './shared/components/Login'
import Register from './shared/components/Register'
import Subjects from './subjects/pages/Subjects';
import SubjectQuestions from './questions/pages/SubjectQuestions';
import SolveQuestion from '../src/questions/pages/SolveQuestion';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        <Route path="/subjects" exact>
            <Subjects/>
        </Route>
        <Route path="/subject/:subjectName" exact>
          <SubjectQuestions/>
        </Route>
        <Route path="/solve/:questionId" exact>
          <SolveQuestion/>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
