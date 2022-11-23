<?php

declare(strict_types=1);

namespace d8;

interface InputActionHelperInterface{
	public function checkFieldsAvailability();
	public function getDataFromFields();
	function validateData();
}