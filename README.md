# Readme

## Setup

``` bash
# Change directory
cd / [drop the folder]

# To start the server
sudo bundle exec jekyll serve --draft --livereload

# Visit local
http://localhost:4000/

```
## Update periodically

``` bash
# To update the dependencies
sudo bundle update

# Ruby related - Use RVM for installation or update (third party)
ruby -v

# Install RVM (if first time)
curl -L https://get.rvm.io | bash -s stable

# rvm install ruby-[version]
rvm install ruby-2.4.1

ruby -v (if still not using the latest->) rvm use ruby-2.4.1


```

## First time 
``` bash
# Important when OS get updated or new computer
# to install xcode (di root)
xcode-select --install

# to install bundler and jekyll (di folder)
gem install bundler
gem install jekyll bundler

```
