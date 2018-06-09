<?php

interface ApiInterface
{
    function trigger();

    function processGet();
    function processPost();

    function getOne($id);
    function getAll();

    function toJson($object);
}