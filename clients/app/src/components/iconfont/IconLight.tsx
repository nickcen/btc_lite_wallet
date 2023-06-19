/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconLight: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 146.2784a36.6592 36.6592 0 0 1-36.5568-36.5568V36.5568C475.4432 16.4352 491.8784 0 512 0c20.1216 0 36.5568 16.4352 36.5568 36.5568v73.1648a36.6592 36.6592 0 0 1-36.5568 36.5568zM512 1024a36.6592 36.6592 0 0 1-36.5568-36.5568v-73.1648c0-20.1216 16.4352-36.5568 36.5568-36.5568 20.1216 0 36.5568 16.4352 36.5568 36.5568v73.1648A36.6592 36.6592 0 0 1 512 1024zM204.8 512a307.2 307.2 0 1 0 614.4 0 307.2 307.2 0 0 0-614.4 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M253.44 253.44a36.6592 36.6592 0 0 1-51.712 0L149.9136 201.728a36.6592 36.6592 0 0 1 0-51.7632 36.6592 36.6592 0 0 1 51.712 0l51.712 51.712a36.6592 36.6592 0 0 1 0 51.712zM874.0352 874.0352a36.6592 36.6592 0 0 1-51.712 0l-51.712-51.712a36.6592 36.6592 0 0 1 0-51.712 36.6592 36.6592 0 0 1 51.712 0l51.712 51.712a36.6592 36.6592 0 0 1 0 51.712zM770.56 253.44a36.6592 36.6592 0 0 1 0-51.712l51.712-51.7632a36.6592 36.6592 0 0 1 51.7632 0 36.6592 36.6592 0 0 1 0 51.712l-51.712 51.712a36.6592 36.6592 0 0 1-51.712 0zM149.9648 874.0352a36.6592 36.6592 0 0 1 0-51.712l51.712-51.712a36.6592 36.6592 0 0 1 51.712 0 36.6592 36.6592 0 0 1 0 51.712l-51.712 51.712a36.6592 36.6592 0 0 1-51.712 0zM109.7216 548.5568H36.5568A36.6592 36.6592 0 0 1 0 512c0-20.1216 16.4352-36.5568 36.5568-36.5568h73.1648c20.1216 0 36.5568 16.4352 36.5568 36.5568a36.6592 36.6592 0 0 1-36.5568 36.5568zM987.4432 548.5568h-73.1648a36.6592 36.6592 0 0 1-36.5568-36.5568c0-20.1216 16.4352-36.5568 36.5568-36.5568h73.1648c20.1216 0 36.5568 16.4352 36.5568 36.5568a36.6592 36.6592 0 0 1-36.5568 36.5568z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconLight.defaultProps = {
  size: 24,
};

export default IconLight;
