const User = require("../model/userModel")

module.exports.register = async (req, res, next) => {
	try {
		const { username, password, email } = req.body
		const checkUsername = await User.findOne({ username })
		if (checkUsername) {
			return res.json({ msg: "Username already in use", status: false })
		}
		const checkEmail = await User.findOne({ email })
		if (checkEmail) {
			return res.json({ msg: "Email already in use", status: false })
		}
		const hashPassword = await bcrypt.hash(password, 10)
		const user = await User.create({
			email,
			username,
			password: hashPassword
		})
		delete user.password
		return res.json({ status: true, user })
	} catch (ex) {
		next(ex)
	}
}
