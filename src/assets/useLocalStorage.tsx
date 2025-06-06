import {useState} from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            console.log('this is key: '+ key);
            console.log('this is initialValue: '+ initialValue)
            const item = window.localStorage.getItem(key);
            console.log('this is item:'+ item);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.log(error);
            return initialValue;
        }
    });
    const setvalue = (value) => {
        try {
            console.log('this is value: '+value)
            const valuetoStore = value instanceof Function ? value(storedValue) : value
            console.log('this is valuetoStore: '+valuetoStore)
            setStoredValue(valuetoStore);
            window.localStorage.setItem(key, JSON.stringify(valuetoStore));
        } catch (e) {
            console.log(e);
        }
    };
    return [storedValue, setvalue];
}