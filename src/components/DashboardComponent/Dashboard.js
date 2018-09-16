import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./Dashboard.css"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

let id = 0;
function createData(name, topics, members, updated ) {
  id += 1;
  return { id, name, topics, members, updated };
}

const rows = [
  createData('IBM ShareHolders', 11, 123056, "12/06/18"),
  createData('Town of Wilton', 2, 1156, "11/08/18"),
];  

class Dashboard extends Component {


  state = {
    openCreateOrg: false,
    openJoinOrg: false,
    checkedPrivate: true,
  };


  handleOpenCreateOrg = () => {
    this.setState({ openCreateOrg: true });
  };

  handleCloseOrg = () => {
    this.setState({ openCreateOrg: false });
  };

  handleOpenJoinOrg = () => {
    this.setState({ openJoinOrg: true });
  };

  handleCloseJoin = () => {
    this.setState({ openJoinOrg: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
        <div className="page">
            <div>
                <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleOpenCreateOrg}>
                    Create New Organization
                </Button>
                <Dialog open={this.state.openCreateOrg} onClose={this.handleCloseOrg} aria-labelledby="form-dialog-title"> 
                    <DialogTitle id="form-dialog-title">Create a New Organization</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            When you create a New Organization you will become the default Admin. You can setup Organization Permissions after creation.
                        </DialogContentText>
                        <FormControlLabel control={ <Checkbox checked={this.state.checkedPrivate} onChange={this.handleChange('checkedPrivate')} value="true" color="primary"/>}label="This Organization is Private"/>
                        <TextField autoFocus margin="dense" id="name" label="Organization Name" type="field" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseOrg} color="primary"> Create </Button>
                        <Button onClick={this.handleCloseOrg} color="primary"> Cancel </Button>
                    </DialogActions>
                </Dialog>
                <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleOpenJoinOrg}>
                    Join a Organization
                </Button>
                <Dialog open={this.state.openJoinOrg} onClose={this.handleCloseJoin} aria-labelledby="form-dialog-title"> 
                    <DialogTitle id="form-dialog-title">Join a Organization</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can Search for public Organizations. If you want to join a Private Organization please enter their ID Code.
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="name" label="Search" type="search" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseJoin} color="primary"> Join </Button>
                        <Button onClick={this.handleCloseJoin} color="primary"> Cancel </Button>
                    </DialogActions>
                </Dialog>
            </div>
    
            <div className="table">
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Organization(s)</TableCell>
                            <TableCell numeric>Open Topics</TableCell>
                            <TableCell numeric>Members</TableCell>
                            <TableCell numeric>Last Updated</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => {
                            return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"><Link to="/org">{row.name}</Link></TableCell>
                                <TableCell numeric>{row.topics}</TableCell>
                                <TableCell numeric>{row.members}</TableCell>
                                <TableCell numeric>{row.updated}</TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
       
      );
  }

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);