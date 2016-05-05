Standard Boilerplate for a Symfony Project
==========================================

Inlcudes jquery, remodal, bourbon, neat, sass-mediaqueries


## Start

- clone this repo
- composer install
- go into src/SiteBundle/Resources/public/styles and run ```sass main.scss:main.css -w```
- in project directory
    - run php bin/console server:run
    - php bin/console assets:install
    - php bin/console assetic:dump
    - php bin/console cache:clear -e=prod||dev