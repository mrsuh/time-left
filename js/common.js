var block_video = document.querySelector('.block-video');
var block_video_hide = document.querySelector('.block-video .hide');
var block_video_show = document.querySelector('.block-video .show');

block_video_show.onclick = function() {
    block_video.className = 'block-video show';
};

block_video_hide.onclick = function() {
    block_video.className = 'block-video';
};

var current_date_time = new Date();

var time_start_of_year_msec = (new Date(current_date_time.getFullYear(), 0, 1)).getTime();
var time_fin_of_year_msec = (new Date(current_date_time.getFullYear(), 11, 31)).getTime();

var current_time_msec = current_date_time.getTime();

var past_time_start_year_msec = current_time_msec - time_start_of_year_msec;
var past_time_fin_year_msec = (time_fin_of_year_msec - time_start_of_year_msec) - past_time_start_year_msec;

var msec_one_week = 604800000;
var msec_one_day = 86400000;

var days_passed = past_time_start_year_msec / msec_one_day;
var days_left = past_time_fin_year_msec / msec_one_day;

document.getElementById('days_passed').innerHTML = days_passed.toFixed(0);
document.getElementById('days_left').innerHTML = days_left.toFixed(0);

var weeks_passed = past_time_start_year_msec / msec_one_week;
var weeks_left = past_time_fin_year_msec / msec_one_week;

document.getElementById('weeks_passed').innerHTML = weeks_passed.toFixed(0);
document.getElementById('weeks_left').innerHTML = weeks_left.toFixed(0);

var str = '';
var weeks = parseInt(weeks_passed.toFixed(0)) + parseInt(weeks_left.toFixed(0));
for (var i = 1; i <= weeks; i++) {
    str += '<div class="square empty"></div>';
}
document.getElementById('cell_weeks').innerHTML = str;

str = '';
var days = parseInt(days_passed.toFixed(0)) + parseInt(days_left.toFixed(0));
for (var i = 1; i <= days; i++) {
    str += '<div class="square empty"></div>';
}

document.getElementById('cell_days').innerHTML = str;

var setColor = function (item, time) {
    setTimeout(function () {
        item.className = 'square full';
    }, time)
};

var color = function () {
    var days_passed_int = days_passed.toFixed(0) - 1;
    var list_days = document.querySelectorAll("#cell_days .square");
    for (var i = 0; i < list_days.length && i < days_passed_int; i++) {
        setColor(list_days[i], i * 30);
    }
    var weeks_passed_int = weeks_passed.toFixed(0) - 1;
    var list_weeks = document.querySelectorAll("#cell_weeks .square");
    for (var i = 0; i < list_weeks.length && i < weeks_passed_int; i++) {
        setColor(list_weeks[i], i * 210);
    }
};

setTimeout('color()', 1000);