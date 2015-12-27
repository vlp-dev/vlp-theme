import '../styles/main.scss';

import $ from 'jquery';
import Router from './util/router';

// Import Bootstrap
import "bootstrap/js/src/util.js"
import "bootstrap/js/src/alert.js"
import "bootstrap/js/src/button.js"
import "bootstrap/js/src/carousel.js"
import "bootstrap/js/src/collapse.js"
import "bootstrap/js/src/dropdown.js"
import "bootstrap/js/src/modal.js"
import "bootstrap/js/src/scrollspy.js"
import "bootstrap/js/src/tab.js"
import "bootstrap/js/src/tooltip.js"
import "bootstrap/js/src/popover.js"

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Sage = {
  // All pages
  'common': {
    init: function() {
      // JavaScript to be fired on all pages
    },
    finalize: function() {
      // JavaScript to be fired on all pages, after page specific JS is fired
    }
  },
  // Home page
  'home': {
    init: function() {
      // JavaScript to be fired on the home page
    },
    finalize: function() {
      // JavaScript to be fired on the home page, after the init JS
    }
  },
  // About us page, note the change from about-us to about_us.
  'about_us': {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// Load Events
$(document).ready(new Router(Sage).loadEvents);
