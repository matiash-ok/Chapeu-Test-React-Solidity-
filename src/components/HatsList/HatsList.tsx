import { Container ,Grid, Typography } from '@mui/material';
import { HatCard } from './HatCard';
import { IHat } from 'shared/models/interfaces';
import {useSelector,useDispatch} from 'react-redux'
import {IRootState} from 'app/store'
import "./HatsList.scss"

interface HatsListProps{
    hats : IHat[]
}

export const HatsList:React.FC<HatsListProps> = (props) => {
    const {hats} = props
    return (
        <Container style={{padding:60,backgroundColor:"#FFFBFE", borderRadius:"25px"}}>
            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
                {hats.map((hat) => 
                 <Grid item xs={2} sm={1} md={1} key={hat.id}>
                     <HatCard key = {hat.id} {...hat} />
                 </Grid>
                        )}
            </Grid>
        </Container>
    )
}