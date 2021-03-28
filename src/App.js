import React, { useState } from 'react';
import './App.css';

const Dict = {
  "":[],
  "fiction":[
    {
      bookName:"Fahrenheit 451",
      author:"Ray Bradbury"
    },
    {
      bookName:"The Paying Guests",
      author:"Sarah Waters"
    },
    {
      bookName:"Frankenstein",
      author:"Mary Shelley"
      
    },
    {
      bookName:"The Color Purple",
      author:"Alice Walker"
    },
  ],
  "novel":[
    {
      bookName:"ULYSSES",
      author:"James Joyce"
    },
    {
      bookName:"LOLITA",
    author:"Vladimir Nabokov"
    }
  ],
  "mystery":[
    {
      bookName:"Lies of Men",
      author:"Dana Killion"
    },
    {
      bookName:"Fowl Murder",
      author:"Victoria Tait"
    }
  ],
  "poetry":[
    {
      bookName:"Soft Science",
      author: "Franny Choi"
    },
    {
      bookName:"blud",
      author:"Rachel McKibbens"
    },
    {
      bookName:"Heart Like A Window, Mouth Like A Cliff",
      author:"Sara Borjas"
    }
  ],
  "fantasy":[
    {
      bookName:"Alice’s Adventures in Wonderland",
      author:"Lewis Carroll (1865)"
    },
    {
      bookName:"The King of Elfland’s Daughter",
      author:"Lord Dunsany (1924)"
    }
  ],
  "drama":[
    {
      bookName:"The Complete Adventures of Feluda",
      author:"Satyajit Ray"
    },
    {
      bookName:"The Incredible Adventures of Professor Shonku",
      author:"Satyajit Ray"
    },
    {
      bookName:"Before We Were Yours",
      author:"Lisa Wingate"
    }
  ]
}

const booksWeHave = Object.keys(Dict);

function App() {
  
  const [genere, setGenere] = useState("");

  function genereClickHandler(event){
    setGenere(event.target.id);
  }

  console.log(genere);

  return (

    <>
    <div>

      <h3>
      Choose your genere and see books!
      </h3>

      <nav style={{padding:"auto",margin:"auto"}}>
        
          {
            booksWeHave.map((value)=>{
              return (
              <span
              className="input"
              onClick={genereClickHandler}
            id = {value}
            style={genere===value? {background:"rgb(56, 79, 206)", color:"white", outline:"0.5px dashed rgb(5, 4, 0)"}: null}
              >
                {value}
                </span>)
            })
          }
        
      </nav>
      <div>
        <ul>
          {
            Dict[genere].map((value)=>{
              return <li style={{margin:"20px"}}><div style={{fontSize:"30px"}}>{value.bookName}</div><div>@author:{value.author}</div></li>
            })
          }
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
