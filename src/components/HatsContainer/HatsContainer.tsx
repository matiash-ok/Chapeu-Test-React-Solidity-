import React from "react"
import { HatsList } from "components"
import { Box, Button, Container } from "@mui/material"

export const HatsContainer = () => {
    return (
        <Box 
                style={{margin:30}}
                >

            <HatsList />
            <Box 
                display={"flex"}
                justifyContent={"center"}
                >
                <Button color="error" variant="contained" sx={ { borderRadius: 28 ,marginTop:3} }>Start Lottery</Button>
            </Box>
        </Box>
    ) 
} 