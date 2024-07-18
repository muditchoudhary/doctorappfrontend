import React, { useState } from "react";


function BookAppointment() {

    const [doctors, setDoctors]=useState('')
    const [date, setDate]=useState('')
    const [time, setTime]=useState('')

    function bookAppoiSubmit(){
        if (!doctors || !date || !time){
            alert('Please select all fileds')
        }else {
            console.log(doctors, date, time)
        }
    }

    return (
        <>
    
    <div className="container book-appointmentwp">
        <div className="text-center mt-5 mb-3">
            <h3>Book a Appointment</h3>
        </div>
        <form>
            <div className="row mt-5">
                <div className="col-md-4 mb-3">
                    <label for="basic-url" class="form-label">Select Doctors</label>
                    <select class="form-select" aria-label="Default select example" onChange={(e)=>{setDoctors(e.target.value)}}>
                    <option selected>Select Doctors</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="basic-url" class="form-label">Select Date</label>
                    <select class="form-select" aria-label="Default select example" onChange={(e)=>{setDate(e.target.value)}}>
                    <option selected>Select Date</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="basic-url" class="form-label">Select Time</label>
                    <select class="form-select" aria-label="Default select example" onChange={(e)=>{setTime(e.target.value)}}>
                    <option selected>Select Time</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                <div className="mt-3">
                    <button className="cmnbtn" type="submit" onClick={bookAppoiSubmit}>Submit</button>
                </div>
            </div>
        </form>
    </div>
    
        </>
    );
}

export default BookAppointment;