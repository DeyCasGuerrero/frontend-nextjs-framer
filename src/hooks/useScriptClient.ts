import { useState, useEffect } from "react";

export function useScriptClient(){

    const [scroll, setScroll]=useState<boolean>();

    const handleScroll=()=>{
        const scrollY= window.scrollY;

        if(scrollY>100){
            setScroll(true);
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }

    },[scroll])

    return{
        scroll,
    }
}