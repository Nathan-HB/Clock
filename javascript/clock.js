

function degreeToRad(degree){
    var factor = Math.PI/180;
    return degree*factor
}

function drawTime(){
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');

    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    var millisecs = now.getMilliseconds();
    var newSecs = secs + (millisecs / 1000);
    var newMins = mins + (secs / 60);
    var newHours = hours + (mins / 60);

    gradient = c.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, 400);
    gradient.addColorStop(0,'#094c57');
    gradient.addColorStop(1, '#000000');
    c.fillStyle = gradient;
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.lineWidth = 25;
    c. strokeStyle = "#28d1fa";
    c.lineCap = "round";
    c.shadowBlur = 30;
    c.shadowColor = '#28d1fa';

    c.beginPath();
    c.arc(canvas.width/2, canvas.height/2, 300, degreeToRad(270), degreeToRad((newHours+1)*30)-90);
    c.stroke();

    c.beginPath();
    c.arc(canvas.width/2, canvas.height/2, 240, degreeToRad(270), degreeToRad(newMins*6)-90);
    c.stroke();

    c.beginPath();
    c.arc(canvas.width/2, canvas.height/2, 170, degreeToRad(270), degreeToRad(newSecs*6)-90);
    c.stroke();

    c.beginPath();
    c.arc(canvas.width/2, canvas.height/2, 110, 0, Math.PI*2);
    c.arc(canvas.width/2, canvas.height/2, 360, 0, Math.PI*2);
    c.stroke();
}
window.onload = setInterval(drawTime,40)
