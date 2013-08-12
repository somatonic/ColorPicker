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
        // prevent box collapse
        $colorpicker.parent().css({overflow: 'auto'});
        $colorpicker.ColorPicker({
            color: $(this).data('color').toString(),
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
                $colorpicker.css('background-image', 'none');
                $colorpicker.next('input').val(hex).trigger('change');
            }
        });

    });

    $('a.ColorPickerReset').on('click',function(e){
        e.preventDefault();
        var color = $(this).data('default') && $(this).data('default') != 'transp' ? '#' + $(this).data('default') : 'transp';
        $(this).parent().find('input').val($(this).data('default')).trigger('change');
        $(this).parent().find('div[id^=ColorPicker_]').ColorPickerSetColor($(this).data('default'));
        $(this).parent().find('div[id^=ColorPicker_]')
            .css('backgroundColor', color)
            .css('background-image', 'none')
            .attr('data-color', $(this).data('default'));
        if(color == 'transp') {
            var modurl = $(this).data('modurl');
            $(this).parent().find('div[id^=ColorPicker_]')
                .css('background-image', 'url(' + modurl + 'transparent.gif)');
        }
    });

    /* additions (swatches) by @Rayden */
    $('div.ColorPickerSwatch').on('click',function(e){
        e.preventDefault();
        var color = $(this).data('color') && $(this).data('color') != 'transp' ? '#' + $(this).data('color') : 'transp';
        $(this).closest('.ui-widget-content').find('input').val($(this).data('color')).trigger('change');
        $(this).closest('.ui-widget-content').find('div[id^=ColorPicker_]').ColorPickerSetColor($(this).data('color').toString());
        $(this).closest('.ui-widget-content').find('div[id^=ColorPicker_]')
            .css('backgroundColor', color)
            .css('background-image', 'none')
            .attr('data-color', $(this).data('color'));
        if(color == 'transp') {
            var modurl = $(this).closest('.ui-widget-content').find('.ColorPickerReset').data('modurl');
            $(this).closest('.ui-widget-content').find('div[id^=ColorPicker_]')
                .css('background-image', 'url(' + modurl + 'transparent.gif)');
        }
    });
});