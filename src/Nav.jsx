/* eslint-disable react/prop-types */
import "./nav.css"

function Nav({setContent}) {
  
  return (
    <>
    <div className="navigation">
      <ul>
        <li onClick={()=>setContent("Home")}>Home</li>
        <li onClick={()=>setContent("About")}>About</li>
        <li onClick={()=>setContent("Contact")}>Contact</li>
        <li onClick={()=>setContent("Gallery")}>Gallery</li>
        <li onClick={()=>setContent("Services")}>Services</li>
        </ul>
    </div>
    
    </>
  )
}

export default Nav