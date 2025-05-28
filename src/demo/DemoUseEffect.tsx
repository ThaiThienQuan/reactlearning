import React, { useState, useEffect } from 'react';

export default function DataFetching() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Data Fetching</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.slice(0, 5).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}