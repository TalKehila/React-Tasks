import React, { useEffect ,useState} from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval = null;
        if(isActive)
        {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            },1000);
        }
        else 
        {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isActive])

    function Start() 
    {
        setIsActive(true)
    }
    function Stop() 
    {
        setIsActive(false)
    }
    function Reset() 
    {
     setIsActive(false)
     setTimer(0)
    }

    return (
        <div>
            <button onClick={Start}>start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
            <p>{timer}</p>
        </div>
    )
}

export default Timer