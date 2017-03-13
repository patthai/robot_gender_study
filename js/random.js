var random_head;
var random_body;
var random_bottom;


function random_robot()
{

random_head = Math.floor((Math.random() * 3) + 1);
random_body = Math.floor((Math.random() * 3) + 1);
random_bottom = Math.floor((Math.random() * 3) + 1);


if (random_head == 1) { document.getElementById('part_head').src='images/part/part.001.jpeg';}
else if (random_head == 2) { document.getElementById('part_head').src='images/part/part.002.jpeg';}
else if (random_head == 3) { document.getElementById('part_head').src='images/part/part.003.jpeg';}

if (random_body == 1) { document.getElementById('part_body').src='images/part/part.004.jpeg';}
else if (random_body == 2) { document.getElementById('part_body').src='images/part/part.005.jpeg';}
else if (random_body == 3) { document.getElementById('part_body').src='images/part/part.006.jpeg';}

if (random_bottom == 1) { document.getElementById('part_bottom').src='images/part/part.007.jpeg';}
else if (random_bottom == 2) { document.getElementById('part_bottom').src='images/part/part.008.jpeg';}
else if (random_bottom == 3) { document.getElementById('part_bottom').src='images/part/part.009.jpeg';}

}

random_robot();