
$(function() {
        var _day = $('.days'), _hour = $('.hours'), _min = $('.minutes'), _sec = $('.seconds');
        var countDownDate = new Date('2017-12-31T12:00:00+09:00').getTime();

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = '0' + (Math.floor(distance / (1000 * 60 * 60 * 24)));
            var hours = '0' + (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            var minutes = '0' + (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            var seconds = '0' + (Math.floor((distance % (1000 * 60)) / 1000));

            days = days.slice(-2);
            hours = hours.slice(-2);
            minutes = minutes.slice(-2);
            seconds = seconds.slice(-2);

            _day.text(days);
            _hour.text(hours);
            _min.text(minutes);
            _sec.text(seconds);

            if (distance < 0) {
                clearInterval(x);
                _day.text('00');
                _hour.text('00');
                _min.text('00');
                _sec.text('00');
            }
        }, 1000);
    });


