import react, {useState} from "react";


export default function ConditionRD() {
    // @ts-ignore
    const [stat, setstat] = useState("loading");
    const Messagestatus=()=>{
    switch (stat) {
        case "loading": return <p>Loading...</p>;
        case "success": return <p>Data loaded successfully!</p>;
        case "error":return <p>Error loading data.</p>;
        default: return null;
    }}
    return (<>
        <div>{Messagestatus()} </div>
        <button onClick={() => setstat("loading")}>Loading</button>
        <button onClick={() => setstat("success")}>Success</button>
        <button onClick={() => setstat("error")}>Error</button>
    </>)
}