import React from "react";

function BookBanner() {
    return (
        <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
                <div className="text-content">
                    <h2>Забронируйте автомобиль вместе с нами</h2>
                    <span>
                        <i className="fa-solid fa-phone"></i>
                        <h3>(888) 888-888</h3>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BookBanner;