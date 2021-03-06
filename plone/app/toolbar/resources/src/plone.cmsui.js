// This script is used to provide glue code between iframed and twitter
// bootstrap modal. And also providing some convinience method for usage in
// Plone.
//
//
// @author Rok Garbas, Izak Burger
// @version 0.1
// @licstart  The following is the entire license notice for the JavaScript
//            code in this page.
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
// @licend  The above is the entire license notice for the JavaScript code in
//          this page.
//

/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  regexp:true, undef:true, strict:true, trailing:true, browser:true */
/*global jQuery:false */


(function($) {
"use strict";

// # Namespace
$.plone = $.plone || {};
$.plone.cmsui = $.plone.cmsui || {};

// # Toolbar Actions : General
$.each([
  '#plone-toolbar ul.nav > li#plone-action-contentrules > a',
  '#plone-toolbar ul.nav > li#plone-action-local_roles > a',
  '#plone-toolbar ul.nav > li#plone-contentmenu-workflow > ul > li#advanced > a',
  '#plone-toolbar ul.nav > li#plone-contentmenu-display > ul > li#folderChangeDefaultPage > a',
  '#plone-toolbar ul.nav > li#plone-contentmenu-display > ul > li#contextSetDefaultPage > a',
  '#plone-toolbar ul.nav > li#plone-personal-actions > ul > li#plone-personal-actions-dashboard > a',
  '#plone-toolbar ul.nav > li#plone-personal-actions > ul > li#plone-personal-actions-preferences > a',
  '#plone-toolbar ul.nav > li#plone-personal-actions > ul > li#plone-personal-actions-plone_setup > a'
], function(i, selector) {
  $(selector).ploneOverlay({
  });
});

// # Contents (folder_contents)
$('#plone-toolbar ul.nav > li#plone-action-folderContents a').ploneOverlay({
});


// "Add new ..." Action
$('#plone-toolbar ul.nav > li#plone-contentmenu-factories > ul > li > a').ploneOverlay({
  save: function(response, state, xhr, form) {
    // XXX: not sure if this is correct solution, check with others on mailing
    // list. what we do is we parse out base from responseText
    window.parent.location.href = $($(xhr.responseText).filter('base')[0]).attr('href');
  }
});

// # "Edit" Action
$('#plone-toolbar ul.nav > li#plone-action-edit > a').ploneOverlay({
  save: function(response) {
    $('#content', window.parent.document).replaceWith($('#content', response));
    this.destroy();
  }
});

}(jQuery));
