import { useEffect, useState } from "react";
import { RPC } from "../data/constant";
import Web3 from "web3";
import Container from "./Container";
function InfoCard() {
  const [gasPrice, setGasPrice] = useState(0);
  const [blockNumber, setBlockNumber] = useState(0);
  const [etherPrice, setEtherPrice] = useState(0);
  const [lastSafeBlock, setLastSafeBlock] = useState(0);

  useEffect(() => {
    const getData = async () => {
      // get gas price
      const web3 = new Web3(RPC);
      const gasPrice = await web3.eth.getGasPrice();
      console.log(gasPrice);
      // convert to gwei
      const gasPriceGwei = web3.utils.fromWei(gasPrice, "Gwei");
      setGasPrice(gasPriceGwei);
      // latest block number
      const blockNumber = await web3.eth.getBlockNumber();
      setBlockNumber(Number(blockNumber));

      // last safe block
      const lastSafeBlock = Number(blockNumber) - 5;
      setLastSafeBlock(lastSafeBlock);
      // convert to Gwei

      // get ether price
      // const response = await fetch(
      //   "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      // );

      // const data = await response.json();
      // console.log(data);
    };
    getData();
  }, []);

  return (
    <Container className="-mt-16">
      <div className="p-4 bg-white border border-gray-200 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-4 border-b pb-2">
            <img src="logo.jpg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600 uppercase">AES Price</span>
              <strong className="text-gray-500">$64</strong>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b pb-2">
            <img src="logo.jpg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600 uppercase">
                Latest Block Number
              </span>
              <strong className="text-gray-500">{blockNumber}</strong>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="logo.jpg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600 uppercase">Gas Price</span>
              <strong className="text-gray-500">{gasPrice} Gwei</strong>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="logo.jpg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600 uppercase">Last Safe Block</span>
              <strong className="text-gray-500">{lastSafeBlock}</strong>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default InfoCard;
