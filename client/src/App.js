import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import { Route } from "react-router-dom";
import BodyContainer from "./components/bodyContainer/BodyContainer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/home">
        <Navbar />
        <Header />
        <BodyContainer />
      </Route>
      <Route exact path="/form">
        <Form />
      </Route>
      <Route exact path="/detail">
        <Detail />
      </Route>
    </div>
  );
}

export default App;
