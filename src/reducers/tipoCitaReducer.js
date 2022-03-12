import { types } from "../types/types";

const initialState = {
    active: false,
    activeTipoCita: {
        id: '',
        nombre: '',
        descripcion: '',
        color: '',
        duracion: '',
        estado: '',
        createdAt: '',
        updatedAt: '',
    }
}

export const tipoCitaReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.tipoCitaAddNew:
            return {
                ...state,
                tipos: [
                    ...state.tipos,
                    action.payload
                ]
            }
        case types.tipoCitaUpdated:
            return {
                ...state,
                tipos: state.tipos.map(
                    e => e.id === action.payload.id ? action.payload : e
                )
            }
        case types.tipoCitaDeleted:
            return {
                ...state,
                tipos: state.tipos.filter(
                    e => e.id !== action.payload.id
                )
            }
        case types.tiposCitaLoaded:
            return {
                ...state,
                tipos: action.payload
            }
        case types.tipoCitaSetActive:
            return {
                ...state,
                active: true,
                activeTipoCita: action.payload
            }
        case types.tipoCitaSetClearActive:
            return {
                ...state,
                ...initialState
            }
        case types.tipoCitaUpdate:
            return {
                ...state,
                tipos: state.tipos.map(
                    e => e.id === action.payload.id ? action.payload : e
                )
            }
        default:
            return state;
    }
}