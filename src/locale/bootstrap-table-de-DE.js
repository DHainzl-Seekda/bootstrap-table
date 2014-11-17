/**
 * Bootstrap Table German translation
 * Author: David Hainzl <david@dhainzl.at>
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function () {
            return 'Daten werden geladen ...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return 'Zeige ' + pageNumber + ' Einträge pro Seite';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Zeige Einträge ' + pageFrom + ' bis ' + pageTo + '(Insgesamt ' + totalRows + ').';
        },
        formatSearch: function () {
            return 'Suchen';
        },
        formatNoMatches: function () {
            return 'Keine Einträge gefunden!';
        },
        formatRefresh: function () {
            return 'Aktualisieren';
        },
        formatToggle: function () {
            return 'Ansicht wechseln';
        },
        formatColumns: function () {
            return 'Spalten';
        }
    });
})(jQuery);
