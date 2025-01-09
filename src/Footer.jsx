/* eslint-disable react/prop-types */
import "./footer.css"
function Footer({setContent}) {
  return (
    <div className="footer">
      
      
      <ul>
        <li onClick={ ()=>setContent("Terms")}>Terms</li>
        <li onClick={ ()=>setContent("Map")}>Map</li>
      </ul>
    </div>
  )
}

export default Footer