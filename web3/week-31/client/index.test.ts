import {
    Keypair,
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import { CounterAccount, schema, COUNTER_SIZE } from "./types/types";
import * as borsh from "borsh";
import { expect, test } from "bun:test";

let counterAccount: Keypair = Keypair.generate();
let adminAccount: Keypair = Keypair.generate();
const connection = new Connection("http://localhost:8899", "confirmed");

const programId = new PublicKey("");

test("Account is initialized", async () => {
    const txn = await connection.requestAirdrop(
        adminAccount.publicKey,
        2 * LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(txn);

    const data = await connection.getAccountInfo(adminAccount.publicKey);
    console.log(data);

    const lamports = await connection.getMinimumBalanceForRentExemption(
        COUNTER_SIZE
    );

    const createCounterAccountIx = SystemProgram.createAccount({
        fromPubkey: adminAccount.publicKey,
        lamports,
        newAccountPubkey: counterAccount.publicKey,
        programId: programId,
        space: COUNTER_SIZE,
    });

    const createAccountTxn = new Transaction();
    createAccountTxn.add(createCounterAccountIx);

    const txHash = await connection.sendTransaction(createAccountTxn, [
        adminAccount,
        counterAccount,
    ]);
    
    await connection.confirmTransaction(txHash);

    const counterAccountInfo = await connection.getAccountInfo(counterAccount.publicKey);
    const counter = borsh.deserialize(schema, counterAccountInfo?.data);
    expect(counter).toBe(new CounterAccount({ count: 0 }));
});
