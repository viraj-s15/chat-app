import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Login = () => {
	const handleSubmit = (event: any) => {
		event.preventDefault()
		alert("form")
	}
	return (
		<Form>
			<form
				onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
					handleSubmit(event)
				}}
			>
				<Container>
					<h3>Login</h3>
					<input
						type='text'
						placeholder='Username'
						name='username'
						onChange={(e) => handleSubmit(e)}
						autoComplete='on'
					/>
					<input
						type='password'
						placeholder='Password'
						name='password'
						onChange={(e) => handleSubmit(e)}
						autoComplete='on'
					/>
					<button type='submit'>Log in</button>
					<span>
						Not a user? <Link to='/register'>Register</Link> here
					</span>
				</Container>
			</form>
		</Form>
	)
}

export default Login

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
	font-size: 2rem;
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
		outline: none;
		background-color: rgba(255, 255, 255, 0.2);
		border: none;
		border-radius: 10px;
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
