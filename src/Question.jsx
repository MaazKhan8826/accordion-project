import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [visible,changeVisibility] = useState('false');

    function changeVis(){
        if(visible==="true"){
            changeVisibility('false')
        } else {
            changeVisibility('true')
        }
    }

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button onClick={changeVis} className="btn">{visible==='true'?'-':'+'}</button>
			</header>
			{/* make this render conditionally */}
			<p>{visible==="true" ? info : ""}</p>
		</article>
	)
}

export default Question
