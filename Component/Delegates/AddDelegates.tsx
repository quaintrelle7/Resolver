import React, { useState, useEffect } from "react";
import { ResolverContract } from "../../Blockend/interact";
import web3 from "../../Blockend/web3";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'

function AddDelegates() {
  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://polygon-mumbai.g.alchemy.com/v2/cNZhkVFPVIileSpGtOeahsFjCFU5sn_h"
  // );

  const [firstDel, setFirstDel] = useState("");
  const [secondDel, setSecondDel] = useState("");
  const [thirdDel, setThirdDel] = useState("");
  const [fourthDel, setFourthDel] = useState("");

  const [newAddress, setNewAddress] = useState("");

  // const [account, setAccount] = useState("");

  // useEffect(() => {
  //   const getAccount = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   };
  //   getAccount();
  // }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    // Call the mintNFT function

    console.log("accou", accounts[0]);
    try {
      const accounts = await web3.eth.getAccounts();
      // Call the mintNFT function
      await ResolverContract.methods
        .createNewRegistry(accounts[0], [
          firstDel,
          secondDel,
          thirdDel,
          fourthDel,
        ])
        .send({ from: accounts[0] });
      console.log("accou", accounts[0]);

      console.log("NFT minted successfully");
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };
  const handleAddDelegate = async (e) => {
    e.preventDefault();

    // const provider = new ethers.providers.JsonRpcProvider(
    //   "https://rpc-mumbai.maticvigil.com/"
    // );

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    // const signer = provider.getSigner();
    // console.log("signer", signer);
    // // Get the address of the provider
    // const providerAddress = await provider.getSigner().getAddress();
    // // const signer = provider.getSigner();
    // const address = signer.getAddress();

    // console.log("address", providerAddress);
    // const delegates = ethers.utils.solidityPack(
    //   ["address", "address", "address", "address"],
    //   [firstDel, secondDel, thirdDel, fourthDel]
    // );
    // await callRegistry(
    //   "createNewRegistry",
    //   [providerAddress, delegates],
    //   signer
    // );
  };
  return (
    <>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} marginRight="180">
            <Text
              fontFamily={'heading'}
              fontWeight={700}
              textTransform={'uppercase'}
              mb={3}
              fontSize={'xl'}
              color={'gray.500'}>
              Secure your wallet now
            </Text>
            <Heading>Add Delegates</Heading>
            <form style={{ marginTop: "20px" }} onSubmit={handleForm}>
              <label>First Delegate</label>
              <input
                className="input-adel"
                placeholder="Enter the wallet address"
                type="text"
                name="FirstDel"
                value={firstDel}
                onChange={(e) => setFirstDel(e.target.value)}
                required
              />
              <label>Second Delegate</label>
              <input
                className="input-adel"
                placeholder="Enter the wallet address"
                type="text"
                name="SecondDel"
                value={secondDel}
                onChange={(e) => setSecondDel(e.target.value)}
                required
              />
              <label>Third Delegate</label>
              <input
                className="input-adel"
                placeholder="Enter the wallet address"
                type="text"
                name="ThirdDel"
                value={thirdDel}
                onChange={(e) => setThirdDel(e.target.value)}
                required
              />
              <label>Fourth Delegate</label>
              <input
                className="input-adel"
                placeholder="Enter the wallet address"
                type="text"
                name="FourthDel"
                value={fourthDel}
                onChange={(e) => setFourthDel(e.target.value)}
                required
              />
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>

            </Stack>
          </Stack>
          <Flex>
            {/* <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            /> */}
            <Box mb={{ base: 8, md: 20 }} mr={-40}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Technology
              </Text>
              <Heading color={'Black'} mb={"40px"} mt={5}>
                Wallet Resolver
              </Heading>
              <Text fontSize={'xl'} color={'gray.800'} mb={5} mt={2} >
                Unlock the future of cryptocurrency security with our cutting-edge project.
              </Text>

              <Text fontSize={'xl'} color={'gray.800'} mb={5}> We are on a mission to help crypto enthusiasts regain control of their hacked wallets and fortify their digital assets.</Text>
              <Text fontSize={'xl'} color={'gray.800'} mb={5}>
                Get involved and be part of the solution!
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>


    </>
  );
}

export default AddDelegates;
