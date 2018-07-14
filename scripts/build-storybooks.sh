#!/bin/sh
#
# This builds all the example storybooks for running chromatic on your dev machine

examples=(angular-cli cra-kitchen-sink html-kitchen-sink marko-cli mithril-kitchen-sink polymer-cli vue-kitchen-sink aurelia-kitchen-sink official-storybook)

for example in "${examples[@]}"
do
    pushd examples/$example
    yarn build-storybook
    popd
done
