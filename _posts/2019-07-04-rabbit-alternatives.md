---
title: Rabbit alternatives
---

**This post is outdated.** It might still be worth reading, but I'm not gonna bother updating it anymore. Instead you should check out my newer post on [watching stuff with friends in the current year](/blog/watching-stuff-with-friends).

[Rabbit][rabbit-w] is [shutting down][news], due to lack of funds. The reasons for this are outlined in the first paragraph of the Linkedin post.

So, here's some alternatives to Rabbit. These two entries first explain the service's essential features (what they can do), and then include instructions on a basic setup for using them with your friends.

Also, yes you can just use the screenshare on Discord, Skype, whatever. I don't think those need an explanation.

- [Cytube](#cytube)
  - [Setting up Cytube](#setting-up-cytube)
- [Syncplay](#syncplay)
  - [Setting up Syncplay](#setting-up-syncplay)
- [Others](#others)

### Cytube

![Image of what Cytube looks like.](/assets/img/blog/rabbit2019/rabbit_cytube_0.png)

[Cytube] works with youtube, vimeo, dailymotion, soundcloud links, and direct audio and video files. This means, if you can host the file on a server somewhere, and the file is compatible (`.mp4`, `.avi`, `.mp3`, etc.), it will play on cytube and remain synced for everyone watching.

Cytube employs a "leader" option when syncing media: Usually when something is playing, there is no way to pause, or rewind. It will simply try to keep everyone watching on par with the video as it plays on the server side, unless someone "takes" leader. If you take leader, the video is synced for everyone else based on where you are, which means you can pause and rewind if needed. You can do this by right-clicking yours or someone else's name on the sidebar:

![How to take leader](/assets/img/blog/rabbit2019/rabbit_cytube_1.png)

The leader is marked by a star next to their name. You can also remove leader by using the same right-click menu.

You add videos by pasting their URLs in after pressing the "+" button under the player. You may also paste in playlist links to add multiple items at once.

It is at this point that I should mention that while Cytube allows you to set up private channels for yourself (and in fact they are private by default), and then password protect them also, the top public channels displayed on the front page are used by social reactionaries, channer types, and other synonymous descriptors. Ignore them and do not let their presence stop you from taking full advantage of Cytube.

#### Setting up Cytube

To setup a Cytube channel, [register an account][cytube-register]. Then, [create a new channel][cytube-channel]. You are now the owner of this channel.

There should be a link to the channel you just made in the same page. Enter it. You're now done with basic setup, and you can share the link with your friends and start watching stuff.

There's a number of settings you can change under "Channel settings" in the navbar but those are outside the scope of this guide. Feel free to message me for help.

### Syncplay

![Image of what Syncplay looks like.](/assets/img/blog/rabbit2019/rabbit_syncplay_0.png)

[Syncplay] is an over-the-net syncronized video player software. It works much like Cytube, having support for youtube, vimeo, soundcloud, but also supporting things like adult swim and twitter videos (and anything on [this list][youtube-dl-list]) thanks to using [youtube-dl]. It can also play a number of formats not available on web players like `.mkv`.

A more important feature of Syncplay is that it can syncronize playback for **offline files**. That is to say, if two people have the same file, with the same filename, they can watch it in sync using Syncplay. This helps with latency from streaming video, as the video is, you know, already on your computer.

That aside, syncplay works on [crab mentality]: If someone's video isn't going forward, neither is anyone else's. The player automatically rewinds players that are "too far ahead" to keep everyone in the same place.

Everyone is able to pause, rewind, fast-forward, etc.

While Syncplay works with VLC, it is recommended to use it with [mpv], a different media player. Full installation tutorial including youtube-dl and mpv below.

#### Setting up Syncplay

Go to the [Syncplay page][syncplay], download and install it:

![Choose the version most relevant to your system.](/assets/img/blog/rabbit2019/rabbit_syncplay_1.png)

Take note of the folder you're installing Syncplay on. After your install is done, open that folder on your file manager. Next, create a new folder there, and name it "mpv".

Head to the [mpv installation page][mpv-install] and acquire a binary (a .exe if you're on Windows) for mpv. If you're on Windows, click on the topmost 64-bit or 32-bit link on [this page][mpv-install-win]. This will download a zipped folder (`.7z`) with the binary and some other things. You only care about the binary, so move it (`mpv.exe`) to the mpv folder.

Download the [latest youtube-dl binary][youtube-dl-dl]. If you're on Windows, that's [this][youtube-dl-dl-win]. Then, move the binary to the mpv folder.

Now, launch Syncplay. Use Syncplay.exe in the folder you're looking at or any of the shortcuts you may or may not have made while installing it. You'll see this:

![Syncplay configuration screen](/assets/img/blog/rabbit2019/rabbit_syncplay_2.png)

Click on "Browse" next to "Path to media player" and select mpv.exe. You're now done with the installation.

Feel free to type in a username and "default room". Neither of these things are permanent. Then, pick a server. If you're testing this out with a friend make sure you both have the same room and server.

Syncplay hosts public servers for public use, they're shown under the dropdown on "Server address":

![Syncplay public servers (the highlighted one is the least-used one, so pick that one!))](/assets/img/blog/rabbit2019/rabbit_syncplay_3.png)
![Syncplay public servers on the configuration screen](/assets/img/blog/rabbit2019/rabbit_syncplay_4.png)

You may also host your own server, but that falls outside the scope of this guide, just like the other settings that show up when you tick the "Show more settings" box. Feel free to message me for help.

After picking a server, click on "Store configuration and run Syncplay". You should then see this:

![Syncplay windows](/assets/img/blog/rabbit2019/rabbit_syncplay_5.png)

The bottom-left window is the media player mpv, and the top-right window is Syncplay proper. If you close either of these, the other one also closes, so be careful.

A simple guide to the Syncplay window:

![Syncplay windows](/assets/img/blog/rabbit2019/rabbit_syncplay_6.png)

To add a video, right-click on the Playlist, and add a URL or a file. Then, ready up by either ticking the "I'm ready to watch" box or by pressing the unpause key with mpv focused (spacebar or P). By default, videos will start playing three seconds after everyone is readied up.

If you want to play offline files, you have to set a media directory. Click on File > Set media directories. Then, add a folder. Whenever you want to watch an offline file with friends, you and your friends must have the exact same file with the exact same filename on one of each of your media directories. The media directories do not have to be the exact same or have the same name.

A note on mpv's interface:

![mpv's interface](/assets/img/blog/rabbit2019/rabbit_syncplay_7.png)

Some keybinds you should know about, also:

* Scrollwheel up and down actually seeks the video, so be careful you don't actually do it
* Scrolling on the volume icon at the bottom however, changes the volume
* You can also change the volume using 0 (quieter) and 9 (louder) on your keyboard
* Pressing enter lets you type in chat

### Others

Here's some more alternatives and similar things worth linking:

* [Watch2Gether](https://www.watch2gether.com/)
  * Similar to Cytube
  * Youtube, Soundcloud, Vimeo
  * Has chat
  * and webcam support (?)
* [Netflix Party](https://www.netflixparty.com/)
  * Chrome-only browser extension that syncs up netflix
  * All users need to have their own netflix accounts
  * Has chat
* [InstaSync](http://instasync.com/)
  * Similar to Cytube
  * Has chat
* [Parsec](https://parsecgaming.com/)
  * Allows you to syncronize games
  * Helps with playing local co-op games
* [Rave.io](https://www.rave.io/)
  * Syncs videos
  * Has chat
  * On Android and iOS
  * Has an AI DJ that automatically makes mashups (?)
* [Metastream](https://getmetastream.com/)
  * Requires browser extension, available for Chrome and Firefox
  * Allows you to syncronize regular websites (!) using "Interact mode"
  * Also has support for just playing youtube, soundcloud, etc directly
* [Yudofu](https://yudofu.com/)
  * Similar UI to Discord, Slack, etc
  * You can make your own "club"
* [SyncLounge](https://synclounge.tv/)
  * Allows you to sync Plex streams

[rabbit]:            https://www.rabb.it/
[rabbit-w]:          https://en.wikipedia.org/wiki/Rabb.it
[news]:              https://www.linkedin.com/pulse/hitting-wall-amanda-richardson/
[news-archive]:      https://archive.fo/VDoXf
[cytube]:            https://cytu.be/
[cytube-register]:   https://cytu.be/register
[cytube-channel]:    https://cytu.be/account/channels
[youtube-dl]:        https://ytdl-org.github.io/youtube-dl/index.html
[youtube-dl-list]:   https://ytdl-org.github.io/youtube-dl/supportedsites.html
[youtube-dl-dl]:     https://youtube-dl.org/
[youtube-dl-dl-win]: https://youtube-dl.org/downloads/latest/youtube-dl.exe
[syncplay]:          https://syncplay.pl/
[mpv]:               https://mpv.io/
[mpv-install]:       https://mpv.io/installation/
[mpv-install-win]:   https://mpv.srsfckn.biz/
[crab mentality]:    https://en.wikipedia.org/wiki/Crab_mentality
