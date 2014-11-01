/*jslint white: false */
/*global $, document, window, Blob */

(function () {
    'use strict';
    var filename = 'magaSeries' + Date.now() + '.txt',
        previous,
        data = '',
        blob = new Blob([data], {type: 'text/json'}),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a');

    $('.new .custom-select select').each(function () {
        var name = $(this).parent().parent().parent().children('.mgtitle').children('.mgtitlehead').children('.mgname').text();

        if (!name) {
            name = previous;
        } else {
            previous = name;
        }
        data += name + "##" + this.selectedIndex + '\n';
    });

    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4);
    }

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}());
