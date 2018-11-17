function getRectRight (rect) {
	return rect.width > 0 ? rect.left + rect.width : 0;
}

function gerRectBottom (rect) {
	return rect.height > 0 ? rect.top + rect.height : 0;
}

export function areIntersected (rect1, rect2) {

	let horizontalIntersectionFirstRect = rect1.left < getRectRight(rect2);
	let horizontalIntersectionSecondRect = getRectRight(rect1) > rect2.left;

	let verticalIntersectionFirstRect = rect1.top < gerRectBottom(rect2);
	let verticalIntersectionSecondRect = gerRectBottom(rect1) > rect2.top;


	return 	horizontalIntersectionFirstRect
					&& horizontalIntersectionSecondRect
					&& verticalIntersectionFirstRect
					&& verticalIntersectionSecondRect;
}

export function filterVisible (rect, array) {
	return array.filter(elem => areIntersected(rect, elem));
}