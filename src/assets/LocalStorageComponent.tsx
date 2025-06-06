import useLocalStorage from "./useLocalStorage.tsx";

export default function LocalStorageComponent() {
    const [name, setName] = useLocalStorage('name', '');
    const handlechange = (e) => {
        setName(e.target.value)
    }
    return (<>
        <h2>Local Storage Hook</h2>
        <input type="text" className={`form-control`} value={name}
               onChange={handlechange}
               placeholder="Enter your name"/>
        <p>Your name is: {name}</p>
    </>)
}