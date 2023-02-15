import { useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [cards, setCards] = useState([]);

  return (
    <div className="app">
      <Outlet context={{ cards, setCards }} />
    </div>
  );
}

export { Root };
