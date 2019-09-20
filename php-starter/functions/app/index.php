<?php

$gl = 1;

function main($event, $context) {
    global $gl;
    print "good";
    print " job ";
    print $gl;
    print "\n";
    $gl += 1;
    error_log( "Hello, errors!" );
    var_dump($event);
    var_dump($context);

    return "hello world";
}

?>
