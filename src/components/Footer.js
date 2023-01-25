import React from 'react';

function Footer ({setModifPage,ModifPage}) {
    return (
        <footer className={ModifPage}>
            <img className="logo"src="/P..svg"/>
            <img className="whitelogo" src="/WhiteP.svg"/>
            <ul className="social">
                <li><a href="" title=""><img src="/socialmedia/Mail.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Facebook.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Linkedin.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Instagram.png"/></a></li>
                <li><a href="" title=""><img src="/socialmedia/Twitter.png"/></a></li>
            </ul>
        </footer>
            );
        }


export default Footer;