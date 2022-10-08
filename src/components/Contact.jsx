import Swal from 'sweetalert2';
import { serverTimestamp, setDoc, doc, collection} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Contact = () => {

    const validText = (texto) => { 
        return texto.split("").some(elemento => elemento !== " ")
    }

    const validEmail = (mail) => {
        const mailArroba = mail.split("").some(elemento => elemento === "@")

        const mailPunto = mail.split("").some(elemento => elemento === ".")

        return (mailArroba && mailPunto)
    }

    const consultas = async (e) => {

        e.preventDefault()

        const formu = document.getElementById("formConsult")

        const mailForm = formu.children[0].children[1].value

        const nameForm = formu.children[1].children[1].value

        const consultaForm = formu.children[2].children[1].value


        if (validText(nameForm) && validText(consultaForm) && validEmail(mailForm)) { 
            
            const datos = {
                
                cliente : { 
                    name : nameForm,
                    email : mailForm,
                    consulta : consultaForm
                },

                date : serverTimestamp()
            }

            const newConsultRef = doc(collection(db, "consult")) 
            await setDoc(newConsultRef, datos) 
            
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                width: '27rem' ,
                padding: '33px',
                color: '#000',
                background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'  
            })

            formu.reset()

        } else {

            Swal.fire({
                icon: 'warning',
                title: 'Datos incorrectos',
                width: '27rem',
                padding: '33px',
                color: '#000',
                background: 'url(https://s.clipartkey.com/mpngs/s/275-2750618_music-note-frame-black-music-note-notes-music.png)'
            })
        }
    }

    return (
        <>
            <section className="clicks">
               <div className="tituloContacto">
                  <h2 className='titleContacto'>CONTACTO</h2>
                  <p className="contacto">¡No dudes en consultarnos ante cualquier duda!<span></span></p>
                  <p className="contacto mail">SOUNDSARC@GMAIL.COM</p>
                  <a className="contacto" href="https://api.whatsapp.com/send/?phone=5491144948424&text&app_absent=0">TEL: 0114494 8424</a>
               </div>
               <form id="formConsult" className="row g-3">
               <div className="col-md-6">
                  <label htmlFor="email" className="form-label">EMAIL</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Name@gmail.com" />
               </div>
               <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Name" />
               </div>
               <div className="col-md-6">
                  <label htmlFor="descripcion" className="form-label">Consulta</label>
                  <input type="text" className="form-control" name="descripcion" id="descripcion" placeholder="Tengo una duda con.." />
               </div>
               <div className="col-12">
                   <div className="form-check">
                       <input className="form-check-input" type="checkbox" />
                       <label className="form-check-label" htmlFor="gridCheck">Recibir más información</label>
                   </div>
               </div>
               <div className="col-12">
                   <button type="submit" className="btn btn-darkk" onClick={(e) => consultas(e)}>Enviar</button>
               </div>
               </form>
           </section>
        </>
    );
}

export default Contact;
