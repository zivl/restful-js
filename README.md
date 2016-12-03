# Restful JS
A simple and generic way to handle RESTful API calls in your JavaScript application.<br>
There are many libraries and utilities classes which provide RESTful implementation in JavaScript to handle API calls to server. Unfortunately, those other solutions, as good as they are, not always suits for everyone. Sometimes, the willing to do everything, just makes it more complex and harder to use. <br>
This `restful-js` solution, keeps stuff the most simple there is, and exposes a nice and easy interface for use in your app.
In case of customized logic, there are some hook methods you can override

### Install
```
npm install restful-js --save
```

### How to use
***`fetch(url, options)`*** or ***`get(url, options)`***<br>
Sends ***HTTP GET*** request with the following parameters:<br>
`url: String` - the URL resource.<br>
`options: Object` - All of the `ajax` options you would like to provide.

***`post(url, data, options)`***<br>
Sends ***HTTP POST*** request with the following parameters:<br>
`url: String` - the URL resource.<br>
`data: Any` - The data you would like to send to the server.<br>
`options: Object` - All of the `ajax` options you would like to provide.

***`put(url, data, options)`***<br>
Sends ***HTTP PUT*** request with the following parameters:<br>
`url: String` - the URL resource.<br>
`data: Any` - The data you would like to send to the server.<br>
`options: Object` - All of the `ajax` options you would like to provide.

***`destroy(url, options)`***<br>
Sends ***HTTP DELETE*** request with the following parameters:<br>
`url: String` - the URL resource.<br>
`options: Object` - All of the `ajax` options you would like to provide.

### Different ways to use

##### As a Singelton
By default, an instance of the restful-js object is exported and ready to use.<br>
For example:<br>
```
import RestApi from 'restful-js';
// later on...
RestApi.fetch('some/url/resource').then(response => { /* handle response */ });

```

##### As a Class
You may also get a class and instantiate it yourself and manage it's life-cycle. <br>
For example:<br>
```
import {RestfulAPI} from 'restful-js';
// later on...
let restfulAPI = new RestfulAPI();
restfulAPI.fetch(`${baseUrl}/users`).then(response => { /* handle response */ });
```

##### Add event handlers
You may instantiate a class and give different handlers for XHR events. <br>
For example:<br>
```
import {RestfulAPI} from 'restful-js';
// later on...
let restfulAPI = new RestfulAPI({
	errorResponseHandler: (xhr, textStatus, errorThrown) => {...}
	ajaxStartHandler: () => {...},
	ajaxStopHandler: () => {...}
});
```

##### Inherit and add you own customization
You can easily customize some behavioural stuff by inheriting from the exported `RestfulAPI` and add your own logic.
<br>
For example:<br>
```
import {RestfulAPI} from 'restful-js';

class MyRestfulAPI extends RestfulAPI {
    applySecurity(options, data){
        // add some security logic
    }
}
```

##### Get a jQuery reference
You may get a `jQuery` reference for your own usage and event handling
<br>
For example:<br>
```
import {RestfulAPI} from 'restful-js';

const restfulAPI = new RestAPIUtil();

// jQuery binary transport to download files through XHR
restfulAPI.$.ajaxTransport('+binary', () => {...})

```

### Having some trouble? Have an issue?
For bugs and issues, please use the [issues](https://github.com/zivl/restful-js/issues) page.


### Road map
* Add support for more HTTP methods
* Remove the need of `jQuery.ajax` and use the global `fetch` way! (waiting for full browser support)


### Contribute
Sure! just fork this repository and join in!
