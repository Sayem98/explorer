function InfoCard() {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-6 space-y-3">
      <div className="p-4 bg-white border border-gray-200 rounded-lg -mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-4 border-b pb-2">
            <img src="ethereum.svg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600">AES Price</span>
              <strong className="text-gray-500">$119000</strong>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b pb-2">
            <img src="ethereum.svg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600">Latest Block Number</span>
              <strong className="text-gray-500">67327832</strong>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="ethereum.svg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600">Gas Price</span>
              <strong className="text-gray-500">$119000</strong>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src="ethereum.svg" alt="" className="w-5" />
            <div className="flex flex-col">
              <span className="text-gray-600">Ether Price</span>
              <strong className="text-gray-500">$119000</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
