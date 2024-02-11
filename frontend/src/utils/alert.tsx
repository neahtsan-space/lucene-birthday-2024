import React from 'react';
import { Alert, Space } from 'antd';

const SuccessAlert: React.FC<{ SuccessTitle: string, SuccessMessage: string, AlertStyle: React.CSSProperties }> = ({ SuccessTitle, SuccessMessage, AlertStyle }) => (
  <Space direction="vertical" style={{ backgroundColor: 'white', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Alert
      message={SuccessTitle}
      description={SuccessMessage}
      style={AlertStyle}
      type="success"
      showIcon
    />
  </Space>
);

const FailureAlert: React.FC<{ FailureTitle: string, FailureMessage: string, AlertStyle: React.CSSProperties }> = ({ FailureTitle, FailureMessage, AlertStyle }) => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Error" type="error" showIcon />
    <Alert
      message={FailureTitle}
      description={FailureMessage}
      style={AlertStyle}
      type="error"
      showIcon
    />
  </Space>
);

export { SuccessAlert, FailureAlert };