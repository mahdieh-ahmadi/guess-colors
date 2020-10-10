import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white'
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case actionsType.Select_background_color:
            return {...state , bgcolor : action.color}
    
        default:
            return {...state}
    }
}

export default reducer