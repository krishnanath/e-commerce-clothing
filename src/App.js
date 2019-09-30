import React from 'react';
import { Switch, Route } from 'react-router-dom';

 
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage =() => (
  <div>
    <h1>HATS PAGE</h1>
    </div>
);

const TopicsList =() => (
  <div>
    <h1>Topics List</h1>
    </div>
);

const TopicDetails = props => {
  console.log(props);
 return (
  <div>
    <h1>TOPICS DETAILS PAGE { props.match.params.topicId}</h1>
    </div>
);
 };

function App() {
  return (
    <div>
 <Route exact path='/' component={HomePage} />
 <Route  path='/hats' component={HatsPage} />
 <Route  path='/topics' component={TopicsList} />
 <Route  path='/topics/:topicId' component={TopicDetails} />



    </div>
  );
}

export default App;
