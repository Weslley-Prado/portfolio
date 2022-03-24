import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
    <header className="header d-none d-sm-flex">
        <nav className="menu">
              {/*Refatorar cdigo*/}
             <Link to="/">
              <i className="fa fa-home"></i> Inicio
              </Link>
              <Link to="/users">
              <i className="fa fa-users"></i> Clientes
              </Link>
              <Link to="/products">
              <i className="fa fa-home"></i> Produtos
              </Link>

            </nav>    
    </header>