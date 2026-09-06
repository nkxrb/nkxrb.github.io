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
                                <a href="/kw-click" data-ct="uLxVFl4epagPSjXzk-gIxeN959135EHFXohlZuqQ6FpU2VGJlUI09XQyrKU0Js4bpysQjr1Wsmf_t5-GAPuds76ImDwwN1fSc5WZabhIkdqtawJrz-nigPdMs8ibysoLEp14rYt2xvUoADb8f_4xsW2ue3RP4mnLavSjVhwrgwOn-RkvDEXbqjiEeoHCu9JLENNSEJxLsogw3aQYux0kR46BsgIsCXW_W_nWjlL0BmaoYxU5dQGdjjV6Pu6kJ-M5isMD4G8qoI4bOAgCaIAe02pSqyCjxMtoS7hc2tTgHQ2_4ZAZN9JUqtE9OevDhTVAqW5eUl2jZP0-4R47Wp64dEIqTsbXMayBYNZdM4uR9TyeIBAJsniCv5PMcrNNvd-EN8oncHC-n3Ut8vnuU630yFp9BmMZQLWdy-vUjkw0_4YMTIrPm9yXOcZiVvUZoxcDWg5pESCW68WxdHaCILDFUHpDNKZbnNuRbUd_ugsOIg6WAwpP5KbpAupkNWHt6Tv3pJ5qwwiv1o3UfNIV3kr34gTJmuqxZvaA-B7zXKQL1-FgoCAu97t0USmaczXTVN5tl8VsHN9apGR7n-zvO7zrFi0q8DmTWDbjnAI_VVsQ10Oq9bIZgApy9Efgv9UTtFwhyo8FtEunLjDkmJ7PhlcygX4bv3lfth4UE_0MAyKZftraQvqRcoTefqoATW_1g0l7ChUVEFXsR1RSXMVoPD58xvClSqTWWA29WLWffe6owJqWDsAHT7KPs_L5-hSW1sZf1qOzwhL6dfQh_3beMJy1N6GeKD9gyE3LT2m0jenOvKORygrlVkMmNcKbL7LA0zfcxp9um4eBNsd3PuzkzM-P4CaeabF1VNmbPEi6YPxSIkuCbvbmQ0RbYnP5g7AZtBjWJf5jkyISzI-urpWsp-oRA6LTZIr8WtyVWPjQQwlbyKX6mfYp0bds29w-e7QHvwiJFnxeGmnPyESulj7bzKTRnQzq1gzwujWcE7JJMYRuNOT7PTkK6iaB-_LWQOVH6qA_Kiwn9gJ3CtzBZ1o8IXbNOq7WUqrFqwdx4MUOFCyHcSrzNU_XCS4wl7zaLX2NGXP8J2uYQ1XD-lMd3I4NQF1SUjmJnuUrc-HM2xWBQQGpVqHPJXMWx24qtnvC9RLhWv5H3fF3S5gfGV8VMkFFz4nyy4YRTJ9bhgPgNCNe-ynKS6W6C5shbGwkas5jldaU8IUxwJPGE9FdES0xWPrz1gAOa-q4WaDuxuJq8yDEyo_ZiHRG6OZwPk7xyEa4JHZDIXVSSd1416VhBhuTmO_FMdeI_QHzMXtUFJUQTVn3rVNVqh_9qCd-_oT2WbhqbX7yIYK3YpLgAtGaJMrS8J8-XMgi1P_lApmT9r_2NYthcjN9L-fTjIm05fs6NvizwYO51KugUf-LCvYcBCZmdEKorWdrkGkaDF2h4FFhnjSWZdJQyJ8p9vMUCxvaSYdZIGarIntOjkVmQk9uqn23B2kZ5ahOs8L19O_Jo-aVIm9gMxOsZGXhu_h1GWpxPNOjGJTIOfr8YfzHOwHQOiQ5zWU9qcXu1OwSM3i-hn4gMmK3iVU7P0mctkAhmzAbctrRSoWLyRA0VIjEFJbB7Lxf9eEm-w4Spj1ccj5HZLnYd07KBAGrUETdEUDg8C_CUDLUoKXnwCExu9rgp9e8jyzoEUI1oW2tpI9I3rBduV2CJpHK2DJn_v3VBUaEod5APz11rS6CRAzMUL9x4OUQw8pwSzCteh0FCK03emjnUbIwWr8ishl0NyMsFTRw9IY8xiVEDH008-y5jlpOK73ZjX52gBIBhOAMHBcz6Lge6jmAaSIyy257B97XZJp6OZ819md3PvhmEK7LEHkiX4fR-MD9B0LJ1v3f7ogIq_hF6mlogy70BMwXwWhR0EaJ3xzPt9_g0MJD1_TU7MnSvJpCaR3lOUqMPLc7" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="Hok62ArL2c2_UWmgyL026nHIw1Dh_O9wqbfJbyC0cqWT_Ls9B04Bg_Y9GAPsnm92G2ErmCaF9TeVLTV1CJODR7zoV42s4A5w77hoh11eMCOChdmJS4rhPG7lPdpxhY2XakbP_-B4LYvjaib8QzUmMR-eT8h1ebES7BBKQXwzLctHOW6lS5wss5WpzfoJKAI9rlGu8YR9ZdX0OK4okfwGXTKDI46FRuVVdQUCw7LD9PgDPmV2ooFqfCyl-0fZLm1xpsC-PKpqRHlw55xS1EwjjN5duL4yPIE5raOLq5HBlPuQBIflAZbz3FymoZLRIcgMGp8NvgeUvOJZDVKzzwDZExrDNbI82fB129D3gxJ8JyPFVbKXAM5cG3Lyq9G4Q1KnDqS52etnIyo0rKRl6n0I-ssFAVlPeQ1H-EJkAI-OmF8TEQG0YScA-9yF8Zcg0seA5UBls5cSPZ_zqFdvWHWyF_3wGcqFKvPd_CZAW4ygwzxYHZuVfoQeLodtzRAq7oBKthTlF7jWJNni0mnc_Nq7nZbl__cvIVqMkCB5OeRgDpaXpE9oQ_h34vvHwZ3aupMk790TAg699TiejJ-1v-qA8x7pMmb5K6UFUB4JXnnzZ0fM1LfuIzqGBbqX8vD48ho6uczm9E4P68NwFzlOIcYZb_0Qcpe3kT4ZTOSd8dJtaGgd04HFgqTHohdLXVIAxh8lo4iVrNtUWu3LCYImSrW6OE1QMFtkmJPzITRGkWj3N3s7wl1s7Wd_RuSPIUS8lmWgwLvDxrG6i9OSlgQL4F6Z_Kaz6QGzhupewV-mnKQEEAxV37DwiVnPAQ0iPG5MiybSJZRorpNZEFlgWUgvUHOPYadUj7GQbzqGgYOGWl-rnq95Nw_I3Bqxe8uMQRxme0OqznVD9dCivR3VUJlQzxw9x4hGHrNEWF9VIKpDKjZ4Ck6Hv94-LFAb5KoBsVr0_AUeOWuUJBurESttrNfzklNzSZzappcaS38kDmxDRyNlGumSBWHGwk0Fyh7cVSa9dDHqYGUQfLMaj48r7hm1h5lY8yrh2zQWd6MWDf8wEu3LZ-7h9e-bajdxiwJRAinwdepRUhNBb7YWC_J15u1y3kBeZc-R7K1VjEw_N-OqsUdKawClMeKKxr6k85XRq_aVY8P1xGbaYqh7HzmD0uDebx8rzta4HQVw-6gfRxoxkUAtkw0rJvBEdaytw2eymp4hGZ7pQTwwJIyP9DjOEdFwf9FhyVfbThM6qCKwW_20x9nomR4I-Ue6KxGOLEDj8EoPEsFHXx7BfkoF4XJeL2KUDkE6znrL1R2SeOajiT4zkp27FweGVfGZak9Mk1agxZAV6ezwxwqBEMVPsVsZKPbJB-5Pv6NrwIYLcm-kg8bnRkiantm8NgnLFgA2RLpo69e7YvoL2Wn6ndh-78MDNJzEooKc8ybeM1HgagvxaaEMkp-P-NDAs_qPV3uKv0tD5t6oAUJTkzzVVvPZyLVxivg0Jhny83F2E8RNkpN0h5XSZzyta3r5aU74j-yjYL99KHpi6TFn_Dh_mS3qAaLwSO40pL_2jaMeJKd97WoUh33EK48wMHzx289vsiro6VTaMetSw6WohgyklFJzmw7RAS2rD61-C2-l48hSAwG12G2rGEVW2Gj7zDNQuActNtgP5k4-lq5UDYBn4KMxHfcf3rVK0zZHmKXbOyjMz8QGjyQw0NLFfyN-fRo5MaAhs_JA1-Dwt1dxa3h4gdnC48hHkFPtvIL0LJceXvELaKr1KYeWK89XMPG6cAYruOGNDB8Gny-CT_jHziXmWW_t5uMn4sKkw4yh6fwnOZTJ9KUgIl83oJDUSURkADpWxCxHnMwHQ8cZX7AhQyqqggPcypx5bdvlkHASj6oMYTRpvqbNnj51Y89NTYvnbNDnRm_LlSTe3C1GM4hTa4lqFz1j0wb8RjQKPdAQUI9H6w" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="RLy_bedEyLSKG5GK7fOo9dPK3x4zmUbY_t9L-739EeqGHqh3eJIjqCGaiA2wm8D0muYO-n51KKDjmP5RdkQQgZtFPxioxNQP0yigBMG3oOlEpta1WXka1hatybXd59XhQj2Bh2JHXbOjcv1tO3cjBc52QZ17L1zvioDkULF-56tVk5YTj6HBkaD5_Z9nJKbkH0aUhpakFwEU7g9XWEdu6dflr10byXJUvcdiVMYchE5Te4ZWRXDIpDbkYytDBxqRUlnexjHQDtzYtxH_KneIte40xH4PaiIyywGxj-J92UZjf0j_WENo6UR3Y6LuPcBOZGtba4XTpQsaL2d4BmYzQUtelwYNLJqJbdma20Ub8OMxqDwp4qpZBYrll1Qa5E48fWL28wcUt3yUDE-81Pg4VoPNWSpsecYeJ2ytoyYvIFJi38ONJIBCQZUUwxTkRXjfJ-2AdQ2c8oq8RWJGhMFOOyqs_jaWOywJpFsuwYlywkIPBZki7bcGT9_xgmQ6BqusCGf3mS_z5mIhtlU-EuK2roZ4LYrvA-X92q9IROulhk5Ttk1TE2FBtxnOHna1KofMUSx7sK6nlLLMUrWGzsofj3EhR18dH9sHB6__i1KQ64A68o9jcerBtHs0o0a4f_bJJCbG4OsjYUXyxcbfvyVlEgmH0L7SCenexGN6sfXhQT2yuTEtCuxSoDxZxT1nsUKbnIQe0KudeN0oIr6RRTC0uE_ZETUTkHtMCX4scz_uyyiZT2vxNjiS3bE3KbAVSgVYxBF3NzLbGFgOrqP3W4MCc5TlruGmDYPvCKspTaJeu0XAsDMWKelZhbToTrN0sQWM2WXoCzJVNNnZOLYU-kYmEZ5-LrPuMx78QL1uW2dqsBb4hsmBV1Va0LVyXQXYnFVIIWA3q2iNYywsMvnk5Wmvyor9FIbk5P_Uc07VGOgLN8PB-coX_kTPKU-fHY_GkY1LvhxDiZ_EVY36U7yDSWjkIFMXG0ifqfq25fqGGxZy14nDyLh9ddqk-Z7lfb3Y1B5Y3F1WBxUwBesoDx8h7OOlggiX1-sjGzgS9qjSUU6SuBk-DD063fOpUTKBLxnrx8PCBVinbAyggJAZQTmSLr2nnE4Lg4QJZRGQ4iLj_tV9ZBwWJn4X82TBF0G6tRNvPCaMJ3BKieIYpJjx79UxCwQ4A0Uy83GqWKHKcpKa3w7bklFkGy-or32PUjIKvwiZUPqWJoA3rZj3TE9c-heoYY1BFrVceFw0E_uFLMXUDiKlCaBGGPx9w88hLg3H-1Fg72UQabLM8lK2DjlMjlcrukpJh1-akh7E6sniYWYGrl-fCooy8rUMlpZ-eLKLZDpxHwwonkCwCsuam7xDRHQmNHgIvlJGsHdIgbHFnGaAcl3oG2o3QmaLX0i3Wyh_mzotzhTmZZfsNpMVdWw5mJctea7KTuvBjoE_w97m1URRE6hypi-0KscvG9UxN1sl8rMHLmu3gkzsXhg0D6wwhw9eAyttX0jNt5uKeYotErCrxKUgCda01a9TpigwYYSUtW4-SJJLODzao2nrsSJ-rBGqYf6SqRYnawqIlEEkgFejXsJtlkb9FM9M7-mQ6fc97oLMl3BOx4-055phXExxeRMSbAsEHRk3eQf7-yOrO_9xLfKQDMjx5ahN4KAhLrpkH4ZnBZmK7PfvPot-jVkg1Z92oFmvvkQmSww-hvAWatQA3edKUBE9vGz38K7pc8ys3nZjnngduR7pUYk-m6DxLNqgxBa-rU-6_QJaIQNwSOJEKU6HaTvNtD-b-76EoPbtsAJ4zA0HhI9foOj1Y6huQNuag8zeJkQS3GwFA-feowANXPas5hRJlLv_czjZhvlAM5rdskJ4vbDbW5JjAQ3BpfzxlHx27YdvJjEs4it2Z0UU5KDtOIUWRKVQRA96oMDpvnbLknHpoMEOmkrBqQm807Y9EDSmKVkVLOkJVJ1A3A_YOx-LyQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="EmvJ7uREgKwZinbg_JRXfhOz7oRWofcL3GU1ZUF8fpPSGSXGOo70yEY3tGSw9N0s-puN5e7FDSGNjURV7povz6SJZtFPAl9PbD8uRpEY3In-7vol-JqLJK9cCVKpMyFmdln_sMMADr95vqo8Lhg3hYdAtiUwHfRyW7OA6lRDIiDXVt4zAQkc0HnunVBlU_Vm7zSV5E2ZFY1_SqiaJO1OvHDFTmiFdk_6F62ylJ8JQsb5kHlAW60-lZocCAHCbbRi22hSnyDhmmMTN69o3JntNBIaOzR9GBAdmlbWil2e-oGChyrijKAeFi51OSoxt2NJdAcYevTeIIWzUnsx6uubYh-SBZ4-Fy63KTT1DpK2JO05ynBGRqJ6U0njhP6SaoxU-75ETMeFUAEVcjYZ9KE7SUhAo4evRMMkX8UmKOuWMvdcQACWpk5kATkM1MS_XIRFx-2qz5stDHjs_FKa4GXtC2Y7zfIrodxq9IgJrQN6RJMjW-890wnFUyU3U6Av1wQyxxVYcxKUCGgQ7YAy5GT-_wj2-Si1nFmximuSCn8r9F6I72QzC4HFJI405ZevP75QYpFXObaUL-bDDRW1LrVSYQiJWpW2DkGsgsR3I-FvWakmQE_STg7bJrFjhcrACw5JOuhvnsQQl50fkdkyuGBL0g_KIsL2gJNYyGpDe63LDD0I_Rf44MCnlrQCKy5Tnt3h-MTFr7KA-7jNPxXn0w-OiaQcuFeSQC8QvmWlFGMOy9rWQr8IAlmyj7Gts8JIQkybrD30KRm20pUDmCGmOrVNkSmPtXTtwlNGcEuRMtestVXS46l4KverQnfk9e3pWSgs43HHXc9DhkZYrjr1TG-hyqm_vJiGjTMMh_Nl1ZZ3NLCfAP7QnQf4hKEW-YtobHY3WoyQaAYeeJGU6MJ2GvqUx1laRpBG5W45-Xfn3WIfYE43r1676itDG7VjPMG-8FOwaynyYDSvOChVSWvt41AOQS_CectPHaBSfPPREF8NSrBndZJ6_DyelRGRXfrZrOqUHeNfE5_8DFBcWGPQCfdZkeJoIzl3BFOYgOo9uoh0qmwJEoKJxUbWgYgoyY0R_Bbh5Gv-c8o7qLISdvcb_-DgeVT7lK_sHKIRSdr52-VfDsJbD-vSqrhyO3d20tEhnA5L0snN0NU1aucb1sEJKgAiLorhTAUr4N8SIEkGiuQP4hYe8FPETcGs9pz8AbaiKgFbXftPO98Jf-5j7S35jsK1iFx-BRKBK6j43KwBPj-BSbv_XINwtQq8PmuJWJXdmYdkpMGBEfLZ2-wU-H6vvECpKcSlvfRk55sH3uGgaYWr1nngSdTCDJ2dg0Y9uGzqELbsFD4rLzjsS-GVEDQGm1N7pBi3MKBDWpjtSOwlx3PdH3nVDgsu4AiKAnuCoGJszSZOJItA5PiBoXbOr4VmSLlu-dYqeIS-mt8TFfHDxWYGfHKOhMk2oFL_1oqZ_qUH94nxuEtdV95aBOP-ndk6xGZdcklisennV5Qm-AwT9lt9pbzI8sr7hWj6C4JSzIl5hA9vzYHjflGyvIlioo3EjVa1teNugZZvDLmIQWe-sOF-ZVkfpmICoQtPF-gIQFwpDCQXVkYhzKsBLLz7bl4up6HMq0LTSLdoZV324iNNCNiaQqvvJ4ok6w_z_uHGKLd2FIlSNm3uR52l2CSBvxSGjG1BcAOmuDgzqY3VJ3kvu6MM48xvqD6wB7vfrAXw1mjymuaMafe9V6dmN3PWHWzeqWBgpXrgbTEiaw58zwINTo6g1Kir2SEGi5_qBXYKCMsf3aRP0epv7AVIp1u7BBcemz3a8kDy6s3iiCEqBsCNcCRiwoV7d-eP2Y0nD6p7TaOrSo7RGnIEkYa-RphEaa1wPFWgfUfJewkN-g-dJWpEHyKOsN8h8dBnKqNGhQtilnZ0E-0Jb-4YXhWJrnyITYSXdLaxrjFbqQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="DNaIphoMETyv2TqAdgjLR_A_n3x_mpIy4U0gFvtpKLyfG1iN2hGSmIIKHVMInbjf1vcaXHxRtNCIxyfpYkKNGJjtFsF9Rw3JtCaZ6CrYvG4rprp33dWaivP88SPwmozmYEVPSBIIcuQqxjDHL22TQJ2DLaxZ-sedTxTJE_jj3kd5LsxHSJfAbS1wYt0Tv0c6FoAHbHNYi11OX9FPSLIt59lx7kCdmlVJXKpAhvAFRx6Xdq8s5mh_uvNAHXzo64l0HpuYXBIumO_xAq-2NkBrG1OIj9VEU6e-yuM0foJsfJ5-xojLm8Td2SRrgHNrwXQWyqQmKQNsIWb93UtNQ19tFyOEbLK1iIi5icBqKFclw2s22PGbuAbnjrSGhXRmuSCKwUYjKV5PkfHdeMYs6Wu2R0J-6ncclFa8Ld1brA7VbXEN0_sWeb6NrvJ8UVlohqjJv3XirGwYZBScMe7Z85sCUvLcetM8ET8-SMZ8FO7hwnHGZMygZwsXvhM3dkIEstcn8OLdu_nP80LpLz0KqfIygCr_6o3Vaxl-HP-tnIkvlvDbFqCvFQSkDxXN9qFdkBID2QQY17tZqzv8Zi_8f0nwM7bak9khjeSfP8vGl9YL95yWXovtNy9YZ0_Ww1cXrgJ9mRYChpx4mOpB1ACxw9SkNJ5IdKGnqLOHtDv-Bh78TBliK3OWMecKVa2RF3MJFfILBaDUbmEaTB9MkZnEp6eaaHjMF4kyWiTBNZw4E9an4Ee4WhmR_JHcL5NWUdXuUIOqICRyipXb_R4D8wDDQ2yzY1kvId6LPo26ULw_E9Rd2Uovw7MdCfCATCUiJIqOn8mTNKUX2tDhJGCkkj30bUI5LoF4K-3HN69Qao3sn-WkugxsBDL0GC9BlfB4vF__TNEDqc5sHE4foH_JKd4EByn4u4W4i0vRzKn0xDeMb_Jf8n4WwURai3zDpd2a2BnNd820ELfBHHH1sgdEN21xNdNMogzT_z6cXxIaA49qkoBhoDYiRz4J6q6Ca8ak_Nn9DlBq7u419pzWXHZhq1S-NJukP65avslpTaBVOgOs1L08z1lHUTyFDlGBYAf5rasTTbXYezvZ8ZrH9hyAnsThruaAKEO0aenqxCxybK8xubQ_4d6rcQTp_1oa60Yk8cf0mEp8BAi58J-GFPNvVIuWeaxTCPNvrogaIms04KGBOFYrhDuJFV3VeN6tTow3c_dq7S7NwmIa5A6NlJ7HrbL-HFwgEuBh8Yb9IMdLyExChfm4Mk78K_uU52TpXwTJXffQKpxV34uWexXn-Q2MdBrJjgeJ8NKbZLqU57m-AJ2grFux47W8ILZ3O2FCC885fZjyaJ65wdmEH4QwPezFu9pmH2gaSibvW05Vi79znEFIZEdwcK8fuDRldnuTM6xiblfLUbSBHracSgwkl7DjMcssKCfmrTE_-F2EVrZUIXBlrrQX9EviJqZecmgjYOZZInxcarZ8COE8VDGy_-gJgOcW6eH5Ih6b-8PxDiKtKCDbV5ckrj-BCtZjjjVcdsfnwyNStsHupGx2YsBGbl-ND23v9u-8dU_UHq8BUZACqyT60KcO-f-_z9ZIgItA6MsJgjdwh9dSFHTkK1Bxou9uzPElyrIHvSCjk9PHHFcl6fn7mLV9C-JW4nE9IulnNFvtDEksscqPxSuNGQNNA6jAzx_dz_OaeUmg8INwmUFoEmMO1V6hhgQsTzSteA6P93zpC9kRFh3cthCFK_iekxvIfyKF4pIxw8UR9ldqn2xO8PZYQxGFI_8hCmXLhAS7BnBxZqtEU8uMxdfrSmKF5UAfeFsNUyKXhJV15GFjBtFR-1AmEBCO42b8HgkxxvOQhLzv1UyKXco5Z_1qouRlSW1WXAKyC9N7w23aCxLQ95BGempxs5wiRMOayiQmRvbbcI0-PB-zraBWDsWhQpq9eWJ6exwAKULPx42-iTdC" class="dir-link" target="_blank">
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
            sessionId: "6c66aaf8-ca96-4c79-8ddc-39de4355d7b2",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"0B44V61L9RK01"} || {};
            
    
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
