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


import moment from 'moment';
import SendMail from './SendMail';


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

function createData(fullName, email, phoneNo, leadId, make, model, year, vehicleType, recievedDate, actions) {
    return { fullName, email, phoneNo, leadId, make, model, year, vehicleType, recievedDate, actions };
}

class LeadClient extends Component {


    componentDidMount() {
        this.props.getLeads();
    }
    
   


    render() {
        const { leads } = this.props.lead;

        return (
            <Container sx={{ width: 1400, height:400 }}  >
                <TableContainer component={Paper}  >
                    <Table sx={{ minWidth: 1600   }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>FullName </StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Phone NO&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Lead Id&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Make&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Model&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Year&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Vehicle Type&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Recieved Date&nbsp;</StyledTableCell>
                                <StyledTableCell sx={{ width: 300 }} align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leads.map((row) => (

                                <StyledTableRow key={row.fullName}>
                                    
                                    {row.isleades ?  
                                        <>
                                        
                                            <StyledTableCell component="th" scope="row">
                                                {row.fullname}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                                            <StyledTableCell align="center">{row.phoneno}</StyledTableCell>

                                            <StyledTableCell align="center">{row._id}</StyledTableCell>
                                            <StyledTableCell align="center">{row.make}</StyledTableCell>
                                            <StyledTableCell align="center">{row.model}</StyledTableCell>
                                            <StyledTableCell align="center">{row.year}</StyledTableCell>
                                            <StyledTableCell align="center">{row.vehicletype}</StyledTableCell>
                                            <StyledTableCell align="center">{moment(row.recieveddate).format('YYYY-MM-DD')}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Stack spacing={2} direction="row">
                                                    
                                                        <SendMail email={row.email} />
                                                    
                                                    <Button variant="contained" sx={{ width: 150, backgroundColor:'black' , borderRadius:50 }} >Send Message</Button>
                                                    <Button variant="contained" sx={{ width: 80 , backgroundColor:'black', borderRadius:50 }} >Orange</Button>
                                                    <Button variant="contained" sx={{ width: 160 , backgroundColor:'black', borderRadius:50 }}>update Status</Button>
                                                    <Button variant="contained" sx={{ width: 80 , backgroundColor:'black', borderRadius:50 }}>update</Button>
                                                </Stack>
                                            </StyledTableCell>
                                        </>
                                         : '' }



                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        );
    }
}

LeadClient.propTypes = {
    getLeads: PropTypes.func.isRequired,
    lead: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    lead: state.lead
})


export default connect(mapStateToProps, { getLeads })(LeadClient);