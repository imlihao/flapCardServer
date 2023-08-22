#!/bin/bash
var exec = require('child_process').exec;
exec(`cp -R ./src/shared/protocols ../flapCard/assets/tsrpcSrc`);
exec(`echo "cp protocols into tsrpcSrc done..."`)