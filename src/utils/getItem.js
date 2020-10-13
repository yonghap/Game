export default {
	getCropImage : function (addr) {
		let cropText = 'crop/600/400';
		let first = addr.substring(0, 28);
		let end = addr.substring(27, addr.length);
		return first + cropText + end;
	}
}
