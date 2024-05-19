import React, { useState, useEffect } from "react";

export function useScriptClient(){


    const [scroll, setScroll]=useState<boolean>();
    const [inputValue, setInputValue] = useState<string>('');

    const handleScroll=()=>{
        const scrollY= window.scrollY;
        if(scrollY > 100){
            setScroll(true);
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }

    },[])

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputValue.trim() !== '') {
            } else {
                alert("El valor es vacío");
            }
        }
    };

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return{
        scroll,
        handleInputChange,
        inputValue,
        handleKeyDown,
    }
}