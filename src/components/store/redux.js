import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : ['wite' , 'white' , 'white' , 'white'],
    check : false
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case actionsType.Select_background_color:
            return {...state , bgcolor : action.color}

        case actionsType.change_vectore :
            let colors = state.layout
            colors[action.select] = action.color
            return{...state , layout : colors}
    
        default:
            return {...state}
    }
}

export default reducer