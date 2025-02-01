import { cryptoData, cryptoAssets } from './data';

export function fakeFetchCrypto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 300);
  });
}

export function fetchAssets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 300);
  });
}
