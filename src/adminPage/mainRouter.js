import React from 'react'
import { Routes, Route } from "react-router-dom"
import Admin from "./admin"
import App from '../App'

const mainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="admin" element={<Admin />} />
            </Routes>
        </>
    )
}

export default mainRouter