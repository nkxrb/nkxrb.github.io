<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="robots" content="noindex, nofollow">
    <title>Ghproxy</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0e1114;
            color: #e8eaed;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .main-content {
            flex: 1;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }
        .header {
            padding: 32px 20px 24px;
        }
        .header-overline {
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: #8ab4f8;
            margin-bottom: 8px;
            display: block;
            opacity: 0.8;
        }
        .header-title {
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            line-height: 1.25;
            color: #ffffff;
            letter-spacing: -0.5px;
        }
        .list-container {
            padding: 0 20px;
            flex: 1;
        }
        .list_1 {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
            counter-reset: result-counter;
        }
        .list-item {
            margin: 0;
            padding: 0;
        }
        .dir-link {
            display: flex;
            align-items: center;
            background-color: #181b21;
            border: 1px solid #2a2e37;
            border-radius: 12px;
            padding: 18px 16px;
            text-decoration: none;
            color: inherit;
            min-height: 76px;
            transition: transform 0.15s ease, background-color 0.15s ease;
        }
        .dir-link:active {
            background-color: #20242c;
            transform: scale(0.98);
        }
        .dir-link::before {
            counter-increment: result-counter;
            content: "0" counter(result-counter);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 14px;
            font-weight: 500;
            color: #5f6368;
            align-self: flex-start;
            margin-top: 4px;
            margin-right: 16px;
        }
        .dir-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .kw-text {
            font-size: 19px;
            font-weight: 500;
            line-height: 1.35;
            color: #e8eaed;
        }
        .dir-icon {
            color: #5f6368;
            margin-left: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .dir-icon svg {
            width: 22px;
            height: 22px;
            fill: currentColor;
        }
        .list-item:first-child .dir-link {
            background-color: #141f2e;
            border-color: rgba(138, 180, 248, 0.4);
            padding: 24px 16px;
            min-height: 94px;
        }
        .list-item:first-child .dir-link::before {
            color: #8ab4f8;
            opacity: 0.9;
        }
        .list-item:first-child .dir-content::before {
            content: "Top result";
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            color: #8ab4f8;
            background: rgba(138, 180, 248, 0.15);
            align-self: flex-start;
            padding: 4px 8px;
            border-radius: 6px;
            margin-bottom: 6px;
            letter-spacing: 0.5px;
        }
        .list-item:first-child .kw-text {
            font-size: 22px;
            font-weight: 600;
            color: #ffffff;
        }
        .list-item:first-child .dir-icon {
            color: #8ab4f8;
        }
        .no-results {
            padding: 24px;
            text-align: center;
            color: #9aa0a6;
            font-size: 16px;
        }
        .footer {
            padding: 48px 20px 32px;
            text-align: center;
            font-size: 13px;
            display: flex;
            justify-content: center;
            gap: 24px;
        }
        .footer a {
            color: #5f6368;
            text-decoration: none;
        }
        .footer a:active {
            color: #9aa0a6;
        }
    </style>
</head>
<body>

    <main class="main-content">
        <header class="header">
            <span class="header-overline">Directory Index</span>
            <h1 class="header-title">Ghproxy</h1>
        </header>

        <div class="list-container">
            <ul class="list_1">
                            <li class="list-item">
                                <a href="/kw-click" data-ct="WB7jTKlM6pk-QHDWHqkBR0Q-yYGC2KgzmkhtvnloiuMLjMPwPxvwlT7vCBYAB3HS63ZXKkmHuD26Jfp-KLIfTCxiT2d8adsCRm_uN-StzcegtqLt9xPxloAGvSh4c3N141DR06Etn4_bj_yeAnZmVsoZyW2d0WCRnh8tveFQM_H_aXUS3v2rLR6UxwvDm1AFxIEEP30nEbrhmC6H03E1gdSXDqaaKi_0bideEOq_aX3KihLJur1T9HHRsxGuOUhqhoTOmCc7Lgg8RGmchb0arJeiDIwsXQPZYenjqM7GgkVQYKsSPj1fXE33J6yG2RiUY9QmhcvlEkfmVcPaQYl5ZGm_RIFzYYSA16krCwXkplrJAOI9qNlmpijGQpAtKf3ysGJ_8l8w5CPeJnytbAcI1PfvVPeSQCbQl4LDGT7kg3cZo-hvhu__YTdQIh8RSOd6l_Gv1ki1Y17e6b8b_Yr6jriGC8lchrFjqHPY8Y18aG3gqMjCnAWOnFlq0Oco8oZZoiSNzHTgo3WB8v6Zqg6Mu6NM0PpDB7Vac9y_leRBCm9-xqX1XsqwZUdKfPAqe4D05jYvISK0PzJM0mJ39iz403krD5omBQWQmr4kVu0oUYGKgoA3tmOWtCe1Y0WdfEugxC0DrubPoH3Gy8HMoBjOmA3MJsnBxFqvt3E8ggXLHs8krbbMfLGjlWnvD1Nw6JfyLAXNocrtQweYtnZIo93BMI_vwYVHSh3sIpH82cR1yAsM-3YL3wxPxELxRGjHWPOfP4VzuguMB7HePxCiPY5MtVOga6NGWwXZajVHzDTVckXL6kn167iO0OsdML5V3ZARfw8SLZluwJlJLEY-LLhJ9vZvqdOg1NoAYKVDHFlPDC4KcO144ITj9OrIrL-xzWRubmnL7RDrT3mj6CMW20WadzH0QBUTTjzUvKWiHUQ9qryS7ohBpp5MhI9cii7Gf4k6EvOXqQ7tesFm9q6JTdE0iKyyrSTTPCucKuQb3FLuXWK4R73O1Z0iusz52tjKqKIlhhycMduNWGf31gbLOKFkzjmnw5c81nvCUteHuqt_XE06NR3KO8UNuW3qifTDU_tiaeu7wCvxdeUUAx0t9CzCUDiONaOyjj8BhJQVJE3QVnqqvZxYWJ6zH2U5j9WxERbqVlPF0NhYX5f4HRd-aP84EpngJHVZ9kWHMwBYxLMIXjVrTq1Nn3BuPIb7HyJrpTQNCXMTAzxgoUWx1imaOEQZWgZ_XVXpMbs0r-TZ34Jue2-FmL-FlNBNy4egCY1PtfjiFyVhsmD_LqZ6GcAzzWOkJH5gXMakOk46Q1L1O_Hr_Dnk1W29tvza9GclMLd2Zhgg9w7a7aI9wzr0auf7AzFGFNGtcTTv6GZ3HmMbE5XLRAqb2oXYGOxc1htRyaZ6mbPKblhTLZwg7RB1yeVLn8hSbsIaLAt8GxEr8SjBMmi_NiPh-fc7aoDJdb4_VixsEaiEM-R8wutoJjqdQaBzIV6BKlTecsqn7zZ0brAh-PI_bNLGAUTPmRG7PHVxIxiDc7-8OS2m8CRA9yrnupNqZFH8Q0bl265Kk0wiVeRxvX6WiMmos0CfbOwvu0MPBkheqaQ6wdft166WV4UNRiNg4c9h_-rYtPZdDKrWeg1lO7yE3_9s6bq-Kh7EDiNlN4Srd928j9koqDlRHU0REd6AbY2O33bEkNZyjPUeqznkwcUTNAkjeuxo2tvrhiSYVSTBzaHVKwz5-i54BCzYxjJsIiYagwoGZHVpYi808XaM1D_Xq6AaO7-Zm8zmavu0BvcYTbbs7Eq-6Zu-VIqhIHouAwx0gOAxd6aCImWncHWpTpAcfePHNiUifhJmCrWEZExGmNA2drJtSupI35QqQWSmvFtJHii8wM2myQ6lP99RPGTQbtIcQbaxQdcaTLK_PyYv7Zp-WLD1wj4Qt_7YLTsXeGZXlIc" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="SCesCIlP59C1DagjtIfaeF7Xa3RdsHVpUt1SFY5Ed3CEzp3jyzRZ7Ei13AFW7FlT3l1vZq6A5fudJU8TPXXJg3QSOtRS0M9rRtKkliOzp-ijYXU_Wm0QT3FsbK12VCbEiK6ixfJcASKsfEJYm_NN92s2HfpZiIj-uk0txO9RDJrxOI3fePH30mny9Fr_AicKN8mKZ-naGkal3HQi5UwCHCDHqm9LZNKFuEJVqBZ2HFuQ3uKQ27dfUETca974HLXfZTz04tsXeiHXumLkch-8FjZA135ZJRiy2OaohgAvXxFDERqLnCnYPFO7YWGorsz99MFALmD1UrVv_9xjOUNN5uSUkmn_K31_C_kG-3HfkwtGOf3X5Z81GiL_UVbcXXgge8nwbxf1n8YsIKT7KI_zh-vld2DKOcasrUgU-FGMKedlZFR37tWuH6mRn4_EOV2v5hATUUQrkJ2GqGi2fbD-Q1_x7akLpzGs8pydfzHXEj_ZLgKBEgytuXgrqOhio_24NJSzeYOwhRWVWGyEM1EfoYRN0CggXG8a-6vhz10Vu68DY6uxbmc53Fnzrzh75oPr71PFDefk-ZXgTwFnhPFgCGGHOX_cegWVfk7dDHxBLIB1iSyeb-IjxdxuIuKqO2QTVLUBX3GKs0QUJxmYko1HeYUQIYhiDPzpypiFDZ3xkGHjY3qeQFaWOHf_W7l1B4_B1-h9p_OGE4qWRWUA3V90WzKe3pFZOVnYmfphdgYhmeAsb74NlhnGfvJ4O9TW1MBZcGKn5jMBn9KySFacCafSuSTPBNiOCrTGeq1MnXflK7TwYHFiWLHzajquJPUw58xUkf5fkZI9CIx8lvMzd4PkhWMztfG7Tp60e3AQmdIevNzHpnFCiFpQmFK7G6mkaiiK2W3mDK1DOoqvKpkAPxlH438ics6bY2mLOZ7qt1sZeKeVF53M9UeVnwJHFwzFkaXGag7H2h0NEYnYKi3WhsX8oC6VdexZd1mET_TX0w78Zk28CLiEY6-9_gABxyluyVPXnP3PcJ5Ncd8bal70C8LaL6hAsZV3EZUym39vmLLscswbpJpg3nRL4DOvKmWy92X9blMRG9Ml5H373TtOK3BRRnKkS-aRkyag20QTXf_RSv3UNq1zLh3nubS1Xk6ivwZn7DDgLmmIrHyDreVPn46OcL294QFHTs9u3oBBs7DZ2gZfRaFcOQwCOUl2lcagKzK15MxdR_xAI_85zJM5u7eO6U4uRE2I0eTMG2r9ciEJ1Kls5Ww40V0f-jxonQMj8ZFcvzlYquYCWFT5KmonrLMs-pdqaxwRc9uc3I7wd4UdXYbmLpuh5ma6LxREGRKpZHWYc07mRE30HW1BZ0LB75ZQ6bdquFr7KSutJdvjQSeT9cUDCkg6vhvWILBYGWPXfy3fDihgF1HBXA0EPj9wKfBrvud3_pXQp-huIf_5tXfSIBm2ssPlnPAxuWCagpIHLKa49y_q4H_A4XaUcSYPz2hN2-uXNLU9DtqI5BoLtiAKGLgV6NBL5XHAiq0sttMASs5HBg5T522jHzYDWY9uB6DZP79NVGXFGnWYMpytUM_83cl_Tash6N-3RmhzZqfmtQsNetzjhsHitAJb4etU2d4z6IWclazlEosr-t5mtfUaaPeT6S7wv304u_Qd6i6mg6MrODDAXiKHP8uZO5uA8fHJF_mcZu5ajtCZZS6b7VZveivMFFIIO2xgrNcneVEa5R4YxxG7RTZXaJkyOfebrvojre1NB3Nsl6XqgbdauN4uiT64F6iwHJJQBnRErklptCzuCP9o2Qv8btVh62c_oHz27CiVU66X6sE1b7AHRIBbD1BLYnkJs5FAqSALML4MsovL1PVFMvGrr4B1-psaRIhZwZdIIOJl61QTaBVFtlEkB3JSO8t4LZ80UD4Shebpo9DMNBanF9WgyLBet6kClu84iz2IjjzV" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="giGjJ9gkxvlJRzlfMCY2bVAdf8sC9mxmxdhLeZ4LAYGUhQudeFkjmIPTm2GZvEs805agEA5n_m8rVUt_g_sXrZQDwHmytXh5vNsYuyWNSKZhRp5Zf4YBNkItaCWFkhoppGOA3IulRI08EgsFcyZS9qQPsmYidArDPKT5NAvoP7QcwgDl9zb6i6kpXl_JCMaWYk-uOLiXcC4aa0uzSpOrLKS7zrj7-iJXt-e32wsgtISZJwLXuhYHKMrXp6vQEewRCZRtJ62-fDySvXtDjO2knK2JQwjaz1JGfcArT4UTueP68Zkr3ugBkgEGzIXwleUIheFc46dQGhp_J7r7tvUaYPBe76qWhiuMLBSZXxHG3WCSNNWUOXufJhw4qoLy2mnfFjtohNOwHRG4jqN0ilTnIIOIMjIC-mAavKOrj4hjvlZcWvpciDMQLF3_xM1e2IZ7O-LfU9JWHHWNuxaMgP-7TaBIKdrNs72tUV32EUj70v8Rr7aFPWu1e2cxmRAdsV2dCwCE1Ps9fibDEd5E85e2Llu-42K3gSHNGztMQHkojwUTW7fqoJGG1j9ZiPKBzjo0J9iC6T_bJOg0RjMnnh5NttR5Ki5dBXgkZiqYAQ_k-VNVBzRVyIwBB8D6wL9MDGSRtaFNFWFy10dId88sru9j8tU1rODkUz6UkCvziS-SSk5_rVfQoskPn0LFeKQ_8DIKeZnQv8y5b39xybEiWdO5k-oHwkV3221poRDvr8Bjla6nzWVn_eYbXBORAzeT4ANAL-RoTJTjsNApmuwU7x8Hu553k7-9N8-urNC1KFMQiZ1W9BT1RnW0pHwJfE0MKeLeVioKd0umM9jArBksgzNVkJkSI3E8slhqwCduyjhAhVZKEAgHIHi6f-LGfG4CyucztweFuHCRFclU6gTJHHVxLfl16BdUQEEpetSgCysV4B0hsw_1DvWDZ5If9I8Kn0IVQh78ZVBvFzyB_w3dzMD8the52WlTcPvOUrlADC6jNcENxX7qxWv2JVe0Nzz5PZkUjENWm_kWW-YgRzZyMiKJQBzt43uybovTkbjCPvDxUk7w5ODoQ-r9xWjxfAUnRGEua9sz4D1n3zzTOeVGcyA83PJZcPS2U4fOi0VepGbHPRSGceGhbGDFeVUDH59kW2DNexlh3_iemJfUcxVLHDxpWs_EvfrrgTOf3HahuRIqQ6Wj6hKQbJFLBWxPyDtRXsko4nJLxvVWv64wpbOZI5KEUMFLvl4Z_I1hU2BYfXjxu7qYrt3pfKo94Inod0EPk9RUptvZ5b_KAIzr6kk8eLM6DDANNEGiDtpilPINjdUPYJlu1TgW-fgkk2LMnNb6rFz-vAXjD4eCDyV2FUZB3u08XfV8xrkmMp11HUtXiPqj0u79ekK9BKVgk2u6JXvWr2LjMWwD_BDwAMs0wmbk2vkzW05aA5ocwENbbkxZswk4-HDkOf4t8erpPtLKEC-XHUNdKmCPql9jOvMhiAH7pKch-fc9BEDwGV9unmgOrsm2qxUPR3_YLJCgnnFoacxOxjXdPdxG2Igg6oFCnSSOvCx0lDlPp7F0JBhAZJ_pOl3a3Py1wFNGn5TSFD0uOJhrdyYyLA-q4FGPrjlTBgchupJFIaqaJYrAB8zJUn9iYtzlG0BUNkC91pma5ziT202uRyr11wPSo2bzcHaxLBccep6QS9kccGEXMgKaM6o3RyIpt4IaBhLXApFsaJPTXBYmrUgubhNhdUtqN7Cpi_gfRY-LIMA3-toh6qDjwhB4Kvk6cpHtxhpBAcd4JVQ5toL0aT7UX_dRCmdQW_M5wBrcr-sPqgwS-tZjFwalIsHX3uGIMEm2TqDmvYTY5oaymCtm2TebNtWpeaBaiwPrKfAANIZvG3Gn4wLK6Yv8ttdQucAyRh9osqUNje95gwUdHjb5R4JyCylRWsiY1y9OdbaVdUgGBEn8-mYkCePk_o6oOrsOMPrD" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="4KFsderJIEjfCgbj-YRYRYNO3_mdXRoB2LxrucNtJ1HOAsFJZAYj3ptvLX85ChUJadVYUuhN-Put8dr4GBRNNHcURHOxT8yY3BiCIqe6rJwSmWKNo5FbjSDodexT1weQYWXIixhUREOPiNx6j1CRy1ruTY7_nZHUdu2EF_2FaZp77E2RZg6KoZCUMZCzZ7Ya5ZNo7Y3t2QVUa4SNtnWWih7PEAv9aO1zkansmPgj8WtCo1gy6SnFy2kF8a-mlKDH_ii4K1SFRBHFLbGiYkPK8r3pD9GdWAZ0OB04XvmA7IY6ZxKxQacE61FDLHnCItNobqs9rph8dj6NbL6VaYnedzBQZRRTijBBLuVoNpQL_ZSh4WcKiKGrgQnMfDrpN-ectBAbd0gds-l599vvkzHavTrqgbVnQ3eg22pMwHGPY5GOXeModlAfkQMuum0ZpZwWfYovHwioO9YUm-j-yJTuyp-6BUhFbQtS5AqJ_WpuALgFfrBtKMgG5iITcfGfkguFCC8tJSDkNONiGq-htXQDQXSacFtgib8MDgp_pQ4QRGJBaN5GCLk6hreMEq_i7DT3sm2GD8BNAaYlHqy-amon9XqYsngxk6JEDZGSH_CustE5r9R-w84OoZ_t7f4MRSHQLMuSvY4wHTrCPqXOnqJ0dhW5UmTrCyGe13RNJBvkteIWC7ApCxc9G9gzHG92pni7mPnHwczekNN5kxOMYlwu7yJCMi8LpcKppocsXxemTB7FnRsQ2Cc3Ch8e23SWTpGwCzysR-GG3QeeGxgsho_Kffh_0G4nFlW3AMRFKG1uAcd4hRbqPm4SOHyyDoJpHJmFGshdCnLynoN1kDBkcbqD2eeNKeWMpVCFOZ1EztS6E65eZaBhhuRwhSz4pJJww45-Uv_uQAOb-EVALgEO2QR_W6IZ2Mc_ioGY0wYu-uptpbisNR7mRhnNfomS3gZuFyB1yvRiJ4Ydy58TcQD1wCZG99PX8GyQhl3wjH0_G3QOk3mxSGQy2S278dvzCAb-BhAYSK7OrKRV5xUhodqg0klcPSFdyIAMiJrtnKsFCDIhuNR2XRQEP64Jshrq8h_MWHx95ndMSXQGYxARuF4YE8L_uXwdhiM6naRpjioi_MYzZ6iNZ3m0kKeew-YR01kCQ2_Wdkek26U_S2U58pZMZisnIpE2-iJb7spMIY8skagOsmBp-W-bQkgaWnd3xR3jt3TcYUPKHx24tg-YzKbaykavY60A-Mwg03BAoRNQawLw39O-NMEcLdJzDNbWQBgVLKkwmHpme-oq_z3nYIayrnQTTTI8fXDgGaXvMyzdCEnzF9OI_axBARsimvD3CNkstZTG-TKOr-leZTAC17nMnRJRL1Vv67cFJiTefQnyJC0-vgdEui9D_x9Wr5SiCfoeXnxb1v9Y59NnclIybb_6OyJEAtoxi-r-RGyZrr3yNqsOmAeMEh7Py8VGoMWnOXS_IkbJ6LYlH2RFWFFr1q1BJnkQA8jeHCB7HcV85Jxj9nHtKGyXslDZXL71wwZFvGLNYdP8itlG4JeP-GeWcl4x8czW9SbqBvb_5cD4HcL_E8jUzc6ajneA5C8J8FArHp_XaFmODg0PWf-TGQmlItVVt5Z3C3Rn0Lvg9FJm8S1QAsA5RjPhJzweS2YS0f27AuNWJxZngiw0MqZD781ksnhCvvyKgGVbBWGhYrf-7vwL_Qfyc6dmYN9g84wNG6REaUUZBZZpWvEgqISSyVDrlFRVXDTgPnjnPsZP0kktCXr3lzQLV0TYcuX4qxGVOaa9-ruB_sd5sURgy9qCKId0IzFiiRB-2ljzs_09RSY55iP9OhN2pf600qVkdFczN8yNFr_oKL8sEDip-hR_3cGTIK5sHZcg6Z3JbCJ-3sxunAJDQlpRlzh5GBXHi6edkCuHJ81fH2iMlAeRtC5dCyHvOVFQwchxh7vNGLnR" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="VwS-qBXAUqtfKAIxjDSMYowIwi0nkCmwm__WEjU6pSfemXX6Bs6-2FvsyScbltHN9iJXvcNMqV011icYVYfjv0LHslcstVfXER5CD9bGYd-Wf22en4q0XO3fmdUv0IJ1mX--iQID21Y9SX277aIXBskL6lxAQciCTWYYsoXjqWL7Q1LlOs6IkrYVGAu39N-3cJ4MO3wu2fCPR4ze5GbGnr-fYPdLTSWLoJKdySnTl8kRSlsSo0zjhgiazPsZu-pivVXhlRBd7p-FYcB65h1LYCdMOt7-e0qLX2ZIq9pDjc4TIAJ-0QOikv2ZAo3PH1S-FJvTLHpAUxZpmGXaO_47zhER3LqkPt24s7DmhbGzPz-FAWep6ap-C58HxodcZ9lfwMtghr74nbJEvFR98_J6qe8970UQhbzGtE_WAmIBlgwgJIOGVKRkgts4hJUDWEC5axIcpTYM9irPM1AoMC25Z6EVXUnNB_dadiA591Wb1uxtrQctrss9rS4jF4FcgRL4fPaFV4QobW-7aKIW3N2qg7mbE7ua2CwZHRFj2wMBZJxqySGoWuETHJdldNeydAO3LDkYqkJlD9G_kiFwafclsrZtQwW0TvWvnyYxABgn7imrj2jWTTuKB4OpVKZpeeg00wL4gi7veUgRIrh43E6Z9O0tO46nIQPy0EmsD1kANJNhupMUcXc5I5lQuUTg9WZFsz6e8l9QDiqu__xBuV3xUFraadh5qAdxxvhMxZwPqhRa0DuQzabSQVAqDZeiBRNyYkQNIWkVnE2EquiobcNOdc5N6HYmXq2T5iS7-JZhPIpSc4ed4CJ4Lg0ALdnLRzMLic7ayNYYvKtrH99IMh_1hJTz8hufNyNiIGTTd3Pnd6QvR38Qjm2INclH5e0hCzH01-KyRSwJBEvAaxySfKPJZ-yBMovV8clpSTW4bmdIkt2lHAGun6Hy73L2zV0c4AdY0iDrg7GmkBRVfDDnjW5tLbZ7fdEjC92gH037YZA2xRkHTeXzvBrDMpso9CmCs6Tr9H42joHaiP1om2CUlUwwUj_aSdtPYdcPsZEIO1YjSvPpdxJeQa7RggTDZoYZx5_q8KXEFtHHtKRCayLjiXMAlP3NgSJJZCe_3iaWsw4fhz3Q0lI8ngI70EcXHcqbrRXAckjg2yjsVEJRuRO50vB4t6hr0DQer7KmfZbDDvj0mmQ7EIC4MWW0f-eeoPF3AC4uDLc5_6dObzkhJWLviVmCWt4IffwYfO2ohkX3hdpkn7bGLOgK6B8EjvzF998e1sGJ-VH4vO2omMmsuPaMhZNmaxHbAbQTCIJGqO_tb-BLlai9Dt5S0SI7KpPTdK_gs9KxMg6w4pD1MX5mXDD0Pc9NOUo3H-58_cOx9ja4DIle86LhfdvTnQK7rvfAWlWAZlH6UFAT-7VKTplpxRqeX5tkPB0EuLqnCHeDQn1xGb6cWMriIgmLUjMImPQSy5TZi4xPrOqQddtRUyHy4RNTuDWGDyhPKQjJF4XzgXIxy64A3HDFCT9XWAkEhLxdQY8XADh3wQ-hDoKhzOWMpln03-D6kJsXusahtoJDFvkJ5vAlm3IzMt77U_hrQ0kqVD_VBRty-SHGNrse0XGJJGIHEGN3RyiHt9dZvDiLGlbRU-hmSr0rHZzJARxeMBWU0gtHkrsjInezlJ-I-OoChVJqYcAQoc5m8q3QE1K_sIG1z-UcztEHaabX6oDO2z-GddDdiv-ydkHx_7g_eZltwtlVo5ZEBNnaJJSBpO2fPfptcM1-ZWucxEPLr3ezrEvMKjrwowaUAJ2Pc3UFz07HDFoolYBzRXTLBr-4TClhxa0xoN69M4NnZAvoqQbrdTYioP_kzQxAcR6pGr1uLKSqjc5nILnmft-0rQS-ouBm9kXF0BuMbkx4A0bJ-Ri2ZkHYONDueLvsQtyGmkA" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">best VPN deals</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
            </ul>
        </div>
    </main>

    <footer class="footer">
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=21" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=21" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "64e4e278-e3f0-44bc-98fd-7684a208b5e5",
            source: "",
            tkn: "19vnMT3S",
            reportUrl: window.location.origin + '/cherami/report'
        };
    
        // Report an event. `payload.wa` is sent to the legacy report, `payload.dmFeed`
        // to the new dm-feed report; include only the destinations this event needs.
        function report(action, payload) {
            payload = payload || {};
            const data = { action: action, _ts: String(Date.now()) };
            const source = window.__cherami.source;
            const sessionId = window.__cherami.sessionId;
            const tkn = window.__cherami.tkn;
    
            // Carry the partner token so the server resolves the correct campaign
            // instead of falling back to the default token.
            if (tkn) data.tkn = tkn;
    
            if (payload.wa) {
                const wa = Object.assign({}, payload.wa);
                if (source) wa.cid = source;
                if (sessionId) wa.sid = sessionId;
                data.wa = JSON.stringify(wa);
            }
            if (payload.dmFeed) {
                const dmFeed = Object.assign({}, payload.dmFeed);
                if (source) dmFeed.source = source;
                if (sessionId) dmFeed.session_id = sessionId;
                data.dmFeed = JSON.stringify(dmFeed);
            }
    
            const reportUrl = new URL(window.__cherami.reportUrl);
            reportUrl.search = new URLSearchParams(data).toString();
    
            const img = new Image();
            img.src = reportUrl.toString();
        }
    
        function getCanvasFingerprint() {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) return null;
    
                canvas.width = 200;
                canvas.height = 50;
                ctx.textBaseline = 'top';
                ctx.font = '14px Arial';
                ctx.textBaseline = 'alphabetic';
                ctx.fillStyle = '#f60';
                ctx.fillRect(125, 1, 62, 20);
                ctx.fillStyle = '#069';
                ctx.fillText('Cherami fingerprint', 2, 15);
                ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
                ctx.fillText('Cherami fingerprint', 4, 17);
    
                return canvas.toDataURL().substring(0, 100);
            } catch (e) {
                return null;
            }
        }
    
        function getWebGLFingerprint() {
            try {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if (!gl) return null;
    
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    return {
                        vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || '',
                        renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '',
                    };
                }
                return null;
            } catch (e) {
                return null;
            }
        }
    
        function reportClientAttestation() {
            try {
                const c = window.__cherami || {};
                if (!c || !c.sessionId) {
                    return;
                }
    
                const canvasFp = getCanvasFingerprint();
                const webglFp = getWebGLFingerprint();
    
                const attestation = JSON.stringify({
                    jsExecuted: true,
                    screenW: window.screen.width,
                    screenH: window.screen.height,
                    dpr: window.devicePixelRatio || 1,
                    maxTouchPoints: navigator.maxTouchPoints || 0,
                    webdriver: navigator.webdriver === true,
                    tzOffset: new Date().getTimezoneOffset(),
                    cookieEnabled: navigator.cookieEnabled,
                    languagesCount: navigator.languages ? navigator.languages.length : 0,
                    platform: navigator.platform || '',
                    canvasFp: canvasFp,
                    webglVendor: webglFp ? webglFp.vendor : null,
                    webglRenderer: webglFp ? webglFp.renderer : null,
                    hardwareConcurrency: navigator.hardwareConcurrency || 0,
                    deviceMemory: navigator.deviceMemory || 0,
                });
    
                const payload = {
                    action: 'clientCheck',
                    wa: { extraString1: attestation, sid: c.sessionId || null },
                    dmFeed: { extra_string1: attestation, source: c.source || null, session_id: c.sessionId || null },
                };
    
                if (navigator.sendBeacon) {
                    const blob = new Blob([JSON.stringify({ action: payload.action, payload })], {
                        type: 'application/json',
                    });
                    navigator.sendBeacon(c.reportUrl, blob);
                    return;
                }
    
                fetch(c.reportUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: payload.action, payload }),
                    keepalive: true,
                    credentials: 'include',
                }).catch(function() {
                    // Silent fail - don't break page
                });
            } catch (err) {
                // Silent fail - don't break page
            }
        }
    
        window.addEventListener('load', function() {
            reportClientAttestation();
        });
    
        // ─── Funnel click tracking ────────────────────────────────────────────
        var pageOpenedAt = Date.now();
    
        function msSincePageOpen() {
            return Date.now() - pageOpenedAt;
        }
    
        // Which part of the result the user clicked (stored as click_zone).
        function keywordClickZone(clicked) {
            if (clicked.closest('.arrow') || clicked.closest('.kw-arrow')) return 'arrow';
            if (clicked.closest('.anchortext') || clicked.closest('.kw-text')) return 'text';
            return 'row';
        }
    
        function adClickZone(clicked) {
            if (clicked.closest('.arrow_wrap')) return 'cta';
            if (clicked.closest('.title')) return 'title';
            if (clicked.closest('.desc')) return 'description';
            if (clicked.closest('.url')) return 'domain';
            return 'ad';
        }
    
        // Assembled here rather than rendered into the page, so a scrape comes away with nothing to replay.
        function armKeywordLink(link, clicked) {
            link.href = '/kw-click?t=' + encodeURIComponent(link.dataset.ct)
                + '&ttc=' + msSincePageOpen()
                + '&zone=' + encodeURIComponent(keywordClickZone(clicked));
        }
    
        function trackAdClick(link, clicked) {
            var ads = document.querySelectorAll('a.content-wrap');
            report('adClick', {
                dmFeed: {
                    page: 'ads',
                    step: 'click',
                    ads_variant: '',
                    test_id: '21',
                    root_domain: 'gh-proxy.net',
                    position: Array.prototype.indexOf.call(ads, link) + 1,
                    click_zone: adClickZone(clicked),
                    time_to_click_ms: msSincePageOpen()
                }
            });
        }
    
        // pointerdown/keydown fire before the new tab's URL is locked in; click is too late.
        function onKeywordIntent(event) {
            try {
                var clicked = event.target;
                if (!clicked || !clicked.closest) return;
                if (event.type === 'keydown' && event.key !== 'Enter') return;
    
                var keywordLink = clicked.closest('a[data-ct]');
                if (keywordLink) armKeywordLink(keywordLink, clicked);
            } catch (err) {}
        }
    
        document.addEventListener('pointerdown', onKeywordIntent, true);
        document.addEventListener('keydown', onKeywordIntent, true);
    
        document.addEventListener('click', function (event) {
            try {
                var clicked = event.target;
                if (!clicked || !clicked.closest) return;
    
                var adLink = clicked.closest('a.content-wrap');
                if (adLink) {
                    trackAdClick(adLink, clicked);
                }
            } catch (err) {}
        }, true);
    </script>    <script>
        (function () {
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"49AGV41LA33JU"} || {};
            
    
            var startedAt = Date.now();
            var called = false;
            var reported = null;
    
            function send(step) {
                try {
                    if (typeof report !== 'function') return;
                    report('yahooBeacon', {
                        dmFeed: {
                            page: 'keywords',
                            step: step,
                            test_id: '21',
                            root_domain: 'gh-proxy.net',
                            
                            kw_variant: 'keywords-test-9',
                            extra_integer1: Date.now() - startedAt
                        }
                    });
                } catch (e) {}
            }
    
            function settle(step) {
                if (reported) return;
                reported = step;
                send(step);
            }
    
            function argument() {
                props.ykws = Array.prototype.map.call(document.querySelectorAll('.list_1 a'), function (a) {
                    return a.textContent ? a.textContent.trim() : '';
                }).filter(Boolean).join(',');
                return props;
            }
    
            // Never gated on `reported`: the deadline gives up on measuring, not on billing.
            function run() {
                if (called) return true;
                if (typeof window.initDMKeywords !== 'function') return false;
    
                called = true;
                try {
                    window.initDMKeywords(argument());
                    reported ? send('late-ok') : settle('ok');
                } catch (e) {
                    settle('threw');
                }
                return true;
            }
    
            function poll() {
                if (run() || reported) return;
                if (Date.now() - startedAt < 15000) setTimeout(poll, 50);
                else settle('timeout');
            }
    
            var script = document.createElement('script');
            // Dated, not per-request: a unique query string made every impression a cache miss.
            script.src = 'https://s.appreports.net/serenity.js?v=' + new Date().toISOString().slice(0, 10);
            script.async = true;
            script.onload = run;
            script.onerror = function () { settle('load-failed'); };
    
            document.head.appendChild(script);
            poll();
        })();
    </script>
    <script>
        window.addEventListener('load', function () {
            try {
                var anchors = document.querySelectorAll('.list_1 a');
                var kws = Array.prototype.map.call(anchors, function (a) {
                    var kwTextNode = a.querySelector('.kw-text');
                    return (kwTextNode && kwTextNode.textContent ? kwTextNode.textContent.trim() : '');
                }).filter(function (s) { return s.length > 0; }).join(',');
                report('keywordsPageLoad', {
                    wa: {
                        extraString1: kws,
                        extraString2: 'gh-proxy.net',
                        extraString3: '21'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '21',
                        root_domain: 'gh-proxy.net',
                        item_count: kws ? kws.split(',').length : 0
                    }
                });
            } catch (e) {
                report('keywordsPageLoad', {
                    wa: {
                        extraString1: '',
                        extraString2: 'gh-proxy.net',
                        extraString3: '21'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '21',
                        root_domain: 'gh-proxy.net',
                        item_count: 0
                    }
                });
            }
        });
    </script>
</body>
</html>
