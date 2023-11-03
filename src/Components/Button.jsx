
function Button({fun , icon}) {
  return (
   <button  onClick={fun} style={{
    position: "absolute",
     left : "1rem",
     top : "1rem",
    border : "none",
    color : "rgba(255, 255, 255,)",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:"0.5rem",
    borderRadius: "6px",
    cursor: "pointer",
   }} id="toggle">
    {icon}
   </button>
  )
}

export default Button