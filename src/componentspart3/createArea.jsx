//import React, {useState} from 'react';
import Note from './note';

export default function CreateArea({searchElement, allContnt, setContnt, allTitle,setTitle, allNote, setNote}) {
   
   /*const [allContnt, setContnt] = useState("");
   const [allTitle, setTitle] = useState("");
   const [allNote, setNote] = useState([]);*/


   const Titlefunct=(event)=>{
     //console.log(event.target.value);
     setTitle(event.target.value);
   }

   const ContentFunc = (event)=>{
    //console.log(event.target.value);
    setContnt(event.target.value);
   }

   const ClickHandler = (event)=>{

   event.preventDefault();
   console.log("I was clicked");

   if(allContnt===""){
      alert("Enter content!");
   } 
    else if(allTitle===""){
      alert("Enter title!");
   }
     else{
      setNote([
         ...allNote,
          {title: allTitle, content: allContnt, id: Math.random()*1000}
      ])

      
      ResetForm();
     } 
     
   };

   const ResetForm=()=>{
      document.getElementById("ResetThis").reset();
   }
    
    return (
       <div>
       <form id="ResetThis">
          <input  onChange={Titlefunct} 
          placeholder="title here" />

          <textarea onChange={ContentFunc} placeholder="Add a note here"></textarea>
          <button onClick= {ClickHandler} className="addbuttonstyle">Add</button>
         
       </form>
       
       {allNote.map(elementsHere => {

          return(
            <div key={elementsHere.id}>
            <Note title={elementsHere.title} content={elementsHere.content}
            id = {elementsHere.id} allNote= {allNote}
             elementsHere={elementsHere} setNote={setNote}
             searchElement = {searchElement}
            />
            </div >    
          ) 
       })}
       
       </div>
    )
}

