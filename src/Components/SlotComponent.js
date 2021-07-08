import React, { useEffect, useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

function Slot(props) {
    const [elementArr, setElementArr] = useState([]);
    const [response, setResponse] = useState();
    const [slotAlert, setSlotAlert] = useState(false);
    const [successSlotAlert, setSuccessSlotAlert] = useState(false);
    const [slotJson, setSlotJson] = useState();
    const getSlots = async () => {
        const url = 'http://localhost:8400/v1/getSlots';
        let response = await fetch(url);
        const responseJson = await response.clone().json();
        setSlotJson(responseJson);
    };
    const slotSubmitHandler = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8400/v1/updateSlotsAndUser';
        console.log(event.target.name);
        let requestObject = { slot: event.target.name, email: props.adoptathonFormData.email }
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
        getSlots();
    };
    useEffect(() => {
        if (slotJson === undefined) {
            getSlots();
        }
        if (response !== undefined && response.existingUser === 'true') {
            setTimeout(() => setSlotAlert(true), 2000);
        } else if (response !== undefined && response.existingUser === 'false') {
            setTimeout(() => setSuccessSlotAlert(true), 2000);
        }
        let element = [];
        if (slotJson !== undefined && props.slotVisibleData===true) {
            for (let itr in Object.entries(slotJson)) {
                if (parseInt((Object.entries(slotJson))[itr][1]) < 10) {
                    element = [...element, <Button name={(Object.entries(slotJson))[itr][0]} key={itr} size="sm" type='submit' onClick={slotSubmitHandler} variant="outline-secondary">{(Object.entries(slotJson))[itr][0]}</Button>];
                } else {
                    element = [...element, <Button key={itr} size="sm" variant="outline-secondary" disabled>{(Object.entries(slotJson))[itr][0]}</Button>];
                }
            }
            setElementArr(element);
        }
        return () => {
            if (slotAlert === true || successSlotAlert === true) {
                props.adoptathonFormSetter({ name: '', email: '' });
                props.slotVisibleSetter(false);
            }
        }
    }, [slotJson, response, slotAlert, successSlotAlert]);

    return (
        <React.Fragment>
            <div>
                {elementArr}
                <Alert show={slotAlert} variant='warning' transition={false} onClose={() => setSlotAlert(false)} dismissible>You have already registered for the event</Alert>
                <Alert show={successSlotAlert} variant='warning' transition={false} onClose={() => setSuccessSlotAlert(false)} dismissible>You have registered successfully.Check your mail for further updates.</Alert>
            </div>
        </React.Fragment>
    );
}

export default Slot;