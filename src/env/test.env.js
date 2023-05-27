/* IMPORTANT:
1.	Load this js file while index.html is rendered. So add the below script tag inside of index.html
2.	Now we have to add this file path in the angular.json file. bcoz By default,
	 	JavaScript files such as env.js are not copied to the output directory when we build our application.
		So in order to copy the file into the output directory, we must include the env.js path into the angular.json.
*/

(function (window) {
  window.__env = window.__env || {};
  window.__env.envConfig = {
    deployMode: "TEST",
    host: "test",
    API: "myAPI",
  };
})(this);

// This file won't compile. It'll be interpreted by server, so "this" is "globalThis". Therefore "window" is accessible.
