import React from 'react';
import PropTypes from 'prop-types';

function Multiday(props){
  return (
    <div className="multiday" >
      <style jsx> {`
            .multiday {
                display: inline-block;
                margin-left: 15px;
            }
            .multiday img {
                width: 220px;
                border-radius:7px;
            }
            .multiday p {
                font-size: 15px;
                font-weight: 200;
            }

            .multiday .country {
                font-size: 12px;
                margin-bottom: -5px;
                font-weight: 400
            }
        `}
      </style>
      <img src={props.img}></img>
      <p className="country">{props.country}</p>
      <p>{props.name}</p>
      <p>{props.cost} . {props.length}</p>
      <p>{props.rating}</p>
    </div>
  );
}

Multiday.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  rating: PropTypes.string
};

export default Multiday;