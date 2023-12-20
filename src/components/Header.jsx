import { NavLink } from "react-router-dom";


export default function Header(){
  return <>
    <h3 className="logo">All Volunteer and Events</h3>
    <nav>
      <h3><NavLink to='/'>Home</NavLink></h3>
      <h3><NavLink to='/volunteer'>Volunteers</NavLink></h3>
      <h3><NavLink to='/events'>Events</NavLink></h3>

    </nav>
  </>
}