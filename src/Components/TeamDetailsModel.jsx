import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ScoreNote from './ScoreNote';
import { Link } from 'react-router-dom';

const TeamDetailsModel = () => {
    const [show, setShow] = useState(true);
    const [homeTeamName, setHomeTeamName] = useState('')
    const [awayTeamName, setAwayTeamName] = useState('')
    const [groundName, setGroundName] = useState('')
    const [tosshow, setTossShow] = useState(false)
    const [headOrTail, setHeadOrTail] = useState()
    let tossWinner;
    let tossLose;

    const handleClose = () => {
        setShow(false)
        window.location.href = "/"
    };
    const handleShow = () => {
        setShow(true);
    }
    const handleBeforeTose = () => {
        if (homeTeamName && awayTeamName && groundName) {
            setShow(false)
            setTossShow(true)
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
                <Modal.Body>
                    Home Team Name:
                    <input type="text" className='form-control mb-3' required
                        value={homeTeamName}
                        onChange={(e) => {
                            setHomeTeamName(e.target.value)
                        }}
                    />
                    Away Team Name:
                    <input type="text" className='form-control mb-3' required
                        value={awayTeamName}
                        onChange={(e) => {
                            setAwayTeamName(e.target.value)
                        }}
                    />
                    Ground Name:
                    <input type="text"
                        value={groundName}
                        className='form-control mb-3' required
                        onChange={(e) => {
                            setGroundName(e.target.value)
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={
                        handleBeforeTose
                    }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={tosshow}
                onHide={() => {
                    setTossShow(false)
                    setShow(true)
                }}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Choose Away Team Head Or Tail </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row d-flex justify-content-center gap-3">
                        <div className="box col-1 d-flex justify-content-center align-items-center"

                            style={{
                                borderRadius: "50%", width: "50px", height: "50px",
                                backgroundColor: headOrTail === 'H' ? "red" : "rgb(7, 197, 7)"

                            }}
                            onClick={(e) => {
                                setHeadOrTail("H")
                            }}

                        >
                            H
                        </div>
                        <div className="box col-1 d-flex justify-content-center align-items-center" style={{
                            borderRadius: "50%", width: "50px", height: "50px",
                            backgroundColor: headOrTail === 'T' ? "red" : "rgb(7, 197, 7)"
                        }}
                            onClick={(e) => {
                                setHeadOrTail("T")

                            }}

                        >
                            T
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setTossShow(false)
                        setShow(true)
                    }}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => {
                            let randomToss = Math.floor(Math.random() * 2)
                            if (randomToss == 0 && headOrTail === "H") {
                                tossWinner = awayTeamName
                                tossLose = homeTeamName
                            }
                            else if (randomToss == 1 && headOrTail === "T") {
                                tossWinner = awayTeamName
                                tossLose = homeTeamName
                            }
                            else {
                                tossWinner = homeTeamName
                                tossLose = awayTeamName
                            }
                            window.location.href = `/scorenote/${tossWinner}/${tossLose}/${groundName}`
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TeamDetailsModel
