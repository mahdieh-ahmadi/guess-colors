import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : ['white' , 'white' , 'white' , 'white'],
    check : [false,false,false,false,false,false,false,false,false,false],
    i : 0
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case actionsType.Select_background_color:
            return {...state , bgcolor : action.color}

        case actionsType.change_vectore :
            let colors = state.layout
            colors[action.select] = action.color
            return{...state , layout : colors}

        case actionsType.check_block:
            let check = true
            state.layout.forEach((i) => {
                if(i === 'white') {
                    check = false
                }
            })
            let checks = state.check
            checks[state.i] = check 
            return {...state , check : checks}
    
        default:
            return {...state}
    }
}

export default reducer