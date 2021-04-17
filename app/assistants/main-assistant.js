/* this file contains all of the javascript that will be automatically loaded along with the main-scene.html, which is found in the ~/app/views/main/ folder */

function MainAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

MainAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */

	/* the next three lines create the webview widget. */

this.controller.setupWidget('web-view', {
	url: "http://www.google.ca",  /// SUBSTITUTE YOUR WEB ADDRESS HERE. THAT'S IT. EASY LIKE CAKE!
	}, this.mainViewModel = {});

	/* Note: if you have written a webapp and wish to include your html/css/javascript files within this app rather than hosting them on a remote server, put your files in the www folder and change the url above to "file:///media/cryptofs/apps/usr/palm/applications/com.template.webview-app/www/index.html". Alter the url path as necessary to reflect your app's name (the 'id' on line 2 of the appinfo.json file) and the main html file name, if it's not index.html. Note that it is not possible to store cookies related to local files. If you need to store cookies, you will need to host your app remotely, and set the url to connect to your server. */
	
	/* update the app info using values from our app */
	
	/* add event handlers to listen to events from widgets */
	
};


	/* the following section enables the back gesture */

MainAssistant.prototype.handleCommand = function(event) {
    if (event.type == Mojo.Event.back) {
    this.controller.get('web-view').mojo.goBack();
    event.stop();
    }
};

MainAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

MainAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

MainAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */

	/* the last few lines clear the webview cache on exit -- otherwise the webview will always return cached versions of your pages and you'll never see updated versions */

var mywebview = this.controller.get('web-view');
mywebview.mojo.clearCache(); 

};
