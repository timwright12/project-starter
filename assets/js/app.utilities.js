(function() {

	'use strict';
  
  /**
   * Define global Util object if it doesn't exist
   */
  if ( 'object' !== typeof window.Util ) {
    window.Util = {};
  }

  /**
   * Namspace string
   */
  Util.ns = "Utility Methods";

  /**
    Debounce (https://davidwalsh.name/essential-javascript-functions)

    - Usage -
    var myEfficientFn = debounce(function() {
      // All the taxing stuff you do
    }, 250);

    window.addEventListener('resize', myEfficientFn);

  */

  Util.debounce = function ( func, wait, immediate ) {

    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if ( !immediate ) func.apply( context, args );
      };
      var callNow = immediate && !timeout;
      clearTimeout( timeout );
      timeout = setTimeout( later, wait );
      if ( callNow ) func.apply( context, args );
    };

  };

  /**
   * Utility Ajax Call
   */
  Util.get = function ( options, callback ) {

    var defaults = {
        'url' : null,
        'type' : 'GET',
        'dataType' : 'html'
    },
    request = new XMLHttpRequest(),
    httpresponse,
    i;

    // map all default settings to user defined options
    for (i = 0; i < defaults.length; i = i + 1) {
        if( typeof options[i] === "undefined" ) {
            options[i] = defaults[i];
        }
    }

    request.onreadystatechange = function() {

        // check to see if the Ajax call went through
        if ( request.readyState === 4 && request.status === 200 ) {

            // save the ajax response to a variable
            if( options.dataType === 'json' ){
                httpresponse = JSON.parse(request.responseText);
            } else if( options.dataType === 'xml' ){
                httpresponse = request.responseXML;
            } else {
                httpresponse = request.responseText;
            }

            // make sure the callback is indeed a function before executing it
            if( typeof callback === 'function' ){

                callback(httpresponse);

            } // end check

        } // end ajax status check

    }; // end onreadystatechange

    request.open( options.type, options.url, true );
    request.send( null );

  };

  /**
   * Check if an element is hidden (display: none OR visibility: hidden)
   */
  Util.isHidden = function ( el ) {
    return ( el.offsetParent === null );
  };

  /**
   * Cross-browser way to tell if an element has a certain class
  */
  Util.hasClass = function ( el, cls ) {
    return el.className && new RegExp( "(\\s|^)" + cls + "(\\s|$)" ).test( el.className );
  };

  /**
   * Cross-browser way to add a class
  */
  Util.addClass = function ( el, cls ) {
    if ( el.classList ) {
      el.classList.add( cls );
    } else if (!Util.hasClass( el, cls )) {
      el.className += " " + cls;
    }
  };

  /**
   * Cross-browser way to remove a class
   */
  Util.removeClass = function ( el, cls ) {
    if ( el.classList ) {
      el.classList.remove( cls );
    } else if ( Util.hasClass( el, cls ) ) {
      var reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' );
      el.className = el.className.replace( reg, ' ' );
    }
  };
 
  /**
	 * Helper method to add multiple attribute to an element at once
   * @example 
   *  Util.setAttributes( el, {
   *    'class' : 'class-name',
   *    'id' : 'id-name'
	 *  });
	 */
	Util.setAttributes( el, attrs ) {
		for( var key in attrs ) {
			el.setAttribute( key, attrs[key] );
		}
	};
  
} )();
