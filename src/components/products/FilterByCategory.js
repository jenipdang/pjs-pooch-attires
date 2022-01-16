import React from 'react';

const FilterCategory = ({ filterResult }) => {
	return (
		<>
			<div className="d-grid gap-2 d-md-flex justify-content-md mb-2 mt-2">FILTER BY CATEGORY
				<button
					className="btn btn-outline-secondary "
					onClick={() => filterResult('Bandana')}
				>
					Bandana
				</button>
				<button
					className="btn btn-outline-secondary"
					onClick={() => filterResult('Bow Tie')}
				>
					Bow Tie
				</button>
				<button
					className="btn btn-outline-secondary"
					onClick={() => filterResult('Coat')}
				>
					Coat
				</button>
				<button
					className="btn btn-outline-secondary"
					onClick={() => filterResult('All')}
				>
					All
				</button>
			</div>
		</>
	);
};

export default FilterCategory;
