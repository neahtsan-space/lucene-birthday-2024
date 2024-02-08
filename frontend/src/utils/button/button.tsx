import React from 'react';
import { Button, Flex } from 'antd';


const text_button: React.FC<{ text: string }> = ({ text }) => (
        <Button type="text">{text}</Button>
);

const primary_button: React.FC<{ text: string }> = ({ text }) => (
        <Button type="primary">{text}</Button>
);

const default_button: React.FC<{ text: string }> = ({ text }) => (
        <Button>{text}</Button>
);

const link_button: React.FC<{ text: string }> = ({ text }) => (
        <Button type="link">{text}</Button>
);

export default text_button; primary_button; default_button; link_button;