import * as React from 'react';
import {styled,Card,CardHeader,CardMedia,CardContent,CardActionArea,CardActions,Avatar,IconButton,Typography,Button} from '@mui/material'
import { red } from '@mui/material/colors';
import {ReactComponent as HatSVG} from 'shared/image/hatImage.svg'
import { IHat } from 'shared/models/interfaces';
import {setSelectedID} from 'features/hats/hatsSlice';
import {useSelector,useDispatch} from 'react-redux'
import {IRootState} from 'app/store'
import './HatCard.scss'

export const  HatCard:React.FC<IHat> = ({color,name,id})  => {

  const dispatch = useDispatch()
  const selectedId = useSelector((state:IRootState) => state.hats.hatSelectedID)
  const SELECTED = id === selectedId

  const clickHandler = () =>{
    if(id === selectedId ) {dispatch(setSelectedID(null));return }
    dispatch(setSelectedID(id))
  }
  return (
    <Card sx={{ maxWidth: 345 , background:(SELECTED? "red":"")}}>
      <CardActionArea>
        <CardActions disableSpacing sx={{display: "flex",flexDirection:"column",width:"100%"}} onClick={clickHandler}>
          <CardHeader
          sx={{width:"100%"}} 
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {name[0]}
              </Avatar>
            }
            title={name}
            />
          <HatSVG fill={color} style={{width:"100px"}}/>
          <CardContent>
            <Typography variant="body2" color="text.secondary">{name}</Typography>
          </CardContent>
        </CardActions>
      </CardActionArea>
          <div style={{ width:"100%",display:"flex",flexDirection:"row-reverse",marginBottom:10,marginTop:10}}>
            <Button variant="outlined" sx={ { borderRadius: 28 ,marginRight:3} } onClick={clickHandler} {...{selected:SELECTED}} >Select</Button>
          </div>
    </Card> 
  );
}

