window.onscroll = function() {
    const progressBar = document.getElementById("progressBar");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
};