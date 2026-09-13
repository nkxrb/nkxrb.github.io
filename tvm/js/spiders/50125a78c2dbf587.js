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
                                <a href="/kw-click" data-ct="stUN6301wK96uMo286ZeeY0E_IvQFlj9tgMrGBeKEUyLfDnhbhRGcpv00LzcfD7duy7x44q0XZDS-inmY1zdU6_Fwkg7XG-sh4ths-750GZRnfCdKx52SgG8lRIwIPDKOYwBH4TYYAXtHAILHnsvZjlcfiUSNzdltsSPfbSgarDJkZ2GgMX0to1OaBoyDflWbEzmUYVPlT34wJK7UGNTrRVCH9lZkOyjWTPH2QKjH18IC-PtxFJXoewyC7bPRn8AcFsigNdECrVV11sJm9ahRNfLM7i_m-s5JRQOG97MccQ-lftAztrUr7kI2VXe1nBK19v_fDp8wTmFd03H5LyT2r9U5BTEGWZKV0rM1_7zbGzFqToy8MHfaEbLAayp0u1udXutGZLRDtPS4bLPvboxjWbwrPsPwb5ladAmW4HTLQX9s5N1eWe8NbK_-6VhAW4rIWkfatpMIuQ8KDpKGnoGwPesHFyM3VwK3o69TcX2zfByabgVMvx177zhZH_TKO3d2YgLV3FkN26Ap-gqF7n0eLlLlKrOGZsAri8p6CboytPVp-OngF94DfYn5DySgtVjVsnuoPtNAh9tEeqYKGJsMhnhYgc6HYwCuTbmHBEPJNk-j3A9hbFPWo5JcYEJdPkasaQ6lA3xHMyv3jVwzMruWy9U4wX_MkD1xsrWFl3PreFf8nwUYWA3tRE3esY9G1RlHkfNphhhuBZGvSDY8eWQrcuapATvpn7WRuQnXjMFr5C8y3Qhat-Ul5wZ-dNFFKu0y3Xj4jvhHA9FYl7bzhollgs1pD-jdzQpM7GJ0ubsf8cpjr0Yc9KYHD9wGlUgcGAOXJkLmW3pTE6rcR9AX1ZhvRGWqfyE0iaghLSlQZ5CdB_Uz01wd0geXpxcb06MAa_e5xjgB-YTmf7h677ipt0IIGeZfRPT1W3U_twkDI6qI2x-WCe8zijPEqsPinvsKmBr7QT1AJBuUURS2zXZxCmcWoucaq8nIXkQFllDH5AssAywEmjQU-jL3tiKC7Tcxx5ZcLOCgqwCMOoPH3Skpy9Bi3xAqOwuTuSA3l_fAEexDcHNd-B4hV61iD-XoP2lnLZCXq3ed0muCG-t8yR4Hvr3dochEVqBH6N9RK5KLJWsoCIZObnFPcoUUyQvJCtnv9iS5C2IyPdnqJhCbUH1eTo51Zkd9koxidqtZYt0fiHvkwB-FXVDSpvQrubbQDxQ07Rl7jUIK5_PEvlJXgPwCyn7AXBFD0W7siP2ggInpcZoswB0EOdTnzzBA8mk6jgWLmyQNb7AI0pbGWtRwFnwXDYjYnHH7hC8Up8PghbbsAq-T_pnLYFIxjuxtakhoEgT2dh7NgWT9lnmaE1Wgyu9O7LI_-z5q37qfELVYIn3fNRjEK9oRtLQYD1dpQ-hiwxW0_kn4mRbpzA5EPGunOckkCy6zkZLtn4CYwmZPS4tuYtqu0JF_QwtVjBcLNNk1Tr33UskBQ9n6MvChOj0_rdIy1xMWVytDZ7SacCyu_5NcSxgMZDlPcbmMUZ3e2kdniUk1d-klzS7FvsEK5OqU6ufE97DZy1dDJyMQZ-8rXt00K5G9kqyx3uL5EkQEwJu9P2gtOjz-43cQwCnQj7zeySdaXe3lamkgLED8lROCs594Z-zfxiiD9pRJX-Q84MR35ipL-afEZ2-SmlBkaWXhOerfqlMkqPoG0oWf-ruSt3JDwuWfyuxP6SuJCxkhrBMlrQFC9OtiUQOdbmRtfqhqVdp-7VOgWG8bEEZaleEh_EPXzo-8wQdWrnJODdfd9w5froiigC7UHuYk5G-ZLAL0LVTaZhQ1lD51Ww7XNTdQVx-NdJeygNT32bByjV9fk74Up62RS-vltbiMzhHHZtcaNMslxEyyWCmwLSYYTiTuAQJbCn38yue59WtRA24a62LKv6k2fdKI1HV60tQFgJLqt7h6Y5F" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="QHzkeoarc4jv7J_jutKrHlZ843ZGmRHuk_xCWMHPHNX9aUH4-MHUfjrniKjckx8UC_tNVTIbQyzPr0khkjuRDWm8kQU4o7fUDQdnkexVy6ZXj7Zz0HzFZ-8sHuzfPPhJj1-cnLj5TSd0-NhDAp7pyMoiNGDQRi-VrjNIasWNz-bdlIUjrUMY1FX8sHMEyFTle_7-oUN3ZHen_Yu7G8V22JA1gIGOiYL1C8uUXrkYKvR6-4vOe4bpkA0Pg1YKRpjvxdj3Qsko9J6fGi7w1J_9mfUqaV0aP184VTUkX3zt5MxNlfn0mh_6HOhXj_Hv_o4lqA59a-tIfys--38jUVlU1vFSPkAI7Wo4lvYT8fdIwIoELViE5zejb5fCReQhGKmIN8-Y3PIjw8KIxQW_QKUXZ5SAD4NmASThS1LFUN7XkecrPUIDCaBCmRfxslTSTLEpgwXVVu8Cq1QHhf1uv_2yXFE19iQiBd02D51m3TZthsEnK87oxTlqkhcJCCVwP4ECT7Vu8BwkD1CJ-eQAK-cqgl8Dp8bEC6jr-zH8HdJoxdSs-3QHkdA5rRKo0duuuZTBgGNBd3-ppPycBMc3ByCw2cnS4A6Eoue3SvSvNVCsxoeBsdrc1VAFrxGLmhPULmyszPszSHEW73AI10xv_sQj5jpgaGnNLe2jJxt0QY9yKtk00u7HQ-gbYHkNTCwtShqVQoUbKtWhIzhSs00keNu5fknM0Avp2bDVlWFOsVb_QD18l6O3yes25EfYEdn737Y5pYCPF0q2-prg0mshu8Tuetgxij5R2nCyCHCBcSapj9S8rS44fSgTBiMiFdBZ-mfLf3S0Avu5EkcPi1sdd6ivoP4UPayGAmJhhQ7kME8VHOanNAAR6Kr0HESYU3oi2A1F4rp_5XCC1vJgoB6fXypOvX4Hj-BMVjTM0Y8Grd1tdsuH3t9TZKM56ytQAfbv_ueci2Sa0eYGmFrVjmidJ7kyAQa_kUBma3MSERR5HHO9YJ3Nd4ZS57IUFPR4Z4mteWR9jEHpoELcQH7Milm2IKUy4rsGtEjWOTsxlImwrQJ1e7SMILtZXQvN65LDilZXNMJ0sOOiV7vEM9l5J46U0JrNgVh-ePHIV4GkrFmvb39IWvm-K6VTHjsLIKie87c1yZ5hp_VUtjnWHqLkmV6-lF3d5RqrDgiVmlWi0-tWk1_cVhlD6oCQncvpHpEc_pY99qDXAO2b0Wm25CK1hzVNOj450n8E395rXggyGQmHSHsHQElKEGws9URFt8kSfSNaRy8jwkzRwXZXOKLX77DrgZP0mPGkmC5n-qwM8Tz5KiBy3hynyef1haiwTVYrOUG8M0TKdCqBWQXP5b_pXrF8jWhMLMcwoEkfq09KmJbn6QDUl56Jqu5sa8iS5uUwNzr8Lv_qBEURMvOitVcaNFePw1s6lFT-xe8ZGg0PMzxyPxtszjOfKHI3-wl6MatQRxiLUGCTAaiFfYRNoYezbUohIemz0sjhDuuDnrOXImodfYiQoNdh2XGAVcqRrPu9dIXvgLFIzVh_Y0cQF1It1nCyn54SXnfyUKdokvYziVugYIgeoiz2mU9tqmGaKjha_uHPgKI-XhxQL_wLHW9_7hM4tt4zOVVISWu0B4ulQn2-zTWv_SVo83k9CcXM1DCmEOiUtzgY4Ini0YbSMSq2KpvCWccqfpWteDT2cn2fdKWH-2VHZGxSCPpMmHIyza2_faQSLGtM9ARe5HkzyJV9cEhIeVM2JkQAxPd6eB_dFFMToMlJKLCe_g7tw-bcaFQZ5aTQw5KM1_uX2MaE40CxKqNQcfJSYit7i_Qz4Q-RsMsfTb9jz339dML6PhXfo-uO5xb53E37OY7awgxe8rnW1XJHz_gC2sq-X2Is0614vSaCT7qfGOiA5earWqtNr2E9piSjpwHivOw-JGWk8tRLGq3bkPSzsrKzXQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="nbbRfZog9KrZJrdHfS_osnMD1I_V1qhgEzWVLlQSIOHzEQnifzPMEE2jjIFRZXBJZuUbBHlFGKNtiwylxba77YN1iBGQh38cjqfqNL3lvRZOog0XBs9rEBcct_-vEXahMX727hjzu5yU4GmWAaRWo_agVUdkK0KQLnAQK686GjQHkVRhAls_oj6Dx50i3Dp-bxHPurETkfTRCwWalU4QdKogk6rEQswu6lGJOXx0t60aiChKFkx59Vq8yaBgdRgKA7oIjP3wg7Rh87--wtU48gsO1Qn-V_8INQSzbs_4ntZaEUjRi_Lpr54DHyMJs66mb-lsoHTiFak9pMnCeZdpW4sh_uGMmsT0e8JpBgeYcAGX_C0rfsOXWG5Bg2jG9lU2crTUuO9IccaqM3SiGISzvEFnA4EdLIoNiZX-PKS-vcptY9qNHHrSM5ZzdSuAONKnwR3oQiSTqCE1OsMDqkkpZoanSumT1nguNmXmig-FdMW2ApP3nu2XuJyKYgSYxQwskh4tC0Kqvs8YXlxvXyIvXhFe6TkEN0S2ZqzrHHEaLOdrnQ_P_cio9ppbxLvg0Jsu4GUJJ4PbIAwv8JXh4TSwVXjW_c-dakKucvf3oLUm--kC-SFitpeq_F_1ZjLgZq95Cat24P_Gnwalam2DCfLbbFvyIhPVCo_x2VaOEiGRBtno9ipWYO416g9FY2n5tZCPrFIUz24E4yHmhI_IOt2lY8kROanZx12l9MFCEw8_z-lgqk5Qt6NeL-N988EJVGIlMsp4I7i75fbsNh2EFkUThcb9j6QPrv-8IPWAk7Ws7GVzRUmIdFFTFuPTZNabYaG3a7bGhIQGVDeLH89EWybmQRU6bIeLquLoSMGEJyIK9bBGCpJUA-DCfL6SQeD7TmIjul3kR1skPTV1IauNt-YcvlZs8XCWxxC72JKmr_42N1Hu1U9itzreKZVeYUa75xSknitt0Rx2OMXZcOJVO01VtJVvi0LmxKgF1K6EqdK3YeJmkBVctDCvg__xs9kI2cme7sIE7-9dNGR_GEQmpnej4rBnFQ0qwoWx8Rz-TwjviOpyP8hopniSqIkzVwy0W774Xo2V78lp-r_llI1xjSJxPSGudOmTrCXGL8VNLeIkyMyczyxHA8fYWrtvhD8xEH0k-pJpr5OGrQm6E8vfNC_Dpw5r9HHGlxMRksxRGUzqtBw0fqxyB0zMjRtGnsraeROHv_cMJR8X3D3bJSse8nZ3YE3ydvZDTF5HkTL14aQdEQevAhsRheSjhEZcGYYkVNAU3VHZW4bxWYk1xyDI-8xgbrBDeHPLe_EADacisFBD7K475kuaCK5UaxHj97IfK79bSj6tBIG9Ish4mwiyxVyBjcEKJCa3GCmxxi38nwQq3zfQDczHXpjuX7zKGCyZSlxVwYj9SwVZmX702wwM99RhYQuGXgpB7YoMYSttrWMMY48fLN8jLJk10nBPJvEP7X6PmYsy7vaniG85ZiKHxYtIr5oSdHSVKxmrSjSbyxEigfrLpxVnypxBaCaeJ2lWTIVB-cSCrf00MtaMsjlPqzhkgUasKJNBK0SdYsOs6LMb1rMyF1PvRcJ4QMXZ2XLQLk7MB_6aTo5ruP41gAE5SC5rhrZTyywwF1Oxm7hP6KoufSG9ycjVo4UJD1nmchFAezedCs5aTXiTgj8DTvVofh9w5NoEExcEUVqqTmqRaQx-AGUlzo4Kwnv4DtY4q3QAdBcgrvOB5kdwSvzxFzLVLGgZ10izmrOOIe9gggzd1r0dHdksl-YDPDaqxi0RBgBHPIdEQhumZy3Qo3kzor6SF8fHgQ8dACL-I-PxlQFH0jhNjX6Ohq7DD8UElcdNQjPdi57sB3PC8IU52crYhVsDbLuA26Exlo6sROnufGrqnhDHX_gyzshHF1j98HuKb55fHnLFR87x5tm6MLm_aLZ8h_sVaYgG0g-PbvoPmogjyCNWqw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="36dTXRAVDib9pEO9BQUJqXHmugapRVajV0_Akm4B6J33Pf8MZrewIYhBwk1aDV6zJE26HozhiDRlPFib-kSJbQhYsSyrefE-OihgITWbm4PxtfEhvzjcjOOPQJe9BOexQoNopRW01i3WEPyF-uk_gYKkUV9FafDhbrJDwzlv788cdeT6dGUxlfydfzExRRyDang7GSXUl76WrbZ4E185RWwduc5GSGGkIn8adcCQlVxAJW2M1J1mBlRy6kYT_2ImfxPUAgNvp5s8bc6CHlTN2dHQ47ErvsZAOxe1E9Yk5yXHRX-Rfol3vHK6VcAuMcpNy-7kiC6hQtAVbfqnu1wP-cFKWldLhqvhHaydk9ywoE8l53j007vYAoXw6_ZKKmkHsHYxFc2e-zG8qamHRuf647k_J-oZnKDXvpW8bgesAwfPBL-LDtGlCQ3TR5Go2nP6DVFuFgvF6yWL_o5k3C0CBBs-TWbtLUlLXz5o7ISzjaReJFPhosiXLNBWZbMe6R_05tqgJk_SCxxlhoNntXQqd8NJOEnG4HjJFr547XyVmCvlKKxiTQRHcYMJ78M6R4YRAGtT-64hyYLK2aRsX-dMeaAvE_RcaBj69oREF52SWhhcV6Rk4l_yMw4vWbrGHGiTGg3mr96QO0rROhIVbQX2DnIW-p_jL130H5GC43sSXkiuABb8x0t0C22wKiw13CvYCu33VF9Dzv6PE_4Okby1-umWn57CDH74ilmbunEAtFAtDlidsDv_hAH8qMpUvCBEDWhJDt-FUCWTQFcNbtnqZbyQJvpkfjFHrEWeSBQ3uX5DnbUm2mi7pKjpsC6fRm79Pn7KmFcE7DdC1HinZ36hiVneb0EgKlB1ioNZVFrew80_Jg322VWWY6IabirjjjWkBlhXXYYKOugaLPE1EEjI2ONTPwzMLTsqU2-KKrUEond7eCP85HVaBx3rhAJAIS30WjDDdHd4FhPFGolvfd3aqJ5vUWMf7ucyUi0-AxoDhUkVqPzGFZ4vButDGaxP0ZwMFyD5W-G5Yj-ltm8-CR0s6O0E2hmM2Ri36R6guqAQk_Mqg_lcQR5yD_9eqOY4Cr-Dr7Ys5vrLOeaegvNYrI7HiOuJRrBFctbKe3CljDKlUVhgD6E7JC0ykcTGWNkZgTnALmKiu6gs_Tx7Y0HR6e1lkccLrwdvteIAxMUHYVUx2R6Jv0d4GVC-0AwebrTcFdJ1Ymh6q3xMO05PRSLOzbb2DgpYo308knKEhFqdZpjsD8-n7LdfvRdKn_2UXsiWI0EoUXx4VIXlosSlawo0pESUCMxK4WZKy8oCyNMhoqt8HwAvs7S2d2d6uzxDe1DHmP6pZPWTNWquZmePprgOeaFqEgrG2jm_77X6zc07z0mqIMeuCMLK8eLO5Itjbez2sLUjBSVD_jg9MhOvQpFRNBk1ooqfGi7fmbOMuab1r54BHvbq5bGDE4kLfE2c1G_VL6ihg09EKcZOB_Dp1qVe7ouJK15Jivg6HOAZ18BEH-7fQiPIHSSSBcd35OnFjDkFfTvMpCKuUGXeix0urQILPXcT_G7VNv2NtaVtTWci_Wn9yyMd38AEDo3pzJpC2RXULw3prGyPHEELFKDCx4Gg1x5VfZhrTtEMBGphpn8lofUlj79w3RM9qPzEGg0E-yLATjfFpx9aQl8nWTScRKH8n2BsFU-_C3v5zk2HYKMYD7ZEbHxTNy6B9lIXXVjJUySasaJJ9s5duQ8gVtEKqyJfkEQLsx9pJ80nhj6PCHB7Gx9aF7w4SemkYy1MGZIXnkhk1bRRODPYEvgXbtEyVqDLzRNJMIKx9a8q4XmTFQgLk5yP7PlbY3zl2Ml371RFeTPufnwa1pbtUGfD-1DRp31Hees2K-ZnWFeC8fRaNJ93paUGioVTAeVkhha6wD4U2oYeL3A24vLvXRBDpnswlJSjh2CVbK7R7w" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="Eu1rRwlw9QIU8dX4NlIf8zk51Gd04F807nG0WYAUj4QuqDqeUy-bMaULMJxDFa8w8BMBeb_ObLEfckb4tAlPl0e8o7Uyt2W_fX4IAFB6cac3V3setRrl_f31o2mqjJmgcw0hpPpHjvC_v3yy6ZAx0bmkJj1DTW7jo5E90Fku4i6AZxsWXeOgObcUoyN0RrcIq4qcJFsULd1YDKWiRVo6HxjmfLP1-v5lh3GUdZBlSoB7o2amsxMSw3SbKjwXXZvj5yv_C6YwOUa0MRNSKjw_73Nq5AgVAaNY_yJUcIa7c6VGgyGk2ccEUa9kpOsoeVB4cXaZHE5Vne5rQMBEY8Mg4_VbthsgJDjRZBslPhwdr6THa68cqgfpSJrKYsYIMSOkL8rGay0A2jshtTFaytUJKsf5y2mvT7hBbSeWY9oITfSgYIuCy31zF03ysKK3Jp3ONZcWYDXJCRm3OHE_wZx4rmpjLfyfB2EKkKjYdau3akYWms_uSXyRHiN5_HxoB4ju_wLmIYgXXU2DCXr7okrB_4D5bVYXor0mboSjwAmRFobPq52KyK7-cxj5drfinX3mNHJD89flOyMXRCQtW-RPX0x2M1QbCxVRsCk0fzPZtDaHNHKdZesgTvLszAJEABS_9AoWbvAVnoJ39fncnQXf4H8oGigzTrEzqZo8zkraiDKEZRzau6V2mzi-cxYoWQekt9WetTFyk7K5ZzMkM_r9AfQnBmwYUsSh1go86Mowq5t2nwKn3lQEEAlOIoRyvYGmoWG-tiSlJXYH-f_m5K-z4JuYnIy75Jd3KhxSTQ8rTKztl9AYidVuTehjnYAsd_VXNR43gjlvlGp7tHhcDWjBWeRYkHxmPykptBzfRYEYKSu4_4gg2TMEULxJ002ESBlFklLaKZnMennBpC3TcSGGDjwMaK9WvSoBrYqUkDQoNnSe0oUqVbX9AkvcVFxc50ARCslxZpkOCZJ-qij5ON97_jgQq5-YmjpnLhEr9kWeGGWHyYg1GDsiIkdCCxQvzVXeNjlZzSVxqktkPWVYaHBR4Gz4I5xUKofe9g0S6MQFlGs5w0Kp9tqSw3pvdBP8-NDtx4iX4LD_V4lZ0VZruwLEoaPt41gItOcnf5vdz6IYx08uBvHh8pn18SuH-TqKYKGHDS-ALWDPlVlFzpBZg6i_3X-IlRLQFgRIwRbQbgogtHbHRUIf4cPHyodp5ruNvEX80PpEbLOYApHAxQGFuCcpwb_v02F2jsMTIn8amPOcevnnXbfZfvVLNZWzBVNWY-zeqWg0R5UpRTpjVZGxPNB7cEUf34kUaZ-E0Y_kNRNg8fELY17ZNucpsWOjCxy6Q4hQN-ZZLZgo8nKhqmV_VY3eBuLh8SjCJSk2fXqiTa7SkJcBt_qmpcXkytsSR1ay5T3sYK5Xot0cvZfKpZ6WfEy_c-Wys7enrDttFOjJRiQgt4NMX3gQJ-bPbKHdi5zMjLnh_UuupJLB8SmcKq5l4I0-g5a5mj7C0QNoN7504SwKga6Y5_BJjzdX5H07yjl5sr5eQQQcDWTJJBFYWJxL6OsnRG3SM8_J2xWbB0u339uOLAFbSsvHT2KBTvafA-yhMYHdREt_pVpGhKbWj09EcCaYngWgs0e5KNqaCOgGi07H6Xac4nm0o7Tl5MmeFko1HeQtqyah_kl0J4DF50AxKytRhGMhYuBR4-VcaEfkrK6-0qgnoQqwzOGGwbyKJ1NVfQ8eEto8WlQcYBLoSfE_bkt6tovNqsJVfYtI3GKgV1lcwm1jMAqCAysOS9ziMN3-aAGzvfJTARYvVK00AP9_fVb0J5OH7y5pqu-Iqpmtudlqq86jVF2B7uUL72keetSDfwYtGm638DZKBsdAZhWVTE8DKTklgwjkyN7kgMh-SteHMNa6aYiloFk250YBNDTXr7WHVg_73OoI-U6X053ICUAxGzZt4krBThn8Q-F4vLs" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=17" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=17" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "33e0dcc7-4d51-450c-beca-1ddd95c6f22f",
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
                    test_id: '17',
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"3TRAMRDLACC7T"} || {};
            
    
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
                            test_id: '17',
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
                        extraString3: '17'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '17',
                        root_domain: 'gh-proxy.net',
                        item_count: kws ? kws.split(',').length : 0
                    }
                });
            } catch (e) {
                report('keywordsPageLoad', {
                    wa: {
                        extraString1: '',
                        extraString2: 'gh-proxy.net',
                        extraString3: '17'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '17',
                        root_domain: 'gh-proxy.net',
                        item_count: 0
                    }
                });
            }
        });
    </script>
</body>
</html>
