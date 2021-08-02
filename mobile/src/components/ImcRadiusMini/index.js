import React, { useState, useEffect } from 'react';

import InfoRadiusMini from '../InfoRadiusMini';
import { theme } from '../../styles/theme';

const ImcRadiusMini = ({ imc, ...rest }) => {
  const { danger, success, warning } = theme.colors;
  const [color, setColor] = useState('');
  const handleColor = () => {
    if ((imc >= 16 && imc <= 18.4) || (imc >= 30 && imc <= 39.9)) {
      setColor(warning);
    } else if (imc >= 18.5 && imc <= 29.9) {
      setColor(success);
    } else {
      setColor(danger);
      console.log(color);
    }
  };

  useEffect(() => {
    handleColor();
  }, [imc]);
  return (
    <InfoRadiusMini number={imc} description="imc" color={color} {...rest} />
  );
};

export default ImcRadiusMini;
