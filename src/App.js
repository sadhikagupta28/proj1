import { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);

    return (
        <div >
            

            <pre>Counter: {counter}</pre>
            <button onClick={() => setCounter(counter => counter + 1)}>
                Increment (+)
            </button>
            <button onClick={() => setCounter(counter => counter - 1)}>
                Decrement (-)
            </button>

            
        </div>
    );
}
