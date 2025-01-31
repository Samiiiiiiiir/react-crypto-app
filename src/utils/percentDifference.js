export default function percentDifference(boughtFor, currentPrice) {
  return (
    100 *
    Math.abs((boughtFor - currentPrice) / ((boughtFor + currentPrice) / 2))
  );
}
