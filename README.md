ColorPicker 1.0.3
=====================

**Custom Fieldtype/Inputfield for ProcessWire 2.+**

This module gives you a new custom Fieldtype. Let's you select a color using a Colorpicker jQuery Plugin. The color selected will be stored in HEX format uppercase: "EAEAEA";

To use it in your template as a background HEX color, you'd simple output the value and prefix it with a #:

```
echo "background-color: #" . $page->color;
```

When creating a new field in the admin, you can set a default value the field should be prefilled with when creating a new page. The field supports a "reset" button to be able to set it back to the default value.

The colorpicker used:
[ColorPicker jQuery Plugin by Eyecon](http://www.eyecon.ro/colorpicker/)

### Changelog

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



