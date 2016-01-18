<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2008 Chi Hoang <chibox@gmail.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

require_once(PATH_tslib.'class.tslib_pibase.php');


/**
 * Plugin 'Drei D' for the 'ch_dreid' extension.
 *
 * @author	Chi Hoang <chibox@gmail.com>
 * @package	TYPO3
 * @subpackage	tx_chdreid
 */
class tx_chdreid_pi1 extends tslib_pibase {
	var $prefixId      = 'tx_chdreid_pi1';		// Same as class name
	var $scriptRelPath = 'pi1/class.tx_chdreid_pi1.php';	// Path to this script relative to the extension dir.
	var $extKey        = 'ch_dreid';	// The extension key.
	
	/**
	 * The main method of the PlugIn
	 *
	 * @param	string		$content: The PlugIn content
	 * @param	array		$conf: The PlugIn configuration
	 * @return	The content that is displayed on the website
	 */
	function main($content,$conf)	{
		$this->conf=$conf;
		$this->pi_setPiVarDefaults();
		$this->pi_loadLL();
		$this->pi_USER_INT_obj=1;	// Configuring so caching is not expected. This value means that no cHash params are ever set. We do this, because it's a USER_INT object!
	

                $js = "\t<script type=\"text/javascript\" src=\"typo3conf/ext/ch_dreid/static/js/dreid.js\"></script>\n";
		
		$GLOBALS['TSFE']->additionalHeaderData[$this->prefixId] = $js;


$content='<table width="100%" height="1" border="0" cellspacing="0" cellpadding="0"><tr><td height="1"><table width="100%"border="0" cellpadding="0" cellspacing="0"><tr><td width="99%" valign="top"><span id="titel">56 Sprites!</span></td><td><img src="typo3conf/ext/ch_dreid/static/gfx/atari.gif"></td></tr></table></td></tr><tr><td bgcolor="#FFFFFF"><img src="typo3conf/ext/ch_dreid/static/gfx/blindpix.gif" height="1"></td></tr><tr><td><img src="typo3conf/ext/ch_dreid/static/gfx/blindpix.gif" height="440" width="1"></td></tr><tr><td bgcolor="#FFFFFF"><img src="typo3conf/ext/ch_dreid/static/gfx/blindpix.gif" height="1"></td></tr><tr><td align="right" valign="top"><table width="100%"border="0" cellpadding="0" cellspacing="0"><tr><td width="99%"><span id="fussnote">&nbsp;I recommend Internet Explorer 6.x, >1024x800 Pixel Screen Resolution and a >1.3 Ghz CPU to view this screen.</span></td><td nowrap><span id="fussnote">&copy; Chi Hoang</span></td></tr></table></td></tr></table>';
	
		return $this->pi_wrapInBaseClass($content);
	}
}



if (defined('TYPO3_MODE') && $TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/ch_dreid/pi1/class.tx_chdreid_pi1.php'])	{
	include_once($TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/ch_dreid/pi1/class.tx_chdreid_pi1.php']);
}

?>
