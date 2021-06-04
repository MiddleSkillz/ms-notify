let notifications = [];

const config = {
	defaultColor: 'normal',
	defaultIcon: 'fas fa-info-circle',
	defaultAlign: 'top-right',
	defaultTime: 6000,
	fadeTime: 500
}

window.addEventListener('message', function(event) {
	ShowNotification(event.data);
	RemoveNotification(event.data);
});

function CreateNotification(data) {
	let $notification = $(document.createElement('div'));

	data.type != null ? $notification.addClass('notification').addClass(data.type) : $notification.addClass('notification').addClass(config.defaultColor);
	data.align != null ? $('.notif-container').addClass(data.align) : $('.notif-container').addClass(config.defaultAlign);

	$notification.html(data.text);
	$notification.fadeIn(config.fadeTime);
	return $notification
}

function ShowNotification(data) {
	if (!data.delete) {
		let $notification = CreateNotification(data);
		$('.notif-container').append($notification);
		data.icon != null ? $notification.prepend('<i class="' + data.icon + '"></i> ') : $notification.prepend('<i class="' + config.defaultIcon + '"></i> ');

		if (data.time != -1) { 
			setTimeout(function() {
				$.when($notification.fadeOut(config.fadeTime)).done(function() {
					$notification.remove();
				});
			}, data.time != null ? data.time : config.defaultTime);
		} else {
			notifications[data.id] = $notification;
		}
	}
}

function RemoveNotification(data) {
	if (data.delete) {
		let $notification = $(notifications[data.id]);
		$.when($notification.fadeOut(config.fadeTime)).done(function() {
			$notification.remove();
			delete notifications[data.id];
		});
	}
}