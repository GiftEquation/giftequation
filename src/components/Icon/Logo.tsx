import React from 'react';

const SvgLogo = props => (
  <svg width={28} height={29} {...props}>
    <path
      d="M20.984 19.333h-5.58v5.526h-2.797v.002h-.031v-5.52H7v-2.777h5.575v-5.523h2.814v5.518h5.594v2.774zM7.1 3.579a1.4 1.4 0 0 1 1.37-.837c.377.018.695.174.956.445.428.443.732.968.94 1.536.215.59.374 1.198.557 1.8.01.033.012.07.021.135-.316-.08-.613-.147-.906-.23-.718-.202-1.417-.453-2.045-.86a4.242 4.242 0 0 1-.56-.433A1.364 1.364 0 0 1 7.1 3.58zm10.14 2.213c.231-.797.518-1.57 1.016-2.25.105-.141.22-.278.346-.401a1.413 1.413 0 0 1 1.981.006 1.375 1.375 0 0 1-.003 1.958c-.303.303-.66.532-1.042.724-.783.394-1.618.64-2.518.827.079-.31.14-.59.22-.864zm10.73 5.325a3.165 3.165 0 0 0-.146-.957c-.39-1.157-1.425-1.874-2.673-1.878-1.366-.005-2.732-.001-4.1-.001h-.17c.042-.064.097-.093.147-.128.426-.289.884-.543 1.27-.877 1.204-1.041 1.7-2.37 1.397-3.923-.578-2.969-3.763-4.057-6.13-2.839-.848.437-1.43 1.14-1.911 1.93-.85 1.4-1.27 2.942-1.52 4.537-.057.362-.094.727-.14 1.09h-.018c-.003-.02-.008-.039-.01-.058a15.232 15.232 0 0 0-.492-2.798c-.319-1.17-.767-2.285-1.485-3.278C10.902.434 9.427-.22 7.587.106 4.424.666 3.235 4.28 5.065 6.643c.494.639 1.139 1.1 1.843 1.488.067.036.132.077.198.116l-.013.034h-.172c-1.34 0-2.678-.002-4.018.002-.215 0-.434.01-.644.05C.942 8.594.013 9.699.004 11.029c-.008 1.338-.002 2.678-.001 4.016 0 .04.007.081.012.137H1.39c.003.067.008.12.008.171v1.072c0 3.244-.002 6.487.001 9.73.001 1.078.464 1.911 1.4 2.473.47.282.99.373 1.535.373 4.704-.003 9.408-.002 14.112-.002 1.745 0 3.489-.004 5.234.001.882.004 1.625-.294 2.21-.95.484-.546.689-1.19.688-1.913-.005-3.574-.002-7.148-.002-10.722v-.236h1.392c.004-.069.009-.12.009-.172 0-1.297.01-2.593-.006-3.89z"
      fill={props.color}
      fillRule="evenodd"
    />
  </svg>
);

export default SvgLogo;