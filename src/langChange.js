const select = document.querySelector('.Header__lang')
const allLang = ['en', 'ru']

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
	let lang = select.value
	location.href = window.location.pathname + '#' + lang
	location.reload()
}

function changeLanguage() {
	let hash = window.location.hash
	hash = hash.substring(1)
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru'
		location.reload()
	}
}