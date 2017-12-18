ColorPicker
=====================

**Custom Fieldtype/Inputfield for ProcessWire 2.+/3.+**

This module gives you a new custom Fieldtype. Let's you select a color using a Colorpicker jQuery Plugin. The color selected will be stored in HEX format uppercase: "EAEAEA";

When creating a new field in the admin, you can set a default value. The default value will be set when creating a new page, and it will also be used for empty fields.

The field supports a transparent value. In the field setting you can use the name "transp" to define it. When output formatting (2.0.0) of the field is enabled, the field will return "transparent" in template code.

The field supports a "reset" button to be able to set it back to the default value.

### How to use it

To use it in your template as a background HEX color, you'd simple output the value and prefix it with a #:

```
echo "background-color: #" . $page->color;
```

Since of 2.0.0 you can enable output formatting of the field in the details settings. When enabled it will format value directly from AADDEE to "#AADDEE" and "transp" to "transparent".

```
echo "background-color: " . $page->color;
```

The colorpicker used:
[ColorPicker jQuery Plugin by Eyecon](http://www.eyecon.ro/colorpicker/)

### Changelog

**2.0.2**

- fixed issue when field is in a Repeater or RepeaterMatrix
- added support for ___markupValue() used in Lister


**2.0.1**

- Fixed default "000000" value issue in Fieldtype

**2.0.0**

- Added output formatting option to format values with prefix "#" when output in template code.
- Added checks for "0" values and returning them as "000000", just in case ProcessWire converts them to 0.

**1.0.8**

- some maintenance, remove <p> not needed
- remove overflow: auto
_ colorpicker css fix input with box sizing coming from new admin theme

**1.0.7**

- fixed typecasting bug: when a color value is numeric it should be
typecasted to string. This prevents the color picker window from not
being launched. @Rayden
- fixed small visualisation issue with the color swatch preventing a
box collapse with css. @Rayden

**1.0.6**

- added support for color swatches for easy predefining and selecting color values @Rayden
- added "transp" support for a transparent value (empty)

**1.0.5**

- fix bug with default value

**1.0.4**

- fix bug when used in repeaters

**1.0.3**

- added support for default value
- added reset link to set back to default color

**1.0.2**

- Fixed issue with colorpicker not working when used in tabs

**1.0.1**

- Remove lots of code not needed. Cleanup.

**1.0.0**

- Initial Stable Release.


### How to install:

- Download the contents of this repository and put the folder renamed as "ColorPicker" into your site/modules/ folder
- Login to processwire and got to Modules page and click "Check for new modules". You should see a note that two new modules were found. Install the FieldtypeColorPicker module under "Field" section. This will also install the required InputfieldColorPicker at the same time.
- Done
- You can now create a new field with the "ColorPicker" Fieldtype.



