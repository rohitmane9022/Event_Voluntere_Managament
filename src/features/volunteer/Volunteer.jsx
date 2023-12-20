import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";

import { addVolunteer } from './volunteerSlice'
import VolunteersForm from "../../components/VolunteersForm";

export default function Volunteer() {
  const { volunteers } = useSelector(state => state?.volunteers);
 
  return (
  <div>
    <h3>Volunteers View</h3>
    <div className="contain">
    <VolunteersForm submitFunction={addVolunteer} type="add" />
    <ul>
      {
        volunteers?.map(item => 
        <li style={item.availability ? {border:"solid", borderColor: "black" }:{}} key={item._id}>
          <NavLink to={`/volunteer/${item._id}`} style={{listStyleType:"none",textDecoration:"none",color:"black"}}>
            <span>{item.name}</span>
          </NavLink>
        </li>)
      }
    </ul>
    </div>
  </div>
  )
}