import { Helmet } from "react-helmet";
import "./App.css";
import Favicon from "../src/favicon/favicon.ico";
import Routes from "./routing";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Aladdin Alizada</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      </Helmet>
    </div>
  );
}

export default App;
