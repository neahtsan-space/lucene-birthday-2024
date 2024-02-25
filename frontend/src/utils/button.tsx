import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Modal, Divider, ConfigProvider } from 'antd';
import '@/css/button.css';
import * as HeaderParams from '@/params/header_params';
import { WarningOutlined } from '@ant-design/icons';

interface TextButtonProps {
        buttonName: string;
        url: string;
}

const TextButton: React.FC<TextButtonProps> = ({ buttonName, url }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalWidth, setModalWidth] = useState('90%');
      
        const showModal = () => setIsModalOpen(true);
        const handleOk = () => {
          setIsModalOpen(false);
          window.location.href = url;
        };
        const handleCancel = () => setIsModalOpen(false);
      
        useEffect(() => {
                const updateWidth = () => {
                        const width = window.innerWidth > 768 ? 800 : '90%';
                        setModalWidth(String(width)); 
                };

                updateWidth();
                window.addEventListener('resize', updateWidth);

                return () => window.removeEventListener('resize', updateWidth); 
        }, []);
      
        const modalFooter = (
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <Button style={{ margin: '0 10px' }} key="back" onClick={handleCancel}>
              {HeaderParams.MODAL_CANCEL_TH}
            </Button>
            <Button style={{ margin: '0 10px', backgroundColor: HeaderParams.BUTTON_CONFIRM_COLOR }} key="submit" type="primary" onClick={handleOk}>
              {HeaderParams.MODAL_OK_TH}
            </Button>
          </div>
        );
      
        return (
          <>
            <Button type="text" className="buttonEffect" style={{ color: HeaderParams.BUTTON_CANCEL_COLOR }} onClick={showModal}>
              {buttonName}
            </Button>
            <ConfigProvider
              theme={{
                components: {
                  Modal: {
                    contentBg: HeaderParams.MODAL_CONTENT_BG_COLOR,
                    footerBg: HeaderParams.MODAL_FOOTER_BG_COLOR,
                    headerBg: HeaderParams.MODAL_HEADER_BG_COLOR,
                    titleColor: HeaderParams.MODAL_TITLE_COLOR,
                    titleFontSize: HeaderParams.MODAL_TITLE_FONT_SIZE,
                  },
                },
              }}
            >
              <Modal
                title={HeaderParams.MODAL_TITLE_TH}
                width={modalWidth}
                style={{ top: 20 }}
                centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={modalFooter}
              >
                <Divider style={{ color: 'white' }} />
                <WarningOutlined style={{ fontSize: HeaderParams.WARNING_ICON_FONT_SIZE, color: HeaderParams.WARNING_ICON_COLOR, display: 'flex', justifyContent: 'center' }} />
                <p style={{ marginTop: '20px', fontSize: HeaderParams.WARNING_TEXT_FONT_SIZE, display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: HeaderParams.WARNING_TEXT_COLOR }}>{HeaderParams.MODAL_CONTENT_TH}</p>
                <p style={{ marginTop: '5px', fontSize: HeaderParams.WARNING_TEXT_FONT_SIZE, display: 'flex', justifyContent: 'center', color: HeaderParams.WARNING_TEXT_COLOR }}>({url})</p>
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
  disable:boolean;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ buttonName, url ,disable}) => {
  const router = useRouter();

  if (!router) return null;

  const handleClick = () => {
    router.push(url);
  };

  return <Button className='buttonEffect' size='large' onClick={handleClick} disabled={disable}>{buttonName}</Button>;
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