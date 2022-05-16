import React from 'react';
import Utama from './Components/utama';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from'./Components/navbar';
class App extends React.Component{
  render(){
    return(
      
      <div>
        {/* <Link to='/beranda'>BERANDA</Link> |
        <Link to='/tentangSaya'>TENTANG SAYA</Link> |
        <Link to='/tugas'>TUGAS</Link> |
        <Link to='/kontak'>KONTAK</Link> | 
        <Link to="/cart">CART</Link>|
        <Link to="/pegawai">PEGAWAI</Link>|
        <Link to="/gallery">GALERI</Link> */}
        <Navbar/>
        <p><Utama/></p>
      </div>
    )
  }
}
export default App;