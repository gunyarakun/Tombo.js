import "js/web.jsx";
import "../Shape.jsx";
import "../../Tombo.jsx";
import "../../BasicTypes.jsx";
import "PartialImage.jsx";

/**
 * PartialImageShape class
 *
 * <p>PartialImageShape assumes that it has one large image, and draw the separate image based on pixel rect.</p>
 *
 * @author Tasuku SUENAGA a.k.a. gunyarakun <tasuku-s-github@titech.ac>
 */
class PartialImageShape implements Shape, PartialImage {
	var bounds: Rect;
	var isMutable = false;

	/**
	 * create Shape with Image Element
	 * @param img an image element TODO: add other param
	 */
	function constructor(img: HTMLImageElement, left: number, top: number, width: number, height: number) {
		this._img = img;
		if(!img.width || !img.height) {
			Tombo.warn("[PartialImageShape#constructor] image is not initialized");
		}
		this.setRect(left, top, width, height);
		this.bounds = new Rect(0, 0, this.width, this.height);
	}
}

// vim: set noexpandtab ts=2 sw=2 nowrap ft=jsx ff=unix :
