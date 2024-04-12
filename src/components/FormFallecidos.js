import React, { Component } from 'react';
import firebaseConf from './Firebase';
import '../css/fallecidas.css';

class Fallecidas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('Fallecidas').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const {  especie,estado, fecha, imagen, observaciones,personal,sexo,tanque} = snapshot.val();
      const data = {  especie, estado, fecha,  imagen, observaciones,personal,sexo,tanque };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
        especie: this.inputSpecie.value,
        fecha: this.inputDate.value,
        estado: this.inputState.value,
        imagen: this.inputImage.value,
        observaciones: this.textAreaMessage.value,
        personal: this.inputPersonal.value,
        sexo: this.inputSex.value,
        tanque:this.inputTank.value
    };
    if ( params.especie  && params.estado && params.fecha && params.imagen && params.observaciones && params.personal  && params.sexo && params.tanque) {
      firebaseConf.database().ref('Fallecidas').push(params).then(() => {
        this.showAlert('success', 'Sus datos han sido enviados');
      }).catch(() => {
        this.showAlert('danger', 'Sus datos no han sido enviados');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Porfavor, llene los campos');
    };
  }

  render() {
    return (
      
      <div className="body">
    
       
        <div className='container' style={{ padding: `40px 0px` }}>
          <div className='row'>
            <div className='col-sm-4 form-fallecidas'>
              <h2>Especies Fallecidas</h2>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
               
                <div className='form-group'>
                  <label htmlFor='especie'></label>
                  <select className='form-control' id='especie'  ref={especie => this.inputSpecie = especie}>
                  <option value='Atelopus Zetekis' disabled defaultValue >Especies</option>
                    <option value='Atelopus Zetekis'>Atelopus Zetekis</option>
                    <option value='Atelopus Varius'>Atelopus Varius</option>
                    <option value='Dauratus'>Dauratus</option>
                    <option value='Anoteca Cornuta'>Anoteca Cornuta</option>
                    <option value='Gastroteca Cornuta'>Gastroteca Cornuta</option>
                    <option value='Cristal'>Cristal</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='estado'></label>
                  <input type='text' className='form-control' id='estado' placeholder='Estado' ref={estado => this.inputState = estado} />
                </div>
                <div className='form-group'>
                  <label htmlFor='fecha'></label>
                  <input type='date' className='form-control' id='fecha' placeholder='Fecha' ref={fecha => this.inputDate = fecha} />
                </div>
              
                  <div className='form-group'>
                  <label htmlFor='imagen'></label>
                  <input type='file' className='form-control' id='image' placeholder='Name' ref={imagen=> this.inputImage = imagen} />
                </div>
                <div className='form-group'>
                  <label htmlFor='observaciones'></label>
                  <textarea className='form-control' id='observaciones' placeholder='Observaciones'rows='3' ref={observaciones => this.textAreaMessage = observaciones}></textarea>
                </div>
                <div className='form-group'>
                  <label htmlFor='personal'></label>
                  <input type='text' className='form-control' id='personal' placeholder='Personal' ref={personal=> this.inputPersonal = personal} />
                </div>
                <div className='form-group'>
                  <label htmlFor='sexo'></label>
                  <select className='form-control' id='sexo'  ref={sexo => this.inputSex = sexo}>
                  <option value='Atelopus Zetekis' disabled defaultValue >Sexo</option>
                    <option value='Femenino'>Femenino</option>
                    <option value='Masculino'>Masculino</option>
            
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='tanque'></label>
                  <input type='text' className='form-control' id='tanque' placeholder='Tanque' ref={tanque=> this.inputTank = tanque} />
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
              </form>
              {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
            </div>
            <div className='col-sm-8 vista' >
            <h3>Historial Reciente</h3>
              <div className='row'>
                {this.state.form.map(form =>
                  <div className='col-sm-6' key={form.phone} style={{ margin: `0px 0px 30px 0px` }}>
                    <div className='card'>
                      <div className='card-body'>
                        <h4 className='card-title'>{form.especie}</h4>
                        <h6 className='card-subtitle mb-2 text-muted'>{form.cantidad}</h6>
                        <p className='card-text'>{form.observaciones}</p>
                        <a href={`tel:${form.phone}`} className='card-link'>{form.phone}</a>
                        <a href={`mailto:${form.email}`} className='card-link'>{form.email}</a>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
    );
  }
}

export default Fallecidas;