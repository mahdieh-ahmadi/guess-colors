import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : [],
    checkstate : [true,false,false,false,false,false,false,false,false,false],
    colors : ['orange' , 'lightcoral' , 'lightgreen' , 'lightskyblue' , 'rgb(123, 0, 81)'],
    checkbox : [1 , 1 , 1 , 1],
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
            if(action.num === i){
                let newstate = state.checkstate;
                let newcheckstate = []

                newstate[i] = false;
                newstate[i+1] = true;
                console.log(state.layout[state.i] , state.correctLayout ,state.layout[state.i] == state.correctLayout)
                
                for(let j = 0 ; j< state.correctLayout.length ; j++){
                    if(state.layout[state.i][j] === state.correctLayout[j]){
                        newcheckstate.push(2) // satate and color is correct
                    }else{
                        let n = state.layout[state.i].includes(state.correctLayout[j] , 0)
                        console.log('includes ' + n)
                        if(n === true){
                            newcheckstate.push(3) // color is correct but state is incorrect
                        }else{
                            newcheckstate.push(4) // state and color is incurect
                        }
                    }
                }
                console.log(newcheckstate)
                return {...state , 
                    checkstate : [...state.checkstate ] , 
                    i : state.i+1}
            }else{
                return{...state}
            }
            
        case actionsType.setAnswer:
            let selects = [parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5),parseInt(Math.random()*5)]
            const answer = []
            selects.map(item => {
                answer.push(state.colors[item])
                return 0
            })
            return{...state , correctLayout : answer}
        default:
            return {...state}
    }
}

export default reducer