import Products from "../models/products.js";

export const addProducts = async (req, res) => {
    try {
        const product = await Products.create(req.body)
        res.status(201).json({ success: true, message: "product added successfully", product })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getProducts = async (req, res) => {
    try {
        const prods = await Products.find()
        res.status(200).json({ success: true, message: "products fetched", prods })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getProdById = async (req, res) => {
    try {
        const { id } = req.params
        const prod = await Products.findById(id)

        if (!prod) {
            return res.status(404).json({ success: false, message: "product doesnt exist" })
        }

        res.status(200).json({ success: true, message: "product fetched by id", prod })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!product) {
            return res.status(404).json({ success: false, message: "product doesnt exist" })
        }

        res.status(200).json({ success: true, message: "product updated", product })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findByIdAndDelete(id)

        if (!product) {
            return res.status(404).json({ success: false, message: "product doesnt exist" })
        }

        res.status(200).json({ success: true, message: "product deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
