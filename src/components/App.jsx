import React from 'react';
import Header from './Header';
import DaysList from './DaysList';
import SeasonProduce from './SeasonProduce';

var AppStyling = {
  backgroundImage: 'url(https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/full_breakpoints_theme_medicaldaily_desktop_1x/public/2015/03/09/farmers-market-breakdown.jpg)',
  backgroundAttachment: 'fixed',
  backgroundSize: 'contain',
  overflow: 'auto'
};
var BoxStyling = {
  margin: '50px',
  backgroundColor: 'rgba(26,0,0,0.6)',
  overflow: 'auto',
  color: 'white'
};

function App(){
  return (
    <div style={AppStyling}>
      <div style={BoxStyling}>
        <Header/>
        <DaysList/>
        <SeasonProduce />
      </div>
    </div>
  );
}

export default App;