import React, { Component } from 'react';
import { Container, NavLink } from './styled'

class Navbar extends Component {
    render(){
        return(
            <Container><nav className="navBar">
                <NavLink exact to="/">about</NavLink>
                <NavLink to="/portfolio/">portfolio</NavLink>
                <NavLink to="/skills/">skills</NavLink>
                <NavLink to="/contact/">contact</NavLink>
        </nav></Container>
        );
    }
}
export default Navbar;