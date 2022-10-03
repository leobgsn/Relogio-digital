const currenTime = () => {
    const el = document.querySelector("h1");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh <10 ? `0${hh}` : hh;
    mm = mm <10 ? `0${hh}` : mm;
    ss = ss <10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time;


}

currenTime();
setInterval(currenTime, 1000);