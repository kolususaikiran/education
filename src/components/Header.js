import React from 'react';


const headerStyle = {
    backgroundColor: '#1a1110',
    color: 'black',
    padding: '20px',
    display: 'flex',
    alignItems: 'center', // Vertically align items
  };
  
  // CSS styles for the logo image
  
  
 
  
  
function Header() {
    const smallTextStyle ={
        fontSize: '14px',
        color: 'green',
      };
    
  return (
    <header style={headerStyle}>
    
    
    


     <h1 style={{ color: 'green' }}>PRACTICE </h1>  
      
      <h1 style={{ color: 'blue'}}> EXAM</h1>

      <p style={smallTextStyle}>the perfect partner to Achieve Your Goal</p>

    </header>
    
  );
}

export default Header;