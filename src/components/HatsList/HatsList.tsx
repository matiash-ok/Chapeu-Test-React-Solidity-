import { Container ,Grid, Typography } from '@mui/material';
import { HatCard } from './HatCard';
import { IHat } from 'shared/models/interfaces';
import {useSelector,useDispatch} from 'react-redux'
import { setHats,setSelectedID ,IHatsState} from 'features/hats/hatsSlice';
import {IRootState} from 'app/store'
import "./HatsList.scss"


export const HatsList = () => {

    const dispatch = useDispatch()
    const hats:IHat[] = useSelector((state:IRootState) => state.hats.hatList)


    
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