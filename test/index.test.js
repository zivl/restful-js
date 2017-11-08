import expect from 'expect';
import RestApi, {RestfulAPI} from '../index.js';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const NOT_FOUND_ERROR = 404;

describe('main plug-in test', function () {

	this.timeout(10000);

	it('should be initialized by default', () => {
		expect(RestfulAPI).toExist();
	});

	it('should create a new instance of class RestfulAPI', () => {
		expect(new RestfulAPI()).toExist();
	});

	it('should include error handler', () => {
		let errorResponseHandler = () => {
		};
		let restfulAPI = new RestfulAPI({errorResponseHandler});
		expect(restfulAPI.errorResponseHandler).toBe(errorResponseHandler);
	});

	it('RestApi instance should exist', () => {
		expect(RestApi).toExist();
	});

	it.only('should get response from server', done => {
		RestApi.fetch(`${baseUrl}/users`).then(response => {
			expect(response.length).toExist().toBeMoreThan(0);
			done();
		});
	});

	it('should get response from server', done => {
		RestApi.get(`${baseUrl}/users`).then(response => {
			expect(response.length).toExist().toBeMoreThan(0);
			done();
		});
	});

	it('should post data to server', done => {
		RestApi.post(`${baseUrl}/posts`, {
			data: {
				title: 'restful-js'
			}
		}).then(response => {
			expect(response).toExist().toIncludeKey('id').toIncludeKey('data');
			done();
		});
	});

	it('should post data to server with FormData object', done => {
		let formData = new FormData();
		if (formData.set) { // to support FF < 39.0
			formData.set('upload', JSON.stringify({
				data: {
					title: 'restful-js'
				}
			}));
			RestApi.post(`${baseUrl}/posts`, formData).then(response => {
				expect(response).toExist().toIncludeKey('id');
				done();
			});
		}
		else {done();}
	});

	it('should update data on server', done => {
		RestApi.put(`${baseUrl}/posts/1`, {
			data: {
				id: 1,
				title: 'restful-js is awesome'
			}
		}).then(response => {
			expect(response).toExist().toIncludeKey('id');
			done();
		});
	});

	it('should delete data on server', done => {
		RestApi.destroy(`${baseUrl}/posts/1`).then(response => {
			expect(response).toExist();
			done();
		});
	});

	it('should throw error without error handling', done => {
		RestApi.fetch(`${baseUrl}/non/exist/resource`).then(() => {
		}, error => {
			expect(error.status).toExist().toEqual(NOT_FOUND_ERROR);
			done();
		});
	});

	it('should throw error with error handling', done => {
		let errorResponseHandler = (xhr/*, textStatus, errorThrown*/) => {
			expect(xhr.status).toExist().toEqual(NOT_FOUND_ERROR);
			done();
		};
		let restfulAPI = new RestfulAPI({errorResponseHandler});
		restfulAPI.fetch(`${baseUrl}/non/exist/resource`);
	});

	it('should call ajax start event', done => {
		const ajaxStartHandler = function () {
			done();
		};
		new RestfulAPI({ajaxStartHandler}).get(`${baseUrl}/users`);
	});

	it('should call ajax stop event', done => {
		const ajaxStopHandler = function () {
			done();
		};
		new RestfulAPI({ajaxStopHandler}).get(`${baseUrl}/users`);
	});

	it('should expose jQuery to the out side', () => {
		expect(RestApi.$).toExist();
	});

});
