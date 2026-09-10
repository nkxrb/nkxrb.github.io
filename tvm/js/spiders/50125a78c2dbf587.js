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
                                <a href="/kw-click" data-ct="8dsSZuzaAZyU8xgEYu6oNsYVFliNZolOZymEM2TRlKGAF8psDIG_r7cXJKooCGqi5AGhQFSmlbf_GdiUQl1LFEHlhR00xnmJzFShjcmJ5W5rCvEV0dIb4l_9J04Jnbb0gTgd-pEpmW7SyQMG62Mqcqtoh7O676uVNOkFC6SlQLff-hEVJyGXpvyksvDYm6t55GoDWAzq2dkB_p_J1_Ck7aso4OmfcqkiEgPoVgrnHohg4dJvSNQMslQlXp4hqhSITJ-7Q6QcaHjkOZdksX0hB_h4lMP6EKeMLB6cmYDHQ5KYlXrnJcArOd_fLCb20cx5_8VrCxkXvZ_HI-GXItZfKstSM790MKdngLopvIQQw1cGfwF01mtfK0lgq0G5Gh9otB72jj38pRXi8qqvYFKHHjdfPQh9YwDoDM4aBa5OMskHDnPTT2e_azTb0vn7VKAVIFOkammS0ehyTCT_251W902cdbhZunJ60lA1gEwPF7DS7Pyh-ihxR9YjZGvSyIwKTg3Iwv5CRwjgymUcPrtWHIGFHW20zJh4Rjj-J03p9PtVTGkjWk_rTsGtFgP2QvrFW-nhZS_tv84jbDRU9mBju4VbColDevwC0eDHaKk39UWMxDxw9gqF3sRkMIv6_bYVOFZoWcBsw6Vot4dILXLaAL2qmVs3fQpxWRQbljmazXNFfdDgIXUq-iqkdY9yxwf-ohvHf0S61mn-F_V2Y4kUdg7a9OeLIHhcCx-Gz0jbI_ofZIo19yGzS5wqoW0RCW5yl4v6dRPUNAzNkWGlWYPto7PiKyMOvMpnmLAt_mQJ-1XjuwrH4zThWuUZ-eljyubxcSXSEZNhaEQw9_PJMJ_H49C2dGJEeiwcZXFHgfKJcmoe7zZRBIiG8XZw-7BQ4KJzjLDH2C-PMCWs0XkqSVLSvSMX5hvJWl3MG_KfIMxH64AlK6IE4Ur_Fs4yWqWlwkDsKupCU0yu2IUwpUN2HX3Nkjl0tOiMBtyQZgdTxninXjJVPZZPIROQH3SqH3ROIsPkQKBAJRTHIHGtMnnQUMJlLagsx19FPf8NddHK-oDKKhW3dPG-dU307oaKsCWN0ThZorlcpJrgHNfrlJZTYkUPu1RsUlvvsQQs8nUbqfIFhDhUrssZaRqc4rb-6gHe0nAAEVzG0zfmbwai_D_EGUKeYWLHjv2Js6gtkaEJFYL99o2ZpqZ72D1yb-TToy-dALt9SFx_modPNuwU-qEiFzHTS2gT597FsGGCOcD_sI-3kLt6C_XkQhcW47GadcicKCJXS-lCqohxaXC8KZt3WFbQI9QVuml6KBT3m1BIx0XuEJkFYMHGxrfkj-ytCjXy4nLcXFGJMDi9-q3ElA9KO2dafyi3JtFN3yvPgbNG82-FPgEB6YGMrH3LUxrbB3iMXNFRPvSs99DYCNueWQk72ZPp_hCuJaq-IPw3amvnRdPicpOXbdufN09Ba79AYUPQR7cJrekWB6hBblZmqgQS7wj1dkHYTmc9m2_nhL9G5_cRg4_1lAA6GNHqE8vQ_575GmBcGC2COLWeZMKkH-68xqWIc4Sfk7xGuJ0fN0QFeJIlV-wk8FWi10wu17G3_bScvFAW2ZSD2ziXcb64G-SKYtspat1fbd9Vy879bEqNLFftiarf1KOm3U08wFSiBYgtXyBkQ2rG0_P-kROO42XAPdJT0QucR_L2GT4iXjQUA6kubEwQpcfr6J-Oe3WaZnu-3Tskvej0tytX_3MpKPZ4hQEnEMB718Le27ex0xj0Ef-kfvhYsfBa2pT2zZ1RLYDpjHGu_wx8Q2vIPEn7Dt1FlWdN0RqOsyJO_psvZeQHbl_UvY57GWbCbDwFAU9yG-PtXHchyRiYIOjo-w2EffupdOKrk0mLeMEiPCUeOs7G870peSAqg8Fim-fwS8uYS_Nxy46C4Hx4f0yAlsO6" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="bZRbpQvKgFwlOSY_oc4Ya5BDnzYYhdlupL9VcIMmV3hpXAbFaJAACS5KyC5dKovpOVj9Boj03vSgkEu_FjoLwmQsrht0wk5UUohm_IpkZ3P05A3fT7-xyVOhQj3qKm73ak5nNC5orpIPy4hQ1VHRYaObkSrU_vy204jRop8CfiMGnzLwYrwdlJaXs9BKzGXsXahJD9N-xyhq8_BzRuJUb6yz0aDSZMK5Y08u6TfxpIXBcf_7xNw06Rkqs6eieJblofY1CYi-XWc3fMFQsDp0Hkz4ZNDi0L2HmcJx5bhSTFAfe4puZBp__SYSE6nJYkHBtd5GROJEhIE-DAMI30OaA0X0apYlxF8S2zFUL3pmBbFtsossH_gJGoHi9Wn4BOh7qO4a0AVXz0amoj234BrnGOqaKgIBUQA5nYcV2_eOwjHjTpM615LOeHqvV8eSGbmvhxxxgVbRFeKgd_ofuA50BwOgGMR_7LstAXzoIjE3nvMGood6bf4-fIWz2IJ31YECi9aKFb6zjQ4zWv_BKUbt7AIJnPgpRf8XyKsp-AeRMzqUOC4YRWv30YBYEJ6-sXjToVhM9dpbImm1zcw9j9HeXeQJ93uvnW80hn7DJnlmTwmOPLhlb4bJ2e-JbuDwUMoKwRgC7jskngC7AQQiMtdJCDHlIDP4c1UErbzt6lP2c7m-WYGkU7Oajz8Rlhahd1KK1r4UGDgPIhb2mBZTORG-DGbMns-MQCd9FcN7Fm_2loFAvehzZ3ryyy-GtwaOBw8sHNUX3cxTCVfy-wcZBXkVbS363iudVbnyNUr7m4iMW1LuD0gAAAQno_u-9hmS6mFJKzJo_L2AFYvVLmVww67Ywl8k5tcUKL1TWEPuYDovQxZmZiTjpWIrBve3dZpaYXzjLma_szfjfiZoohpoHB_qd1eOUEC7exKDNwqmKEPxGkBVv6N8iwOSKCxmjzYby5TbP0vRfN7EgI-ZV7o5YsN0Yq42viNKWoG25cJ7xVvGvuJ5gk61hTfyWLRiZ2F4hq5cIJFNT011dL-B-6ZgDGPJ_QlIeuIyUXi2HWoH7PWPRklR1285pVIyaqaH88wYgNLntc5pZ7eq9bn6KX3JSKr1TU7MwE465QILSWZ6QLUJN3JcB1Oc5IzX6BlzxV7oElfEPMv97ZHbfMlZaKvJsaqF8te98bsyKHH1uyoQxRxFFbDhMJrq0tDtRGuKWQ1rRJ-gh4bTjyPWxipXSqYU7HzggSR7Pyky4wo7FPdLuyLKr3EaH5TEBM58AWZhJFdrJzoAMRuntDyBKISIR-Cv-3nPFLYpazVvrLp_WbTweeWXQ3jAJXyDYrsReT9KKSg8qoJUT2qQupjwl0Y_1ehTHN2Cotx5O6KTs5xj-rwMI-9WYDsMGsvaomns6EA6DEf3NcfHnAvynEpo9NVOBTNcDQLzhVXWlZZb3-FTorPxfSDEmT1CkxLutbvt318aLIKTUamy4hKq4DF9BguALBmMC-UfdfS-PFz4Lcd26zt7dFVzUJ9kQ-zzCQJyQ7Isob4eue-y70gqQv4q-WDWuiNBnxWVE2sVYQv1pSDU0pgsr91Kvo1e6-R691gl3aW_xiSPnf93bsD7oFGJmAFhUkoV9mXTmLh3sEaH3eye08EUZSWnMPeqr7nWVPreENZ-76z3JUBBmSpZqGcY41-QCtBA0bLT_FedMIT28jE_jbGXPdo3hbtJe1IUNbws-OelGJfh2Sbevg9eRSC9lYnxzl9H-xknXtKRcfqZT9N9-DQX5pLTwqydB1GDlkhPWNw9ibxUqFzE2ts3aX6qLc2puL2GZz9-8VKcnlmO6uxNRlgRZf-rvOpD9X2HGA_c9wIdzeGtTDpconudWgdV3e8ljLJIIwnlK48ZvMAw0mdcXrQtU9fGyI61UUYDiMbimU-8mqgFp5ijxFoWFM-sGwmeWuNdag" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="QDGrFgUQw4q36VvzxCklVYqDVH5iQbgVk51xwa7tBsCMz-sfQ9Xexdkgk7XuwBhAqjdNoCVpyzvbTg3CxYYQvixd5kkqN2-jSkubAlypW_seU4HQBLke1ZQp2t-eG6HLEv88COcefcJwneoPYyymVAqCnV_Bh8VHUeH2pD-9-ig3mZet-1c70wKt9fjQ4LZfEkUe2CbzDBDFbbXujSYHX-kQQ-kwsrYU2JtJwJ8bhye1cgDFogju_5xOSYKJxKbUnqb-BlOew8l1MADZ77RxSXi19HbaXM_08NdNz_z8FyXWX2ZBTAhmweWgQIDr35zulX-HainFhtF9Lg6_J-lTlIWIOr_Oq6r_-grMwTzEylyskT-F4Rv37spiK_9V5xiWsWwWgXrzdFQRleFOc7TXJ60JAFyUyZj0mS_LclSV3dENB3yb6nejapaHyk1oKiSaTm16dF-7KXl8YHsyKyYA1vYw9PpPTEBkbRl8UtotQHR2pZ3EEcVl1ALz5T92cxvXnR-z8RTBDhjqVDrHHMf2Etzh-slKTCiIw3AIwGKCy6N4zaK9zytehJiZ-ID7PdYby3r-xT_D3xEjMZ79_6qKWzr15WleDDl_TOUejoSqU523kqXsO8ynuocs-IAK3fdLCyTDTcpSjWIQ_fFenB-XVz0I-VrVYd1fzZK7arKkpsIF4-dFCDV47N3qHbTVk9ayQxXyvNxZxhBgeLbOsne0EnS16DcHEo3ZTx1WwzOTEbefGboIPDMlnU8NRF8I3qOSJWhGPQWRda4DQ9l1jNq_qVVyivsTd5UfcM-WY1tcj9Zo7zVHUxvk1SvDCFkkhLXyZzE2M7fosPVhMyHGE1iw0nqHCL53Tn4kRJBDzRdEhaQFOO4-S1TKMXIlTqji5pu5PRYL0zjy2_15bCrB76qF3eIaX3y-9N9BpQoDA6s-7UaR1vvFBNK640vJaEoSbttSL3ImG3oLukiOBQiX2X3iU6Ch6PRPShdv3Ud6cWw2suEoXQEvkFBEjtAEJfzD__OgzH0Z9ftjUAK5yFeyFRZfjhFmiDYrEhq63ks5KcwspqoFNMI4j_JAyTRpGV000I0LZ6zEKhk89LCgEJ6UDcKzddlg-qokmfmuQj21Ecq-CNTrPcH6EE1PFpyVpzPZ1_tClciVT866COJsv_8i_OL6JekHCyEN1gA0wR-BRYZpdmtQkLX4YiJ-p51OEKjoFQaUqf8SJNCbr4EnaTpsmdNdjbUe-ASUVXiNMakzsuNHAQ33M0Kz1dxH0YFxdoS2w9pO0Ytpu4xdoIiRKGfQ7ykvzKe8ss8cF4afB_ZDzoBFXOsAoX5cZGviDMTgAMzv49494qNERxm0l1P1eCp2edvzKxAn1tJY21olS9LOfpsdMUuEzWh8mVeCK7K2QS1mLNVaHjxnDTKfZexw2a-Ix4O-nsXFSXzdZAohXUklDnI5Fl7Go0KtrSeA7CCnn1lTsPaNGoM-wNRpzZPY_fnF8fi37hc6ODzoIPunI_jfwWi-Ttp8NgN7fWq5W16xqbzCpFp0km77Zg7OehEaSv7HBQCWAiuW1ijYGPiCnDUpTvQcPB2ngR-vVv_ti4D8a2_eQERRD-vg7rcyOX8yLDkp0nZ3QDT-nJbGfsePkbRzmTVPmLjonVb6ZeNB_aUfCKqDrMDyiI-CELoklCPrCH9vC1kwGNKJhokAu98Y9jub7eNwHhSPFJmiNZc9G7_ZeP0cHRABVSjtoXSQ218rBK6pMkagylBnR4WX74gnxRenOIb7aN0uvrPx3PIhSA1WZr2gy_ccWgaEhtOvL7ce32ZXbsTYNPaMs89t_pMc3KZW70Gqya5dnB1b_7aQSd3UuBA1vrXeZR9cOv5VPwgEaO7nPfW1ozqNMvO2wXccNgmZgvmqaa0jpY8Bjrm0J_2BB9EZC4Gv9htySeiGBLpHloB8tswbrMvJMs2M5ZnCHQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="JMB41w0ggGZ2SXqhznSqnZr16U_6y_d2gTCvaSjkf2drnmwo9ouiPF6cXYFUiRo6B5htaGIe0FX68gx4shFUJlT-mDXO_O4mb_4yRCW_RUXSQXVLHq8v8qtaxmX-ecXRhaH7TQVYGmHgkpNCPh2KkNulgk3dundXoBjirTUb3ZeszKJ7eQ-EmyAAufYIBDh4RlqOuKAvWMGlI-lRSi3A1x10dYAYb5rzRJ0QUoe5vdaWjT_TDQj9NlNNfoYH5VMGuaRvCV2kJX7lwY7KJWK6aqBW5h_t5qWl2a1NvFVDbO0nTu7FUcK038m85bGjEyqrhS7gxHIjliqkbbzbOA5Bb_IM5wwZYjy9T4kg-71aJRxUb1_N9qRsvZJ5urbtvAA0tRFA_Cl_Rk2TZrdeCiQglkz-ta22_14bCp_ZZmh1b1oo1oLXOUU7Xc2KD8sr5yR0dpwDJPElmK01SZ30eUI9kf4uEQGR1xQ6aAHy0cx8J-ZrBT1XTwc6J-HEl3mCxP55jqiakNychGYXvxhPwlH6QUZGh_u46C2fTZhT4swuk_qTvW5f5ayKsSXkwGBwUiHmH0ELKHZ2KIPZosSejKri8iCstwcQTlHpX4vw0r9sBU2bhSsP4dmQZKmTXn9bk9fbCJaWRDBqQF3pfY4Ql59CpvFVISwm_PCMjnL7oD6zrEqXJsbwOfI1VNs-multxtUHzcb_LN_UkZCmqDpGhUNWRPj1wCTKvjA19TFZL8zYwgp-RilsgW2015wHwppezuCDC-OpLKSuN5PdD0JfqWSZxk9kyxIQVjDkGXJeeuc1aNS7lPKIIHIFCTWloEYixfdQgfxZYWCM4WSkDhSSxaeTq9TqnzWW2ktdjCTDtQeaAjT9HS3B243OgnDnJdK0XaUzG06w93K0Gq0E_KJDfjE5nCoK4K4kwU5Z2B1zCSxwbFsxVrxy-ipGKpR8rOq7TZa86RbH2lZJsibMDtyFlos7oMJHtjHtStZzsQoH-pL5XJD3hBgmyrRp1IKgPV4wvGD_WZTU5ZdM8MLiE92spJhkiVqN0GZaEHhm9HL2VBUsxAjydXnfnYAnJN-Bgju-K5flP42V1liCziBbIK89YOQjMQrxaE78uUFwsyxCJjZ9wWcV-xzqQc_g3V3oU35K2uJbzJJIfFf3-dpqDGpLJZpxTBCLIUAgo7VURbg6CY5JDM__hFeCLX72tVtvtvYuJNmwnG_mS4sB9Lfe03No3ZiGiotRWQQHFvcI36A_c8Tn8xZ8OzwyEDmsB3dDqdndjd0I5mtJy3kA6chWQzNCmB4JJ3KqIdvwqqjo_4o2FMNw50R0Ff_TvPzNtCaquy4sh7pUlHOYGx2NS5cLcGd7s9Z6SmcwkEf4oTXryCLiADd2I1s2h3latSbx2jh5x_3FIyYNNrC6T-OLezdcTpAkj0YUA7ei8qOgWqEeuzEO2CxyDHQA0vb_9EX21HKLAdqLc8psSPsDNg_h-zERbnPbaqsyD0BGr3EFSXoSJ9sdEaHWUmp6Z0ry73_T3V8cyREJkWzm_hzqsQTIozG_8tO2d8auSc6kIBuPA9FLoiCpc0Lf2560ZXX5ottzcxpra7ANTWEiDK1js6xj5SZG8TX0PgFfe6f0b2DaEy_UzUzXGnuDMUFwnV1hSiPqzRnRBgF6AY0nVcr05ns_agKb3CyB19B06HhUppFrk8fU6akEa_rwMAS46vf_AkT1EI0KMawt_DrjB5iZZ-TMMRRoaAH3av7oDiOyuZwgNHSkJTsZL2ofeaDQhFLTfOvEAJld4nC3-d2qVO1ckJC6s-Uw4qG1J9M_Vux_icW2dPGV75LHafs6yQ3sj9COYmBRx0eo9vZ622VNQS7IcZnLBsO2QWNQ9F7QWD1zFR_1t41qslyZiJcOnhbw4EvHjPCRxArnqumPwU5QKh-gqkP-RO2qbSoPRg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="QuPT6g8-xf0mhE62GKiPQi4vucK-L_8wIelN8ZgoX1x6IzfCUHDr6LmaW71utNlj_usKyxSj0V0w3SPIWZXn6RHCPLhNNE_P7ouvf1umbMSXgJWiEGxpCWECkogl34eLdCpypMucoqL7Vc21uQPw9tFUcg6HhuRJy8DU9GD7EXeNw47WQbjBAOOQrujvwOSqHaEV0djHWZGvuOfb4_LGliA4nVQ1VWtHgDQCEVJpvT6Z_73ZQ0rEqc_f-qAM1q-1_DDrUK_NRuOqn8tvjvGl0W_GVct0Xu-oFFIyu8_qay8Kdr3ZrOAJkUGKaQqf3V6xpKu-0QXMIGRXfyzxnKNuw-fOfssmGAN5z7hW5Obb_gUZ-HI2sXHrCa47IYk8LSEvidFcr9EI6ZHMTOoiuR_JZNzSz0BMzwGZ_an2YRehVM3lRGbKxKRyP5LzvDZ0eAJcDTLUEAmMGzP-mmSCuUrHKMjO71IzbiCWoB2Pd4xWcp59qBtl7NgopfiICx3KX8D3EoyKoB3Kolmbreu3wLE0f1SfO1j6cw1hwRAmqjpHWWkFpOzJBUsePzxT8m68Frml0BXwz_J5PCqJvMelYbEDuRosJ5P2wpwFsXXbXwuWkUAp2bI5M4zjIl_u8QG9ywzK2pux26XcmGjhnJn1wfwejyH4SZaY30mCbr6ZJ2tqSeTanGMmv5WNAfjn6eCgowLPk2VBEpUfAeL93w2PpTnci0Fhlsqs-8UGJcTuZ2U7zC33Sc9YbQ4SbQRiqGjUZ6bPetpxLgvjr-58HanoClWaD1Of6DKSSXr05lxbOp8Ucn763EN-bYHFDuaf7UjdtOjPHs02bgB7vtE6HqbnxL3GLw9iHjsXF_KI7PcD5n8TThFXyYkyl3mrs4Ot2MNHmoLP4Mkt-syf4d1E4FaJl-P0ZjB3fVLO_rso4zC0XaU_Tf-G0yTfiWepezYrZ1Fzd3-L4bBkuKYc3pZv8ysL3tSpxjhO-FbilKua7DbnJO0m7gg65PZPYtxFhf01HjXKhWVfrrOT1BR_N8xd16TO2zehcZA2Cb_hB3cAHcF9ZZsTj8iHP4-_MuIwhtRKd37bxDkCc1FHWOf6Qbl6KnpyDacEgVo7mDUjeqfDDbOI8WwWMxxPTX0gEbH9nrVubhak1MtUsgoX4dH0g9VxznWm9GGFoWieSe5cDp2v-O15fQo1zbythOWjPQrjUdGUAgB-M6glpvc5X6PNArBnxhmvFj8s6kD0e9brZAQ1JgrdMwKypwowN7byRoQsudS36mQ4p7T5_DZsrp89HvrTYGrRBQ-HrtvKUCWihc01p6fNjix0xRzfZwv-lRW8BU73Ozn2X5mdZDvCvHb3Kma0B0Wc5-RVTkt7Au5C1ITO7r7G3FzD0zOpF8gDPooRibHi2RW8_UgtM55Hui7ydAFUy_LHUvXI96yOtcdJsHssGLrmeUhv5Szu8d3uCMVRwQBrG0zozqGnklH5TNkNPtB0gh4Y5PkgDvZlJP-NPXoeyAWWVAzQTctDA68vlzqHiZcxzGYgJoW0YQjcwv7TPE9HfMMAkE_lsAaqLG088VWbJ1MXRJLEYe80Veb_7UJFA5AKryTZWQX6TFiGt4mpbbboRYOcdKGVKXiFxeYpI11TodwTEIE5rwpdXyXwJ6pJ3qy7vPHRdArh1WtH2ndORtennSsB1dDtKQR81JyTD20A-3unNR7LMicPxM_R5vjZsGKnkf4juXbOQd9ZCHYORBKC6AUxoFG6md8proluEp06sJseIsLAL_BKLUqtIHG4-HfMz3THvbtzuadd87AHvl21md5sCbDtKH2zuDgFK8CEsGu36VtQGyvJs8Woa2GR79RHkNHYSQl8mjgtXKzkAcFiBL1rXFFlMLBVf0WtNQmewPZHBI3azcfHPKbtxyaELD-HV70T" class="dir-link" target="_blank">
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
            sessionId: "749750d8-ec2a-41c1-9048-4e43efa921c6",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"7TC0RP5LA4EKA"} || {};
            
    
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
