import { Box, Container , Typography } from '@mui/material';
import {ReactComponent as HatSVG} from 'shared/image/hatImage.svg'
import './Header.scss';

export const Header = () => {

    return (
        <Box sx={{padding:3,marginBottom:10,backgroundColor:"#FFFBFE"}} >
            <Container>
                <HatSVG className = "hatLogo" fill="black"/>
                <Typography variant="h3" sx={{fontWeight:"light"}} >Chapeu</Typography>
                <Typography variant="h6" sx={{fontWeight:"light"}} >Winning a hat has never been so easy...</Typography>
            </Container>
        </Box>
    )
}