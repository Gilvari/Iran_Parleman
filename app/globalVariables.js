var apiBaseUrl = "https://iranparleman.raspeina.com/api/v1";
var apis = {
    'agencies': apiBaseUrl + "/ui/agency/list",
    'newsInformation': apiBaseUrl + "/showNumbers",
    'search': apiBaseUrl + '/searchResult',

    'recentNews': apiBaseUrl + "/showLatestNews",    
    'getArticleData': apiBaseUrl + "/showLatestNewsSingle",
    // 'getNerData': "/api/article/ner.json",
    'getNerData':  apiBaseUrl + "/ui/news/ner",
    // 'getArticleData':"/api/article/data.json",
    'getTopicsData': apiBaseUrl + "/ui/category/count",
    'getProfleTopicsData': 'http://localhost:3000/api/profile/searchProfile.json',
    //apiBaseUrl + "/ui/news/topics",
    "getProfileList":apiBaseUrl+ '/showProfile',
    'login': apiBaseUrl + '/login',
    'keyPherase':apiBaseUrl +'/ui/news/keyphrases',
    'getCloudWord':apiBaseUrl + '/api/dashboard/cloudWord.json',
    'getListNews': 'http://localhost:3000/api/dashboard/listNews.json',
    'getListNewsBySearch': '/api/dashboard/listNews.json',
    'getSocialInfo': '/api/social/getSocialInfo.json',
    'getProfileData': apiBaseUrl +'/showProfile',
    'getQuoteData': 'http://localhost:3000/api/profile/qout.json',
    'searchProfile': '/api/profile/searchProfile.json',
    'searchForMap': apiBaseUrl +'/ui/map/provinces',
    'getBulletinSet': '/api/bulletin/getBulletinSet.json',
    'update': '/api/bulletin/update',
    'deleteBulletin': '/api/bulletin/deleteBulletin',
    'searchBulletin': '/api/bulletin/searchBulletin.json',
    'getAgencyData': '/api/bulletin/agency.json',
    'getCategoryList': '/api/bulletin/category.json',
    'sendTicket': '/api/support/sendTicket',
    'getSimilar': apiBaseUrl+'/ui/news/similar',
};
var agencies = [];

