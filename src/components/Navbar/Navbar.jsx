import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Header, HamburgerButton, Menu, MenuItem,MobileMenuContainer } from './styles';

const  Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    return (
        <>
        <Header>
            <div>LOGO</div>
            <HamburgerButton
                onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
                <FaBars />
            </HamburgerButton>
            <Menu>
                <MenuItem>Menu</MenuItem>
                <MenuItem>Entrar</MenuItem>
                <MenuItem>Contato</MenuItem>
            </Menu>
        </Header>
        <MobileMenuContainer visible={mobileMenuVisible}>
                <MenuItem>Menu</MenuItem>
                <MenuItem>Entrar</MenuItem>
                <MenuItem>Contato</MenuItem>
            </MobileMenuContainer></>
    );
}

export default Navbar;