import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import ScoreCard from './ScoreCard';
import { useParams } from 'react-router-dom';
const ScoreNote = () => {
    const { tossWin, tossLose, groundName } = useParams()
    const [wicketModal, setWicketModal] = useState(false)
    const [wideModal, setWideModal] = useState(false)
    const [noBallModal, setNoBallModal] = useState(false)
    const [byesModal, setByesModal] = useState(false)
    const [legByesModal, setLegByesModal] = useState(false)
    const [batsmanShow, setBatsmanShow] = useState(false)
    const [bowlerShow, setBowlerSow] = useState(false)
    const [stricker, setStricker] = useState()
    const [nonStricker, setNonStricker] = useState()
    const [bowller, setBowller] = useState()
    const [totalScoreArray, setTotalScoreArray] = useState([])
    const [scoreArray, setScoreArray] = useState([])
    const [batOrBallShow, setBatorBallShow] = useState(true)

    const [batOrBowelSelection, setBatOrBowelSelection] = useState()

    const [teamScore, setTeamScore] = useState(0)

    const [battingTeam, setBattingTeam] = useState()
    const [bowwllingTeam, setBowellingTeam] = useState()

    const handleClose = () => {

    }
    const batsmenSaveChangeHandler = () => {
        if (stricker && nonStricker) {
            setBatsmanShow(false)
            setBowlerSow(true)
        }
    }


    //Wicket Handlers
    const wicketModalshow = () => {
        setWicketModal(true)
    }
    const wicketModalCLose = () => {
        setWicketModal(false)
    }

    //Wide Handlers
    const wideModalShow = () => {
        setWideModal(true)
    }
    const wideModalClose = () => {
        setWideModal(false)
    }

    //No Ball Handlers
    const noBallModalShow = () => {
        setNoBallModal(true)
    }
    const noBallModalClose = () => {
        setNoBallModal(false)
    }

    //const Byes Handlers
    const byesModalShow = () => {
        setByesModal(true)
    }
    const byesModalClose = () => {
        setByesModal(false)
    }

    //Leg Byes Handlers
    const legByesModalShow = () => {
        setLegByesModal(true)
    }
    const legByesModalClose = () => {
        setLegByesModal(false)
    }

    useEffect(() => {
        console.log(teamScore)
    }, [teamScore])
    return (
        <>
            <ScoreCard stricker={stricker} nonStricker={nonStricker} bowller={bowller} tossWin={tossWin} tossLose={tossLose} batOrBowelSelection={batOrBowelSelection}
                battingTeam={battingTeam} bowwllingTeam={bowwllingTeam} groundName={groundName}
            />
            <div className='container-lg container-fluid p-1'>
                <div className="row ms-1 me-1 d-flex justify-content-center">
                    <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}
                        onClick={() => {
                            setTeamScore(prev => prev + 0)
                        }}
                    >0</div>
                    <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}
                        onClick={() => {
                            setTeamScore(prev => prev + 1)
                        }}
                    >1</div>
                    <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}
                        onClick={() => {
                            setTeamScore(prev => prev + 2)
                        }}
                    >2</div>
                    <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}
                        onClick={() => {
                            setTeamScore(prev => prev + 4)
                        }}
                    >4</div>
                    <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}
                        onClick={() => {
                            setTeamScore(prev => prev + 6)
                        }}
                    >6</div>
                </div>
                <div className="row d-flex justify-content-center mt-4 gap-2">
                    <div className="box col-2 border d-flex justify-content-center rounded-pill"
                        onClick={wicketModalshow}


                    >Wicket</div>
                    <div className="box col-2 border d-flex justify-content-center rounded-pill"
                        onClick={wideModalShow}
                    >Wide</div>
                    <div className="box col-2 border d-flex justify-content-center rounded-pill"
                        onClick={noBallModalShow}
                    >No Ball</div>
                    <div className="box col-2 border d-flex justify-content-center rounded-pill"
                        onClick={byesModalShow}
                    >Byes</div>
                    <div className="box col-2 border d-flex justify-content-center rounded-pill"
                        onClick={legByesModalShow}
                    >Leg Byes</div>
                </div>
                <Modal
                    show={wicketModal}
                    onHide={wicketModalCLose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Wicket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="box"></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={wicketModalCLose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={wideModal}
                    onHide={wideModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Wide</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row d-flex justify-content-center w-75 ms-5">
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}

                            >1</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>2</div>
                            <div className="box number d-flex justify-content-center g-2 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>4</div>
                            <div className="box col-6 border d-flex justify-content-center rounded-pill m-3"

                            >Wicket</div>

                        </div>
                    </Modal.Body>

                </Modal>
                <Modal
                    show={noBallModal}
                    onHide={noBallModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Noball</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row d-flex justify-content-center w-100 ms-3">
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>1</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>2</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>4</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>6</div>
                            <div className="col-12  d-flex justify-content-center mt-4 gap-2">
                                <div className="box col-6 border d-flex justify-content-center rounded-pill p-1 ps-4 pe-4">Run Out</div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={noBallModalClose}>
                            Close
                        </Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={byesModal}
                    onHide={byesModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Byes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row d-flex justify-content-center w-100 ms-3">
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>1</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>2</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>4</div>
                            <div className="col-9  d-flex justify-content-center mt-4 gap-2">
                                <div className="box col-6 border d-flex justify-content-center rounded-pill p-1 ps-4 pe-4">Run Out</div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={byesModalClose}>
                            Close
                        </Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={legByesModal}
                    onHide={legByesModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Leg Byes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row d-flex justify-content-center w-100 ms-3">
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>1</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>2</div>
                            <div className="box number d-flex justify-content-center g-2 me-5 align-items-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", borderRadius: "50%" }}>4</div>
                            <div className="col-9  d-flex justify-content-center mt-4 gap-2">
                                <div className="box col-6 border d-flex justify-content-center rounded-pill p-1 ps-4 pe-4">Run Out</div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={legByesModalClose}>
                            Close
                        </Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>


                {/* Chosse Bating or Bowlling Model*/}
                <Modal show={batOrBallShow}
                    onHide={handleClose}
                    size='lg'
                    centered
                >
                    <Modal.Header >
                        <Modal.Title>
                            <span style={{ color: "red" }}>({tossWin.toUpperCase()}) </span>  Won the Toss
                            <br />

                            Chosse Batting Or Feilding  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex gap-3 justify-content-center'>
                        <div className='box col-4 d-flex justify-content-center p-2'
                            style={{ backgroundColor: batOrBowelSelection === "Bat" ? "red" : "teal" }}
                            onClick={() => {
                                setBatOrBowelSelection("Bat")
                                setBattingTeam(tossWin)
                                setBowellingTeam(tossLose)
                            }}
                        >Bat</div>
                        <div className='box col-4 d-flex justify-content-center p-2'
                            style={{ backgroundColor: batOrBowelSelection === "Bowel" ? "red" : "teal" }}
                            onClick={() => {
                                setBatOrBowelSelection("Bowel")
                                setBattingTeam(tossLose)
                                setBowellingTeam(tossWin)
                            }}
                        >Bowel</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={
                            () => {
                                setBatorBallShow(false)
                                setBatsmanShow(true)
                            }
                        }>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Batsman Model*/}
                <Modal show={batsmanShow}
                    onHide={handleClose}
                    size='lg'
                    centered
                >
                    <Modal.Header >
                        <Modal.Title>

                            <span style={{ color: "orange" }}>({battingTeam && battingTeam.toUpperCase()})</span>
                            &nbsp; Enter Batsmen Names </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id='inputContainer'>
                        Stricker:
                        <input type="text" className='form-control mb-2'
                            onChange={(e) => {
                                setStricker(e.target.value)
                            }}
                        />
                        Non Stricker:
                        <input type="text" className='form-control mb-2'
                            onChange={(e) => {
                                setNonStricker(e.target.value)
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={
                            () => {
                                batsmenSaveChangeHandler()
                            }
                        }>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Bowller Model*/}
                <Modal show={bowlerShow}
                    onHide={handleClose}
                    size='lg'
                    centered
                >
                    <Modal.Header >
                        <Modal.Title>
                            <span style={{ color: "orange" }}>({bowwllingTeam && bowwllingTeam.toUpperCase()})</span>
                            Enter Bowller Name </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id='inputContainer'>
                        Bowller Name:
                        <input type="text" className='form-control mb-2'
                            onChange={(e) => {
                                setBowller(e.target.value)
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={
                            () => {
                                if (bowller) {
                                    setBowlerSow(false)
                                }
                            }
                        }>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>



            </div>
        </>
    )
}

export default ScoreNote;
