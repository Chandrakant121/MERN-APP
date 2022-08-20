import { useState } from 'react'
import Navbar from './Navbar'
import "./Style.css"


function Register() {
	const user = JSON.parse(localStorage.getItem("signupdetail")) || []
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	async function registerUser(event) {
		event.preventDefault()
		const res = await fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
		const data = await res.json();
		let userinfo = {
			name: name,
			email: email
		}
		user.push(userinfo);
		localStorage.setItem("signupdetail", JSON.stringify(user))
		console.log(data)

		if (name != "" && email != "" && password != "") {
			alert("Register")
			setName("")
			setEmail("")
			setPassword("")
			window.location.href = '/login'
		}
		else {
			alert("Plese Fill all the details")
		}
	}

	return (
		<div>
			<Navbar></Navbar>
			<div className='login'>
				<h1>Register</h1>
				<form onSubmit={registerUser}>
					<div>
						<input
							className='inputdiv'
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Name"
						/>
					</div>
					<div>
						<input
							className='inputdiv'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="Email"
						/>
					</div>

					<div>
						<input
							className='inputdiv'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Password"
						/>
					</div>
					<input className='inputdivbtn' type="submit" value="Register" />
				</form>
			</div>
		</div>
	)
}

export default Register