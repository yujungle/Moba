
window.addEventListener('load', function () {

    // 首页的菜单
    var menu = document.querySelector(".menu");
    var list = document.querySelector(".list");
    var lis = list.querySelectorAll("ul li");
    var header = document.querySelector("header");
    var pg1 = document.querySelector("#pg1")

    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', header_Bar, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = header_Bar;//IE/Opera/Chrome/Safari
    function header_Bar() {
        var barhight = pg1.offsetTop;
        if (document.compatMode == "BackCompat") {
            var elementScrollTop = document.body.scrollTop;
        } else {
            var elementScrollTop = document.documentElement.scrollTop;
        }
        if (elementScrollTop - barhight >= 200) {
            header.style.position = "fixed";
        }
        else if (elementScrollTop - barhight <= 300) {
            header.style.position = "relative"
        }
    }
    menu.onclick = function () {
        // console.log("click");
        menu.style.display = "none";
        list.style.display = "inline-block";
    }
    lis[3].onclick = function () {
        menu.style.display = "inline-block";
        list.style.display = "none";
    }

    // 产品展示

    var btns = document.querySelectorAll("#pg2 .bar .btn");
    var boxs = document.querySelectorAll(".box-contain");
    var webs = document.querySelectorAll("#pg2 .web");
    var apps = document.querySelectorAll("#pg2 .app");
    var sapps = document.querySelectorAll("#pg2 .sapp");
    console.log(sapps)

    for (var i = 0; i < btns.length; i++) {
        (function (i) {
            console.log(3)
            var pa = btns[i].querySelector("p")
            pa.onmousemove = function () {
                for (var i = 0; i < btns.length; i++) {
                    if (btns[i].style.borderBottom == "none") {
                        pa.style.borderBottom = "1px solid #565656";
                    }
                }
            };
            pa.onmouseout = function () {
                pa.style.borderBottom = "none";
            };
            btns[i].onclick = function () {
                console.log("wowowow" + i)
                setTimeout(() => {
                    for (var j = 0; j < btns.length; j++) {
                        if (j != i) {
                            btns[j].style.borderBottom = "none";
                        }
                        else {
                            pa.style.borderBottom = "none";
                            btns[i].style.borderBottom = "1px solid #565656"
                        }
                    }

                }, 0);
                if (i === 0) {
                    for (var j = 0; j < webs.length; j++) {
                        webs[j].style.display = "block"
                    }
                    for (var j = 0; j < apps.length; j++) {
                        apps[j].style.display = "block";
                    }
                    for (var j = 0; j < sapps.length; j++) {
                        sapps[j].style.display = "block";
                    }
                }
                else if (i === 1) {
                    for (var j = 0; j < webs.length; j++) {
                        webs[j].style.display = "block"
                    }
                    for (var j = 0; j < apps.length; j++) {
                        apps[j].style.display = "none";
                    }
                    for (var j = 0; j < sapps.length; j++) {
                        sapps[j].style.display = "none";
                    }
                }
                else if(i===2){
                    for (var j = 0; j < webs.length; j++) {
                        webs[j].style.display = "none"
                    }
                    for (var j = 0; j < apps.length; j++) {
                        apps[j].style.display = "block";
                    }
                    for (var j = 0; j < sapps.length; j++) {
                        sapps[j].style.display = "none";
                    }
                }
                else if(i===3){
                    for (var j = 0; j < webs.length; j++) {
                        webs[j].style.display = "none"
                    }
                    for (var j = 0; j < apps.length; j++) {
                        apps[j].style.display = "none";
                    }
                    for (var j = 0; j < sapps.length; j++) {
                        sapps[j].style.display = "block";
                    }
                }
            };
        })(i);
    }
    // btns[0].onclick = function(){

    // }
    // btns[1].onclick = function(){

    // }



    for (var i = 0; i < boxs.length; i++) {
        (function (i) {
            var img1 = boxs[i].querySelector(".img1")
            var img = img1.querySelector("img")
            var add = boxs[i].querySelector(".add")
            add.style.height = img1.clientHeight + "px";
            add.style.width = img1.clientWidth + "px";
            img1.style.height = img.clientHeight + "px";
            img1.style.width = img.clientWidth + "px";
            // add.onmouseover = onmouse();
            // img.onmouseout = onmouseOut();  
            var timeout = null;

            boxs[i].onmouseover = function onmouseOver() {
                console.log(img1.clientHeight)
                console.log(add.clientHeight)
                // img1.style.height=img.style.height;
                // var p=img.getBoundingClientRect();
                // console.log(p)
                // var h=img.clientHeight;
                // var w=img.clientWidth
                img.style.width = "120%";
                img.style.height = "120%";
                add.style.zIndex = "1";
                add.style.top = "10px";
                timeout = setTimeout(function () {
                    console.log("index")
                    img1.style.zIndex = "-1"
                }, 600);
            }
            boxs[i].onmouseout = function onmouseOut() {
                clearTimeout(timeout)
                console.log("out????")
                img.style.width = "100%";
                img.style.height = "100%";
                // img1.style.zIndex="1"
                add.style.zIndex = "-1"
                img1.style.zIndex = "1"
                add.style.top = "400px";
                // add.style.left = "30px";
                // img1.style.opacity="1"
            }
            img2 = add.querySelector("img")


        })(i);
    }


    // 部门介绍
    var groups = document.querySelectorAll("#pg3 .row .content")
    for (var i = 0; i < groups.length; i++) {
        (function (i) {
            groups[i].onmouseover = function () {
                var h5 = groups[i].querySelector("h5");
                // console.log(h5)
                h5.style.borderBottom = "1px solid #000"
                // h5.style.borderBottom = "4rem"
            }
            groups[i].onmouseout = function () {
                var h5 = groups[i].querySelector("h5");
                // console.log("heieihei")
                h5.style.borderBottom = "1px solid #fff"
            }
        })(i)
    }

})
    // btns[0].addEventListener('onclick', function () {
    //     for (var i = 0; i < btns.length; i++) {
    //         console.log(i)
    //         btns[i].onmouseover = function () {
    //             console.log(i)
    //             btns[i].style.borderBottom = "1px solid #565656";
    //         }
    //         btns[i].onmouseout = function () {
    //             btns[i].style.borderBottom = "1px solid #565656";
    //         }
    //         btns[i].onclick = function () {
    //             console.log(i)
    //             for (var j = 0; j < btns.length && j != i; j++) {
    //                 btns[j].style.borderBottom = "none";
    //             }
    //         }
    //     }
    // }
    // )
        // btns[0].onclick = function () {
        //     console.log(0)
        // }
        // function btnOn(){
        // }


    //     console.log(btns[0])
    //     btns[0].onclick = function(){
    //         for (var j=0;j<btns.length && j!=i;j++){
    //             btns[j].style.borderBottom = "none";
    //         }
    //     }
    //     btns[0].onclick = function () {
    //         console.log(0)
    //     }
