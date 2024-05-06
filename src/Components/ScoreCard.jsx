import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiSolidCricketBall } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";
import cskLogo from '../assets/csk.png'
import miLogo from '../assets/mi.png'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ScoreCard = ({stricker,nonStricker,bowller,tossWin,tossLose,batOrBowelSelection,battingTeam,bowwllingTeam,groundName}) => {
   
    return (
        <>
            <div className='container-fluid  p-1 container-lg'>
                <div className="row border-top border-start border-end ms-1 me-1 p-1">
                    <div className="col-12  d-flex justify-content-center p-1">
                        Live From {groundName}
                    </div>
                    <div className="col-12  d-flex justify-content-center p-1">
                        {tossWin} Elected to {batOrBowelSelection && `${batOrBowelSelection} First`}  
                    </div>

                </div>
                <div className="row border-end border-start border-bottom ms-1 me-1 d-flex p-2">
                    <div className="col-1 d-flex justify-content-center">
                        <img src={cskLogo} alt="" width={100} height={100} />
                    </div>
                    <div className="col-2">
                        <div className="row d-flex flex-column ">
                            <div className="col-12 border">
                                <div className="row p-1 d-flex justify-content-around bg-black text-white">
                                    {battingTeam && battingTeam.toUpperCase()} / {bowwllingTeam && bowwllingTeam.toUpperCase()}
                                </div>
                            </div>
                            <div className="col-12 border d-flex flex-column bg-body-secondary">
                                <div className="row p-1 ms-2">
                                    CRR: 0.0
                                </div>
                                <div className="row p-1 ms-2 pb-2">
                                    RRR: 0.0
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 border">
                        <div className="row border-bottom">
                            <div className="col-7 d-flex justify-content-center  p-1 align-items-center border-end ">
                                123 / 4
                            </div>
                            <div className="col-5  d-flex justify-content-center align-items-center">
                                (1.5)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center p-1 align-items-center gap-3">
                                <BiSolidCricketBall style={{ color: "blue" }} />  {bowller} 1 / 0
                            </div>
                            <div className="col-12 d-flex g-1">
                                <div className="col-2 border d-flex justify-content-center align-items-center">0</div>
                                <div className="col-2 border d-flex justify-content-center align-items-center bg-danger text-white">6</div>
                                <div className="col-2 border d-flex justify-content-center align-items-center bg-success text-white">4</div>
                                <div className="col-2 border d-flex justify-content-center align-items-center
                                bg-danger text-white">6</div>
                                <div className="col-2 border d-flex justify-content-center align-items-center">1</div>
                                <div className="col-2 border d-flex justify-content-center align-items-center
                                bg-success text-white">4</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 border">
                        <div className="row d-flex align-items-center border-bottom" style={{ height: "50px" }}>
                            <div className="col-10 p-1 ps-4">
                                <GiCricketBat style={{ color: "green" }} />   {stricker}
                            </div>
                            <div className="col-2" style={{ fontWeight: "600" }}>12 <span style={{ fontSize: "13px" }}>2</span></div>
                        </div>
                        <div className="row d-flex align-items-center" style={{ height: "50px" }}>
                            <div className="col-10  p-1 ps-4">{nonStricker}</div>
                            <div className="col-2" style={{ fontWeight: "600" }}>6 <span style={{ fontSize: "13px" }}>1</span></div>
                        </div>

                    </div>
                    <div className="col-1  d-flex justify-content-center align-items-center">
                        <img src={miLogo} alt="" width={100} height={70} />
                    </div>

                </div>


            </div>
           

           


        </>

    )

}

export default ScoreCard;
