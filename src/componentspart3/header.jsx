import React from 'react'

export default function Header({setSearch}) {
     

    const searchFunction =(e)=>{
        setSearch(e.target.value);
    }


    return (
        <header>
            <h1>
                Notes
            </h1>
            <input onChange={searchFunction} className="searchBar" type="text" placeholder="Search Title"/>
           
        </header>
    )
}

