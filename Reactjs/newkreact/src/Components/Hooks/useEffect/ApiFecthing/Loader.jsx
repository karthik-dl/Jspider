import React from 'react';
import LoaderStyle from "./Loader.module.css"

const Loader = () => {
  return (
    <div>
        <span className={LoaderStyle.loader}></span>
    </div>
  )
}

export default Loader