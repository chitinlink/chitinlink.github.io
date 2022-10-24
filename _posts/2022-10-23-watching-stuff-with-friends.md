---
title: Watching stuff with friends in the current year
---

### Ancient history

Back in 2018 we had something called Rabb.it, a neat little website where me and my friends could share control of the same browser window and watch stuff on it. We watched JoJo parts 1 through 4 like that, for example.  

![Some screenshot of Rabb.it I found online](/assets/img/blog/videohosting/0.png)

In May of 2018 the service went down without warning, and I would later find out that this was because it had [lost all its funding](https://www.linkedin.com/pulse/hitting-wall-amanda-richardson/). Maybe it's for the better that I never saw how they would've monetized the platform.

Two immediate alternatives to Rabb.it were available to me, and I would later write a blog post about them: [Rabbit alternatives](https://chitin.link/blog/rabbit-alternatives).  
**This post** is going to go into more detail on how you can use CyTube and Syncplay, and particularly how you can host files on your own server to watch on the two of those.  
It will detail how you can setup your own server, get a domain name, host video to watch stuff with your friends, etc.

If you're interested in something that is actually like Rabb.it then the popular option these days seems to be [Hyperbeam Watch Party](https://watch.hyperbeam.com/). I'll also mention [n.eko](https://neko.m1k1o.net) purely for the fact that it is self-hosted.

- [Simplest use case (CyTube)](#simplest-use-case-cytube)
- [Intermediate use case (Syncplay)](#intermediate-use-case-syncplay)
  - [Instructions](#instructions)
- [Advanced territory (File Hosting)](#advanced-territory-file-hosting)
  - [Hosting](#hosting)
  - [Server options](#server-options)
  - [Navigating your server provider](#navigating-your-server-provider)
  - [First contact](#first-contact)
  - [Opening up to the WWWeb](#opening-up-to-the-wwweb)
  - [File transfers and the index](#file-transfers-and-the-index)
  - [Actually using it](#actually-using-it)
- [Expert Territory (Zero Setup)](#expert-territory-zero-setup)
  - [So... you need a domain name](#so-you-need-a-domain-name)
  - [Becoming certified](#becoming-certified)
  - [File considerations](#file-considerations)

### Simplest use case (CyTube)

You want to watch Youtube videos with your friends? Set up a [CyTube](https://cytu.be/) channel and share the link. Awesome. No hassle.

![Screenshot of CyTube with a Youtube video](/assets/img/blog/videohosting/1.png)

CyTube by default syncs the video on the server, and everyone's client is always trying to keep up with it. If someone "takes leader" (by right-clicking their own name), then the video will now sync from that person, and everyone else's client will try to keep up with them.  
Taking leader is also the only way to pause videos.

There's a lot of other information I could include here about CyTube, but it's outside the scope of this post. In short, learn your channel's settings and poke around the UI. Maybe set a password.

### Intermediate use case (Syncplay)

Let's say whatever you want to watch isn't on Youtube, or Vimeo, or whatever. If I want to, say, watch some anime with friends, how do I do that?

Let's also say you and your friends have the same video on their computers. For example, if you all download [Big Buck Bunny](https://peach.blender.org/download/), and want to watch it together.

If you and your friends have both the **same file** and Syncplay installed, then you can do that.

#### Instructions

First, download and install [Syncplay](https://syncplay.pl/). I also highly recommend installing and using mpv (a video player) with Syncplay for the best experience. On Windows you can get [mpv.net](https://github.com/stax76/mpv.net).

Then, launch Syncplay.

![Syncplay configuration window](/assets/img/blog/videohosting/2.png)

The way Syncplay works is this: You have the file on your own computer. Your computer plays the file, and tells a server where in the video you are. This server is also talking with all of your friends' computers, and ensures everyone's video is synced.

You'll notice in the Syncplay configuration window that there's already 5 servers available. Syncplay hosts these servers themselves, which makes this all much easier.

![Syncplay UI with mpv.net](/assets/img/blog/videohosting/3.png)

Make sure you and your friends join the same server, and the same room. Once you're in, you can drag the file you want to watch into your video player, or the playlist in the bottom right.

Once everyone readies up (trying to unpause will set you as ready), the video can be unpaused and will be kept in sync between everyone.

You can also set predefined media directories that Syncplay will look for files in. You can do this in the **File > Set media directories** menu. I recommend adding your Downloads folder, or some subfolder you plan to put your things in.

### Advanced territory (File Hosting)

Let's say that you want to watch something with your friends, but you can't get them all to get the same file. Or you don't want to have to make them do that.

Let's break the problem down into multiple steps.

#### Hosting

If whatever you wanna watch isn't available online, then you'll have to put it online. <a href="/assets/img/blog/videohosting/patrick.gif" target="_blank"><img src="/assets/img/blog/videohosting/patrick.gif" style="height: 1em; display: inline-block; margin: 0"></a>

There are two main ways of doing this. The first is to run a webserver on and expose your own computer to the internet. I can't recommend this unless you have really good upload speed and you know your ISP won't complain, and since I have no experience with this, we'll be looking at the second way:

Purchase a server online and host the files there. Generally, dedicated servers and <abbr title="Virtual Private Server">VPS</abbr>es have really good upload and bandwidth, so this is ideal.

#### Server options

Back in (I think) 2016 I got the [Github Education Pack](https://education.github.com/pack), which is a bunch of free stuff if you sign up for it with a school/university email. Back then, it had a 50€ in DigitalOcean credit, and at the time the cheapest "droplet" (a VPS) they had was 5€/mo. So effectively, I got 10 months of free server, and I ended up paying a bit longer.

Today, they give you an even lower-cost option:

![Current lineup of cheapest DigitalOcean droplet options](/assets/img/blog/videohosting/4.png)

And today, the Github pack actually gives you double what it did when I started!

![Current 100€ value of the DigitalOcean credit in the Github Education Pack](/assets/img/blog/videohosting/5.png)

If you don't want or can't get the Github pack, then there are cheap options elsewhere too, OVH/Kimsufi has a starter VPS at 3.5€/mo for example:

![3.5€ a month starter VPS](/assets/img/blog/videohosting/6.png)

I'm recommending these extremely cheap options because I think that's probably the best way to experiment with stuff like this. Don't get excited if you buy one of these, you probably shouldn't be running Minecraft on them. Once you're familiar with how this works and you want more storage or computing power for something, upgrade.  
These days I'm running this, for about 24€/mo:

![My current server specs](/assets/img/blog/videohosting/7.png)

But I'm using this for a lot of things besides just hosting files.

**To summarize**, I recommend getting the free credit for [DigitalOcean](digitalocean.com/) from the [Github pack](https://education.github.com/pack) if you can, get the cheapest or maybe second-cheapest droplet from there to start. DO is pretty beginner-friendly and have a bunch of guides, too. If you can't get the pack there's other options out there, like the OVH/Kimsufi one.

Or just get whatever server you want.

Regardless of what you get, the next section will still apply.

#### Navigating your server provider

For the purposes of this guide, I'll be making a new account on DO.

![DigitalOcean control panel](/assets/img/blog/videohosting/8.png)

Once I get to the control panel above, I open the Droplets page. "Droplets" are just DO's stupid term for VPSes.

I'm going to be making a Droplet running on Ubuntu 22.04 x64.

![Cheapo VPS](/assets/img/blog/videohosting/9.png)

I'm gonna pick this 6<span title="I don't know why DO is displaying costs in dollars but whatever.">$</span>/mo option.

![Datacenter selection](/assets/img/blog/videohosting/10.png)

Picking the datacenter region correctly is important. This is the physical location your server will be in, and will determine the ping anyone connecting to it will have. So if you have, e.g. a lot of europeans and americans connecting to your server try to pick somewhere either east coast US or western coast EU. New York or London are good picks in that scenario.

![Authentication](/assets/img/blog/videohosting/11.png)

Here DO is asking me to set the password for the root user on the server. In Linux-type systems, "root" is THE administrator account. It's not recommended to use it directly. More on that later.  
Here, we're being made to set a password for it because we will use it log in for the first time once we have the server.

This is a part where DO will likely differ from other server providers. Some might just email you a password to a default user, or make you log in through a virtual console first, instead of letting you set a password like DO is letting me do here.

Anyway. The rest of the options are up to your discretion, at this point I scrolled down and hit "Create Droplet".

![Droplet progress bar](/assets/img/blog/videohosting/12.png)

Once you do that, you'll see a fancy little progress bar while DO sets up your server. Most providers at least email you once this is done, but it shouldn't take more than a few minutes.

![](/assets/img/blog/videohosting/13.png)

Once your server's set up, DO should display its IP like in the above picture. You will use it in the next section to log in to your server.

#### First contact

Next, you will connect to your server using SSH (Secure Shell) and go through basic setup tasks. I should note that this is a **trimmed down version** of other, better guides available elsewhere, like for instance DigitalOcean's own [Initial Server Setup with Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04).

As of this writing, all major consumer operating systems come with SSH preinstalled. Figure out how to bring up the terminal for your specific system and type the following (replacing 1.2.3.4 with the IP from the previous section)

```sh
ssh root@1.2.3.4
```

You should see a warning:

![Authenticity warning](/assets/img/blog/videohosting/14.png)

This warning will show up once because you've never connected to this **server** through this **IP**. Note that relationship.

You should type "yes" and continue.

Note that you will receive another, different warning, if you connect to this IP and there's a different server on it (fingerprint mismatch).

Now that you've logged in, you should see something like this:

![Ubuntu login screen](/assets/img/blog/videohosting/15.png)

We're gonna do multiple things now:

1. Create a new user: `adduser name`
2. Give that user *sudo*: `usermod -aG sudo name`
3. Log out: `logout` or <kbd>Ctrl</kbd>+<kbd>D</kbd>
4. Log back in as the new user: `ssh name@1.2.3.4`

You are now logged in as a normal user with `sudo` permissions. This means you can execute commands that need administrator permission by adding `sudo` at the start.

#### Opening up to the WWWeb

In this section, we're going to set up a firewall, and a web server.

First, we're going to install [nginx](https://nginx.org/en/), a web server.

```sh
sudo apt install nginx
```

After installing that, we're going to configure [UFW](https://help.ubuntu.com/community/UFW) ("Uncomplicated FireWall")

```sh
sudo ufw app list           # display all available "apps". Nginx should be here!
sudo ufw allow OpenSSH      # ensure SSH is allowed on the firewall. this is important!
sudo ufw allow "Nginx HTTP" # allow the Nginx web server to receive HTTP connections
sudo ufw enable             # Turn UFW on.
sudo ufw status             # Check what's allowed on UFW. Nginx and OpenSSH should be listed!
```

With UFW set up, you should now be able to **open your server's IP address on a browser!**  
You should see something like this:

![nginx default page](/assets/img/blog/videohosting/16.png)

This is the default page for nginx. If you can see this, it's alive!

#### File transfers and the index

Now we need to figure out moving files in and out of the server. To do this we're going to use FTP (File Transfer Protocol), but more specifically SFTP (SSH File Transfer Protocol).

First, you need to install an FTP client. I recommend [WinSCP](https://winscp.net) on Windows.

Then, log in with the same server address and username/password combination as you did for SSH:

![Logging in in WinSCP](/assets/img/blog/videohosting/17.png)

You should see something like this:

![Linux home folder in WinSCP](/assets/img/blog/videohosting/18.png)

Your mostly empty `home` folder. You can drag files in here and they will be placed in an upload queue, and you can also move and delete files, create folders, etc.

Let's go ahead and create a folder to hold our videos and other files:

![Creating a folder in WinSCP](/assets/img/blog/videohosting/19.png)

We also need to create a [soft link](https://www.redhat.com/sysadmin/linking-linux-explained) from the Nginx file root at `/var/www/html/` to our folder in the home folder (I made mine `stuff`).

To do that, we need to use `sudo`, so we can't do it via WinSCP. Over SSH:

```sh
cd /var/www/html/
sudo ln -sv /home/name/stuff stuff
```

We also need to change the file permissions on our home and stuff folders:

```sh
chmod +rx /home/name
chmod +rw /home/name/stuff
```

With that out of the way, we're going to set up Nginx to display a file index of that folder. 

Nginx's configuration files live in `/etc/nginx/`. There, you'll find the `sites-available` and `sites-enabled` folders. `sites-available` will contain the config files for any sites you have configured on Nginx, and `sites-enabled` has links to the configuration files of any sites that are *actually* enabled.

We're only setting up one site though, so this won't be complicated. Let's open the default configuration file:

```sh
sudo nano /etc/nginx/sites-available/default
```

Note that you need `sudo` in order to write to this file.  
The file has a lot of comments. Here's the default file *with comments removed*:

```
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;

  index index.html index.htm index.nginx-debian.html;

  server_name _;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

We're going to edit it to remove the `index` directive, and add [`autoindex`](https://nginx.org/en/docs/http/ngx_http_autoindex_module.html) directives:

```
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;

  # index index.html index.htm index.nginx-debian.html;

  autoindex on;
  autoindex_exact_size off;
  autoindex_localtime off;

  server_name _;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

Then, after saving the file, restart nginx to load your changes:

```sh
sudo systemctl restart nginx
```

If you check your page again it should look like this:

![File index page](/assets/img/blog/videohosting/20.png)

Clicking on the "stuff" link will show you the contents of the "stuff" folder. Which will be empty unless you've put anything in it -- you can drag files into it through WinSCP and they'll upload!

![Some files in the stuff folder](/assets/img/blog/videohosting/21.png)

You can also delete the default index file in there if you want, you don't need it.

#### Actually using it

Now that you can upload files to your server, you can load them into Syncplay: Right-click on the playlist in the bottom right and add the URL for whatever file you wanna watch. For security reasons, everyone will have to add your server as a trusted domain, also.

![Adding your server as a trusted domain](/assets/img/blog/videohosting/22.png)

Everyone's client will buffer the video over time, and if anyone actually has the file in their media directories, it will just use the local file instead. You can also just drag a file in for the same effect.

### Expert Territory (Zero Setup)

Okay. You're already doing most of the work for your friends and supplying the content for them through your own server. What if they also didn't have to install a separate program on their computer? What if they didn't have to do *any setup at all* to watch stuff?

This section will detail what you need to do to achieve that.

In summary, we will still be hosting files on a server, but your friends will be watching over CyTube. To achieve this, we'll need to:

* Acquire a domain name
* Acquire a TLS certificate, and serve files over HTTPS
* Learn to convert files to formats and sizes that can play on browsers

In order to play files from direct URLs on CyTube, they must be served over HTTPS. It is *possible* to acquire a TLS certificate for a bare IP, which is what you have at this point, but it is easiest (ie free) to get one through [Let's Encrypt](https://letsencrypt.org/), who will also automatically auto-renew them. However Let's Encrypt only issues certificates for actual domain names, not bare IPs.

#### So... you need a domain name

SO... I have my own domain name registered through [gandi.net](https://shop.gandi.net/en/domain/suggest). [Namecheap](https://www.namecheap.com/) is also another domain registrar, for example.

Some tips on buying a domain name... Generally, normal english words and terms will be most expensive, so look for weird in-joke words or made-up terms for cheaper names. Also, take note of any promotions and special conditions that they might come with. "First year" discounts are pretty common, where they might charge you a very small amount for the first year and then a larger amount after.

Since I'm buying a domain just for this tutorial, I'm going for something extremely ugly and temporary. I'm not going to be renewing this next year:

![Purchasing "cohosttutorialvideo.site"](/assets/img/blog/videohosting/23.png)

After buying your domain, you need to edit its DNS records. DNS records are how your domain name connects to servers via IP, among other things. For more information, check out Namecheap's guide, [DNS Records Explained](https://www.namecheap.com/guru-guides/dns-records/).

When you first get your domain name, your DNS records will likely come prefilled with a bunch of crap you don't care about. For example, gandi.net domains come with free mailboxes, so the one I just bought comes with a ton of entries for that:

![DNS records for the new domain](/assets/img/blog/videohosting/24.png)

I don't care about any of this. I'm going to delete all of these, and you can delete everything your DNS records come with if you want, as well. We will only need one record:

!["A" record for your server IP](/assets/img/blog/videohosting/25.png)

We're setting up an "A" type record pointing to your server's IP. The "@" means we'll get pointed to it by opening the main URL "cohosttutorialvideo.site". You could set it to a subdomain like "whatever.cohosttutorialvideo.site" here if you want. The "TTL" value is the "Time To Live", the frequency with which the DNS nameserver will automatically refresh its settings.

Now, after waiting at least as long as that TTL value, you should be able to see your site at the domain name you just bought! For me, that's at `http://cohosttutorialvideo.site`. Note the `http`.

![It lives!](/assets/img/blog/videohosting/26.png)

As a bonus, you can now SSH into your server using your new domain name:

```sh
ssh name@cohosttutorialvideo.site
```

As previously mentioned, CyTube only accepts files served over HTTP<span style="text-decoration:underline">S</span>. To get that, we need a TLS certificate.

#### Becoming certified

Head over to the [Certbot website](https://certbot.eff.org) and select Nginx and whatever system you're on. Follow the instructions, which will likely involve installing snapd (you don't have to if you're on Ubuntu 18 or over) and setting up the certbot utility.

Eventually, you will be asked to run this command:

```sh
sudo certbot --nginx
```

Provide the information the utility asks for, and once you're done, it will actually *automatically edit your Nginx configuration file* to enable HTTPS and also redirect from HTTP to HTTPS. Certbot also sets up a scheduled task to renew the certificate.

Early on in this guide we used UFW to allow HTTP connections on the firewall. We're going to replace that rule so that HTTPS connections are also allowed:

```sh
sudo ufw delete allow "Nginx HTTP"
sudo ufw allow "Nginx Full"
```

![It lives! Again!](/assets/img/blog/videohosting/27.png)

Now, the URLs for the files you put in here will be served over HTTPS.

With this, all that's left is to talk about how video files work in the browser.

#### File considerations

Okay. Now that your videos are served over HTTPS, you can just put them on CyTube, right?

**WRONG.**

[Only certain codecs and containers are allowed to play on a browser](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#common_codecs). In particular, MP4 and WebM stand out.

Does that mean that if you have an MP4 file it will just work?

**NO.**

Sorry, but MP4 is a container, and may not have a supported codec. For example:

![MP4 file has an unsupported codec](/assets/img/blog/videohosting/28.png)

And finally, even if your file does already just work on the browser, it might just be plain too big. Remember, you and your friends are going to be downloading the file as it plays. If the video's [bitrate](https://www.adobe.com/creativecloud/video/discover/bit-rate.html) is too high, people might not be able to download the video faster than it plays!

For all of these reasons, I re-encode my videos before uploading them to my server. I do this using [Handbrake](https://handbrake.fr), and I follow this procedure:

First, drag in your file.

![Handbrake window](/assets/img/blog/videohosting/29.png)
![Handbrake window after dragging in a file](/assets/img/blog/videohosting/30.png)

Then, select an appropriate preset. I usually use the "Vimeo YouTube HQ 720p60" preset:

![Selecting the "Vimeo YouTube HQ 720p60" preset](/assets/img/blog/videohosting/31.png)

Switch to the "Video" tab, change the framerate to "Same as source", and set it to "Constant framerate" under that.
Then, set the "quality factor". This will determine the bitrate of the output. This preset sets the quality to 19, and I usually crank it up to 30 (higher = smaller file).

![Changing video settings](/assets/img/blog/videohosting/32.png)

You might want to change the video encoder to Nvidia NVEnc, AMD VCE, or Intel QuickSync if available. Check if you have them enabled in **Tools > Preferences > Video**.

![Hardware encoding options](/assets/img/blog/videohosting/33.png)

If the file I'm working with has multiple audio tracks, then I select the one I want in the "Audio" tab:

![Selecting a different audio track](/assets/img/blog/videohosting/34.png)

If your audio is already AAC, then you want to set the codec to "AAC Passthru". Otherwise, leave the codec on AAC. AAC offers the best compatibility for our purposes, and you want to avoid re-encoding if possible.

![AAC Passthru example](/assets/img/blog/videohosting/36.png)

And most crucially, if the file comes with a subtitle track, it will be available here:

![Included subtitle track](/assets/img/blog/videohosting/37.png)

If you want these subtitles to show up in the final video, make sure to select them and turn "Burn In" on. "Burn In" will put the subtitle text directly into the video, which is unfortunately necessary when playing video on the browser, the way we are.

If your file does *not* have an included subtitle track and instead you have a separate subtitle file (e.g. `.srt`, `.ass`), then you'll have to drag it in. Make sure to tick "Burn In" too.

![External subtitle file](/assets/img/blog/videohosting/38.png)

Finally, you can also tick chapter markers off, as they don't matter for what we're doing.

![Turning off chapter markers](/assets/img/blog/videohosting/39.png)

Now, feel free to hit the "Start Encode" button. This will probably take a while, and longer the bigger the source file. If you want, you can drag in another file, change the settings, and hit "Add to queue" so it starts that encode next.

Once your file is done rendering, you can go ahead and upload it over WinSCP. Once it's in your server, you can copy the URL to it and put it on Cytube, and all your friends can join you there and watch!

I've hosted a weekly movie night for 4-10 people for over a year now, and I've always used this setup. Feel free to experiment with other configurations. You might want to set the Constant Quality to a lower value than the one above, just keep in mind the bitrate will go up as the quality improves. You might also want to set the Encoder Preset to a lower value if you don't mind waiting, it'll result in higher quality "for free".

---

Thank you June, Liz, Mia, Jasmine, Will for proofreading.  
Thank you Camille for video encoding info.
