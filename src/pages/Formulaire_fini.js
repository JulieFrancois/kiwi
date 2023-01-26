import React from 'react';
import useForm from '../utile/useform';

function Formulaire_fini({setModifPage, setformdata}) {
  
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("FormF");setformdata(data)
  })
  
    //JSX
    return (
        <>
          {/* background */}
          <div className='bonhomme6'></div>

          {/* style */}
          <section className="Formulaire_fini">
            <div className='elements'>
              <h1 className='paddong Titre'>Félicitations <span className='ponctuation'>!</span></h1>
              <div className='texte'>
                <p>Tu as aidé un UX designer à créer un persona.</p>
                <p>N’hésite pas à revenir</p>
              </div>
              <a onClick={() => setModifPage("Persona")} className="cta dashboard" href="#" title="">Voir le persona généré</a>
            </div>
          </section>
        </>
    );
  }

export default Formulaire_fini;