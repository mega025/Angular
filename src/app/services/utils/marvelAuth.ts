import * as CryptoJS from 'crypto-js';

export  function  MarvelAuthParams(){
  const ts = new Date().getTime().toString();
  const  pubKey = "936630ef2c17caffd88799810f2b55db";
  const privKey = "06d173b6cf3a969c8707a4f425e35b9422f21cbf";

  const hash = CryptoJS.MD5(ts + privKey + pubKey).toString();

  return{
    ts,
    apikey: pubKey,
    hash: hash
  }
}
