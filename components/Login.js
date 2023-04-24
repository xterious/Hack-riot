import React from "react";
import { Grid, Paper, Avatar, TextField,Button,Link } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
const Login=()=>{
    const paperstyle={padding:60,height:'50vh',width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:'#473D26'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>  
                Sign In
                </Grid>
                <TextField label="Username" placeholder="Enter Username" variant="standard" fullWidth required />
                <TextField label="Password" placeholder="Enter Username" variant="standard" type="password" fullWidth required />

                <Button type="submit" color="secondary" style={btnstyle} fullWidth variant="outlined"  >Sign In</Button>
                <Link href="#">Sign Up</Link>
            </Paper>
        </Grid>
    );
}
export default Login;