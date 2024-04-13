import * as fs from "fs";
import {ethers} from "ethers";

function generateRandomAddress(): string {
 const wallet = ethers.Wallet.createRandom();


 return wallet.address;
}

function generateRandomAmount(): number {
 return Math.floor(Math.random() * 100000000000000000000);
}

function generateRandomTokenIds(count: number): number[] {
 const tokenIds: number[] = [];

 while (tokenIds.length < count) {
    const tokenId = Math.floor(Math.random() * count) + 1;
    if (!tokenIds.includes(tokenId)) {
      tokenIds.push(tokenId);
    }
 }

 return tokenIds;
}

function generateAddresses(count: number): string[] {
 const addresses: string[] = [];
 const tokenIds = generateRandomTokenIds(count);

 for (let i = 0; i < count; i++) {
    const address = generateRandomAddress();
    const amount = generateRandomAmount();
    const tokenId = tokenIds[i];

    addresses.push(`${address},${tokenId},${amount}`);
 }

 return addresses;
}

const addresses = generateAddresses(500);

// Writing addresses to a CSV file
fs.writeFile('airdropData.csv', addresses.join('\n'), (err) => {
 if (err) {
    console.error('Error writing file:', err);
 } else {
    console.log('Addresses successfully written to addresses.csv');
 }
});
