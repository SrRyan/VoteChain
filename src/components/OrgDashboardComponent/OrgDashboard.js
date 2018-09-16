import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import "./OrgDashboard.css"

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
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];  

class OrgDashboard extends Component {


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
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell numeric>{row.calories}</TableCell>
                                <TableCell numeric>{row.fat}</TableCell>
                                <TableCell numeric>{row.carbs}</TableCell>
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

OrgDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrgDashboard);