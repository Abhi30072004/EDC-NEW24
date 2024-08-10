import React from "react";

import app_img from "../../assets/COMING SOON[1].png"
import blobL from "../../assets/blobL.png"
import blobR from "../../assets/blobR.png"
import "../../components/Body/body.css"

function App_pg() {
    return(
       <div className="h-auto w-full app_bg flex items-center justify-center">
         <img className="h-lvh shadow-2xl mt-32 mb-11" src={app_img} alt="" />
         <img className="app_blob1" src={blobL} alt="" />
         <img className="app_blob2" src={blobR} alt="" />
       </div>
    )
}

export default App_pg;