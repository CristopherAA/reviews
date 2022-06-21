elements = document.querySelectorAll('#stars-cont');
average = document.querySelector('#review-average');
stars = document.querySelectorAll('#selectable-star');
button = document.querySelector('#btn-send');
starSelected = 4;

updateAverage();
updateBars();


button.addEventListener('click',newReview);

for(let i=0;i<stars.length;++i){
    stars[i].addEventListener('click',selectStar);
}

function newReview(){
    console.log('Entre');
    pastNumber = parseInt(elements[starSelected].textContent);
    elements[starSelected].textContent = pastNumber+1;
    updateAverage();
    updateBars();
}
function updateAverage(){
    sum = 0;
    cont = 0;
    for(let i=0;i<elements.length;++i){
        cont += parseInt(elements[i].textContent);
        sum += parseInt(elements[i].textContent) * (i+1);
    }
    average.textContent = (sum/cont).toFixed(2);
}

function updateBars(){
    bars = document.querySelectorAll('.inside-progress-bar');
    sum = 0;
    for(let i=0;i<elements.length;++i){
        sum += parseInt(elements[i].textContent);
    }

    for(let i=0;i<bars.length;++i){
        actual = parseInt(elements[i].textContent);
        percent = (actual / sum) * 100;
        bars[i].style.width = percent+'%';
    }
}

function selectStar(e){
    for(let i=0;i<stars.length;++i){
        if(e.target == stars[i]){
            starSelected = i;
        }
    }
    for(let i=0;i<=starSelected;++i){
        stars[i].style.opacity = '100%';
    }
    for(let  i=starSelected+1;i<stars.length;++i){
        stars[i].style.opacity = '50%';
    }
}

