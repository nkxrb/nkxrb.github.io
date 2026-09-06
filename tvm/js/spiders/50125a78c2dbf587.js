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
                                <a href="/kw-click" data-ct="U-wWs32WHsfttycB4jd1z9llK9SgVay3CzaJQ-0UUIMsqRLoF2P1To8yW-x2yBAvS4Nr3hFcGGW9F-xLiufmMt3LJkyQXo5HnFS8MVsBt0SSlkXAHEHRxdaAQJ6iFalTdqjepKW3bwCdFLR0ojW0eaCb1QrNn9pO8Hq4t2gl4qgE7RJDMvbr4rjoBvuLzx9oCfcQmbsbEQmUbdqTeeItwkUNQgJ80fuUNGiL6BuMW6CtGo_xF2L8eHabGH_1cdC-QiECX_PYbmVRioDWoQK66a2cb4bC9uLcQLyK2E9sRJTERzzxAjzO21PkYFL4pkckO0cZKe3cNfz5bg_Zjw5V19_lrbDo_rH26ajdi-DTwFZQad_jn1d8p-kZ1HYqmMOF8WIAwRKp5I-uoGVLSnllpoQKRGU-Wrf9YOl4dKKSUqGI9JS3hrj-kwmuJfSMF03ednuMyzERBjT9N7B1YouFFSwcHnwaxyl5KX88a7ly8-uSEgQCDRvgkYhDshqktokVEuzXGorVtlI2b5thSDfO0mQ7t4b-lFPTVDgY4croUZ5dbI8RyjYGCp078-ukBOtyISsraga0hM6GaVY5GLnvms6wBVHxss4z_qCIPwKUcxY6Y6XUGWIciu9sv2wiYVl_dEheBXsF29prbIrV-duUhq1WeejUe0MQXKZ4LrYFpkm_bJW07EfX3Fva8FMRWKNAH1bN6OVLMNjXe1lwNNdS97oVC4raGp8oyivSUSfXwYGj9AOjR5PNwwf9DrCALukrS9Q-RaFjknnfkfW-8lj0KIBSSF4TQZ4_1LzfClGNZAtIGsI33YKn6doGAV6Ahj2HIXGPMFJYaHSOSo_osG2nI5JtZHpSpLnHMY-NaGfU58mvu0l_v30iKkQzwP7bdLVhnX2VACnob-b5-RINuOQ7D_lBSLnvE-YWur81Iijrc2Gz9YlPrhvJtOvWtC2tLSGggdWr5m8PEMdXVhdR9z40zn4A4HVsfq3XqV8ljc23G8_h8p8pQSGxqPq5Q-ik42wn0AMpWlnSP9iBDhEqsb6FQX7befIO4HBiHaMI0-GFBqs7aOcrxo3Q1AmV6lApRr7HIrnvjP4rGVdTrD1PbX1JGoDkgf569o2FJh7lNQudtah3ZooPRQGy2sIdrgy3BYtdCRA7MqSaPU7j2qFHJ-lfT55se6yzoviAUhxI7yInRPH-GCtvRntItDzaHt79SWl4H8q3aIOYpvjf4lLROuyTzNSI0kzzxs6wxpQLpEBLXLLJehxbqOvMnV3zXQyz-qqkweZOP0APaeiUjHEqHMemwmSyDEZjlHwUcRG4Zx8XgDEiJpFlVbVJ4e38eSafSCa3tXadcaa86edb5surwoLp-zTCj3BeeXiNPtdWdNAII6MFmHnKj_XQis27CK0U_En6qzyH2uUXNsH2KcQ8lgcFQ5j3IN1VoyfOwPQuORaFH30cJmguEtmav2xVgtjF16z3oQddTc_s_0tLxHBd0PtpY3TBQ9GZlHTQbcg3D4PfOOrfkrRBXcKkmUeUNXXkQ5UOROBjeYm3Z3Q2ukmak32MoSRlrO_ULhOfUuRXXSp0JM8ot6R63sNgCD3_GE10YAf-TLx_y3yWm8pCYeUbZq8hXGz6_2Lvs9Occnf4om9bo6X64U7od_W20aR4tThWziJoaf6iIIr-t6YWv6NFxJnMTZztbK3j13St7_opDAsDArpW-62ZmAHVNrxLelV4yRNIonFzXBaRbY04Tt2zfP67139-LqZASU1RPgvNaYwegFIwci9Kpw0Ku0EmcI8ZufqQCkjG9xihawddBndhfEfkfgPjnrvNAUOkyyLsJ2-Ny80NJw-bjV_MONPahZVWJn3rWz1wyJBgtP-RVTG-md3PVas43-mto7LfX4r5l95cIjZlqXBPDICR5V-VVwoZoZh8gdjf0Av_moMBhvM" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="dYU6TSu_Q2z4_ld6F2fg_g1cv7ZrzddTkZ4mp-S1y9z5gnx1rujgnKMfVnU_NQ3WCTJPv4WqLVh0zpawpE2jpeOh0tP-O3YJej1eFjafnx7_L4tJyD4lI4_o_rIeQcowdPh9MsTBAf6cAhCvCXa9Lk_h3YUI3lfl-kORn7Y3ZUsa69CWVinMKKwegcLypzvhBobU-UJ1CI7pV8U8gKAIX-Dv71ROcFOu9KpXZBzQglUz4rd2tMWCozl9g-xkKesRRUGQX11D0zgek2xe5ZVHQED8JYnU1aj8rCUuYn5RvNEV2O-eAfzd2a94J_uQcGC-iM1hYzlS2CuesiYrZqAs3ahpr23fPQq0hmO0xnA2O7lfPbxPmbVj7j_OC8CdKbiByBZG-ZubLmkmEZAW9XOMoyYKrXzDSPvmioZsZVSoqimGE2eZ3NR1_mlh3IY2c0liLqFTgkYL2o66Y4hP-sqIyaHhdZKc0vJlpG-wbr5JCf9rtP1YlmlAn_gIPVMA_XPoqwn5Rj0rUMP5axGKB-XK-2iGPxV71UchtKRwwymVPTRarMDQ5ePf7tAb_TLGIp2vv5kwUYVKD_T6daJX2fvJ2z5i4lRAKNj2cPv2DUHlFuBW_ZHpqe4Mn5z4xmvbiUw87cYT1sCWVWZbZfdTzo8735G1RYmax0IJ2Dkty7Ir_hKN5yetxa2_gCjjwhNl5uo3pgVBT9urxJR1M7-TK8buwzEneiOb5-EYEzDNswdHwC7m3unNvCYHod9joZdXS3nfUYDFiSLzPMWp7aseAO-cYUNRG3xv1hjgWRxOyeNOdRD-gIV8lrl0Q8hiuGXh_tZFznH3a-A9iXM_-OYR1iKPFRqg9vxOKpIF6LoLfZWdG2iSXXp6vACHnwXNOaE3K97EYZwSh_pLuRd-mYPb5mlpLd_OlwiiOxpNxTtr29IEW74QkDN7M36J3sn4msVTFvyOVBybZbpyegudzAJeD3-1T9dh4usDuUI0HES9HRRssnF9zugfhj0J67F2XLwTVhCOtu_BATVMEPzqOtGEx4skwJvBSt00heb9tk2g2rcjUWddf5vLgxv3PPPytDN1i06o3G1u3G95xRQJnKsQndJeBfYxj9jbixtnh2MmyQofz2trCXsV_x46EVDzYc7bQjbcRZ8xpnZz0oLfaO5DhkNUphOMj3mpyyGyn3i8BDyDIi7JopKNBrqvODpEh56YnAsGF_uHynPPMwF4mRVtoFlcxDJQDgzJlajkFZbxJx9vw0UGSSBClL5Ad2FqEzwUQsep6DwMQU70mO0j4hGFbYYPgeFCYYXbMWjnlc-lEnl8q9NOGZAmkWyruwtL5o-HwZTKQADnDS-FiB9-CvEmBAqgex6E38gpp_PMgkfpZdZ4X4V8w-Ov3Oh4nLXeeCL_t1h6yjpxKBLuc9a3AXnYOKVV37jvU-lEA17Mfahm85ogHojJBmbvR8RVyzX0tvsbdnKrNnpu__VI3JRPEFwVPtizORfGj5N8cJ0zv8L4NpMeu-EcHUR4gSmx_qbhLhnFKzvbeN3xhux6bY3xzAS90AGd1PhrzGwIbu_uiv4OV98VCOiGLe0qs7Wtt-4pSrC79PSFPGj0abuZ7FaNsqOJ9pUWG80EEnhBeLWTLb11B_bLp0MLCMJNmad0nUYYW-GW0iPrd6-ZKSoPK_6zqnagmSozyuJOyxFAk6Q9EkLTKGr8ZETdQw8TI8zPk03SzbN5VLJ5j7LNX2jfoKoAejGsh_BsB2aVSLeubobLq2oqYW_mWaNe7XnUCV23Tr4xBsbTFilhexpYFSBBsbvvdPYinXj_rRqU1RP-VJJ7oNAuNEWfBkZd22JfNlHpvvTAItetINrAR1ch9Lti1qVB4J8E_BN2zj0tNkvUYvovfg0x-BrnfC2bde81DpTr1wdaDYz-p9l2CJz6uC3mWCgBICg8S4H8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="AqEprY7sP80fu7NphAe7XG5IEhcV0Av3yy3H6vSpncIKFrpYACPv6jxnypVnSTN1JIiyxPayMg7o57VHEsaKvmvYBTnmbhDp0Bms3jvHVLE_ksP9rOJs15M7hAAz1YoEj3HVHHhVf6272SdqrS6Bh3PSH55sslJyVPAmxULt2fTD4YPukkJb2hs1O6noYi9gctxCpfmXJfjowUM6HD-jtVYkOA4xDDGJDV4iRSxzFxjzXkqKYpPEbTwIl94GPogZUaV7yKtRluQ0-SRIgA_tPbVI1W9kntVZD9IE36EJPBXVN_Y7z1OAy7MJApJWdfxxyMW57jCGd-sWJ-ai_XxEQTDUu0dd15vKz-2kuCA0vzB61MeWpw5JSzpJdkm-4XFQlez5Q-U4R4GezPdFTIV57GikxiLVGXQnrwBE_bhr9HprC_7PvvRsNl1ULlBJTRkif0lDYonrJPw11XQsXRqm81kvBsa-YJsXKhnEv6zszA6mopnvPqi8G-ytYkr_cL3aotXkm9uuJPv8gSkZAzKMG6w4wcXqVQRsPh36GHy9ZBM5vGCfBCYxiz-cZ4695PWbYW5inOdi_wVR2tnrWYxPBoRkAzAksRvNSXw_4n25Xzd-7GAdfoNZTxFiNYPcR-kqVdZqA1iiT9AH4uaRntEtZg6gm7AyvzDkQEfCq8G0Qc3_rAVwHN6KNMoWcWKrvRqtw03jgopa70ZnMKsS03DU08Ia94mgGTkI4Exq2GgmJMpuKX2WhesHqCGqRXWNEUJjbah0f7sWpCrNJbRQhpYxA6rKlGm5AI_yVIwm9Z-uYqWnxuzLB-5MgteTADZ79cSV6CqhVEGwjNQSZ_r2jNQMB9ZOqTLSS7npBvHkPaUJpA6N_VVkOTsnUel9Lk39sjneLWjqyksMOC6AQ7Q5YmvUF9we9rjwUCfb1Bo80hHztGae7R-JYNZxjr7WJ2KJC7VKYHfLElrvMrMylEgnxtpDZmX6wmLP27diMIq1prBGoDuM_xzccSHb_oe-N0z6ye7RomwfV_2Sw_bzZBiycqie_-APE-CvLYH1Jp7Dp01_V5Nf2BMzkOrqFRL5vEGJ2cxFsTthwpHP1xJgH_onss46VkBsZUzTSlaeGPrPhAdJc-wTRTN0Ynjl7VXJhIiACftsJOrcEkZEVNhgfiz-pCDzpFrxi-WUSkao7KSYdJ0LP9FXACOHzBCihgNNTr8fuRBTT7-MAXdatTGRAWPbgsrQdiM1jDheQdqPerXBThUnY0FJ-j9AZe4I1fy7G6gtecxYuhBsOJWmPWXqr5nS8mIt0G3Ifn6CJwM0C9EFY_zmK8St_3XIL4l9j0hU7x61yaVNEDJ8_XbguKhzaf0Y-LlEDWr9mgnlVQsSghBJ3j_KBcNQpu-tDOwfsEMpwPKKo5ac_Hit6VoOFTqQTYbj6Alb59y4ftUSW8plubJ44XRSvAtlmsqF9jUIEzOS3V0ObXasZEZ8T5ashEdMf4Hq7S636PiBqbzir3Jq-FYAfPx7obB9qUHL6G1A3d46vDn6jvEWwN9qT1FalABtynB2AKI9XtEShm3zcPAawMrbZre2X7en9UZTrdFU2Rnog8ZLWL5aooK-23WetzVe6Y22sXhqTMWPjm4tPABZcgFPUQlApILyGDJWXJlsAly-70LfGGuLyzFjh7vZRzlCjc3bQdNZ_w2Hzhds7ix5v1zNJFk8C0cEJYBUDOzjGrHovx284Sj5HwuWCgHuWNYy7-oXVmEXKZ_VJI1L0yGX6CFcGyG7w777Kbei9zVFD50rY7xmqFO_SWBpmYYMAUuHHS51KGQkgMjX2__3GF4GQvqb1wTt63acvIRZsKZExz6kLZlYE5KXlU_S3_WH5FFLexLGk2M3Fk8t_CH9tc7zwGdf5G1n5Oo2Z5zAEQOXMsY95Bjt1J7HQbATaUaVJmWDzysKLvJb_q6fiEthvap-DT2t" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="XG4sfoQJfSblGLh4EquNlI9wv9urF-B4RbKMgzAv0_ZtotycVlMXGdMYtwbV9AN4D9PzlYw7MR8Pl-kVsNSRzqORuP7wNAMGnPzXmLHicB9FqHUAcdE2-y9ZqExRqkZRiG6aS8UWwlprEx8RfNRPNgOBAwza-_7XStEcsiVbq-lfqZD5ORY3fePcUGmn6NmOe57SDbDxr6puhjPbzLfMJKZb1TBBXXjFcq_AUJMOZACeXy7_lo9h6aH05lh8wOskB3Cw5BG3Go2U6-XLo5FNDDwvHq-qrLtQozD7jBc8PzEV0zu7ll9uofrvpwQVe4AfXTMxEui-Pa_u7zEvXb-in5BReiBZkaqBhtHrJTxARvOatSsnSorRaVr3wOcSCTEtjJ6lhBg2VxF0lxAn33-IlWTY_8G_hsrM4ad5uWlHdhwLZceLjLhRSUy1Ga_ugYMfYQcgKB25M4hqTlxliC2R0VGFqsGP09LHutCkYbYwGn90d04c5IRAEnvPWKeOOhiXX_0XnH_NYc27qOdCcNouxdQtr-f-bD5vsGpO69o7bt6vbUjMUV7UcR7HfGEhJdxWiuAaXvdbd5p8PSreXsrjisXh55UytEYy_cZ1uUgcTjY-a81MuPNrEJNWAIwxV8AzwTYzsD2GlvfPBW-lufWXpVZavA-H9TMBg39toCuOjQA-tV4S_RPcz7TYwC19vsUcCcsRkV6wqJRJ0s6lzBuBl7rWKlgKXMUxQ_WL2my_Br6-V8TwiV5sM2X7FINKiWmYC0O4fd-1lY7f3eyggxlB_yO50r-9VHFRbeJ8Q9E-xxCdbpQZmonOd1hRqGRZaCq1kfOK3LSns18p8MFJAfGh8hXaHks4qsvxoGbujUajRyxPLBuijBv0f43gCkpM6SZDsF07XiEg24c-QQda6-OeCGXlIO5DBv1zx79gL18QTlj6c4AnNn6s8ZysySqJznl6uJmnNBLPDXCghZQNiSd1bV96KgkXVLnuyarVdI-cLLTxfLzI0EAoa7xCNzWxyP-IkFL9GSap8b5Z9_ixum_p8lcvT74LYc0qPIghuvAedQi_H8UoRQDcQS3D-AXXJLXNNN9hHvkaoxMeOpt75WXCiGaMMchUshVmBffdwZ0anyxAG30Pov86cA8czPZj4xuR5U8dw7jNMlOGnK_GEv4CRx5qAahCOeR0scuhhvX_jS5QTHTMsZRqFo135aTG4EBZJOTdSkPWQiA8GArLI6_im9Qi0tihju9TyGIeXWtf7eiaFgrUimiDT0YdswD_OoVnI87NeSUJePBpeJNGVPdWDlkm370gpXCpsHX3I1bpWwAzqKf7aY4GgczEOrloDyE_DN3PDHnaE3Z-G9bWswWt-jKDKG2DikX94cR9WXAv4jIn8iky7l2JVb7VBDE1TxPdjRy_ctZjT1hGgTdCHt-FNZRLQ1VLje668JbGri4Zqi51Sf5u36OCGKikJceHbSG2-gZrF6t42R15lBwbs8k6SvWXYZM1qSa504BEtEQ8IrWshqkRaYOD8uDV30D2J1vDKwRLueZj2IRSyqxXQE1ANBBSm--KFOhxQe7D5RjgMnM3vSsjoGPfwsGv-PiBQmAEYN2qdoLhwJ3w46Hb6ebaU0L537gkwerM4d40fu60dzC5BAgJLrEboG1rQLPJ9O1JxS6nHg045PIabVWhqTrsKpRwOZ4nfuS8AOg-y5VkSoQKMgovnN5XqLx4Xi1DXZaDLmA0Dam7jVE8VSxX6Y4J9uzh7jLX4tuFpeexUuk3I1lK9inp2DPLC1uH5t9kUbMrKoJWqYFAs4y1YDM_NGIivq3K_KKKl2RpkJuY_lvDoUo10CWdHOufoNAycIFPpyn0EEfVp2TNzsih-SZx0FonmRKmHP9KD6ObPc0tp2-b2ycIZqe-iuF8mYCwC1WjMcT6MulpDD1OzhXMswAJlcoe" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="bm_lQUTDs9kgqkUk_1xtVk23N-NKKvwRb_TRtBYLO56COYsAXK5Vdr70yU2jCcobpfEr8E3QdawXY3D1F3eaSWdqQlAEJyvQk1jQ6kzJjQDopOaAFlvQmrqwttj3Ws34hFpq8byR6K26yStpND-EMrhLalA_fYNTAXUEWkbex2ALtYPZXZE3JrK4zBNBNjrCpNV9xnFNnl9G0b_wuoJm0e42H5OjazL_c6eMGSbZvoVJ6yImsxMCd80i3cx206XGCjhwkhKAaHRdW6slKC6kMnq1kw2ryZvOJxDLyw9t1OzkW-vzIHo2xXTN-9MT7yYn-8WqOz5ijd6n4zPvqhvNHxJBRH_-eovSuwBEglXEaA7iylXlcLzjaELdT4-gYcKtk4Ly6wvqFHQaujfeU5CyjkFOsKanJGKbPa805ihwQytykHpSLrKSxDf8IiMH2PigHmk7j29oN_keuTq8faDmCVwYI87H-K7SqLA4t6yyaWoZYKPWkcyMlxw2OwzJZTlThxbdXykRqzawo29sC3GLQ_I62ZryWlZWEQbcmwpRU8EPOsqF0Dz6KUl4qA2kbB1oWMQK0pH1iBcR_Wek6K7MBMHSLummO1AgTaeU3WZ8wWiF_E8cgD8rbHfu6036ul79DQS52brdzct3VJ90h3uhhu7GUnPRmV0mDDkoBfnQwCoMRvd7bTyiwr8tqewI56hvvs7DkkmXgW0tInpCSsPZZwTC9LPBm-SPFSzRXCLrzD7Uglfr6Frnjf2e5uEzIkylRmZlu90s_ovQu3juRrkU6IhZEMxfHtCozon6u8xm1iEfdqRuQfzzJPm-_9DHCtgGt7otFfqGaA91W5v9D55Eeft-A7gjSOXUCzcMT8u4HKpvS9eL3v10u7QVDSeySMOtNmXSskRnW-9G39ouCaVpfZflh8dKG798opxQJ68qW1AO4XB4OFA4mMvOVEhRlh9PrApXGoSB9Qh_ML4PhpdKYfMM-iGXBg2S0FtjusoFWUF7ScaKLoJf21kz_Vs6Af_cDpu5WbM6w6_UmGI45bzMMwF9SzIY9-8TNib1LOWf5fgFieeVRo2aUQSDuJ9UrDOLFsYB9zSNIreZfjZLNYh4pphd7gpmpGvX_zGIxfBFlg3G9BO0Ggr3moBW0vwLJCgxbM6JLkSTJlOAGZc28O_mDTyfpPPgpawBrJiYCJ55JCRC5sZDtbqsbwiV5hw4Rk0o-UlTruKsThc9jf6Rb2GHafZo9xjxme2bTjw9o5IgbxkJBhaJ5qW042NWmK1XZJOJCWmTM_S0kULypdabXqHBc3uCcaLKpxQdofElBNk9osWiHgZLHA54yIJekKeXIYA0Y5Jsb7SUWDRSD7xrQAGyl2cBZ_Us19emXxNoaH6MO8g0x0Oc63GRz57BLyE5vGrDT-zOjhwIIjhq95Kbz1pduCuIMOta1b3UrKH9UOUQbbA3Q_pYBtaxvWIg_ESA2-PJoFlVwm7DrvcYsSXupOjePILGwYEdrviYqZf9tihtTezuOesMZqzPl1EpzxuWZVTa2TJxiWIu2s--R4V7Y9oii2xRv1KvNzaZg4S6hDEGfLu3zO9md09ygP9Fla6h20pBKzmahloxlhYksgZZ6VYc7K61fOAGio0QvWYxxIh9USBpEeIns3dPhQcyaianWQ7jxRT11-OIvCP3CWKo5-JsNJfAVx44-U9M9hhDV49gbpuT5y5C40DFr0UqP9DNUwls0EAxH5IcHJJdEZYcN88GtHL5op7Ylw6yBGobqiAwL_YYD_GKraCVG4nwx7p4gMLpatKUD5joBlyy-QSqhdb5CxQHh84KX3TRP6uGcOG3FwTrNTbGYzJ6CXSvyMk9hmXhmuofVVDQ6P49YFJyKDLUtLsjj9Vm8LfFO2lyuUB2OTg2lmT_8rAQJzOF5LHbI9tifqta6qv1jRT3pZIxSsoP90U" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">cloud storage solutions</span>
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
            sessionId: "ca234261-883d-4d8a-b3ba-0f0bda52bd87",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"0V3RJ49L9R554"} || {};
            
    
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
