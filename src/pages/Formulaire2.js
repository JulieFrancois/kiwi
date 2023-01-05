import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useForm from '../utile/useform';

function Formulaire2({setModifPage, setformdata}) {

    // const Formulaire = ({setModifPage}) => {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
        {setModifPage("Formulaire2");setformdata(data)// Write your submit function here
      })
    
      return (
        <>

<form2 ref={FormRef} onSubmit={handleSubmit}>

<label>
          Comment te définirais-tu ? 
        <input type="range" name="satisfaction" id="volume" min="0" max="11"  step="1" list="tickmarks"/>
        <datalist id="tickmarks">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        <option value="6"></option>
        <option value="7"></option>
        <option value="8"></option>
        <option value="9"></option>
        <option value="10"></option>
        </datalist>
        </label>

        
        <label>
          À quel point aimes-tu ça ? 
        <input type="range" name="satisfaction" id="volume" min="0" max="11"  step="1" list="tickmarks"/>
        <datalist id="tickmarks">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        <option value="6"></option>
        <option value="7"></option>
        <option value="8"></option>
        <option value="9"></option>
        <option value="10"></option>
        </datalist>
        </label>



        <label>
          
         Quels outils utilisent-tu souvent ?

        <select name="outils">
        <option value="word">word</option>
        <option value="photoshop">Photoshop</option>
        <option selected value="excel">excel</option>
        <option value="docs">docs</option>
        </select>

        </label>

        <button>Terminer</button> 
        </form2>
    </>
      )}

export default Formulaire2;