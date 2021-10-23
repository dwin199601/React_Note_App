import React from 'react';



export default function Note({ searchElement, elementsHere, title, content, allNote, id, setNote}) {

const DeleteHandler =(event)=>{
    event.preventDefault();
    setNote(allNote.filter(val=>val.id!== elementsHere.id))
}

   return(
    <div className="note " key={id} id={elementsHere.title.toLowerCase() ===searchElement.toLowerCase()? `styleSearchOne`: `styleSearch`}>
     <h1>{title}</h1>
     <p>{content}</p>
     <button onClick={DeleteHandler}>Delete</button>
    </div>
   )
}

/*  {allNote.map(value=> {
        return(
         <div className="note" key={value.id}>
             <h1>{value.title}</h1>
             <p>{value.content}</p>
             <button onClick={DeleteHandler}>Delete</button>
         </div>
        )
    })}*/

    
