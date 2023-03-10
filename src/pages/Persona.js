import React from 'react';
import useForm from '../utile/useform';
import axios from 'axios';
import html2canvas from 'html2canvas';

function Persona({setModifPage, setformdata}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Persona");setformdata(data)
  })

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
  const handleScreenshot = () => {
    html2canvas(document.querySelector("#capture-area")).then(canvas => {
        const dataUrl = canvas.toDataURL();
        document.querySelector("#download-link").href = dataUrl;
        document.querySelector("#download-link").click();
    });
  };

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

        //PROFIL ////////////////////////////////////////////////////////////

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

        //ACTIVIT??
        Activity.push(element.activity) 
        
        //MBTI //////////////////////////////////////////////////////////////
        Spirit = Spirit+element.spirit
        Energy = Energy+element.energy
        Nature = Nature+element.nature
        Tactic = Tactic+element.tactic

        //OTHERS //////////////////////////////////////////////////////////////

        //INT??R??T
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
        <div>
            <section className="persona">
                <div className="gauche">
                <div className="personalite2">
                    <h2 className="textB">Personnalit??</h2>
                    <div className="container">

                        <p className="textB">Esprit</p>
                        <div className="progressbar-wrapper">
                            <div style={{width:Spirit+"%"}} title="" class="progressbar mp4">{Spirit}</div>
                        </div>

                        <p className="textB">Energie</p>
                        <div className="progressbar-wrapper">
                            <div style={{width:Energy+"%"}} title="" class="progressbar mp3">{Energy}</div>
                        </div>

                        <p className="textB">Nature</p>
                        <div className="progressbar-wrapper">
                            <div style={{width:Nature+"%"}}  title="" class="progressbar mp3">{Nature}</div>
                        </div>

                        <p className="textB">Tactique</p>
                        <div className="progressbar-wrapper">
                            <div style={{width:Tactic+"%"}}  title="" class="progressbar mp3">{Tactic}</div>
                        </div>
                    </div>
                </div>
                <div className="interetB">
                    <h2 className='textB'>Centres d'int??r??t</h2>
                    {
                    Interest.map((value,i)=>{
                    return <p className='textB' key={i}>{value[0]}</p>
                    })
                    }
                </div>

                <a href="#" onClick={handleScreenshot} title="" className="boutonB">T??l??charger</a>
                <a id="download-link" href="#" download></a>
            </div>

            <div className="droite">
            <div className="profilB">
                <h2 className='textB'>Profil de <span className='name'>{FirstName}</span></h2>
                <p className="textB">{Age} ans</p>
                <p className="textB">{Gender}</p>
                <p className="textB">{City}</p>
                <p className="textB">{Activity}</p>
            </div>

            <div className="frustrationsB">
            <h2 className='textB'>Frustations</h2>
                {
                Frustations.map((value,i)=>{
                return <p className='textB' key={i}>{value[0]}</p>
                })
                }
            </div>

        <div className="outilsB">
            <h2 className="textB">Outils</h2>
            {
            Tools.map((value,i)=>{
            return <p className='textB' key={i}>{value[0]}</p>
            })
            }
        </div>
    </div>
</section>
</div>

);
}

export default Persona;