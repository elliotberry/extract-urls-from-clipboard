import downloadImage from './downloadFile.js';
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif']; // add other image extensions as necessary

function isImageUrl(url) {
  const extension = url.split('.').pop().toLowerCase();
  return imageExtensions.includes(extension);
}

function findImageUrls(urls) {
  const imageUrls = [];
  const urlRegex = /((http|https):\/\/[^\s]+)\.(jpg|jpeg|png|gif)/gi; // modify the regular expression to match other image extensions
  for (const url of urls) {
    if (isImageUrl(url)) {
      imageUrls.push(url);
    } else {
      const matches = url.match(urlRegex);
      if (matches) {
        imageUrls.push(...matches);
      }
    }
  }
  return imageUrls;
}

let str = `https://www.ebay.com/itm/274454520610?mkcid=1&customid&toolid=10050&nma=true&si=byMmyvhd6fv%252Feq8d8sAaK3rD%252Bnc%253D&orig_cvip=true&nordt=true&rt=nc
https://www.ebay.com/itm/274454520610?mkevt=1&mkcid=1&customid&toolid=10050
https://ir.ebaystatic.com/rs/v/ku3eop0pz2yxhkxekjcpvk1baeg.css
https://ir.ebaystatic.com/rs/v/z0utcultka4xfnsilhtym0w0yy2.css?proc=DU:N
https://ir.ebaystatic.com/rs/v/s4uo0flfvi4dfayd4ryd2g3ccaa.css
https://ir.ebaystatic.com/rs/c/vimoduleapi-async-Oyas8c3L.css
https://ir.ebaystatic.com/rs/c/vimoduleapi-LfDX_TTl.css
https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png
https://ir.ebaystatic.com/rs/c/merch-gEIOemE2.css
https://i.ebayimg.com/images/g/jGAAAOSwhK1fMIU9/s-l500.jpg
https://p.ebaystatic.com/aw/pics/s.gif
https://i.ebayimg.com/images/g/BnoAAOSwSI5bY8fd/s-l64.jpg
https://ir.ebaystatic.com/rs/v/ug5swannj2zhramycvq3mi4mwih.js
https://ir.ebaystatic.com/rs/v/z5werva1gizb1lwrtiyqquminyv.js
https://ir.ebaystatic.com/rs/v/d1g1zt4wzqyq3gajwgnvevkbe2n.js
https://ir.ebaystatic.com/rs/v/mik4lopdxyzabkjj0mg3b2rptqb.js
https://ir.ebaystatic.com/rs/c/merch-p4bUMfmt.js
https://ir.ebaystatic.com/rs/c/vim-inception-c116C0E2.js
https://ir.ebaystatic.com/rs/c/lasso-tags-wrapper-IM0BaCmp.js
https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.woff2
https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.woff2
https://i.ebayimg.com/images/g/jGAAAOSwhK1fMIU9/s-l64.jpg
https://i.ebayimg.com/images/g/m9wAAOSwtq1fMIU~/s-l64.jpg
https://i.ebayimg.com/images/g/vrcAAOSw~1NfMIVB/s-l64.jpg
https://i.ebayimg.com/images/g/WmUAAOSwolpfMIVD/s-l64.jpg
https://i.ebayimg.com/images/g/~TkAAOSwXWJfMIVF/s-l64.jpg
https://i.ebayimg.com/images/g/tqsAAOSwN45fMIVI/s-l64.jpg
https://i.ebayimg.com/images/g/9AUAAOSwOr9fMIVK/s-l64.jpg
https://i.ebayimg.com/images/g/jzQAAOSwWcJfMIVM/s-l64.jpg
https://i.ebayimg.com/images/g/OOAAAOSwWHtfMIVN/s-l64.jpg
https://i.ebayimg.com/images/g/k7kAAOSwEm5fMIVQ/s-l64.jpg
https://i.ebayimg.com/images/g/dAYAAOSwJgRfMIVR/s-l64.jpg
https://i.ebayimg.com/images/g/oOIAAOSwG7JfMIVT/s-l64.jpg
https://vi.vipr.ebaydesc.com/ws/eBayISAPI.dll?ViewItemDescV4&item=274454520610&t=0&category=261603&seller=jnkmoney&excSoj=1&excTrk=1&lsite=0&ittenable=true&domain=ebay.com&descgauge=1&cspheader=1&oneClk=2&secureDesc=1
https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_20.png
https://p.ebaystatic.com/aw/sell/sell_icon.png
https://ir.ebaystatic.com/cr/v/c01/swc-updated-sprite-0223.png
https://ir.ebaystatic.com/cr/v/c1/feedback_icons_spr.png
https://ir.ebaystatic.com/cr/v/c01/payment-icons-sprite.png
https://ir.ebaystatic.com/cr/v/c1/paypal-credit-logo.png
https://ir.ebaystatic.com/cr/v/c1/cobrandedmastercard_39X24.png
https://ir.ebaystatic.com/rs/v/1yzqmzxk3a3utciscis2t10n1uu.js
https://vi.vipr.ebaydesc.com/
https://secureir.ebaystatic.com/cr/v/c1/gh_show_ads.js
https://www.ebay.com/npk/napkinapi/v1/ticketing/redeem?ticket=napkin-58ffce53-68dc-4716-88b4-2996d8b3f7d5
https://www.ebay.com/npk/napkinapi/v1/ticketing/redeem?ticket=napkin-c2c6356a-01db-4c62-b863-3a0cb5640bc6
https://srv.main.ebayrtm.com/rtm?RtmCmd&a=json&i=0htusF5GGpxaUi6Ub&g=d23a03441860a0da359345f9fffe87c6&uf=1&c=1H4sIAAAAAAAAAGVR22rjMBB991cMLORhSRNdxrIVEEu3LduybekNQiEvrq3disiWkeWk%2BftKTguFPmnmzJmZc0Y%2FHscObioPlAHFFfIVRbh5fAJGGM96TkqFWY%2FIFMl6KlHRrCeKCSoITwBVv33VNfO7y6vb24tnWJ9e%2F714mD8dej0%2FtZVv4cy6ehupRanOnLW6DubF6mEzEkLoua6dr4LZafhenDo%2F4i%2BzBpgdA3ioGuM%2BCHEDopJpUf6przaNouxYp%2BSTx2mRXLBojaQnZigXMrYycawIoWQRJ02mGUd1klCZR2LJEUWZ2oj647XuwOvgHbSmgVp3YfQHaF2jfQc704Xqv4Z%2F1vRQT4LvXk3X6QOsK7vVfiJa6PcnKDEtouo1hH7YrJbL%2FX6%2F0C%2FVYVG7dmlCu2QFYo45I4KSX%2B1W78JG0Vm7jR5TUI9DcFHELDhnJ4iQPKpHzpIlWnLFCBaiyOMBykK9va3H4fz%2BZ8rEZDqeLX0xLxXlRRHtT3CMp0dK9VVB9g6r2GRzOAIAAA%3D%3D&ord=1678657394426&p=910:280:283:20047:876:912:433:1650:1651&e=USC:1&z=0&bw=2354&bh=752&enc=UTF-8&v=5&rnc=1&cg=1678657394932&ss=1&_vrdm=1678657394932&cb=parent.window.raptor.rtm.RtmManager.storeResponse
https://rover.ebay.com/roverclk/0/0/9?trknvp=sid%3Dp2047675.l49093%26ex1%3D%255B%257B%2522eventFamily%2522%253A%2522ADV%2522%252C%2522eventAction%2522%253A%2522VIEW%2522%252C%2522flushImmediately%2522%253Afalse%252C%2522eventProperty%2522%253A%257B%2522parentrq%2522%253A%2522cb51b901fd6b0769%2522%252C%2522pltid%2522%253A%2522101197%2522%252C%2522noridata%2522%253A%2522async_response%253ABEST_EFFORT%257Coperation_result%253Atimeout%257Coperation_time%253A186%2522%252C%2522serverdata%2522%253A%2522vimc%253A1%255E68%255E101197%252C101198%255E68%255ENPKN%255ENPKN%2522%252C%2522clientdata%2522%253A%2522clientStatus%253A200%257CclientTime%253A145%257Cclient%253Anapkin%257CretryCount%253A0%2522%257D%257D%252C%257B%2522eventFamily%2522%253A%2522ADV%2522%252C%2522eventAction%2522%253A%2522VIEW%2522%252C%2522flushImmediately%2522%253Afalse%252C%2522eventProperty%2522%253A%257B%2522parentrq%2522%253A%2522cb51b901fd6b0769%2522%252C%2522pltid%2522%253A%2522101198%2522%252C%2522noridata%2522%253A%2522async_response%253ABEST_EFFORT%257Coperation_result%253Atimeout%257Coperation_time%253A183%2522%252C%2522serverdata%2522%253A%2522vimc%253A1%255E68%255E101197%252C101198%255E68%255ENPKN%255ENPKN%2522%257D%257D%255D&ts=1678657395072
https://rover.ebay.com/roverclk/0/0/9?trknvp=sid%3Dp2047675.l49093%26ex1%3D%255B%257B%2522eventFamily%2522%253A%2522ADV%2522%252C%2522eventAction%2522%253A%2522VIEW%2522%252C%2522flushImmediately%2522%253Afalse%252C%2522eventProperty%2522%253A%257B%2522parentrq%2522%253A%2522cb51b901fd6b0769%2522%252C%2522pltid%2522%253A%2522101197%2522%252C%2522noridata%2522%253A%2522async_response%253ABEST_EFFORT%257Coperation_result%253Atimeout%257Coperation_time%253A186%2522%252C%2522serverdata%2522%253A%2522vimc%253A1%255E68%255E101197%252C101198%255E68%255ENPKN%255ENPKN%2522%252C%2522clientdata%2522%253A%2522clientStatus%253A200%257CclientTime%253A145%257Cclient%253Anapkin%257CretryCount%253A0%2522%257D%257D%252C%257B%2522eventFamily%2522%253A%2522ADV%2522%252C%2522eventAction%2522%253A%2522VIEW%2522%252C%2522flushImmediately%2522%253Afalse%252C%2522eventProperty%2522%253A%257B%2522parentrq%2522%253A%2522cb51b901fd6b0769%2522%252C%2522pltid%2522%253A%2522101198%2522%252C%2522noridata%2522%253A%2522async_response%253ABEST_EFFORT%257Coperation_result%253Atimeout%257Coperation_time%253A183%2522%252C%2522serverdata%2522%253A%2522vimc%253A1%255E68%255E101197%252C101198%255E68%255ENPKN%255ENPKN%2522%252C%2522clientdata%2522%253A%2522clientStatus%253A200%257CclientTime%253A149%257Cclient%253Anapkin%257CretryCount%253A0%2522%257D%257D%255D&ts=1678657395073
https://i.ebayimg.com/images/g/jGAAAOSwhK1fMIU9/s-l1600.jpg
https://i.ebayimg.com/images/g/m9wAAOSwtq1fMIU~/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/KeoAAOSwzQhj-UyP/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/~M4AAOSw7ntj8D2R/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/Jg0AAOSwKaNj-rtu/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/p0sAAOSw5D1j20I5/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/6L0AAOSwBw5j~JkG/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/ZgEAAOxyTMdTOuMb/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/HncAAOSwETxjyu61/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/hYwAAOSwdF5iaAje/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/oQkAAOSwnp5hnYd4/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/MsgAAOSwU9Vjgppq/s-l500.jpg
https://rover.ebay.com/roverclk/0/0/9?trknvp=sid%3Dp2047675.l50811%26ex1%3D2369x752&ts=1678657395192
https://www.ebay.com/gh/globalheaderonload?modules=NOTIFICATION_DWEB_OVERLAY_CONTENT&skipimp=true&mkcid=1&toolid=10050&nma=true&si=byMmyvhd6fv%25252Feq8d8sAaK3rD%25252Bnc%25253D&orig_cvip=true&nordt=true&rt=nc&v=2
https://ir.ebaystatic.com/rs/c/desktop_ac_0303.js
https://rover.ebay.com/roverimp/0/0/9?imp=2046301&trknvp=cp%3D2047675%26ghi%3D98&1678657395286
https://ir.ebaystatic.com/rs/c/scandal/ScandalJS-2.1.48.min.js
https://ir.ebaystatic.com/rs/v/s0hteylevy4bpkd12dvkd4yi5ms.js
https://www.ebay.com/favicon.ico
https://ir.ebaystatic.com/rs/v/rqhfqcks2i0h5kr01f2accefyip.js
https://ir.ebaystatic.com/cr/v/c1/globalheader_widget_platform__v2-b70676194b.js
https://ir.ebaystatic.com/rs/c/9527tracking/configuration.js?ts=5595524
https://www.ebay.com/gh/useracquisition?mkcid=1&toolid=10050&nma=true&si=byMmyvhd6fv%25252Feq8d8sAaK3rD%25252Bnc%25253D&orig_cvip=true&nordt=true&rt=nc&correlation=operationId%3D2047675&v=2
https://securepubads.g.doubleclick.net/pagead/ppub_config
https://www.ebay.com/blueberry/v1/ads/identity/pixelUrls
https://www.googletagservices.com/tag/js/gpt.js
https://www.ebay.com/nap/napkinapi/v1/ticketing/redeem?ticket=01GVBWE5SNQZNGD06VERZ7AP7C
https://www.ebay.com/nap/napkinapi/v1/ticketing/redeem?ticket=01GVBWE5SN3YB6PMTNGV5RE1B4
https://www.ebay.com/nap/napkinapi/v1/ticketing/redeem?ticket=01GVBWE5SN4N12D595QJA6GVW6
https://www.ebay.com/nap/napkinapi/v1/ticketing/redeem?ticket=01GVBWE5SNQSYKKK6CWQYZQXMM
https://www.ebay.com/nap/napkinapi/v1/ticketing/redeem?ticket=01GVBWE5SNVPS5S4NBJZXKKJRZ
https://www.ebay.com/nap/napkinapi/v1/ticketing/redeem?ticket=01GVBWE5SNVRCSPVTJKD7B68T9
https://devicebind.ebay.com/signin/sub/tt.html?st=1678657395447&f=20000&e=0&pageid=2047675&sig=xaSWj0519D7qoJTA2JFKFMNW%2Bj4s%2FiI%2FlbzjK29zi0NpsYm1NfnpDujygChktjfX70yBuZ52FfEweAS0JOiFVw%3D%3D&sm=4
https://www.ebay.com/ifh/inflowcomponent?callback=Inflow.cb&fromGH=true&input=%7B%22pageId%22%3A2047675%2C%22gbhEnabled%22%3Afalse%7D
https://pages.ebay.com/identity/device/t_n6.html?org_id=usllpic0&session_id=d7c71b0f1860ac6f35fdbb74fffee72f
https://www.ebay.com/ifh/lite-ifh8ea64728114eadfe6d4f.js
https://www.ebay.com/ifh/inflowdata
https://www.ebay.com
https://www.ebay.com/ifh/
https://ir.ebaystatic.com/rs/c/sub-l-wlwF5o.js
https://devicebind.ebay.com/
https://ir.ebaystatic.com/rs/v/dxtuvtkk2q3hpkc1xveeo13iaek.js
https://devicebind.ebay.com/signin/sub/log
https://devicebind.ebay.com
https://www.ebay.com/gh/dfpsvc?mkcid=1&toolid=10050&nma=true&si=byMmyvhd6fv%25252Feq8d8sAaK3rD%25252Bnc%25253D&orig_cvip=true&nordt=true&rt=nc&v=2
https://ir.ebaystatic.com/cr/v/c1/cobrowse_4.17.2/js/GlanceCobrowseLoader_4.17.0M.js?group=20315&site=production
https://backstory.ebay.com/customer/v1/bs_img_service?pld=%5B%7B%22guid%22%3Anull%2C%22siteId%22%3A0%2C%22eventFamily%22%3A%22AUTO_TRACKING%22%2C%22agentVersion%22%3A%222.1.2%22%2C%22trackable%22%3A%7B%22trackableId%22%3A%22bdc81393-e76f-4697-b1b8-bab3a5385289%22%2C%22parentTrackableId%22%3A%229443bc06-1457-4e6f-b5f5-30989ee995d6%22%2C%22instanceId%22%3A%22https%3A%2F%2Fwww.ebay.com%2Fitm%2F274454520610%3Fmkcid%3D1%26customid%26toolid%3D10050%26nma%3Dtrue%26si%3DbyMmyvhd6fv%25252Feq8d8sAaK3rD%25252Bnc%25253D%26orig_cvip%3Dtrue%26nordt%3Dtrue%26rt%3Dnc%22%2C%22screenId%22%3A%22dadaf882-f6aa-4840-8e9a-c3098af4731f%22%2C%22description%22%3A%22Green%20retro%20mid%20century%20modern%20vintage%20flip%20clock%20Phinney%20Walker%20model%20pw-494%20%7C%20eBay%22%2C%22entityId%22%3A%222047675%22%2C%22entityType%22%3A%22Page%22%7D%2C%22activity%22%3A%7B%22timestamp%22%3A1678657396361%2C%22category%22%3A%22Impression%22%2C%22type%22%3A%22VIEW.PAGE_RELOAD%22%2C%22referer%22%3A%22https%3A%2F%2Fwww.ebay.com%2Fitm%2F274454520610%3Fmkevt%3D1%26mkcid%3D1%26customid%26toolid%3D10050%22%2C%22details%22%3A%7B%22openTime%22%3A%221678657394004%22%2C%22history%22%3A%224%22%2C%22ePageId%22%3A%222047675%22%2C%22rPageId%22%3A2047675%2C%22ciid%22%3A%22AxxWusDQ
https://srv.main.ebayrtm.com/rtm?RtmIt&p=910:280:283:20047:876:912:433:1650:1651&ite=2&to=3000
https://www.ebay.com/gss/v2
https://secureir.ebaystatic.com/pictures/aw/pics/globalheader/btt.png
https://i.ebayimg.com/images/g/m9wAAOSwtq1fMIU~/s-l1600.jpg
https://i.ebayimg.com/images/g/vrcAAOSw~1NfMIVB/s-l500.jpg
https://i.ebayimg.com/images/g/vrcAAOSw~1NfMIVB/s-l1600.jpg
https://i.ebayimg.com/images/g/WmUAAOSwolpfMIVD/s-l500.jpg
https://i.ebayimg.com/images/g/WmUAAOSwolpfMIVD/s-l1600.jpg
https://i.ebayimg.com/images/g/~TkAAOSwXWJfMIVF/s-l500.jpg
https://i.ebayimg.com/images/g/~TkAAOSwXWJfMIVF/s-l1600.jpg
https://www.ebay.com/itemmodules/274454520610?modules=ADS
https://rover.ebay.com/roverclk/0/0/9?trknvp=sid%3Dp2047675.l8639%26ex1%3D335&ts=1678657423750
https://i.ebayimg.com/thumbs/images/g/cFYAAOSw4Ipj1VE~/s-l500.jpg
https://i.ebayimg.com/thumbs/images/g/r3EAAOSwpdpjweMZ/s-l200.jpg
https://i.ebayimg.com/thumbs/images/g/tf8AAOSwARpjoSGq/s-l200.jpg
https://i.ebayimg.com/thumbs/images/g/RWcAAOSwcC9iacCI/s-l200.jpg
https://i.ebayimg.com/thumbs/images/g/I1IAAOSwSJhiJugz/s-l200.jpg
https://i.ebayimg.com/thumbs/images/g/zeIAAOSwMXVj~moQ/s-l200.jpg
https://rover.ebay.com/roverclk/0/0/9?trknvp=sid%3Dp2047675.l47369%26ex1%3Dviac%253A101121%252C101123%252C101124%252C101120%257Cviar%253APLACEMENT_101121%252CPLACEMENT_101124%257Cviad%253A805&ts=1678657424257
https://www.ebay.com/gh/notification/pagination?modules=NOTIFICATION_DWEB_OVERLAY_CONTENT&behavior=PAGINATION&moduleType=NOTIFICATION_DWEB_OVERLAY_CONTENT&rawResponse=true&limit=20&offset=0&skipimp=true&mkcid=1&toolid=10050&nma=true&si=byMmyvhd6fv%25252Feq8d8sAaK3rD%25252Bnc%25253D&orig_cvip=true&nordt=true&rt=nc&v=2
https://i.ebayimg.com/images/g/tqsAAOSwN45fMIVI/s-l500.jpg
https://i.ebayimg.com/images/g/tqsAAOSwN45fMIVI/s-l1600.jpg
https://i.ebayimg.com/images/g/9AUAAOSwOr9fMIVK/s-l500.jpg
https://i.ebayimg.com/images/g/9AUAAOSwOr9fMIVK/s-l1600.jpg
https://i.ebayimg.com/images/g/jzQAAOSwWcJfMIVM/s-l500.jpg
https://i.ebayimg.com/images/g/jzQAAOSwWcJfMIVM/s-l1600.jpg
https://i.ebayimg.com/images/g/OOAAAOSwWHtfMIVN/s-l500.jpg
https://i.ebayimg.com/images/g/OOAAAOSwWHtfMIVN/s-l1600.jpg
https://i.ebayimg.com/images/g/k7kAAOSwEm5fMIVQ/s-l500.jpg
https://i.ebayimg.com/images/g/k7kAAOSwEm5fMIVQ/s-l1600.jpg
https://backstory.ebay.com/customer/v1/customer_service?ct=1678657436368
https://backstory.ebay.com/customer/v1/customer_service?ct=1678657496538
https://www.ebay.com/itm/285160010798?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20220920135554%26meid%3D3f3f234a33ef462eba7b57d5e17bb729%26pid%3D101197%26rk%3D1%26rkt%3D12%26sd%3D274454520610%26itm%3D285160010798%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DSimplAMLv9PairwiseWebMskuAspectsV202110NoVariantSeedKnnRecallV1&amp
https://www.ebay.com/itm/195607090945?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20220920135554%26meid%3D3f3f234a33ef462eba7b57d5e17bb729%26pid%3D101197%26rk%3D2%26rkt%3D12%26sd%3D274454520610%26itm%3D195607090945%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DSimplAMLv9PairwiseWebMskuAspectsV202110NoVariantSeedKnnRecallV1%26brand%3DWalker&amp
https://www.ebay.com/itm/234912290913?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20220920135554%26meid%3D3f3f234a33ef462eba7b57d5e17bb729%26pid%3D101197%26rk%3D3%26rkt%3D12%26sd%3D274454520610%26itm%3D234912290913%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DSimplAMLv9PairwiseWebMskuAspectsV202110NoVariantSeedKnnRecallV1%26brand%3DCase&amp
https://www.ebay.com/itm/404139066374?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20220920135554%26meid%3D3f3f234a33ef462eba7b57d5e17bb729%26pid%3D101197%26rk%3D4%26rkt%3D12%26sd%3D274454520610%26itm%3D404139066374%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DSimplAMLv9PairwiseWebMskuAspectsV202110NoVariantSeedKnnRecallV1%26brand%3DWestclox&amp
https://www.ebay.com/itm/354614294251?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20220920135554%26meid%3D3f3f234a33ef462eba7b57d5e17bb729%26pid%3D101197%26rk%3D5%26rkt%3D12%26sd%3D274454520610%26itm%3D354614294251%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DSimplAMLv9PairwiseWebMskuAspectsV202110NoVariantSeedKnnRecallV1%26brand%3DWalker&amp
https://www.ebay.com/itm/325533251225?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D20220920135554%26meid%3D3f3f234a33ef462eba7b57d5e17bb729%26pid%3D101197%26rk%3D6%26rkt%3D12%26sd%3D274454520610%26itm%3D325533251225%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DSimplAMLv9PairwiseWebMskuAspectsV202110NoVariantSeedKnnRecallV1%26brand%3DWalker&amp
https://i.ebayimg.com/thumbs/images/g/RHgAAOSwbLRj6Qzk/s-l500.jpg
https://www.ebay.com/itm/404183578564?_trkparms=amclksrc%3DITM%26aid%3D1110018%26algo%3DHOMESPLICE.COMPLISTINGS%26ao%3D1%26asc%3D20220920135752%26meid%3D6260463a0dc94bffb58d0f910052a3c0%26pid%3D101198%26rk%3D1%26rkt%3D12%26sd%3D274454520610%26itm%3D404183578564%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DItemStripV101HighAdFee%26brand%3DWalker&amp
https://www.ebay.com/itm/266094404606?_trkparms=amclksrc%3DITM%26aid%3D1110018%26algo%3DHOMESPLICE.COMPLISTINGS%26ao%3D1%26asc%3D20220920135752%26meid%3D6260463a0dc94bffb58d0f910052a3c0%26pid%3D101198%26rk%3D2%26rkt%3D12%26sd%3D274454520610%26itm%3D266094404606%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DItemStripV101HighAdFee&amp
https://www.ebay.com/itm/304834600079?_trkparms=amclksrc%3DITM%26aid%3D1110018%26algo%3DHOMESPLICE.COMPLISTINGS%26ao%3D1%26asc%3D20220920135752%26meid%3D6260463a0dc94bffb58d0f910052a3c0%26pid%3D101198%26rk%3D3%26rkt%3D12%26sd%3D274454520610%26itm%3D304834600079%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DItemStripV101HighAdFee%26brand%3DWalker&amp
https://www.ebay.com/itm/354492599971?_trkparms=amclksrc%3DITM%26aid%3D1110018%26algo%3DHOMESPLICE.COMPLISTINGS%26ao%3D1%26asc%3D20220920135752%26meid%3D6260463a0dc94bffb58d0f910052a3c0%26pid%3D101198%26rk%3D4%26rkt%3D12%26sd%3D274454520610%26itm%3D354492599971%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DItemStripV101HighAdFee%26brand%3DRCA&amp
https://www.ebay.com/itm/125632064399?_trkparms=amclksrc%3DITM%26aid%3D1110018%26algo%3DHOMESPLICE.COMPLISTINGS%26ao%3D1%26asc%3D20220920135752%26meid%3D6260463a0dc94bffb58d0f910052a3c0%26pid%3D101198%26rk%3D5%26rkt%3D12%26sd%3D274454520610%26itm%3D125632064399%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DItemStripV101HighAdFee%26brand%3DWalker&amp
https://www.ebay.com/itm/175590485404?_trkparms=amclksrc%3DITM%26aid%3D1110018%26algo%3DHOMESPLICE.COMPLISTINGS%26ao%3D1%26asc%3D20220920135752%26meid%3D6260463a0dc94bffb58d0f910052a3c0%26pid%3D101198%26rk%3D6%26rkt%3D12%26sd%3D274454520610%26itm%3D175590485404%26pmt%3D1%26noa%3D0%26pg%3D2047675%26algv%3DItemStripV101HighAdFee%26brand%3DClock&amp
https://edgetrksvc.ebay.com/base/service/v1/viewport_events
https://backstory.ebay.com/customer/v1/customer_service?ct=1678657496546
`;

findImageUrls(str.split("\n")).forEach((url) => {
    downloadImage(url);
});