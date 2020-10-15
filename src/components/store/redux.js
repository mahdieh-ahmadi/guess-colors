import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : [],
    checkstate : [true,false,false,false,false,false,false,false,false,false],
    i : 0
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case actionsType.setLayout:
            const newlayout = [];
            for(let i =0 ; i<10 ; i++){
                newlayout.push(['white' , 'white' , 'white' , 'white'])
            }
            return{...state ,layout : newlayout}

        case actionsType.Select_background_color:
            return {...state , bgcolor : action.color}

        case actionsType.change_vectore :
            let newLayout = state.layout
            let colors = newLayout[action.item]
            colors[action.select] = action.color
            newLayout[action.item] = colors
            return{...state , 
                layout : [...state.layout , [...state.layout[action.item] , state.layout[action.item][action.select] = action.color]]}

        case actionsType.checkLayout:
            let i = state.i
            let newstate = state.checkstate;
            newstate[i] = false;
            newstate[i+1] = true;
            console.log(action.num)
            return {...state , 
                checkstate : [...state.checkstate ] , 
                i : state.i+1}
    
        default:
            return {...state}
    }
}

export default reducer