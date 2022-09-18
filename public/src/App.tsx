import React from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Chat from "./pages/Chat"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Chat />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	)
}

export default App
