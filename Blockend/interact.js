import web3 from "./web3";
import { abi } from "./registry";

const contractAddress = "0x3AbBD5F11636360E2d8eBef883521E1DC39aA76a";

export const ResolverContract = new web3.eth.Contract(abi, contractAddress);
