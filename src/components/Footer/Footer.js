import React, { useState } from "react"

export default function Main3() {
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
                    <a>About us</a>
                    <a>Contact us</a>
                    <a>Payment Options</a>
                    <a>Track Order</a>
                    <a>Support</a>
                    <a>Vouchers</a>
                    <a>Size Charts</a>
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