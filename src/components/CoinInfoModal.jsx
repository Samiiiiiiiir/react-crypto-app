import { Flex, Tag, Typography, Divider } from 'antd';

import redditIcon from './../assets/reddit.svg';
import xIcon from './../assets/x.svg';

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          width={50}
          height={50}
          style={{ marginRight: '1rem' }}
        />
        <Typography.Title level={2} style={{ margin: '0' }}>
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong style={{ marginRight: '0.5rem' }}>
          1 hour
        </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong style={{ marginRight: '0.5rem' }}>
          1 day
        </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong style={{ marginRight: '0.5rem' }}>
          1 week
        </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>PriceBTC: </Typography.Text>
        {coin.priceBtc.toFixed(2)}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        {coin.marketCap.toFixed(2)}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Contract Address: </Typography.Text>
        {coin.contractAddress}
      </Typography.Paragraph>
      <Flex
        align="center"
        justify="space-between"
        style={{ marginTop: '30px' }}
      >
        <Typography.Link href={coin.websiteUrl} target="_blank">
          Website
        </Typography.Link>
        <Flex align="center" gap={20}>
          <Typography.Link href={coin.redditUrl} target="_blank">
            <img src={redditIcon} alt="reddit" width={30} height={30} />
          </Typography.Link>
          <Typography.Link href={coin.twitterUrl} target="_blank">
            <img src={xIcon} alt="x social" width={30} height={30} />
          </Typography.Link>
        </Flex>
      </Flex>
    </>
  );
}
