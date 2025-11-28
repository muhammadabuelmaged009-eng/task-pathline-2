
	window.dataLayer = window.dataLayer || []; 
	function gtag(){dataLayer.push(arguments);} 
	gtag('js', new Date()); 
	gtag('config', 'UA-33119084-1'); 
	
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
	})(window,document,'script','dataLayer','GTM-W4VDZW2');
	const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});

toTop.onclick = () => window.scrollTo({top:0, behavior:"smooth"});

const toggle = document.getElementById('toggle');
const ball = document.getElementById('ball');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if(body.classList.contains('dark')){
    ball.textContent = '🌙';
  } else {
    ball.textContent = '☀️';
  }
});
