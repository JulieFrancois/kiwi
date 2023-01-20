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
  const [FirstName, setFirstName] = React.useState(0)
  const [City, setCity] = React.useState(0);
  const [Activity, setActivity] = React.useState(0);
  const [Spirit, setSpirit] = React.useState(0);
  const [Energy, setEnergy] = React.useState(0);
  const [Nature, setNature] = React.useState(0);
  const [Tactic, setTactic] = React.useState(0);
  const [Interest, setInterest] = React.useState([]);
  const [Frustations, setFrustrations] = React.useState([]);
  const [Tools, setTools] = React.useState([]);
  

//   function Postage(){
//     axios
//       .put("https://illustrious-cat-7fb4d9.netlify.app/api/persona",{
//         age:31,
//         gender:"Homme",
//         city:"Nanterre",
//         activity:"Droit",
//         spirit:91,
//         energy:8,
//         nature:32,
//         tactic:98,
//         interest:["Cinéma","Cuisine","Voyages"],
//         frustrations:["Pas assez d’organisation"],
//         tools:["Suite Office"]
//       },
//       {headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       'Access-Control-Allow-Headers':'*'}})
//       .then((response) => response)
//       .then((data) => {console.log(data)})
//   }
  
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
    let MaleFirstNames = ["John", "Michael", "David", "James"]
    let FemaleFirstNames = ["Emily", "Jessica", "Samantha", "Ashley"]

    let City = []
    let Activity = []

    let Spirit = 0
    let Energy = 0
    let Nature = 0
    let Tactic = 0

    let Interest = {}
    let Frustations = {}
    let Tools = {}

    data.data.forEach(element => {

        //PROFIL //////////////////////////////////////////////////////////////

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

        //ACTIVITÉ
        Activity.push(element.activity) 
        
        //MBTI //////////////////////////////////////////////////////////////
        Spirit = Spirit+element.spirit
        Energy = Energy+element.energy
        Nature = Nature+element.nature
        Tactic = Tactic+element.tactic

        //OTHERS //////////////////////////////////////////////////////////////

        //INTERÊT
        element.interest.forEach(value => {
            Interest[value] = Interest[value] ? Interest[value] + 1 : 1;
        });
        
        const entries = Object.entries(Interest);
        entries.sort((a, b) => b[1] - a[1]);
        const topThreeValues = entries.slice(0, 3);
        setInterest(topThreeValues)

        //FRUSTRATIONS
        element.frustrations.forEach(value => {
            Frustations[value] = Frustations[value] ? Frustations[value] + 1 : 1;
        });
        
        const entries2 = Object.entries(Frustations);
        entries2.sort((a, b) => b[1] - a[1]);
        const topTwoValues = entries2.slice(0, 2);
        setFrustrations(topTwoValues)
   

        //OUTILS
        element.tools.forEach(value => {
            if(value)
            Tools[value] = Tools[value] ? Tools[value] + 1 : 1;
        });
        
        const entries3 = Object.entries(Tools);
        entries3.sort((a, b) => b[1] - a[1]);
        const topTwo2Values = entries3.slice(0, 2);
        setTools(topTwo2Values)

    });

    setAge(Math.round(Total/NombreTotal))

    if(Homme > Femme){ 
        setGender("Homme")
        const randomIndexGender = Math.floor(Math.random() * MaleFirstNames.length);
        setFirstName(MaleFirstNames[randomIndexGender]);
    }
    if(Femme > Homme){
        setGender("Femme")
        const randomIndexGender2 = Math.floor(Math.random() * FemaleFirstNames.length)
        setFirstName(FemaleFirstNames[randomIndexGender2]);
    }
    if(Homme === Femme){
        let Ylona = Math.random()
        if(Ylona < 0.5){ 
            setGender("Homme")
            const randomIndexGender = Math.floor(Math.random() * MaleFirstNames.length);
            setFirstName(MaleFirstNames[randomIndexGender]);
        }
        if(Ylona > 0.5){
            setGender("Femme")
            const randomIndexGender2 = Math.floor(Math.random() * FemaleFirstNames.length)
            setFirstName(FemaleFirstNames[randomIndexGender2]);
        }
        setGender(Ylona < 0.5 ? "Homme" : "Femme")
         
      } else {
        setGender(Homme > Femme ? "Homme" : "Femme")
      }

    // if(Gender === "Homme"){
    //     const randomIndexGender = Math.floor(Math.random() * MaleFirstNames.length);
    //     setFirstName(MaleFirstNames[randomIndexGender]);
    // }
    // else{
    //     const randomIndexGender2 = Math.floor(Math.random() * FemaleFirstNames)
    // }


    const randomIndex = Math.floor(Math.random() * City.length);
    setCity(City[randomIndex]);
    const randomIndex2 = Math.floor(Math.random() * Activity.length);
    setActivity(Activity[randomIndex2]);

    setSpirit(Math.round(Spirit/NombreTotal))
    setEnergy(Math.round(Energy/NombreTotal))
    setNature(Math.round(Nature/NombreTotal))
    setTactic(Math.round(Tactic/NombreTotal))

   
    
    

    })
  },[])


    //JSX
    return (
        <>
        
    <section className="persona">

<div className="gauche">
    <div className="personaliteR">
        <h1 className='textB'>Personnalité</h1>

        <label for="esprit" className="textB">Esprit</label>
        <input type="range" name="personaliteR" id="volume" min="0" max="100" step="1" value={Spirit}/>
        <datalist>
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
            <option value="40"></option>
            <option value="50"></option>
            <option value="60"></option>
            <option value="70"></option>
            <option value="80"></option>
            <option value="90"></option>
            <option value="100"></option>
        </datalist>

        <label for="Extravertie" className="textB">Energie</label>
        <input type="range" name="personaliteR" id="volume" min="0" max="100" step="1" value={Energy} />
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
        <input type="range" name="personaliteR" id="volume" min="0" max="100" step="1" value={Nature}/>
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
        <input type="range" name="personaliteR" id="volume" min="0" max="100" step="1" value={Tactic}/>
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

        {
        Interest.map((value,i)=>{
        return <p className='textB' key={i}>{value[0]}</p>
        })
        }

    </div>

    {/* <a href="#" onClick={() => Postage()} title="" className="boutonB">Télécharger</a> */}
    <a href="#" title="" className="boutonB">Télécharger</a>
</div>

<div className="droite">

    <div className="profilB">
        <h1 className='textB'>Profil</h1>

        <p className="textB">{FirstName}</p>
        <p className="textB">{Age} ans</p>
        <p className="textB">{Gender}</p>
        <p className="textB">{City}</p>
        <p className="textB">{Activity}</p>

    </div>

    <div className="frustrationsB">
        <h1 className='textB'>Frustations</h1>

        {
        Frustations.map((value,i)=>{
        return <p className='textB' key={i}>{value[0]}</p>
        })
        }

    </div>

    <div className="outilsB">
        <h1 className="textB">Outils</h1>

        {
        Tools.map((value,i)=>{
        return <p className='textB' key={i}>{value[0]}</p>
        })
        }

    </div>

</div>


</section>
          <Footer></Footer>
        </>
    );
  }

export default Persona;