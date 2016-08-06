
import $script from 'scriptjs'

const socket_test = () => {

    $script("https://cdn.socket.io/socket.io-1.4.5.js", () => {

        const socket = io.connect('http://localhost:3000');

        socket.on('connect', () => {
            socket.emit('message', 'Hello server');
        });

        socket.on('news', (msg) => {
            console.log('News from the server: ' + msg.hello);
        });
    });
}

export { socket_test };