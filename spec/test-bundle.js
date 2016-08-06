
import { socket_test } from '../public/js/modules/socket-test.js'


describe('The socket has loaded', () => {
	it('Should say hello to us.', () => {
		expect(socket_test())
			.toEqual('Not correct');
	});
});