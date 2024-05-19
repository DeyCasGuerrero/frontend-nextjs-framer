'use client';
import { useScriptClient } from "@/hooks/useScriptClient";
import {motion} from "framer-motion"
function InputSearch() {

    const {inputValue,handleInputChange,handleKeyDown} =useScriptClient();

    return (
        <motion.form 
        initial={{opacity:0, y: 0}}
        animate={{
            opacity:1, 
            y: 100, 
            transition: {duration: 0.5}
        }}
        
        className="form relative w-full">
            <input
                className="input w-full rounded-full px-8 py-3 border-2 border-transparent text-black focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                type="text"
            />
        </motion.form>
    )
}

export default InputSearch