import React from 'react';
import logo from './logo.svg';
import "./style.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './pages/Formulaire';
import Formulaire from './pages/Formulaire';
import Test from './pages/Hero';

function App() {

  // JAVASCRIPT
  const[ModifPage,setModifPage] = React.useState("App");
  // const [Genre, setGenre] = React.useState("Femme");

  //JSX
  return (
      <>
        <Header></Header>
        <section className="hero">
          {ModifPage === "App" && <Test setModifPage={setModifPage}></Test>}
          {ModifPage === "Form" && <Formulaire setModifPage={setModifPage}></Formulaire>}
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