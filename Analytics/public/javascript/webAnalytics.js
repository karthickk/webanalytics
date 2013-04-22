;
(function($, d, w) {

	// $ - jQuery
	// d- document
	// w- window
	// bmsa_u - userInfo cookie
	// bmsa_s - sessionInfo cookie {session count, page views at particular session}
	

	var util = {

		// checking whether this browser is trackable or not
		// output: true or false
		isBrowserTrackable : function() {
			var dntProperties = [ 'doNotTrack', 'msDoNotTrack' ];
			for ( var i = 0, l = dntProperties.length; i < l; i++) {
				if (navigator[dntProperties[i]] === 'yes') {
					return false;
				}
			}
			return true;
		},

		// Deep copy of array
		// output : copied array
		copyArray : function(input) {
			return input.slice(0);
		},

		// checking whether the input is array or not
		// output: true or false
		isArray : function(input) {
			return typeof (input) == 'object' && (input instanceof Array);
		},

		strpos : function(haystack, needle, offset) {
			var i = (haystack + '').indexOf(needle, (offset || 0));
			return i === -1 ? false : i;
		},

		setCookie : function(name, value, days, path, domain, secure) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			d.cookie = name + "=" + escape(value)
					+ ((days) ? "; expires=" + date.toGMTString() : "")
					+ ((path) ? "; path=" + path : "")
					+ ((domain) ? "; domain=" + domain : "")
					+ ((secure) ? "; secure" : "");
		},

		getCookieDomain : function() {
			return window['tracker'].getOption('cookie_domain') || d.domain;
		},

		setCookieDomain : function(domain) {
			var not_passed = false;
			if (!domain) {
				domain = d.domain;
				not_passed = true;
			}
			var period = domain.substr(0, 1);
			if (period === '.') {
				domain = domain.substr(1);
			}
			var contains_www = false;
			var www = domain.substr(0, 4);
			if (www === 'www.') {
				if (not_passed) {
					domain = domain.substr(4);
				}
				contains_www = true;
			}
			var match = false;
			if (d.domain === domain) {
				match = true;
			}
			domain = '.' + domain;
			window['tracker'].setOption('cookieDomain', domain);
			window['tracker'].setOption('cookieDomainSet', true);

		},

		generateUserId : function() {
			return Math.round(Math.random() * 2147483647);
		},

		getCurrentUnixTimeStamp : function() {
			var date = new Date();
			return Math.round(date.getTime() / 1000);
		},

		getCookie : function(name) {
			var cv = d.cookie;
			var begin = cv.indexOf(" " + name + "=");
			if (begin == -1) {
				begin = cv.indexOf(name + "=");
			}
			if (begin == -1) {
				cv = null;
			} else {
				begin = cv.indexOf("=", begin) + 1;
				var end = cv.indexOf(";", begin);
				if (end == -1) {
					end = cv.length;
				}
				cv = unescape(cv.substring(begin, end));
			}
			return cv;

		},

		getLocation : function() {
			return w.location;
		}

	};

	var tracker = function() {
		this.options = {
			'clickEventBinded' : false
		};

	};

	tracker.prototype = {

		trackClicks : function(handlers) {
			this.bindClickEvents(handlers);
			this.setOption('clickEventBinded', true);
		},

		bindClickEvents : function(handlers) {
			var scope = this;
			if (!handlers) {
				handlers = d;
			}
			$(d).on("click", handlers, function(event) {
				scope.clickEventHandler(event);
			});

		},

		clickEventHandler : function(event) {
			console.log(event);
		},

		trackPageView : function(isTrackable) {
			if (isTrackable) {
				var l = util.getLocation();
				var location = {};
				location.pathName = l.pathname;
				location.href = l.href;
				location.search = l.search;
				console.log(location);
			}
		},

		setOption : function(name, value) {
			this.options[name] = value;
		},

		getOption : function(name) {
			if (this.options.hasOwnProperty(name)) {
				return this.options[name];
			}
		},

		setUp : function(scope) {

			if (!scope.getOption('cookieDomainSet')) {
				util.setCookieDomain(util.getCookieDomain());
			}

			scope.setUpCookie();
		},

		
		
		setUpCookie : function() {
			var cts = util.getCurrentUnixTimeStamp();
			var cd = this.getOption("cookieDomain");
			this.setUserInfoCookie(cd, cts);
			this.setSessionInfoCookie(cd, cts);
		},

		setUserInfoCookie : function(cd, cts) {

			var days = 730.484; // 2 years
			var cv;
			var session = 1;

			if (this.isCookieExist("bmsa_u") && this.isCookieExist("bmsa_s")) {
				cv = util.getCookie("bmsa_u");

			} else if (this.isCookieExist("bmsa_u")) {
				session += 1;
				cv = this.generateUserInfoCV(cts, session);

			} else {
				cv = util.generateUserId() + "." + cts + "." + cts + "." + cts
						+ "." + session;
			}

			util.setCookie("bmsa_u", cv, days, "/", cd, false);
		},

		setSessionInfoCookie : function(cd, cts) {

			var days = 0.0208333; // 30 minutes from now
			var pv = 1;
			var cv;

			if (this.isCookieExist("bmsa_s")) {
				cv = this.generateSessionInfoCV(cts);
			} else {
				cv = pv + "." + cts;
			}

			util.setCookie("bmsa_s", cv, days, "/", cd, false);

		},
		
		getValues : function(name) {
			var cv = util.getCookie(name);
			var result = null;
			if (cv != null) {
				result = cv.split(".");
			}

			return result;
		},

		getUserId : function(value) {
			return value != null ? value[0] : util.generateUserId();
		},

		getLastVisit : function(value) {
			return value != null ? value[2] : util.getCurrentUnixTimeStamp();
		},

		getFirstVisit : function(value) {
			return value != null ? value[1] : util.getCurrentUnixTimeStamp();
		},

		generateUserInfoCV : function(cts, session) {
			var value = this.getValues("bmsa_u");
			var res = this.getUserId(value) + "." + this.getFirstVisit(value)
					+ "." + this.getLastVisit(value) + "." + cts + "."
					+ session;
			return res;
		},

		generateSessionInfoCV : function(cts) {
			var value = this.getValues("bmsa_s");
			var pv = parseInt(this.getPageView(value)) + 1;
			var res = pv + "." + this.getTSOfSessionInfoCookie(value, cts);
			return res;
		},

		getPageView : function(value) {
			return value != null ? value[0] : 1;
		},

		getTSOfSessionInfoCookie : function(value, cts) {
			return value != null ? value[1] : cts;
		},
		
		isCookieExist : function(name) {
			var c = d.cookie;
			return c.indexOf(name) != -1 ? true : false;
		},

	};

	var commandQueue = function() {
		var asyncCmds = [];
	};

	commandQueue.prototype = {
		push : function(cmd, callback) {
			var args = Array.prototype.slice.call(cmd, 1);
			var obj_name = '';
			var method = '';
			var check = util.strpos(cmd[0], '.');
			if (!check) {
				obj_name = 'tracker';
				method = cmd[0];
			} else {
				var parts = cmd[0].split('.');
				obj_name = parts[0];
				method = parts[1];
			}

			if (typeof window[obj_name] == "undefined") {

				window[obj_name] = new tracker({
					globalObjectName : obj_name
				});
				window[obj_name]["setUp"].call(this, window[obj_name]);
			}

			if (method !== "doNotTrack") {
				window[obj_name][method].apply(window[obj_name], args);
			}

			if (callback && (typeof callback == 'function')) {
				callback();
			}
		},
		loadCmds : function(cmds) {
			this.asyncCmds = cmds;
		},
		process : function() {
			var scope = this;
			var callback = function() {
				if (scope.asyncCmds.length > 0) {
					scope.process();
				}
			};
			this.push(this.asyncCmds.shift(), callback);
		}
	};

	if (util.isBrowserTrackable()) {
		if (typeof bmsa === 'undefined') {
			var q = new commandQueue();
		} else {
			if (util.isArray(bmsa)) {
				var q = new commandQueue();
				q.loadCmds(bmsa);
			}
		}
		window['bmsa'] = q;
		window['bmsa'].process();
	}

})(jQuery, document, window);