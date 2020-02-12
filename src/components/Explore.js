
import React from 'react';
import PropTypes from 'prop-types';

function Explore(props){
  return (
    <div className="explore" >
      <style jsx> {`
            .explore {
                font-family: BlinkMacSystemFont;
                font-size: 15px;
                font-weight: 500;
                box-shadow: 0px 3px 25px lightgray;
                display: inline-block;
                width: 31%;
                margin-right: 20px;
                border-radius: 10px;
            }
            .explore img {
                width: 140px;
                float: left;
            }

            .explore p {
                display: inline-block;
                margin-left: 20px;
                line-height: 60px;
            }
        `}
      </style>
      <img src={props.img}></img>
      <p>{props.name}</p>
    </div>
  );
}

Explore.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Explore;