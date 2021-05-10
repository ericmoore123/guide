import React from 'react';
import './App.css';
import pokemon from './pokemon.json';
import PropTypes from "prop-types";

const PokemonRow = ({pokemon, onSelect}) => 
  (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </tr>
  );

  // Proptypes Validate the prop passed to a child and warn the developer when a wrong props is passed, which may break your app.
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
}

const App = () => {

  // React Hooks let you use state and other React features without writing a class based component
  const [filter, filterSet] = React.useState(""); //UseState returns an array of two items (filter and filterset)
  const [selectedItem, selectedItemSet] = React.useState(null);

  return (
    <div className="container" >
      <h1 className="title">Pokemon Search</h1>
      
      <div className="table-style">
        <div>
          <input value={filter} onChange={(event) => filterSet(event.target.value)}></input>
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {pokemon
              //Returns new array made only of items that include the inputted value in the input field 
              //Add toLowerCase to make non-case-sensitive
              .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
              // Returns only first 20 array values
              .slice(0, 20)
              // Create PokemonRow component instance for each item in (now) formatted array
              .map((pokemon) =>  //slice incoming array to first 20 entries, then map over and format each item recieved
                ( 
                  <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => selectedItemSet(pokemon)} />
                ))}
            </tbody>

          </table>
        </div>

        {selectedItem && (
          <h1>{selectedItem.name.english}</h1>
        )}

      </div>
    </div>
  );
}

export default App;
