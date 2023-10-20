import React, { useEffect, useState } from "react";
import web3 from "../../Blockend/web3";
import { ResolverContract } from "../../Blockend/interact";
import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react';


const UpdateAddress: React.FC = () => {

    const [account, setAccount] = useState("");

    const [newAddress, setNewAddress] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };
        getAccount();
    }, []);

    const handleUpdateWallet = async (e: React.FormEvent) => {
        e.preventDefault();
        let voteValidated = false;

        voteValidated = await ResolverContract.methods.voteValidation([account, newAddress]).call();

        if (voteValidated) {
            try {
                await ResolverContract.methods.updateOldToNew([account, newAddress]).send({ from: account });
                setShowSuccessMessage(true);

            } catch (error) {
                setShowFailureMessage(true);
                setError("An unknown error occurred!")
            }
        }
        else {
            setShowFailureMessage(true);
            setError("Need 75% Votes to update wallet address")!;
        }
    }



    return (
        <>
            <button style={{ width: "100%", fontWeight: "700", fontSize: "15px", backgroundColor: "#6f1ab6", borderRadius: "100px" }} className="submit-btn" onClick={onOpen}>Update Address</button>
            <Modal initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose} >
                <ModalOverlay />

                <ModalContent>
                    <Flex bg="brand.100" color={"white"} justifyContent={"center"} p={5} >
                        <Heading fontSize={25}>Update to new wallet address</Heading>
                    </Flex>
                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6} px={5} width={"100%"}>
                        <Box p={1} mt={5} width={"100%"} >
                            <form onSubmit={handleUpdateWallet} style={{ width: "100%", fontSize: "15px" }}>

                                <FormLabel fontWeight={800}>New Wallet Adrress</FormLabel>
                                <input className="input-adel"
                                    placeholder="Enter new wallet address"
                                    type="text"
                                    name="newAddress"
                                    value={newAddress}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                    required></input>

                                <button className="submit-btn" type="submit">Vote</button>
                                <button style={{ backgroundColor: "red", marginLeft: "20px" }} className="submit-btn" onClick={onClose}>Cancel</button>
                            </form>
                        </Box>
                        <Box mt="5">
                            <Text color={"green"}>{showSuccessMessage ? "Updated to new Address!" : ""}</Text>
                            <Text color={"red"}>{showFailureMessage ? error : ""}</Text>
                        </Box>
                    </ModalBody>

                </ModalContent>

            </Modal>


        </>
    )

}
export default UpdateAddress;