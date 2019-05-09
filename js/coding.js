/* global $, document, Audio */

$(document).ready(function () {

    'use strict';

    var concat = '',
        result, final_result;

    $('#on').click(function () {
        $('#data, #result').css({
            'visibility': 'visible'
        });
        $('#data, #result span').text(0);
        concat = '';
        $('.power').addClass('text-green-light').removeClass('text-red-light');
    });

    $('#off').click(function () {
        $('#data, #result').css({
            'visibility': 'hidden'
        });
        $('#data, #result span').text(0);
        concat = '';
        $('.power').addClass('text-red-light').removeClass('text-green-light');
    });

    //Calculation

    //Click event
    $('.calc-btn').on('click keydown', function () {
        if ($(this).data('role') !== 'operator') {
            concat += $(this).data('val');
            print_screen();
        } else {
            concat += $(this).data('sign');
            print_screen();
        }
    });

    //Key event

    // Numbers keytone
    $(document).keydown(function (event) {
        if (event.keyCode === 48 || event.keyCode === 96) {
            concat += '0';
            print_screen();
        }
        if (event.keyCode === 49 || event.keyCode === 97) {
            concat += '1';
            print_screen();
        }
        if (event.keyCode === 50 || event.keyCode === 98) {
            concat += '2';
            print_screen();
        }
        if (event.keyCode === 51 || event.keyCode === 99) {
            concat += '3';
            print_screen();
        }
        if (event.keyCode === 52 || event.keyCode === 100) {
            concat += '4';
            print_screen();
        }
        if (event.keyCode === 53 || event.keyCode === 101) {
            concat += '5';
            print_screen();
        }
        if (event.keyCode === 54 || event.keyCode === 102) {
            concat += '6';
            print_screen();
        }
        if (event.keyCode === 55 || event.keyCode === 103) {
            concat += '7';
            print_screen();
        }
        if (event.keyCode === 56 || event.keyCode === 104) {
            concat += '8';
            print_screen();
        }
        if (event.keyCode === 57 || event.keyCode === 105) {
            concat += '9';
            print_screen();
        }
        if (event.keyCode === 190 || event.keyCode === 110) {
            concat += '.';
            print_screen();
        }
        // Numbers keytone

        // sign operator
        // i'll complete keys with shiftKey
        if (event.keyCode === 107) {
            concat += '+';
            print_screen();
        }
        if (event.keyCode === 189 || event.keyCode === 109) {
            concat += '-';
            print_screen();
        }
        if (event.keyCode === 106) {
            concat += '*';
            print_screen();
        }
        if (event.keyCode === 111) {
            concat += '/';
            print_screen();
        }


        // Enter event
        if (event.keyCode === 13) {
            show_final_result();
        }

        //delete
    });


    $('.result').click(function () {
        show_final_result();
    });

    $('#percentage').click(function () {
        get_final_result();
        final_result /= 100;
        $('#result').children('span').text(final_result);
    });

    $('#yard').click(function () {
        get_final_result();
        final_result *= 1.09361;
        $('#result').children('span').text(final_result);
    });

    $('#feet').click(function () {
        get_final_result();
        final_result *= 3.28084;
        $('#result').children('span').text(final_result);
    });

    $('#inch').click(function () {
        get_final_result();
        final_result *= 39.3701;
        $('#result').children('span').text(final_result);
    });

    $('#cm').click(function () {
        get_final_result();
        final_result *= 100;
        $('#result').children('span').text(final_result);
    });




    function get_final_result() {
        result = $('#data').text();
        final_result = eval(result);
        //final_result = Number(final_result);
        $('#result').children('span').text(final_result);
    }

    function show_final_result() {
        get_final_result();
        $('#data').text(final_result);
        concat = final_result;
    }

    function print_screen() {
        $('#data').text(concat);
        get_final_result();
    }
});