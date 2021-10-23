
import './App.css';
import Header from './componentspart3/header';
import Footer from './componentspart3/footer';
import Note from './componentspart3/note';
import "./styles.css"
import CreateArea from './componentspart3/createArea'
import React, {useState} from 'react';



function App() {


  const [allContnt, setContnt] = useState("");
   const [allTitle, setTitle] = useState("");
   const [allNote, setNote] = useState([]);
  const [searchElement, setSearch] = useState('');
  

  return (

    <div className="App">
     <Header searchElement={searchElement} setSearch={setSearch} allTitle={allTitle}/>
     
     <CreateArea searchElement = {searchElement} allContnt = {allContnt} setContnt={setContnt} allTitle={allTitle} setTitle = {setTitle} allNote={allNote} setNote={setNote}/>
     <Footer />
       
    </div>
  );
}

export default App;

