import React, { Component } from 'react';

import Agents from './Agents';


import RegisterModel from '../auth/RegisterModel';

class BodyAgent extends Component {
    render() {
        return (



            <>
                <RegisterModel/>
                <Agents />
            </>



        );
    }
}

export default BodyAgent;
