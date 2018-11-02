import React, { Component } from 'react';
// import '../App.css';
import facebookIcon from '../images/facebook-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import instagramIcon from '../images/instagram-icon.png';

class Footer extends Component{
  render() {
    return(
      <div  className="footer-comp" style={stylish}>
        <a href="" target="_blank" rel="noopener noreferrer"><img style={style.sizes} src={facebookIcon} alt="facebook icon" /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img style={style.sizes} src={instagramIcon} alt="instagram icon" /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><img style={style.sizes} src={twitterIcon} alt="twitter icon" /></a>
        <p style={copyRight}>&copy; Raw and Reckless.</p>
        <a style={footerLinks} href="https://termsfeed.com/privacy-policy/70907199871db6348be84738975e5c75">Privacy Policy |</a>
        <a style={footerLinks} href="https://termsfeed.com/terms-use/f3004ee240c09ad7cdeda64c0ba0e5ba">Terms and Use</a>
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
  color: 'white'
}

const copyRight = {
  fontSize: '15px',
  marginTop: 10,
  marginBottom: 5
}

const footerLinks = {
  fontSize: '15px',
  textDecoration: 'none',
  color: 'black',
  marginRight: 5,
  marginTop: 0,
  color: 'white',
  width: 100

}
export default Footer;