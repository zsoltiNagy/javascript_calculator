var display_content = '';
function main() {
    $('#calc-main-body').hide();
    $('#calc-main-body').fadeIn(500);
    
    $('#equality-sign').on('click', function() {
        $(this).css("background-color","salmon");
        $(this).css("box-shadow","0px 4px crimson");
        $("#calc-led-light-1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        if (isFinite(eval(display_content))) {
            document.getElementById('calc-display').innerHTML = eval(display_content);
        } else {
            document.getElementById('calc-display').innerHTML = '';
        }
        display_content = '';
    });

    $('#delete-button').on('click', function() {
        $(this).css("background-color","salmon");
        $(this).css("box-shadow","0px 4px crimson");
        $("#calc-led-light-3").fadeIn(100).fadeOut(100).fadeIn(100);
        //display_content = display_content.slice(0, -1);
        display_content = '';
        document.getElementById('calc-display').innerHTML = display_content;
    });
    
    $('.calc-button').on('click', function() {
        $(this).toggleClass('clicked', 1000);
        $("#calc-led-light-2").fadeIn(100).fadeOut(100).fadeIn(100);
        display_content += $(this).text();
        if (display_content.length > 23 && isFinite(eval(display_content))) {
            display_content = eval(display_content);
        } else if (display_content.length > 23 && !isFinite(eval(display_content))) {
            alert(" Nice job!\n You reached the edge of javascript integer handling!\n \
MAX: "+Number.MAX_VALUE+"\n MIN: "+Number.MIN_VALUE);
            display_content = '';
        };
        document.getElementById('calc-display').innerHTML = display_content;
    });
    
    $('.calc-button').mousedown(function() {
        $(this).toggleClass('clicked', 1000);
    });

    $('#equality-sign').mousedown(function() {
        $(this).css("background-color","crimson");
        $(this).css("box-shadow","none");
    });


    $('#delete-button').mousedown(function() {
        $(this).css("background-color","crimson");
        $(this).css("box-shadow","none");
    });
  }
$(document).ready(main);
