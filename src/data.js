export const API_KEY = 'AIzaSyABU3T4-2PU_QCaQwxAG6-JBntQRb42Ryg';

export const value_converter = (value)=>{
    if (value>=1000000) {
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000) {
        return Math.floor(value/1000)+"K"
    }else{
        return value
    }
}