import { BiCube } from "react-icons/bi";

function SingleItem({ number, type, time, fee, recipient, txns, reward }) {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-0 md:flex-row md:items-center justify-between px-4 py-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <div className="bg-[#f8f9fa] p-3 rounded-lg">
          <BiCube size={20} />
        </div>
        <div className="flex flex-col">
          <p className="text-[#2676ac] text-base">{number}</p>
          <span className="text-sm text-gry-500">{time}</span>
        </div>
      </div>

      <div className="flex flex-col">
        {type === "block" && (
          <>
            <p>
              Fee Recipient
              <span className="text-[#2676ac]"> {recipient}</span>
            </p>
            <p className="text-sm">
              <span className="text-[#2676ac]">{txns}</span> in 12 secs
            </p>
          </>
        )}
        {type === "transaction" && (
          <>
            <p>
              From
              <span className="text-[#2676ac]"> {recipient}</span>
            </p>
            <p className="text-sm">
              To <span className="text-[#2676ac]">{txns}</span>
            </p>
          </>
        )}
      </div>

      <span className="border self-start text-sm border-gray-300 p-1 rounded-xl">
        {reward} Eth
      </span>
    </div>
  );
}

function LatestTransaction() {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-6 space-y-3 mt-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="bg-white border border-gray-200 rounded-lg w-full">
          <h2 className="border-b pb-4 font-semibold py-2 px-4">
            Latest Blocks
          </h2>
          <SingleItem
            type="block"
            number={123456}
            time="2 mins ago"
            recipient="0x1234567890"
            txns={12}
            reward={0.1}
          />

          <SingleItem
            type="block"
            number={123456}
            time="2 mins ago"
            recipient="0x1234567890"
            txns={12}
            reward={0.1}
          />

          <SingleItem
            type="block"
            number={123456}
            time="2 mins ago"
            recipient="0x1234567890"
            txns={12}
            reward={0.1}
          />

          <div className="w-full"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg w-full">
          <h2 className="border-b pb-4 font-semibold py-2 px-4">
            Latest Transactions
          </h2>
          <SingleItem
            type="transaction"
            number="0x1f9090...e676c326"
            time="2 mins ago"
            recipient="0x1234567890"
            txns="0x1f9090...e676c326"
            reward={0.1}
          />

          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default LatestTransaction;
