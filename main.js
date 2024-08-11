function generateRandomIP() {
   
    const ip = [
        Math.floor(256 * Math.random()).toString(),
        Math.floor(256 * Math.random()).toString(),
        Math.floor(256 * Math.random()).toString(),
        Math.floor(256 * Math.random()).toString()
    ];

    return ip.join('.');
}

// 使用生成的IP地址
const fakeIP = generateRandomIP();
console.log(fakeIP);

// 将此IP地址用于模拟请求头或其他相关用途
// 例如，在HTTP请求中更改User-Agent和IP地址：
fetch('https://api.example.com/data', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    },
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    cache: 'no-cache',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
        'X-Forwarded-For': fakeIP,
        'Content-Type': 'application/json'
    }
});

function generateVisitRecord() {
    // 生成随机的设备信息（简化示例）
    const devices = ['Windows', 'MacOS', 'Linux', 'iOS', 'Android'];
    const deviceInfo = devices[Math.floor(Math.random() * devices.length)];

    // 获取当前时间作为访问时间
    const visitTime = new Date().toLocaleString();

    // 生成模拟的MAC地址
    function randomMAC() {
        return Math.random().toString(16).slice(2, 8).split('').map(() => Math.floor(Math.random() * 16).toString(16)).join(':');
    }
    const macAddress = randomMAC();

    // 生成模拟的IP地址（这里简化生成IPv4地址）
    function randomIP() {
        return Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join('.');
    }
    const ipAddress = randomIP();

    // 随机请求类型
    const requestTypes = ['GET', 'POST', 'PUT', 'DELETE'];
    const requestType = requestTypes[Math.floor(Math.random() * requestTypes.length)];

    // 生成模拟的宽带账号（这里简化为随机字符串）
    function randomBroadbandAccount() {
        return Math.random().toString(36).substring(2, 10);
    }
    const broadbandAccount = randomBroadbandAccount();

    // 返回生成的访问记录对象
    return {
        deviceInfo,
        visitTime,
        macAddress,
        ipAddress,
        requestType,
        broadbandAccount
    };
}

// 使用函数并打印结果
console.log(generateVisitRecord());

function getRandomUserAgent() {
    const browsers = ['Firefox', 'Chrome', 'Safari', 'Edge', 'Opera'];
    const versions = ['78.0.4', '89.0.4', '14.1.0', '10.0.0', '30.0.0'];

    return `${browsers[Math.floor(Math.random() * browsers.length)]} ${versions[Math.floor(Math.random() * versions.length)]}`;
}

fetch('https://example.com', {
    headers: {
        'User-Agent': getRandomUserAgent()
    }
});

function getRandomIP() {
    return Math.floor(Math.random() * 256) + '.' +
           Math.floor(Math.random() * 256) + '.' +
           Math.floor(Math.random() * 256) + '.' +
           Math.floor(Math.random() * 256);
}

fetch('https://example.com', {
    headers: {
        'X-Forwarded-For': getRandomIP()
    }
});

function randomDelay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
}

async function fetchWithRandomDelay(url) {
    await randomDelay();
    return fetch(url);
}

fetchWithRandomDelay('https://example.com');

// 阻止设置cookies
document.cookie = "name=value; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
document.cookie = "name=value; max-age=-1;";

// 禁止第三方脚本加载
function blockThirdPartyScript(url) {
    if (url.startsWith("//") || url.startsWith("http")) {
        return;
    }
    // 使用X-Frame-Options和X-XSS-Protection来阻止页面被嵌入到其他框架中
    document.getElementsByTagName('head')[0].innerHTML += '<meta http-equiv="X-Frame-Options" content="deny"/>';
    document.getElementsByTagName('head')[0].innerHTML += '<meta http-equiv="X-XSS-Protection" content="1; mode=block"/>';

    // 阻止第三方脚本执行
    document.createElement('noscript').innerHTML = `<style>body { display: none; } </style><script>if (!window.opener) { window.close(); }</script>`;
    document.body.appendChild(document.createElement('noscript'));
}

// 屏蔽广告
function blockAds() {
    const adBlocks = ['*.google.com', '*.doubleclick.net'];
    for (let i = 0; i < adBlocks.length; i++) {
        const pattern = new RegExp(`^${adBlocks[i]}$`);
        Array.from(document.querySelectorAll('*')).forEach(node => {
            if (node.src && pattern.test(node.src)) {
                node.remove();
            }
        });
    }
}

// 调用函数
blockThirdPartyScript('//example.com/script.js');
blockAds();

// 如果需要在用户每次打开浏览器时都执行这些操作，可以添加到window.onload事件中：
window.onload = function() {
    blockThirdPartyScript('//example.com/script.js');
    blockAds();
};
