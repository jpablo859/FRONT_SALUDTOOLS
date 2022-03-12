import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { tipoCitaStartLoading } from '../../actions/tipoCita';
import { Navbar } from '../ui/Navbar';
import { Row } from '../ui/Row';

export const TiposCitaScreen = () => {

    const dispatch = useDispatch();

    const { tipos } = useSelector(state => state.tipoCita);

    useEffect(() => {
        dispatch(tipoCitaStartLoading());
    }, [dispatch])

    const columns = [
        "Id", 
        "Nombre", 
        "Descripción", 
        "Color", 
        "Duración", 
        "Estado", 
        "Fecha creación", 
        "Última fecha edición",
        "Op"
    ];

    if (!tipos) return false;

    return (
        <>
            <Navbar/>
            <div className='container-fluid'>
                <div className="row">
                    <h1 className="display-5 text-center">Listado - Tipos de cita</h1>
                    <p className="lead">
                        <Link 
                            className="btn btn-primary" 
                            to="/formulario"
                        >
                            Nuevo tipo de cita
                        </Link>
                    </p>
                    <div className='col-md-12 col-sm-12 table-responsive'>
                        <table className='table table-sm'>
                            <thead>
                                <tr>
                                    { columns.map(column => (<th key={column}>{ column }</th>)) }
                                </tr>
                            </thead>
                            <tbody>
                                { tipos.map(row => (
                                    <Row
                                        key={ row.id }
                                        row={ row }
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
