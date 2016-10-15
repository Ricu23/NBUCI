/**
 * NBUCI by Rares Hideg
 * http://nbuci.ga
 * This File is not at all elegant,
 * It is as straight forward as possible, for the simples mind with basic jQuery knowledge to understand.
 * Use it as you wish or as it is.
 */
var pathname = window.location.pathname;
var row = $('.row').get(0).outerHTML;
var cl;
$(document).ready(function(){
    $('input#keypad').val('').focus().click();

    $(document).on('click', 'body', function(e){
        if(!$(e.target).is('input#keypad')) {
            // do something
            $('input#keypad').focus().click();
        }
    })


    $(document).on('keydown', 'input#keypad', function(event){
        var key = event.which;

        if(key == 13) {
            $('.carret').remove();
            $('.highlight').removeClass('highlight');
            $('.pointer').removeClass('pointer');

            var c = $('tr:last .input').text().trim();
            $.ajax({
                url: pathname,
                data: { c:c },
                type: 'post',
                async: true,
                success: function(data)
                {
                    $('table tbody').append(data);
                },
                complete: function()
                {
                    $('table tbody').append(row);
                    $('input#keypad').val('');

                    $("html, body").animate({ scrollTop: $('table').height()-17 }, 100);
                }
            });

        }

        if(key == 8){
            if($('.input span.highlight').length > 0){
                $('tr:last span.highlight').prev().remove();
            }else{
                $('tr:last .input span:not(.carret)').last().remove();
            }

        }

        if(key == 46){ // delete
            if($('tr:last .input span.highlight').next('.carret').length > 0){
                $('tr:last .input span.highlight').remove();
                $('tr:last .input span.carret').show();
            }else{
                $('tr:last .input span.highlight').addClass('void').next('span').addClass('highlight');
                $('.void').remove();
            }
        }


        if(key == 37){ // left
            if($('tr:last .input span.highlight').prev().length > 0){
                $('tr:last .input span.highlight').removeClass('highlight').prev().addClass('highlight');

            }else
            if($('tr:last .input span').prev().length > 0){

                $('tr:last .input span.carret').prev().addClass('highlight');
                $('tr:last .input span.carret').hide();
            }
        }

        if(key == 39){ // right
            if($('tr:last .input span.highlight').next('.carret').length > 0){
                $('tr:last .input span.highlight').removeClass('highlight');
                $('tr:last .input span.carret').show();
            }else{
                $('tr:last .input span.highlight').removeClass('highlight').next('span').addClass('highlight');
            }
        }

        if(key == 38){ // up
            if($('tr.row.pointer').length > 0)
            {
                if($('tr.row.pointer').prevAll('.row').length > 0){
                    $('tr:last .input span:not(.carret)').remove();
                    $($('tr.row.pointer').removeClass('pointer').prevAll('.row').first().addClass('pointer').find('.input').html()).insertBefore($('tr:last .carret'));

                    $('tr:last .carret').show();
                }
            }else
            if($('tr.row:nth-last-child(3)').length > 0){
                cl = $('tr:last .input').html();
                $($('tr.row:nth-last-child(3)').addClass('pointer').find('.input').html()).insertBefore($('tr:last .carret'));

                $('tr:last .carret').show();
            }

        }

        if(key == 40){ // down
            if($('tr.row.pointer').length > 0)
            {
                if($('tr.row.pointer').nextAll('.row').length > 1){

                    $('tr:last .input span:not(.carret)').remove();
                    $($('tr.row.pointer').removeClass('pointer').nextAll('.row').first().addClass('pointer').find('.input').html()).insertBefore($('tr:last .carret'));

                    $('tr:last .carret').show();
                }else{
                    $('tr.row.pointer').removeClass('pointer');
                    $('tr:last .input').html(cl);

                    $('tr:last .carret').show();
                }

            }else{
                $('tr:last .input').html(cl);

                $('tr:last .carret').show();
            }
        }

    });


    $(document).on('keyup', 'input#keypad', function(event){
        var key = event.which;
        var t = $(this).val();

        if(key == 229 && t == '')
        {
            $('tr:last .input span:not(.carret)').last().remove();
        }else{
            if($('.input span.highlight').length > 0){
                for (var i = 0, len = t.length; i < len; i++) {
                    $('<span>'+t[i]+'</span>').insertBefore($('tr:last span.highlight'));
                }
            }else{
                for (var i = 0, len = t.length; i < len; i++) {
                    $('<span>'+t[i]+'</span>').insertBefore($('tr:last .carret'));
                }
            }
            $(this).val('');
        }

    })


});