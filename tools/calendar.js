$(function () {
    var r = Raphael("test", 300, 300);
    r.circle(150, 150, 140).attr({
        fill: "r(0.5,0.5)#ffffff-#efefef",
        stroke: "#cecece",
        "stroke-width": 1
    });
    r.circle(150, 150, 132).attr({
        fill: "r(0.5,0.5)#ffffff-#efefef",
        stroke: "#cecece"
    }).glow({
        width: 8,
        color: "#aaa"
    });
    r.circle(150, 150, 100).attr({
        fill: "#fff",
        stroke: "none",
        "fill-opacity": 0.3
    }).glow({
        width: 8,
        color: "#aaa",
        offsetx: 0,
        offsety: 0
    });

    r.rect(28, 145, 10, 4).attr({
        fill: "#999",
        stroke: "none"
    });
    r.rect(145, 28, 4, 10).attr({
        fill: "#999",
        stroke: "none"
    });
    r.rect(148, 265, 4, 10).attr({
        fill: "#999",
        stroke: "none"
    });
    r.rect(265, 148, 10, 4).attr({
        fill: "#999",
        stroke: "none"
    });

    var d = new Date();
    var ds = d.getSeconds();
    var dm = d.getMinutes();
    var dh = d.getHours();
    var dD = d.getDate();
    var dM = d.getMonth() + 1;
    var dY = d.getFullYear();
    var dT = d.getDay();
    var txtT = "日一二三四五六";

    var txt = r.text(150, 220, (dh + ":" + dm + ":" + ds)).attr({
        font: "14px Arial",
        fill: "#000"
    });
    var txt1 = r.text(150, 200, dY + "年" + dM + "月" + dD + "日  星期" + txtT.charAt(dT)).attr({
        font: "14px Arial",
        fill: "#000"
    });

    var h = r.rect(144, 150, 8, 100, 4).attr({
        fill: "#ccc",
        stroke: "none"
    });
    var m = r.rect(148, 150, 4, 115, 2).attr({
        fill: "#ccc",
        stroke: "none"
    });
    var s = r.rect(150, 150, 1, 130).attr({
        fill: "#f60",
        stroke: "none"
    });

    r.circle(150, 150, 10).attr({
        fill: "#f60",
        stroke: "none"
    }).glow({
        width: 6,
        color: "#f60"
    });
    r.circle(150, 150, 6).attr({
        fill: "r(0.5,0.5)#ffffff-#efefef",
        stroke: "none"
    });

    h.rotate((dh + 30 + (dm / 60) + (ds / (60 * 60))) * 30, 150, 150);
    m.rotate((dm + 30 + (ds / 60)) * 6, 150, 150);
    s.rotate((ds + 30) * 6, 150, 150);

    setInterval(function () {
        d = new Date();
        ds = d.getSeconds();
        dm = d.getMinutes();
        dh = d.getHours();
        dD = d.getDate();
        dM = d.getMonth() + 1;
        dY = d.getFullYear();
        txt.attr({
            text: dh + ":" + dm + ":" + ds
        });
        txt1.attr({
            text: dY + "年" + dM + "月" + dD + "日  星期" + txtT.charAt(dT)
        });
        h.rotate(6 / (60 * 60), 150, 150);
        m.rotate(6 / 60, 150, 150);
        s.rotate(6, 150, 150);
    }, 1000);

});