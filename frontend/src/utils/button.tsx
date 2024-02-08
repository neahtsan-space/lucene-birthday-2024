import React, { useState } from 'react';
import { Button, Modal, Divider, ConfigProvider  } from 'antd';
import '@/css/button.css';
import { 
        modal_title_TH, 
        modal_title_EN, 
        modal_content_TH, 
        modal_content_EN,
        modal_OK_TH,
        modal_OK_EN,
        modal_Cancel_TH,
        modal_Cancel_EN } from '@/params/header_params';
import { WarningOutlined } from '@ant-design/icons';

interface TextButtonProps {
        buttonName: string;
        url: string;
}

const TextButton: React.FC<TextButtonProps> = ({ buttonName, url }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {setIsModalOpen(true);};
        const handleOk = () => {window.location.href = url};
        const handleCancel = () => {setIsModalOpen(false);};
        const modalFooter = (
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                  <Button style={{margin: '0 10px'}} key="back" onClick={handleCancel}>
                    {modal_Cancel_TH}
                  </Button>
                  <Button style={{margin: '0 10px', backgroundColor: 'red'}} key="submit" type="primary" onClick={handleOk}>
                    {modal_OK_TH}
                  </Button>
                </div>)

        return (
                <>
                <Button type="text" className="buttonEffect" style={{color: 'white'}} onClick={showModal}>
                        {buttonName}
                </Button>
                <ConfigProvider 
                theme={{
                        components: {
                                Modal: {
                                        contentBg: '#1F2937',
                                        footerBg: '#1F2937',
                                        headerBg: '#1F2937',
                                        titleColor: 'white',
                                        titleFontSize: 28,
                                },
                        }
                }}>
                <Modal title={modal_title_TH} width={window.innerWidth > 768 ? 800 : '90%'} 
                style={{ top: 20}} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={modalFooter}>
                        <Divider style={{color: 'white'}}/>
                        <WarningOutlined style={{ fontSize: 60, color: 'white', display: 'flex', justifyContent: 'center' }} />
                        <p style={{ marginTop: '20px', fontSize: 18, display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: 'white'  }}>{modal_content_TH}</p>
                        <p style={{ marginTop: '5px', fontSize: 18, display: 'flex', justifyContent: 'center', color: 'white'}}>({url})</p>
                </Modal>
                </ConfigProvider>
                </>
        );
}

const PrimaryButton: React.FC<{ text: string }> = ({ text }) => (
        <Button type="primary">{text}</Button>
);

const DefaultButton: React.FC<{ text: string }> = ({ text }) => (
        <Button>{text}</Button>
);

const LinkButton: React.FC<{ text: string }> = ({ text }) => (
        <Button type="link">{text}</Button>
);

export { TextButton, PrimaryButton, DefaultButton, LinkButton };