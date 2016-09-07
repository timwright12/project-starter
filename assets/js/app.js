;(function ($, w, doc) {
  
  // Uncomment this if you're using jQuery
  // if(! 'jQuery' in w){ return; }
  
  // Enable strict mode
  "use strict";

	// Polyfill for el.matches
	if (!Element.prototype.matches) {
		Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function(s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) {}
			return i > -1;
		};
	}

  // Local object for method references
  var App = {};

  // Namespace
  App.ns = "Application";
  
  /*
    Debounce (https://davidwalsh.name/essential-javascript-functions)

    - Usage - 
    var myEfficientFn = debounce(function() {
	    // All the taxing stuff you do
    }, 250);
    
    window.addEventListener('resize', myEfficientFn);

  */

  App.debounce = function ( func, wait, immediate ) {
    
  	var timeout;
	return function() {
	  var context = this, args = arguments;
	  var later = function() {
	    timeout = null;
	    if (!immediate) func.apply(context, args);
	  };
	  var callNow = immediate && !timeout;
	  clearTimeout(timeout);
	  timeout = setTimeout(later, wait);
	  if (callNow) func.apply(context, args);
	};
	  
  };
  
  /*
    Utility Ajax Call
  */
  
  App.get = function ( options, callback ) {
    
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
            if(options.dataType === 'json'){
                httpresponse = JSON.parse(request.responseText);
            } else if(options.dataType === 'xml'){
                httpresponse = request.responseXML;
            } else {
                httpresponse = request.responseText;
            }
            
            // make sure the callback is indeed a function before executing it
            if(typeof callback === 'function'){
            
                callback(httpresponse);
            
            } // end check
    
        } // end ajax status check
    
    }; // end onreadystatechange
    
    request.open(options.type, options.url, true);
    request.send(null);
    
  };
  
  /*
    Check if an element is hidden (display: none OR visibility: hidden)
  */
  
  App.isHidden = function ( el ) {
    return (el.offsetParent === null);
  };
  
  /*
    Cross-browser way to tell if an element has a certain class
  */
  
  App.hasClass = function ( el, cls ) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test( el.className );
  };
  
  /* 
    Cross-browser way to add a class
  */
  
  App.addClass = function ( el, cls ) {
    if (el.classList) {
      el.classList.add(cls);
    } else if (!App.hasClass(el, cls)) {
      el.cls += " " + cls;
    }
  };
  
  /* 
    Cross-browser way to remove a class
  */
  
  App.removeClass = function ( el, cls ) {
    if (el.classList) {
      el.classList.remove(cls);
    } else if (App.hasClass(el, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.cls=el.cls.replace(reg, ' ');
    }
  };
  
  // Start defining methods here
  App.init = function() {

  };
  
  // Start the application
  App.init();

} )( jQuery, this, this.document );
