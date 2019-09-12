export const INCREMENTTYPE="INCREMENT";
export const DECREMENTTYPE="DECREMENT";
export const USERADD_TYPE="USER_ADD";

export function increment(){
    return{
        type:INCREMENTTYPE
    }
}

export function decrement(){
    return{
        type:DECREMENTTYPE
    }
}

export function useradd(){
    return{
        type:USERADD_TYPE
    }
}