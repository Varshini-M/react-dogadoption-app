import React, { useState ,useEffect} from 'react';
import Adoptathongif from '../assets/ADOPTATHON.gif';
import Slot from './SlotComponent';
import { Form, Button, Alert } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { userDataActions } from '../store/indexstore';
function Adoptathon() {
    let adoptathonDetails = useSelector((state)=>state.userData);
    const dispatch = useDispatch();
    const [alertvisible, setAlertvisible] = useState(false);
    const [acceptalertvisible, setAcceptAlertvisible] = useState(false);
    const [rejectalertvisible, setRejectAlertvisible] = useState(false);
    const [slotvisible, setSlotVisible] = useState(false);
    const [response, setResponse] = useState();
    const formHandler = (event) => {
        adoptathonDetails = dispatch(userDataActions.concatenate({name:event.target.name,value:event.target.value}));
    };
    const deleteUserSlot = async () => {
        const url = 'http://localhost:8400/v1/deleteUserSlot';
        let requestObject = { email: adoptathonDetails.email }
        const settings = {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        let data = await fetch(url, settings);
        let json = await data.clone().json();
        setResponse(json);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (adoptathonDetails.name.length === 0 || adoptathonDetails.email.split('@').length === 1) {
            setAlertvisible(true);
            setSlotVisible(false);
        } else {
            setAcceptAlertvisible(true);
            setSlotVisible(true);
        }
    };
    const rejectHandler = (event) => {
        event.preventDefault();
        if (adoptathonDetails.name.length === 0 || adoptathonDetails.email.split('@').length === 1) {
            setAlertvisible(true);
            setSlotVisible(false);
        } else {
            setRejectAlertvisible(true);
            deleteUserSlot();
            dispatch(userDataActions.clearInput());
            setResponse();
        }
    };

    useEffect(()=>{
        let rejectTimeout;
        if(rejectalertvisible === true){
            rejectTimeout = setTimeout(()=>{setRejectAlertvisible(false)},2000);
        }
        return () => {
            clearTimeout(rejectTimeout);
        };
    },[rejectalertvisible]);
    
    const SlotComponent = () => {
        if (slotvisible) {
            setTimeout(() => setAcceptAlertvisible(false), 2000);
            return <Slot slotVisibleData={slotvisible} slotVisibleSetter={(val)=>setSlotVisible(val)}/>;
        } else {
            return <React.Fragment></React.Fragment>;
        }
    };
    return (
        <React.Fragment>
            <div className='App-Adoptathon'>
                <img src={Adoptathongif} alt='Adoptathongif' className='App-Poster' />
                <div className='App-Adoptathon-Details'>
                    <br />
                    <br />
                    <br />
                    <p><b>Register for the Mega Event!!!!</b></p>
                    <p className='textSize'>Upon selecting accept, available slots can be booked.</p>
                    <p className='textSize'>Individual meeting links will be sent via email to the registered participants.</p>
                    <p className='textSize'>To deregister yourself from the event. Enter your details and Click Reject</p>
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" value={adoptathonDetails.name} placeholder="Enter Name" size='sm' onChange={formHandler} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' type="email" value={adoptathonDetails.email} placeholder="abc@gmail.com" size='sm' onChange={formHandler} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <div className='App-Button'>
                            <Button variant='success' type='submit' onClick={submitHandler}>Accept</Button>
                            <p>&nbsp;</p>
                            <Button variant='danger' type='submit' onClick={rejectHandler}>Reject</Button>
                        </div>
                        <br />
                        <Alert show={alertvisible} variant='danger' transition={false} onClose={() => setAlertvisible(false)} dismissible>Please Enter valid Details!</Alert>
                        <Alert show={acceptalertvisible} variant='warning' transition={false} onClose={() => setAcceptAlertvisible(false)} dismissible>You have Successfuly registered for the event!Kindly select the slot based on your availability.</Alert>
                        <Alert show={rejectalertvisible} variant='warning' transition={false} onClose={() => setRejectAlertvisible(false)} dismissible>Your registration has been cancelled for the slot {response!==undefined?response.slot:''}.</Alert>
                        <SlotComponent />
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Adoptathon;