import {useState, useEffect} from "react";

export const useToastMessage = () => {
    const [showToast, setShowToast] = useState <boolean>(false);

    useEffect(() => 
    {
        const timeOut = setTimeout(() => 
        {
            setShowToast(false);
        }, 1500)
    
        return () => clearTimeout(timeOut)
    }, [showToast])

    return {showToast, setShowToast}
}