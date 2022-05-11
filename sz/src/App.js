import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./component/Home/Home"
import Header from "./component/Header/Header"
import {ThemeProvider} from "@mui/material/styles"
import {theme} from "./component/Theme/Globaltheme"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
     <Router>
          <Header/>
            <Routes>
          <Route path="" element={<Home/>}/>
          </Routes>
          </Router>
          </ThemeProvider>
    </div>
  );
}

export default App;
