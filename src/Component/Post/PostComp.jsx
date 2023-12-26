import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from "../../Store/PostSlice";
import Post from "./Post";
import Button from '@mui/material/Button';
import { pink,lime,teal } from '@mui/material/colors';
import Add from '@mui/icons-material/Add';
import BubbleChart from '@mui/icons-material/BubbleChart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const PostComp = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("")
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const myPosts = useSelector(x => x.postsSlice.post)
    const dispatch = useDispatch()
    const savePost=(text)=>{
        dispatch(addPost(text))
        handleClose()
    }

    

    return (
        <>
            <h1>Our Posts</h1>
            {/* <Dialogs name={"הוספת משימה חדשה"} details={"משימה חדשה"} /> */}
            <Button variant="outlined" sx={{ color: teal['500']}} color='inherit' onClick={() => handleClickOpen()} >
                הוספת פוסט חדש
                {<Add />}
            </Button>
            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" sx={{color:teal['500']}}>
                פוסט חדש   
                <BubbleChart/>
                </DialogTitle>
                <DialogContent >
                    <DialogContentText id="alert-dialog-description">
                    <TextField id="outlined-basic" label="details" variant="outlined" color="secondary" onChange={(e)=>setText(e.target.value)}/>         {/* <input type="text" onChange={(e)=>setText(e)}/> */}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={()=>savePost(text) }   sx={{color:teal['500']}}>שמור</Button>
                </DialogActions>
                
            </Dialog>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {
                myPosts.map((item) => {
                    return (
                        <Post items={item} />
                    )
                })
            }
            </div>
        </>
    )
}

export default PostComp