import * as actionsType from './actions'

const initialstate = {
    bgcolor : 'white',
    correctLayout : [],
    layout : [],
    checkstate : [true,false,false,false,false,false,false,false,false,false],
    colors : ['orange' , 'lightcoral' , 'lightgreen' , 'lightskyblue' , 'rgb(123, 0, 81)'],
    checkbox : [1 , 1 , 1 , 1],
    win : 1, // 1=> continue , 2=> winn , 3=> lose
    i : 0
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case actionsType.setLayout:
            const newlayout = [];
            const newcheckbox = [];
            for(let i =0 ; i<10 ; i++){
                newlayout.push(['white' , 'white' , 'white' , 'white'])
                newcheckbox.push([1,1,1,1])
            }
            return{...state ,layout : newlayout , checkbox : newcheckbox}

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
                let newcheckbox = state.checkbox;
                let newcheckstate = []

                newstate[i] = false;
                newstate[i+1] = true;
                console.log(state.layout[state.i] , state.correctLayout )
                
                for(let j = 0 ; j< state.correctLayout.length ; j++){
                    if(state.layout[state.i][j] === state.correctLayout[j]){
                        newcheckstate.push(2) // satate and color is correct
                    }else{
                        let n = state.layout[state.i].includes(state.correctLayout[j] , 0)
                        if(n === true){
                            newcheckstate.push(3) // color is correct but state is incorrect
                        }else{
                            newcheckstate.push(4) // state and color is incurect
                        }
                    }
                }
                newcheckstate.sort();
                newcheckbox[i] = newcheckstate
                let checkwin = true;
                newcheckstate.forEach(element => {
                    if(element !== 2)  checkwin = false ;
                });

                if(i === 9){
                    return{...state , win : 3}
                }else {
                    if(checkwin === true){
                    return{...state , win : 2}
                    }else{
                        return {...state , 
                            checkstate : [...state.checkstate ] , 
                            i : state.i+1,
                            checkbox : [...state.checkbox],
                            win : 1}
                    }
                }
                
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

        case actionsType.reset:
            return{...state , 
                win:1 , 
                checkstate : [true,false,false,false,false,false,false,false,false,false],
                i : 0}
        default:
            return {...state}
    } 
}

export default reducer