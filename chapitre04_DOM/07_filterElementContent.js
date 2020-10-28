const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    if(para.innerText.includes('success')){
        para.classList.add('success');
    }
})