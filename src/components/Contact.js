import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="clicks">
               <div className="tituloContacto">
                  <h2>CONTACTO</h2>
                  <p className="contacto">¡No dudes en consultarnos ante cualquier duda!</p>
                  <p className="contacto">SOUNDSARC@GMAIL.COM</p>
                  <a className="contacto" href="https://api.whatsapp.com/send/?phone=5491144948424&text&app_absent=0">TEL: 0114494 8424</a>
               </div>
               <form id="clientes" className="row g-3">
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
                   <button type="submit" className="btn btn-darkk">Enviar</button>
               </div>
               </form>
           </section>
        </>
    );
}

export default Contact;
