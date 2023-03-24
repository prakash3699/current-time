function b()
{
date=new Date();
hour=date.getHours();
minute=date.getMinutes();
second=date.getSeconds();
timing=date.toLocaleString();
x=document.getElementById("a1");
x.innerHTML=timing;
}

function start(){
	clr=setInterval(b,1000);
}

function stop(){
	clearInterval(clr);
}