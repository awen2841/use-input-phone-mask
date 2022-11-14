import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Input } from './index';

export default {
	title: 'Input',
	parameters: {
		component: Input,
	},
	decorators: [withKnobs],
};

export const Default = (): JSX.Element => <Input />;
