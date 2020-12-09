import React, { FC } from 'react';
// import style from './index.less';
import './index.less';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'default',
  disabled,
}) => {
  return (
    <button className="biz_dev_button" onClick={onClick} disabled={disabled}>
      {children}xx
    </button>
  );
};

export default Button;
