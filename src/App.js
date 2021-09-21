import './App.css';
import contactsJSON from "./contacts.json";
import React,  { useState } from "react";

function App() {
    const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
    const addRandomContact = () => {
      const index = Math.floor(Math.random() * contactsJSON.length);
      const newRandomContact = contactsJSON[index];
      contactsJSON.slice(index, 1);
      setContacts([newRandomContact, ...contacts]);
    };

    const sortedName = () => {
      const nameSorted = contacts.sort(function (contact1, contact2) {
        return contact1.name > contact2.name ? 1 : -1;
      });
      setContacts([...nameSorted]);
    }

    const popularityRank = () => {
      const rankingPopularity = contacts.sort(function (score1, score2) {
        return score1.popularity > score2.popularity ? 1 : -1;
      });
      setContacts([...rankingPopularity]);
    }

    const deleteActor = (id) => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    };

    return (
      <>
        <div className="App">
          <h1>IronContacts</h1>
          <button onClick={addRandomContact}>Add Random Contact</button>
          <button onClick={popularityRank}>Sort by popularity</button>
          <button onClick={sortedName}>Sort by name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>

          {contacts.map((person) => {
            return (
                <>
                  <tr>
                    <th>
                      <img src={person.pictureUrl} alt="actor portrait"/>
                    </th>
                    <th>{person.name}</th>
                    <th>{person.popularity}</th>
                    <th>{person.wonOscar ? "🏆" : ""}</th>
                    <th>{person.wonEmmy ? "🏆" : ""}</th>
                    <button onClick={() => deleteActor(person.id)}>Delete actor</button>
                  </tr>
                </>
              )
              })}
              ;
          </table>
        </div>
      </>
    )  
}

export default App;
