import React from 'react';
import "./style.css"
import Header from './components/Header';
// import Footer from './components/Footer'; à ajouter sur la première page quand le set up sera fait
import Formulaire from './pages/Formulaire';
import Hero from './pages/Hero';
import Formulaire2 from './pages/Formulaire2';
import Formulaire_fini from './pages/Formulaire_fini';
import Persona from './pages/Persona';
import axios from 'axios';
import Dashboard from './pages/Dashboard';


function App() {

  // JAVASCRIPT
  const[ModifPage,setModifPage] = React.useState("App"); 
  const[formdata,setformdata,] = React.useState();

  // const [Genre, setGenre] = React.useState("Femme");()

  //JSX
  return (
      <>
        <Header ModifPage={ModifPage} setModifPage={setModifPage}></Header>
        <section className="hero">
          {ModifPage === "App" && <Hero setModifPage={setModifPage}></Hero>}
        </section>

        {ModifPage === "Form" && <Formulaire setModifPage={setModifPage} setformdata={setformdata}></Formulaire>}
        {ModifPage === "Form2" && <Formulaire2 setModifPage={setModifPage} setformdata={setformdata}></Formulaire2>}
        {ModifPage === "FormF" && <Formulaire_fini setModifPage={setModifPage} setformdata={setformdata}></Formulaire_fini>}
        {ModifPage === "Persona" && <Persona setModifPage={setModifPage} setformdata={setformdata}></Persona>}
        {ModifPage === "Dashboard" && <Dashboard setModifPage={setModifPage} setformdata={setformdata}></Dashboard>}
      </>
  );
}

export default App;

        {/* <div>
          <button onClick={() => setModifPage("Form")}>Page1</button>
          {ModifPage === "Form" && <Form>setModifPage={setModifPage} Genre={Genre}</Form>};
        </div> */}