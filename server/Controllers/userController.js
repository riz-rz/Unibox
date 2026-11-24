import User from "../models/users.js"

export const getAllUsers = async (req, res) => {
    try {
        // never send password hashes to the client
        const users = await User.find().select("-password")
        res.status(200).json({ success: true, message: "users fetched", users })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
