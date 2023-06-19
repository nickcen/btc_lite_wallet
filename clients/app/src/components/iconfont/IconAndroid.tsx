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

const IconAndroid: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M351.648738 86.150614l-13.050564-16.786608-12.999386-16.479536-28.967135-37.053368c-3.582508-4.554903-2.149505-10.696345 3.224257-13.715887a12.897028 12.897028 0 0 1 16.121285 2.763649l31.11664 39.714659 13.101744 16.684251 13.255279 16.888966A443.514476 443.514476 0 0 1 511.786841 56.569335c49.489788 0 96.369462 7.77916 138.387162 21.648583l13.306457-16.940144 13.050565-16.684251 31.11664-39.714659c3.531329-4.606082 10.747524-5.83437 16.121285-2.763649 5.322583 3.070721 6.755586 9.212163 3.173079 13.715887l-28.967136 37.053368-12.897028 16.479536-13.152922 16.786608c98.77486 39.151693 165.511864 113.309607 165.511865 198.266222H186.136874c0-84.956616 66.788183-159.165707 165.511864-198.266222z m359.018469 736.461264h53.123474c40.687054 0 73.697305-28.148276 73.697305-62.796245V323.977959H186.085695v435.888852c0 34.59679 33.010251 62.745067 73.646127 62.745067h53.123474a51.690471 51.690471 0 0 0-2.763649 16.479536v125.438955c0 32.856715 31.270176 59.469631 69.807725 59.469631 38.588728 0 69.858904-26.612916 69.858904-59.469631v-125.438955c0-5.732013-1.074752-11.25931-2.866007-16.479536h129.686786c-1.791254 5.220226-2.814828 10.747524-2.814828 16.479536v125.438955c0 32.856715 31.270176 59.469631 69.807725 59.469631 38.537549 0 69.807725-26.612916 69.807725-59.469631v-125.438955c0-5.732013-1.023574-11.25931-2.763649-16.479536z m173.342203-184.908585c0 32.754358 31.218997 59.418452 69.807725 59.418452 38.537549 0 69.756546-26.612916 69.756547-59.418452V383.44759c0-32.856715-31.218997-59.469631-69.756547-59.469631-38.588728 0-69.807725 26.612916-69.807725 59.469631v254.255703zM686.306153 175.406239c0 16.377179-15.609499 29.734815-34.852683 29.734816-19.294364 0-34.903863-13.306458-34.903863-29.683637 0-16.428358 15.609499-29.683637 34.903863-29.683637 19.294364 0 34.801505 13.255279 34.801505 29.683637zM372.222569 205.141055c19.294364 0 34.852684-13.306458 34.852684-29.683637 0-16.428358-15.55832-29.683637-34.801505-29.683637-19.294364 0-34.955041 13.255279-34.955041 29.683637 0 16.377179 15.660677 29.683637 34.903862 29.683637zM0 637.703293c0 32.754358 31.218997 59.418452 69.756546 59.418452 38.588728 0 69.858904-26.612916 69.858904-59.418452V383.44759c0-32.856715-31.270176-59.469631-69.858904-59.469631C31.218997 323.977959 0 350.590875 0 383.44759v254.255703z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconAndroid.defaultProps = {
  size: 24,
};

export default IconAndroid;
