import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useContext, useEffect, useState } from 'react';
import CryptoContext from '../../context/crypto-context';

import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';

const headerStyle = {
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const keypress = (event) => {
      if (event.key == '/') {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener('keypress', keypress);

    return () => document.removeEventListener('keypress', keypress);
  }, []);

  const { crypto } = useContext(CryptoContext);

  function handleSelect(value) {
    setCoin(crypto.find((item) => item.id == value));
    setModal(true);
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        value="press / to open"
        options={crypto.map((item) => ({
          ...item,
          label: item.name,
          value: item.id,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              src={option.data.icon}
              alt={option.data.label}
              width={20}
              height={20}
            />
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary" onClick={() => setDrawer(true)}>
        Add asset
      </Button>

      <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
        <CoinInfoModal coin={coin}></CoinInfoModal>
      </Modal>

      <Drawer
        width={600}
        title="Add asset"
        onClose={() => setDrawer(false)}
        open={drawer}
      >
        <AddAssetForm />
      </Drawer>
    </Layout.Header>
  );
}
