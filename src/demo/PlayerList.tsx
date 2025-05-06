import Player from "./Player.tsx";

export default function PlayerList() {
    const players = [
        {id: 1, name: 'Ramesh', email: 'ramesh@example.com'},
        {id: 2, name: 'Suresh', email: 'suresh@example.com'},
        {id: 3, name: 'Mahesh', email: 'mahesh@example.com'}
    ];
    return(<>
        <h4>Player List</h4>
        {players.map((player) =>
            (<Player key={player.id} player={player} />)
        )}

    </>)
}