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
  const [Gender,setGender] = React.useState(0);
  
  React.useEffect(()=>{
    //  console.log(postData("https://illustrious-cat-7fb4d9.netlify.app/api/persona"))

    axios
      .get("https://illustrious-cat-7fb4d9.netlify.app/api/persona")
      .then((response) => response)
      .then((data) => {

    // AGE
    let NombreTotal = 0
    let Total = 0
    let Homme = 0
    let Femme = 0
    data.data.forEach(element => {
        NombreTotal = NombreTotal+1
        Total = Total+element.age

        if(
            element.gender == "Homme"
        )
        Homme = Homme+1
        if(
            element.gender == "Femme"
        )
        Femme = Femme+1
    });
    setAge(Total/NombreTotal)
    if(Homme > Femme) 
    setGender("Homme")
    if(Femme > Homme) 
    setGender("Femme")

    // GENRE

    })
  },[])


    //JSX
    return (
        <>
        
    <section className="persona">

<div className="gauche">
    <div className="personalite">
        <h1 className='textB'>Personnalité</h1>

        {/* <!-- <p>Esprit</p> -->
        <!-- <p>Energie</p> -->
        <!-- <p>Nature</p>
        <p>tactique</p> --> */}

        <label for="esprit" className="textB">Esprit</label>
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

        <label for="Extravertie" className="textB">Energie</label>
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

        <label for="Extravertie" className="textB">Nature</label>
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

        <label for="Extravertie" className="textB">Tactique</label>
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

    <div className="interet">
        <h1 className='textB'>Centres d'intérêts</h1>

        <p className="textB">Cuisine</p>
        <p className="textB">Cinéma</p>
        <p className="textB">Réseaux sociaux</p>

    </div>

    <a href="#" title="" className="bouton">Télécharger</a>

</div>

<div className="droite">

    <div className="profil">
        <h1 className='textB'>Profil</h1>

        <p className="textB">{Age} ans</p>
        <p className="textB">{Gender}</p>
        <p className="textB">Région parisienne</p>
        <p className="textB">Metiers du web</p>

    </div>

    <div className="frustrations">
        <h1 className='textB'>Frustations</h1>

        <p className="textB">Manque de temps</p>
        <p className="textB">Pas assez d'organisation</p>

    </div>

    <div className="outils">
        <h1 className='textB'>Outils</h1>

        <p className="textB">Réseaux sociaux</p>
        <p className="textB">Web</p>

    </div>

</div>


</section>
          <Footer></Footer>
        </>
    );
  }

export default Persona;