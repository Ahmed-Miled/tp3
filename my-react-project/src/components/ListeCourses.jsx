import React, { useState } from 'react';

function ListeCourses() {
  const [liste, setListe] = useState([]);
  const [article, setArticle] = useState(''); 

  function ajouterArticle() {
    if (article.trim() !== '') {
      setListe([...liste, article]);
      setArticle(''); 
    }
  }

  return (
    <div>
      <p>Ajoute Article</p>
      <input
        type="text"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />
      <button onClick={ajouterArticle}>Ajouter</button>
      
      <div>
        <p>Contenu du liste:</p>
        {liste.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
    </div>
  );
}

export default ListeCourses;
