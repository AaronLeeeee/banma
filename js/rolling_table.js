/**
 * Created by aaron on 2017/11/30.
 */
var speed = 50
downer_container.innerHTML = upper_container.innerHTML
function Marquee() {
    if (upper_container.offsetHeight - rolling_container.scrollTop <= 0)
        rolling_container.scrollTop -= upper_container.offsetHeight
    else {
        rolling_container.scrollTop++
    }
}

var MyMar = setInterval(Marquee, speed)
rolling_container.onmouseover = function () {
    clearInterval(MyMar)
}
rolling_container.onmouseout = function () {
        MyMar = setInterval(Marquee, speed)
}