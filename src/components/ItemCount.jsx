import { useState } from "react";

function ItemCount (){
    const [count, setCount] = useState(0)
    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    return (
        <div>
            <p className="counter border">{count}</p>
            <button onClick={handleAdd} className="btnGray text-light rounded m-1"> + </button>
            <button onClick={handleSub} className="btnGray text-light rounded m-1"> - </button>
        </div>
    )
}

export default ItemCount