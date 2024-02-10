import React from 'react';
import { Button, Result } from 'antd';

const result_success: React.FC = () => (
  <Result
    status="success"
    title="Successfully create wish card!"
    subTitle="System is going to refresh your website in 3 seconds."
  />
);

export default result_success;