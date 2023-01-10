#!/bin/sh -e

secret=paprika
secretLen=7
website=te4projekt.se/display

printf "\033[38;2;255;255;0mWAITING FOR SECRET KEY:\033[39m\n"

read -t 5 -n "$secretLen"; RETVAL=$?
printf "\n"
# ok? echo && continue
if [ $RETVAL -eq 0 ] && [ "$REPLY" = "$secret" ]
then
	printf "\033[38;2;0;255;0mDEBUG ENABLED!\033[39m\n"
else
	printf "\033[38;2;255;0;0mRUNNING X\033[39m\n";
	# runs X in background
	X &
	# defines display for other commands
	export DISPLAY=:0.0;
	# wait a while until X finished loading (bruh)
	sleep 5

	# hide the mouse
	./xtoggle.cprog &


	# launch firefox in background
	DISPLAY=:0.0 /usr/bin/firefox -kiosk -private-window "$website" &
	# wait a while until firefox finished loading
	sleep 5
	# change screen orientation
	xrandr --orientation left
	while true
	do
	# WAIT A WHILE
	sleep 5

	size=$(xrandr | grep '*' | awk '{print $1}')
	width=$(printf "$size" | awk '{split($1,arr,"x"); print arr[1]}')
	height=$(printf "$size" | awk '{split($1,arr,"x"); print arr[2]}')

	# set firefox size and width to screen
	xdotool search "Mozilla Firefox" windowmove 0 0
	xdotool search "Mozilla Firefox" windowsize "$height" "$width"
	done
fi

exit 0
