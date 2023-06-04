import React from "react";
import "../../Styles/Header.css"
import { NavLink } from "react-router-dom"


const Header = () => {

    

    return (
        <>
            <div className="headerDivision">
                <div className="headerContainer">
                    <div className="headerLeftSide">
                    <NavLink to = "Body" >Home</NavLink>
                    <NavLink to = "Users" >Users</NavLink>
                    </div>

                    <div className="logoContainer">
                          <h1>Doctor</h1>
                    </div>

                    <div className="headerRightSide">
                        <div className="buttonnn">
                             <NavLink to = "Login" >Sign In</NavLink>
                        </div>
                        <div className="buttonnn">
                             <NavLink to = "SignUp" >Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header;