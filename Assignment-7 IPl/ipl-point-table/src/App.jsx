import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => b.Points - a.Points); // Sort by Points in descending order
                setTeams(sortedData);
            }); 
    }, []);

    return (
        <div className="App">
            
            <h1>IPL Season 2022 Points</h1>

            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Team</th>
                            <th>Matches</th>
                            <th>Won</th>
                            <th>Lost</th>
                            <th>Tied</th>
                            <th>NRR</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td> {/* Use index + 1 for the No column */}
                                <td>{team.Team}</td>
                                <td>{team.Matches}</td>
                                <td>{team.Won}</td>
                                <td>{team.Lost}</td>
                                <td>{team.Tied}</td>
                                <td>{team.NRR}</td>
                                <td>{team.Points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
