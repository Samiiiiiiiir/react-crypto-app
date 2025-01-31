import { cryptoData, cryptoAssets } from './data';

export function fakeFetchCrypto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1000);
  });
}

export function fetchAssets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000);
  });
}
