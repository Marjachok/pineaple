import './App.css';
import bg from "./img/bg.png"
import logo from "./img/logo.png"
import pineapple from "./img/pineapple..png"
import EmailForm from './emailform';
import fb from "./img/ic_facebook.png"
import fb2 from "./img/ic_facebook2.png"

import ig from "./img/ic instagram.png"
import ig2 from "./img/ic instagram2.png"

import tw from "./img/ic_twitter.png"
import tw2 from "./img/ic_twitter2.png"

import yt from "./img/ic youtube.png"
import yt2 from "./img/ic youtube2.png"

import bg1 from "./img/image_summer (1).png"
import bg2 from "./img/image_summer (2).png"

function App() {
  return (
    <div className="App">

      <div className='header'>
        <img src={pineapple} className='pineapple'/>
        <a href='#' className='ab'><p className='about'>About</p></a>
        <a href='#' className='hw'><p className='how'>How it works</p></a>
        <a href='#' className='ct'><p className='contact'>Contact</p></a>
      </div>

      <div className='info'>
        <EmailForm/>

      <div className='line'></div>
      <div className='media'>
        <a href='#'>
          <div className='facebook'>
            <img src={fb} className='fb'/>
            <img src={fb2} className='fb2'/>
          </div>
        </a>
        <a href='#' className='iga'>
          <div className='instagram'>
            <img src={ig} className='ig'/>
            <img src={ig2} className='ig2'/>
          </div>
        </a>
        <a href='#'>
          <div className='twitter'>
            <img src={tw} className='tw'/>
            <img src={tw2} className='tw2'/>
          </div>
        </a> 
        <a href='#'>
          <div className='youtube'>
            <img src={yt} className='yt'/>
            <img src={yt2} className='yt2'/>
          </div>
        </a>
      </div>
      </div>
      <img src={bg} className='bg'/>
      <img src={bg1} className='bg1'/>
      <img src={bg2} className='bg2'/>
      <img src={logo} className='logo'/>

    </div>
  );
}

export default App;
