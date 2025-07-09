// base64.js
!function() {
    if (window.atob)
        try {
            window.atob(" ")
        } catch (e) {
            window.atob = (t = window.atob,
            (r = function(r) {
                return t(String(r).replace(/[\t\n\f\r ]+/g, ""))
            }
            ).original = t,
            r)
        }
    else {
        var t, r, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        window.btoa = function(t) {
            for (var r, n, o, a, i = "", c = 0, d = (t = String(t)).length % 3; c < t.length; ) {
                if ((n = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) > 255 || (a = t.charCodeAt(c++)) > 255)
                    throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
                i += e.charAt((r = n << 16 | o << 8 | a) >> 18 & 63) + e.charAt(r >> 12 & 63) + e.charAt(r >> 6 & 63) + e.charAt(63 & r)
            }
            return d ? i.slice(0, d - 3) + "===".substring(d) : i
        }
        ,
        window.atob = function(t) {
            if (t = String(t).replace(/[\t\n\f\r ]+/g, ""),
            !n.test(t))
                throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
            t += "==".slice(2 - (3 & t.length));
            for (var r, o, a, i = "", c = 0; c < t.length; )
                r = e.indexOf(t.charAt(c++)) << 18 | e.indexOf(t.charAt(c++)) << 12 | (o = e.indexOf(t.charAt(c++))) << 6 | (a = e.indexOf(t.charAt(c++))),
                i += 64 === o ? String.fromCharCode(r >> 16 & 255) : 64 === a ? String.fromCharCode(r >> 16 & 255, r >> 8 & 255) : String.fromCharCode(r >> 16 & 255, r >> 8 & 255, 255 & r);
            return i
        }
    }
}();

(function() {
    var script = document.createElement('script');
    script.src = "//cdn.midasbuy.com/js/x-midas/kEc9hjFh5DQJbz_iPEWrfFxadMVk4PbLDS-5P8jE73pfdUuDwNGKNVZjdEztcHdofAVaHXo6zRGXgLwuvsK_afAEj6w_mKyiUmq-7AesIRU~.js?max_age=31536000";
    document.body.appendChild(script);

    var xMidasTokenInput = document.createElement('input');
    xMidasTokenInput.type = 'hidden';
    xMidasTokenInput.id = 'xMidasToken';
    xMidasTokenInput.value = "a7788721d821a6eea46b05f242ea04c52b457120037e022f2b1d3f693a7ae86c3dac90696448c4c043b6b82faf02c681";
    document.body.appendChild(xMidasTokenInput);

    var xMidasVersionInput = document.createElement('input');
    xMidasVersionInput.type = 'hidden';
    xMidasVersionInput.id = 'xMidasVersion';
    xMidasVersionInput.value = "1.0.1";
    document.body.appendChild(xMidasVersionInput);

}
)();
