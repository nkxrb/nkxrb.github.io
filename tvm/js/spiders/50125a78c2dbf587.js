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
                                <a href="/kw-click" data-ct="X3z-c07LGccqs8UMj0PlavwGFXhMygZpiK3QrDHHWwxoV-KqPZ7IxLO69M4hR0XwkyraYwS7appkce7VIh96hT_7R6HBnIVsi7z3TlnvZ_m8Usxlz8I6t0FBS4WG_Y7XhYcs7az92S11Q02tFjk-Y7NOnzGm_-YCLERWZVjKyqHgDbLQ33lvUDTBdbuGJ2KhmGnpDNzahJhuIBiLQ7slzNfMP7k3rA2axlD5aTlYlIZy6b9Nf0_0dO0N3Chz45F87CPtSxupNKmZCyq0F9VpSBb4VNo8Kso5eb8AUmELSp2FOFi2xMLszCxJX0U8b4iGUcitRqK9g-78HFrqbxIdbtiXNr6-eDx8Zk_B8w9sTnTk13qAdwKH6y-Vj1zDB4oW9ji_8Gffm9NUlpuWFUxdBVyME376quwmpZikMcjCRhZJvPnFcwD38fT6bJPziTx4bsNGTWo_G0SRPO4btchkfRKq1Nw_xEsWAKLk3AOgvly6EUSoUDOOjuAWbcrmcC5HhZ-NfOmiW8O05O8fOytyVzDgnwEsN0D-krEJ3V7gMXgrEHSl5D8jGCbVgFebxAYKISarY_MFyx0MFTcYl3n3qJtJjjJxIu3HAp69kHXUm8uI0ACFZ_XxTELXLRxc_fsKHO1grUJEYmnnHyzEo7q1YXsuARLvR0Ab60EneIjB1OjQWxY7yA3BD6Sxg6zT6iZYMUzRR0lNXKHMB2C0jv5Z7KeDNuA5uI-BtQ6YeObKhuCXDvOOgLpJa1YOGlxa9QqZhjoKjqdNHCckXEx0MvQQgSlxatoQbk0ggLChBZtPxAZMeWPI-yLD7f4Pt4TDdE3IoUwxoj5CT5vpr85PXr0FD9Bb5ZY67qd4EyEvRWDdjKhvk1CaLhAgcxUfBo3IEBpsFH9dcVkD1ndX-MRxKcWBLvlqI1p2uOkEYOQkGqWFV1y-oGvU2ZSNfug3hprDKZnGpChIXsH0BuQTNUxgLpa94zAlJpjBiNorHTRsLuSZNmvvy3oADXDXkL-MY88ViX3noISC2jMu9VtMV-iv86pF4tI27yN7RT5xJq9dTG0HUQK2stfWWZEDKWp7wK61oHc5-9GP6DerfdEbQp19P87m8yAmf_up--CCJGEjVfMLDt3IRlRr6N7Iq7H6gzafmpWqg1vQTT1t_wbcJ7KbVPe2API10UhMbFiApA_FFvmOc34D3usJ1nhzybqcBOmsErV4Sucssj6EOvnJikzwvyEuFLF4UINBMq7cDt8I72rcZY0yEks_jVyGMS5neAI-F2wEUt0fmMpJZmk2jKvXerLmPnViQ8om5yWjK4f_d6KVdQGXkKGQrEFkDFjr5JruaSJLItH2Q5NUvCiu18GstsgGq0VP5YXZ54d_cu22YfS4i38-UMw1jaeF-RCoQkcs5Zke2gGdQYZyxWL51bJpQH6POei8qq0wz9NNpTaQs_6SsTGSimuI_ISYCU8K1zIhTYmKsMrEbO5GaQqFFt3Oq_RQ_avAr-5RejMNDajmEdYHydAp0q-tB930xdrqnfG-fDzb_IcGonRp24V14OwJTEAtKuT0By3Q-R3WK1DZV1IE5dGW1xCLif1WRH6O-cJFyHGsD9_5C_8X0JKk82PL1zS68msqhkI3hZqfXAMS-vkur5fzKf2WrP4jEvyw0s8gMni0ywPro4hju3d2Y5Agolo7Ld-VSI55bPpbyEPN-9cLp5CY1C-VcJ3i0JoGBS5iXrkcdFvcfH_Ar5lYcocyyvx8A819VVLKuAp-XGDcf3yRDtMwaIf6gAadjqKrlTqtV1Pj2xKTJwzsFyWVHwvIRcX9K9P4vOFr7xGsWyU_dQGN1xmKjCMUlXCuAWM9Gx1hT9OHtpDtdNKEIRcLpwgzuP2MDo9Q7GgFho6ozGcGuBtkFQ3Ljwf5n1njiuyV2R1pNoJcHb-m_9P_sbMicb-97iEn_wMODVc7XWcfi4FL" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="Sa5K3B18Tpwrgq2_C_Jz_h7FMDwcaQQE8cusPjts0wsPdW3tGh98mm5dJswFHtxmm9-NRjNtPOwz_zAO2UdiV8AMR0rMG8bD_8hbWYPZ42rJ-fx9qvq_EkdP5OMaOmzqy_yTZZCRyO07dnV2QFUZ5zdEsA677GhbbzJ_JSle2Xnwhjl573YM1tHxUEAoqAYxF6mp37sHLcbPwyIWa8fHH20pWN7hVkjUq_EcZZppdproo6uSNIucJ86pwFWyawIqYhBGkwY4JZQhK8tSvZ2S0YAFyRbgHR5bmvEk5A0SEsxpcCdPJKYFkF1xBifgK109Z2RAEO0qJLYOzcsbBU8bB4TWHqfU4Cox2ea0IPZ7-UQ9p2A6vjRyNogfMpHppA-a66TYsQJknUx6if2UBKlbCe15mGxP26r7GMkIyXmswZGzFpfBEe3PBg15vYKGxJynqpl2WhAyRwczJ4l6Q6bUGofOhMPHpSM7h4hrzI75FxGpAKtX4zhYVJF6qxPsTZ3H2Hl5liV7DXWMIiP9eDCRvK7NtYT0ukvSsCcLK3QOMOyGKraaLwp-HfWmJ9aVtDPrnebiwM_Kb1fza_zw_eKkBBmReY4PPEVWGg5QEBmDdky34NBbn7REMNk6pp36fWZ8aY-T-3JPUpptZY3XtqdDoBTWBAFZPWNnUohkxkggI9AHXSGuA4xGniNMQj6CYy2kJMyUbKyjrjoD4j5TWHTQ4l-70CxDhpOmxiUsAOi2pxykyTUEMpw4Q15cfsfQ6mfIxWmOuN6KlH03EKB_JRABQuU0pFjkbo5MKHjD9tkgeGIzJywEJo48gk3K0gc2_LHJbtd7-_CjzsdgX-tLCi7yc1MEPCi0ZUTjusPngIgMop9Vok_74Jng2OMhAsnbitm16w-lCwffDT8eiAYJow2LZJvebbB_Z4h6IByddPCcpCKaFgWgbg4UiGxZhDa5FfqAuDLP_BBwiOEE-BApQYGXx6Es3fEH3Mm7QWEBp6Dz9oA8BdYwsTL8sPllXynYthVzkPjhSiZj84_FHSO4DD5ZVdXOqlHPrhkK0siGRQklYynwM2k9uXM9YaK4br63Syvy9LLyjEJaiSJ2p-1UHP724L912hfWTw29O9aj-Lx_hhpRPnpyoGlQ3Poh1doFYgEA6_k4FOEEdBFLvVlotlF6lpdrFwAzjYr5oUvweIymT1DxFodbdNFqXcwCyPrHjf2EPJpxPwjxX_-9t7yn6xFzfm07ciuRJoBA804jkJvyNcipAogcbIU5aTD7yfhHgcnbVdsV_bok9QnrTiDdn-SKngF07PGrEaZW3xmZ6rjbNsMgOI5ifeUIzDBkNud2FjWxNnQMgc9mjqs7b3rF-lPxVtHx2CcYwfz8LEE6dWqZ9HznNO2BLHsNq-s9HkHHly-SexHf9I2tpuVn-GML_1CRlaaOKQ_IiYl9YTO5iTcrM_BkpM5HtQiQkVX8AeN97Bm312QXmByo7lfsLqlX9xgEQuNm1_dd9nnwLlsFFLv9JdmBdeZIENQZ8UhFyK2Nnu9C9vK1qUTK6pqqpsnoG40WCaFNtwEoVpHFU-t7enfAcMCe5jSw8bf0_6UBGNrr_1HboXTT6iJnpLH1X0457tm8Lkm975JPPfZXYfnnFy573gRh9SwIQwWtLMBA53Qe_Bl0PKsLQTJxYRSLM9q9mWh0eQyzD3oPGjREQpUYrTsx6fjj1DqlZzJzqufGetY08JnG5i_R54eLh4z94NMKHt9CR0BurBHb1PFle67cJw9Z9NZsXOJKKSrC1tUTegPfrTK7fmyMGZe0sx1rbO2gQRDSmOGTOkLiAX94rLgKJ1pd6hYCxwUqS3GjjuBfns4PAWgxTE-zJVFP6oFhp3f2txBIVPrUUNL7XhVSFn78onw8hVAyARJhLW9y48l9WPFeAfiEXEhOW2D7TFK9F-UK1SAYOOGNvhJC1IDe8UD12qAnaQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="lsQ3-iuWleohh9UZZtJ2bOIhVIDJSxJuc9lec394ZTLfx8H-wuKyjeU6XXmmsuItsft1Lj6bgnnRW8rXmRLUVmT6u4gN624xYrSWEaf3JmQvcn5Wo3XmfKCWHimH8kaezZXuhedYmjUMHL1cuBhDF29_EWWLpvKMfxq9XAzLcnWvkZZywQi80nbzEbcwpcPkswX54S5yAAIaFkYiULug6sdzZyLADn1L8A5cHg6lgQc5qXPZKAISV7iq-hQIE-G1o3L1MrfW2eMfMrPaW2tIbrYdcRqcv4DjHFWQKDWj4y0Nobl2BmpsH90qckuiDnXdAu-n-32TjFSGKsuLeGCi_NxlpBvdhMRAH_hlv14y2T-2ufRxbFV6viXR6kcGIdk4WS7QztGiIA3GXX_qwkZES5ZfPjwxE7oMqmQ2sHrFajxta2iT7pbirWndk0X-zEwKxFZon1JotGWyzm_5BC_f1jeLXEUP9JpoA4Fh5sfEQQcEJoNcMHUEZTqyq-RZFcAtUGSU81D9o9kS4dSuuj8bu8fENGogvXMu19oI9egC7tcYyyOR8P4qDJSxv5xDcac6_vOat9T0I6fErVKIMGnn9FWClu3nJnul2PJCFQHrty-6jEaDpbejzqHDn9LjjJhiDAvNFNiQY3EdX4-Gn9psrPWqmEiTBJSBxWusG2uzmVyAJ_N_D6PyZNHkQTiszbQrErtGcLv8yvv2yim99n95wr5DOh-ICSp9EqKLQGWI6oW0IP-hWwwsJEDYK884jpxVBKyzczljVuyfO6xCGGiGo1te9Ao1336az77XifkVt817p-GyodbsCuaOThjiDMsLZbnYItCa0xwQyMWgTlFAZV9wd1HVHd932zxv91cLNB67I73njwNccB0_PxLc9G-aUTTTApdwR0TcD2dJdtO2zw_XBP2zE5wvraxdLKW5-LzGMAmB8cClY4r5NottwBzo99y4IRaO9JcXh1h4K4zXYMfpbeDrlUK0CtjvBfZWE31ZhPeHCkw0r38nFHSmIU_0Sijw4IjFGIV1ySgnFD8VQkptI4Kt6HVpz_tto_CtHtV0lukAawZp5-xA70SG1a00VY5iUSgWBdTvoBXcDHYkIcXWjqLBvBjHaKPxl6j7JKHYNm4bVJMnFW-OLK3J4L83VVJZwxlXx7fYmw5StFICPgqRl-w7UnM8zJG5lh5dJLmxpxLwx6ykfRwI_wrNzL9iV1iaX0GUPlQOXif2ux5tFSqywjew-pfj885peLIPgVzp98T8UEqkY5iI5daksW8lb7Wc_20ATm6XKHSn9DXhrphhHy32WXkSyuTAr2UsMeIxcLPz_eS1NyElII0YnT-NNRwBm2fHi1N0CXGu11fsd2RQw2NzMwaZWSyaqVi7ulIo-8xCxV1GHtQI7I9Q5gdG-YFoK_rJHWT990uuM7lwrhfwuwZKAPnZ9serLakrCmPM6Ysjt48o6HPFV50blJ4hvPDvyNL-rRWgopYM0g8i-TkJsSnSe5DPXFaZ8OS61t83CiNJCJLYjeavagS8q30CpuLD7Z38mQ0BoGRvcaJaSUlcAHO1bRb5VwX3IVSHshmrP30Y0-iOxt57QZt6fOWCluL9qLea5q0SzI2QEbY6OuheE4-CpPLD0hTV2U-YOzK6_O1WBvshxsh6s5vXT_nlpfMbUQ7AD57BM-NsQ-e_o9Pdf8WD9D5KQ_BdWwNFC1wirjR4Zcok9ix_zrVQMQ9p2sxC-pzEursDUvRE-F3seGt0bUd3h9vId1_GrPnSE-DpDFz80pRUC6qGEv58g63xKQacYCximTrZo0rg1rJfSQEYDzbGFW5IxYsCy9gMh8D5Iiz_MripU7HWrkFt6QcAYdWdQlZvIOgUhsze4ipC6lt4qq6bib1uZV8OH2Hc4ejpvz2eRMi_4I7dxSi5egsOGilB9Oik16KycwJ2EP1cRP32H7MbMomB-hDRBqU-zGDL5EHQ979knPT4LQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="IHgx20Zq5DN0M0eWV6FG3PnDzjN_EMqmKZKlK8OF6ZuY17lLPrZJYJGArBxL40oOv1u5NE52GROBjamWNA65Q9muAxchsejhh0PkYEl3iJZRidO35M2gQC8p2DiL4_QQ8BLqFAwX2j6riFws1f6UNoZgZUCJHXV0Go7_hO6VHRLAQy3CyFuU9RMvjuPnGm7TIB8hqH3Sz-GhIsutxbSfUOxg5m06-Zy7lgnxcuwOqf2pZGSChHNlq9KwvyEU-Rn7OPVWosFloQX7kqP8ipW_JY_7F6u9qiXm5TTtMf2vYGQApIjmWbRula_sM3UWG_SLSbE-vBtp3IFxCuQgQu8uLdjLCu0Ty4vizzdJUWDPmXzsJND18e7R0KBs5OzzehGy0qQuMx2mzUGkk0GG21rYJFCMqtRXzEGKMgr0AwkSzplOOHJjl1LZbcZHCnpATsQ7WXY5htRO-6WNIt0yH7cpqYeAlFwGhB1T_K9iqWRKg0bEpAF3HqE-_YxicDHGrHSSwiG6u2V2ljwbhqBuFvUzKXIvuisnmFaZcmtzAGElPCyRI2H2_2AjPbuCCcdb91IlECjk04smEJimS7X64ex6t94pry2pf0FBKN-nzY1T8PlqVfs_-6ykUHI6UZ-_hN9f9CkYYtZ_dKPt2Ra-VMDTQi9u4dFfoQ4OEd1hWlBAwUqEH-f6wM8PClGS5sIbk25cCyu_xVUXNND6-hEc3yN3BIo7rhGo1IZMsOZN8IV_TtFOL6f5ro-sZPTUucpIOzHYKGkNsdzCRJqxCX_BHUu5JfWVOMk8cQfYunP5n5KMi6uh03cjGAWbaY-3EUR7zg4PHjSzsPFK3XzsDE4zmStSjnL45LGpRmHYPGyuvoWmBDFfC5oG_KUVr5hwA2aRehVnaOx0C3cPCDsP18xNXezfDfVyHMgyQQgw0FYuyoB8topkf93S3TOkrV7PsSlK12u-1d2L4ECHSy0Xz5IW6SdnvH_jmAhz_miaAcb9j5amzPjfCJaG4dVGm9zvBjLjWdsMXMlkOZ0BxjHOv2faH72e9xffxNNRxW7tKih2SOPR2vjg_PIWdKFk1vGl_nOOy-JMO4of5UwtI5v79Kpe3nhVBbaP0U0cziIkt-gWnBZqECBKhWQ3eVtRImWrxFucWL6xl9BS-fRu1SDqG1FqAFQHmbeBAO3q9ThNDSWZ-Ivlhv1Y95ohKGPYJf5cX6FYaDXj6ejRev8yDH9ijJyih8B9OxktqvjDuW67p-r_DDeAxvu64s_1Rna1VGgP74Lv0k2eaEaEFezWaxurKI59b5NbPEhOPzdSwg1XaTS-hVS58QzJ8o0KQSUHtmjiNOcNXMKOYlQd1me0UqAb7w4MxiS2eYRPYjU38OUpv1UvDSqYZNbODZz-53xPCcKIC5Rm-FKblkAXln2qsjpZkuNXh8daxg0QKdRa2qMDtB-ybV0SdVYCQiIncs5MNSMP7sd3SgFpp57NG2Ji25V5hzBUy50-QsSUCOuUfrgWgjhGMGOd1N9bp9fgEJocE6sKcn0V6I2U4Y9oYWFojn4o5HGsbDgzFO3MkitJWO6ZhbzPWoMKqfarNOHNttat3vgAPUppM8pfAmw5YRUaxEDOxW8Wv3ubYmeawgcVwfR9UIql7_G_QtPjW05rBwB5FTLWJFAe2X-imiodR2ouBMb9B_6pkbTaml9YW5l4EGah8KFUaSkFh-dzgDpNlQrpEd02ei1by6SPpWkiFQ9EqbvCnQN2iuGiZSsHrp5apJwg-BE9GtYVH7vnR8vIy3z2F0XdN5Qn2E3W13-jMZSb5X283aV9ly95qKGAqvJUNimw7Uspt3hvq3en4EDg_-bUUCgEMJLYeWGbbo7suPQOpJ-xOJV-hyMgKr4Z7Q-gD0X-JNJfLGV-I8UawF6sR2fp_YyXYNo5_8GCAoS_3eYWMyyEMi96H_7rKKm93YnMKCJmS0n8LYYvtw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="ArQjIjht4YWqMpFOpkXIUaGBm781YxKMVvvU0UjktD8PcXzIeDJOF6PUYLy8ipWlSlO0-xZshofQXVPhJEed5v-Hnx-mBJczS3U6YAoRs3hZtMflrfZB4NA_aAiEIN-ancNkOmw04DaFEGmGL4G6salBpNvZpbf_kxvAG2FAFGt_A_1uI8ux7EWiNyiEjPGHfS5CVxYPAgnQf3hxtATawmCMwB-sJZKEKGOZez3PpkFgTN8UM_ux5_HtbUSNSb6OynPrzNNWT0hBwARS9D4ml1PFufmeRfHdc_p7P-lhdkNac1ozNVMYvhwGdaauWlcLmVNXnHgrw0_oHsSR8IoewIXeaDD6vV2or-SJ1fYA002VPFAfPspYYQBI6Za-WinkpaVn0NkUAnd6Q5HEjBmgPbh0nztWEKmlZAMLBOfe6YD4h-ynjN9L6F4sBbX3Ai0MErxmomDpjJkjInZtqLZnrmIdAylMIQ6jJKowXjSnN1gB-H3KbUhGUS-duc3Bi_p3dyCWWu24cRtTeAX-YWewXnl0dZdBwMN3bDsuvqTcxd_QI4PyrNI1JIcRI3ZezIguQOUTXihJpCG43Nmuw_8LcNgFWWzEHprHBfnvCEbnJ6JsjMXtquE0J-frjQRt3JfnM0nV1sN_OP7LO8eK000RhqM9D4Sm1ruCGiQBqGYziisHjSjMRcsqtdU1zUrav6DKU3OxIg8ehuJn2T7SBmvyp1zCcNUSGUoR1QIn1HNnxo28xRVAWeL-bodw2DN_wgrxQxhCG50Kf26U4qaq0iDpT8cfP2LWUwoesPbBNRpBlFtiujSazVIh80qDFZHfcmGhHp3KdsyU348A0A0P-WGEcdYnGx2Q1b0OZ7sXrhrUbx8hvnhWn6TGhEXNIGdfz2rrp2jf_ZcxqSt5sk2JhIdp2TacJgYvhQwmCv15A45RcrYOIPu3JsUW3jmVUO5tAxs_OuK_dVTEdChfJ8mHGYwy6tl39ftzbK3dzQxYmcb7th4DfdOciVBMAZNGkVXFD9DYypS7zj_qR7beZGYLQiao7cWCBBfB1U0SstB1ID4iN0o29BN3jogu9SCqpu-Pfv1bnaVhFet9sv76r72fkms0VkmwRnxB4IMHStWtBuj-jmBzXWc4LwVzs5JolkQE9MM_VRBQYG9pZPtJCqAVZ3mkgf6eEfOyY9MxQ01DK2Jsy0H8oR-sr12skVjlAC9TtKbk-1sm1oDcHg-68-3wHXn2AwfOToky_0IMVCjPST0CfLzE4LNz2IC0dXTjEhyhvqIuKrkYDCMI8rjuzam11aeHwpTEqbxefK52mSpHll99u1b7zwsRnqQ1BMGR1xt6yqBnpfnwzHy6NnPsg9bcctmnSat9LqoWPA4FJTZ1d4nbVNmwC15pdbk51H3sJzYKxFMRFhsJTKqDyNP8plteKpitrmwSIcAGljaLHYABB_5byj4Bps_uDCzTG9fxUUWdV_mFBLRDQUBTet6QdVCRDzuXPX57c5tdIq_EyE9hC0WYk6b6_AW8wCZNFJLWcdq75LT6L-J0I9I2jD7Ia3HgNrICPFyTE9BGI_nc5nKylN3NFAqfRvhdXXBsQaT65pEHLqq7l400s6kFwfWJ8TtRczoFMua7d1QdiJpe6aPoOzDzz1PkIstedsFEsZWsUWPPmVi_JW7ZqKCL2RkyPY-BsXaqQvSxpYQKoHkb2TOdq904TOirVAxdbOu_gX6p_mPnnYLv-azDMmrLbRtJAWnRpMeD4Mb3TlWk5Hq9_KxBqR5v-5YSobbPJf_TPq7SqeIJQAGp8AKRHBUFLsGgojK6rwy7TdEuq5lOspLuY3wg19kD9WNp_Uj0JFvz6Cu_KJ9FakVAkiLNoI5MTXkySzM-HpkccYVFMdvShIvO4vFC5WcuhAe7YNBH2iDrUOYhHng9HPyagPzrlDaZ5zS-WsEM1cs-Xnxw3hYRLuh09LFuojp7PudMWpe8uUnfVWQ" class="dir-link" target="_blank">
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
            sessionId: "67f1ebc0-21be-4611-a393-5e804bdfa104",
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
    
        // pointerdown/keydown fire before the new tab's URL is locked in; middle- and ctrl-click reach
        // only these two, plain click only the third.
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
        // Capture-phase click still precedes the default navigation, and catches the activations
        // pointerdown never sees. Without it those hits reach /kw-click with no token and get a 400.
        document.addEventListener('click', onKeywordIntent, true);
    
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"35T8KJDLAM2QN"} || {};
            
    
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
