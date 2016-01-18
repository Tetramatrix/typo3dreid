<?php
if (!defined ('TYPO3_MODE')) 	die ('Access denied.');

t3lib_div::loadTCA('tt_content');
$TCA['tt_content']['types']['list']['subtypes_excludelist'][$_EXTKEY.'_pi1']='layout,select_key';


t3lib_extMgm::addPlugin(array('LLL:EXT:ch_dreid/locallang_db.xml:tt_content.list_type_pi1', $_EXTKEY.'_pi1'),'list_type');


t3lib_extMgm::addStaticFile($_EXTKEY,"pi1/static/css","Dreid CSS");
t3lib_extMgm::addStaticFile($_EXTKEY,"pi1/static/ts","Dreid Typoscript");



if (TYPO3_MODE=="BE")	$TBE_MODULES_EXT["xMOD_db_new_content_el"]["addElClasses"]["tx_chdreid_pi1_wizicon"] = t3lib_extMgm::extPath($_EXTKEY).'pi1/class.tx_chdreid_pi1_wizicon.php';
?>
