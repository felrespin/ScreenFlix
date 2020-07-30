import React from "react";
import Logo from '../../assets/img/logo.png';
import "./Menu.css";
import Button from '../Button/index';
//import ButtonLink from './components/ButtonLink/index';



function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="ScreenFlix logo" />
            </a>

            <Button href="/" as="a" className="ButtonLink">
                Novo vídeo
            </Button>
        
        </nav>
    );
}

export default Menu;

