const toggle = document.querySelector("[data-theme-toggle]");
toggle.addEventListener("click", (event) => {
	currentThemeSetting = currentThemeSetting === "dark" ? "light" : "dark";

	localStorage.setItem("theme", currentThemeSetting);
	updateTheme(currentThemeSetting);
}); 