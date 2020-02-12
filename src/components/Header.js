import React from 'react';
// import { Link } from 'react-router-dom';


function Header(){
  return (
    <div id="header">
        <style jsx>{`
            #header {
                background: url(https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg) no-repeat center center;
                background-size: cover;
                height: 100vh;
                overflow: hidden;
            }

            .nav {
                margin-top: 30px;
                margin-right: 20px;
            }

            div span {
                color: white;
                float: right;
                margin-left: 25px;
                padding-bottom: 30px;
                cursor: pointer;
                font-family: BlinkMacSystemFont;
            }

            div span:hover
            {
                border-bottom: 2px solid white;     
            }

            .booking-box {
                background-color: white;
                width: 400px;
                position: relative;
                top: 90px;
                left: 70px;
                padding: 35px;
                margin: 0px;
                padding-top: 10px;
            }
            .booking-box h2 {
                font-size: 30px;
                font-family: BlinkMacSystemFont;
                text-align: left;
                margin-bottom: 12px;
            }
            .booking-box div {
                margin-right: 20px;
            }
            .booking-box label
            {
                font-family: BlinkMacSystemFont;
                font-size: 12px;
                font-weight: 600;
            }

            .booking-box input {
                margin-top: 7px;
                width: 100%;
                font-size: 16px;
                padding: 10px;
                margin-bottom: 12px;
            }

            #checkin_input, #checkout_input {
                margin-left: 0px;
                margin-right: 0px;
                width: 43%;
            }
            #checkout_label {
                position: relative;
                left: 130px;
            }
            .red_button {
                background-color: #f06060;
                color: white;
                padding: 12px 26px;
                font-size: 18px;
                position: relative;
                left: 295px;
                border-radius: 5px;
            }
            #header a {
                position: relative;
                top: 59vh;
                left: 75%;
                color: white;
                cursor: pointer
            }

        `}</style>
        <div className="nav">
            <span>Log in</span>
            <span>Sign up</span>
            <span>Help</span>
            <span>Host an experience</span>
            <span>Host a home</span>
            <span>$ USD</span>
            <span>English(US)</span>
        </div>
        <div className="booking-box">
            <h2>Book unique places to stay and things to do.</h2>
            <div>
                <label for="where_input">WHERE</label><br/>
                <input id="where_input" placeholder="Anywhere"></input>
            </div>
            <div>
                <label for="checkin_input">CHECK-IN</label>
                <label for="checkout_input" id="checkout_label">CHECKOUT</label><br/>
                <input id="checkin_input" placeholder="mm/dd/yyy"></input>
                <input id="checkout_input" placeholder="mm/dd/yyyy"></input>
            </div>
            <div>
                <label for="guests_input">GUESTS</label><br/>
                <input id="guests_input" type="number"placeholder="Guests"></input>
            </div>
            <button className="red_button">Search</button>
        </div>
        <a>Over 300 unique places to stay in Oregon</a>
    </div>

  );
}

export default Header;