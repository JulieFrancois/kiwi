import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import useForm from '../utile/useform';
import axios from 'axios';

function Persona({setModifPage, setformdata}) {
  
  // const Formulaire = ({setModifPage}) => {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Persona");setformdata(data)// Write your submit function here
  })

  const [DATABASE,setDATABASE] = React.useState([]);
  const [Age,setAge] = React.useState(0);
  
  React.useEffect(()=>{
    //  console.log(postData("https://illustrious-cat-7fb4d9.netlify.app/api/persona"))

    axios
      .get("https://illustrious-cat-7fb4d9.netlify.app/api/persona")
      .then((response) => response)
      .then((data) => {
    let NombreTotal = 0
    let Total = 0
    data.data.forEach(element => {
        NombreTotal = NombreTotal+1
        Total = Total+element.age
    });
    setAge(Total/NombreTotal)

    })
  },[])


    //JSX
    return (
        <>
        
        <section class="persona">

<div class="gauche">
    <div class="personalite">
        <h1 class='personalite'>Personnalité</h1>

        {/* <!-- <p>Esprit</p> -->
        <!-- <p>Energie</p> -->
        <!-- <p>Nature</p>
        <p>tactique</p> --> */}

        <label for="esprit">Esprit</label>
        <input type="range" name="personalite" id="volume" min="0" max="11" step="1" />
        <datalist>
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

        <label for="Extravertie">Energie</label>
        <input type="range" name="personalite" id="volume" min="0" max="11" step="1" />
        <datalist>
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

        <label for="Extravertie">Nature</label>
        <input type="range" name="personalite" id="volume" min="0" max="11" step="1" />
        <datalist>
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

        <label for="Extravertie">Tactique</label>
        <input type="range" name="personalite" id="volume" min="0" max="11" step="1" />
        <datalist>
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

    </div>

    <div class="interet">
        <h1 class='interet'>Centres d'intérêts</h1>

        <p>Cuisine</p>
        <p>Cinéma</p>
        <p>Réseaux sociaux</p>

    </div>

    <a onClick={() => setModifPage("App")} className="cta telecharger" href="#" title="">Télécharger</a>


</div>

<div class="droite">

    <div class="profil">
        <h1 class='Profil'>Profil</h1>

        <p>{Age} ans</p>
        <p>Femme</p>
        <p>Région parisienne</p>
        <p>Metiers du web</p>

    </div>

    <div class="frustrations">
        <h1 class='frustrations'>Frustations</h1>

        <p>Manque de temps</p>
        <p>Pas assez d'organisation</p>

    </div>

    <div class="outils">
        <h1 classe='outils'>Outils</h1>

        <p>Réseaux sociaux</p>
        <p>Web</p>

    </div>

</div>


</section>
          <Footer></Footer>
        </>
    );
  }

export default Persona;