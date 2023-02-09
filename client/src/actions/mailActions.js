import { MAIL_SUCCESS,} from '../actions/types';
import axios from 'axios';




export const sendMail = ({   from, to, subject}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body 

    const body = JSON.stringify({  from, to, subject });

    axios.post('/api/mail', body, config)
        .then(res => dispatch({
            type: MAIL_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                type: MAIL_FAIL
            })
        })

}
