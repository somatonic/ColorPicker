$(function(){
    $('div[id^=ColorPicker_]').each(function(){
        var $colorpicker = $(this);
        $colorpicker.ColorPicker({
            color: $(this).data('color'),
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                $colorpicker.css('backgroundColor', '#' + hex);
                $colorpicker.next('input').val(hex).trigger('change');
            }
        });

    });
    $('a.ColorPickerReset').bind('click',function(e){
        e.preventDefault();
        var color = $(this).data('default') ? "#"+$(this).data('default') : 'transparent';
        $(this).parent().find('input').val($(this).data('default')).trigger('change');
        $(this).parent().find('div[id^=ColorPicker_]').ColorPickerSetColor($(this).data('default'));
        $(this).parent().find('div[id^=ColorPicker_]')
            .css('backgroundColor', color)
            .attr('data-color', $(this).data('default'));
    });
});