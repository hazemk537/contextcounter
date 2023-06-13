import React, { useState } from 'react'
import RemoteCounter from './RemoteCounter';

export const CounterContext = React.createContext() //global to be exported

//convention keep it capital for the first letter   
function Counter() {
    const [count, setCount] = useState(20)
    function setMe(){
        setCount(count+1)
    }

    return (
        <div>
            <CounterContext.Provider value={{setMe,count} } >
                {/* object of values */}
                <RemoteCounter />
            </CounterContext.Provider >        {/* onclick should be ()=>{} */}
        </div>
    )
}

export default Counter
