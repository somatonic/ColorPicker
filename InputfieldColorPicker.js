/**
 * An Inputfieldtype for handling Colors
 * used by the FieldtypeColorPicker/InputfieldColorPicker
 *
 * created by Philipp "Soma" Urlich
 * ColorPicker jQuery Plugin by http://www.eyecon.ro/colorpicker/
 *
 * Licensed under LGPL3 http://www.gnu.org/licenses/lgpl-3.0.txt
 *
 */

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
        var color = $(this).data('default') && $(this).data('default')!="transparent" ? "#"+$(this).data('default') : 'transparent';
        $(this).parent().find('input').val($(this).data('default')).trigger('change');
        $(this).parent().find('div[id^=ColorPicker_]').ColorPickerSetColor($(this).data('default'));
        $(this).parent().find('div[id^=ColorPicker_]')
            .css('backgroundColor', color)
            .css('background-image', 'none')
            .attr('data-color', $(this).data('default'));
        if(color=="transparent") {
            $(this).parent().find('div[id^=ColorPicker_]')
                .css('background-image', 'url(/site/modules/FieldtypeColorPicker/transparent.gif)');
        }
    });
    $('a.ColorPickerSwatch').bind('click',function(e){
        e.preventDefault();
        var color = $(this).data('color') && $(this).data('color')!="transparent" ? "#"+$(this).data('color') : 'transparent';
        $(this).parent().parent().parent().find('input').val($(this).data('color')).trigger('change');
        $(this).parent().parent().parent().find('div[id^=ColorPicker_]').ColorPickerSetColor($(this).data('color'));
        $(this).parent().parent().parent().find('div[id^=ColorPicker_]')
            .css('backgroundColor', color)
            .css('background-image', 'none')
            .attr('data-color', $(this).data('color'));
        if(color=="transparent") {
            $(this).parent().parent().parent().find('div[id^=ColorPicker_]')
                .css('background-image', 'url(/site/modules/FieldtypeColorPicker/transparent.gif)');
        }
    });
});
