# Angularspa

Single Page Application Slate using Angularjs 1.5

## Run Angular app local
```
npm install -g http-server
cd projectdir
http-server -o
```

## AngularJS setup using yoeman

https://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/
```
npm install -g yo grunt-cli bower
npm install -g generator-angular
yo angular
bower install angular-bootstrap --save
```
### Issue on Linux when installing compass. 
```
sudo apt-get install rubygems1.8
sudo gem install rubygems-update
sudo update_rubygems
sudo gem install compass
```

### Router URL Prefix "2f" / added in yeoman

https://github.com/yeoman/generator-angular/issues/1380

## Generate new route in yeomen 
```
-----------------------------
yo angular:route directives
------------------------------
angular:app
angular:controller
angular:directive
angular:filter
angular:route
angular:service
angular:view
```

