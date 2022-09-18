import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import styled from "styled-components"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from "../utils/APIRouting"

const Register = () => {
	interface formState {
		username: string
		password: string
		email: string
		confirmPassword: string
	}

	const navigate = useNavigate()

	const [formValue, setFormValues] = useState<formState>({
		username: "",
		password: "",
		email: "",
		confirmPassword: ""
	})

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (handleValidate()) {
			const { password, email, username } = formValue
			const { data } = await axios.post(registerRoute, {
				username,
				password,
				email
			})
			if (data.status) {
				localStorage.setItem("chat-app-user", JSON.stringify(data.user))
				navigate("/")
			} else {
				toast.error(data.msg, toastSettings)
			}
		}
	}

	const toastSettings: any = {
		position: "top-right",
		autoclose: 4000,
		pauseOnHover: true,
		draggable: true,
		theme: "dark",
		closeOnClick: true
	}

	const handleValidate = () => {
		const { password, email, confirmPassword, username } = formValue
		if (password.toString() !== confirmPassword.toString()) {
			toast.error("Passwords do not match", toastSettings)
			return false
		}
		if (
			password.toString().length < 8 ||
			confirmPassword.toString().length < 8
		) {
			toast.warn(
				"Password should contain more than 8 characters",
				toastSettings
			)
			return false
		}
		if (
			username.toString() === "" ||
			password.toString() === "" ||
			email.toString() === "" ||
			confirmPassword.toString() === ""
		) {
			toast.error("All the fields are required", toastSettings)
			return false
		}
		if (username.toString().length <= 3) {
			toast.error("Username must be greater than 3 characters", toastSettings)
			return false
		}
		return true
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValue, [event.target.name]: [event.target.value] })
	}
	return (
		<>
			<Form>
				<form
					onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
						handleSubmit(event)
					}}
				>
					<Container>
						<h3>Register</h3>
						<input
							type='text'
							placeholder='Username'
							name='username'
							onChange={(e) => handleChange(e)}
							autoComplete='on'
						/>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={(e) => handleChange(e)}
							autoComplete='on'
						/>
						<input
							type='password'
							placeholder='Password'
							name='password'
							onChange={(e) => handleChange(e)}
							autoComplete='on'
						/>
						<input
							type='password'
							placeholder='Confirm password'
							name='confirmPassword'
							onChange={(e) => handleChange(e)}
							autoComplete='on'
						/>
						<button type='submit'>Submit</button>
						<span>
							Already a user? <Link to='/login'>Login</Link> here
						</span>
					</Container>
				</form>
			</Form>
			<ToastContainer />
		</>
	)
}

export default Register

const Form = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

const Container = styled.div`
	display: flex;
	padding: 5rem;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
	-webkit-backdrop-filter: blur(10px) saturate(180%);
	backdrop-filter: blur(10px) saturate(250%);
	background-color: rgba(53, 56, 56, 0.7);
	border-radius: 20px;
	flex-direction: column;
	align-items: center;
	gap: 1.2em;
	font-size: 2em;
	justify-content: center;

	h3 {
		letter-spacing: 1px;
		font-weight: 600;
		margin: 0;
	}
	a {
		text-decoration: none;
		color: #b75eeb;
	}
	input {
		border: none;
		border-radius: 20px;
		height: 2.5rem;
		width: 20rem;
		text-align: center;
		outline: none;
		font-size: 1rem;
		background-color: rgba(255, 255, 255, 0.2);
		font-weight: bold;
		color: white;

		&::placeholder {
			color: rgb(5, 5, 5);
			opacity: 0.6;
		}
	}
	span {
		font-size: 1rem;
	}
	button {
		font-size: 1.2rem;
		letter-spacing: 1px;
		outline: none;
		border: none;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 0.5em;
		color: white;
		padding: 0.7rem;
		transition: all 0.15s linear;
		text-align: center;

		&:hover {
			background-color: rgba(255, 225, 255, 0.7);
			color: black;
			cursor: pointer;
		}
	}
`
