import React from 'react';
import Footer from '../components/Footer';
import useForm from '../utile/useform';
import axios from 'axios';

function Persona({setModifPage, setformdata}) {

    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Persona");setformdata(data)// Write your submit function here
  })

//   const [DOMAIN] = "https://illustrious-cat-7fb4d9.netlify.app/api/persona"
  const [DATABASE,setDATABASE] = React.useState([]);
  const [Age,setAge] = React.useState(0);
  const [Gender,setGender] = React.useState(0);
  const [City, setCity] = React.useState(0);

  function Postage(){
    axios
      .post("https://illustrious-cat-7fb4d9.netlify.app/api/persona",{
        age:31,
        gender:"Homme",
        city:"Nanterre",
        activity:"Droit",
        spirit:91,
        energy:8,
        nature:32,
        tactic:98,
        interest:["Cinéma","Cuisine","Voyages"],
        frustrations:"Pas assez d’organisation",
        tools:"Suite Office"
      },
      {headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'*'}})
      .then((response) => response)
      .then((data) => {console.log(data)})
  }
  
  React.useEffect(()=>{

    axios
      .get("https://illustrious-cat-7fb4d9.netlify.app/api/persona")
      .then((response) => response)
      .then((data) => {

    //reset
    let NombreTotal = 0
    let Total = 0
    let Homme = 0
    let Femme = 0
    let City = []

    data.data.forEach(element => {
        //AGE
        NombreTotal = NombreTotal+1
        Total = Total+element.age

        // GENRE
        if(
            element.gender == "Homme"
        )
        Homme = Homme+1

        if(
            element.gender == "Femme"
        )
        Femme = Femme+1

        //VILLE
        City.push(element.city)
        

    });
    setAge(Math.round(Total/NombreTotal))
    if(Homme > Femme) 
    setGender("Homme")
    if(Femme > Homme) 
    setGender("Femme")
    if(Homme === Femme){
        setGender(Math.random() < 0.5 ? "Homme" : "Femme") 
      } else {
        setGender(Homme > Femme ? "Homme" : "Femme")
      }
    const randomIndex = Math.floor(Math.random() * City.length);
    setCity(City[randomIndex]);
    })
  },[])


    //JSX
    return (
        <>
        
    <section className="persona">

<div className="gauche">
    <div className="personaliteR">
        <h1 className='textB'>Personnalité</h1>

        {/* <!-- <p>Esprit</p> -->
        <!-- <p>Energie</p> -->
        <!-- <p>Nature</p>
        <p>tactique</p> --> */}

        <label for="esprit" className="textB">Esprit</label>
        <input type="range" name="personaliteR" id="volume" min="0" max="100" step="1" />
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
        <input type="range" name="personaliteR" id="volume" min="0" max="11" step="1" />
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
        <input type="range" name="personaliteR" id="volume" min="0" max="11" step="1" />
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
        <input type="range" name="personaliteR" id="volume" min="0" max="11" step="1" />
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

    <div className="interetB">
        <h1 className='textB'>Centres d'intérêt</h1>

        <p className="textB">Cuisine</p>
        <p className="textB">Cinéma</p>
        <p className="textB">Réseaux sociaux</p>

    </div>

    <a href="#" title="" className="boutonB">Télécharger</a>

</div>

<div className="droite">

    <div className="profilB">
        <h1 className='textB'>Profil</h1>

        <p className="textB">{Age} ans</p>
        <p className="textB">{Gender}</p>
        <p className="textB">{City}</p>
        <p className="textB">Metiers du web</p>

    </div>

    <div className="frustrationsB">
        <h1 className='textB'>Frustations</h1>

        <p className="textB">Manque de temps</p>
        <p className="textB">Pas assez d'organisation</p>

    </div>

    <div className="outilsB">
        <h1 className="textB">Outils</h1>

        <p onClick={() => Postage()} className="textB">Réseaux sociaux</p>
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