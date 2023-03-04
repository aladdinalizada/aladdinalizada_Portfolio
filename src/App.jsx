import { Helmet } from "react-helmet";
import "./App.css";
import Favicon from "../src/favicon/favicon.ico";
import Header from "./pages/header";
import Introduction from "./components/intro";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Aladdin Alizada</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      </Helmet>
      {/* <Header /> */}
      <Introduction />
    </div>
  );
}

export default App;
