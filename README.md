# nodejs-network-probe
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Basic middleware network probe server based on KoaJS that pumps out JSON data to requests. Listens on port `3000` by default.

Supported requests :
* Ping (ICMP)

### Ping (ICMP)

Listens to ping requests on `/ping/` and accepts either IP addresses or hostnames.

i.e `/ping/8.8.8.8` or `/ping/google.com`

Responds with :

```
{
   "host":"8.8.8.8",
   "alive":true,
   "output":"PING 8.8.8.8 (8.8.8.8): 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=46 time=39.385 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=46 time=40.428 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=46 time=40.818 ms\n\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 packets received, 0.0% packet loss\nround-trip min/avg/max/stddev = 39.385/40.210/40.818/0.605 ms\n",
   "time":39.385,
   "min":"39.385",
   "max":"40.818",
   "avg":"40.210",
   "stddev":"0.605",
   "numeric_host":"8.8.8.8"
}
```

License
----

MIT
