async function bubbleSort() {
    const ele = document.querySelectorAll(".singleBar");
    let len = ele.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            ele[j].style.background = 'red';
            ele[j+1].style.background = 'red';
            if (parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await delayTime(delay);
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}