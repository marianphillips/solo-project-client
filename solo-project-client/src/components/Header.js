// import { useState, useEffect } from 'react'

function Header() {
    // const [animation, setAnimation] = useState("large-header opacity")

    // useEffect(() => {
    //    setTimeout(() => {
    //        setAnimation("large-header")
    //    }, 1000) 
    //    setTimeout(() => {
    //     setAnimation("header")
    // }, 1000) 
    // }, [])
    //REMMEBR className={animation}

    return (
      <header>
        <img src={require("../images/pw.PNG")} alt='pacific wines logo' />
      </header>
    );
  }
  
  export default Header;
  