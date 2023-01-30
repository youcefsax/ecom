import {Fragment} from "react";
import { Outlet, Route, Routes, Link } from "react-router-dom";
import './nav.styles.scss';
import { ReactComponent as Crwnlogo } from "../../../asset/crown.svg";
const Nav=()=>{
    return(
      <Fragment>
        <div className="navigation">
        <Link className="link" to='/'>
        <Crwnlogo className="logo" />
        </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shope'>SHOP</Link>
            <Link className="nav-link" to='/sign'>SIGN-IN</Link>

          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }
  export default Nav;