import { useEffect, useState } from "react";



export function useLocalStorage(dataWhichAdd, dataWhichGet, data = null, removeItemOrNot = false){
    let [item, setItem] = useState(null);
    let blablabla;
    let otherBlaBlaBla;

    useEffect(function(){
        dataWhichAdd !== null && localStorage.setItem(dataWhichAdd, data);
    }, [data, dataWhichAdd]);

    // getting item

    function getItem(param){
        if(dataWhichGet !== null){
            param = localStorage.getItem(dataWhichGet);
        }

        return param;
    }
    
    useEffect(function(){
        let anotherBlaBla = getItem(blablabla)
        setItem(anotherBlaBla);
    }, [blablabla, getItem]);

    // removing item

    function removeItem(param){
        if(dataWhichGet !== null){
            param = localStorage.removeItem(dataWhichGet);
        }

        return param;
    }
    
    useEffect(function(){
        if(removeItemOrNot){
            let otherAnotherBlaBla = removeItem(otherBlaBlaBla)
            return otherAnotherBlaBla;
        }
    }, [removeItem, otherBlaBlaBla]);

    /*if(removeItemOrNot){
        data = null;
    
        useEffect(function(){
            localStorage.removeItem(dataWhichGet);
        }, [dataWhichGet, data]);
    }*/
    
    function clearStorage(){
        localStorage.clear();
    
    }
    
    return { item, clearStorage };
};

// Sample invokes:

// for each actions you should invoke the below samples seperately.

// 1 - when you add data: let { item } = useLocalStorage("local storage data", null, data);

// 2 - when you get data: let { item: getItem } = useLocalStorage(null, "local storage data");

// 3 - when you remove any data: let { item: sdaasad } = useLocalStorage(null, "local storage data", null, true); 
// when this saved that data will be deleted immediately 

// 3 - when you want to clear local storage:  let { clearStorage } = useLocalStorage(null, "sfdsdsda"); 
// and invoke that function.
