<?php

/**
 * Class to hold a range slider
 *
 */
class ColorSwatch extends WireData {


	public function __construct() {
		$this->set('color', '');
	}

	public function set($key, $value) {
		if($key == 'color') {
			// sanitize the HEX value and cut off characters if longer than 6
			if($value!="transparent") {
				$value = strtoupper(substr($value, 0, 6));
			}
		}
		return parent::set($key, $value);
	}

	public function get($key) {
		return parent::get($key);
	}

	
}



