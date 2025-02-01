import { Flex, Typography, Button } from 'antd';

export default function CoinInfo({ coin, hasButton, buttonFunction }) {
  return (
    <Flex align="center">
      <img
        src={coin.icon}
        alt={coin.name}
        width={50}
        height={50}
        style={{ marginRight: '1rem' }}
      />
      <Typography.Title level={2} style={{ margin: '0' }}>
        {coin.name}
      </Typography.Title>
      {hasButton && (
        <Button onClick={buttonFunction} style={{ marginLeft: 'auto' }}>
          Go back
        </Button>
      )}
    </Flex>
  );
}
