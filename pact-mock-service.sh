#!/bin/sh

usage() 
{
	echo "Usage pact-mock-service [start|stop]"
}

setup() {
	echo $NODE_ENV

	CURRENT_DIR=$(pwd)
	SCRIPT_DIR=$(dirname $0)

	if [ $SCRIPT_DIR = '.' ]; then
	SCRIPT_DIR="$CURRENT_DIR"
	fi
}

start() 
{
	echo 'Downloading Pact Mock Service...'

	if [ "$NODE_ENV" == "test" ]; then
		if [ ! -d pact-mock-service-0.7.2-1-linux-x86_64 ]; then
	  	wget https://github.com/bethesque/pact-mock_service/releases/download/v0.7.2/pact-mock-service-0.7.2-1-linux-x86_64.tar.gz
			tar xzf pact-mock-service-0.7.2-1-linux-x86_64.tar.gz
			rm -f pact-mock-service-0.7.2-1-linux-x86_64.tar.gz
		fi
		pushd pact-mock-service-0.7.2-1-linux-x86_64/bin
	else
		if [ ! -d pact-mock-service-0.7.2-1-osx ]; then
			wget https://github.com/bethesque/pact-mock_service/releases/download/v0.7.2/pact-mock-service-0.7.2-1-osx.tar.gz
			tar xzf pact-mock-service-0.7.2-1-osx.tar.gz
			rm -f pact-mock-service-0.7.2-1-osx.tar.gz
		fi
		pushd pact-mock-service-0.7.2-1-osx/bin
	fi

	echo 'Pact Mock Service Downloaded'


	echo "Starting Pact Mock Service in $(pwd) for $(uname -a)..."
	./pact-mock-service -p 1234 --pact-specification-version 2.0.0 -l $SCRIPT_DIR/pacts/pacts.log --pact-dir $SCRIPT_DIR/pacts &
	echo $! > $SCRIPT_DIR/pact-mock-service.pid
	echo 'Pact Mock Service Started'

	popd

}


stop()
{
	echo 'Stopping Pact Mock Service...'

	if [ -f "$SCRIPT_DIR/pact-mock-service.pid" ]; then
		while read line           
		do           
    		kill -9 $line           
		done < "$SCRIPT_DIR/pact-mock-service.pid"
	fi
	rm -f $SCRIPT_DIR/pact-mock-service.pid

	echo 'Pact Mock Service Stopped'
}


if [ $# -eq 0 ] || ([ $1 != "start" ] && [ $1 != "stop" ]); then
	usage
else
	setup
	$1
fi
