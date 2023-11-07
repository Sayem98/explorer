import { FaSearch } from "react-icons/fa";
import { RPC } from "../data/constant";
import Web3 from "web3";
import Container from "./Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [searchType, setSearchType] = useState("");
  const navigate = useNavigate();

  const search = async () => {
    // console.log("searching...");
    // const web3 = new Web3(RPC);
    // // get the chain id
    // const chainId = await web3.eth.getChainId();
    // console.log(chainId);

    // // get latest block number
    // const blockNumber = await web3.eth.getBlockNumber();
    // console.log(blockNumber);
    //

    navigate(`/address/${searchType}`);
  };

  return (
    <div className="w-full h-[240px] bg-[#1f2937] md:px-6 py-8">
      <Container className="px-6 space-y-3">
        <h2 className="text-lg text-white font-semibold">
          AES Blockchain Explorer
        </h2>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg md:w-[70%]">
          <select className="focus:outline-none md:w-[7rem]">
            <option value="address" className="text-semibold">
              Address
            </option>
            <option value="tokens">Tokens</option>
          </select>

          <input
            type="text"
            placeholder="Search by Address / Tokens"
            className="flex-1 tex-gray-600 font-semibold w-full bg-transparent focus:outline-none"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />

          <button
            className="bg-[#0670a6] px-4 py-3 text-white rounded-lg"
            onClick={search}
          >
            <FaSearch size={16} />
          </button>
        </div>
      </Container>
    </div>
  );
}

export default SearchBar;
