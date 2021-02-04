import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import store from './store';
import Home from './components/Home';
import HorrorBook from './components/HorrorStories/HorrorBook';
import HbDetails from './components/HorrorStories/HbDetails';
import Cart from './components/Cart';
import Header from './components/Header';
import ActionBook from './components/Action/ActionBook';
import ActionDetails from './components/Action/ActionDetails';
import ComicBook from './components/Comic/ComicBook';
import ComicDetails from './components/Comic/ComicDetails';
import DetectiveBook from './components/DetectiveMystry/DetectiveBook';
import DetectiveDetails from './components/DetectiveMystry/DetectiveDetails';
import EducationalBook from './components/Educational/EducationalBook';
import EducationalDetails from './components/Educational/EducationalDetails';
import PoetryBook from './components/Poetry/PoetryBook';
import PoetryDetails from './components/Poetry/PoetryDetails';
function App() {
  return (
    <Router>
    
    <Provider store={store}>
   <Header/>
    <Route path ="/" exact component={Home}/>
    <Route path ="/horrorbook" exact component= {HorrorBook}/>
    <Route path ="/cart" exact component= {Cart}/>
  <Route path ="/hbdetails/:id" exact component= {HbDetails}/>
  <Route path ="/actionbook" exact component={ActionBook}/>
  <Route path ="/actiondetails/:id" exact component= {ActionDetails}/>
  <Route path ="/comicbook" exact component={ComicBook}/>
  <Route path ="/comicdetails/:id" exact component= {ComicDetails}/>
  <Route path ="/detectivebook" exact component={DetectiveBook}/>
  <Route path ="/detectivedetails/:id" exact component= {DetectiveDetails}/>
  <Route path ="/educationalbook" exact component={EducationalBook}/>
  <Route path ="/educationaldetails/:id" exact component= {EducationalDetails}/>
  <Route path ="/poetrybook" exact component={PoetryBook}/>
  <Route path ="/poetrydetails/:id" exact component= {PoetryDetails}/>
</Provider>
    </Router>
  );
}

export default App;
