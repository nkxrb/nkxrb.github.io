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
                                <a href="/kw-click" data-ct="mr0SQfOuOab8zRlLZI5zQxRk5wz3VS3YG8rGtplNVSgwsAQhEBaf__8OyuqRwYEespnwrn3UUDPXU8Z_hYEi5_jzYSXCZ3vU8G87EupEVYysolgHBTYstKFmOox_ckT5UiCet3re1fSIcTRkcMS0NQ2yplZTclD1HtqLmxUGMimL97PgtyC4zeOzFDHJml8irX_flqgZu644qKHD2IAc2rmnwwjxt-8AgoovAzzPn3KcYazth-UOTkKulzqkU9HIErn1QcfRj3EVIRLHN3UO-R5Is7-u1hJyNGv3uD0why7AnSW_Z7RPbx1sKTShcd8go3Un9Gz3PjhxiF-fEbkdoUsvTKJoHjxyYQ7A3JO7y33ujAfwnnU2Z8umMutfWZmU-q1OFQIyKwt3iPHLudkxRwksIO2SSyyNCbklYYBIZA36MZ4InyT_L6d9qiRRkrgXE6lPpCk02E3UipL7VlmJkqHH4QZleIPNTFhpL_pm_D1rtkvS4OWXr1RD06sBiFfN5_KcydRFVMgY69onmnCbhfRNICXCDYSEAUfanUo5EXmFHoZlMtSo0st1_4Gc7K5Acqd0QtP_Wfhp0JJimN5p2LyNHE5yL3KMZwNt74B4BGVjNBccnFzO3HmNvPOFWAAB6b-hFi7cpJl8zpw4idem4_yuE6_rV8MOFJbIjP3Lk1xNNXGyIpsPHjBVEw_cO9tZA9gIz0gSa6CrGA9yPEs2lVUh__t1Sgxxy0hr9JX2bqfRGoxUytLi3NnbBvlhQfpA7xlZgyStk9R_ZScVkGjKJPt04a0VH1QTzyd981r8aSWU_puxVPLpQhe088IiZFFe8WQ4CHM_eohuE7N8mFBpzdAusDqB2eLI7B8taouaDkA37IDkKdQjl3XCAp4UxAsW3BtnbRrsgjGTBoovsL5jR71f4oUHgQ4f5iUWckG7Eqm7zq61-U37LqrWOVkLUDrPeaQ4EQSSiE_AfINLhrW8Byd_ERtZ8ctB5JEW34e_lRoke18cjvbIvbbRJ1qMTOn-QM8C040adDhCErkVUVM4HGRaTtvLu6QhdXec7UelArmvToG97n3eQb9iv5iOlVdNR5M8YZco7NKMiJzLxIguJTjfCrdrO-8dXw8ezhzkwmjDEvhoiww8Z0BQsBAhbcYBSfPL9tl0XWijdJuZkai0Uop8Bz01H3UxsVIQAwXMD_VpVQfNSRi6fDJ5-40ovfu_MO37Krm5NwuIykCeXn7CWDjuridM2G6-M2eA_WiSZy4trWda8_lJ8VtOymWG_8dN0R_NBBrECNP97lce5vbBesLBN7uyZB0nLe4RegL1ZM4dtCS-3SkHzciZUZGqFnK-p0aeaf6MH6GUqpQJE7JN3Rpk0tWMwsZ3Ca0jJYG9M8Ngg7XEPadxzjJXc2X_EPCGfO13QMU_MqjokvoMzHj8HO0gmHTqpENQoQSrxZbN61FC3amlsCxfuEd1IX1D8V0R0taXxSCVo4OrjabUbp5aYd-BAgn7WLIdDmNKhzBiBVcgt4cfCRoC_8_JB1Xdr5cHvAiKtlvcoBJdZ9NASKowAQZcrmKqJRjTSNjo6jKS6utR-qTp4Y4wQ1XXUguxuogu1t2P0H8m4M_fjFqUz2yzYaL-2iwenAeJghGGO1I1opG8PyKDg1Kj7Gq3Z4BhIYLnXgPlr6u-_l3Y39FEIFSWShfu8LoAS5LOQLuagmd6a0qkS2NfzaUJbRwQEfLP1QZExLRs6187zMDkYDfExkhYUqkrdzwrIL83ldhOtRYKzlT4_jSZ3OMowMc-X-vqfnUnpilf9lqUoMaBKBKih_te7xnIBA3B4WQfsT06SLMDi-tvz4ZKgHp0UDbK2YBkfkzTFQV3l8KXvZD-akZ0ng-yQyK-G3x4sXyM8PLpY2ufHjfbY4hMS_M7AL5eSPTKjc6jz7k8wUHFrZfwqy1jFy8endo" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="0JyNhSVDf77joQV82RDCjCpA7CQrJfCzxNP9SgB-d-bDFdlxVzOGx7ExGW7PpRHKGVMODgLL6UVZ3DubYWd5ChZteLHakBuFCs-h0DA8GWgGiQEKpKShKACT3d8TllT-MenrakzHh5LZFDfa9F1kkwk8JqItc7OIvPR8xJJJPLrMRHaqWgVi1I2noWXMLdfB33w-R7xId4wTbU8VQdVI-wUv5o75-srExWeIR30fh2bmE3MkSN8oaN3tqf4YunlmphqBD5dZj53F4OhbiCQANI3cLl_1hgTLDETynJLWpFrIuFRiwIvvHXLokHfYb9bvoOfu7ZuEGXVetFVLiJWLvChgE0jBu1XPAIaBHwD289y34W-SZWXKw8k10nj0ScQqhBfrXQLNPpUCk5RYURk1qJWRgRr4REvMhCqJO_XcEkTZsug6clConOpErhiWlAta7_OkMBzs3QpMdTW601DZKXT6FrvboUewGaCVjFqJbKDn3KOYNRgggCIY42w6BElSigAocrayBJx5rD6Mtz-5fyoKaSoUEvPCzKlABn_0CtWr8xdy2bELTxG3n76a1LuV7RRtQ4gxWuT05dMZsR7yle-Fl0pHjBY-5cwGrNvdDasAOKFOsD07NNVRa_A1dmJTtG4-CdGFIx0Xo4JBUcIuCmULrfvJrolhgO0PvS7hYF7IDrnuJTdcWmVUlH3gyeJS8kUg27Dtm0l9rlhmru5xK6KJUulPBq3N00boipblN76jlHdfTBA67oeYigl3EZ6S1BzlZCSIquBop46xHizUW6Y6_UD6RKalvvBfYDwoArotGviuFh4TbQOC_nJ1_xb2twNI7O4cGsK7Xsopk6U_AmFo--ieStq2RnjNMUd4mN-QiAKjnKzsISfMpWJtRr8C6GRIWqnb2x-9w_YJIVQm0n6rlDBHCGgVnT5FpGwOQnNfPMWKHKuF7FOXGuR4Ql9jNaMwFz_H5q4MGYFnTJruYWk_ShfAMrmQr-S14NpRZifFa5pf-ZwguxgBAOryYvin2LTsTVKIqH0BFYYC8J9FtE3Zbak3Qs216jNeeZy05GevHorG1F2Fo1MJXxWpg0stWwRneDxd82NC9sps7NZ9IScZ74gl5yW49vdYhnRuNxhMfL7im4rGfgNOJuPoRE4cG8kQtWy-mhTrlw3E-E9M1dnstFTp3WervO12imgJAAFpU6lxpiSPAjflbDpenooBv14xqI_kfoxR5dAPZquqFakqIKPExszjI5MAWsMfPeGiDVLMBf26LB8eF624OdwaCTEV7ffa2A06QHk3ubMwivJZZpY--iMAEBmKHzCwSQMaZZRXEvkBbRV-bKEPUrPegtPa-xgvr7YNYHHEpq03mUjr9h1x8jWnaVRnZsJWl8AZHGHZ5srgSnXnhSmCRlEX1eogecp96OcRAk0m0JJPrg9QUqGaoQQc_WLXslppkMN71oAAseqFZYOm5FjE0zUa7QZR2egQ4jCnyBGhAcsJQARPxgQMsExbCcV77ZBWRQGXAkY-oOwUQpCu-6ldUhCRHEiVops2upnvHneJqAAy7iB4_WRT67qKWc8WuYBWJVrjx1wUf8W9p057_9fbOojgcW90dbnGaT3HOlwGfRG33nwzx5JaCLTGEYOqa26_abASkT6IXslJS57fplTZ5ji-7wef8U5-VMmsOGemEvLQqexs_JQ4T5bNpVrqHTAKukART_jR6a7PWRxy9pB-7SluYHmz9N68UHLhdSgJllEyu6YoID63SSstfcBThG15dKMbHBmMDC_pMI2gvKiTQSAVCBlLtbRpIKml2EVAXOT2mG73QKldfMsE2_dFFSoJzuHr1Ko-gnfDHKeVEKZHqtHPAX9mhhn7wZn4pHohhnj5kzxrw8YWer2Lf-facc9DwRuePRsTLzFEgnsZnzkr41lGqmgWGG8eFGWy_1qvtfyUXeJlpzCP" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="CO6IfL4e_3nkkx_1FgsQkw_aN1GrjKyqsHVUOKjNOLVCeby-yAOgXPq1_f3ti9OLHlKY7-LwHpp4eyX7jKfMAcKue1JzcilUG6dhBqTS9zFJulz0t7n5vQ0_6vfNiHfme5p6RfFmVIch8Y39SJKf_2AJwdREJXr1x3-XIsGwlm89ReawmS7VWx5T7DHecauavTBIcv6ul3hK29x0Jv0RrZCuLW6WCTRsGESi9cvXieu5G_I-6SurLXobh6dJKy-yIChJdBS0Wv6xFl-0La1A5ZqpLhR5S_drR5BWGvagvq6zXDuQYSr2D8UsJKKNqnErXmeNwZdcdbJxk40dTgwxXYZHWwg7rt32IAn6e1jChVwSEmYy_CnY-dIwH7AkMfV4LKIuF3FQj364UNd5ZF0j7hjcwfpZkAx_JqjIeUxeY0Md2NMxeIGS76UT_ddPUkqNIS2FMZY5buQaHlu_24Ph35z0InkLFdwnnOGaIpC2sTJPRlfm6Cky1k55X3Mhmrva1zLcioX9uh5jSmNBp0MJIXmJ5qcMRoEJ-YfngTj1G2OX5mI8Qm99Hm3kZdS5o7mwfwifZyjwX6a4ueFIiDb4UskO2amj-C_QiUYkyaXIEqrmrA41PrjWrKQbF4VzLf-7gJdOPruCSl1CiAbFBfGajsIqlv-aS-M_bC1WnLO0ig9u4Zq3smGZx8j1AeYgRx4P4zIrXb-vmPHSDzsPogfI0uSsFvn210tAa8fjC1-oYvMU4hIABC6K85nT13AeC9Z63IPdzsaumhhCrnWBV2YaC146YjkAiwxXjwWk1Uwni1Wn5xPOeshQXP2xcIPcdTFN5S0sBt9-4I8l-T_e55VXuixkWRfnxQyPaiei2wsVPJFy1KE8eXIfOuxdeYZwKkkXjxJdWh0GivRrCQWWAXn7edQJxHiqKt92fDdN7c-zL3bJI909cvo38QA_7i-i36ucILhzQUjQNIdc6XntXi6W5FmXXBTGtohK8Z9qObjFHa6QnANX-94mwjlK_pQtB2RvLnxY1BazSGNDG8RD4t_q_1U6LpNbU7qfhxiYvPxdkEcwmA_zXX7UNFhqtEP03NP24fashbsEvHrUH7OiYwjEljaWt1Y3CzI7cen9BLY37JrG2-zLuN3OkyW5hj2hALKs14l_EfgBRSuY8YQhDYAtUXsCIWAYT4NBLyxZrNF_pdfldkzhk4nrekte9j_CfnWv5Q_SFyTof-1J4rmeEIq2OYHKOcld2ex57Pb6hB8apoLgeYkFMCuKNeL1EsUZ27n4scLG7g_Br8Lf38FOvaXSlLAk7XIHvi0PZCF-S_Y4c0uphHSIKZVoR54mNAHttnAnhzIGgG_RY5NhDvQ7Q5EdqpY-U8OuToE6gN03CLE3rwA0zYz1uIr39tmo5z7WtaPtpf6B4T2ZcEBqB-zKiUMjqtu4zYdN1-kSW3KROPH5XilCmb5ez7Ug5l_KGKJ7CpGzf0JuU5wMpP-Ty_xkDCsRHKQZSxQwlAWKB1NwsydQnX0gH8bWIkGW6ttIBUimCFX3o_MvYgJ_T25CJBSYDeNoTcXyoahxT-cTVTnJGNcoVECiVcxwVknoen4h9ppEXQ-zyAwPR5L7rwWjXP01LYHQ1BhB5WWzyW4XG95h6vzQqSIjK68grKtTSWPM0jOwRlBbf6DCSxAPaM4tKPH4AIhNfTanX7s6y9C7Dl17pwEC4SDhJ0hlaQCayLCzbnJ_K1qYprtfmX38nbzDxboqknxz-71JD8J8aWdGhVDf9fRaOVqtMr649hVDT7EcLA4qKYoG8leGmEaYVyKKK3GkFN-pZUgoabhzmDNGRBVDDrEJRRwAekc_uYgatT-sbifrz4VKy63H6TbjHxK0BD5CctgKmqjP2DA1IH6zp_Hdccho1ORsEf4cfid89VhYzLT3GqyjgwDd-VlIOwbZHHQUkGDvi0VS5hN4WT_UYWT89RAN8XVr" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="JQLmSy0a0BsUp_SxX4Pe_6uPB4ngaMp01lzQwl813R5kWVpRy0gpCDbq6QwsFH7bJYeNjp6OmoYryvMS671lOfI8n5HnmnDaNujFpawspyvSC6m4Md4NhUkbXPb6v9P43JhPPvNPa8qI5vKfZzYOURd4P9EIrm2ojrKAwJ03BrpCFqC4VjkdouvMYZgV2wWCQFj6eQWDEc6ig5kzsTS2Y_Ego-88Afv2eoR4xfxYiVT0f2ckXugnus70Vn_3BgsRj08IbIVZLm-U3jXp1MN2OSHU4nCNWFUMTE7TfMWzsvch_9Qbt7PBRY8fm56qpdDRwizQjrKaNljHMRuP3MS8qN8Zl-TucpgrfPeh9nehkpWd1Bk1ezvcBGk6WYEugE-5JqqMEKAexSh724b51Gn6rpJ_iDf_EatC7LhnDcwewbRGlrylHExUwgIfmHv1CR8-EN3VqKAtaXTKDpVFzcNHwp0tpaTVfjOm7eDE8CkQREjZs_XeMMaIVQDcMK0i51XAlDjsFVIKbDPkZuHX1bzZbeiSn5f5yHBURHt2BMjLX4NN4Rz09Fk2LCG3k4AWedvpzhnAyPsnEib2OgBmtqip1OK_BBYhDuSVseO6xIwdA_JTTezvfpQTg7Sb3jcf2MY9FlN46vj5XdEF7Gi6yv2Z3iYRmcq3FTCpUBxO31w-ncaI2_weI5yttM4gOvg3qkAo1c9ze91iaQQu0jV6rit6whmMDo3hTRZl6wxxSkOvvhxnpys5ah_l1nerj0LF9-Pfha1jSI4oQ2_afF1KKXRUYd8htbqBt94J-Aj-ZhAvPM2ql71DvTXb1kn_rwlE_fzxU8Op7jBW4160idYbudia5fZNmZl3QVkp0aMRKmcUgNM5a640cL9VTapU-Z4A1jOwDSyXEUqPGmwv7oZ1BEsIsG3JCh4VFEs1VwUoBe3hzUJOsGnkzcKPs3EWe7nb6iiolThOTqBNyR5-0uaQVYqwp0uGKqlsTYpxQnhBzmc4QsDGZoMGYvdfsb-zdkSzCMjfw5-tnv9Orhk1JVFV7_WZV4rJ0z62DC7e_l_qSbMQ7GDyCaVRt48HrF5Lxj8UDBsPWUCELPLpKOKnl2n_CPVWrbb0mqYBsm3e3iMMvlKUQYW_KFnZET9eXn6SHAJsCDXmgn9HFR6_JiLLkOSU7hVQZ2Auy_T8cfQURyzl6pD0RYDkXjD3Y3lv_2BOI8_hi14ixBzqF5-cCrkTiS2cHP624Waz3f8U3KE-KUG5l0ma2rFzUcwA1GDaLXTEjD_vw-GZphTCaqKEbvuZodE7p3ZsH66v8H79slE19WUVxFDODKyf_vf-543B3HT_dfT-hYVMFcM-CtqX82ks949meBgjT_3LCmojzfEOgYKZArZ2AJfk5YlPoz3rWd9XQ0Kxu2yDY0s0uQAGzYdvS7jpDsYqwmj3smy-hmbxiRb20dzlUJAOc_MeN5qSlqpx7oydHI5rO6641Yrq6ai11ggAQDFdKt9UaAgf7LsMABwDnaYoON_3vaFmifSvY0qp3a3bY2BapKgIKnlVi_kA6fhUv4iP3XpkvNf_FKR8EyTa8-6vgKL9sXesq-Zkq0MM1sILMxXT9zPzCawctKW1woZkzt9mk13uwXZXmP0dzu4aigljUVWk91FkeUwCN_vJDQsI9L1HC5DkVXY3zzDLj1EKd5DR1BfLKp6lAczF2PtPP7IRHMWL21mOnZT7Irha4tj3JpLz2tVpIPu5sffPo6PNkWTs21NEfQdniXfbginEzaPYUsTyJO8hh92LN0lAXXrga-PqZ5Azfksk0B0tYPM82ULkorIeUAcdY5gwVwqQNexKan5iYivpcC0rK-x0koLihroWSO1FCcGxAejxB1DgWmTOBgrOnq84F5AHbtsS8l17eFISCGDAl5iVQsPc9MBaxK7lzliuK3z-QmVpNXtiLk11YNBa0xyt" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="eV5yE1auSEgMY9vRCPC1k4Ngi263FvT8YX9zrDanllohvqNASJibMTfTKJF8lxHYVfwchE1FneCQen05G76lAUS4yxfXeLgfx_v7-N-B8LlBE7g1jXBJlyft5DbNy2R3qUEnboYraV97CZcpcDTa-HgFoEYUsh9acMzJWd8bQaP5PpgObTgy8lpzQHJqNh4AsVNwJ3u7TDBEi8WEsvaz9OhVO_13NU93J_VBap4F6mBWS8AAUCBQIVgr0jgIHVcfFLHGy1PyrdQ8M4s2imi3mv9XyqJpDQb7MkhAHz3KRR0j8_vBnIUagJLmMe2eQG23xMTh8gLIruuKb3z_n3hs1u_HK44RX5CSVRTgLNSrIyVPfTTcGF1_ASm_MEiI_EzlFqqtmxz5eKRIQ9ItQk7GOm87BAv2rPfi_UaZXAXa4uIDbhvOiitct4QiPA7hQXgHSj55nX_1xJveQTHjkXjwh6soayNm2wkdvg_xF8OTp94I_iuj6VzKkk0JXqonOH-NxQKRaOh2lfNKlhvUgg4fEwgIopifd2-6Q-qjtI4-U8-xqR2FDNTKsb5HsxjB6xFyUCka8Kn6neOyAxrKtzQuO0PPsqAVeTNmbFI9JPMdJNBM8fhyYYdehDATG193Lr_xg0IocOqh5_F6WXIUweI0xbJSR1ZGclg7vRqJnO0YuQP50TH4hZSjcqKGHj35bo8fy-NOV5-2k05ZfWVy6C39ekNYp85gwfTeOSj9irmn0VhWp94DBfxi5KlUYoiZvOE24rKPW1pC0eovXvObD32GbmtiZ5ijgrrR_A2P0xMd2woTX_9XRLWLZM9S_MvMNQQbeal9eH-j0ml5C1E61FvKbdfauo-bpNHGcl5hIkH7umE9F_A3ske2MDAfZUvlIW1Vq6w7RAsuPoLkTdFeUSVkwzZLTkxsy3MIrEsY4mNcnPjEKFHn1QmPOxaNJNoeq56nT8NxBsWT6recIF0BCtvz9Fb1z_660Zh104hcSiEb9apDpnK4dJTrcKXDvUpskQE18yOe3-QuXcS-1ey4KHEmj9MGc0HHBWjokOc6YN8w2w7ZsEdKnKVe72ORESMrmkQrKx_XqO1LD4TeFQQDfOXTWcOnD9nz2yga2LruUfLcXOq7tGC9GCw8SQVNAp2o34LSsHcwKnMyytAakScXCsDgK8D98jolNnoS0Yt0HlvtaEI3eRjym-G4ByYn4KvEV4JQZv-a-ioA53k4dN22FPdc0IwfyfMD545kuK4eoKyilf2NjhaANJx5hs_t_xEYcrMYe8oNj9dp6J_xKUcvqxc09pnFHx-X0-os7hu8BVaWUNK_NJT3LfVLUyC9s0-aTn56zABtX7BA8DFC17rlKM7GGnBdSWEF5i3MhyKGcfwY43wzyZ7jUGfy-MdgRZm05-8SAGbXHNKh7nLen6wPp9lkJc8JaHHIU-5BXMHssr8bi_WJ4kmS7WLykk2vxvxboEkh739TTd-b0_T0zMdygs2rTXGDFa9FxgFXjjl547EG6aUlflEtufnQ6jdmOkCOtUthy_qIhurkJX8iWMcfbyDInomCRpWv9j3LJOipP98oGEX2zQPjPZPEU8_XyQzTINRqDewYFI1cnO8FIqI2Yx1hnoIHjmO7DUcgzQN10lY0zLyHappZ8sViO1exZlphAI4pROfTpwYzwFv2FmEUbv3DHfmTMq9JW2-yh37xkUNA5NboNbjWIX88h6B3Kjnq9m3JROtcb0HGeGoVnB-H-PIuA8n7yQgDg7p34cABgLWpwvqulTunGK7TYhvkSvud80CLrkaOPi0cXUmpaQ6vOUDidp1pqsR-p5sPLeHdZ2_4391vlcmPqScuwzkjUaGN34MS0bQKTyKKB47oGx5m-aMLXlVd9lQZfE_u_WfTK4O_Q_dLw5T7-6RObDm1N60zPfjmLDLDgF8" class="dir-link" target="_blank">
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
            sessionId: "4d3e2f41-8c1f-4d65-b291-5749d3ff3a9d",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"17EPCQHL9UISD"} || {};
            
    
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
