<?php
require_once 'ApiInterface.php';

abstract class API implements ApiInterface
{

    function trigger()
    {
        if (count($_POST) > 0) {
            $this->processPost();
        } else {
            $this->processGet();
        }
    }

    function processGet()
    {
        $result = null;

        if (isset($_GET['id'])) {
            $result = $this->getOne($_GET['id']);
        } else {
            $result = $this->getAll();
        }

//        var_dump($result);

        echo $this->toJson($result);
    }

    function processPost()
    {
        // TODO: Implement processPost() method.
    }


    function toJson($object)
    {
        $encode = json_encode((array)$object);
        if(!$encode){
            return '{erro: '.json_last_error_msg().'}';
        }
        return $encode;
    }
}