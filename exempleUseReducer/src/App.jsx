import React, { useReducer } from "react";

// 1. Reducer
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function App() {
  // 2. useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Comptador amb useReducer</h1>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        ➕ Incrementar
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        ➖ Decrementar
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        🔄 Reset
      </button>
    </div>
  );
}

export default App;