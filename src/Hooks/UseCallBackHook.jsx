import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello everybody");
  const [counter, setCounter] = useState(0);
  // function greeting changed each times when  do render so useEffect get  new Link to Greeting - consequence reRender , to a void it use useCallback (remember and callback function - link didnt change)
  const greeting = useCallback((text) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Was clicked at me {counter} times.
    </button>
  );
}

export default App;
