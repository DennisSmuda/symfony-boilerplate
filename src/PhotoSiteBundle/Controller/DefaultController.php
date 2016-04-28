<?php

namespace PhotoSiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('PhotoSiteBundle:Default:index.html.twig');
    }
}
