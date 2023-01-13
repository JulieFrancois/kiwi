import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import useForm from '../utile/useform';

function Formulaire_fini({setModifPage, setformdata}) {
  
  // const Formulaire = ({setModifPage}) => {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("FormF");setformdata(data)// Write your submit function here
  })
  
    //JSX
    return (
        <>
          {/* <Header></Header> */}
          <section className="Formulaire_fini">
           <div className='elements'>
          <h1>Félicitations <span className='ponctuation'>!</span></h1>
          <div className='texte'>
            <p>Tu as aidé un UX designer à créer un persona.</p>
            <p>N’hésite pas à revenir</p>
          </div>

          {/* <div className='lien'>
          <a onClick={() => setModifPage("Formulaire_fini")} className="" href="#" title="">Lien à envoyer aux users</a>
          </div> */}
          
          <a onClick={() => setModifPage("App")} className="cta dashboard" href="#" title="">Voir mon dashboard</a>
            {/* <a className='dashboard'>Voir mon dashboard</a> */}
            </div>
          </section>
          <Footer></Footer>
        </>
    );
  }

export default Formulaire_fini;