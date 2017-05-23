/*
	Tabs script made by Johan "DutchDerpyGuy" Odijk.
	Gets all 'tabs' classes from the DOM
	Makes a menu in the 'menu' id element (most of the time this will be a menu or div).
	Uses an ul with li's for each tab inside (ul>li)
	Uses the tabs h2 as title for the menu button.
	Onclicks for the show function are automaticly added by using the id from the tabs (ALL TABS must have an id).
	The selected tab's menu item get's the shown class.
	Clicking a tab menu item twice hides it.
	Css is NOT included!
	Have fun!

	EXAMPLE HTML:
		<html>
			<head>
				<title>Lorem Ipsum</title>
				<script src="tabs.js" charset="utf-8"></script> <!-- tabs script -->
			</head>
			<body onload="initTabs()"> <!-- initialises the tab script -->
				<h1>Tabs!:</h1><!-- always gets shown -->
				<div id="menu"></div> <!-- the menu,items get made automaticly! -->
				<!-- an example tab: -->
				<div class="tab" id ="LoremIpsum1">
					<h2>Lorem Ipsum</h2>
					<img src='loremipsum.png' alt='loremipsum'>
				</div>
				<!-- another example tab: -->
				<div class="tab" id ="LoremIpsum2">
					<h2>Lorem Ipsum</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</body>
		</html>
*/
//global vars:
tabs = null;
buttons = [];

//gets all tabs an makes an menu at the #menu element using the h2 inside the tab as a title
function initTabs() {
	tabs = document.querySelectorAll(".tab");
	menu = document.getElementById('menu');
	ul = document.createElement('ul');
	ul.setAttribute('class','flexContainer');
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "none";
		li = document.createElement('li');
		li.setAttribute('onclick',`show(document.getElementById('${tabs[i].id}'))`);
		text = document.createTextNode(tabs[i].querySelector('h2').innerHTML);
		li.appendChild(text);
		ul.appendChild(li);
		buttons.push(li);
	}
	menu.appendChild(ul);
}

//shows and or hides the elements.
function show(element) {
	if (element.style.display === "block") {
		element.style.display = "none";
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove("shown");
		}
	} else {
		for (var j = 0; j < tabs.length; j++) {
			buttons[j].classList.remove("shown");
			if (tabs[j] === element) buttons[j].classList.add("shown");
			tabs[j].style.display = "none";
		}
		element.style.display = "block";
	}
}
