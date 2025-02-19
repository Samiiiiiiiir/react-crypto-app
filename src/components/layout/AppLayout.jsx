import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#001529',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  return (
    <>
      {loading && (
        <div style={containerStyle}>
          <Spin />
        </div>
      )}
      {!loading && (
        <Layout>
          <AppHeader />
          <Layout>
            <AppSider />
            <AppContent />
          </Layout>
        </Layout>
      )}
    </>
  );
}
