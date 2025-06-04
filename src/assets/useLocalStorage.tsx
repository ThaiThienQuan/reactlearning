import {useState} from "react";

export default function useLocalStorage(key,initialValue){
    const [storedValue, setStoredValue] = useState()
        try {
            const item=window.localStorage.getItem(key);
            return item? JSON.parse(item):ininitialValue;
        }catch (e) {
            console.log(error);
            return initialValue;
        }
    return(<></>)
}