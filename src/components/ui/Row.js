import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { tipoCitaSetActive, tipoCitaStartDeleted, tipoCitaStartUpdatedEstado } from '../../actions/tipoCita';

export const Row = ({row}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const Icon = styled.i`
        color: ${ props => props.color }
    `;
    const Btn = styled.button`
        padding: 0 5px 0 5px;
    `;

    const fnActualizarEstado = () => {
        Swal.fire({
            title: 'Desea actualizar el estado?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, actualizar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(tipoCitaStartUpdatedEstado(row.id))
            }
        })
    }

    const fnEliminar = () => {
        Swal.fire({
            title: 'Desea eliminar el tipo de cita?',
            text: "No habrá marcha atrás una vez ejecutada esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(tipoCitaStartDeleted(row.id))
            }
        })
    }

    const fnEditar = () => {
        dispatch(tipoCitaSetActive(row));
        history.push("/formulario");
    }

    return (    
        <tr>
            <td>{ row.id }</td>
            <td>{ row.nombre }</td>
            <td>{ row.descripcion }</td>
            <td width="5%">
                <Icon 
                    className="fa fa-solid fa-brush"
                    color={ row.color }
                >
                </Icon>
                </td>
            <td>{ row.duracion } Min</td>
            <td>
                <span className={`badge bg-${row.estado === "Activa" ? "success" : "danger"}`}>{ row.estado }</span>
            </td>
            <td>{ row.createdAt }</td>
            <td>{ row.updatedAt }</td>
            <td width="9%">
                <Btn 
                    className='btn btn-sm btn-dark'
                    onClick={fnActualizarEstado}
                >
                    <i className='fa fa-sync'></i>
                </Btn>
                <Btn 
                    className='btn btn-sm btn-danger ms-1'
                    onClick={fnEliminar}
                >
                    <i className='fa fa-trash'></i>
                </Btn>
                <Btn 
                    className='btn btn-sm btn-warning ms-1'
                    onClick={fnEditar}
                >
                    <i className='fa fa-pen'></i>
                </Btn>

            </td>
        </tr>
    )
}
