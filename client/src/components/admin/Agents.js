import * as React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions/leadActions'
// import ItemModal from './ItemModal';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { getAgents } from '../../actions/agentActions';
import moment from 'moment';
import DeleteLead from './DeleteLead';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,


    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(fullName, email, phoneNo, username, isadmin) {
    return { fullName, email, phoneNo, username, isadmin };
}

class Agents extends Component {


    componentDidMount() {
        this.props.getAgents();
    }


    render() {
        const {agents} = this.props.agent;

        return (
            <Container sx={{ width: 1400 }}  >
                <TableContainer component={Paper} sx={{maxHeight:500, maxWidth:1600 , overflowY:'scroll' }}  >
                    <Table sx={{ minWidth: 1000, minHeight:200 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                
                                <StyledTableCell align="center">Username</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Phone NO&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">isAdmin&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Actions&nbsp;</StyledTableCell>
                         
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {agents.map((row) => (

                                <StyledTableRow key={row.fullname}>
                              
                                        
                                        
                                          
                                            <StyledTableCell align="center">{row.username}</StyledTableCell>
                                            <StyledTableCell align="center">{row.email}</StyledTableCell>

                                            <StyledTableCell align="center">{row.phoneno}</StyledTableCell>
                                            <StyledTableCell align="center">{String(row.isadmin)}</StyledTableCell>
                                           
                                            <StyledTableCell align="center">
                                                <Stack spacing={2} direction="row">
                                                    <Button variant="contained" sx={{ width: 150, backgroundColor:'black', borderRadius:50  }}>edit Profile</Button>
                                               </Stack>
                                            </StyledTableCell>
                                        



                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        );
    }
}

Agents.propTypes = {
    getAgents: PropTypes.func.isRequired,
    agent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    agent: state.agent
});


export default connect(mapStateToProps, { getAgents })(Agents);