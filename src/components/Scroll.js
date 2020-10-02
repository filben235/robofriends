import React from 'react';

const Scroll = (props) => {
   return (
      //use double curly brackets to add style in JSX
      <div style={{overflowY: 'scroll', border: '5px solid black', height: '70vh'}}>
         {props.children}
      </div>
   );
}



export default Scroll;