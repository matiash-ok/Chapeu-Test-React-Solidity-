//@ts-ignore

import HatsJSON from '../build/contracts/Hats.json'
import Web3 from 'web3';
var contract = require('@truffle/contract');

export const load = async () => {
    await loadWeb3();
    const addressAccount = await loadAccount();
    const { hatsContract, hats } = await loadContract(addressAccount);

    return { addressAccount, hatsContract, hats };
};

const loadHats = async (todoContract:any, addressAccount:any) => {
    const tasksCount = await todoContract.tasksCount(addressAccount);
    const tasks = [];
    for (var i = 0; i < tasksCount; i++) {
        const task = await todoContract.tasks(addressAccount, i);
        tasks.push(task);
    }
    return tasks
};

const loadContract = async (addressAccount:any) => {
    const theContract = contract(HatsJSON);
    theContract.setProvider(web3.eth.currentProvider);
    const hatsContract = await theContract.deployed();
    const hats = await loadHats(hatsContract, addressAccount);

    return { hatsContract, hats }
};

const loadAccount = async () => {
    const addressAccount = await web3.eth.getCoinbase();
    return addressAccount;
};

const loadWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};


