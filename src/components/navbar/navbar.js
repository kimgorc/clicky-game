import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="nav justify-content-center">
                <p className="nav-item">
                    <p>{this.props.isCorrect}</p>
                </p>   
            </div>
        );
    }
};

export default Navbar;