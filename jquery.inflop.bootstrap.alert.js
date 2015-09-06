/* jshint globalstrict: true */
"use strict";

if (typeof jQuery === 'undefined') {
	throw new Error('jQuery is required');
};

(function ($) {
	$.fn.showBootstrapAlertSuccess = function (message, contentType, dissmisable, timeout) {
		return this.showBootstrapAlert(message, Bootstrap.AlertType.Success, contentType, dissmisable, timeout);
	};

	$.fn.showBootstrapAlertDanger = function (message, contentType, dissmisable, timeout) {
		return this.showBootstrapAlert(message, Bootstrap.AlertType.Danger, contentType, dissmisable, timeout);
	};

	$.fn.showBootstrapAlertWarning = function (message, contentType, dissmisable, timeout) {
		return this.showBootstrapAlert(message, Bootstrap.AlertType.Warning, contentType, dissmisable, timeout);
	};

	$.fn.showBootstrapAlertInfo = function (message, contentType, dissmisable, timeout) {
		return this.showBootstrapAlert(message, Bootstrap.AlertType.Info, contentType, dissmisable, timeout);
	};

	$.fn.showBootstrapAlert = function (message, alertType, contentType, dissmisable, timeout) {
		if (typeof dissmisable === 'undefined' || dissmisable == null) {
			dissmisable = false;
		}

		if (typeof timeout === 'undefined' || timeout == null) {
			timeout = 0;
		}

		if (typeof contentType === 'undefined' || contentType == null) {
			contentType = Bootstrap.ContentType.Text;
		}

		return this.each(function() {
			var ref = $(this);
			ref.empty();
			var closeBtn = null;

			$(this).addClass(alertType.Background);

			if (dissmisable) {
				closeBtn = $("<button></button>")
					.prop('type', 'button')
					.prop('aria-hidden', true)
					.html('&times;')
					.addClass('close')
					.click(function () {
						ref.hide(200);
				});

				$(this).append(closeBtn);
			}

			if (timeout > 0) {
				setTimeout(function () {
					ref.hide(200);
				}, timeout);
			}

			var icon = $('<span></span>').prop('aria-hidden', true).addClass(alertType.Icon);
			var alert = $('<div></div>').css('display', 'inline').css('margin-left', '5px');

			switch (contentType) {
				case Bootstrap.ContentType.Html:
					alert.html(message).find('a').addClass('alert-link');
					break;
				case Bootstrap.ContentType.Text:
					alert.text(message);
					break;
			}

			$(this).append(icon);
			$(this).append(alert);

			$(this).show();
		});
	};
}(jQuery));

var Bootstrap = {
	AlertType: {
		Success: {
			Background: "alert alert-success",
			Icon: "glyphicon glyphicon-ok"
		},
		Info: {
			Background: "alert alert-info",
			Icon: "glyphicon glyphicon-info-sign"
		},
		Warning: {
			Background: "alert alert-warning",
			Icon: "glyphicon glyphicon-alert"
		},
		Danger: {
			Background: "alert alert-danger",
			Icon: "glyphicon glyphicon-exclamation-sign"
		},
	},

	ContentType: {
		Html: "html",
		Text: "text"
	},
};