import { JsonRpcProvider, id } from "ethers";

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/nnY0qPUQLYsUvb5BKJM5bh81sI6O0PQG");

function pollBlock(blockNumber: number) {
    provider.getLogs({
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        fromBlock: blockNumber,
        toBlock: blockNumber,
        topics: [id("Transfer(address,address,uint256)")],
    })
}

async function main() {
    const currentBlock = 1;

    while(1) {
        await pollBlock(currentBlock);
    }
}