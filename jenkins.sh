cd $WORKSPACE
echo "\n\nnpm install -g bower"
sudo npm install -g bower
echo "\n\nnpm install -g grunt-cli"
sudo npm install -g grunt-cli
echo "\n\nbower install"
sudo bower install
echo "\n\nnpm install"
sudo npm install
echo "\n\nbundle install"
bundle install
echo "\n\ngrunt build"
grunt build
