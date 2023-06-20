import { type } from "os";
import { createStore } from "redux";

/* const getAPI = (
    state:{
    test : 0
}, action:any) => {
    (state:any,action:any) => {
        switch (action.type) {
            // case value:
                
                // break;
            default:
                return state;
        }        
    }
    return state
} 

const store = createStore(getAPI) */

// state 타입
type CounterState = {
    count: number;
};


const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

export const increase = () => ({
    type : INCREASE
})

export const decrease = () => ({
    type : DECREASE
})

// 무조건 이 리턴 타입이어야 한다라고 정해주는 거
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>;

// reducer 만들기
const counter  = (
    state : CounterState = {count : 0},
    action : CounterAction
): CounterState => {
    switch(action.type){
        case INCREASE:
            return {count : state.count +1}
        case DECREASE:
            return {count : state.count -1}
        default:
            return state
    }
}

const S = createStore(counter)
