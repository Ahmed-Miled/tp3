import React, { useState } from 'react'
function Formulaire(){
    const [name, setName] = useState('') 
    return(
        <>
            <p>saisire votre nom</p>
            <input type="text" onChange={(e) => setName(e.target.value)}/>

            <button onClick={()=>alert(name)}>afficher</button>

        </>
    ) 
}

export default Formulaire