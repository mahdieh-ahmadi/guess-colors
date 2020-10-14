import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : ['white' , 'white' , 'white' , 'white'],
    checkstate : [true,false,false,false,false,false,false,false,false,false],
    check : false,
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
            let checkk = true
            state.layout.forEach((i) => {
                if(i === 'white') {
                    checkk = false
                }
            })
            let checks = state.checkstate
            checks[state.i] = checkk 
            return {...state , check : checkk , checkstate : checks}
    
        default:
            return {...state}
    }
}

export default reducer