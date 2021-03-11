document.body.style.backgroundColor = "#909090";

let selfie = document.querySelector("#selfie");
selfie.addEventListener("click", clickselfie);
function clickselfie(){
	selfie.classList.add("clear");
	ledray.classList.remove("clear");
	white.classList.remove("clear");
let p = document.querySelector("#bio");
	p.innerHTML = "&#9994; This is me &#128175; in Tompkins &#128008; Square park &#127773; because &#128055; its finally starting &#x1F40B; to get warm outside &#127796;."
}

let ledray = document.querySelector("#ledray");
ledray.addEventListener("click", clickledray);
function clickledray(){
	ledray.classList.add("clear");
	white.classList.remove("clear");
	selfie.classList.remove("clear");
	let p = document.querySelector("#bio");
	p.innerHTML = "This is a sculpture &#127800; by one &#x1F49D; of my favorite artist's &#128022; Charles Ledray &#127814;, hand made on a small scale &#127839;."
}


let white = document.querySelector("#white");
white.addEventListener("click", clickwhite);
function clickwhite(){
	white.classList.add("clear");
	selfie.classList.remove("clear");
	ledray.classList.remove("clear");
	let p = document.querySelector("#bio");
	p.innerHTML = "This &#x1F38F; is another one of my &#128044;favorite pieces &#127872; by &#128143; Kazimir Malevich &#128039; called White on White &#128173;."
}

