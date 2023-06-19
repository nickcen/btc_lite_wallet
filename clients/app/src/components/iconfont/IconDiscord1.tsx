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

const IconDiscord1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#9B9BBA')}
      />
      <path
        d="M622.7968 234.057143c99.181714 1.813943 189.176686 69.632 189.176686 69.632C900.534857 485.5808 906.825143 645.471086 906.971429 683.680914v3.744915c0 2.165029-0.058514 3.627886-0.087772 4.359314v0.555886c-70.8608 90.287543-170.481371 97.426286-197.485714 97.601828h-3.364572c-2.340571-0.058514-3.627886-0.146286-3.627885-0.146286l-41.632915-52.077714c73.435429-15.096686 119.983543-79.872 119.983543-79.872S670.573714 732.306286 512 732.306286s-268.756114-74.459429-268.756114-74.459429 46.518857 64.160914 119.983543 79.872l-41.632915 52.077714s-1.258057 0.087771-3.657143 0.117029h-3.364571c-27.121371-0.175543-127.122286-7.285029-197.456457-97.572571l-0.058514-2.223543v-8.718629c0.380343-42.013257 7.9872-199.709257 94.354285-377.709714 0 0 89.994971-67.818057 189.176686-69.632l9.771886 9.684114s-105.296457 30.866286-165.888 84.143543l1.316571-0.760686 1.024-0.585143 2.925714-1.6384c23.639771-12.931657 125.015771-63.605029 262.261029-63.605028 150.645029 0 258.633143 61.059657 266.474057 66.238171l0.146286 0.117029-4.944457-4.271543c-58.923886-49.005714-154.8288-77.911771-160.416915-79.579429l-0.234057-0.058514z m-228.1472 234.057143C353.309257 468.114286 321.828571 501.087086 321.828571 541.257143c0 39.555657 32.797257 73.142857 72.821029 73.142857a73.786514 73.786514 0 0 0 73.435429-73.142857c0.672914-40.170057-32.768-73.142857-73.435429-73.142857z m263.314286 0C616.623543 468.114286 585.142857 501.087086 585.142857 541.257143c0 39.555657 32.797257 73.142857 72.821029 73.142857A73.786514 73.786514 0 0 0 731.428571 541.257143c0-40.170057-32.797257-73.142857-73.464685-73.142857z"
        fill={getIconColor(color, 1, '#23232F')}
      />
    </svg>
  );
};

IconDiscord1.defaultProps = {
  size: 24,
};

export default IconDiscord1;