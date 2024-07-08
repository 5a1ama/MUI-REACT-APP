import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import './Home.css'
import {Box, Stack} from "@mui/material"
import Add from "./components/Add";

export function Home({mode,setMode}) 
{

    return (  
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar mode={mode} setMode={setMode} />
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    );
}