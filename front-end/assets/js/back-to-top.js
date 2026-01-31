
let back_top_button = document.getElementById("back-to-top")

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        back_top_button.style.display = "flex";
    }
    else {
        back_top_button.style.display = "none";
    }
}

back_top_button.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
