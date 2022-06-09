import React from "react"

function FormComponent(props) {
        return (
            <main>
                <form>
                    <input 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange}
                    placeholder="First Name" 
                    />
                    <br />
                    <input 
                    name="lastName" 
                    value={props.data.lastName} 
                    onChange={props.handleChange}
                    placeholder="Last Name" 
                    />
                    <br />
                    <input 
                    name="age" 
                    value={props.data.age} 
                    onChange={props.handleChange}
                    placeholder="Age" 
                    />
                    <br />
                    <hr />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Male"
                            check={props.data.gender === "male"}
                            onChange={props.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Female"
                            check={props.data.gender === "female"}
                            onChange={props.handleChange}
                        /> Female
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Other"
                            check={props.data.gender === "other"}
                            onChange={props.handleChange}
                        /> Other
                    </label>
                    <br />
                    <hr />
                    <select 
                    value={props.data.destination} 
                    name="destination"
                    onChange={props.handleChange}
                    > 
                        <option value="">-- Choose a Destination --</option>
                        <option value="Germany">Germany</option>
                        <option value="Norway">Norway</option>
                        <option value="North Pole">North Pole</option>
                        <option value="South Pole">South Pole</option>
                    </select>
                    
                    <hr />
                    
                    <label> 
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={props.handleChange}
                            checked={props.data.isVegan}
                        /> Vegan?
                        <br />
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={props.handleChange}
                            checked={props.data.isKosher}
                        /> Kosher?
                        <br />
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={props.handleChange}
                            checked={props.data.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                 <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination} </p>
                <p> Your dietary restrictions: </p>
                <p> Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                <p> Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
                <p> Lactose Fee: {props.data.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
}

export default FormComponent