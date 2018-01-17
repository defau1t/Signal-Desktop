/*
 * vim: ts=4:sw=4:expandtab
 */
(function () {
    'use strict';
    window.Whisper = window.Whisper || {};
    storage.isBlocked = function(number) {
        var numbers = storage.get('blocked', []);

        return _.include(numbers, number);
    };
    storage.addBlockedNumber = function(number) {
        var numbers = storage.get('blocked', []);
        if (_.include(numbers, number)) {
          return;
        }

        storage.put('blocked', numbers.concat(number));
    };
    storage.removeBlockedNUmber = function(number) {
        var numbers = storage.get('blocked', []);
        if (!_.include(numbers, number)) {
          return;
        }

        storage.put('blocked', _.without(numbers, number));
    };
})();
