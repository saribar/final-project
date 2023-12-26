import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { teal, grey, lime } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Mode from '@mui/icons-material/Mode';
import { editPost, deletePost } from '../../Store/PostSlice';
import TextField from '@mui/material/TextField';
import Send from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';




const Post = (props) => {

  const [cntLike, setCntLike] = useState(0)
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [time, setTime] = useState(props.items.time)
  const [name, setName] = useState(props.items.name)
  const [content, setContent] = useState(props.items.content)
  const [words, setWords] = useState((props.items.content) ?.slice(0, 50))
  const [readMore, setReadMore] = useState(false);
  const toEdit = () => {
    setEdit(false)
    setWords((content)?.slice(0, 50))
    dispatch(editPost({ id: props.items.id, name: name, time: time }))
  }

  return (
    <>
      {!edit ?
        <Card sx={{ width: '15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
          {!readMore ?
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {words}
              </Typography>
              <Button size="xxlarge" onClick={() => setReadMore(true)} ><ExpandMore size="xxlarge" sx={{ color: grey['800'] }} /></Button>
            </CardContent>
            :
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {props.items.content}
              </Typography>
              <Button size="xxlarge" onClick={() => setReadMore(false)} ><ExpandMore size="xxlarge" sx={{ color: grey['800'] }} /></Button>
            </CardContent>
          }
          <CardActions >
            <Button size="xxlarge" onClick={() => { dispatch(deletePost(props.items.id)) }}><DeleteForeverIcon size="xxlarge" sx={{ color: teal['500'] }} /></Button>
            <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: teal['500'] }} /></Button>
            {cntLike <= 0 ?
              <Button size="xxlarge" onClick={() => setCntLike(cntLike + 1)} ><FavoriteBorder size="xxlarge" sx={{ color: grey['800'] }} /><div>{cntLike}</div></Button>
              : <Button size="xxlarge" onClick={() => setCntLike(cntLike + 1)} ><Favorite size="xxlarge" sx={{ color: teal['500'] }} /><div>{cntLike}</div></Button>
            }
          </CardActions>

        </Card >
        : <Card sx={{ width: '15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
          <CardContent>
            <TextField id="outlined-basic" variant="outlined" defaultValue={props.items.name} onChange={(e) => setName(e.target.value)} />
          </CardContent>
          <CardActions >

            <Button size="xxlarge" onClick={() => toEdit()} ><Send size="xxlarge" sx={{ color: teal['500'] }} /></Button>
          </CardActions>
        </Card>
      }

    </>
  )
}


export default Post


