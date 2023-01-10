#include <signal.h>
#include <X11/extensions/Xfixes.h>

Display               *display;
volatile sig_atomic_t breakout = 0;

void toggle_cursor(int x) { breakout = x; }

int main(void) {
    int      hidden = 0;
    struct   sigaction act;
    sigset_t mask;

    if (!(display = XOpenDisplay(NULL))) { return(1); }
    act.sa_handler = toggle_cursor;
    sigaction(SIGUSR1, &act, NULL);
    sigemptyset(&mask);
    while (1) {
        if (hidden) { XFixesShowCursor(display, DefaultRootWindow(display)); } 
        else        { XFixesHideCursor(display, DefaultRootWindow(display)); }
        XFlush(display);
        hidden = !hidden;
        breakout = 0;
        while (!breakout) { sigsuspend(&mask); }
    }
    return(0);
}
