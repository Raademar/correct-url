const userPassedURL = document.querySelector('#userPassedURL')
const submitURL = document.querySelector('#submitURL')
let thresholdSlider = document.querySelector('#thresholdSlider')



let urlObject = [
  {
    "domain": "facebook.com/",
    "alternatives": [
      "facebook.se",
      "facebook.net",
      "facebook.org",
      "facebook.co.uk",
      "facebook.gov",
    ]
  },
  {
    "domain": "twitter.com/"
  },
  {
    "domain": "google.com/"
  },
  {
    "domain": "youtube.com/"
  },
  {
    "domain": "instagram.com/"
  },
  {
    "domain": "linkedin.com/"
  },
  {
    "domain": "wordpress.org/"
  },
  {
    "domain": "pinterest.com/"
  },
  {
    "domain": "wikipedia.org/"
  },
  {
    "domain": "wordpress.com/"
  },
  {
    "domain": "blogspot.com/"
  },
  {
    "domain": "apple.com/"
  },
  {
    "domain": "adobe.com/"
  },
  {
    "domain": "tumblr.com/"
  },
  {
    "domain": "youtu.be/"
  },
  {
    "domain": "amazon.com/"
  },
  {
    "domain": "goo.gl/"
  },
  {
    "domain": "vimeo.com/"
  },
  {
    "domain": "flickr.com/"
  },
  {
    "domain": "microsoft.com/"
  },
  {
    "domain": "yahoo.com/"
  },
  {
    "domain": "godaddy.com/"
  },
  {
    "domain": "qq.com/"
  },
  {
    "domain": "bit.ly/"
  },
  {
    "domain": "vk.com/"
  },
  {
    "domain": "reddit.com/"
  },
  {
    "domain": "w3.org/"
  },
  {
    "domain": "baidu.com/"
  },
  {
    "domain": "nytimes.com/"
  },
  {
    "domain": "t.co/"
  },
  {
    "domain": "europa.eu/"
  },
  {
    "domain": "buydomains.com/"
  },
  {
    "domain": "wp.com/"
  },
  {
    "domain": "statcounter.com/"
  },
  {
    "domain": "miitbeian.gov.cn/"
  },
  {
    "domain": "jimdo.com/"
  },
  {
    "domain": "blogger.com/"
  },
  {
    "domain": "github.com/"
  },
  {
    "domain": "weebly.com/"
  },
  {
    "domain": "soundcloud.com/"
  },
  {
    "domain": "mozilla.org/"
  },
  {
    "domain": "bbc.co.uk/"
  },
  {
    "domain": "yandex.ru/"
  },
  {
    "domain": "myspace.com/"
  },
  {
    "domain": "google.de/"
  },
  {
    "domain": "addthis.com/"
  },
  {
    "domain": "nih.gov/"
  },
  {
    "domain": "theguardian.com/"
  },
  {
    "domain": "google.co.jp/"
  },
  {
    "domain": "cnn.com/"
  },
  {
    "domain": "stumbleupon.com/"
  },
  {
    "domain": "gravatar.com/"
  },
  {
    "domain": "digg.com/"
  },
  {
    "domain": "addtoany.com/"
  },
  {
    "domain": "creativecommons.org/"
  },
  {
    "domain": "paypal.com/"
  },
  {
    "domain": "yelp.com/"
  },
  {
    "domain": "imdb.com/"
  },
  {
    "domain": "huffingtonpost.com/"
  },
  {
    "domain": "feedburner.com/"
  },
  {
    "domain": "issuu.com/"
  },
  {
    "domain": "wixsite.com/"
  },
  {
    "domain": "wix.com/"
  },
  {
    "domain": "dropbox.com/"
  },
  {
    "domain": "forbes.com/"
  },
  {
    "domain": "miibeian.gov.cn/"
  },
  {
    "domain": "amazonaws.com/"
  },
  {
    "domain": "google.co.uk/"
  },
  {
    "domain": "washingtonpost.com/"
  },
  {
    "domain": "bluehost.com/"
  },
  {
    "domain": "etsy.com/"
  },
  {
    "domain": "go.com/"
  },
  {
    "domain": "msn.com/"
  },
  {
    "domain": "wsj.com/"
  },
  {
    "domain": "ameblo.jp/"
  },
  {
    "domain": "archive.org/"
  },
  {
    "domain": "slideshare.net/"
  },
  {
    "domain": "e-recht24.de/"
  },
  {
    "domain": "weibo.com/"
  },
  {
    "domain": "fc2.com/"
  },
  {
    "domain": "eventbrite.com/"
  },
  {
    "domain": "parallels.com/"
  },
  {
    "domain": "doubleclick.net/"
  },
  {
    "domain": "mail.ru/"
  },
  {
    "domain": "sourceforge.net/"
  },
  {
    "domain": "amazon.co.uk/"
  },
  {
    "domain": "telegraph.co.uk/"
  },
  {
    "domain": "ebay.com/"
  },
  {
    "domain": "amzn.to/"
  },
  {
    "domain": "livejournal.com/"
  },
  {
    "domain": "51.la/"
  },
  {
    "domain": "free.fr/"
  },
  {
    "domain": "yahoo.co.jp/"
  },
  {
    "domain": "dailymail.co.uk/"
  },
  {
    "domain": "reuters.com/"
  },
  {
    "domain": "taobao.com/"
  },
  {
    "domain": "wikimedia.org/"
  },
  {
    "domain": "amazon.de/"
  },
  {
    "domain": "typepad.com/"
  },
  {
    "domain": "hatena.ne.jp/"
  },
  {
    "domain": "bloomberg.com/"
  },
  {
    "domain": "elegantthemes.com/"
  },
  {
    "domain": "eepurl.com/"
  },
  {
    "domain": "usatoday.com/"
  },
  {
    "domain": "about.com/"
  },
  {
    "domain": "medium.com/"
  },
  {
    "domain": "macromedia.com/"
  },
  {
    "domain": "xing.com/"
  },
  {
    "domain": "bing.com/"
  },
  {
    "domain": "time.com/"
  },
  {
    "domain": "www.gov.uk/"
  },
  {
    "domain": "google.it/"
  },
  {
    "domain": "cdc.gov/"
  },
  {
    "domain": "tripadvisor.com/"
  },
  {
    "domain": "cpanel.net/"
  },
  {
    "domain": "amazon.co.jp/"
  },
  {
    "domain": "npr.org/"
  },
  {
    "domain": "harvard.edu/"
  },
  {
    "domain": "bbb.org/"
  },
  {
    "domain": "aol.com/"
  },
  {
    "domain": "constantcontact.com/"
  },
  {
    "domain": "latimes.com/"
  },
  {
    "domain": "icio.us/"
  },
  {
    "domain": "list-manage.com/"
  },
  {
    "domain": "webs.com/"
  },
  {
    "domain": "opera.com/"
  },
  {
    "domain": "beian.gov.cn/"
  },
  {
    "domain": "vkontakte.ru/"
  },
  {
    "domain": "blogspot.co.uk/"
  },
  {
    "domain": "live.com/"
  },
  {
    "domain": "bandcamp.com/"
  },
  {
    "domain": "apache.org/"
  },
  {
    "domain": "bbc.com/"
  },
  {
    "domain": "businessinsider.com/"
  },
  {
    "domain": "dailymotion.com/"
  },
  {
    "domain": "cpanel.com/"
  },
  {
    "domain": "disqus.com/"
  },
  {
    "domain": "behance.net/"
  },
  {
    "domain": "mit.edu/"
  },
  {
    "domain": "rambler.ru/"
  },
  {
    "domain": "gnu.org/"
  },
  {
    "domain": "sina.com.cn/"
  },
  {
    "domain": "spotify.com/"
  },
  {
    "domain": "joomla.org/"
  },
  {
    "domain": "google.es/"
  },
  {
    "domain": "line.me/"
  },
  {
    "domain": "wired.com/"
  },
  {
    "domain": "github.io/"
  },
  {
    "domain": "stanford.edu/"
  },
  {
    "domain": "googleusercontent.com/"
  },
  {
    "domain": "kickstarter.com/"
  },
  {
    "domain": "guardian.co.uk/"
  },
  {
    "domain": "imgur.com/"
  },
  {
    "domain": "google.fr/"
  },
  {
    "domain": "goodreads.com/"
  },
  {
    "domain": "nasa.gov/"
  },
  {
    "domain": "rakuten.co.jp/"
  },
  {
    "domain": "surveymonkey.com/"
  },
  {
    "domain": "delicious.com/"
  },
  {
    "domain": "independent.co.uk/"
  },
  {
    "domain": "whatsapp.com/"
  },
  {
    "domain": "one.com/"
  },
  {
    "domain": "photobucket.com/"
  },
  {
    "domain": "ted.com/"
  },
  {
    "domain": "themeforest.net/"
  },
  {
    "domain": "homestead.com/"
  },
  {
    "domain": "google.ca/"
  },
  {
    "domain": "cnet.com/"
  },
  {
    "domain": "1und1.de/"
  },
  {
    "domain": "deviantart.com/"
  },
  {
    "domain": "scribd.com/"
  },
  {
    "domain": "jiathis.com/"
  },
  {
    "domain": "domainname.de/"
  },
  {
    "domain": "ca.gov/"
  },
  {
    "domain": "shopify.com/"
  },
  {
    "domain": "plesk.com/"
  },
  {
    "domain": "wiley.com/"
  },
  {
    "domain": "who.int/"
  },
  {
    "domain": "un.org/"
  },
  {
    "domain": "buzzfeed.com/"
  },
  {
    "domain": "theatlantic.com/"
  },
  {
    "domain": "barnesandnoble.com/"
  },
  {
    "domain": "sakura.ne.jp/"
  },
  {
    "domain": "pbs.org/"
  },
  {
    "domain": "nationalgeographic.com/"
  },
  {
    "domain": "getpocket.com/"
  },
  {
    "domain": "blogspot.com.es/"
  },
  {
    "domain": "nature.com/"
  },
  {
    "domain": "networksolutions.com/"
  },
  {
    "domain": "webmd.com/"
  },
  {
    "domain": "foxnews.com/"
  },
  {
    "domain": "cbsnews.com/"
  },
  {
    "domain": "techcrunch.com/"
  },
  {
    "domain": "booking.com/"
  },
  {
    "domain": "php.net/"
  },
  {
    "domain": "berkeley.edu/"
  },
  {
    "domain": "cloudfront.net/"
  },
  {
    "domain": "sciencedirect.com/"
  },
  {
    "domain": "ibm.com/"
  },
  {
    "domain": "a8.net/"
  },
  {
    "domain": "163.com/"
  },
  {
    "domain": "nbcnews.com/"
  },
  {
    "domain": "skype.com/"
  },
  {
    "domain": "mashable.com/"
  },
  {
    "domain": "cornell.edu/"
  },
  {
    "domain": "naver.com/"
  },
  {
    "domain": "domainretailing.com/"
  },
  {
    "domain": "usda.gov/"
  },
  {
    "domain": "wp.me/"
  },
  {
    "domain": "4.cn/"
  },
  {
    "domain": "springer.com/"
  },
  {
    "domain": "whitehouse.gov/"
  },
  {
    "domain": "squarespace.com/"
  },
  {
    "domain": "phoca.cz/"
  },
  {
    "domain": "change.org/"
  },
  {
    "domain": "cbc.ca/"
  },
  {
    "domain": "ft.com/"
  },
  {
    "domain": "epa.gov/"
  },
  {
    "domain": "secureserver.net/"
  },
  {
    "domain": "enable-javascript.com/"
  },
  {
    "domain": "meetup.com/"
  },
  {
    "domain": "noaa.gov/"
  },
  {
    "domain": "cnbc.com/"
  },
  {
    "domain": "nps.gov/"
  },
  {
    "domain": "phpbb.com/"
  },
  {
    "domain": "wikia.com/"
  },
  {
    "domain": "usnews.com/"
  },
  {
    "domain": "google.nl/"
  },
  {
    "domain": "myshopify.com/"
  },
  {
    "domain": "mapquest.com/"
  },
  {
    "domain": "trustpilot.com/"
  },
  {
    "domain": "domainactive.co/"
  },
  {
    "domain": "uol.com.br/"
  },
  {
    "domain": "foursquare.com/"
  },
  {
    "domain": "ow.ly/"
  },
  {
    "domain": "google.com.br/"
  },
  {
    "domain": "telegram.me/"
  },
  {
    "domain": "sohu.com/"
  },
  {
    "domain": "loc.gov/"
  },
  {
    "domain": "economist.com/"
  },
  {
    "domain": "fda.gov/"
  },
  {
    "domain": "irs.gov/"
  },
  {
    "domain": "themegrill.com/"
  },
  {
    "domain": "wufoo.com/"
  },
  {
    "domain": "geocities.jp/"
  },
  {
    "domain": "bigcartel.com/"
  },
  {
    "domain": "livedoor.jp/"
  },
  {
    "domain": "chicagotribune.com/"
  },
  {
    "domain": "dribbble.com/"
  },
  {
    "domain": "hp.com/"
  },
  {
    "domain": "doi.org/"
  },
  {
    "domain": "prnewswire.com/"
  },
  {
    "domain": "ed.gov/"
  },
  {
    "domain": "ok.ru/"
  },
  {
    "domain": "newyorker.com/"
  },
  {
    "domain": "abc.net.au/"
  },
  {
    "domain": "bizjournals.com/"
  },
  {
    "domain": "slate.com/"
  },
  {
    "domain": "houzz.com/"
  },
  {
    "domain": "umblr.com/"
  },
  {
    "domain": "fb.com/"
  },
  {
    "domain": "vice.com/"
  },
  {
    "domain": "xinhuanet.com/"
  },
  {
    "domain": "engadget.com/"
  },
  {
    "domain": "nifty.com/"
  },
  {
    "domain": "t.me/"
  },
  {
    "domain": "marriott.com/"
  },
  {
    "domain": "clickbank.net/"
  },
  {
    "domain": "globo.com/"
  },
  {
    "domain": "list-manage1.com/"
  },
  {
    "domain": "histats.com/"
  },
  {
    "domain": "state.gov/"
  },
  {
    "domain": "cbslocal.com/"
  },
  {
    "domain": "unesco.org/"
  },
  {
    "domain": "google.com.au/"
  },
  {
    "domain": "umich.edu/"
  },
  {
    "domain": "hostnet.nl/"
  },
  {
    "domain": "google.pl/"
  },
  {
    "domain": "house.gov/"
  },
  {
    "domain": "youku.com/"
  },
  {
    "domain": "theverge.com/"
  },
  {
    "domain": "ocn.ne.jp/"
  },
  {
    "domain": "storify.com/"
  },
  {
    "domain": "sogou.com/"
  },
  {
    "domain": "goo.ne.jp/"
  },
  {
    "domain": "fortune.com/"
  },
  {
    "domain": "wunderground.com/"
  },
  {
    "domain": "aboutcookies.org/"
  },
  {
    "domain": "rs6.net/"
  },
  {
    "domain": "columbia.edu/"
  },
  {
    "domain": "namejet.com/"
  },
  {
    "domain": "gofundme.com/"
  },
  {
    "domain": "oracle.com/"
  },
  {
    "domain": "yale.edu/"
  },
  {
    "domain": "psychologytoday.com/"
  },
  {
    "domain": "ifeng.com/"
  },
  {
    "domain": "washington.edu/"
  },
  {
    "domain": "indiatimes.com/"
  },
  {
    "domain": "samsung.com/"
  },
  {
    "domain": "upenn.edu/"
  },
  {
    "domain": "athemes.com/"
  },
  {
    "domain": "1and1.com/"
  },
  {
    "domain": "studiopress.com/"
  },
  {
    "domain": "hilton.com/"
  },
  {
    "domain": "debian.org/"
  },
  {
    "domain": "wikihow.com/"
  },
  {
    "domain": "fbcdn.net/"
  },
  {
    "domain": "fb.me/"
  },
  {
    "domain": "senate.gov/"
  },
  {
    "domain": "fastcompany.com/"
  },
  {
    "domain": "mailchimp.com/"
  },
  {
    "domain": "alibaba.com/"
  },
  {
    "domain": "youronlinechoices.com/"
  },
  {
    "domain": "android.com/"
  },
  {
    "domain": "researchgate.net/"
  },
  {
    "domain": "ustream.tv/"
  },
  {
    "domain": "dedecms.com/"
  },
  {
    "domain": "zdnet.com/"
  },
  {
    "domain": "home.pl/"
  },
  {
    "domain": "exblog.jp/"
  },
  {
    "domain": "cryoutcreations.eu/"
  },
  {
    "domain": "entrepreneur.com/"
  },
  {
    "domain": "drupal.org/"
  },
  {
    "domain": "sagepub.com/"
  },
  {
    "domain": "tripadvisor.co.uk/"
  },
  {
    "domain": "businesswire.com/"
  },
  {
    "domain": "shinystat.com/"
  },
  {
    "domain": "umn.edu/"
  },
  {
    "domain": "jugem.jp/"
  },
  {
    "domain": "hbr.org/"
  },
  {
    "domain": "sciencemag.org/"
  },
  {
    "domain": "ftc.gov/"
  },
  {
    "domain": "1688.com/"
  },
  {
    "domain": "google.co.in/"
  },
  {
    "domain": "wisc.edu/"
  },
  {
    "domain": "ucla.edu/"
  },
  {
    "domain": "inc.com/"
  },
  {
    "domain": "psu.edu/"
  },
  {
    "domain": "loopia.se/"
  },
  {
    "domain": "visma.com/"
  },
  {
    "domain": "dreamhost.com/"
  },
  {
    "domain": "mijndomein.nl/"
  },
  {
    "domain": "loopia.com/"
  },
  {
    "domain": "ox.ac.uk/"
  },
  {
    "domain": "scientificamerican.com/"
  },
  {
    "domain": "utexas.edu/"
  },
  {
    "domain": "stackoverflow.com/"
  },
  {
    "domain": "1and1.fr/"
  },
  {
    "domain": "sedo.com/"
  },
  {
    "domain": "mozilla.com/"
  },
  {
    "domain": "worldbank.org/"
  },
  {
    "domain": "hubspot.com/"
  },
  {
    "domain": "census.gov/"
  },
  {
    "domain": "arstechnica.com/"
  },
  {
    "domain": "mysql.com/"
  },
  {
    "domain": "si.edu/"
  },
  {
    "domain": "allaboutcookies.org/"
  },
  {
    "domain": "usgs.gov/"
  },
  {
    "domain": "intel.com/"
  },
  {
    "domain": "amazon.fr/"
  },
  {
    "domain": "shop-pro.jp/"
  },
  {
    "domain": "tandfonline.com/"
  },
  {
    "domain": "aliyun.com/"
  },
  {
    "domain": "office.com/"
  },
  {
    "domain": "alexa.com/"
  },
  {
    "domain": "zendesk.com/"
  },
  {
    "domain": "nhk.or.jp/"
  },
  {
    "domain": "colorlib.com/"
  },
  {
    "domain": "accuweather.com/"
  },
  {
    "domain": "cisco.com/"
  },
  {
    "domain": "google.ru/"
  },
  {
    "domain": "cam.ac.uk/"
  },
  {
    "domain": "hibu.com/"
  },
  {
    "domain": "hollywoodreporter.com/"
  },
  {
    "domain": "admin.ch/"
  },
  {
    "domain": "example.com/"
  },
  {
    "domain": "hhs.gov/"
  },
  {
    "domain": "twitch.tv/"
  },
  {
    "domain": "networkadvertising.org/"
  },
  {
    "domain": "nyu.edu/"
  },
  {
    "domain": "teamviewer.com/"
  },
  {
    "domain": "nazwa.pl/"
  },
  {
    "domain": "variety.com/"
  },
  {
    "domain": "netflix.com/"
  },
  {
    "domain": "box.com/"
  },
  {
    "domain": "prestashop.com/"
  },
  {
    "domain": "bls.gov/"
  },
  {
    "domain": "bmj.com/"
  },
  {
    "domain": "uchicago.edu/"
  },
  {
    "domain": "wsimg.com/"
  },
  {
    "domain": "www.nhs.uk/"
  },
  {
    "domain": "eventbrite.co.uk/"
  },
  {
    "domain": "opensource.org/"
  },
  {
    "domain": "zenfolio.com/"
  },
  {
    "domain": "blogspot.jp/"
  },
  {
    "domain": "usc.edu/"
  },
  {
    "domain": "va.gov/"
  },
  {
    "domain": "cmu.edu/"
  },
  {
    "domain": "oecd.org/"
  },
  {
    "domain": "ieee.org/"
  },
  {
    "domain": "mlb.com/"
  },
  {
    "domain": "ename.com.cn/"
  },
  {
    "domain": "usa.gov/"
  },
  {
    "domain": "steampowered.com/"
  },
  {
    "domain": "google.ch/"
  },
  {
    "domain": "redcross.org/"
  },
  {
    "domain": "bund.de/"
  },
  {
    "domain": "thehill.com/"
  },
  {
    "domain": "dictionary.com/"
  },
  {
    "domain": "360.cn/"
  },
  {
    "domain": "hostgator.com/"
  },
  {
    "domain": "icann.org/"
  },
  {
    "domain": "dot.gov/"
  },
  {
    "domain": "adweek.com/"
  },
  {
    "domain": "fao.org/"
  },
  {
    "domain": "sun.com/"
  },
  {
    "domain": "iubenda.com/"
  },
  {
    "domain": "gesetze-im-internet.de/"
  },
  {
    "domain": "tmall.com/"
  },
  {
    "domain": "today.com/"
  },
  {
    "domain": "nginx.org/"
  },
  {
    "domain": "xiti.com/"
  },
  {
    "domain": "venturebeat.com/"
  },
  {
    "domain": "snapchat.com/"
  },
  {
    "domain": "ietf.org/"
  },
  {
    "domain": "symantec.com/"
  },
  {
    "domain": "mhlw.go.jp/"
  },
  {
    "domain": "duke.edu/"
  },
  {
    "domain": "japanpost.jp/"
  },
  {
    "domain": "giphy.com/"
  },
  {
    "domain": "netscape.com/"
  },
  {
    "domain": "justgiving.com/"
  },
  {
    "domain": "sec.gov/"
  },
  {
    "domain": "illinois.edu/"
  },
  {
    "domain": "att.com/"
  },
  {
    "domain": "squareup.com/"
  },
  {
    "domain": "aboutads.info/"
  },
  {
    "domain": "gpo.gov/"
  },
  {
    "domain": "tucowsdomains.com/"
  },
  {
    "domain": "domainnameshop.com/"
  },
  {
    "domain": "plos.org/"
  },
  {
    "domain": "elsevier.com/"
  },
  {
    "domain": "biomedcentral.com/"
  },
  {
    "domain": "reference.com/"
  },
  {
    "domain": "oup.com/"
  },
  {
    "domain": "ssa.gov/"
  },
  {
    "domain": "libsyn.com/"
  },
  {
    "domain": "windowsphone.com/"
  },
  {
    "domain": "ny.gov/"
  },
  {
    "domain": "bigcommerce.com/"
  },
  {
    "domain": "oreilly.com/"
  },
  {
    "domain": "domeneshop.no/"
  },
  {
    "domain": "googleapis.com/"
  },
  {
    "domain": "artisteer.com/"
  },
  {
    "domain": "arxiv.org/"
  },
  {
    "domain": "thenextweb.com/"
  },
  {
    "domain": "google.be/"
  },
  {
    "domain": "gotowebinar.com/"
  },
  {
    "domain": "deloitte.com/"
  },
  {
    "domain": "blackberry.com/"
  },
  {
    "domain": "w3schools.com/"
  },
  {
    "domain": "dol.gov/"
  },
  {
    "domain": "python.org/"
  },
  {
    "domain": "siteorigin.com/"
  },
  {
    "domain": "ewebdevelopment.com/"
  },
  {
    "domain": "moz.com/"
  },
  {
    "domain": "warnerbros.com/"
  },
  {
    "domain": "justice.gov/"
  },
  {
    "domain": "quantcast.com/"
  },
  {
    "domain": "dhs.gov/"
  },
  {
    "domain": "java.com/"
  },
  {
    "domain": "fcc.gov/"
  },
  {
    "domain": "congress.gov/"
  },
  {
    "domain": "g.co/"
  },
  {
    "domain": "playstation.com/"
  },
  {
    "domain": "iso.org/"
  },
  {
    "domain": "opencart.com/"
  },
  {
    "domain": "eff.org/"
  },
  {
    "domain": "ucl.ac.uk/"
  },
  {
    "domain": "moodle.org/"
  },
  {
    "domain": "web.de/"
  },
  {
    "domain": "unsplash.com/"
  },
  {
    "domain": "msdn.com/"
  },
  {
    "domain": "nist.gov/"
  },
  {
    "domain": "unicef.org/"
  },
  {
    "domain": "mlit.go.jp/"
  },
  {
    "domain": "canada.ca/"
  },
  {
    "domain": "bitbucket.org/"
  },
  {
    "domain": "azurewebsites.net/"
  },
  {
    "domain": "nginx.com/"
  },
  {
    "domain": "dmca.com/"
  },
  {
    "domain": "etracker.de/"
  },
  {
    "domain": "mynavi.jp/"
  },
  {
    "domain": "aarp.org/"
  },
  {
    "domain": "gartner.com/"
  },
  {
    "domain": "starwoodhotels.com/"
  },
  {
    "domain": "typeform.com/"
  },
  {
    "domain": "acm.org/"
  },
  {
    "domain": "sedoparking.com/"
  },
  {
    "domain": "ticketmaster.com/"
  }
 ]

const set = (id, text) => {
  document
    .getElementById(id.replace('#', ''))
    .innerHTML = text
  }

let currentUrl = window.location.hostname
if(currentUrl === 'chromeweb‌​data' && !window.location.hostname){
  currentUrl = window.location.hostname || loadTimeData.data_.summary.hostName
}
thresholdSlider.addEventListener('input', () => {
  options.threshold = parseFloat(thresholdSlider.value)
  localStorage.setItem('threshold', options.threshold)
})

// const url = userPassedURL.value
// const domain = new URL(url).hostname
parsedThreshold = parseFloat(localStorage.getItem('threshold'))

let options = {
  threshold: parsedThreshold,
  keys: ['domain', 'alternatives']
};
let fuse = new Fuse(urlObject, options)

let result = fuse.search(currentUrl)

window.open(`https://${result[0].domain}`, '_blank')
console.log(result)




console.log(currentUrl)

