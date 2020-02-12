
import React from 'react';
import PropTypes from 'prop-types';

function Title(props){
  return (
    <div className="title" >
      <style jsx> {`
            .title {
                font-family: BlinkMacSystemFont;
                font-size: 22px;
                font-weight: 500;
            }
        `}
      </style>
      <p>{props.name}</p>
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;