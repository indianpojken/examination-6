import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [cards, setCards] = useState(
    JSON.parse(window.localStorage.getItem("cards")) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="app">
      <Outlet context={{ cards, setCards }} />
    </div>
  );
}

export { Root };
