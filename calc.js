var display_content = '';
function main() {
    $('#calc-main-body').hide();
    $('#calc-main-body').fadeIn(1000);
    
    $('#equality-sign').on('click', function() {
        document.getElementById('calc-display').innerHTML = eval(display_content);
        display_content = '';
    });
    
    $('#delete-button').on('click', function() {
        display_content = display_content.slice(0, -1);
        document.getElementById('calc-display').innerHTML = display_content;
    });
    
    $('.calc-button').on('click', function() {
        display_content += $(this).text();
        document.getElementById('calc-display').innerHTML = display_content;
    });
  }
$(document).ready(main);
