import React, { Component } from 'react';
// import '../App.css';
import facebookIcon from '../images/facebook-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import '../styles/footer.css'

class Footer extends Component{
  render() {
    return(
      <div className="footer-comp" style={stylish}>
        {/* <a href="" target="_blank" rel="noopener noreferrer"><img style={style.sizes} src={facebookIcon} alt="facebook icon" /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img style={style.sizes} src={instagramIcon} alt="instagram icon" /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img style={style.sizes} src={twitterIcon} alt="twitter icon" /></a> */}
        
        <hr style={horizontalLines}/>
        
        <div style={footerLinksContainer}>
          <a style={footerLinks} href="https://termsfeed.com/privacy-policy/70907199871db6348be84738975e5c75">PRIVACY</a>
          <a style={footerLinks} href="https://termsfeed.com/terms-use/f3004ee240c09ad7cdeda64c0ba0e5ba">TERMS</a>
          <a style={footerLinks} >RETURNS</a>
          <a style={footerLinks} >SHIPPING</a>
          <a style={footerLinks} >CONTACT US</a>
        </div>
        <hr style={horizontalLines} />

        <p style={copyRight}>&copy; Copyright <b> 2018 RAW AND RECKLESS</b></p>
      </div>
    )
  }
}

const style = {
  sizes: {
    width: 30,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
}

const stylish = {
  marginTop: 20,
  textAlign: 'center',
  background: 'black',
  color: 'white',
  paddingBottom: 50,
  position: 'absolute',
  bottom: 0,
  width: '100%'
}

const copyRight = {
  fontSize: '15px',
  marginTop: 15,
  marginBottom: 5
}

const footerLinksContainer = {
  fontSize: '15px',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  marginLeft: '10%',
  marginRight: '10%',
}

const footerLinks = {
  marginTop: 10,
  marginBottom: 10
}

const horizontalLines = {
  color: 'white',
}
export default Footer;