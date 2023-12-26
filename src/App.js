import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, Link } from 'react-router-dom'
import HomeComp from './Component/Home/HomeComp';
import { cyan, teal,lime } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import ButtonGroup from '@mui/material/ButtonGroup';
import TasksComp from './Component/ToDo/TasksComp';
import PostComp from './Component/Post/PostComp';

function App() {
  const color = teal['500'];
  return (
    <div className="App" dir="rtl">
      <Box sx={{ display: { xs: 'none', sm: 'block' }, '& :not(style)': { ml: 20 } }}>
        <AppBar position="static" sx={{ backgroundColor: color}} >
          <Toolbar >
            <Link to="/" underline='none' sx={{color:lime['50']}} >
              בית
            </Link>
            <Link to="/todo" underline="none" >
              משימות
            </Link>
            <Link to="/post" underline="none">
              פוסטים
            </Link>
            <Link to="/photo" underline="none">
              תמונות
            </Link>
            <Link to="/users" underline="hover">
              משתמשים
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Box sx={{ width: '100%' ,backgroundColor:color}}>
      <Tabs  aria-label="nav tabs example">
        <Link  to="/" >Home       </Link>
        <Link  to="/ToDo" >ToDo      </Link>
        <Link label="Page Two" to="/Post" >Post       </Link>
      </Tabs>
    </Box> */}
      {/* <Toolbar sx={{ width: '100%', backgroundColor: color }}>
        <ButtonGroup aria-label="outlined primary button group">

          <Link to="/">One</Link>
          <Link to="/todo">One</Link>
          <Link to="/">One</Link>

        </ButtonGroup>
      </Toolbar> */}

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/todo" element={<TasksComp />} />
        <Route path="/post" element={<PostComp />} />
      </Routes>
    </div>
  );
}

export default App;
