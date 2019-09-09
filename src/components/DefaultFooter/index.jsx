import React from 'react';
import './style.scss'
import {Label} from "../../constants/label";

const DefaultFooter = () => {
  //TO  footer 需要自动适配贴近底部。
  return (
    <footer className='Footer'>

      <p><span role="img" aria-label="c">©️</span>Emp 2019 {Label.vesion}</p>
    </footer>
  )
}

export default DefaultFooter
