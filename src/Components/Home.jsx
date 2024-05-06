import React from 'react'
import csklogo from '../assets/csk.png'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
const Home = () => {
    return (
        <div>
            <div className="container-lg container-fluid border">
                <div className="navbar1 d-flex justify-content-between">
                    <div className="logo d-flex align-items-center">
                        <img src={csklogo} alt="" style={{
                            width: "90px"
                        }} />
                        <h4 className='head'>Criczzzzz...</h4>
                    </div>
                    <div className="nav-items d-flex align-items-center gap-5 me-3">
                        <div>Home</div>
                        <div>About</div>
                        <Dropdown>
                            <Dropdown.Toggle variant='' id="dropdown-basic" style={{ color: "rgb(47, 98, 207)" }}>
                                Matches
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/teamdetails">
                                    Single Match
                                </Dropdown.Item>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' id="nested-dropdown-basic" style={{ color: "rgb(47, 98, 207)" }}>
                                            Tournaments
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/oldtournament">
                                                Old Tournament
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/newtournament">
                                                New Tournament
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                              
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
