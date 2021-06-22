canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("3d");
roverwidth=100;
roverheight=90;
arraycar=["d09c4cfd1b93cc66dc13c8b461fd2145.jpeg","images (1).jpeg","images (2).jpeg","images.jpeg"];
randomnumber=Math.floor(Math.random()*6);
console.log(randomnumber);

bgimage=arraymars[randomnumber];
console.log("bgimage= "+bgimage);

roverimage="buggati.png";
roverx=10;
rovery=10;
function add()
{
bgimagetag=new Image();
bgimagetag.onload=uploadbackground;
bgimagetag.src=bgimage;

roverimagetag=new Image();
roverimagetag.onload=uploadbuggati;
roverimagetag.src=buggatiimage;
}
function uploadbackground()
{
ctx.drawImage(bgimagetag,0,0,canvas.width,canvas.height);
}
function uploadbuggati()
{
ctx.drawImage(roverimagetag,buggatix,buggatiy,buggatiwidth,buggatiheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;console.log(keypressed);
if(keypressed=='38')
{
up();console.log("up");
}
if(keypressed=='40')
{
down();console.log("down");
}
if(keypressed=='37')
{
left();console.log("left");
}
if(keypressed=='39')
{
right();console.log("right");
}
}

function up()
{
if(buggatiy>=0)
{
buggatiy=buggatiy-10;
console.log("when up key is pressed,x= "+buggatix+" y= "+buggatiy);
uploadbackground();
uploadbuggati();
}
}
function down()
{
if(rovery<=500)
{
rovery=rovery+10;
console.log("when down key is pressed,x= "+buggatix+" y= "+buggatiy);
uploadbackground();
uploadbuggati();
}
}
function left()
{
if(buggatix>=0)
{
buggatix=buggatix-10;
console.log("when left key is pressed,x= "+buggatix+" y= "+buggatiy);
uploadbackground();
uploadbuggati();
}
}
function right()
{
if(buggatix<=700)
{
buggatix=buggatix+10;
console.log("when right key is pressed,x= "+buggatix+" y= "+buggatiy);
uploadbackground();
uploadbuggati();
}
}