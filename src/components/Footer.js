import React from 'react'

function Footer() {
    let copyrightDate = new Date().getFullYear();

    return (
        <div className="">
            <p>
                All rights Reserved &copy; {copyrightDate}
            </p>
        </div>

    )
}

export default Footer;