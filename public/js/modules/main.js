/**
 * Inline styles are removed by webpack and packaged into style.css and style.min.css.
 */
import styles from './../../css/sass/style.scss'

/**
 * Test for socket.io connection.
 */
import { socket_test } from './socket-test.js'

socket_test();
