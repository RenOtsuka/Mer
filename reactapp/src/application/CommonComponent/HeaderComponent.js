import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations
import { connect } from "react-redux";


let Header = (props) => {

    let [showLinks, setShowLinks] = useState(false);

    let userName = props.User ? props.User.userName : "Daniel";
    // console.log(userName);
    let goAboutHook = useNavigate(); //hook - an inbuilt feature to navigate at other page

    useEffect(() => {
        if (userName != "") { //logged in
            setShowLinks(true);
        }
        else {
            setShowLinks(false);
        }
    }, [userName]);


    let goToAboutClick = (evt) => {

        // navigates user to certain link on the fly!!
        goAboutHook("/about/2023")
        evt.preventDefault()
    }



    return (
        <>
            Hi <b>{userName + ", "}</b> Welcome to SynergisticIT Shopping Cart.
            {userName == "" ? <b> Please Login to see other features</b> : ""}

            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
                {/* <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> */}
                <NavLink to="/hook" className="button" activeclassname="success" >User</NavLink>
                {/* <NavLink to="/hobbies" className="button" activeclassname="success" >Hobbies</NavLink> */}
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>

                {showLinks ?
                    <>
                        <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink>
                        <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                        <NavLink to="/coupon" className="button" activeclassname="success" >Coupon Page </NavLink>
                    </> : ""
                }

            </div>

            {/* <a href="/user" className="button" >User Anchor</a>
            <button onClick={goToAboutClick} >Go To About Page</button> */}
        </>
    )
}

let mapStateToProps = (store) => {
    return {
        User: store.userReducer.User
    }
}
export default connect(mapStateToProps, null)(Header) //just subscriber
//export default Header;