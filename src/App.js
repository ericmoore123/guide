import React from 'react';
import './App.css';
import pokemon from './pokemon.json';
import PropTypes from "prop-types";

const PokemonRow = ({pokemon}) => 
  (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>
  );

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
}

function App() {
  return (
    <div style={{margin: "auto", width: "800px", paddingTop:"1rem"}}>
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {pokemon.slice(0, 20).map((pokemon) =>  //slice incoming array to first 20 entries, then map over and format each item recieved
            ( 
              <PokemonRow pokemon={pokemon} key={pokemon.id} />
            ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;
