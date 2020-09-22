export default function (eng) {
	switch (eng) {
		case "default" :
			return "인기 제품";
			break;
		case "date" :
			return "신규 출시";
			break;
		case "action" :
			return "액션";
			break;
		case "sports" :
			return "스포츠";
			break;
		case "casual" :
			return "캐주얼";
			break;
		case "massively-multiplayer" :
			return "대규모 멀티플레이어";
			break;
		case "indie" :
			return "인디";
			break;
		case "role-playing-games-rpg" :
			return "RPG";
			break;
		case "adventure" :
			return "어드벤쳐";
			break;
		case "shooter" :
			return "FPS";
			break;
		case "puzzle" :
			return "퍼즐";
			break;
		case "strategy" :
			return "전략";
			break;
		case "simulation" :
			return "시뮬레이션";
			break;
		default :
			break;
	}
}
