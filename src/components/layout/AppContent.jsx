import { useContext } from 'react';

import { Layout, Typography } from 'antd';
import CryptoContext from '../../context/crypto-context';

import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  backgroundColor: '#001529',
  padding: '1rem',
  color: '#fff',
};

export default function AppContent() {
  const { assets, crypto } = useContext(CryptoContext);

  const cryptoPriceMap = crypto.reduce((acc, curr) => {
    acc[curr.id] = curr.price;
    return acc;
  }, {});

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: '#fff', textAlign: 'left' }}>
        Portfolio:{' '}
        {assets
          .map((item) => item.amount * cryptoPriceMap[item.id])
          .reduce((acc, curr) => acc + curr, 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}
