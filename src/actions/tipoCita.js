import { types } from "../types/types";
import { query } from "../helpers/fetch";
import Swal from "sweetalert2";

export const tipoCitaStartNew = state => {
    return async (dispatch) => {
        try {
            const resp = await query('guardarTipoCita', state, 'POST');
            const body = await resp.json();
    
            if(!body.ok) {
                return Swal.fire('Información', body.msg, 'info')
            }
            if (state.id) {
                dispatch(tipoCitaUpdate(state));
            } else {
                state.id = body.data.id;
                dispatch(tipocitaAddNew(state));
            }
            Swal.fire('Bien', body.msg, 'success');
        } catch(err) {
            console.log(err)
            Swal.fire('Información', err.msg, 'info')
        }
    }
}

const tipocitaAddNew = state => ({
    type: types.tipoCitaAddNew,
    payload: state
})

const tipoCitaUpdate = state => ({
    type: types.tipoCitaUpdate,
    payload: state
})

export const tipoCitaStartUpdatedEstado = id => {
    return async dispatch => {
        try {
            const resp = await query(`actualizarEstadoTipoCita/${id}`, {}, 'PUT');
            const body = await resp.json();

            if(!body.ok) {
                return Swal.fire('Error', body.msg, 'error')
            }
            dispatch(tipoCitaUpdatedEstado(body.data));
            Swal.fire('Bien', body.msg, 'success');
        } catch(err) {
            console.log(err)
        }
    }
}

const tipoCitaUpdatedEstado = body => ({
    type: types.tipoCitaUpdated,
    payload: body
})

export const tipoCitaStartDeleted = id => {
    return async (dispatch) => {
        try {
            const resp = await query(`eliminarTipoCita/${id}`, {}, 'DELETE');
            const body = await resp.json();
                        
            if(!body.ok) {
                Swal.fire('Error', body.msg, 'error');
            }
            dispatch(tipoCitaDeleted(id));
            Swal.fire('Bien', body.msg, 'success');
        } catch (err) {
            console.log(err)
        }
    }
}

const tipoCitaDeleted = id => ({
    type: types.tipoCitaDeleted,
    payload: {
        id
    }
})

export const tipoCitaStartLoading = () => {
    return async dispatch => {
        try {
            const resp = await query('consultarTiposCita');
            const body = await resp.json();

            if(!body.ok) {
                return Swal.fire('Error', body.msg, 'error');
            }
            dispatch(tiposCitaLoaded(body.data));

        } catch(err) {
            console.log(err)
        }
    }
}

const tiposCitaLoaded = tipos => ({
    type: types.tiposCitaLoaded,
    payload: tipos
})

export const tipoCitaSetActive = body => ({
    type: types.tipoCitaSetActive,
    payload: body
})

export const tipoCitaSetClearActive = body => ({
    type: types.tipoCitaSetClearActive,
    payload: body
})