var img=["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var i=1;
function Ch()
{
    if(i==5) i=0;
    document.image.src=img[i];
    i++;
}

function on()
{
    var p;
    p=setInterval('Ch();',2000);
}
function off()
{
    clearInterval(p);
}
