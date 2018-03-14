
// 1. 将一个 URL 参数解析为 object 对象

var str = 'http://localhost:8080/route/search?q=123#xiaobo'
function parseUrl(url){
    var href = url.split('#')[0].split('?')[0]
    var search = url.split('#')[0].split('?')[1]
    var hash = url.split('#')[1]
    var protocol = href.split('/')[0].split(':')[0]
    var host = href.split('/')[2]
    var origin = protocol + '://' + host
    var hostname = host.split(':')[0]
    var port = host.split(':')[1]

    return {
        location: {
            href: href,
            hash: hash,
            search: search,
            protocol: protocol,
            host: host,
            origin: origin,
            port: port,
            hostname: hostname
        }
    }
}

// 我暂时能解析出来的就这些了，也许这一题考的是对正则的理解，很不幸，我对这块涉掠较少，平常也一般是在工具网站上生成正则

console.log(parseUrl(str))