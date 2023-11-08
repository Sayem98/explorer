import { FaEye, FaRegCopy } from "react-icons/fa";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Table from "../components/Table";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useEffect, useState } from "react";
import { RPC } from "../data/constant";
import Web3 from "web3";
function Result() {
  const { address } = useParams();
  const [balance, setBalance] = useState(0);
  const [numberOfTransactions, setNumberOfTransactions] = useState(0);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log("searching...");
      const web3 = new Web3(RPC);
      // get account information
      const _balance = await web3.eth.getBalance(address);
      // convert to ether
      const etherBalance = web3.utils.fromWei(_balance, "ether");
      setBalance(etherBalance);

      //  get number of transactions of a address
      const transactionCount = await web3.eth.getTransactionCount(address);
      console.log(transactionCount);
      setNumberOfTransactions(transactionCount);

      // get latest five transactions of the address and put it in a array
      const transactionsCount = Number(
        await web3.eth.getTransactionCount(address)
      );
      console.log(transactionsCount);

      const transactions = [];
      // get latest block number
      let blockNumber = Number(await web3.eth.getBlockNumber());
      console.log(blockNumber);
      // while (blockNumber) {
      //   console.log(blockNumber);
      //   const transaction = await web3.eth.getBlock(Number(blockNumber));
      //   console.log(transaction.transactions);
      //   if (transaction?.transactions && transaction.transactions.length > 0) {
      //     for (let j = 0; j < transaction.transactions.length; j++) {
      //       const transactionData = await web3.eth.getTransaction(
      //         transaction.transactions[j]
      //       );
      //       // if from or to address is the address we are searching for then add to the array
      //       if (
      //         transactionData.from === address ||
      //         transactionData.to === address
      //       ) {
      //         if (
      //           transactions.length >= 5 ||
      //           transactions.length >= transactionsCount
      //         ) {
      //           break;
      //         }
      //         transactions.push(transactionData);
      //       }
      //     }
      //   }
      //   if (
      //     transactions.length >= 5 ||
      //     transactions.length >= transactionsCount
      //   ) {
      //     break;
      //   }
      //   if (blockNumber > 0) {
      //     blockNumber--;
      //   }
      // }
      console.log(transactions);
      setTransaction(transactions);
    };
    getData();
  }, []);

  function handCopy(val) {
    navigator.clipboard.writeText(val);
  }

  return (
    <div className="w-screen h-full">
      <Container className="space-y-8">
        <div className="flex items-center gap-3 pt-6">
          <img
            src="/address.png"
            alt=""
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-sm md:text-lg flex items-center gap-2">
            <strong>Address</strong> {address}
            <FaRegCopy
              className="text-gray-400 cursor-pointer"
              onClick={() => handCopy(address)}
            />
          </span>
        </div>

        <div className="bg-white border border-gray-200 px-5 py-3 rounded-xl">
          <h4 className="font-medium text-lg mb-3">Overview</h4>

          <div className="space-y-1">
            <span className="uppercase font-light">AES Balance</span>
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="" className="w-3" />
              <span>{Number(balance)}</span> AES
            </div>
          </div>

          {/* <div className="flex flex-col pt-4">
            <span className="uppercase font-light">ETH Value</span>
            <span>$14,198.75</span>
          </div> */}
        </div>

        <PerfectScrollbar>
          <div className="min-w-[75rem] h-full overflow-x-auto">
            <Table>
              <Table.Header>
                <span>Transaction Hash</span>
                <span>Method</span>
                <span>Block</span>
                <span>Age</span>
                <span>From</span>
                <span>To</span>
                <span>Value</span>
                <span>Txn Fee</span>
              </Table.Header>
              <Table.Body>
                {transaction.length > 0 &&
                  transaction.map((item, index) => () => {
                    <Table.Row>
                      <div className="flex items-center gap-2">
                        <div className="border w-8 h-8 p-2 flex items-center justify-center rounded-lg">
                          <FaEye size={20} />
                        </div>
                        <span className="text-blue-500">
                          0x022fa7e43a889f6d7afd...
                        </span>
                      </div>
                      <div className="bg-[#f8f9fa] text-xs w-fit h-fit px-2 md:px-6 py-1 md:py-2 rounded-lg border boder-gray-300">
                        Transfer
                      </div>
                      <div className="text-blue-500">18521449</div>
                      <div>51 secs ago</div>
                      <div>Titan Builder</div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">
                          0xC4356a...F474e8e9
                        </span>
                        <FaRegCopy
                          className="text-gray-400 cursor-pointer"
                          onClick={() =>
                            handCopy(
                              "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97"
                            )
                          }
                        />
                      </div>
                      <div> 0.12623382 AES</div>
                      <div className="text-sm text-gray-600">0.00132382</div>
                    </Table.Row>;
                  })}

                {numberOfTransactions === 0 ? (
                  <span className="flex justify-center py-2">
                    No data found!
                  </span>
                ) : (
                  <span className="flex justify-center py-2">
                    {Number(numberOfTransactions)} transactions found.
                  </span>
                )}
              </Table.Body>
              <Table.Footer>
                <span className="uppercase self-center text-sm cursor-pointer">
                  View all transactions
                </span>
              </Table.Footer>
            </Table>
          </div>
        </PerfectScrollbar>
      </Container>
    </div>
  );
}

export default Result;
