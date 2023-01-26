import React from 'react';

function Footer ({setModifPage,ModifPage}) {
    return (
        <footer className={ModifPage}>
            <img className="logo"src="/P..svg"/>
            <img className="whitelogo" src="/WhiteP.svg"/>
            <ul className="social logo">
                <li><a href="" title=""><img src="/socialmedia/Mail.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Facebook.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Linkedin.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Instagram.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Twitter.png"/></a></li>
            </ul>
            <ul className="whitelogofooter">
                <li><a href="" title=""><img src="/socialmedia/WIcon.svg"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/WFacebook.svg"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/WLinkedin.svg"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/WInstagram.svg"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/WTwitter.svg"/></a></li>
            </ul>
        </footer>
            );
        }


export default Footer;