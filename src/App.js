import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp';
import Login from '../src/components/login/Login'
import AdminScreen from './components/adminScreen/AdminScreen';
import AddItem from './components/addItem/AddItem';
import AdminSetting from './components/adminSetting/AdminSetting';
import User from './components/user/User';
import UserProfile from './components/userProfile/UserProfile';
import ShoppingCart from './components/shoppingCart/ShoppingCart';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='adminScreen' element={<AdminScreen />} />
          <Route path='addItem' element={<AddItem />} />
          <Route path='adminSetting' element={<AdminSetting />} />
          <Route path='user' element={<User />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />
          <Route path='userProfile' element={<UserProfile />} />
        </Routes>
    </>
  );
}

export default App;
