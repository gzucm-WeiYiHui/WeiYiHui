function custom_close() {
    if (confirm("您确定要关闭本页吗？")) {
        window.opener = null;
        window.open('', '_self');
        window.close();
    }
    else {
    }
}

($(document).ready(function () {
    $(".mr-auto li").hover(function () {
        $(this).find("em").animate({ opacity: "show", top: "50" }, "fast");
    }, function () {
        $(this).find("em").animate({ opacity: "hide", top: "50" }, "fast");
    });
}));

($(function () {
    var count = 99;
    var t = $('#gouwuche-good-num');/*  数量显示框*/
    $('#plus').click(function () {
        if (t.val() < count) {/* 数量最大不能超过商品库存量 */
            t.val(parseInt(t.val()) + 1);
        } else {
            t.val(count.val());
        }
    })
    $('#minus').click(function () {
        if (t.val() <= 1) {	/*数量最少为1  */
            t.val(1);
        } else {
            t.val(parseInt(t.val()) - 1);
        }
    })
}));

// 获取全选/全不选选项
var goods = document.getElementsByName("check-item");
var checkOrCancelAll = document.getElementById("checkOrCancelAll");
var checkCancelAll = document.getElementById("checkCancelAll");
console.log(goods)

function myClick(objStr, fun) {
    var obj = document.getElementById(objStr);
    obj.onclick = fun;
}
// 全选/全不选

myClick("checkOrCancelAll", function () {
    if (this.checked) {
        checkCancelAll.checked = true;
        for (var i = 0; i < goods.length; i++) {
            goods[i].checked = true;
        }
    } else {
        checkCancelAll.checked = false;
        for (var i = 0; i < goods.length; i++) {
            goods[i].checked = false;
        }
    }
});

myClick("checkCancelAll", function () {
    if (this.checked) {
        checkOrCancelAll.checked = true;
        for (var i = 0; i < goods.length; i++) {
            goods[i].checked = true;
        }
    } else {
        checkOrCancelAll.checked = false;
        for (var i = 0; i < goods.length; i++) {
            goods[i].checked = false;
        }
    }
});

for (var i = 0; i < goods.length; i++) {
    goods[i].onclick = function () {
        checkOrCancelAll.checked = true;
        checkCancelAll.checked = true;
        for (var i = 0; i < goods.length; i++) {
            if (!goods[i].checked) {
                checkOrCancelAll.checked = false;
                checkCancelAll.checked = false;
                break;
            }
        }
    };
}














