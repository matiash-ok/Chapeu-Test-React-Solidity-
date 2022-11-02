import React from "react"
import { HatsList } from "components"
import { Box, Button, Container } from "@mui/material"
// import {load} from "../../func/funcs"
import SelectInput from "@mui/material/Select/SelectInput"
import {useSelector} from 'react-redux'
import {IRootState} from 'app/store'
import {HATCONTRACT} from 'shared/contract/hats'
import { IHat } from "shared/models/interfaces"
import Web3 from 'web3';


export const HatsContainer = () => {
    const hats:IHat[] = useSelector((state:IRootState) => state.hats.hatList)
    const {hatList,hatSelectedID} = useSelector((state:IRootState) => state.hats)
    const [winnerHats,setWinnerHats] = React.useState<any>([])
    const [addressAccount,setAddresAccount] = React.useState<any>()
    const [contract,setContract] = React.useState<any>()
    const [win,setWin] = React.useState<boolean|null>(null)
    const [refresh,setRefresh] = React.useState<any>(true)

    React.useEffect(()=>{

        async function load(){
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
            const id = await web3.eth.net.getId()
            const deployedNetwork = await HATCONTRACT.networks[id]
            const accounts = await web3.eth.requestAccounts()
            setAddresAccount(accounts[0])

            /// get the hats Contract from the web3 api
            const hatsContract = new web3.eth.Contract(HATCONTRACT.abi, deployedNetwork.address);
            setContract( hatsContract)

            /// i get the hats that the address already won
            const hatsCount = await hatsContract.methods.hatsCount(accounts[0]).call()
            const winnerHats = []
            for(let i = 0 ; i< hatsCount ; i++){
                const winnerHat = await hatsContract.methods.hats(accounts[0],i).call()
                const {color,id,name} = winnerHat
                winnerHats.push({color,id,name})
            }
            setWinnerHats(winnerHats)
        }
        if(!refresh) return
        load()
        setRefresh(false)
    })

    const startLotteryHandle = async() => {
        const {id,color,name} = hatList[hatSelectedID-1] 
        const  receipt = await contract.methods.startLottery(id,color,name).send({from:addressAccount});
        const returnValues = receipt.events.StartLottery.returnValues
        const win = returnValues?.win
        setWin(win)
        setRefresh(true)
    }
    return (
        <Box 
            style={{margin:30}}
        >
            <HatsList hats={hats} />
            <Box 
                display={"flex"}
                justifyContent={"center"}
                >
                <Button color="error" variant="contained" sx={ { borderRadius: 28 ,marginTop:3} } onClick={startLotteryHandle}>Start Lottery</Button>
           
            </Box>
            {win !== null  &&  <Box> <h1>  {win? "Congratulations you win the Chapeu" : "Sorry...You Lose" } </h1> </Box>}

            {winnerHats?.length > 0   &&  
            <Box> 
                <h1>Hats you already WON</h1> 
                <HatsList hats={winnerHats} />
            </Box>
            }
         
        </Box>
    ) 
} 