import { FaEye, FaRegCopy } from "react-icons/fa";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Table from "../components/Table";
import "react-perfect-scrollbar/dist/css/styles.css";

function Result() {
  const { address } = useParams();

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
            <span className="uppercase font-light">ETH Balance</span>
            <div className="flex items-center gap-2">
              <img src="/ethereum.svg" alt="" className="w-3" />
              <span>7.64942209074328652</span> ETH
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <span className="uppercase font-light">ETH Value</span>
            <span>$14,198.75</span>
          </div>
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
                    <span className="text-blue-500">0xC4356a...F474e8e9</span>
                    <FaRegCopy
                      className="text-gray-400 cursor-pointer"
                      onClick={() =>
                        handCopy("0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97")
                      }
                    />
                  </div>
                  <div> 0.12623382 ETH</div>
                  <div className="text-sm text-gray-600">0.00132382</div>
                </Table.Row>

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
                    <span className="text-blue-500">0xC4356a...F474e8e9</span>
                    <FaRegCopy className="text-gray-400 cursor-pointer" />
                  </div>
                  <div> 0.12623382 ETH</div>
                  <div className="text-sm text-gray-600">0.00132382</div>
                </Table.Row>

                {false && (
                  <span className="flex justify-center py-2">
                    No data found!
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
