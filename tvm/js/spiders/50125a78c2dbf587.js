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
                                <a href="/kw-click" data-ct="FsajVuNWi9133a0LaSfk5rNYcOoueRw2xQx8gtlZS-giH2O0XEm9RH_D2BV38Bqr1Im7sg9kUSOeYs7Ot9LGfKD2E8cmkBQZnot_ECGuDrFT9Sji9jP5NftYCLkpnnxlOhMBxFHz2cStW7xO1k-1oId7CKcR1OnW3MCcJcnU4Ef1Y6J5r9hFJNZZLX7qHNjhTsrwPZpb2oWYrNWnGdfZxaxQiWhewb3ksFGow7MsQyDV6AgoNJmfYqJHZhBLphQXdzrge0eB0aedTVORFD2ylSMVs1AoiPuEoFLEXs4O1JxbHzzBiNs-iImuJeIWi4V9ZHIagNBjr3MmwIJ_ICrC5mgP3BqLHFy5Jovd3QoNJd5yWgU7xYxGMG_rFDqlmg0FBui_nqWL-eJ7Sv_GNaVD0VSjK004rpoSTCUaP3rYlF1IfDMcMzryqMcPZkS9gtFuFE8ccdn51lMeTwLfJY973-xNEGNU3qaiF6hzULTYj81WUcrM4hn9c3LoByaaYEGaYeIhjvch2q-OkyyTn7yEV7d0Jd5x7i3N9blrevikdQVU5eBa_etd0PIfYX7TeOSWLQra6gqeSLvKNNgT3nz1jjf7FrT2QIJla4wzp-fFhrM3vQ-mLxn5rOVZF4-5OJE42b8XJ0KYlutCenrz9GSlEDX33Pqt1-IhvtH28amHoVaGujVzjcU8oziJdw8D9K_nmZVKnxQL2Bgzb9RAPruxpWJ9CKPspvR56LjUj4YmsqmR_HXJBtnlyDfWe9bNH1_uglKEtGu8VXHsuH8RCzjBi5g0wKwc3IA__ulNoC6P7XrL8dSquZcwns-RFRjUh7TE9kI2EfR7drsofq2qII002xpO4hLgraGbbwwebP8A0UEOaATmqY6tZmWwyAvGIV_aMhItd-I-ugtrHtyqYoD5uzw_eM9je6A1fepZMsSoNP6G_olGEDtdy5RpNZFPhbt7fPYe6kJOF_vbmOY920qjhp5Mg1EX6EhQPIpntCtb1ArugJjq3LLXL7sVPm5aWU5xCI_atxjFZIhKi_uA-l9Mr77H0znSaZl5i8X0Lckp-mQW5ggXMOb9r0uJ_uWzWlL_LXk9HjoE1jKV4IqqyVpxoVCn6SxZifD5upmUdmsdIekFRar4Q9kYUE-8mGv6WdaYeNdL-C7_p_t5izHRw1iamfbSR_uI18611bEZ1aSWwgID5jyqZnif6UnEnr4oecNlcuKDPQkkdFD53kXOtWuupY4dQwd4TMOe0D3yUUH6lE-sFQxyZLxUUBHGbsWvuElNoSvsyHZGtJJICMob2xEUUxKolTHOxH_RiavnCdMmRk3w1N0g0vge4F3aAKHx3P8GRmf7SNjvH4nPwhkRBuXMo4CWZi5BPQ92Cyg_3pSAXUEW4__g_Aa0zMlAmh57PUIKVL70IloXvYcAIufg2epskvBnTAB-fgroSP-uZ7_7vF2bZTQ4kU2z0owGQdwGQ1cSd0_VznBc-QwUd39qtptoCQYYeyg5LmGq6Xs_GXo_0r2gNktSsd9SOUDbyaqvH1gevWakNb7h8gT7fLz0JJ2wF7lYSzd6Pycfmt5YnyMp-0hCQVLK4yw6LBxuSTdBJUA5BWAHK6qSy2YB1Ky7JJlIUmy6_VhhOu5_raZkB6299-YdgxZQN6aB-t34IuPQ76aXy_nvTdgDH7rXTtixEjUTrJ4bSI8kFNIE-ZReuBO8wYmfffVKOhUTO_O3YkX2UWk3TaP1S6_3ekqkWQMLhypWxgAgy2EN7f7IcSCXEoU3z_3kfAGNtyrANt-zQsiD2fjm3uuHBPKOskIGYfojjaDuV7f607ledEwZWnkIry82zYlOY3eX2YRPVis2ypLhMNLUAI2t4AHHADjs851t8ZGZ1izDvua_x6YLKS_rEj79mF0W-KaKLjyVC4TRl1DguGzod90WnWLVov3kA14" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="2FJ8axmemOtdvsQxAqbzzTdaKYAc_jJgGGxMEa2O7bWLuaqtt6-PDHaLzPaPkyGGnfACtAgJdkAijPU3r_5fPRbGl2MV7U1aMf8pIBs2wBzRR9C_PaZx-HBP8t1cqLtTr1_318jIPXFsdwtS4Seb-1FNOz6SLpiChe4oMEsmcIXx6ycxq1Kqwl1pdW7Ky66iTWb-xHDaeyd13JGmMbJfol0QiHGzmJCz55X-Sqx1xEmNanbevvkw5Nvqz0kwJC7VkhVWB8fGvjCto13Ls-IDdDcs0NtvPZffgK07StwkJ08kW_7Ztu4lj1SkBWYT3vucwCE0sXaHNWyfi5CnuRFiM9jjm-xwPit-Waas4BX9H2vKwXm8Ed7DUUuAXMP3seZ71UQ4gA0K7ExZ0H0TpppYUOGNC5xkdwr5Ck9vr_270ZdxQwwDklYN9L0id8ZLPwVkZfF_rd-edzrVRfUF2CRRSZhQX_9w7uyaQiUQBQ-7wfqMa8Ziblv3jCjCTNTQnwkbMOMbWkfmK0eA_Wm4hGGwra2HyXJTohI4HPUuZ7t3O6r7-FlnVW6J7H7d-f1yfhzPaLur77BB7RhgV7_H5Hm7_h_hKSa5j16anQDPNBcax-pNsyF2Pu6pKjvgAX0YjV-x-85seRBulnJprIK9N2mqeiczkaBR5lJaV0OSIAVVka4yDWTnZZQ3BiFIxuqmhzri1XlDhfEIZJnk-GtomN5JJNi07P4k80DpvZAtWkBwqcp2zdA9pnJo3VAgtvXsZGLyuDBznkiO5baFevaRxF7hALwpIQg52NuTIlwGrUx2A1kFi69E2GVWB3Qkqdti1h2SX2Mjud5xk2M7VtNMNuPszw8cY3-aWyiT6G1gx_a0vIgbVVHXMYDpSzGkV_7L1S8yVzIIsVYGw31v9P9wXfHKeIo7axa_QbEuRunwd5JMOQRDDE1pogT4MyAO34oHIPOJmihxKylJWJgVeS0HSZUCzn_Lez2i2gDgRTrlOlmPJg0px5nE3awiTkZJubD6SAb9n1iGAx4AB1TbPT1OVWBOr6IvL5Tp-Ic3pJucgWl6ZOoAN554MNeEF1y8dVj-u7fTI6q5UNT28j9ydn_RGTsoM0avYU36NCwTu1848fQkVmBlvigIEQ5sNbvmh2qL3xAxsX-RDbkh3Zx345MF34mcCl_9X0UctEsxTIV2_WAJVigTaGJ38y4GHU4wC0WImckkka0RG0aZj0eGts_ROTas-0kvHe7XMj4Sze9I2-mgkb2b9Ao29BSr0I1885NPxXnE68xj--IbVnPDmJ-dPfSeTOjo7_d8jYuKRVYKs3GIoZPagBrgx6xfX5CJ3twGdD-BzUdC3qpda7lVxBowvKpkJgWnti8VLiA6CvpGmnJAAazJNMM69T3YQiXtYbwP9gz267F82okhExwOAvPJEhFrDNgi4j-HUQweFY2pk45BZrZXp174VtMTzJLRSu5zHX65x013QYMGR4aNvWhs2BoH4y1G_xk1lpY7yfRDSUEmJ0AAGAZEVJ_Ea8JKgtm1CZqtE9P_wHNGoeOm_sThfUg3B4ooZOzvk1ef_VQDREqHNJIhg_SYYc-NAoOuVzi_rzuZJmX8PI8fkrP70QUYod1Ffl21i6yDr4ihLCWnj3Q047bjnqCn6afjr4m1X4gr_RGG9jeORZhRR2poryu7_IfIZ6fs4z30yHBsHPpy4u7D4v7WebyIsLh4685XPtuqDa3AMzNvZU5h88GgXC2vHEKuA04MLzMd8RhJZVAfZp3ADdQe5dEJmo3oxcuffq0EJdQH3X2s2wq-tdk6hKdLZeHkywzEGdn7dcYgUNaOpQ7gnhDgoAzzcWbPRxSRkjh2mqDx55ql3bMhIEHZM5I3vZu9W0JYhQSi10MfQzkeEQblYJn08lL9wHJMXFSIMuGj6BSywNYWGkqserhEmogndZ8n" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="17SIfNx6r-hum7HML68mYJRYaw6HRTQGN875baNMPx_zGROrhRS-pgOZFcMtg1EQpQpxP5AinFjeOFrz2fnSOrflHFY3biLkHNwDHrbgw7VnLH50Hcc-KEGdc745SLMO22FaWYb1v0frCp7zmka8Evml58YSA5zMxhLn6DjKwzCs-687qePvCPLTt3Tki42leQ_ljsxOWJy9gX3BKUbnlQ4mVEbd3eORrz87i5ZenI0xhGLnLgaPiSUxmMMi6YYJHpVqhMFQwMAg8uwhLwfjSzASJPNus6vvpCvqHGrP75s_CGspHdZE4px7-azkQgVNJK6CCm2NucKZ6xO4ryJ_v0Ex2a0Uj6-i1pbhcy4_zQaXnEqvQYGxhhNKNc271pbY8NuJEGoV0_E_if6nnBsvXDIugRQFiZe1C1bOlQ8TkdJSNN5lg6n6ewsJ6TyoUY3n5Z5hfGfpq6xwrPwik1fK0v8ICJGImn7uw9B4bHS29NYJAwnE21-MlZAtBXjST1-5TYWHqPBdSP_1VXPY5Z-JAdowz7Zl6rH4yO7hs4SOmI3g5OLwiC71-phBPaiOLiCuNCPh5aI-_ImAC392-MSOgci9_GahmzsdPEEw3gAEuJ3Zw7BAPc-F4G4MQ0hGacpai9t7jDIwNPG5pNbNe1gi2DnrlBsLA3CAaBVgWwzbuko08t1JrfHCcdbRF4hdbJZvDdNRe_IDs7kd9tqTyvdg40IpxE3l8AS4xyyckH9S_NvSChaiQ2Cn0GEzrZAr3UNGya2d2zO11lbsfI0Vl9JD6NURrelx567ukfFrqyrhktRkeSjXnufb5DT_SzhvY4gI8uIVlYhIQc4vSTauaijWqOxmdEbEaStJ9zZ3CuvWtvblLc_DRnbgeS-AfT8CKJ2T3eiNJLs-FvHG3-Fb3sm8HTWdYLCSE8QepTqHKDStxCxU8X3WFel17eWFA_4lmpOVLp_SmJfBntzgKtv6Tjwl650Ot8DkNFgicSbZHPQ2r1HxkaZi82TJwi6syq3OCPmRqd4ZRciUPfh5qSbtJM4THZnC0YOP3pK4BcjqM_kK937OS1g-8jzuxyJG32xhEJFlCn9WevlSjZpDa43GTa_ZZvGRIlVhdhfz_2PhK5vgx3G7VHj6AN8xpLuOkdcyOi2TpHCRRZV9JL8TR2a08BPMMXlb3zHYCezxCML5PkzGFaFTsCVWuzOXLO2XHSLTtsmOwSh-fBmmvOE48nBMnc9W1-PhUe39SAOTx7df1bSNfl9e_TZdb7_g3zy2ZnoEcn9VFMK3Z-PI-gQA5AaRVL82uju0v4QlqyY5cOU7XY0tq4MEJu-IUqSkdnsVvYLajs0xU1OfUwlSbunrWYujgLYXPybFhhUqV-uI4Uk3TNpENZDCL3w7ZVRxbW2fzz9hKjgKTjIBh9re4g5eLqf_MVYIyjXK0lDWgsQDJAZTwHUcW-iKWpfpdU4Q53IuHsvLGr5oSpSyLU50yHvGAp7mq_W9bXZUPScO-P8Ea5o6U9RIuYE9gC5ozlY9q6Uddjz-LAIhUL3oi2L7Ph0HQ0z00ohCCbioHrF8BIYMV0XpUlQb82Ka_nxyiiU0v0SifXgsa5aFtbkLYOd73OPOc-XS0TmE80MUr1cfMjKt0p29JDCmeklRHzg0ywqXOZyMWOhooKjLl6SeLpSlbhxmHVjabDEiGhKPqouFEgaaKdnMBshA8T2B97-XUraP59ppxVRRL71aSfA2CPKsfk13-bW3SExLm0edaofg-Q3hCYutT-kWUi-8-oKX0ebIxGi5MwNqbfm7qhhf2AyXjypdWTUh1BAl3KJXoSSmQCxa3ISj5ngHGp7cHs1F784Rv18EXDktchqP0W0YLwfFBoEaj6CPxRhbgW7yReUQ1ERYWwhs-JD7Y3ksis1clRWRVgb_0Id5yCD96zOClI7LzR21JW87Dn7wdWazwnz1jH3G1qLs" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="_7jLynojQZ9eLtx5JYSDImzJSum3tjZi1CZgecUF-LhHkO4B2L2VVRn0o9yKkuWf_mM9OjItWpRwwKF09ydw4_S8j-DYVjSc5x0QGuUFnXu4L5xSV28hKRM-YY0tKKGCg33T-tqvSrQNRsBZCqi7YqII9KqKgMeLNFbdFbZWiV5d5UIavQd1DrM_fzfrPECXBeoea-OsKuBY_px-HqKM1j6OX_-MqRCslsvn937MEPvk5JKJ3FK7WNWcSlEdRYCC4YeRju7UjcoovHuEGMsEU1U_pCRRVRMCai8q4H1Fd_QkJEfD0R0qJFrGOwlQ3mFAZ-TvjaJ1mKj3WYGafzLcm-IjOBl8YbbjlHooXzCDF_oKytqh3l266NjvGhMpw7VZTKRILnZL7Kw7VAIcxtoDYeWd1_Kn-wi27O-IKlh7G8kNwH42N2V57YeQI5OlGNudPbhKJgEmWLiDE706__afrsSneXByOTC1Wgvo_SwNlYkS_uRyGHN1cBJjINrfgZrwIVbLwjkgxqSNthSIhBWQ-oFO8-h4oPpXHaL9EpKekgArV2Hv_LEWk9z-wLfNIeXccBHxuKF5Ly9_lTQ4V3vYjlbw9jmONskqnIONlmDCMFwiTe64mu9PQP8OkEiMHp20u7p85a248gbkaII1GfFVeUlSGTL42bQa-frt6xqdHzZH3yNov7tHF6opIDtjot_7vtLn3W9Jz45H9IkHC1T346UCUqp1kYfpW2DQelc0TZPd_1WdL99usKF9Bjy8xT_zEKTt2Rl8kLoPgbu-nd5OxcN4vA4aEiY0zmdTz3m8IdOyP1kALmnPjBfMknRX6wWbywdHpMfKAdlYSKLokU4ktqD793A5RHP5lHFENkjnYAXEVWzAOI-kIBp_XX6Kp88axeiB_fNUn11nPc17wd5vAivYGWH1CwgwqjE59octe-QZ6d4afK8YNiF8B3a80DaQpwZ0ijs4IhWwxDVODw8jNRJptJFyEvSTZl1txC8zsoaVt_h7K9LuiacgNPVEWMfb37oWzIc3y5Y1LAxiVnlrbL5Durzt41-qevKkGaYxjH3CygmC3bLmrtCm1-O1Aoyx_rr5uFTC-j_1-WCv9lafw220qgpcceAWL9HRkzcgfbCt4Ii3AOXnKNi86OWKM1kYSToFnO13o_xWzXjbU7hIiQyqFqCnGcfsbz_6XBrsnx_SFbmmEEN_xDLFgjTvnvJzvSrzjVa0YFbmNAMvG66hCc1inTFEMx4rUT57zkMnelhMy30WkjmlXyAGB5KK0BX8a8UjcGg6ybKc4vRZB3etEvIEEFYORLiFALA8v0DUHBtKsrCdBnEQzZCapBv2vYB5LZmVoHEAGlO0orIkLAIkVSqTm4thd5PdUE9eXNpnXRUzlH30nkPJAUrfAO2MN_Lhq1-xkyxyMpjnTv-qeIvVlpVVBOhYWHvJ0VM8u5lcCFCdiR2_d4eUNjvCbM-xIbbfxEmHH46GzgTFIAjQ19Bv0cROsxBsevW6SrOm_EyzpfYN__j94j7cjsD7lW-FSoKB_pO13n7XAhIPLAxQ3xTNKRhKfUPeuj6e6nwZA3S896_tpZ56z7Abk8iziaiaVrw-l2C0-2dtPC8koES7n-OiKg2MFCXg2MdYDdr6BcMMS0bu-bE3ieFI5zhPbMUXYkLokjGD_vGqY2wsScpIGrtdP_H85rLVSbDsClXFRZldYJeydFMQaZpffMOELGcvWS82vmcECu8AowQ9RFhTVSya6VlKdQs4S4fs3ESiMfxn2wenigkweSP4-ATqqQXY78T_dMi-jDVHbiNXw3n_G6_AdpyYqAnmRPTIXwZisOWv0BWfJS-jrOEjTpEIn7_vFu-9ZM_dpc6Hy4G48K4J1sbriw8dmU7eH0CsbPT4h9OJxMVTPhaRRo3h45PcZSfgdgeSJsoCTTESLfkmtSGHqN3N" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="J-SCfeu83VY-UKk8V_ZcST2U0R7XzkEtth1TmpdcNkMhglmTYqedRLF64zowzmJnS9qR5BOR1jdWpqYzoj8YDfYNwhoZ13WtWHhePkFhYzc0IklxBSEGPG6M8fJEhUwQxwcotjBqSitFx20Xg8ty8IIEwE8BegHA787wZH5S201rX3pQgq6lnfQsZUFN_5xXz0BHdoJrcuh-bCldwMi-M8CKaA1NQOH5lyig7TnHdOIOMfTxBea2bRDZ0ZZNB2kuxPgpSFfRyiP4Kue8fyYt8V2aQ75LQ3XuiaSG5DrddfT-w6ckJHk-1b6TA65m0xs97baN9cnqo9llcexvJlLLJ2hpmwa_D9EluildLo_4Ejl5VV3Xi22QSCZIs7qv7b9yZN_QarNC4J1iXk1_HUU6LL2v9hojlu6c1xg7FZH5CR4P1_bz0JArlaLlIKwzHoA4uwzY4cw2T3etHX076ZlSHUD5eNEuOk8FCpixktW5ocxER5cn9nKGV3m4U9d5b4wYJBRJqjVYrViJ0K45VGZUafowv2DHZcALG29fUBxBOJPG9W490KaIsY66x_quOIQCyc-45JEgC16YDhzKJqBm1REx0TBl0N0YIVQDioD_mKnMUXkoD_mQy9XdrHem3SVJrjk3OUqVNtp_aLwpJlzVCmGgGHHSIb_t_bmzlqgUbrx6MIlDPPmu8MWHK3SLZGoaKhd-VzSmsrFYcULFvTP0RiaCPMPheTfL3UNGWKUeJlwLnNFSwbmUVLv4eo_9PU7ENRHr7eDnXWaePh4fbJKKgMbxF3Ckp0EcMDr7Qe51KJxFzfaNuZuM5WGa3tHY1kWVjSNYgkaFjkSAq8CFZfnfTozOcgHUvyFYBJE1-ufcdPCaphDHl-ePCsp4i0zn3_9GKrmF1jM0-qQXoIg7p9O52sa_OR1980tKLbIvm1tgPTIQCnPijQbd9LJ_ps2vduxFdZNkjWVbyrq0tnopZ87fAvih8xqtk6j4fRxGG3Rn6ZxGmFdZQ4Qo-v1n8j_fAqaOQ7jfMpKGjkpapm_Ds8PmK59Re9MTb6Zu46ZDlQvRBX-1aXIu_Y_C0_Y5KAdkwXk9mpJK9s_vNTJnWqA6V9mXHI25q4jXzKPA1jTPbq2ga_EDH4uU885DtAVEj1K3zroHFsUjrr3cg3V9dvbq0NJ5ncHN-Bslek88knQvKb0J_ehsgp1yZhkILMtcjT14jU8gOfaxOquiZHtptABi8zArImVzyD0jctgDlmeRjJPFZqWG-tPhmkSSG_18ckLyPBMwyTIPK6lMNEEvAo7CUs0Bj3pBdk0pxEeQVflNEs7pqcxGBUezhCpj6TKExm5xDp0fZdzn5x7pDfBv9US7Oy3WRF28xpovm-5yH1RcgAwEzkjImPG0wN7DI35ZXwhB0KXDFZWlDFtPhanRR0xd64b_M-jIAzcqSmOiZfyfv2dbvzVyPiK9aq1_xSZqa03KcNOW5LQ7CEueniC9INxi9calElaDtESA4o2ln-5jZM6OR5hcouttomnymeVl5ON9V90WSNbyfK0_zpKVleQdi1whMHl-t22gpiSZ6r3G-fE5wAsxQstZaeBqFtJhe0pkrBy3TBVtmEIGkWx0NySVrl376eaMY75NLQ17sHOmdyV7iaZFqsmpL-XvfPAmTmYl6k4ymWdvZe0tz7fQUYslDtiUDlarKl4wkC31xOQJNQTfWmUsGiColgJN6TitkmUtbmvZ-R_KGIQr7o-J4Zx4AGgrwYhd73yyqb10fd2KwRbJv-XrrNjFcRVYwwWjcF9GjUYZ0Q1u2uM-vo61xMzuUJc9prTYUb1K5B9U8s-38JXyQAoamiyftIzXgA5KKo-A8Nlcm_l-0L3IM5cK1pdtbYbMwxRmQNGk3KslSBR3f-PAcoZp5wgYCO7WaJiCmBibYmwFP2qWSnLq_UaSww2o1Y29yzT3O6JJ5MYlWA" class="dir-link" target="_blank">
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
            sessionId: "e635c347-c197-428f-856b-ceea530b1333",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"2P93C31LAHKQU"} || {};
            
    
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
