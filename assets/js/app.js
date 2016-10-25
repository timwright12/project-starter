( function ( w, doc ) {

  // Uncomment this if you're using jQuery
  // if(! 'jQuery' in w){ return; }

  // Enable strict mode
  'use strict';

  // Local object for method references
  var App = {};

  // Namespace
  App.ns = 'Application';

  // Start defining methods here
  App.init = function() {

    console.log( w );
    console.log( doc );

  };

  // Start the application
  App.init();

} )( this, this.document );
