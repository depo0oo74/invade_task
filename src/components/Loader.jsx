import React from 'react'

function Loader({showLoader}) {
  return (
    <div className='loader-con' style={showLoader ? {display: "flex"} : {display: "none"}}>
        <div class="loader"></div>
    </div>
  )
}

export default Loader;