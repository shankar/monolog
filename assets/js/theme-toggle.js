const root = document.documentElement;
const themeToggle = document.querySelectorAll('.theme-toggle'); 

const lightMode = () => {
	root.classList.remove('theme-dark');
	themeToggle.forEach(button => {
		button.classList.remove('theme-dark');
	})
}

const darkMode = () => {
    root.classList.add('theme-dark');
    themeToggle.forEach(button => {
        button.classList.add('theme-dark');
    })
}

const changeTheme = () => {
	let themeState = root.classList.contains('theme-dark');
	themeState ? lightMode() : darkMode();
}

themeToggle.forEach(button => {
	button.addEventListener('click', changeTheme)
})
