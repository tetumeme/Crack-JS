/*
网易蜗牛读书 解锁特权
原作者: yxiaocai & JO2EY

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/motibang\.com\:8081\/api\/1\/dailyrequest? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

[mitm]
hostname = motibang.com

**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.vip_expired = 2099-12-16T06:34:38.000Z;
obj.vip_days_left = 99999
body = JSON.stringify(obj);
$done({body});


**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.vip_expired = 2099-12-16T06:34:38.000Z;
obj.vip_days_left = 99999
body = JSON.stringify(obj);
$done({body});