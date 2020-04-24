import React from 'react'

import NewSource from './NewsSource/NewsSource'

function NewsSources() {
    return Object.entries(sources).map(([key, value]) => <NewSource
        key={key}
        name={key}
        articles={value} />
    );
}

export default NewsSources

/* fake db */
var sources = {
    "The Verge": [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew Marino",
            "title": "Vergecast: reviews of Apple’s iPhone SE, Magic Keyboard, and Logitech’s Combo Touch",
            "description": "Nilay, Dieter, and Paul discuss The Verge’s reviews of Apple’s new iPhone SE, the Magic Keyboard for iPad Pro, and Logitech’s Combo Touch.",
            "url": "https://www.theverge.com/2020/4/24/21234377/vergecast-podcast-402-review-magic-keyboard-iphone-se-2020",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/tjs_WbPdaIlUYoNJR0Xgspz7c44=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19911773/vpavic_042018_3979_0072.jpg",
            "publishedAt": "2020-04-24T14:52:05Z",
            "content": "Photo by Vjeran Pavic / The Verge\n\n Last week, we saw Apple announce an addition to its smartphone lineup as well as a new keyboard case for the iPad Pro. This week on The Vergecast, co-hosts Nilay, Dieter, and Paul discuss The Verge’s reviews of those produc… [+2698 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Cameron Faulkner",
            "title": "Dreams, the game creation sandbox for PS4, is discounted at several retailers",
            "description": "If you’re looking for a way to express some creativity, Media Molecule’s Dreams game for PS4 is a good way to do that. It’s much more affordable than usual through several retailers, like Amazon, GameStop, and Best Buy.",
            "url": "https://www.theverge.com/good-deals/2020/4/24/21234324/dreams-ps4-game-lg-v40-phone-unlocked-deal-amazon-best-buy",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/3WTl3DwjNj1_CYU2tshEmZPHMrQ=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19717863/Asparagus_Standup_by_Redep1994.jpg",
            "publishedAt": "2020-04-24T14:48:27Z",
            "content": "Plus, get LGs unlocked V40 for $300\r\nThis story is part of a group of stories called \r\nOnly the best deals on Verge-approved gadgets get the Verge Deals stamp of approval, so if you're looking for a deal on your next gadget or gift from major retailers like A… [+1833 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chaim Gartenberg",
            "title": "AT&T CEO Randall Stephenson is stepping down, John Stankey to serve as new CEO",
            "description": "AT&T’s CEO Randall Stephenson has announced that he’ll be stepping down, to be replaced by AT&T president and COO John Stankey. Stankey had previously served as the CEO of WarnerMedia at AT&T under Stephenson. The move marks a major shakeup for all of AT&T.",
            "url": "https://www.theverge.com/2020/4/24/21234433/att-ceo-randall-stephenson-retire-replacement-john-stankey-coo",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/TfClhf8yo8xY7NKvaSnegYW7GbU=/0x0:2040x1068/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9723383/att_randall_stevenson_ceo_1.jpg",
            "publishedAt": "2020-04-24T14:35:34Z",
            "content": "Photo by Chris Welch / The Verge\n\n AT&T CEO Randall Stephenson has announced that he’ll be stepping down from his position, with current AT&T president and COO John Stankey set to replace him as the new CEO on July 1st, via CNBC. \nThe news marks the latest ex… [+288 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Nicole Wetsman",
            "title": "Along with health and safety experts, we would like to remind you that Lysol is poison",
            "description": "President Trump appeared to suggest injections of disinfectants might be a way to treat COVID-19. The EPA and the makers of Lysol both then stressed these products should not be used inside the body.",
            "url": "https://www.theverge.com/2020/4/24/21234279/lysol-poison-health-experts-trump-injections-epa-coronavirus",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/2q6TS2pBEEKXabkv7BU5pyO2mCE=/0x358:5000x2976/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19922110/860371626.jpg.jpg",
            "publishedAt": "2020-04-24T14:34:07Z",
            "content": "People have died after following Trumps medical advice\r\nPhoto by Roberto Machado Noa/LightRocket via Getty Images\r\nThe makers of Lysol, the Washington State Emergency Management Division, and the Environmental Protection Agency all scrambled to do damage cont… [+4249 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Josh Dzieza",
            "title": "Amazon tech workers are calling out sick in protest over COVID-19 response",
            "description": "Tech and warehouse workers are joining forces, and Amazon is responding with firings, deleted emails, and resistance",
            "url": "https://www.theverge.com/2020/4/24/21233891/amazon-coronavirus-protest-sick-out-tech-workers-climate-justice",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Sf4a0tTSGFBcTBgxWK9cKNfrD4g=/0x481:6720x3999/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921559/1215765218.jpg.jpg",
            "publishedAt": "2020-04-24T13:05:49Z",
            "content": "Photo by Spencer Platt/Getty Images\n\n Amazon tech workers are calling out sick today in protest of the company’s treatment of workers during the COVID-19 pandemic. The action, which will consist of a live streamed series of speakers in lieu of a physical rall… [+9389 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Telegram adding secure group video calls this year",
            "description": "Messaging app Telegram is developing a group video calling service that’s due to be launched later this year. It announced the plans alongside the news that the service now boasts 400 million monthly active users.",
            "url": "https://www.theverge.com/2020/4/24/21234254/telegram-messaging-app-group-video-calling-security-usability",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ma3VFJyH8a5RbMNAidMYF8bCF6w=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10668737/acastro_180417_1777_telegram_0004.jpg",
            "publishedAt": "2020-04-24T13:00:43Z",
            "content": "The messaging service now has 400 million monthly active users\r\nIllustration by Alex Castro / The Verge\r\nMessaging app Telegram is developing a group video calling service thats due to be launched later this year, the company announced today. It says that cur… [+1733 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chaim Gartenberg",
            "title": "The Netflix button is an advertisement masquerading as a product",
            "description": "The Netflix button on your TV remote is one of the best marketing ideas ever — put a bright, colorful, physical button on nearly every remote that can’t be changed or removed and always links right to your service. But the best ads are still ads.",
            "url": "https://www.theverge.com/circuitbreaker/2020/4/24/21232655/netflix-button-tv-remotes-advertisement-marketing-streaming",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/McRgnmnKrVizOVQB_K3j9951wEw=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19919655/akrales_200421_3973_0026.jpg",
            "publishedAt": "2020-04-24T12:30:00Z",
            "content": "Filed under:\r\nButton of the month: the Netflix button on your TV remote\r\nIn todays digital age, it sometimes feels like hardware has taken a back seat to the software that drives our devices. Button of the Month will look at what some of those buttons and swi… [+4032 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Tom Warren",
            "title": "Microsoft Word now flags double spaces as errors, ending the great space debate",
            "description": "Microsoft is now marking two spaces after a period as an error in Word. The software giant is settling the great space debate, and handing victory to one-spacers.",
            "url": "https://www.theverge.com/2020/4/24/21234170/microsoft-word-two-spaces-period-error-correction-great-space-debate",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/gJTV4oCA_uEiPU5waEfY_SZV6mQ=/0x96:1323x789/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921960/hOoRzgG.png",
            "publishedAt": "2020-04-24T12:00:00Z",
            "content": "One-spacers take the victory in an end of an era\r\nMicrosoft has settled the great space debate, and sided with everyone who believes one space after a period is correct, not two. The software giant has started to update Microsoft Word to highlight two spaces … [+1940 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Tom Warren",
            "title": "Nintendo confirms 160,000 Nintendo Accounts accessed in hacking attempts",
            "description": "Nintendo has confirmed that around 160,000 accounts have been accessed during recent hacking attempts. Some Nintendo account owners have had fraudulent purchases on their accounts, too.",
            "url": "https://www.theverge.com/2020/4/24/21234205/nintendo-account-hack-nnid-breach-security-hacking-attempt",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/F6IRXvG4JByZ7BxO9dra3TWy-_8=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10329935/jbareham_180301_2346_nintendo_switch_0034_mario.jpg",
            "publishedAt": "2020-04-24T11:19:20Z",
            "content": "The issues started at the beginning of April\r\nPhoto by James Bareham / The Verge\r\nNintendo is disabling the ability to log into a Nintendo Account through a Nintendo Network ID (NNID), after 160,000 accounts have been affected by hacking attempts. Nintendo sa… [+1140 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Dieter Bohn",
            "title": "Making macOS run well on ARM processors isn’t the hard part",
            "description": "We finally have a report confirming Apple is actively working on ARM processors for Macs. But as Dieter Bohn explains, just getting macOS and Apple’s own apps running  on it isn’t enough. Processor transitions are hard!",
            "url": "https://www.theverge.com/2020/4/24/21233661/macos-arm-processor-transition-apps-developers-catalyst-wwdc",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/EKOVuBYOR8UESt3cwqLQ2Qvagvs=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19834386/awhite_200319_3944_5.0.jpg",
            "publishedAt": "2020-04-24T11:00:00Z",
            "content": "Less surprise will mean more delight\r\nPhoto by Nilay Patel / The Verge\r\nMark Gurman at Bloomberg has the confirmation weve all be waiting for: Apple will reportedly use a 12-core 5nm ARM processor in a 2021 Mac. Theres plenty of time to work out the details, … [+11995 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Tom Warren",
            "title": "A new iOS text bug is again crashing iPhones",
            "description": "A new iOS text bug has been discovered that will crash an iPhone. It involves characters from the Sindhi language that causes iOS to lockup and an iPhone to crash. Reports suggest it’s fixed in the iOS 13.4.5 beta.",
            "url": "https://www.theverge.com/2020/4/24/21234191/apple-iphone-crash-text-bug-ios-13-problem",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/9tYgBD_w0Lpc_D1eRM3L4f14dOw=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19206339/akrales_190913_3628_0277.jpg",
            "publishedAt": "2020-04-24T10:33:51Z",
            "content": "Photo by Amelia Holowaty Krales / The Verge\n\n A new iOS text bug has been discovered that causes iPhones to crash. The flaw involves several characters from the Sindhi language that cause iOS to lock up and an iPhone to crash. The character string has been ci… [+1390 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Casey Newton",
            "title": "Amazon’s white-collar workers are starting to stand up for their blue-collar colleagues",
            "description": "A walkout is urged on Friday — even as the calendar invite that spurred it mysteriously disappears from workers’ schedules. Now CEO Jeff Bezos is getting more involved in the company’s day-to-day affairs",
            "url": "https://www.theverge.com/interface/2020/4/24/21232627/amazon-walkout-warehouse-covid-coronavirus-white-collar-jeff-bezos",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/OkgDkEtLBed8QNEu9lTmBnKAtgs=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13443482/acastro_181114_1777_amazon_hq2_0007.jpg",
            "publishedAt": "2020-04-24T10:00:00Z",
            "content": "A walkout is urged on Friday  even as the calendar invite that spurred it mysteriously disappears from workers schedules\r\nIllustration by Alex Castro / The Verge\r\nThis story is part of a group of stories called \r\nThe Interface is a daily column and newsletter… [+18811 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Apple downplays iOS Mail app security flaw, says ‘no evidence’ of exploits",
            "description": "Apple has found no evidence that a security flaw in the native iOS Mail app was actually exploited by hackers in the wild. It also cast doubt on whether the security issues  were enough to bypass the devices’ security protections.",
            "url": "https://www.theverge.com/2020/4/24/21234163/apple-ios-ipados-mail-app-security-flaw-statement-no-evidence-exploit",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ciFlDP6w9_FnbboSATrnp0i0Pdw=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19206346/akrales_190913_3628_0412.jpg",
            "publishedAt": "2020-04-24T08:30:35Z",
            "content": "These potential issues will be addressed in a software update soon\r\nPhoto by Amelia Holowaty Krales / The Verge\r\nApple has found no evidence that recently discovered security flaws in the native iOS Mail app were exploited by hackers, the company said in a st… [+2124 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sam Byford",
            "title": "LG’s Velvet phone is coming on May 7th",
            "description": "LG’s new flagship phone, the Velvet, will be revealed in full on May 7th. The company posted a teaser video clip to its Korean YouTube channel evoking raindrops and a catwalk.",
            "url": "https://www.theverge.com/2020/4/24/21234013/lg-velvet-flagship-phone-event-time-date",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/34PtXmL6P7bZfHIjLwnDc2KXHn4=/0x65:900x536/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921702/Screen_Shot_2020_04_24_at_13.24.05.png",
            "publishedAt": "2020-04-24T04:33:45Z",
            "content": "LG’s new flagship phone, the Velvet, will be revealed in full on May 7th. The company posted a teaser video clip to its Korean YouTube channel evoking raindrops and a catwalk — a reference to the phone’s unusual camera layout and supposedly fashion-forward de… [+500 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew Webster",
            "title": "More than 12 million people attended Travis Scott’s Fortnite concert",
            "description": "Rapper Travis Scott performed a virtual concert inside of Fortnite, which broke the record for concurrent players in the battle royale game, topping last year’s performance by DJ Marshmello.",
            "url": "https://www.theverge.com/2020/4/23/21233946/travis-scott-fortnite-concert-astronomical-record-breaking-player-count",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/cc9GZ3cNU_ymE8fFkBWvC_4KCiE=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921167/2.jpg",
            "publishedAt": "2020-04-24T03:41:34Z",
            "content": "Travis Scott’s first virtual performance wasn’t just spectacular — it also broke a record. This evening developer Epic Games revealed that the concert, which took place inside of Fortnite, saw 12.3 million concurrent players participate. The developer says th… [+512 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew Webster",
            "title": "Travis Scott’s first Fortnite concert was surreal and spectacular",
            "description": "Rapper Travis Scott performed a surreal concert inside of the battle royale game Fortnite, utilizing trippy visuals to create a musical performance that could only be possible in a digital space.",
            "url": "https://www.theverge.com/2020/4/23/21233637/travis-scott-fortnite-concert-astronomical-live-report",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/t2SAC0UdOjF-8smmT02Nsjoq2Kc=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921128/Fortnite_20200423190729.jpg",
            "publishedAt": "2020-04-24T00:17:09Z",
            "content": "Sicko mode\r\nIf theres one thing you can say about Fortnites live events, its that they keep getting more ambitious. From the original rocket launch to the mech vs. kaiju battle to the black hole that wiped out an entire island, each new event is more elaborat… [+3098 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jay Peters",
            "title": "Parks and Recreation is returning next week for a half-hour charity special on NBC",
            "description": "It airs on April 30th",
            "url": "https://www.theverge.com/2020/4/23/21233643/parks-and-recreation-returning-half-hour-nbc-special-april-30th-feeding-america",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/zmO4i5QpXOu_LIpIF6ULqUDqSh8=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921193/ParksAndRec_Web_DynamicLead_Desk.png",
            "publishedAt": "2020-04-24T00:05:46Z",
            "content": "It airs on April 30th\r\nImage: NBC\r\nNBCs Parks and Recreation will be returning for a half-hour scripted special next week to raise money for Feeding Americas COVID-19 Response Fund, NBC announced today (via The Hollywood Reporter). The special is scheduled to… [+973 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jay Peters",
            "title": "Avatar: The Last Airbender is hitting Netflix on May 15th",
            "description": "All three seasons of the beloved animated series Avatar: The Last Airbender will be hitting Netflix in the US on May 15th. It originally aired on Nickelodeon from February 2005 to July 2008.",
            "url": "https://www.theverge.com/2020/4/23/21233545/netflix-avatar-the-last-airbender-may-15th",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Lzb8690_5iubm26a-PPT4p-PBUY=/95x650:1280x1270/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921093/mgidarccontentnick.comc008fa9d_d.png",
            "publishedAt": "2020-04-23T23:07:37Z",
            "content": "All three seasons will be available\r\nImage: Nickelodeon\r\nAll three seasons of Avatar: The Last Airbender will be hitting Netflix in the US on May 15th, the streaming platform announced today. The beloved animated show follows the adventures of Aang, the shows… [+1070 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Loren Grush",
            "title": "NASA administrator urges people not to travel to Florida to watch historic SpaceX launch",
            "description": "NASA does not want members of the public to travel to Florida see SpaceX’s first crewed launch to the International Space Station. NASA administrator Jim Bridenstine is urging people to stay home and watch the historic mission online, because of safety concer…",
            "url": "https://www.theverge.com/2020/4/23/21233475/nasa-spacex-crew-dragon-falcon-9-florida-no-travel",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/7zyfPumOd_mu_Yk1v8PDFy-9vxs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19921023/49422067976_cda2b8f021_o__1_.jpg",
            "publishedAt": "2020-04-23T22:49:18Z",
            "content": "NASA wants everyone to enjoy the mission virtually\r\nAt the end of May, NASA astronauts are slated to launch to space from the United States once again, after nearly a decade of launching on Russian rockets from Kazakhstan but NASA does not want members of the… [+4914 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Taylor Lyles",
            "title": "Even Elijah Wood needs Twitter’s help to sell his Animal Crossing turnips",
            "description": "Animal Crossing: New Horizons’ stalk market is bringing the internet together. After one user shared her turnip prices on Twitter, it caught the attention of The Lord of the Rings star Elijah Wood, who wanted to visit her island and sell his turnips.",
            "url": "https://www.theverge.com/tldr/2020/4/23/21233424/elijah-wood-animal-crossing-turnip-prices-stalk-market",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/5oWHzHf0y5nfb5rYiPM9krfLxWk=/0x0:1280x670/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19920792/EWTZuDDWAAA5uct.jpeg",
            "publishedAt": "2020-04-23T21:54:55Z",
            "content": "Filed under:\r\nCelebrities want to conquer the stalk market, too\r\nImage: Jessa (@directedbyrian)\r\nThe stalk market in Animal Crossing: New Horizons is bringing the internet together. After one user shared her incredible turnip prices on Twitter today, it caugh… [+1329 chars]"
        }
    ],
    "Medium.com": [
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Nicole Simpson",
            "title": "I Am Because You Are",
            "description": "New York City’s Emergency Medical Services received 6,406 medical 911 calls yesterday. It was the highest volume ever recorded in the city, surpassing the record that had been set on September 11…",
            "url": "https://medium.com/@jnovogratz/i-am-because-you-are-54e286aa6d50",
            "urlToImage": "https://miro.medium.com/max/1200/1*HoxL6skdNGFVXCg7t1REdQ.jpeg",
            "publishedAt": "2020-04-24T14:37:46Z",
            "content": "New York Citys Emergency Medical Services received 6,406 medical 911 calls yesterday. It was the highest volume ever recorded in the city, surpassing the record that had been set on September 11, 2001. Once again, New York has become the epicenter of a global… [+5058 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Ethan Siegel",
            "title": "This Is Why Space Needs To Be Continuous, Not Discrete",
            "description": "We might live in a quantum Universe, but we’ll violate the principle of relativity if space is discrete.\r\nContinue reading on Starts With A Bang! »",
            "url": "https://medium.com/starts-with-a-bang/this-is-why-space-needs-to-be-continuous-not-discrete-c68450215e48?source=rss----458a773bccd2---4",
            "urlToImage": null,
            "publishedAt": "2020-04-24T14:01:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Zara Stone",
            "title": "The Real Reason It's So Hard To Order Groceries Online Right Now",
            "description": "In New York, Amanda Wood has been waiting more than two weeks for an Amazon Fresh delivery slot. Her order includes bread, eggs, toilet rolls, and diapers. “Diapers are the priority,” says Wood, who…",
            "url": "https://marker.medium.com/why-its-so-hard-to-order-groceries-online-right-now-ec70c3269510",
            "urlToImage": "https://miro.medium.com/freeze/focal/1200/632/49/32/1*baqQDx3Vrw_MtMPGdgjvIQ.gif",
            "publishedAt": "2020-04-24T13:23:51Z",
            "content": "In New York, Amanda Wood has been waiting more than two weeks for an Amazon Fresh delivery slot. Her order includes bread, eggs, toilet rolls, and diapers. Diapers are the priority, says Wood, who has an eight-month-old son. Woods a first-time online grocery … [+8646 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Jam3",
            "title": "How We Built a Playful WebGL Experience for 100 FWA Wins",
            "description": "To commemorate 100 FWA wins, we created a WebGL experience to celebrate this milestone with artistic expression and fun. To answer that we spent a week as a group brainstorming and concepting…",
            "url": "https://medium.com/@Jam3/how-we-built-a-playful-webgl-experience-for-100-fwa-wins-12262265548d",
            "urlToImage": "https://miro.medium.com/max/1200/1*cTPKr6mkMtduey_HbGZihg.jpeg",
            "publishedAt": "2020-04-24T05:39:56Z",
            "content": "By Amélie Rosser, Senior Creative Developer, Jam3\r\nTo commemorate 100 FWA wins, we created a WebGL experience to celebrate this milestone with artistic expression and fun.\r\nWe asked ourselves, how can we tell Jam3s story through meaningful and playful interac… [+2802 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Amy Devereux",
            "title": "Building a brand",
            "description": "Two months ago, we unveiled the foundation of our new brand at Envoy. This was intentionally timed with the launch of our workplace platform and we’ve since continued to roll out this refresh. Here’s…",
            "url": "https://medium.com/envoy-design/building-a-brand-8c64cf88588",
            "urlToImage": "https://miro.medium.com/max/1200/1*yQIuY3qZQ4XAn2TpmULIRQ.jpeg",
            "publishedAt": "2020-04-24T05:24:57Z",
            "content": "As with most startups, when these assets were created while we strived for quality speed and agility were our primary focus. We have always known we wanted to be approachable and welcoming, but we didnt really develop the approach. Our primary takeaway from t… [+1698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Arun Mannuru",
            "title": "Introduction to Apache Camel : Part 1",
            "description": "Learn Apache Camel architecture and how to implement some simple Camel Enterprise Integration Patterns Camel is open source integration framework designed to integrate systems simply and easily…",
            "url": "https://medium.com/walmartlabs/introduction-to-apache-camel-part-1-66914874cc78",
            "urlToImage": "https://miro.medium.com/max/1200/1*PrhtluVzWSn-Y0Njkafwow.png",
            "publishedAt": "2020-04-23T23:22:06Z",
            "content": "Learn Apache Camel architecture and how to implement some simple Camel Enterprise Integration Patterns\r\nOverview\r\nCamel is open source integration framework designed to integrate systems simply and easily. Apache Camel provides implementations of various Ente… [+2989 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Sri Ram",
            "title": "OTP Bypass on India’s Biggest Video Sharing Site. It’s been so long since I posted any article, will continue posting some regarding my recent best findings.",
            "description": "I started the attack by gathering some information about the target website, let’s take the site as example.com, i signed up a account and was searching for dashboard. But to my surprise i couldn’t find Dashboard which stopped to go further coz i love hunting…",
            "url": "https://medium.com/bugbountywriteup/otp-bypass-on-indias-biggest-video-sharing-site-e94587c1aa89",
            "urlToImage": "https://miro.medium.com/max/752/1*L8VxkMQe5bCtoCPyRHP2lQ.png",
            "publishedAt": "2020-04-23T22:03:00Z",
            "content": "Its been so long since I posted any article, will continue posting some regarding my recent best findings.\r\nWeve been working on some private projects for a couple of months through our organization. So, I decided for a little break and hunt for bugs on publi… [+3517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Preetham Bomma",
            "title": "Traverxec — HackTheBox Writeup Traverxec is an easy difficulty machine retiring this week. We gain initial access by exploiting Nostromo Directory traversal / RCE…",
            "description": "www-data@traverxec:/var/nostromo/conf$ cat nhtt* cat nhtt* # MAIN [MANDATORY] servername traverxec.htb serverlisten * serveradmin david@traverxec.htb serverroot /var/nostromo servermimes conf/mimes docroot /var/nostromo/htdocs docindex index.html # LOGS [OPTI…",
            "url": "https://medium.com/bugbountywriteup/traverxec-hackthebox-writeup-ed58642e94d8",
            "urlToImage": "https://miro.medium.com/max/799/1*bQgJYMwmg2FgIL_i9996hg.png",
            "publishedAt": "2020-04-23T22:03:00Z",
            "content": "Enumerating the filesystem, we find the configuration file nhttpd.conf\r\nwww-data@traverxec:/var/nostromo/conf$ cat nhtt*cat nhtt*# MAIN [MANDATORY]servername traverxec.htbserverlisten *serveradmin david@traverxec.htbserverroot /var/nostromoservermimes conf/mi… [+1423 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Eve Peyser",
            "title": "The Joys Of Logging Off In The Time Of Social Distancing",
            "description": "Shortly before the coronavirus became a full-fledged global pandemic, I chose to go on an indefinite social media hiatus. I would only log on every couple of weeks to share my articles — an…",
            "url": "https://gen.medium.com/the-joys-of-logging-off-in-the-time-of-social-distancing-4444b124c5cd",
            "urlToImage": "https://miro.medium.com/focal/1200/632/45/53/1*J9DQYXyItKB4_hlmlDdn9Q.jpeg",
            "publishedAt": "2020-04-23T21:05:35Z",
            "content": "Shortly before the coronavirus became a full-fledged global pandemic, I chose to go on an indefinite social media hiatus. I would only log on every couple of weeks to share my articles an unfortunate requirement of my job and then promptly log the fuck off. I… [+4963 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Google News",
            "title": "When health crises collide–tackling malaria, COVID-19 and Ebola in Burundi - Elemental",
            "description": "“I spent three days not knowing where I was. If you have malaria symptoms, you need to get treatment as quickly as possible.” Malaria is a leading cause of death in Burundi. In the first quarter of…",
            "url": "https://medium.com/@UNDP/when-health-crises-collide-803ffad1f487",
            "urlToImage": "https://miro.medium.com/max/1200/1*lsdkPFMvPvZDMnRoFXQ0BQ.jpeg",
            "publishedAt": "2020-04-23T20:35:06Z",
            "content": "And new health crises have been emerging. In August 2019, the Ebola outbreak in the Democratic Republic of Congo, which has claimed 3,456 lives, spread to South Kivu province, bordering Burundi. A national health crisis centre was quickly established within t… [+2389 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Syed Izhar Ahmed",
            "title": "WPICTF 2020 Writeup for sigknock",
            "description": "Hello Infosec Enthusiasts. This is my first writeup on Medium and I will be posting regularly about Infosec, CTFs, Bugbounties, my best and worst experiences that I get to experience during this crazy journey called LIFE.\n\nAfter I did an ssh login with the gi…",
            "url": "https://medium.com/bugbountywriteup/wpictf-2020-writeup-for-sigknock-b3d6d7d8b702",
            "urlToImage": "https://miro.medium.com/max/809/1*Pg2yRd0Fu_Vvv5QX9nW4sw.png",
            "publishedAt": "2020-04-23T18:52:00Z",
            "content": "Sigknock was a challenge for 200 points. The credentials for the challenge were given and the Problem Statement was Port knocking is boring. Enhance your security through obscurity using sigknock.\r\nsigknock\r\nAfter I did an ssh login with the given credentials… [+1484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Eric Heller",
            "title": "How to Distinguish Journalism from Fake News",
            "description": "As we struggle to rationalize the minute-by-minute dread of this unfolding pandemic, the Washington Post ran one of the most surreal and outright alarming articles yet: “Coronavirus modelers factor…",
            "url": "https://medium.com/better-humans/how-to-distinguish-journalism-from-fake-news-19b4908adc3e",
            "urlToImage": "https://miro.medium.com/max/764/1*OSQlHIM-lNQg4pgWZx9e2Q.jpeg",
            "publishedAt": "2020-04-23T18:20:25Z",
            "content": "Whether our polarization is a result of manufactured intent, or just a natural outcome given our predispositions, we are a divided society. And we push the divisions all the time. We seem driven to convince the other side that their position is wrong and ours… [+3137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Sven Anderson",
            "title": "Serverless Redis",
            "description": "We are excited to introduce Lambda Store. Lambda Store is the first Serverless Redis service. It enables developers to boost their application with Redis without paying hundreds of dollars. You can…",
            "url": "https://medium.com/lambda-store/serverless-redis-is-here-34c2fa335f24",
            "urlToImage": "https://miro.medium.com/max/916/1*vE3Bs3fQsRh2yuY_-5VitQ.png",
            "publishedAt": "2020-04-23T15:32:14Z",
            "content": "We are excited to introduce Lambda Store. Lambda Store is the first Serverless Redis service. It enables developers to boost their application with Redis without paying hundreds of dollars. You can have a fully managed Redis database in seconds. Lambda Store … [+1851 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "kristofger",
            "title": "Are you using SVG favicons yet? A guide for modern browsers.",
            "description": "Also, you probably don’t need all these icon links and sizes you’re copying from projects to projects. Let’s find out what’s the absolute minimum required, word by word. For Safari, it’s a bit…",
            "url": "https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df",
            "urlToImage": "https://miro.medium.com/max/1200/1*8XMKp59Vm98aMa2iASL4yw.png",
            "publishedAt": "2020-04-23T14:55:51Z",
            "content": "You should be using SVG favicons. Theyre supported in all modern browsers right now.\r\nAlso, you probably dont need all these icon links and sizes youre copying from projects to projects. Lets find out whats the absolute minimum required, word by word.\r\nIcon\r\n… [+2693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Srinivas Rao",
            "title": "What Your Consume Determines What You Create",
            "description": "Steve Jobs said, “Creativity is just connecting dots.” But to connect dots, we have to collect them. That requires the consumption of information (books, podcasts, conversations, etc). But excessive…",
            "url": "https://medium.com/the-mission/what-your-consume-determines-what-you-create-ddb9efff211",
            "urlToImage": "https://miro.medium.com/max/1200/0*5sH3pdpcSB1ROiX6.jpg",
            "publishedAt": "2020-04-23T14:15:02Z",
            "content": "Photographer: Priscilla Du Preez | Source: Unsplash\r\nSteve Jobs said, Creativity is just connecting dots. But to connect dots, we have to collect them. That requires the consumption of information (books, podcasts, conversations, etc). But excessive consumpti… [+9010 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Tony Fahkry",
            "title": "Although Our Pain Is Not Our Fault, Healing Is Our Responsibility",
            "description": "Healing involves integrating our fragmented parts into the entirety of our being. However, the paradox is: we are not broken but merely disassociated from our wholeness. The term healing denotes…",
            "url": "https://medium.com/the-mission/although-our-pain-is-not-our-fault-healing-is-our-responsibility-3108d1111dfe",
            "urlToImage": "https://miro.medium.com/max/1200/0*tyqKc0e6aMYFh3X4",
            "publishedAt": "2020-04-23T14:14:34Z",
            "content": "Nurture The Deepest Part Of Your Core Nature\r\nThe soul always knows what to do to heal itself. The challenge is to silence the mind. Caroline Myss\r\nHealing involves integrating our fragmented parts into the entirety of our being. However, the paradox is: we a… [+4765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Jonas Altman",
            "title": "Managing Self-Management",
            "description": "In the Black Mirror episode, ‘Nosedive’ Lacie’s every interaction is rated on a five-star scale. Her friend’s rate her likeability, the barista rates her banter, and a job interviewer rates her…",
            "url": "https://medium.com/the-mission/managing-self-management-5522b04f8044",
            "urlToImage": "https://miro.medium.com/max/720/1*kLzgHCuBR6kXKKk9u9jDpQ.jpeg",
            "publishedAt": "2020-04-23T14:14:10Z",
            "content": "In the Black Mirror episode, Nosedive Lacies every interaction is rated on a five-star scale. Her friends rate her likeability, the barista rates her banter, and a job interviewer rates her employability. Through augmented reality and an ever-present social- … [+7315 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Tony Fahkry",
            "title": "How To Rediscover The Joy Of Life, Even In Challenging Times",
            "description": "I want to ask you a question, so simple you may not have asked it before: Are you happy at the moment? Do you feel a sense of joy when you wake up each morning? Do you look forward to the day or is…",
            "url": "https://medium.com/the-mission/how-to-rediscover-the-joy-of-life-even-in-challenging-times-368414ba7e0c",
            "urlToImage": "https://miro.medium.com/max/1200/0*ctcntZH9t-QRtX7d",
            "publishedAt": "2020-04-23T14:13:05Z",
            "content": "We All Have Choices, Irrespective Of Our Conditions\r\nLive life to the fullest. You have to colour outside the lines once in a while if you want to make your life a masterpiece. Laugh some every day. Keep growing, keep dreaming, and keep following your heart. … [+5337 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Pawan Kumar",
            "title": "21 Amazing Slack Apps for Remote Teams",
            "description": "Remote working has its own benefits and challenges. Today, most of the companies are allowing working from home option. Managing remote teams can be extremely challenging. When team members are…",
            "url": "https://medium.com/the-mission/21-amazing-slack-apps-for-remote-teams-90bb4f5972b1",
            "urlToImage": "https://miro.medium.com/max/1200/1*vlcmZPT_j91lJnXXmg-GLg.jpeg",
            "publishedAt": "2020-04-23T14:10:36Z",
            "content": "1. Donut\r\nIts challenging to know your team members while you are working remotely. But Donut slack app makes it easier for remote teams.\r\nDonut introduces people who dont know each other well on teams of all sizes via direct messages and encourages them to m… [+5103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Medium.com"
            },
            "author": "Shane Snow",
            "title": "The Pandemic is Exposing These 6 Hidden Dysfunctions of Teams",
            "description": "As Peter allegedly wrote, a little charity can cover a multitude of sins. So it goes in business, too, it seems. When people are showing up and sales are coming in, we can be forgiven for not having…",
            "url": "https://medium.com/the-mission/the-pandemic-is-exposing-these-6-hidden-dysfunctions-of-teams-2b5372e28e2e",
            "urlToImage": "https://miro.medium.com/max/1200/1*phE-M0jWLuzXEPFHvIbJ2Q.png",
            "publishedAt": "2020-04-23T14:09:22Z",
            "content": "Image via Unsplash\r\nAs Peter allegedly wrote, a little charity can cover a multitude of sins. So it goes in business, too, it seems.\r\nWhen people are showing up and sales are coming in, we can be forgiven for not having perfect habits at work. Well often excu… [+11661 chars]"
        }
    ],
    "Smashingmagazine.com": [
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Bobby Sebolao",
            "title": "Why Collaborative Coding Is The Ultimate Career Hack",
            "description": "Taking your first steps in programming is like picking up a foreign language. At first, the syntax makes no sense, the vocabulary is unfamiliar, and everything looks and sounds unintelligible. If you’re anything like me when I started, fluency feels impossibl…",
            "url": "https://www.smashingmagazine.com/2020/04/collaborative-coding-ultimate-career-hack/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/17e1bbe2-87a2-4115-a381-751ad65f87eb/collaborative-coding-ultimate-career-hack.png",
            "publishedAt": "2020-04-24T10:30:00Z",
            "content": "Taking your first steps in programming is like picking up a foreign language. At first, the syntax makes no sense, the vocabulary is unfamiliar, and everything looks and sounds unintelligible. If youre anything like me when I started, fluency feels impossible… [+13934 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Aleem Isiaka",
            "title": "Exploring Node.js Internals",
            "description": "Since the introduction of Node.js by Ryan Dahl at the European JSConf on 8 November 2009, it has seen wide usage across the tech industry. Companies such as Netflix, Uber, and LinkedIn give credibility to the claim that Node.js can withstand a high amount of …",
            "url": "https://www.smashingmagazine.com/2020/04/nodejs-internals/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/285f5aff-35c8-4274-a571-b377a987bbc6/nodejs-internals-nodejs-dependencies.png",
            "publishedAt": "2020-04-23T10:30:00Z",
            "content": "Since the introduction of Node.js by Ryan Dahl at the European JSConf on 8 November 2009, it has seen wide usage across the tech industry. Companies such as Netflix, Uber, and LinkedIn give credibility to the claim that Node.js can withstand a high amount of … [+17876 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Carmine Zaccagnino",
            "title": "Responsive Web And Desktop Development With Flutter",
            "description": "This tutorial is not an introduction to Flutter itself. There are plenty of articles, videos and several books available online with simple introductions that will help you learn the basics of Flutter. Instead, we’ll be covering the following two objectives:\n…",
            "url": "https://www.smashingmagazine.com/2020/04/responsive-web-desktop-development-flutter/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/51c7e56c-068a-4da1-9382-761ce077c93b/flutter-sharing-image-large.png",
            "publishedAt": "2020-04-22T10:00:00Z",
            "content": "This tutorial is not an introduction to Flutter itself. There are plenty of articles, videos and several books available online with simple introductions that will help you learn the basics of Flutter. Instead, well be covering the following two objectives:\r\n… [+27406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Paul Boag",
            "title": "How To Create A Compelling Landing Page",
            "description": "If you want more leads or increased sales, you need compelling landing pages. According to Hubspot, those companies with over 30 landing pages, will generate seven times more leads than those with fewer than 10.\nA landing page is a standalone webpage created …",
            "url": "https://www.smashingmagazine.com/2020/04/landing-page-design/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cf638027-09fc-43ac-b45f-ca3c61c663c5/3-safari-landing-page-design.png",
            "publishedAt": "2020-04-21T10:00:00Z",
            "content": "If you want more leads or increased sales, you need compelling landing pages. According to Hubspot, those companies with over 30 landing pages, will generate seven times more leads than those with fewer than 10.\r\nA landing page is a standalone webpage created… [+14209 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Drew McLellan",
            "title": "Smashing Podcast Episode 14 With Rachel Andrew: How Can I Run Online Workshops?",
            "description": "In this episode of the Smashing Podcast, we’re talking about running online workshops. How can a traditional event adapt when participants can’t attend in person? Drew McLellan talks to Rachel Andrew to find out.\nShow Notes This episode of the Smashing Podcas…",
            "url": "https://www.smashingmagazine.com/2020/04/smashing-podcast-episode-14/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/aa3a01e6-88ba-4c31-bdf2-594f9c880fc8/smashing-podcast-episode-14.png",
            "publishedAt": "2020-04-21T05:00:00Z",
            "content": "In this episode of the Smashing Podcast, were talking about running online workshops. How can a traditional event adapt when participants cant attend in person? Drew McLellan talks to Rachel Andrew to find out.\r\nShow Notes\r\nThis episode of the Smashing Podcas… [+32377 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Blessing Krofegha",
            "title": "Implementing Skeleton Screens In React",
            "description": "Spinners and loaders have traditionally been the way to tell users that content is going to take a while to load. While this approach is great, it’s quickly becoming obsolete in modern development. Skeleton screens are becoming the perfect replacement for tra…",
            "url": "https://www.smashingmagazine.com/2020/04/skeleton-screens-react/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7dca508c-bb0a-4824-8365-474739506785/skeleton-screens-react.png",
            "publishedAt": "2020-04-20T10:00:00Z",
            "content": "Spinners and loaders have traditionally been the way to tell users that content is going to take a while to load. While this approach is great, its quickly becoming obsolete in modern development. Skeleton screens are becoming the perfect replacement for trad… [+18903 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Iris Lješnjanin",
            "title": "Staying Connected And Learning From Each Other",
            "description": "Digital space obviously has its challenges, but it also provides incredible opportunities for us to connect and learn in ways we just wouldn’t be able to do otherwise. The situation with COVID-19 has challenged us to consider ways in which we could offer a si…",
            "url": "https://www.smashingmagazine.com/2020/04/monthly-roundup-04-2020/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/b3c12ad5-b0ad-4c41-aa9d-8fae3c11a76d/topple-streaming-live-online-smashing-workshops.png",
            "publishedAt": "2020-04-17T11:00:00Z",
            "content": "Digital space obviously has its challenges, but it also provides incredible opportunities for us to connect and learn in ways we just wouldnt be able to do otherwise. The situation with COVID-19 has challenged us to consider ways in which we could offer a sim… [+14939 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Philip Kiely",
            "title": "Django Highlights: Models, Admin, And Harnessing The Relational Database (Part 3)",
            "description": "Before we get started, I want to note that Django’s built-in administrative capabilities, even after customization, are not meant for end-users. The admin panel exists as a developer, operator, and administrator tool for creating and maintaining software. It …",
            "url": "https://www.smashingmagazine.com/2020/04/django-highlights-models-admin-relational-database/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6fad6c37-5933-4a9e-9577-302907934871/django-highlights-models-admin-relational-database.png",
            "publishedAt": "2020-04-16T10:30:00Z",
            "content": "Before we get started, I want to note that Djangos built-in administrative capabilities, even after customization, are not meant for end-users. The admin panel exists as a developer, operator, and administrator tool for creating and maintaining software. It i… [+20255 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Adeneye David Abiodun",
            "title": "Best Practices With React Hooks",
            "description": "React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class component. In other words, Hooks are functions that let you “hook into” React state and lifecycle features from function components. (They do …",
            "url": "https://www.smashingmagazine.com/2020/04/react-hooks-best-practices/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/be317534-1fa3-4811-b6ad-386148770f0a/react-hooks-best-practices.png",
            "publishedAt": "2020-04-15T11:00:00Z",
            "content": "React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class component. In other words, Hooks are functions that let you hook into React state and lifecycle features from function components. (They do no… [+15392 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Anna Prenzel",
            "title": "How To Create A Particle Trail Animation In JavaScript",
            "description": "Have you ever thought about distracting visitors of your website with a fancy, glittering particle animation for a few moments, while some data is loaded in the background? Fortunately, it’s not necessary to go very deep into graphics programming with 3D libr…",
            "url": "https://www.smashingmagazine.com/2020/04/particle-trail-animation-javascript/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/57ed0818-d345-4d90-b7e9-e7b5e8dd3cc7/partical-trail-animation-javascript.png",
            "publishedAt": "2020-04-14T11:00:00Z",
            "content": "Have you ever thought about distracting visitors of your website with a fancy, glittering particle animation for a few moments, while some data is loaded in the background? Fortunately, its not necessary to go very deep into graphics programming with 3D libra… [+8622 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Andrew Clarke",
            "title": "Inspired Design Decisions With Herb Lubalin: Typography Can Be As Exciting As Illustration And Photography",
            "description": "While good use of type helps people to read, great typography can do so much more. Typography can eloquently articulate an idea and colourfully communicate a message in ways which are as powerful as any illustration or photograph. I’m someone who loves cinema…",
            "url": "https://www.smashingmagazine.com/2020/04/inspired-design-decisions-herb-lubalin/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/164229e6-3487-49d8-809d-ede009318a92/issue-8-11-inspired-design-decisions-herb-lubalin.png",
            "publishedAt": "2020-04-13T10:00:00Z",
            "content": "While good use of type helps people to read, great typography can do so much more. Typography can eloquently articulate an idea and colourfully communicate a message in ways which are as powerful as any illustration or photograph.\r\nIm someone who loves cinema… [+42283 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Shedrack Akintayo",
            "title": "Getting Started With The React Hooks API",
            "description": "When React 16.8 was released officially in early February 2019, it shipped with an additional API that lets you use state and other features in React without writing a class. This additional API is called Hooks and they’re becoming popular in the React ecosys…",
            "url": "https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7fdca25d-1080-4d2c-b0f6-50fc5a827ed5/react-hooks-api-guide.png",
            "publishedAt": "2020-04-10T09:30:00Z",
            "content": "When React 16.8 was released officially in early February 2019, it shipped with an additional API that lets you use state and other features in React without writing a class. This additional API is called Hooks and theyre becoming popular in the React ecosyst… [+17328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Frederick O’Brien",
            "title": "Baking Structured Data Into The Design Process",
            "description": "Search engine optimization (SEO) is essential for almost every kind of website, but its finer points remain something of a specialty. Even today SEO is often treated as something that can be tacked on after the fact. It can up to a point, but it really should…",
            "url": "https://www.smashingmagazine.com/2020/04/structured-data-design-process/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/621d96e3-dc74-47f4-873f-75bf349b11d8/structured-data-design-process.png",
            "publishedAt": "2020-04-09T11:30:00Z",
            "content": "Search engine optimization (SEO) is essential for almost every kind of website, but its finer points remain something of a specialty. Even today SEO is often treated as something that can be tacked on after the fact. It can up to a point, but it really should… [+16961 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Chidi Orji",
            "title": "How To Set Up An Express API Backend Project With PostgreSQL",
            "description": "We will take a Test-Driven Development (TDD) approach and the set up Continuous Integration (CI) job to automatically run our tests on Travis CI and AppVeyor, complete with code quality and coverage reporting. We will learn about controllers, models (with Pos…",
            "url": "https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/",
            "urlToImage": "https:null",
            "publishedAt": "2020-04-08T11:00:00Z",
            "content": "We will take a Test-Driven Development (TDD) approach and the set up Continuous Integration (CI) job to automatically run our tests on Travis CI and AppVeyor, complete with code quality and coverage reporting. We will learn about controllers, models (with Pos… [+58438 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Drew McLellan",
            "title": "Smashing Podcast Episode 13 With Laura Kalbag: What Is Online Privacy?",
            "description": "In this episode of the Smashing Podcast, we’re talking about online privacy. What should web developers be doing to make sure the privacy of our users is maintained? I spoke to Laura Kalbag to find out. Show Notes Laura Kalbag’s personal website Small Technol…",
            "url": "https://www.smashingmagazine.com/2020/04/smashing-podcast-episode-13/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/19ef897e-f994-4686-8f9c-4e33c081ffb4/smashing-podcast-episode-13.png",
            "publishedAt": "2020-04-07T07:00:00Z",
            "content": "In this episode of the Smashing Podcast, were talking about online privacy. What should web developers be doing to make sure the privacy of our users is maintained? I spoke to Laura Kalbag to find out.\r\nShow Notes\r\nTranscript\r\nDrew McLellan: Shes a designer f… [+38629 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Zara Cooper",
            "title": "Create Your Free Developer Blog Using Hugo And Firebase",
            "description": "In this tutorial, I’ll demonstrate how to create your own blog using Hugo and deploy it on Firebase for free. Hugo is an open-source static site generator and Firebase is a Google platform that offers resources and services used to augment web and mobile deve…",
            "url": "https://www.smashingmagazine.com/2020/04/free-developer-blog-hugo-firebase/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1aff7e0c-b649-4501-81de-087fb127f6fa/free-developer-blog-hugo-firebase.png",
            "publishedAt": "2020-04-06T11:30:00Z",
            "content": "In this tutorial, Ill demonstrate how to create your own blog using Hugo and deploy it on Firebase for free. Hugo is an open-source static site generator and Firebase is a Google platform that offers resources and services used to augment web and mobile devel… [+13545 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Ari Stiles",
            "title": "Releasing The Ethical Design Handbook When We Needed It Most",
            "description": "Ethics is a timely subject for all of us who work on digital products, so it was no surprise The Ethical Design Handbook was well received. There is a real need for practical solutions beyond just complying with the law. The book offers ways to evaluate curre…",
            "url": "https://www.smashingmagazine.com/2020/04/ethical-design-handbook-followup/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f0120f48-0d22-4543-8d59-2e06d0d8fbcd/dsc00120.jpg",
            "publishedAt": "2020-04-03T10:00:00Z",
            "content": "Ethics is a timely subject for all of us who work on digital products, so it was no surprise The Ethical Design Handbook was well received. There is a real need for practical solutions beyond just complying with the law. The book offers ways to evaluate curre… [+6360 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Philip Kiely",
            "title": "Django Highlights: Templating Saves Lines (Part 2)",
            "description": "Some no-frills approaches to building websites require a developer to write every line of HTML by hand. On the other extreme, commercial no-code site builders create all of the HTML for the user automatically, often at the expense of readability in the result…",
            "url": "https://www.smashingmagazine.com/2020/04/django-highlights-templating-saves-lines/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6ae83c0d-9f68-4db1-b628-7c79e27c3af6/django-highlights-templating-saves-lines.png",
            "publishedAt": "2020-04-02T12:00:00Z",
            "content": "Some no-frills approaches to building websites require a developer to write every line of HTML by hand. On the other extreme, commercial no-code site builders create all of the HTML for the user automatically, often at the expense of readability in the result… [+14251 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Blessing Krofegha",
            "title": "Building A Web App With Headless CMS And React",
            "description": "In this tutorial, you’ll learn what Headless CMS is, and the pros and cons of Headless CMS. In the end, youll have built a shopping cart using GraphCMS (a (backend-only content management system). After that, you can go ahead and build any web app of your cho…",
            "url": "https://www.smashingmagazine.com/2020/04/web-app-headless-cms-react/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d07c5fad-9381-4c77-bc57-9807c95e99e1/web-app-headless-cms-react.png",
            "publishedAt": "2020-04-01T11:30:00Z",
            "content": "In this tutorial, youll learn what Headless CMS is, and the pros and cons of Headless CMS. In the end, youll have built a shopping cart using GraphCMS (a (backend-only content management system). After that, you can go ahead and build any web app of your choi… [+28543 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingmagazine.com"
            },
            "author": "Suzanne Scacca",
            "title": "What Should You Do When A Web Design Trend Becomes Too Popular?",
            "description": "I read an interesting article on Forbes recently about language saturation. Here’s the problem: Consumers don’t always understand the technicalities of what businesses do or the solutions they’ve created for them. So, copywriters use jargon that translates so…",
            "url": "https://www.smashingmagazine.com/2020/03/web-design-trend-popular/",
            "urlToImage": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6fb418bf-65dd-4e97-850e-ce063a5a24f7/web-design-trend-popular.png",
            "publishedAt": "2020-03-31T11:30:00Z",
            "content": "I read an interesting article on Forbes recently about language saturation. Heres the problem:\r\nConsumers dont always understand the technicalities of what businesses do or the solutions theyve created for them. So, copywriters use jargon that translates some… [+12589 chars]"
        }
    ]
}