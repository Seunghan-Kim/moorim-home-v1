import React from 'react';

import ScrollBox from './ScrollBox';
import ColorCard from './ColorCard';


const HorizontalScrollTop30 = ({data}) => {

  return(      
      <ScrollBox>
        {data.map((v, i) => {
          return(
          <ColorCard 
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

export default HorizontalScrollTop30;