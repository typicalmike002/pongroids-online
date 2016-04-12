import greetings from './robots.js'

import styles from './../../css/sass/style.scss'

let element = '<div class="element">' +
	'<p>' + greetings("Affirmative", "Dave") + '</p></div>'; 

document.write(element);