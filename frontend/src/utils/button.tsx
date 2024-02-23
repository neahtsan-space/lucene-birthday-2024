import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Modal, Divider, ConfigProvider } from 'antd';
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
        const [modalWidth, setModalWidth] = useState('90%'); // Default width
      
        const showModal = () => setIsModalOpen(true);
        const handleOk = () => {
          setIsModalOpen(false);
          window.location.href = url;
        };
        const handleCancel = () => setIsModalOpen(false);
      
        // Adjust modal width based on viewport width after component mounts
        useEffect(() => {
                const updateWidth = () => {
                        const width = window.innerWidth > 768 ? 800 : '90%';
                        setModalWidth(String(width)); 
                };

                updateWidth();
                window.addEventListener('resize', updateWidth); // Adjust width on resize

                return () => window.removeEventListener('resize', updateWidth); 
        }, []);
      
        const modalFooter = (
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <Button style={{ margin: '0 10px' }} key="back" onClick={handleCancel}>
              {modal_Cancel_TH}
            </Button>
            <Button style={{ margin: '0 10px', backgroundColor: 'red' }} key="submit" type="primary" onClick={handleOk}>
              {modal_OK_TH}
            </Button>
          </div>
        );
      
        return (
          <>
            <Button type="text" className="buttonEffect" style={{ color: 'white' }} onClick={showModal}>
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
                },
              }}
            >
              <Modal
                title={modal_title_TH}
                width={modalWidth}
                style={{ top: 20 }}
                centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={modalFooter}
              >
                <Divider style={{ color: 'white' }} />
                <WarningOutlined style={{ fontSize: 60, color: 'white', display: 'flex', justifyContent: 'center' }} />
                <p style={{ marginTop: '20px', fontSize: 18, display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>{modal_content_TH}</p>
                <p style={{ marginTop: '5px', fontSize: 18, display: 'flex', justifyContent: 'center', color: 'white' }}>({url})</p>
              </Modal>
            </ConfigProvider>
          </>
        );
      };
      
      export default TextButton;

const PrimaryButton: React.FC<{ text: string }> = ({ text }) => (
  <Button type="primary">{text}</Button>
);

interface DefaultButtonProps {
  buttonName: string;
  url: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ buttonName, url }) => {
  const router = useRouter();

  if (!router) return null;

  const handleClick = () => {
    router.push(url);
  };

  return <Button className='buttonEffect' size='large' onClick={handleClick}>{buttonName}</Button>;
};

const LinkButton: React.FC<{ text: string }> = ({ text }) => (
        <Button type="link">{text}</Button>
);

const TextNoLinkButton: React.FC<{buttonName: string}> = ({ buttonName }) => {

  const onClick = () => {
    window.location.href = './credit'
  }

  return (
    <>
      <Button type="text" className="buttonEffect" style={{ color: 'white' }} onClick={onClick}>
        {buttonName}
      </Button>

    </>
  );
};

export { TextButton, PrimaryButton, DefaultButton, LinkButton, TextNoLinkButton };