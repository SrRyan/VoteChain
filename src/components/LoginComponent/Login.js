import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './Login.css';
import Typography from '@material-ui/core/Typography';



const Login = (props, context) => {
    return(
            <div className="bg">
                <div className="login fadeIn">
                    <Typography variant="headline">Welcome to VoteChain</Typography>

                    <Typography style={{padding: 10}}>A Voting Platform built on Blockchain</Typography>

                    <div className="buttonLogin">
                        <Link to="/Login">
                            <Button variant="outlined"> 
                                LOGIN
                            </Button>
                        </Link>
                    </div>
                    {/* <Button variant="outlined"> 
                        <Link to="/dashboard" className="loginButtonText"> Go to your Dashboard</Link>
                    </Button> */}
                </div> 
            </div>
    )
}




export default Login;