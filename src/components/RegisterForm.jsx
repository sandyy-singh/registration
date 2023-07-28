import React from 'react'
import "./RegisterForm.scss"


const RegisterForm = () => {
  return (

        <div className="register">
            <div className="main">
                <div className="part1"></div>
                <div className="part2">
                    <h1 className="Welcome">Welcome to Carbon Credit Program</h1>
                    <h3 className="head"> Register as Farmer</h3>
                    <form className="form-section">
                        <div className="first-sec">
                            <div className="sec1">
                                <div>
                                    <label for="Name">Name </label>
                                    <input type="text" id="Name" name="Name" value="" />
                                </div>
                                <div>
                                    <label for="District">District</label>
                                    <input type="text" id="District" name="Name" value="" />
                                </div>
                                <div>
                                    <label for="sowing">Crops sowing(current) </label>
                                    <input type="text" id="sowing" name="District" value="" />
                                </div>
                            </div>
                            <div className="sec1">
                                <div>
                                    <label for="Phone">Phone no</label>
                                    <input type="text" id="Phone" name="Phone" value="" />
                                </div>
                                <div>
                                    <label for="Village">Village</label>
                                    <input type="text" id="Village" name="Village" value="" />
                                </div>
                                <div>
                                    <label for="Cover">Cover Crops(if any)</label>
                                    <input type="text" id="Cover" name="Cover" value="" />
                                </div>
                            </div>
                            <div className="sec1">
                                <div>
                                    <label for="State">State</label>
                                    <input type="text" id="State" name="State" value="" />
                                </div>

                                <div>
                                    <label for="Total-land">Total land of Area</label>
                                    <input
                                        type="text"
                                        id="Total-land"
                                        name="Total-land"
                                        value=""
                                    />
                                </div>

                                <div>
                                    <label for="html">Intercrops (if any)</label>
                                    <input type="text" id="html" name="Name" value="" />
                                </div>
                            </div>
                        </div>
                        <div className="first-sec">
                            <div className="sec1">
                                <div>
                                    <label for="planted">
                                        <p>Does the Area of farming have </p>
                                        <p>cropped/planted with nitrogen-fixing </p>species (e.g.
                                        dhencha, lentils, etc)?
                                    </label>
                                    <input type="text" id="planted" name="planted" value="" />
                                </div>
                                <div>
                                    <label for="Geographic">
                                        <p>Geographic Co-ordinates of the</p> Project Location
                                    </label>
                                    <input type="text" id="Geographic" name="Geographic" value="" />
                                </div>
                            </div>

                            <div className="sec2">
                                <div>
                                    <label for="improved">
                                        <p>Does the farming have improved</p> Village Practices
                                    </label>
                                    <input type="text" id="improved" name="improved" value="" />
                                </div>

                                <div>
                                    <label for="Objective">Objective of the farming project</label>
                                    <input type="text" id="Objective" name="Objective" value="" />
                                </div>
                            </div>

                            <div className="sec3">
                                <div>
                                    <label for="farming-area">
                                    Does the area (farming)have agroforestry
                                    </label>

                                    <div id="farming-area">

                                        <div>
                                            <input
                                                className="radio"
                                                type="radio"
                                                id="Yes"
                                                name="farming-area"
                                                value="Yes"
                                            />
                                            <label for="Yes">Yes</label>
                                        </div>
                                        <div>
                                            <input
                                                className="radio"
                                                type="radio"
                                                id="NO"
                                                name="farming-area"
                                                value="NO"
                                            />
                                            <label for="NO">NO</label>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default RegisterForm
