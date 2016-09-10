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
***GET***<br>
Use the `fetch` or `get` methods with the following parameters `(url, options)` where:<br>
`url` - type `String`.<br>
`options` - type `Object`. All of the `ajax` options you would like to provide.

***POST***<br>
Use the `fetch` or `get` methods with the following parameters `(url, data, options)` where:<br>
`url` - type `String`.<br>
`data` - type `Any`. The data you would like to send to the server.<br>
`options` - type `Object`. All of the `ajax` options you would like to provide.

***PUT***<br>
Use the `fetch` or `get` methods with the following parameters `(url, data, options)` where:<br>
`url` - type `String`.<br>
`data` - type `Any`. The data you would like to send to the server.<br>
`options` - type `Object`. All of the `ajax` options you would like to provide.

***DELETE***<br>
Use the `destroy` method with the following parameters `(url, options)` where:<br>
`url` - type `String`.<br>
`options` - type `Object`. All of the `ajax` options you would like to provide.

### Different ways to use

##### As a Singelton
By default, an instance of the restful-js object is exported and ready to use.<br>
For example:<br>
```
import RestApi from 'restful-js';
// later on...
RestApi.fetch('some/url/resource').then(response => {
    // handle response
		});
```

#### As a Class
You may also get a class and instantiate it yourself and manage it's life-cycle. <br>
For example:<br>
```
import {RestfulAPI} from 'restful-js';
// later on...
let restfulAPI = new RestfulAPI();
restfulAPI.fetch(`${baseUrl}/users`).then(response => {
			// handle response
		});
```

#### Inherit and add you own customization
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

### Having some trouble? Have an issue?
For bugs and issues, please use the [issues](https://github.com/zivl/restful-js/issues) page.


### Road map
* Add support for more HTTP methods
* Remove the need of `jQuery.ajax` and use the global `fetch` way! (waiting for full browser support)


### Contribute
Sure! just fork this repository and join in!
