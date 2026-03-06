import React from 'react';

function Footer() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <footer>
            <p>{currentDate}</p>
            <p>Members of the Group: Treyson, Jaiden</p>
        </footer>
    );
}

export default Footer;