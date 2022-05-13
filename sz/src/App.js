import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./component/Home/Home"
import Header from "./component/Header/Header"
import {ThemeProvider} from "@mui/material/styles"
import {theme} from "./component/Theme/Globaltheme"
import Login from './component/Register/Login';
import Signup from './component/Register/Sign';
import UserPage from './component/Register/UserPage';
import { useNavigate } from "react-router-dom";
import PostProduct from './component/Register/PostProduct';
import View from './component/Register/View';
import Addproduct from './component/Product/Addproduct';
import Allproduct from './component/AllProduct/Allproduct';
import DetailPage from './component/DetailPage/DetailPage';
import PrivateRoute from  "./component/Global/PrivatePage"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
     <Router>
          <Header/>
            <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/user" element={<UserPage/>}/>
          <Route path="/post" element={
            <PrivateRoute>
                <Addproduct/>
            </PrivateRoute>
          
          }/>
          <Route path="/view" element={
            <PrivateRoute>
               <View/>
            </PrivateRoute>
         
          }/>
          <Route path="/all" element={
            <PrivateRoute>
 <Allproduct/>
            </PrivateRoute>
         
          }/>
          <Route path="/details/:id" element={
          <PrivateRoute>
               <DetailPage/>
          </PrivateRoute>
         }/>
          </Routes>
          </Router>
          </ThemeProvider>
    </div>
  );
}

export default App;
