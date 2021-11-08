import React, { useState } from "react";
import HomePage from "./pages/home";
export enum Routes {
  Home,
}

function App() {
  const [route, setRoute] = useState<Routes>(Routes.Home);
  switch (route) {
    case Routes.Home:
      return <HomePage />;
  }
}

export default App;
