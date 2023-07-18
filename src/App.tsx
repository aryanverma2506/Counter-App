import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./redux/store";
import { signIn, signOut } from "./redux/authSlice";
import { addCounter } from "./redux/counterSlice";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.counters);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSignIn = () => {
    if (email && password) {
      dispatch(signIn(email));
      setEmail(() => "");
      setPassword(() => "");
    }
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleAddCounter = () => {
    const newCounter = {
      id: Date.now().toString(),
      label: "New Counter",
      value: 0,
    };
    dispatch(addCounter(newCounter));
  };

  return (
    <div>
      {!user ? (
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        <>
          <h1>Counter App</h1>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              label={counter.label}
              value={counter.value}
            />
          ))}
          <Button onClick={handleAddCounter}>Add Counter</Button>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      )}
    </div>
  );
};

export default App;
