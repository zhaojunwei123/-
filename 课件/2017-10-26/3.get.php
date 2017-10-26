<?php
$callback = $_GET['callback'];
$query = $_GET['query'];
$ymjz = file_get_contents('https://www.kaola.com/getSuggestKeyword.html?query='.$query);
echo  $callback . '('. $ymjz .')';