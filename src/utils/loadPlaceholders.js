import src_ph1 from "#/assets/cards/placeholder.jpg";
import src_ph2 from "#/assets/cases/desktop/placeholder.jpg";
import src_ph3 from "#/assets/cases/tablet/placeholder.jpg";
import src_ph4 from "#/assets/cases/phone/placeholder.jpg";
import src_ph5 from "#/assets/team/desktop/placeholder.jpg";
import src_ph6 from "#/assets/team/mobile/placeholder.jpg";

const src_All = [ src_ph1, src_ph2, src_ph3, src_ph4, src_ph5, src_ph6 ];

export default function loadPlaceholders() {
	src_All.forEach(src => {
		const img = document.createElement("IMG");
		img.src = src;
	});
}