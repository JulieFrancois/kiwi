import React from 'react';
import logo from './logo.svg';
import "./style.css"
import Header from './components/Header';
// import Footer from './components/Footer'; à ajouter sur la première page quand le set up sera fait
import Formulaire from './pages/Formulaire';
import Hero from './pages/Hero';
import Formulaire2 from './pages/Formulaire2';
import Formulaire_fini from './pages/Formulaire_fini';
import Persona from './pages/Persona';
import axios from 'axios';


function App() {

  // JAVASCRIPT
  const[ModifPage,setModifPage] = React.useState("App"); 
  const[formdata,setformdata,] = React.useState();
  const [DATABASE,setDATABASE] = React.useState([]);

  // const [Genre, setGenre] = React.useState("Femme");()

  React.useEffect(()=>{
    //  console.log(postData("https://illustrious-cat-7fb4d9.netlify.app/api/persona"))

    axios
      .get("https://illustrious-cat-7fb4d9.netlify.app/api/persona")
      .then((response) => response)
      .then((data) =>  setDATABASE(data.data))
  },[])

  //JSX
  return (
      <>
        <Header></Header>
        <section className="hero">
          {ModifPage === "App" && <Hero setModifPage={setModifPage}></Hero>}
        </section>

        {ModifPage === "Form" && <Formulaire setModifPage={setModifPage} setformdata={setformdata}></Formulaire>}
        {ModifPage === "Form2" && <Formulaire2 setModifPage={setModifPage} setformdata={setformdata}></Formulaire2>}
        {ModifPage === "FormF" && <Formulaire_fini setModifPage={setModifPage} setformdata={setformdata}></Formulaire_fini>}
        {ModifPage === "Persona" && <Persona setModifPage={setModifPage} setformdata={setformdata}></Persona>}

      </>
  );
}

export default App;

        {/* <div>
          <button onClick={() => setModifPage("Form")}>Page1</button>
          {ModifPage === "Form" && <Form>setModifPage={setModifPage} Genre={Genre}</Form>};
        </div> */}