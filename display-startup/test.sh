#!/bin/sh

export DISPLAY=:0.0

if ! timeout 1s xset q &>/dev/null; then
	printf "no server :(\n"
else
	printf "server :)\n"
fi

exit 0
