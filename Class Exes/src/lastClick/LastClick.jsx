import React, { useState } from 'react'

function LastClick() {

const[clickedNum,setClickedNum]=useState(0);

  return (
<p>
	There are <b>3</b> buttons.<br />
	Make the box show the number of the last clicked button.
    <div>
    <button onClick={() => setClickedNum(1)}>1</button>
		<button onClick={() => setClickedNum(2)}>2</button>
		<button onClick={() => setClickedNum(3)}>3</button>
    <div>

    </div>
    
    {clickedNum}
    </div>
</p>
	
  )
}

export default LastClick