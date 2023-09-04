import React from "react";

function GuessInput({ handleSubmitGuess }) {
	const [tentativeguess, setTentativeGuess] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		handleSubmitGuess(tentativeguess);
		setTentativeGuess("");
		console.info({ tentativeguess });
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
					value={tentativeguess}
					onChange={(event) =>
						setTentativeGuess(event.target.value.toUpperCase())
					}
				/>
			</form>
		</React.Fragment>
	);
}

export default GuessInput;
