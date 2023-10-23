import React, { useEffect } from "react";
import M from "materialize-css"; // Import Materialize CSS
import {Icon,Button} from "react-materialize"
function SideNav() {
  useEffect(() => {
    // Inisialisasi sidenav saat komponen dimuat
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {}); // options dapat ditambahkan di sini
  }, []);
  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="https://materializecss.com/images/office.jpg" alt="" />
            </div>
            <a href="#user">
              <img className="circle" src="https://materializecss.com/images/yuna.jpg" alt="" />
            </a>
            <a href="#name">
              <span className="white-text name">Febrianto Fitria D</span>
            </a>
            <a href="#email">
              <span className="white-text email">Fitrafilthmongers@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">perm_identity</i>Profil saya
          </a>
        </li>
        <li>
          <a href="#!">
          <i className="material-icons">local_phonee</i>Hubungi saya
      
            </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader" href="/">
            Product
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Kesehatan
          </a>
          </li>
          <li>
          <a className="waves-effect" href="#!">
           Komputer & Aksesoris
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
           Gaming
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
           Kamera
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
           Olahraga
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
           Fashion Pria 
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
           Fashion Wanita
          </a>
        </li>
      </ul>
      <Button data-target="slide-out" className="sidenav-trigger"><i><Icon>menu</Icon></i></Button>
    </div>
  );
}

export default SideNav;
