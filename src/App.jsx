import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CoursesScreen from "./screens/CoursesScreen";
import CourseDescScreen from "./screens/CourseDescScreen";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import PaymentScreen from "./screens/PaymentScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import { Container } from "react-bootstrap";
import {  Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App()
{
  return (
    <div>
    <Header />
    <main className='py-3'>
      <Container>
    <Routes>
          <Route path='/' element={<HomeScreen/>} exact/>
          <Route path='/courses' element={<CoursesScreen/>} />
          <Route path='/course/:id' element={<CourseDescScreen/> } />
          <Route path='/cart/:id?' element={<CartScreen /> } />
          <Route path='/contactus' element={<ContactScreen/> } />
          <Route path='/aboutus' element={<AboutScreen/> } />
          <Route path='/login' element={<LoginScreen/> } />
          <Route path='/register' element={<RegisterScreen/> } />
          <Route path='/payment' element={<PaymentScreen/> } />
          <Route path='/placeorder' element={<PlaceOrderScreen/> } />
          <Route path='/orderbyid/:id'  element={<OrderScreen/> } />
          
    </Routes></Container>
      </main>
      <br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}