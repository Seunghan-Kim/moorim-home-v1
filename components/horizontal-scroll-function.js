import React from 'react';

import ScrollBox from './horizontal-scroll-container';
import Card from './horizontal-scroll-card';


const HorizontalScroll = ({data}) => {

  return(      
      <ScrollBox>
        {data.map((v, i) => {
          return(
          <Card 
            key={v.key + i}
            num={i}
            value={v.value}
          />
          )
          })
        }
      </ScrollBox>  
  ) 
}

export default HorizontalScroll;