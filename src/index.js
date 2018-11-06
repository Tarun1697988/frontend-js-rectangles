function rectEndPointX (rect) {
	return rect.width > 0 ? rect.left + rect.width : false;
}

function rectEndPointY (rect) {
	return rect.height > 0 ? rect.top + rect.height : false;
}

export function areIntersected (rect1, rect2) {
	return (rect1.left < rectEndPointX(rect2) && rectEndPointX(rect1) > rect2.left
			&& rect1.top < rectEndPointY(rect2) && rectEndPointY(rect1) > rect2.top);
}

export function filterVisible (rect, array) {
	return array.filter(elem => areIntersected(rect, elem));
}