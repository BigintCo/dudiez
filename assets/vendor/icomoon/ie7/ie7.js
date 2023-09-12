/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-search': '&#xe900;',
		'icon-start': '&#xe901;',
		'icon-start-empty': '&#xe902;',
		'icon-tick-circle': '&#xe903;',
		'icon-tick-circle-fill': '&#xe904;',
		'icon-x-black': '&#xe905;',
		'icon-camera': '&#xe906;',
		'icon-chevron-right': '&#xe907;',
		'icon-chevron-left': '&#xe908;',
		'icon-chevron-down': '&#xe909;',
		'icon-chevron-up': '&#xe90a;',
		'icon-list': '&#xe90b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
