import React from 'react';
import logo from './logo.svg';
import "./style.css"
import Header from './components/Header';
// import Footer from './components/Footer';
import Formulaire from './pages/Formulaire';
import Hero from './pages/Hero';
import Formulaire2 from './pages/Formulaire2';
import Formulaire_fini from './pages/Formulaire_fini';
import axios from 'axios';

function App() {

  // JAVASCRIPT
  const[ModifPage,setModifPage] = React.useState("App"); 
  const[formdata,setformdata,] = React.useState(); 

  // const [Genre, setGenre] = React.useState("Femme");()

  React.useEffect(()=>{

     axios("https://illustrious-cat-7fb4d9.netlify.app/api/persona", {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE',
        'Access-Control-Allow-Headers': 'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
        "Accept":"application/json, text/plain, /", "Content-Type":"multipart/form-data"
        //lignes à enlever au fur et à mesure en partant du bas si ça ne fonctionne pas sur un réseau NORMAL
      },
      withCredentials: true,
      //si rien ne fonctionne à retirer en ayant tout remis au dessus
    }).then(response => {
      console.log(response);
    })
    .catch(function (error) {
    // en cas d’échec de la requête
    console.log(error);
    })
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


      </>
  );
}

export default App;

        {/* <div>
          <button onClick={() => setModifPage("Form")}>Page1</button>
          {ModifPage === "Form" && <Form>setModifPage={setModifPage} Genre={Genre}</Form>};
        </div> */}