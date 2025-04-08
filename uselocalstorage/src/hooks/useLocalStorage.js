import React, { useEffect } from 'react'
import { useState } from 'react'

const useLocalStorage = (key) => {

    const setItem = (value) =>{

        try{
            window.localStorage.setItem(key,JSON.stringify(value))
        }
        catch(error){
            console.log(error); 
        }
    }

    const getItem = (value) =>{

        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : undefined;
            // if(item){
            //     return JSON.parse(item)
            // }
        }
        catch(error){
            console.log(error);
            
        }
    }

    const removeItem = () =>{
        try{
            window.localStorage.removeItem(key)
        }
        catch(error){
            console.log(error);
        }
    }

    
    return {setItem,getItem,removeItem}
}

export default useLocalStorage