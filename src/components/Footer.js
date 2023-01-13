import React from 'react'
import "../componentStyles/Footer.css";

function Footer() {
    let copyrightDate = new Date().getFullYear();

    return (
        <div className="footer">
            <p>
                All rights Reserved &copy; {copyrightDate}
            </p>
        </div>

    )
}

export default Footer;