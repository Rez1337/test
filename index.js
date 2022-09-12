console.log(fetch('https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false', {
    method: 'POST',
    headers: {
        'authority': 'www.youtube.com',
        'accept': '*/*',
        'accept-language': 'ru,en;q=0.9',
        'authorization': 'SAPISIDHASH 1662972436_7b4cc038d22624ad8dd94f705d5e16df2df94161',
        'content-type': 'application/json',
        'cookie': 'VISITOR_INFO1_LIVE=dxYi_QFMo8o; HSID=A-_eOaCKwOuT1S2xN; SSID=AYIXZ96hE86Q0Bl5a; APISID=AxyANpXYR8ZmdxJR/AKE5Lu5Z4mjOgzM8O; SAPISID=aXR7zNn4h2M1V9H7/Ax5hmc9W5tt1l9tBI; __Secure-1PAPISID=aXR7zNn4h2M1V9H7/Ax5hmc9W5tt1l9tBI; __Secure-3PAPISID=aXR7zNn4h2M1V9H7/Ax5hmc9W5tt1l9tBI; PREF=tz=Europe.Moscow&f6=40000000&f5=30000; SID=OAiJrV8dNe8BKqLz2lOaQjJAgKkwj6eDv8I5wODbb6vCKJxtWkEiIEBJMXDL7h7xfec-4g.; __Secure-1PSID=OAiJrV8dNe8BKqLz2lOaQjJAgKkwj6eDv8I5wODbb6vCKJxtyM__T3tJ7o10BrmvRaQkGw.; __Secure-3PSID=OAiJrV8dNe8BKqLz2lOaQjJAgKkwj6eDv8I5wODbb6vCKJxtHMwVqCGShF2d6TpUxy91bg.; YSC=ck6hxiUfSac; LOGIN_INFO=AFmmF2swRQIhALyr845lP3S0Z_0SDC0adR-OEftWop8VBeEYXoWXvnqkAiAs-5xwboOLX6Ntel-pyX6KhxU9RipkRDCeHLwwnNGewQ:QUQ3MjNmdzkyak51UkoyTGhFV0I3WnlzR3RtYkdEeGVVUlRpSmdvNEZ0N0l3a203NmhiVHM4dDJDTVZKSzEyRl9oRE5OUUlVNHdvbjV5V0NJTk9YUk1xYjdBQmRYMDI2WW5sZWdRTzNodS1OS2Voa21fQk85Q29mOHBsTWlVY2YwX3ItQk8yUXVOa2l0aERKNWhiZ1E1T19RQVZyb3NZWHFB; SIDCC=AEf-XMR9sDrloGBvfY4H735zAvOqtDrvFVMAph3GYOCnYkbBRy6rmEPVtR75kaeEhxApKkxKCsc; __Secure-1PSIDCC=AEf-XMT6FgGmeia0kue8DwblTcrn8Zld53nJSzFOmUCUVFKMXfi4lT_qDcKZMeN1-UvROWfrEYY; __Secure-3PSIDCC=AEf-XMRirnXB_h8W_i4SlIBUycFOXCpZXqVUxuPxcxTYrOe04uZN6ipJOMyM_qOKEw8jRv6WUpso; ST-hnyygy=oq=reztop&gs_l=youtube.12...0.0.2.14962.0.0.0.0.0.0.0.0..0.0.ytmuc_h%2Cytpo-bo-me%3D1%2Cytposo-bo-me%3D1%2Cytpo-bo-vo-dr%3D0%2Cytposo-bo-vo-dr%3D0%2Cytpo-bo-npd%3D0%2Cytposo-bo-npd%3D0%2Ccfro%3D1%2Cytpo-bo-me%3D0%2Cytposo-bo-me%3D0...0...1ac..64.youtube..0.0.0....0.&itct=CBUQ7VAiEwi53MmD7476AhUSdLIKHddmBFE%3D&csn=MC4yMjIyOTQyNTQ3OTY3MzI4Mg..&endpoint=%7B%22clickTrackingParams%22%3A%22CBUQ7VAiEwi53MmD7476AhUSdLIKHddmBFE%3D%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22url%22%3A%22%2Fresults%3Fsearch_query%3Dreztop%22%2C%22webPageType%22%3A%22WEB_PAGE_TYPE_SEARCH%22%2C%22rootVe%22%3A4724%7D%7D%2C%22searchEndpoint%22%3A%7B%22query%22%3A%22reztop%22%7D%7D',
        'origin': 'https://www.youtube.com',
        'referer': 'https://www.youtube.com/results?search_query=reztop',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Yandex";v="22"',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-full-version': '"22.7.5.1027"',
        'sec-ch-ua-full-version-list': '" Not A;Brand";v="99.0.0.0", "Chromium";v="102.0.5005.167", "Yandex";v="22.7.5.1027"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua-platform-version': '"8.0.0"',
        'sec-ch-ua-wow64': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'same-origin',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 Safari/537.36',
        'x-goog-authuser': '1',
        'x-goog-visitor-id': 'CgtkeFlpX1FGTW84byj94_uYBg%3D%3D',
        'x-origin': 'https://www.youtube.com',
        'x-youtube-bootstrap-logged-in': 'true',
        'x-youtube-client-name': '1',
        'x-youtube-client-version': '2.20220909.00.00'
    },
    body: JSON.stringify({
        'context': {
            'client': {
                'hl': 'ru',
                'gl': 'RU',
                'remoteHost': '95.72.89.18',
                'deviceMake': '',
                'deviceModel': '',
                'visitorData': 'CgtkeFlpX1FGTW84byj94_uYBg%3D%3D',
                'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 Safari/537.36,gzip(gfe)',
                'clientName': 'WEB',
                'clientVersion': '2.20220909.00.00',
                'osName': 'Windows',
                'osVersion': '10.0',
                'originalUrl': 'https://www.youtube.com/results?search_query=reztop',
                'platform': 'DESKTOP',
                'clientFormFactor': 'UNKNOWN_FORM_FACTOR',
                'configInfo': {
                    'appInstallData': 'CP3j-5gGELiLrgUQy-z9EhD0gP4SEJjGrgUQ_LquBRC3y60FEOK5rgUQ9P_9EhC9tq4FENSDrgUQk6-uBRD2__0SEJb6_RIQs7euBRCR-PwSENi-rQU%3D'
                },
                'userInterfaceTheme': 'USER_INTERFACE_THEME_DARK',
                'timeZone': 'Europe/Moscow',
                'browserName': 'Chrome',
                'browserVersion': '102.0.5005.167',
                'screenWidthPoints': 985,
                'screenHeightPoints': 1367,
                'screenPixelDensity': 1,
                'screenDensityFloat': 0.800000011920929,
                'utcOffsetMinutes': 180,
                'memoryTotalKbytes': '8000000',
                'mainAppWebInfo': {
                    'graftUrl': '/results?search_query=reztop',
                    'pwaInstallabilityStatus': 'PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED',
                    'webDisplayMode': 'WEB_DISPLAY_MODE_BROWSER',
                    'isWebNativeShareAvailable': true
                }
            },
            'user': {
                'lockedSafetyMode': false
            },
            'request': {
                'useSsl': true,
                'internalExperimentFlags': [],
                'consistencyTokenJars': []
            },
            'clickTracking': {
                'clickTrackingParams': 'CBUQ7VAiEwi53MmD7476AhUSdLIKHddmBFE='
            },
            'adSignalsInfo': {
                'params': [
                    {
                        'key': 'dt',
                        'value': '1662972414295'
                    },
                    {
                        'key': 'flash',
                        'value': '0'
                    },
                    {
                        'key': 'frm',
                        'value': '0'
                    },
                    {
                        'key': 'u_tz',
                        'value': '180'
                    },
                    {
                        'key': 'u_his',
                        'value': '9'
                    },
                    {
                        'key': 'u_h',
                        'value': '1200'
                    },
                    {
                        'key': 'u_w',
                        'value': '1920'
                    },
                    {
                        'key': 'u_ah',
                        'value': '1170'
                    },
                    {
                        'key': 'u_aw',
                        'value': '1920'
                    },
                    {
                        'key': 'u_cd',
                        'value': '24'
                    },
                    {
                        'key': 'bc',
                        'value': '31'
                    },
                    {
                        'key': 'bih',
                        'value': '1367'
                    },
                    {
                        'key': 'biw',
                        'value': '963'
                    },
                    {
                        'key': 'brdim',
                        'value': '0,0,0,0,1920,0,1920,1170,985,1367'
                    },
                    {
                        'key': 'vis',
                        'value': '1'
                    },
                    {
                        'key': 'wgl',
                        'value': 'true'
                    },
                    {
                        'key': 'ca_type',
                        'value': 'image'
                    }
                ]
            }
        },
        'query': 'reztop',
        'webSearchboxStatsUrl': '/search?oq=reztop&gs_l=youtube.12...0.0.2.14962.0.0.0.0.0.0.0.0..0.0.ytmuc_h,ytpo-bo-me=1,ytposo-bo-me=1,ytpo-bo-vo-dr=0,ytposo-bo-vo-dr=0,ytpo-bo-npd=0,ytposo-bo-npd=0,cfro=1,ytpo-bo-me=0,ytposo-bo-me=0...0...1ac..64.youtube..0.0.0....0.'
    })
}));