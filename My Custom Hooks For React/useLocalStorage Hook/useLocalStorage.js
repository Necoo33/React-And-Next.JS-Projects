export function useLocalStorage(dataWhichAdd, dataWhichGet, data = null, removeItemOrNot = false){



    if(dataWhichAdd !== null){
        localStorage.setItem(dataWhichAdd, data)
    }

    let item;

    if(dataWhichGet === null){
        item = null;
    } else{
        item = localStorage.getItem(dataWhichGet);
    };

    if(removeItemOrNot){
        item = null;

        localStorage.removeItem(dataWhichGet);
    }

    function clearStorage(){
        localStorage.clear();
    }

    return { item, clearStorage };

};

// Sample invokes:

// 1 - when you add data: let { item } = useLocalStorage("local storage data", null, data);

// 2 - when you get data: let { item: getItem } = useLocalStorage(null, "local storage data");

// 3 - when you remove any data: let { item: sdaasad } = useLocalStorage(null, "local storage data", null, true); 
// when this saved that data will be deleted immediately 

// 4 - when you want to clear local storage:  let { clearStorage } = useLocalStorage(null, "sfdsdsda"); 
// and invoke that function.
