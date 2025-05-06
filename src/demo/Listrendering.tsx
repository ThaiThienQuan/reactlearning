
export default function Listrendering() {
    const names = ['quan', 'vinh', 'yen', 'thach'];
    return (<>
        <h1>Names List</h1>
        <ul>
            {names.map((name) =>
                (<li key={name}>{name}</li>
                ))}

        </ul>
    </>)

}
