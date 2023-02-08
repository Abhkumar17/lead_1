import React from 'react'
import './footer.css'


function Footer(){
    return(
        <footer className="bg-light text-center text-lg-start">
        <div className="footericons">
           <div className="annuicns">
           <i className="fa-solid fa-bullhorn"></i>
           </div>

           <div className="annuicns">
           <i className="fa-regular fa-note-sticky"></i>
           </div>

           <div className="annuicns">
           <i className="fa-regular fa-clock"></i>
      
               </div>

           <div className="annuicns">
           <i className="fa-solid fa-clock-rotate-left"></i>
           </div>
        </div>
    </footer>

    )


}

export default Footer;