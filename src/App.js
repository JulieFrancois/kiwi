import React from 'react';
import logo from './logo.svg';
import "./style.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './pages/Formulaire';
import Formulaire from './pages/Formulaire';
import Test from './pages/Hero';
import Formulaire2 from './pages/Formulaire';

function App() {

  // JAVASCRIPT
  const[ModifPage,setModifPage] = React.useState("App"); 
  const[formdata,setformdata,] = React.useState(); 

  // const [Genre, setGenre] = React.useState("Femme");

  //JSX
  return (
      <>
        <Header></Header>
        <section className="hero">
          {ModifPage === "App" && <Test setModifPage={setModifPage}></Test>}
          {ModifPage === "Form" && <Formulaire setModifPage={setModifPage} setformdata={setformdata}></Formulaire>}
          {ModifPage === "Form2" && <Formulaire2 setModifPage={setModifPage} setformdata={setformdata}></Formulaire2>}

        </section>
        <Footer></Footer>
      </>
  );
}


export default App;

        {/* <div>
          <button onClick={() => setModifPage("Form")}>Page1</button>
          {ModifPage === "Form" && <Form>setModifPage={setModifPage} Genre={Genre}</Form>};
        </div> */}