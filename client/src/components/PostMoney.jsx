
import React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import '../components/PostMoney.css'


const PostMoney = () => {

    const [form, setForm] = useState({
        USD: "", senderName: "", receiverName: "", purpose: ""
    })
    let name, value;
    const handleInput = (e) => {

        name = e.target.name
        value = e.target.value

        setForm({ ...form, [name]: value })

    }
    const postData = async (e) => {

        e.preventDefault()

        const { USD, senderName, receiverName, purpose } = form

        const res = await fetch("/postMoney", {
            method: "POST",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                USD, senderName, receiverName, purpose
            })
        });


        const data = await res.json()

        if (data.status === 400 || !data) {
            window.alert("Invalid Registration")
            console.log("invalid registration")
        } else {
            window.alert("Registration successfull")
            console.log("successfull registration")
        }
    };
    return (
        <>
            <div className="post-container">
               
                <button id='records-button'>
                    <Link id="GetAllRecords" to="/GetAllRecords">
                        GET ALL RECORDS
                    </Link>
                <h2 className="pay-hind"> PAY HIND </h2>
                </button>

                <form className="form-container" method="POST">
                    <label>
                        Enter USD &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp;
                        <input
                            type="USD"
                            name="USD"
                            value={form.USD}
                            onChange={handleInput}
                            placeholder="Enter USD" />
                    </label>
                    <br />

                    <label>
                        Amount in INR 
                        &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp; 
                        <p className="x" id="amount-INR" >{`${form.USD * 80}`} </p>
                    </label>
                    <br />

                    <label>
                        Enter sender name &nbsp; : &nbsp;
                        <input
                            type="senderName"
                            name="senderName"
                            value={form.senderName}
                            onChange={handleInput}
                            placeholder="Enter sender name" />
                    </label>
                    <br />

                    <label>
                        Enter receiver name : &nbsp;
                        <input
                            type="receiverName"
                            name="receiverName"
                            value={form.receiverName}
                            onChange={handleInput}
                            placeholder="Enter receiver name" />
                    </label>
                    <br />


                    <label>
                        Purpose &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; :
                         &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 
                        <select className="purpose"
                            type="purpose"
                            name="purpose"
                            value={form.purpose}
                            onChange={handleInput}
                            placeholder="Enter purpose"
                        >
                            <option> SELECT...</option>
                            <option> business </option>
                            <option> health </option>
                            <option> tour </option>
                            <option> study </option>
                        </select>
                    </label>

                    <br />

                    <input type="submit" name="submit-form" id="submit-button" className="form-submit"
                        value="Send Money" onClick={postData} />

                </form>

            </div>
        </>
    )

}

export default PostMoney