import React from 'react';
import { IPropsInputComponent } from './types';

import css from './Input.module.scss';

const InputComponent: React.FC<IPropsInputComponent> = () => <div className={css.wrapper}>Input</div>;

export default InputComponent;
