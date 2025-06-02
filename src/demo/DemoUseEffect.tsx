import {useState, useEffect} from 'react';

export default function DemoUseEffect() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://demodata-1-ef2d2-default-rtdb.asia-southeast1.firebasedatabase.app/animal.json')
            .then((response) => await response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, []);
    return (<>
        <div className="container mt-5">
            <h3>Data fetching</h3>
            {loading ? <p>Loading ...</p>
                : (
                    <ul>{data.slice(0,5).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                    </ul>)}
        </div>
    </>);
}