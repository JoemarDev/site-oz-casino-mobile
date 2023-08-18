// Accout Scripts
let isLogin = false;

const LoginAccount = () => {
	isLogin = true;
	closeAll();
	$(".guess-bar").hide();
	$(".user-bar").show();
};

const logoutAccount = () => {
	isLogin = false;
	closeAll();
	$(".guess-bar").show();
	$(".user-bar").hide();
};

const closeAll = () => {
	CloseLoginDialog();
	CloseRegisterDialog();
	CloseSlotGames();
	CloseCasinoGames();
};

const OpenSideBar = () => {
	$(".SIDEBAR_WRAPPER").show();
};

const CloseSidebar = () => {
	$(".SIDEBAR_WRAPPER").hide();
};

const OpenLoginDialog = () => {
	$(".REGISTER_WRAPPER").hide();
	$("body").css("overflowY", "hidden");
	$(".LOGIN_WRAPPER").show();
};

const CloseLoginDialog = () => {
	$("body").css("overflowY", "scroll");
	$(".LOGIN_WRAPPER").hide();
};

const OpenRegisterDialog = () => {
	$(".LOGIN_WRAPPER").hide();
	$("body").css("overflowY", "hidden");
	$(".REGISTER_WRAPPER").show();
};

const CloseRegisterDialog = () => {
	$("body").css("overflowY", "scroll");
	$(".REGISTER_WRAPPER").hide();
};

const OpenCasinoGames = () => {
	$("body").css("overflowY", "hidden");
	$(".CASINO_GAME_WRAPPER").show();
};

const CloseCasinoGames = () => {
	$("body").css("overflowY", "scroll");
	$(".CASINO_GAME_WRAPPER").hide();
};

const OpenSlotGames = () => {
	$("body").css("overflowY", "hidden");
	$(".SLOT_GAME_WRAPPER").show();
};

const CloseSlotGames = () => {
	$("body").css("overflowY", "scroll");
	$(".SLOT_GAME_WRAPPER").hide();
};

const swiper = new Swiper(".swiper", {
	speed: 400,
	spaceBetween: 100,
	loop: true,
	autoplay: {
		delay: 2000,
	},
});

let DefaultValue = 85_484_080;

setInterval(() => {
	DefaultValue += Math.floor(Math.random() * 5);
	$("#odometer").html(DefaultValue);
}, 4000);

$(".memo-table td:odd").click(function () {
	$(this).parent().next().toggle();
});

const openNotice = (elem) => {
	$(".board-tab").css({
		"border-bottom": "1px solid transparent",
	});
	$(elem).css({
		"border-bottom": "1px solid #ef679a",
	});
	$(".board-lists").hide();
	$(".notice-board").show();
};

const openEvent = (elem) => {
	$(".board-tab").css({
		"border-bottom": "1px solid transparent",
	});
	$(elem).css({
		"border-bottom": "1px solid #209EEA",
	});
	$(".board-lists").hide();
	$(".event-board").show();
};
