import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangSaya';
import Tugas from "./tugas";
import Kontak from "./kontak";
import Gallery from '../pages/Gallery';
import Cart from '../pages/Cart';
import Pegawai from './pegawai';
const Utama = () => (
    
   <div>
      
   <Routes>
    
        <Route exact path="/beranda" element={<Beranda/>}/>
        <Route path="/tentangsaya" element={<TentangSaya/>}/>
        <Route path = "/tugas" element = {<Tugas/>}/>
        <Route path = "/kontak" element = {<Kontak/>} />
        <Route path= "/gallery" element={<Gallery/>} />
        <Route path= "/cart" element={<Cart/>}/>
        <Route path= "/pegawai" element={<Pegawai/>}/>
    </Routes>
    </div>
)

export default Utama;