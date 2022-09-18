const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 3,
		max: 25,
		unique: true
	},
	email: {
		type: String,
		required: true,
		max: 50,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		min: 8
	},
	isAvatarImageSet: {
		type: Boolean,
		default: false
	},
	avatarImage: {
		type: String,
		default: ""
	}
})

module.exports = mongoose.model("Users", userSchema)
