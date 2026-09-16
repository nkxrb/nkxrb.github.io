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
                                <a href="/kw-click" data-ct="EiHjgGA6DQKTflapWWoOZcLWpxNOURh7UBWqP9fcAI6Cl-fBxBSg7Tes2dBxezZ2P9LndKtppytmev6Zjl_B946mQCi3w1bmxPWW9agqRbrtq07ka1e2MKqRMWR2sZe3Ki4v3SEeWwbLKVWmO9QVc077JDmarrG7-pXSqYNfoBxGRjiWrEaU5qdbrNAusO80isGi3Ovj8f6EY2Mh0KkIj0OF-wePGBt0FDK3wNrwBZulX_fiGw36dAQ5lAigqtX-2UhMxdOe1OCRMJz8GwtHoy8Hr6nwKYwmdVTTQd0PNl_G8gkvEGTqjh-wpLLTafEPeTL1HOVjdBlGnDPQU2TTId-gmPNMPEyYz5pjeZ0IQQMjecFMGimx4jYZn5VPL5OV8Kbpwjf62cNP6nBGkE-Cwkf4Qj-mjqxsTTPkmkI87rvVAYfwyWewSVxDlAp3bWio6wR5727Q0QQj5hJExC-iesMAUQHhwl6-8_Sg2UQCoSZDe54jsT7Z_8tOaHsFt3QUXHc4inMlxi8dYGgqoKTlNxx_hVh0vFt7zdPAvusCGC169IF8iTQMSWQNt4ztk4W7A2ZgimoHPquqm_NkerM0oWE2Spf5aO9e0-OOsApzuz0dW6x8xM7C617PdwEROwt3NYaOhyAfbQaCIF0dMirhTAzmTxyu2ry90z_0acpypt6aaDcyug9Ww7St5RTzZVnjJnxRevldeyJyY3R_aOHbw-RtIhzJXNMWYKaJGn5o9KsyxKPKl_mkVqPhYiPfsDvI9Fzp5TArVpsr8DHX3xD2xTHHcQJuwZxbuPxuiYrvdWcizYcj8Xi7t5LcsjL9xrtt5MQRB8q5zrEq3VDUaUbN2wWcXPW0pV7LIAz6hUp_HNfVnQyKpWqVBsdadlJzV7JVNvHaD1n7ATLBeufW0_NNw75UY8-0eHUlvG5I3BIDADkr6wqWLzFvTswb2tR5Sd0zeb_L3Vfdmz6EDgxG30Y0jvfW8WzcQNI0xtkvEZKmEZDtX7enFEnUMeOcrrQgDpRby1gaCnV7kovKQ6vDByZosQL-ASd7yTrfuP3LXwltwfcyV1kCTM3l9XI0TzD_zeMOZuroCP6eMV2RGR7pBpMFfKGUsg9O98wpI7Gby0R8UEmF69hkbCypflH0W7U0rzDuTuj0mA07qDwAKBcHBzMaKLFYc-tnFOkLOnxTs22loLVLOsWirC23DnvoOsAiloH6fCmmU74NB0eahaG5ueccV3WFQ64ahDQTynfdAVSypDlPeheR7EFmpZ5i_iTokDIkedmnHukr2yLY33Qms2CyY5ycGA46Z1FFVJrzkVRHwttARcCVP7XgOjTJW_lpZMAd5jCtRu-w6ldLocNM4GG8oVSo7D75PCqxBB5gZfPQYPKKsye8J3jkDf-K3bm9tVeNI2z1EmyxNDrEOwC_NjTvX0jZYyCSfMRDirQB_cxQKmX7DmSeMEU2zaKKubbYWQhb1Ris5jl1xx1EVFVhu7ChdyXb1NGHmWm2GsrPAhGZK0nWzV6zkL_ITPclZdFRi1x0p9jrL79fH3MXA_P9audsLMP1hvckTr8nVfIK_e8fydzV4r9qQMSopDqzPGqnMgpW3ByEHE4MG7rzh2vLkWeNpTQj6mHvbtELjrNbIh0PPNKnBBYmZyPR--I28h41CUdBNnrUInRcGLbA1feTON7o8qFUBdoL9BqI7p73kWNVNukRpB2Xsd_p7j6CPTf3iuOjDfGhBMuL_wI0ockef8RyiT-2wmbcaAaMr11nfP_Bj2PcD-HcbeEPqHhVYuebgePvtaespajwYNYLC5AuUX-phANjrIgadUAdXHH82qKL2wevuAJbcYDl-ZI0BdXHbGC9nKdhzc0FLP_WXChNJIMkXEPJ1p2_7tgZudRYPkSTgPr5nhptgvdt_jKTloxS_gm0lzBy1l7gByIQBWuWK1a3" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="TxzuLWeegRkeKw2C-yRPH_BKQRm2HJ0eEcet89m8OOuYlIMheGYkG_j4CjJk4T5C4WNehBMWvKKy6rSqVqdnFOB8_KpWXekufhAF8V8YhgnzxM_mlMbC6bbsL-Vg-R5DjcJK7cRjqu60d6vVTWk1qBJFmmdNooHoYh4C5rVzy4sSyhzB2o_Tv-THhY9uCnk9jgB2M8pAZRuqpeBTpsGItfflqDWLCHRFF1TAkf-EHkd6KqMyQGRpG_bkl33AbwvUnMfESo2Iyxk2tCXz32NJ-FzpqlNzBmDo9z99lDmLhP0arHlH2oEIVaQZ_rLtzvNurxlq_UtMJerBGBLQbRT3diTdl1IPIiwtmgmlLUff5n83St1EBCbI35Hh7Snxv2MpAtp8esi12-n4skHpTDSGoizuxpWo9rrF_DF53FjNF_kmcc7Qwjppcj5a5wsoZvlkXFakay13qB34Nt03hxDT6aSIakshYgO2zK8Skw20dwLakimdjzS6Jz6Se0E7febm1o_a4IE3Uh8cUmHLVUt8xB5kRRc8T7023FyAyqhPP2YHEK-NpVxEqVgBfWEXBg6-9BKr_83LXyTkAVtWGJCePljLvGEziX7q6mGJTX_InDKyYP7Ks8ktIJPpYfAqZnoHfQ5zDWUd6VCpVZkqLWS1kde1YFidCyQx_oekmyq7CQSxNtcmMdOjErWwuzAjPPuoMmPCZITshOuhJY5oEEw3hAN-xbgFr_-OEz9j_vN9er_jfhC5StWyHjCPnc9cFai7AIMm_2xV8IdCjQie6soZr7nkzcH5RKuiYSW61uX5XsmdQr2sByaCLsME4iZjfz-OH3LN-kEg7micKWBPNzOJWFPnumAqUI7YpK50qKcuxcgUQzuNItY_j1xv-Sq8diDXYJ_SDJPH2tmdgwRHxtk8pOsBS-XnksUMOgJXmOLGLCp74rTQx4pQRxloxFLe1MC6dF5yiuonag_5bHkvQXoOVy9gRxHzG9rKyczNkUsLQ-ijQBhoFSWW9wmI4KygfSuJE1XtihsAmWOZzDKG0kWDz0Ekg5TWJILDAlz02cXh2hlASmGXxw1Zi4989VtyUvHvqg2R2VwZrtiGpb4Y-iQTydx3T6V8O16cMvy45jimZpb0o9Q3SL_zMpng8ttpMb3jrsTUDuRcQ6RWwi1O6Ad7f1ogpsys8uGLn1IQaqF6X4FLG23qPt2-U1qxTlGPs_VClsg40pTf29osz9CuDNAQuDdt3SkLjoyUrDAFW4n8sZXs98MBqPVLQ3RTnbB0fdOFvPZYCnNTU9wz-zleJkflOLCFdeOlce-Ou2_9MpyKJ3JcWozi0Q0zqJ23Q0oPf61XVPwLnoas9Z7qCC6jhLSvgMX0I1bAz2e2K5D2xAq9UCqTnP2lLTsgabAv5SW80MqVPOnUpnSPvjFPnIXthaZ9NnCuewLl6AUeyvHCcC8Xz2BVmtsk5VA45z1pjhqlPIPVfKCjfCvwMb_vYSl4XhVF4b7QlqpOjZ7som_tL9_FWS9DPCIZj0xMeTp8dTDQQaa4VsOEcmAt6ZwbemryuAVTI7fSbd6mkFo98giDMPP4SZuDzvnQxgwkY19ZBVgFg49O7LUfAy1LVNtbX1Tyhm04X95-0qENPZEsqPSYLYqINfG8tX14mVC1d8TO4k7mVVksoVo76euyrrqk0tv0BIu25VCNH8MYWzzR74HXFNHYC-nm6r4zurz1SXNK8UN2iXy8-qTuDHQWuBT7s2tyrDXYRYC43Bpa09x4mfFH378u4Gf-dFLTMJ7xjQm5VSE09k14vtWmnYOd5hwXoIgypo8C58VEixfwJGzAI-4_Hx1vKXg7hnxU2XChx6UXgz1cziL85XQa8CRha7tll3Qnrts_B5at4Nlckx0s61jo3QB-aK7TK5K9GQgvexAEbT9KdWsFqoUw6Bmp6qzD_80vjd-vxJxHzg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="BZBoxfZiPzk4NPtxbV6i3VlE7FPOYEmyOyQegySHKBcDD0l2H9stwMk-a3e4SQvydXFAPnOvFdSnIln5NOmo-O0toiFczvMCPPxMnvuWPbe3I19zOphpnRRAYb_llpg7sd08f0YUdlnf94p9X3xXVcLZji7qs1o_x7-LALaPXqDG_oUnUP_Be418v8-IGcYF6zFXMk1ViLmgWsv5vT8g38qC6hIF8S2Mhn4ZxBxLQ7awbKSDB6EzTFWqsOKhwoIhCeldqyUF2G5VI3vXa7tzo9XHl4AJUqrxUaBBUPWz4lVQ213tf0-RF-roOM1vdz1egB9EQ6y_7zCAT4NdPpYLboDwrjscyXhN0slpb4WZAfOVRN306fui_UnCITMlztoBgNz_9qUQZtFro9WT89lS5J1EQbveaYpFM-G9caFWkkGzqcajhMC0EXwYJqs4IQRCRGsbybYmJDC0944Vbl6hld7hExqj-mGznTIyvuKWbgUnc8znBrKbRlQz_gfXnKdoT0zdoe3oKAn4_s1x_iSJfN4LpVYBBXesW78i5umFCAjSBKfHUy01kL7JRJWQt4Xg3feKJYLxCY3EEhKIoBmu0pjl5QeHEMa5hxCXSUa7feIi90eDuXFCEv9efxLO4gJeC4_lVN6jZRlCqgKTT6Uz15ME_Awv4dIQqKdiSELdbXWVd3k2Ls2IUI3uk-7e8QjS4q8Xc9_5Rq9Z4s_od-xBeu-0NcCpusY7mNUk8yHoT6dU3DPegtErnjr2cEjd5BdIxLbGJ1g1S0lB-wnTgmOtbKY6i-dGeoYgIMEuetlATX0ofOKOqmVqc1XdENzdgUJ5uDFzI4VbZ8ny3ySau0QDzW-nQWBD_uPZJ33n6MrgGC_oHlx7MIQG-QRznkdmAcCsA77RgK9bWUIs_quRt7ITBx28Yu_isgLM9Hy25fbAW77ejoKruULsB-KJNzYyeLLLUB4RoxgRU_4geCpPALrGJ775fFe2iRo3QncNppDY7i_wyV2F_lkwh02rPKLFOrMvncGNUSzsGq-pRCyPvg6CyAdt1Pm6mrIJ87kN_0N69q0C86fft8j5q5HCD84uesrN7U1sh5RzZvNnzi7xqTkPWEp8T4_vQ9p2kzSuGE1wJkQQhZwDzP7QLhn200vRCIe0uLeBYn8_OLgwDwYHN_zogkp84yRaOcEEFjIcNFmWHafabLWt_guh828kCqCqJYjCvGxiGIaaNUpuj5XRtfU54ckmAR_cvI_hWJnKH92nSRBrQhzq5bgr2fWSF4tRZ6OCnAtj3idGy4yxatFSpH_KGLNahUHA2mETA16ZCmGrIzwwkyl4KiAiTyUzBu25YECvnRZI2SLYKAbTHm4Tm1ud9grG452FnSZJtdUgsmYOo5tRgnJVL2QCPHrpyeGLxlLC7H1aWNikWcGcbChr4Pm89Ia0tjWu0DCrHfn4gYQnrKUrbCNqhXbJ483fspFr8rVsi1iAnilkCdFcD5KmeRFiKPWUZA7LEHloACeW8JNmsVCpJzUSIvHMRSGiwJxR3zNjK6rDTAfj37teJRo2HpHcSiN3j_5vZ-sKEmQQfdZotNKQiqOToV4Yn-SmQFTfb_OLhuPinBfY_aAIdYniHdLXRaSiURF_ahU3nz99QX2Q32rwM4_XCv8pzC3MP7AooQjhwE0R1Fi51ikCx50HedU5N0rg3QW1RyXRoLBYm0J8gY1SMkFLE633UvPzLXJYAWrHtZmjmCQ9Ec_T3F2KkLAVYyVqQomlAijtDIBO4RzskxRUiTzoxBIpmQ0llrFaLsCqYuh087I72Om_ET_o3UfR9LJAmnIwsNiqO4mVMd6HFKeDFjTSnMCJMEALZXyOzUCsNuV8Bgm1nhmSpS6tHT-aBKmEFBaomfVQf55Dxi_lqvPJm3m-xswsh041mBOQuyndCzhbIVhAWu-gXc3LMg2Rmy2bEYLFa35VNvlDoQY9DQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="hNwDzTNIjHB8Y0ujFC7KoE2PjxQ-pYYiZ-NwEbx3Xspg6_j3lS7PD34G69ZCbNLMRKU0lMiebMYKZrI7_hT9ZOT6Iwsq38DP1P0yVJA5moHOAPfEdLg35QydnHg12fbV7FkDhRxdWK2Hfks2eSOtcd_YOthu7TFEr3vH_AMjd5EHX2nImuDu08QbAfxsE5XOzl16dzfh6Wwvlq46-QC9HB5zYvINiPuf24-jUEoo2aBU-9Z4cS7YptDxqD8VQ-Urp1LstFBzbCHj2a2mSvL6F93eS_K8Ey8W5tYul0e4pJi-94FGAOn3N9vT-16Za-WW0yuGTDzbxQjZM9fuIDCcdHFlvhTaOx32dfGd_MMPuTd4FjrCWFFqvj5yewIGHdltI6LEpu8_t7OAUtidlHJ0-jPdETOZyj7XPrESDCapNMRJ8nXyv_FyqeScezX7St19whb5RffBpDeoydNZkpirHfiX6tZiGpgjqNfOe-22tWoXREi6XvGFvU3803uQxH597J1MDb660rPicqhYs_a0wDRuBRcPUZO0FzQGgVSswYJyCa295n3EENknO8ggw1_2hdDXOx3Jd2UYy0nXM0lCxZZzPA0E6BSG0GAx2z_mFPmQZQJP4QJM8mDdlncLOJBYp6IqZcEOtkFDz5Oi8d9zweU1OpJhY3DRVZ3EceaAcvSXW7bRpAvUU0TbdviYH1zNAvbtzL8HxxogK3n4vIZSIxFd6O9a71c1ziD-V6PNBA-qIFrK22oqzP6C-milVuk5q3JPMMd3TSrgCPZGNsvwqQ4DY_6a_sbd0JaLT-8SWVpCqjG71GiPp7QUuviSv3c8KBrhYyRaz7fPfwSWUiTsMfNbVTDsoQs-9EGYi3uX79O5fByXUcy8U909Z5wiRecirn5Bzpvzi1y5NxBD_qQGESzY41fX-ZZb5gketfYJh8SryvBMYlcQzcVakOsz3W7IgzLu5s-DETGr7LSR4X3yWAgsePPAawxxHGqr_ET_7Pv2GOZvenjjpPe_Koo-cVYwZ0zGXhGgZ0qbAV8xBdGCn012xrP-tWSyeOUyqDD-VwjnhgSxYopHzFYiC3yneT8W1uosFxTBA5scp8kttLi1I_btx8vgPx9flFdFtiYF37HNX78CULV6aoTHh1__vs2Lutrf0KIg5CF0B8xCtSUfFiqHex1Pnpe2dQ_vDZ-XZl55fMEj2fLDngT9OohMcbU4gbkPubDHjh1hDKt2vm_eufiPsbYjxa729T7uMY0il7Ab1zo5QVt9ilbb5PSmmhPlxFpvzdrRfkmRCGb9j2Ozz39RTojuyW_hXXZfadVtSBIwhk2yMw-zSAYFVPovMfa0d0U_fTNvAaod3Unw07vR4Xsvzcq4bVLRK9OGOrot93yUDCAytNJrFx93IxiisBWJP7nUE49KVwoDAxDCznB3Mdo5SCGVd67fURKpdiHsUXaSEOy9UDlmyjLE-E4KjOfDYtbzeNzh1lG8Aa_EHGke0MZjOTLSZCBS8KH7aSj7v4dvK-g3eirdlXQ2Jp4-UN9XGoXZgM6sj7i2dHcNLgEYdHCGAZNAI4UfLO5q61NJl13jkHNcNrLJZVeFIeDntQ3O-4O8FeEqNolODzOscWTHhqKW94-B3k_Rzo4A4Xc_VlOOzdEhqyxsl1qcOdJkjp1bjuopou7AQyw4CtH6lAZ2RSDkjWArvfJH_ZPmzppT4exKip0p8kPBwru0KbC5rQ29DYUN18HIhhICLqYMZeef-BijZ5RkkGHnEemH1iW5oFRSrR2Pq08tHjYUWET5vPosj2mjIndxKYl87q7LhNaqzEaGfnaIZiOGkbiP7vycbLte8qopiHS2aLCOq0qen-wcPn7feEGkxwVkhw1g3UnT4Wnwag97ZHr6VHrdI6SLIitKNBj2Fp8jzTRyd0tcnKXkI9u77iRb_OOhO4xJ2ZUrZ2JVGg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="eM5Xxi6stp73ZFb2nUaRT23cYQ20cd7IyTNXsKzySoODh6tA0coZCwM6Am8vCTOuka2G7iNuSbkpOvfyMZ7oABHtH2hwRj0InhazYtEM07eZIwwnz2hVqZQdUPzWe5v2hzealuE6_k6Zfs_CWducG7rNAJU9Ud_ORRn-FJjkCOlHlSF6lRJ-T7q9_LNiBpybx3QTBDn5ew-SPtOFvgV28BatkWdW-yWCB_2xMQqscs9TJivYpL3PvvAldHE-b940lDMqV4AXOvhiIlXxT8C-JWzC_qvKsYekKC_74ov9ZA8pyDoVD3pbX7meO3-7waeP4RDRdMTx2WhNVCcHM_53fa30yFtI84fXfjCc9k1E8Or6qDMQvyyzZXOiWKW-w3CxFOw-yQxKVHhVixri9XkGsdMp8lRAxYwd8AaKvHUxUjF958RFm8i_YUwang_fLWMaFbPPuAdgvZuq_jQ04yOCgey471d0d8Sb8bIykwzL3Q2MTV1v8htnZBF9L8iscSiLMaw4kN4Hj8IUiILxjpKq3zETmkfJC8RFc9-uwtlVKDikUgQy0bzIPhpE5sNVux6OZ2EfYj54GK3p16wyjxpvSTh8paRcqv6DdIrkMRgQJYGprbw6ubX1IoTS0jmSkLl-yo4S0Q6BWSVhF9gP406vMUI0w7_J73e1iqr_WWrwj1HDqogh0YczR9mEW1auqHZHZosH4tdEYao1H8IZaW4njk2WGah1fn7-NkU5lKwB3VkC4LMo91Ufv9NcY27yqYe9ZCa31RIN0_nr8o83NULcs3Rnrq2W2zhkVToOxMKZdwRb0V1c6j0FANi51MVqjxqIZbIGau6dN8Xpv9kMN_tK2bPrREzQZPNG7MBYFKhe_nd5y4XTlLZhNHiZS2jbx7457PlbCSsTJnhyKlw4_bJOCWTbY4M7XlNtZjwaQFzySPkdStEZKjvHsvYgZkSB50QoRckKCjFSdY74mqkSQac-nqcYjSMDqqn3MfXAOGIiVHSxPePdEf-EBvkdx6Ugs5vQ87DgF2D4k3vD2n2nUESxeddXtGpzpDggyDVLCEsy9NbhEmN6O2hX83vSfsuFTZeu3miCjvhMre2utNNeowx3JdP7T8k33jZS1Z0wE8naP84CKMHB15zo_jXNEqmpcZKUwsSt7chDon6mKANZxA2G9kz2dqGU0S2IHQZMRLS6zeN3dwU1YRRcXmaFM75ehL-e4areZCJOU1sGhh-GeEEeBYiUyvAKTK9F1ErJt6YSaK47mr6h934Or8MQ5EXKP8oKW0Pa1ZPubLU9ECHL_yk99XUBe-MxpB-Hq85H0IWyPKLQ4UHTO4e-NNRa0eEu7lPR0Es9ZVbd4vCVPSjZhCchQV8S60nzWxwPNOAMxitMLM0FMVVARava1M2F6emq9RCAASqXkgzOqfx8SwbbmhybcN_zcU8YW34p1M-w3ijZ4x_ZytLTEY1Yd-Fgi_OLNq7DfIZ5T-Vq2iwQV06j1sfBfzkxjIBmPsFbvIPB83Q6QCbMiJjdYHHAm6jvsaxlTHw00PkkeBmwLHp-cu_M1dGzh0SLtih8wULvKnyO3JFPmalfD-vc1ijFd6NKQZo_SMsd3dY815D9-WG6G8Wg-dLWGZLwlhlLEFBDb5Z5FVq8Zb_fET8xJa6-X6764r1-JK-fiieRm4NCqzHU-XYVV2Y03Pxz7TFIu2A3LTCATbRmpUxlRM-33yDNn0c8dIy8FWkKQQzZMX_ml2qwO_ryGGt6UwpCRqnk9PhdLZfXEZJVllu0jJYyCBb8ZihE7BWDVxskt2jp7ruDiUE2am93Y-kk2wwdqNnP2nJFCMd0PNpWL81ptA-2QmIUKX1W7G3YB805Poj-w80jVnasrfBqwJlatnTWCtdqHDoFv2rC0ITSPl6b-Spd_rVf8Qh_T5YyBaaP94za4bczM9cBwU_BFi7tLwMre_X7VhsYbhNzMcQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">best data security software</span>
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
            sessionId: "78c757b2-ed1e-41f1-855c-f8797e866a75",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"19944RLLAK8V2"} || {};
            
    
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
