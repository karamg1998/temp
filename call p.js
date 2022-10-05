var get=document.querySelector('.get');
get.addEventListener('click',Run)

function Run()
{
    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=documnet.add('a+b');

    document.body.innerHTML=document.body.innerHTML+c;
}

