import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Body from "./components/body"

import './App.css';

function App() {
  return (
    // BEM naming convention App => app in className
    <div className="app">
      <Header />
      <div className="app--main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
