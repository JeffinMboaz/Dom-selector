const heading = document.getElementById("header")
heading.textContent="Text Changed!"

const pColor=document.getElementsByClassName('text')
pColor[0].style.color = 'blue';
pColor[1].style.color = 'blue';

const ulist = document.getElementsByClassName('list-item')
for (let i = 0; i < ulist.length; i++) {
    console.log(ulist[i].textContent);
}

ulist[0].style.background='yellow';

function listColor() {
    let liColor = document.getElementsByClassName('list-item');
    for (let i = 0; i < liColor.length; i++) {
        liColor[i].style.color = 'green';
    }
}

listColor();
