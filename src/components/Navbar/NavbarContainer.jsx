import { connect } from "react-redux"
import Nav from "./Navbar"

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;