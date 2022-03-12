import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Navbar } from '../ui/Navbar';
import { tipoCitaSetClearActive, tipoCitaStartNew } from '../../actions/tipoCita';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

export const FormularioScreen = () => {

  
  const history = useHistory();

  const dispatch = useDispatch();
  
  const { active, activeTipoCita } = useSelector(state => state.tipoCita);

  const [formValues, handleInputChange] = useForm(activeTipoCita);

  const { nombre, descripcion, color, duracion } = formValues;

  const fnGuardarTipoCita = () => {
    Swal.fire({
      title: `Desea ${ active ? "actualizar" : "guardar" } el tipo de cita?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, actualizar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(tipoCitaStartNew(formValues));
        dispatch(tipoCitaSetClearActive());
        history.push("/tiposCita");
      }
    })
  }

  const fnListado = () => {
    dispatch(tipoCitaSetClearActive());
    history.push("/tiposCita");
  }

  return (
    <>
        <Navbar/>
        <div className='container-fluid'>
          <div className="row">
            <h1 className="display-5 text-center">Formulario - Tipo de cita</h1>
            <p className="lead">
              <button 
                className="btn btn-primary"
                onClick={fnListado}
              >
                Listado - tipos de cita
              </button>
            </p>
          </div>
        </div>
        <div className='container shadow-lg p-5 mb-5 bg-body rounded'>
          <div className='row ms-5 me-5'>
            <div className='col-md-6'>
              <label className="form-label">Nombre</label>
              <input type="text" value={nombre} name='nombre' className='form-control' onChange={handleInputChange}/>
            </div>
            <div className='col-md-4'>
              <label className="form-label">Duración (Minutos)</label>
              <input type="text" value={duracion} name='duracion' className='form-control' onChange={handleInputChange}/>
            </div>
            <div className='col-md-2'>
              <label className="form-label">Color</label>
              <input value={color} name='color' type="color" onChange={handleInputChange} className='form-control form-control-color'/>
            </div>
            <div className='col-md-12 mt-2'>
              <label className="form-label">Descripción</label>
              <input type="text" value={descripcion} name='descripcion' className='form-control' onChange={handleInputChange}/>
            </div>
            <div className='col-md-3 mt-3'>
              <button 
                className={`btn btn-${active ? "info" : "success"} w-100`}
                onClick={fnGuardarTipoCita}
              >
                {  active ? `Actualizar` : `Guardar` }
              </button>
            </div>
          </div>
        </div>
    </>
  )
}
