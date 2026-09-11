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
                                <a href="/kw-click" data-ct="2xLPDkxjnVlPx_53gN8QsyG4DFWEkbuLDsUGp4HZxXDzXru1ivqCA83VuMW4mOxaL1J2NUuyws3fqgwZIzEhWmimKbGh6OeyNux0R5ftPkFqPH-WgZbpLvDv1DQSgFLQbWWsvv3F1-HjvGK6zpIfVoG8XlvkoAcw046TGHiWNKEAw03aKU4Ej-rqVHuYBsKHYLJbzSGiaET0BKZvFgdVO9yfx1AWUMbebx52P6EJD7xn0A2CkBhnlHEhg7DC9JhcsQNMZ0V-7aM8dRq9pSwQ0y5CKajVMcv1mjFhcx6No1YY8Kawzd5AOzF1-XQhSm7vUY8VsC9K0qZgbHikbVQ0283HarUsGlGBJSuP8gim_4Ctps2W3lH8Nb7OEy-yKHJv-1MDFBteq4qCNiiCwFnvO-7Q2M6mDt2Qot45l_J3QVQoC6KNXY4u9eacAvHGNkrZXf8Sgd-fHbLDv4Ig1-rhdjeP9f5oYi6GSFf7ofl-0AqF7WqxeeyFVrZjRhFgWZi3LiRbY3XMy08XRGudfOoza4O6sj7n_SN40XUmfvbXO439RL2TlqOZUwHKh3YN4xlMftKngwsnt6ANhAd95-S5GjvVKV2ylLnTXSNbh0kf6Lk_G5BWL_EBm5KV_3Tv7tQPNxmEiyjZjsC76tVPblY5wirO1VXhCMpSyV2-e04XKE8r9OUljWKbgPRHjdsz0_9nGCRAG3OsX8S1k1yypR9I25y8gXeT_3YijQn0rMTX0fL5qi0p-NWFg7ejHX5LWmyXfZxYq3WtSEPFLscowEGqqQ-GIgEaHwL5WxY_xRRVsvnIp333vrXpq5jIqGQfg0xWY5Wu6VzLMFVP1DbtQ7obRjsG-KKSpANvE24EXPnGlxs6xOmEZNQ6ILE8P3g9SBzKReIRO94WkglBkff5CpvM-_qr6Dy1AD4GnpAxKeyYzblOA4t8HX1yB_iZv6xJ-Q5TfJznbHGK_KITsi32sY96JDadELssOCbHvMeXOSts6LvzTGbhU4VfajbiiiBW85L0w9ighab6379nVotS05fRkISs1qBgI1JR7InUo7mJczsbta69O6Xk8bksT3DcRSt95HF5oHsRBeLH2zVKEU1hfy1bl-Fh1qiYwHhAQ-y2X42rTjlPzZSpjzLjyc_QtO1qZV9pKoU9eEB6jxtE7KHov5v6UOyXG3qqX125VXrh1xb_duZd_bLWaQNmVShLB0PG9oL1qHgqiTMtvaiCBJSR6Zl0h_dKyCyNZOCPf0RqJf1UMlss-AnHlKi0lTVGjIHH8ahcAAujphvczSIvAsMxb7D-pP6-sVhuGKw2SLd2CJwVeuEhdQC5C0lOnJ4EFlf3MOx77OvsemO_XYeWDr_3oRZqyEsMDrIB-uXwF8x8k3GgMkcjOq0Ii7Wv8yq6Uljy0pMIg7ooYvGiGvnZLUk7HrZwdRGkMCYkqSYXobOxP-lJL2kidoyST92EGut4htXmMYKu6keE91bJ0eSzuTaSOnK2rjgZhJYXUA4EGNq229at4F76RUDPAqRqH-1oq1ujE4QwAw80_VnqrSWxDT14bU4PSalmYiLEYMT56yjNBalId0H8tGGeCwDtXjTb9dMDPj_MLlcBdLYPi2OkJq59Eea3JR9uXRPm1IhAJSDfMJrBLDODc1FNj_lNFu6Qe2nMWLqmdEuv4eOD-UIX_yW4WBFzgp8b6BnrMji_xDIUAqPf_lGFYYhLSfEVPYzPWQXcHE8MGyozFsIw1vfed75Wh7bBvUh6-siulnzZg6ynh8PuQpSVH-yAtOEOU_3Awpxqc6KHB9NZsPHDuWVL8STB7ZVAYeMoS19v7bnsMC4yY0EPRv9FrYkWDBcYS4lBADkWFbdPNxJLej8smCv-W0oPH2PHZJiA-CUf0Xy5tBi5p2VmpO4CyaWS7mBKmNx0_McaBSZbcJHCbjZUkcA35HGuK1Q" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="KYowJqU69_aTXnANohrznIwwcaSDAniNuG7sFijyH-vyCEgIykKjvwXPdnF_CE5Xm1f4V-Ipr7x42o-fhkasIt4ayaAKa9my3R5HuvKPV04CXfFxVjDRWb4n3ackkyK26hFFril2ITPr4ySrpdYgVFvzzzbGssbo0SP0khrARhmT8W5J4KMPXXCNiuDUSiRdnFmKbAiOpqso3NWUP-MoMF-C0XAHRqaVLoUbqPpsYdFy3IfaTSHmlvYrjgWdY_hW8Ot62Ev7KK8feCGOPYZ1bM6uxcsRJyy5TsGIylxGoTfoBOQdyPrgxq-UBC51QG_Xcjxr9knqU_1pg1oyPlUlXq5BK7pqiuIxNRxzZraVClZ91Oi4KHA9mkEql_LdHAmVXUM709SjdXofzv-5P5KZ2HMTDgp4JqeW2byItJDERf906Ir-6d5Ptj8wEP0DCNq_cjgyeZ3uQJxVxTW11Yxe94PhaDMZKp8XVSmo4T81wwBUYIX23Xd9cj2MkSlWxMJhlfc5NbvrtR765SZiIJEcwKdZEdEOtwL20iTy8NRQljv6UmvjqAloge8UFfsQxW9WodGytD4SkTJDwyl0NkHp91cKs-TLS6MBQD-rYJKmFyv_Wz2Nut7WF_fQ7g-J2su-X_MKyo2YRSXKp6cjLVDF8gXp6ZN-KC3qnq2icTkSIj__4VX9XuJpPCQT4zesypKZkWUCLdDW6RAxDgpE346uBKTM8_k0yFhjOM-iJHD-nUvABTayP3oN_Q1C3wkDITKWoWFyRqe8l9RiEFSLJhhJCs7gqIx067P-AfaKe6fR3kewFl1x22vQHD1lVfcDwCEV103GTlEccOAV2kzxT_qpdyjEiISoq4RyaV3tHIgQyane5bIwdZRP5cpYMGdRgckglNezdZVjEcuMNuEzOIcSpU3K101F8WwCvSgoqNt5K1xhyMcXNW8XGfF303nEDlg68kWDVz4mTzN4oQZKEGG1V-xc0uxq9JH_9fgKhaD8qyp0LUV5USdrnK3uiXtbRjYy3810-RX1BqiUHnsQxYRVzdHkgL2odgjCuB0BKP4RWYSgHnYAqk9lTEcEuLCc0FWzLyHZcxS2ksOEX5KQ7t7WeQIqaopptxRgewHKiNfvZLSIIUd3SovOBa8BaTKMH7C7PgiBm40JjHOhWTCfOay9pJ7K9TAPmOEdxBZ9UXE7uTrqyAb4LjJP-H2P39GT8yZafOVoDyRbkIpLvgHbXJE_zEkbwtGj8yw-yPtEU33LkAYrv4PwY725ZE2Ehj6p2xbxrVaaHxj5DS4RVF1H9g7gblf9UL7IXbUNXcwCTdJH-LXvxTSO6foAaGM2nSzU63TsY3cz-dLRBj4KKHnKDw8ix8R0aai1-48sBoBIxRNATvUF7A8OjX3Tg17gTj4m1_kJdBNe4Vv_98gQO-eacnLVUtCQLanS-0jlUvITJ8_EDJbBvA548BiZZFBhKZyOHPZeCJC2sFUff4S3-AipbmPg0GmZWzfnxR_o_QAiH3jF_qQc4DpQvrBZxTI3i2o47QJG1-R8kGEJv1QdKwA2ufr9AqnUHG-CChIcwJUEI-gt9AgUQa5fO0X50yOgoD2cEx2gcuQjYx0xP1RCnOMbLfZJZGEPVIr1E8Pj3Rrvwkrt2dMoWKjxfWT_JESXRnVK1lAyHIrkXzD8l2jnU4M_zRC-m6wxUc8nDYbTcET5VtvaD5X6auzvoZlPBBovScBs84sbG34LckW3o2GWrRGt5hj3yb9pIdSsZWtJJb91hhUVlDtSnJpdfv3Oo7Oxhavxzxo4C_xwlLgdMKkTpP9zmqHHbhpbbeVx9yFXxbJuoU7xEXIQX65eN9wUBvKuYZVeQprqpPY7HQ_ovMO9y4rsctXYn2GW_lwlzCfQi-XDa_O7LjfD-U1NEhZ9Z3qIXpsIsg9iEajNReTi1v6jvX4Q3RBw2S0mgw6C" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="lPt8LkKA9x6SV184hhfYJCeDVb-1qcFqSZBae5DYSBEErN34R3G6O9ylxY8rjK-PxitIAwu4ZAnfKzzZarXWnvUs-pwqDmJEbicX6ljuly380oc23ssctgfQAUywxkQ36TM0Ghvo1p-1-mE2F5P5dnEiNfnvYX9jvsP0UNgJXgniQLyDVW6JQSonP4eGaJD0uYGzDj6V3joRoA5EWa4ibso1AH6tqOTb5s7maLfbvPIl2g7xhAcGjpUAyS4lxO5_x9jYkOqg2pNcazlKn9Qnbm2fhhe3EPgAuahzzWrD6gg7cNWRc0j9Upx5mMvulXFyXEtEMlpUPX9zT9HBaP-_If7fL2QNTuLaEIy-tYg6Qr6AWohgeAzci8F9LxOKhTs1VGBTzs43htqhuMDXnfGkUABGb5Sw70gd6x9e7p-a9OAS95tbI8frJAwwA2XEtzVr3GiDAGStgHaLmirjdvKW2yNmwPmO_Qd7sj3c9AvP0n914fN3WQAmQQnaNDqcuVAnpNITO79Sr-IZC-5c6UWYIbjaF2wSs3ZD872l2MGmpIIj5toJWIBWl0_2fPpseS_N-vCIWbnolE4Hnq9tffgcjlHqdkbeVDw6oFa_Xb2HrhKi3lCr53_x4YsSx9qznsftKb1TvW0ot00jbtPE8VeMLyrYIENv4fOEmatethbY3sQPtr7C035OZAKpw4VJAiZi7fyshQgBEBoazCweq6cI7fh3pDKgEq4yQIRB45AzWh0_bYKANrJWunhcuxveKfLrdR3CjSnpySLYYf2XYAgReS3nNfWfYcwhItSvkO1B0KFaEVT0wMx4jO893V6id-3aZQmdSMGz-C0Z7xuXkBi7jxNhzwaG3AdfUWkShVn863JBf9QdA0u2kxo6F9IWhBJ2K5fsxWThZ4dOjDDGBF0jNEEaf01gcdSn-OMsOLmXKIqxBsXLJsNE38213cNEv0BIBW5YwpSI8mjV4tCBn_1CBoIJaQXWKI86AMgam8zOiu9VjI6UpoUSTXIa8nZUjCMIG_ClJ3XGpYKauHY9xVDqdxE9vbmTAzd30U7xboXHnciLXjof22tyORViqjy3RmYQRy6Y0-xfyaYJkUjVsMrqXfCIaFGk7I9RJWoP_KS09Xv_aZmupxkPIAme-LyfeNedPt7Bj7fjiEPYcZ1DeCd-nt7q4xF_6x1wEk5YSTXKRl4zYMRshF5qLK5c1VkC4KCRaoAssdFjZxkA162EnmIvxxUg9uh-r-QgwImkf_-6zEnGitD8oCgz5m6XIC0WZdmcCrq70c7zxJ1LKAGyNcYFL8l_IXbMTTUsCVuH_K-Cbzrt0h5RKcEYMZCkMyXOLDGbmGCybULz4wfUkrez5Xe8Mw07yhZUeS4ugJBZUW3Dr-W2npzbJV54A3iq0s_HBT6-8EYVvOyoGYc8nHrA0peiJ3mszwPI7W0qYYI4aNuV-E_IHTn4QP44m3c_22CjLgUu6mhJmNQawszJMmpJXYzhs3K7r3RgLlt6oABCuUAJJxm2Xxhk5u7PcC776hZgGdhwGuu6ip0x9srfVxSp7OtLM8UsOxLlXT5ASozmoGi1N5BsZukE2WdT-Y026otug5UGChvFGTRpSHdOzQ7Do7fX2LRDaUN_hci9FFJysIOmaoVJdFgGLYyTvRSI35P8k2JncUDdXQQRI18c88j4kd3lmxE_b39dGlHCYy5l95jFbm6tM_dS4KkIPBz73it-k_5SgXGCSTnOCcxaqJ32lB1lLx9xocYnN-55i6yhXdNwuhYos4so_OvLiY92DunVO57fzXNzm79TJ6S2r9p2Fjf4I1UXLJRxnx4Qugl1Fgi4O3M4HmDU7coKSlPFBQYwQf8193w6-mrHoxv6eCtEOOg0YtDWhlKjZjEMp2QguSHoDjOj9RhVF8Lsz8uKwFRfhzfj5b0mqLD3mqzfo9m31oFngW6P2vTnlRWzROyVxwDWC6uw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="XlaHyGRfSOPEqWoUGR2Crm_9VXUynTXM-KYJ6zLW-j1gmbpGKF6EW3_vMPkJRY7qFq8GbLiIc6BFn3HiYM_0lz3F8_gD4kGyk8e15hUxhzfrMnkmnlRNQP8FyI0uCRJzQ9-2IEKKarpk2V0QnHW9zIp0WbOa2cDXsPbZu_zyViNOmh0LltsG00z_7hJAfAG8LNFEFGpzh_S4HSYjZzB5-KKWReMR3sCf2_w6cawuQ3lzsR_BSiubpLuYMMz_1tilMHikDFJ7IDmK_Z8lPLHc6lUZUdolI7d2zeS4eqEg_XBOAp6qpSyHIarPsalrFagc6okvf3IyNS7aBD2prMUeEsuku075Kg2vcULev8WMDfqt2BeTrRTd98I95IPM3pQzNTNbZL8NO2CAHY2FmzKli351zPGcd2_bl2Okg3BclTHn9WK5PapSqXOnonnNoTPtymTza5wyG3eDT1e7FiT_tkeHNQopTx9l6iZzTsWG7BACl_L1MVt_LHMy_rQd7RVZC6gg432cwpSvpw3EvJOUJEQm7JwCEGFxrd1vDCeY0_ua__5rSAnM8D5LSD-PISOHHGFdnDSjdZmPz9LTiCGH_9xmwNE_thtgM771v7QZfGWSb4hk_8g0286HrjI9805LNrpM7UPJ0abZLzqfL77jpC9EYsVDs5bIBxyz2hU6cdkFG2FpNEPOWJCWse-pqG3RTEIlx9CnhasNOHStsL-ONsAUN6RlCFXQFfX7BiE9A8fJQNHt-uNT8Df7KK3VR8UqcNZimc5KWLWmNKNMpcRaBn2y-ucxoulCfNYmywsjGZ0_d-aHpYH1tKmTWJFa3TEI3XY1TfEIDLfx48kjOW5U9-2hgf73FTHKglzY4_q5Yd1IpsVpCep7aCko5iZOQtjUUQmr0W5HhiXJxIEsogOaYpXqFIKq7BYbjO1bVcAsC_qp9j5w-WM0IoZ20HBadHGvfM32-Rm3HhVhJ1wWvJsRb1C3iTgf8fvQroI9x1rxwX2Zz-qCNkaG48CyCEij12ZW0sDJP0XHVBa4zfEpquSZ8wUGUE3BP0m3pTQp4Y36bQ1Ok0hTZ9ZYFtLX2ykcVTfOoo3R7D3zQ5tMNmxH-X8BoYp8mEwGOyXQ_qO2eC4ymwc_Ksf1oLT1m0fxS2jVcu_hE3ywBz-wZFTWrFPqSvZX-Tt6s6wPjDtE1ZJIEgAsh4C7IKieLRabyIAqQRckvvByQqyh1GbU21IYP6O4QdMm9OZHSLSaY4Lr6tctIjzPe6DlT_I8Una1HFkasMmylKld3b4Tp6j0sYCKldkARrY1MOucbMSk8JM4QIhAEBEMQolnQQz1-GLaQ9iHzsMbhs2Rr1xdp0xHVEYmAObPUeUdnQTG6O8JZfZvBB1ZSFTCwRfb8b2KoIRc2GLpv_3eXBJeuxh2MbLXBPdoF_sSskswCN-fz0UD1xRav5nk3FfKuQGVSMMDPxgTIH1S94KPzcGzGYod1dkh2fIHOXR7SlVXRi1ILoZcbe3Y1XA_8Mwcm19RRdPtwRPH1iQWtPYCuXIZ5Dg6mG3Rzobrbywgqd3jPxxF2p370x1AuwHdxzZqMZhTGPHE552kanZ7mDRAfwz4ehROH2EgDgxnxCrJpDUBq_Eh_S9_eoT7XDx6KUs9e_xTNjMjmqhxpOaZlM_z7XVReMCaBdBClF73YGJvQoDFdU6wqy92Ckp0EVtbhPtgDmYDn_AjXBIUk4UFQDHufshakqPFpjVf2DB0VZXrplXRav4XG5G2S_V-u2JTVJ5kiQI62K4uUZwqS3p6R_L2k3fnyMUhM90xA4oNekymaUFkI3hpmKAT7h2WxCKm7YR22PXxqW_a8V_POGZKC-5QH7ZlrsvWLEz8GSCH-h4jWgIqNqsn8xyNKRADJa6jas8w01a_BHDXYi7y8T749CKlBYosMTo9G-n8MmONPwNnWbTW_um4VFh6" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="0IBI9mgdSnCesoo66enLkNXKI0zFc75g0Vs8uEl1D4zZ4KptOVWZhneEo-JlARYRyfh878h9m9V0fGaF44iSsDU3LxivgzVe0sYLAIY_4aELyKOxBoGqH0Hwtd5QC8_e5zwOJ5bSlFa-A9_UX_jInMnW-T129C6dlrMmFh4GZLG_GgJpva-hXGBI46vgcYakY2BJC3uOQnlv_vxQgmpIZT6h9J-imgTPYkFOVu4gflxjZQQSwch0jMxOYPlUphhv55mt5wnAD7Thi6n_WYAhLVsS3pCHn0vUOG3fAvrOCKClv71l5ptBo63O4Mxk8vlXTjMApg2CgcZOx4N7qGPvi0rolb6EyGWqaqaKKhlLs8K1W0UwAgBFg3n9g7iKsGuXXa-kGvRS9lCYI5WhHrm7bKmB4HQiQOCxHSi8OU48UPWhNvb-Z4CKe1PY8Im6m9hVHBJw6-e8u0sR2F5UT5uENSklXbOdF9L0bHE_ntMTm3xTTzEd26LxJ5ST33usv3v8z7rMG7jMueUw-Qp7LEYfk5SM4sGWwenydqepfQUfG7_D34QB-qvoPNEqOPwKrYaq-PIfCa-7cE4gSebIENo320DUXWh3YJNRVIxO-wpGx7g0TH5PsMiBNyibgmcDksSzvzCzmqagdOjcn_pTCrFe8LRuo9ZSyetMrUtICEl_7Q6oqpPf8jAPoJd6W2_5yEE0Lhr2pOuCdmyOFYH6Mm_owvnMGFmFPR95wKf68IB5DofDfM68EolC16rDGTEn2Jv052KmFZD0PJDYvGIbhJDweyFP-PNvsSjHzAfiv18CPszIVdnCbUkbOhBOpD9tCI0KUbqxpxRFU-vZTfqylviztpbu-L8Ha-HdHoYuZMiSmZyGTcGPcRosEh7J3CaZvEe24iIYdYZzPgMyH9nfXHKRyCfc2drYWvFNBR97NJ0CF-dYaOQWgDZkba4oOpGebtML5uTWKL6g1tqp1VXeRiy10IVMAZxzKNGF3-fHDU72B6J2eM0zK8jcXwP3IOvgSqE-kz4uU7vBXNRtXAi_iYkPbHYpac15k8mCYUGMCHNxjxZeACGfVll_1Lkal7hhhLEI278xl2fx-QpFLDl7WDntVWsaZV0U1MZmlRjhuS3ipsmN0Fs291UOWgU79mSHWxmORF4FTsn0y6FLvrTSeoK8if3ne5zdqWbNSr1kbt3COrR4YwBDuxF5VrKjU7BVCAwPBx2apb6zPLpK6RdMmCdVQJTSzQ9WJZnddK4_HTwd-wm6IJLDVl5XehQjzmS7NFDjZ6Ieldj2Y1YDBsUf4ptxZLMPUJOcv0fYPqtVTR7rsEZRwaFxnI5b3QE4u8ARfGTEHYBOdF2CN72sfS_09hj0QN14qJXMUFrYC3bZHdAK2jQEU7HormcpyUQV-OTlQHbs_7qYkD_JVUjK1nl7QWVWX_F__ybctYKhTOiU6hYw_sls51vsHM_XwgrCOMXX2zUch9O7Tox3YOtmMfeWhEP90vL9-BUFdSrFtL9uPhDJNMietq5nJ55Xve5Wo8L_1qpTewHHvUL_8zQjzUuRd_n-a_rkEO5sUsscXvSr8uiWsA54ed_s9OY2Bxl2poNAVzrRIQGkG15Dqp2g9Z3i485Fl88-AcCbjgsmuhhCu3AhoiN_4ykbF2-82YArAmpzsAS8la2Xdg9hf8I8Oe8-P-WoV80NZq7gKQgK8VOp4iOk-7AuM0DEP0W83WRIN2jYe02o4LZHXOxV5AMHUS06JcFI4uAGjvrxTMEctkeYIlvOiW-lARI6ccBdAKQTiAjS62ioqz8WIPpkW4CHa-18SDpT6kVI2B0j0YBmqhiQRwuOfsjNPqNEdopmzt6E43yYd_6GcT23HDBvuU99iEXEinpTbhVuyNW62mRO52JGXpW5PQHFEoNT8iQJaWrBiYOGDkORG9XQAJ0" class="dir-link" target="_blank">
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
            sessionId: "46cb7911-c7cf-414a-be46-e1779c6a2a67",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"0I1MC3LLA8BS4"} || {};
            
    
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
