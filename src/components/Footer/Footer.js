import React, { useState } from "react"

export default function Footer() {

    const info = [
        { label: "About us" },
        { label: "Contact us" },
        { label: "Payment Options" },
        { label: "Track Order" },
        { label: "Support" },
        { label: "Vouchers" },
        { label: "Size Charts" },
    ]

    return(
        <footer>
            <hr id="white-line"/>
            <div id="footer-links">
                <div id="products">
                    <h2>Products</h2>
                    <a>Shoes</a>
                </div>
                <div id="category">
                    <h2>Category</h2>
                    <a>Men</a>
                    <a>New In</a>
                    <a>Weekly Pick</a>
                </div>
                <div id="company-info">
                    <h2>Company Info</h2>
                    {info.map((link) => (
                        <a>{link.label}</a>
                    ))}
                </div>
                <div id="follow-us">
                    <h2>Follow us</h2>
                    <img id="instagram" src="./assets/footer-icons/instagram.svg" alt=""/>
                    <img id="facebook" src="./assets/footer-icons/facebook.svg" alt=""/>
                    <img id="youtube" src="./assets/footer-icons/youtube.svg" alt=""/>
                </div>
            </div>
        </footer>
    )
}