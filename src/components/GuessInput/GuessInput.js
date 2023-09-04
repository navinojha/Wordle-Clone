import React, { useState } from "react";

function GuessInput() {
	const [guess, setGuess] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		setGuess("");
		console.info({ guess });
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit} className="guess-input-wrapper">
				<label htmlFor="guess-input">Enter Guess:</label>
				<input
					id="guess-input"
					type="text"
					minLength={5}
					maxLength={5}
					value={guess}
					onChange={(event) => setGuess(event.target.value.toUpperCase())}
				/>
			</form>
		</React.Fragment>
	);
}

export default GuessInput;
