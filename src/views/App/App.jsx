import "./App.css";
import Login from "../Login/index";
import DashBoard from "../Dashboard/index"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" exact component={Login} />    
        <Route path="/dashboard" component={DashBoard} />    
      </BrowserRouter>
    </div>
  );
}

export default App;
