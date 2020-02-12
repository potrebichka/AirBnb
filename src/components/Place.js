import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

function Place(props){
  return (
    <div className="place" >
      <style jsx> {`
            .place {
                display: inline-block;
                margin-left: 15px;
            }
            .place img {
                width: 300px;
                border-radius:7px;
            }
            .title {
                font-size: 14px;
                color: gray;
            }

            .logo {
                background-color: purple;
                color: white;
                padding: 4px;
                border-radius: 5px;
                margin-right: 10px;
                font-size: 12px;
            }

            .rating {
                float: right;
                color: black;
            }

        `}
      </style>
      <img src={props.img}></img>
      <p className="title"><span className="logo">{props.logo} </span>{props.country} <span className="rating"><FontAwesomeIcon icon={faStar} />{props.rating}</span></p>
      <p>{props.description}</p>
      <p><strong>{props.cost}</strong> / night</p>
    </div>
  );
}

Place.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default Place;