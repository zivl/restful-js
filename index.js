import $ from 'jquery';

//methods
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

// content-types
const dataType = 'json';
const APPLICATION_JSON = 'application/json';
const MULTIPART_FORM_DATA = 'multipart/form-data';


export class RestfulAPI {

	constructor(options) {
		if (options) {
			this.errorResponseHandler = options.errorResponseHandler;
		}
	}

	applySecurity(options, data) {
		/* hook method */
	}

	handleRequest(baseUrl, type, options = {}, data) {

		let params = {type, dataType};
		params.url = baseUrl;

		if (type === POST || type === PUT) {
			if (data instanceof FormData) {
				params.contentType = MULTIPART_FORM_DATA;
				params.data = data;
			}
			else {
				params.contentType = APPLICATION_JSON;
				params.data = JSON.stringify(data);
			}
		}

		if (params.type !== GET) {
			params.processData = false;
		}

		if (this.errorResponseHandler) {
			options.error = this.errorResponseHandler;
		}

		this.applySecurity(options, data);

		return $.ajax({...params, ...options});
	}

	fetch(url, options) {
		return this.handleRequest(url, GET, options);
	}

	get(url, options) {
		return this.fetch(url, options);
	}

	post(url, data, options) {
		return this.handleRequest(url, POST, options, data);
	}

	put(url, data, options) {
		return this.handleRequest(url, PUT, options, data);
	}

	destroy(url, options) {
		return this.handleRequest(url, DELETE, options);
	}

}

const instance = new RestfulAPI();

export default instance;
