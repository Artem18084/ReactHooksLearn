import { useState, useMemo } from "react";
function createUser(name, surname) {
  console.log(user);

  return { name, surname };
}

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);
  // When calling useMemo, the createUser function is called and its return value is stored in memory. 
  //This memoized value is used on subsequent renders to avoid calling createUser again unless the dependencies [name, surname] have changed
  const user = useMemo(() => createUser(name, surname), [name, surname]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Prest on me was {counter} times
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setSurname(e.target.value)}
      />
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
export default App;
