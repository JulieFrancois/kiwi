import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import useForm from '../utile/useform';

function Persona({setModifPage, setformdata}) {
  
  // const Formulaire = ({setModifPage}) => {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Persona");setformdata(data)// Write your submit function here
  })
  
    //JSX
    return (
        <>
          {/* <Header></Header> */}
          <section className="Persona">

          <h1 className='personalite'>Personnalité</h1>
          <h1 className='interet'>Centres d'intérêts</h1>
          <h1 className='Profil'>Profil</h1>
          <h1 className='frustrations'>Frustations</h1>
          <h1 className='outils'>Outils</h1>

          <a onClick={() => setModifPage("App")} className="cta telecharger" href="#" title="">Télécharger</a>

          </section>

          <Footer></Footer>
        </>
    );
  }

export default Persona;