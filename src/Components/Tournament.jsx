import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Tournament = () => {


    const [show, setShow] = useState(true);
    const [noOftemas, setNoOfTeams] = useState(0)
    const [inputValues, setInputValues] = useState([]);
    const [Inputs, setInputs] = useState([]);
    const [over, setOver] = useState(0)
    let noOfMatches = 0;
    const [finalFixture, setFinalFixture] = useState([])



    const [fixtureModelShow, setFixtureModelShow] = useState(false)
    useEffect(() => {
        const newInputs = Array.from({ length: noOftemas }).map((_, index) => (
            <input key={index}
                type="text"
                className='form-control mt-2 mb-2'
                placeholder={`Team ${index + 1}`}
                onChange={(e) => handleInputChange(e, index)}
            />
        ));

        setInputs(newInputs);
    }, [noOftemas]);

    const handleInputChange = (e, index) => {
        let values = e.target.value;
        let valuesarr = inputValues
        valuesarr[index] = values
        setInputValues(valuesarr)
    };
    const handleClose = () => {
        setShow(false)
        window.location.href = "/"
    };
    const handleTeamName = () => {
        if (inputValues.length > 0 && over > 0) {
            setShow(false)
            setFixtureModelShow(true)


            noOfMatches = inputValues.length * (inputValues.length - 1)
            let teamfixture = []
            for (let i = 0; i < inputValues.length; i++) {
                for (let j = 0; j < inputValues.length; j++) {
                    if (i != j) {
                        teamfixture.push(inputValues[i] + " Vs " + inputValues[j])
                    }
                }
            }
            //Fixture Part
            let set = new Set()
            for (let i = 0; i < noOfMatches; i++) {
                let randomNumber = Math.floor(Math.random() * noOfMatches);
                if (set.has(randomNumber)) {
                    i = i - 1
                }
                else {
                    set.add(randomNumber)
                }
            }
            let k = 0
            for (let i of set) {
                setFinalFixture(prevFixture => [...prevFixture, teamfixture[i]]);

            }
        }
    }
















    return (
        <div>
            <Modal show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter Match Details </Modal.Title>
                </Modal.Header>
                <Modal.Body id='inputContainer'>
                    Enter No Of Teams:
                    <input type="text"
                        onChange={(e) => { setNoOfTeams(e.target.value) }}
                        className='form-control mb-2' />
                    {Inputs.length > 0 && `Enter Team Names:`}
                    {
                        Inputs
                    }
                    {

                        Inputs.length > 0 &&
                        <>
                            No Of Overs:
                            <input type="number" className='form-control' onChange={(e) => {
                                setOver(e.target.value)
                            }} />
                        </>


                    }


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={
                        () => {
                            handleTeamName()
                        }
                    }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={fixtureModelShow}
                centered
                size='lg'
            >
                <Modal.Header>
                    <Modal.Title>Tournament Fixtures</Modal.Title>
                </Modal.Header>
                <Modal.Body id=''>
                    <table className='table table-bordered text-center'>
                        <thead>
                            <tr>
                                <th>S. No</th>
                                <th>Match</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                finalFixture.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>

                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={
                            () => window.location.href = "scorenote"
                        }
                    >
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Tournament
