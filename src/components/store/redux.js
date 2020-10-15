import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : [],
    checkstate : [true,false,false,false,false,false,false,false,false,false],
    check : false,
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

        case actionsType.checkLayout:
            let i
            let newstate =state.checkstate
            for (let index = 0; index < newstate.length; index++) {
                if(newstate[index] === true){
                    i = index
                }    
            }
            console.log(i)
            newstate[i] = false
            newstate[i+1] = true;
            return {...state , 
                checkstate : newstate , 
                layout : ['white' , 'white' , 'white' , 'white'] , 
                i : state.i+1}
    
        default:
            return {...state}
    }
}

export default reducer