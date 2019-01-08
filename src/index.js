function getRectRight (rect) {
	return rect.left + rect.width;

}

function getRectBottom (rect) {
	return rect.top + rect.height;
}


export function areIntersected (rect1, rect2) {

	let horizontalIntersection = rect1.left < getRectRight(rect2) && getRectRight(rect1) > rect2.left;
	let verticalIntersection = rect1.top < getRectBottom(rect2) && getRectBottom(rect1) > rect2.top;

	return horizontalIntersection && verticalIntersection;
}

export function filterVisible (rect, array) {

	return array.filter(elem => {
		let rectanglesVisible = elem.width !== 0 && elem.height !== 0;

		return areIntersected(rect, elem) && rectanglesVisible;
	});

}