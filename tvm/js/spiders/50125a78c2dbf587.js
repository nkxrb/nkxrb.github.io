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
                                <a href="/kw-click" data-ct="oMsmEtENRvsr6hD1SB07bX3Ub6BJqqSXwWDfnBnuKdLhQ8KA1oJvM4wVIRPpjCz90H0HWspQNt6X71nfXSgrgxWk3lqpFt_VJaCh7W-HByIN-n9ZtaM5AkG7Wpi2p9eV2cEkZQ3wQkh2UoDlU8JIAqErZkw4ZP7w_FpdARIf-S-zND4dKDb8zj4_Gt0xXOEG_NyQAGX0TyURejtICelmN2ZHP8aaOdAJzIEeQRdpvhmx3HFrvQwiUHxTGvO5MHehegvh5V0dNd2ZVQ-Od89ujn7T1nCSypvVeDn2R3NsXarQCL8HtE-sLkxe8SqfXAMkhDaYraOfmbLQgEwUBaFHF89b5_JYad8aQfNjMATvPPErPDknEl6pELPjcfPO17rhdD45zdNRSVr8TuSAFP0x5vI4uOxAF1Z5OcCRBrrn483cLGuRGaGapTxmAytYwZP8bGdvYnAAwtSWtWWQ8lm9qL6FYAkR9A8HJHLAwhHS_Hr-BZxxXPoWkx3ftPJI5SLj31JrLjENJBTWabwuzMFSzcj3vUWzCPvL3Vd_QfNQh_0nPF38plDSYFv7okCugg3achkdczUpz4r4QFf35MGbZ5pTSRsHunS7s7eT2Whh0Ks8vwYl2L-lgHD6Y1-kDFgOGRStJ8obSwYu8MYNDxwv3RffvHuDKINGkoG7ULnKIhHG09b9IHaCFjlZqL0Ja2pnI1UicltAjhVklpjXqqhg4Ypnh6PQjt3K2fYI7S-_irO-JRC_TD3dCUMckct5j7m-QBJTsGKhuJ_oPiUXdwWZGfeW3PDI68IY2jPp4K2R-puiIi97A5-BMDu8Npetfp7SjQkA4wQ7zHExgDPumPIsh3xh9Lp2Rjf-zAnJy2oW4QGOBFH21YRXDoehgdq5VCQHX6GA6BAfJptUQWCF8g3TQPyG2L2xK3OYlVPsvZ1CghjpIlvR7vusd6fPHmnJQ2lKluSxhzY5DkX_EPf5tIg0yJ5zHB6gDBT32q6MlM7XId49pSd_vfttu10PzMCxPhAyLugjGPHSwCpJsxsvLMTRSLyDRpBWdiVt4boIFk3cXjEDqaPwzOiRbXIiSiHndAv53ETXk9a5ILLLOe06qyOIj18YLRrdC5U1BAct_VbVhxhE3_B8JoYK7vhOxM4s5XfarhDTYwiWgw48EGRrB8Pz9q7E73Tz6taOW0liMf_si8xu_VqpfJsQn9-UFSgaqaaH9oNCpxA82NhsOaYCoSSnBy1ekEJtujuir2bVjVcJcUcgczFjzlBA7cpmcWuNwx6VdoyOczpY8jL52WSJ8F9wYxQo1D_ChaJxnR3bJcq8EV72XtzImbkHrvmTlVjiKYkNUULK8PMxH7M_eCxtCFMTPILIKOjFBJdjiIomhp7xNPG47e4z81iaNJ_rx7DhAwtAN0TYVFZphE6kNeicSCAoHPdapltA9fvc9kVdnBLs3Nf_-a5rF3mHhfvSWWj5Dq4vcU8x-3ZthCF9xOW87g3JRWZc4U3ipvgzK02Z-vdv6Wy4h0E2Amp1JFHSAAB3kDN8YZJzgL2fbNPxvgE8UkQ4BBs2JgC1L5jF_DFfrgYz7Qi2D8tal3L0YVpS2aQGVyRV_WgLPnas12gRz_Jp_CNz3BM75Ybv96uo2D0EMEk3oh1s-6rDR0OfdQB5sHqpYje6OlDK8IxxZU0uGUe1a55RSMXgKiQOAj8QOkcGmZTRthIz9b2RCok-Ew87FTph6AOLjC8qCUo16FNlQjhRhQhEivH32izeMOjjQ1U1vaXnlIZHXLj_ekoqfRFultb0Z58MzxT9GGSaP4rPmdWNo2P_9XpGN9bsOdWSHa0EWuPgr3sjjB-WcTEWeshFhyOHZrlHs05lObfjqPDm5T7ASfSq787nbedTIYNIljmRV7Q5RPYpuH71DkVBAS21lkfNdjcvtbE4b53iZUAF-CfT33Bk69DxBw9U3Fj-wXot" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="970Nk5o6R6gvh5j3X1-nyDajoyokJp2AfHY6hY73qfHOXMgbgYaSXOVcvTgowsR2rNTRsHqx76kqcofqeWlrSg26vqVf0EZ00YMficJr-nSaCOAFSJImIdYZjTspeqEB8MPA8uEQFznrW9bJQS3Bqk7NuoFUrm9AqBwhGnzOp51K14ZHZkUsTMlEiWyoFc2o5BT8Y2O5Q7m8jn41pzK296d6UrqOd7J9OWRUJjBHJRSOPaIA5XcdeGB-pImjRMWamsQteYR9HPzBzkqpBwn6LrkK0UN1V1XXbgO5iRQbaS8kzYl0Z3PiBNT66cDycDfhoSQeCxqi0CmL2acEaTXqwoVRxZ-EyOztZ1pDvJW9jw1XSJGtiy-P_ZiVF8KonEqpan2lT_YP34SIGY3WO6TzklHDRBpS-Tc395uMSrfuX0yaDeJCy8NmtXnMudRu7YD0HZqqa5z3EKdWQGvOgBKlJXQaVK6VMH-J4XEwUsbqT-LskVynJpi18VROc02M0tRKQl1WDctHev4618dV5VDsDp9vBxTeZpnheuE1EjJLvioCj-IWk3NmIEvipsVBhtP3BCh-8eL-A3hOe345BCmw4jZ9Vq11J2rJM1FMZT09YlKo8H6em5uBv-zAD5GeXT5gwmea33slXTA7zcMKELEzJve2RLzWmoiTu9x2c13hKnDCqvQOgP-pyd4Xxfp6L7KuP8RRbHsVOZRcoy2atddHtVK4O1JLYWlj0jso57ezgH0tkpnFe4FLt49ZqVTBRXvOUIL-Ky37Aa3UWfeFVmBoifLgvv4o3zacPYP9qI0taHtUgf5iNSRk-icO1S2PgXlK0cyWmxStWwNiMTVrIou5QUV4XFWvkkUyMitYVS0MNzuksqdFG_MfotAaLnPBP3MV3M2VIEGbV39kUjOJa27z1AjDJWLz0hwMMeuldG5-L4LQHzM5BvEKSEEslb-7iIeHZa72fKGfDMqiaUxQbelLToUltCjhd4o2WL9xox72-wtn_XV9f3ESg_e6d1pcF2Wg56UyIstdWyy_c8BQSVZqueo7Fzzcnppc5arSyIDDl_M34kbEF9HUmBWSC2rrN8vvF-2zPuW2rkN-eb3EitucQIkGWR0gmkRvfFEiA2wVPv13zh3SpSTUDNVhBNbdoRReZnwSaN2P6GOCdXJ9eguEDkpZBIyVLxKzrrN42aE7HU-DgN8BJ-fjFRlOeK6f31qxYk-1BBvfpemwOxeMFhEzFat7G4XqQYVk0LIvucENK3U8OsoI2z_oXQtJl7jHdA3a58ofyCg5-62SQK-Jx4ZIbdFfUQSJzElVS8MdxFObbZiFwyiP78qnIb7YEUoO_BCeYtbrVSwVjFo7BUvT3AwX8UqbwrTrCcJFPsIET9iEe_wFha4ErAUpAA9f7Orjh0-8tagyGfi3QBTyQWaaEFvIONC0-9t0XoQVOrmiYobUyYYVAHHHNCxXd-6q85T_6mPoUSE6gNiXrUOkBlvlz1RenKQMmZ3UxDKl8WM-NB4DUoMGgOXGDvVPm8yweqqKRQHZMw9VXgyxW6DGxoQZIqMFXkVU0tkLFEEBAbTU0oWdAfoSBDF14LoiJkggThtIm9rwtIHP9Ua64JEsRtdwXWE5kY1nsdYhrBEAeWwDgeVvj3NPc0FA4eVx_qS1y5b40xWyCiC5catzaPH-3HXgoG5fsJyGf1dr-OqoXfUe3-S6rcIMtd-VfwL8JH6WMRXdBnClV22Zp6HupFU69vE49LMM8QKfaVysoUPv3mvT9bWgHwsfYYsMKkYh-0dCbcEPE_QX8jddc2J_85E0tDpmeb3Lhz28CRCCCNNcxrrOiUucKSTZ-DtBYsU1hh2ceN8Y7j5Yqicns3EuphupSX2AwDMLlypEFoobcuKS_CJExePUSxZvUefVVUsI0_--EfvEKrq0-mP1mvNVy8SPJjv4L2y578e39_fRTJAvlm0HHMjmXA" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="663FAhNnT_5AS-s8yM6tZI91_FztUjTnJhQYyIbXPURtuaIby5LvL-GZreBUMXbKuQPcLt7EEKVYkuCRNHac7oIk3wNkQphw92UrfIRw9MfKdGEqqxhDO1JS2svEm0Arcsl9ogJ4C3dZHAp5s7sFRqlnPdoqwo31l4E-4e23dCVqzfsy3u0NTe-fxMOTl1iQZOjMX8nEdvWQZoGbZx1GFMhfr2vedCHz07rA1SIWPwaSoqGM-CWwfAwVcAALWQUuqAOp7Feo_pg-44OIwfQEsxBTrYtrMQbjO_9_Uj7UFzjA_CK2TKiD5_B4NloO9Y0v_aOCcvJwC5vIpQ7nkt8XAhsQTZDgJSA-zRtlxkllIspHhVbO9dwyu-bGb92k9SBtjTIK5G-egO_4MYm4gB81zaWkJlx2cZOolHNRMzGD6Nbc48DHXJ5d5kUJ8e2ul1rYTw9-13SW1uAKCPsy4JNPnE0r17HRte9J9cyOfdsVUAV6SazE6IGock7sDjYBPi4KowvUAAMabd0STep4UFJ2kdg3YsQ9Nq1vk37je5hL3kCAbkrjq8TvJ6SqF9vFVImTvUL9Q7hDhOL0hGDjZ89kHz2NHTydYfY2LzNuN1WMnW0vV2rIjjonta3oCOAGCYVO86vBSGoTRXdOULkNbZohjHRIqfkvBKtdxWQlJD8o1C9gclyvE0RMWIyINfinkN1-nBIpsZvqeFHQgRvKMrHzxG_0WOtCTC4WHmh-v99oaLcehI7mcgl3BGkNB2CdXtuTtKpNwbANuh70PoLIleSxJIxRCSFwoG8sBmTsD4BZty65jqMAmf8Vr2jXrtTTu4KE2aSkQiJfgzTogmTOnx6YiZP51SuSksM-xLknMgzNmkf7U-gEXRnAr5bKZiWw6-U4B6-OkeX36twauoqHswa7O7sF7FFuWDmemIU5NsApKt1NJbm2H71Q41RnpReN5Ap623GNUQMtGsLcqAEppUk703Uo_ngu0uwjPD1A4aEpySXPW4mLd9pqagj6-mUysSetd3yXEcCQSXXLRbm5toc0W9NJjX6iVJFoL5m5ktmo1SjNG8NdF0j6kXMPWH68uH6C9ketqtl9zzptzNiyFwankBAYBUofWdLDjRvLM-wx0SPdkbrZs6QbHqEZsxjGZj_yoZS3AbV4ARo1wZok7LvdDE6LfaG8bIx5iXhQ1NM_XszplKiGb310D0aFGzy75KYoTaHHtoSM4V4k2uXzxYD7MRrpMWkgGeEQdu0GmhvcZqzufDwDy1ROXxuCfnugzIuoVgvYcZnjlaOz1Xo5hjinuZnCH3Dm7kGNy5eykL9zdqZg-KrHhcIUdPSdx9yWyQljMGzoMCV3KFbN1qlsvwS6sW0LlcLLbQ_oVNFWhHTYJuV1SZhsAvkXL-G2JcvHLmUcShOWKRIqtOStqRD9TYrnnyDmgelMLR_6_WujXx6cYGz5A7w0Y95eaCWSC5PnoIuhk0-B2xXA9Ows6VgKLdpbLwXRuznZb6ZjERsjucgupV64iV-YIil6za0KQbnECjyfUgQsBq7-Rxp0rRSBiscHPErjTWiVSFITLuU499AkOqlU_uWl1eew6ytBg-hWm63nGN3LaSjxo0FuxgeoX-6utlEqvS-MK6TJynyoI4QEbLTQWetNqnpxG6rcDWMDjbgh4p-WqdHMd6o6e8tQVwuUfsHeH6uYk77CBjtF1mnroEmxvuyzhVxtm0yF8hRXsCAGAVdAcrnHBe0yIjYXDLbptf-zd-lOlc-7Uho_Nz9wyKrKyo2Nf2b2ESjAyE2zlkvPZHF7oxsFw8w5ad-_ZIacm5XLNn4ZyiuDp2wMhYf3Ne3vncI8dA2TSyR8gIjqbtQZHdn9erV1SqQEuGQTX5CYrBGQ-C91Y0pkqQFwmP9m7YgA3a3VnxrivT0ANmpr7gq2aRwnVjvGu1K0NutHPcpMmDybCXySmj3DnT0bjHaIrW-kTJHH5IMnArzODA" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="BMdEfuoHjbdjp2VP2gQqdHln0k7iwqWw6rCr7jvz1lwUGc36WlITvZ72FTa4y2dgFKY94WFRopdLGJvUSAKyw8Hl4ewEPg_vx32cL_R_KmrC8EIO8vHBDlvm342NCeFQqM09s7TNF_bxBn3dUIbnnXHTD_zGaXFKRqxLS7lw1Mpt5nbWmtnkD5-EVIhtUlwdDZ_gzy_3PcREve4F237ub_ZDeruTd98Ynbm4r91QvATdgxYy7vbM9QuJT-C1fmAYr5czSxlAw-CmYbf_TcR8UCrqbLcA1GVLewEv9vmNvAyogcSwW3WLy81KTFZJNHLmrNVu6EoW55SqKDanw8L_vBQSt90o0QqoWDioQIvl3TIdTkI5S1wEuOPZUOncbCDJ-hxJfL5-_kQO4Yip8p5slgRwe4iwJHMrSkyyqSmwSAJx-hZoOO8HpNMpc8NdEjQIZ5zYZ5LIi-O5XKPmCLG6QB_U562dc-St1ItU-15BDB1Qzl5qu3yV1dNEHNSfDEsWtDPzYSZ9VBeLqFcHXibZX87VhR8lNcS2EvEM0vbEzH47aTMD35N-ZH_dyJTY48NcCAz-hyX3K3aMo0H6TUOpDi0WVBSJSEBynEkwvR4Vgu-Jokwm6geJABET2kGDCQ4ybegFXQjtCjAZHCir5liBY_S8xAsqbQZjyiSIc_blht2J6LPCufANeDrTHcNGuW5O28Ure9CzZdSnioxKbKav4TdL_EIrt4FDtu-w7XqBZIJByV2hx7T2hPyhnzoKeF5NjtCTxFW4UWx1s6CdqjbbtFkaRZUgo1ljlGDvmQ6-R0OEDGcaXwYTzAKUyg3XMWQgC-UZoKrw-TwoXuGISgFHxFst9RdnusFQbSJc5QEny5vVOo35DM3OXdH_3TwkRJf3gA0jjWGLZS9ShdcbSYGZ4WEAB1Zl2CsJQWPKDoYx6kpRpAv6igq1WRPiD7gCxiSVJ3-a0yu0v-R70dM1-aJ8wQFc8o9HyUDNYg0_WW4qVqdAiHwV4jQGKI1rvEuBbmVaWC3N_ZN9mSQzYCpiyRas5tFsrJTVAULQilbOGjnH72B1Lo1gHSqhefoj3EGsKzE15Tsn7OE7Zsn3MgdJYU29a9j9crrMkBY7N1M_076JL6H8OCCvWI-SEPjlLFzwpKHNJ8WCJcFOQpNyd4oY-CzONjEJPFhUEj5l3Zxu4oAz2S9BHeScJ0ujbisKaOQJLRqmzcWiFXoUJlDi71TQNDfr2ae2-GPM1T3LPPBR2HaobUPMXIbS1Wg4DQs2hXaO07U6zSs1QkmW_SLrNe71i5_4P4GAQMlzyKz3-K1CJoYcU8VHI_Sx4I3AETbi2P9YRhLSYSx4h1G9jOx1eHnkoJkFNDIrP9WlxJTVqbJqMsO-WLr8mtXM-4qipHPHJhiAxOPMW06Gfpw3NPf3vTDPc23sCytlXpJepWsrEvQeXRnvsFDshdW0y9yZcnMefV0q_Z2NYjn3lRmpFWxP82S35_iVuu87JLswDGeNQtWFbJuJYIGcwS07dNITQbNk5C4o_pi_A8JaAZMS0vxzRaV4KbRRpKch0u1X5XrlBxvbg5IBFgXbla_lQOtZAkaAzYt4HLEqA5NhFa2B9r2DhV3BykYoqClRGQnGQKyiSHcqM9CYaegJWnvEiJs0CPAseAX_zubioO-ZiiO6-G0Nyttmza95NjcNJ39DXMBWxHaTWMc3gH7RcN87wijxFzJvTQmq8ZiV1U6ZuNjnaJ_3vfGh1-POYHUQ8J0ybXCr2CIg4ALJfM0WKEF8Sov1u_YpJAxIzrHRjAty52Ph5cSJHwZtDwPjfmB6l5WXX_1qD5P_3hYhxsIiELNJMbn2NNEPnfwVGdICJ4hEmXPL5bbKZBhrppfTJHhbW79ARAWEGFtAMvsiyNN9y7rcWISHErP8UF3HT0c9ReVkqbvy9bxtuWimWKWTTJlnS7TEzXQe01TL-XWbQQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="fEzXhRPvpqbLh7pMYjPuLx4rTguaN9ojHQJ2EV8fHSutCeozEnA0G9ZRQuVJh5tRxxNpacJ--FOqg0jx9bRocCbv4A4d8QEZInc_wJwereQXwjVQ3bEEm8Vp8bs7pExqRHIPCWVoBqmZJFs6K9wNvkJ6A07qcQ8p75FJ-A5bON5NQdGu7awc99gBSOGBor4SzklnrSE96SAwxQT9vk-mPtgYBa_DfXb93SZ5tn_tDfAyAU9yU0vO4XQs9XYLaYtNOd4XyNySKfmONb911lBzTtNP4NhWBJr6AMep7h-Fs8fLfwlix47DUzYgjJ-LnAlkE2ZVfFnJx3yIAjiek-57WjNRL9uA1645SRJBodxdukKK3c9e5UNIwbt2Pghho1jDV5DdMTFAFFlyclYP1YgEEFeld7qEFXArXQAgbdVTm29jsXhC0qxQUbsGKCxyIwuf4AphSmy5qyqvJlj13xQksgIdLbQJMd6zxTktzMEhsVssFlgJdqhPa-UhVlE6IqxGSrCcNTgJ3K98mXy0YzUJH4y-sdfg7HhTjMR3xiRdFs1JGPD_g5Pb5EMQgLSptc-8Vamc-wBLTJmnOPSgY3I2f7t7JztWeDgxk2rXUnd-0S8DpNWI6mTSwctiM4OT8LJSsHmJz1IYUrpOabD0jvW-phJTwhdTvpWKOCqUObdttrM1KGfwPf2EiT9vmDpMl0_CUFsHeu4SCuPBa2boIF7uN2ekJDQtEZ-UF4xt0IzdTleTgDzRKfZwX9_JimhAzA2q2CmxZKD0wkg4N3cxYgVBTH-1angbqmcSh35EKRuXtSZSz62529XoJeEz8Z6tf-gyT61cfOw1ybvwLZ5LKRdpBQVLR8k3byntNuhWfXsdhUGdBYqw4Rocr3nkjTvXimc8cHj8RrBVBA21nTu365Vw3bgr9XweIPWXnPMemKG3UcHrB4El-VscpvDxd4ea19SBAjNnf6j80ssiVQ7z-4cFQbzaM31HCmtK9HBpk-wQGzD9KTUYOlN92H9UbZNqqNx3biiid65Xtr1Km8K5Zq9bFDgAhp8_h6IHemMjzHdcTm-lCGavzu21Nd3f8HGNGanIEgoVf6egqmoBAHhxH28YZvwBrs_J0dCucRWoy24_1mkhhlSNvo3pqEZOl89hAGP6UmqQMr35CLDjFiDcSymPNGFKfm1HFB9IgUBG6Ys-dnc8c9uQP4foSme2tycZIrM-j1OzFo6jsHsM98EVfl6Y-tqUpnlCJ-ePrhaSAbExck9X5zFn_Y8waRNzNZmPCmOHUwch77dIEj1L4m_hVav84Y44D2nlKWCLYuqyQ7nd_AOfJGuiI8JVx3v9SY29oEzgNLYdb9Y85EBtbT3POP5jKBR05J2xHaBI1jU9-IHcEI9ES2yDmX-1oNZzpQZKPZVWffxZNIutbSZynQMBBLFUmIjIm5J4v4mTrUpD4uuEk8mNG5kUHQmpyjy9r_pmEEBhgywG88WUMmr0tirGJJntZgCcC6hvI1XPSkFrN-ufZX5Px9wi9C15r7ZHq2ojJCMF8A_z7CeVcuRnvuunpAJJ4IJ6Bo611w_pGjP5ekhzU5Rxl6rVMDLQmkb4YAWM06tYf7v0Gn3fNORSj258iV7_UeWvCtc7W-RjHGpcfTGuqjXWd_GdUafbhfFiy8NRKVQK7BelEBD-x4Dx0780AxrY6Qz414Kfi8pnFPs-uqw5qOUniqpx0hG7xWLZMKy-6c7sSHCP1vjiwrMznSggHsHT4Ck1eLeBdidJ4sWGXEM9UmniJxD3Nq7ChQBNcgoBcLYe9YvY-mWRGjh4sjnh5CnhlCGwGXVA4DhaxjSt2l87mr-FgsmRFn7I8aA8B0vqoRlh80A5knRubhIqSquJULl8LxrGXv4f4Mlacv7SlhPwQr2YGg8dXd8eI4RctQ68Drp3MD2ermEYh-Ad0XiuGP9xdJa-4dIl3dnTP2gelPIZ-Fbxl6nrjner46s" class="dir-link" target="_blank">
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
            sessionId: "56a91231-84d7-49b4-98bc-b80e2e5e0471",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"3SGS591LALJJK"} || {};
            
    
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
