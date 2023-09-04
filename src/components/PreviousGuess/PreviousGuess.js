import React from "react";

function PreviousGuess({ guesses }) {
	return (
		<React.Fragment>
			<div className="guess-results">
				{guesses.map((guess) => {
					return (
						<p key={Math.random() * 100 + 1} className="guess">
							{guess}
						</p>
					);
				})}
			</div>
		</React.Fragment>
	);
}

export default PreviousGuess;
