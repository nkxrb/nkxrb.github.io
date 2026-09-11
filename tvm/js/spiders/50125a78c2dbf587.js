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
                                <a href="/kw-click" data-ct="9re1okw4Z4SVdrQ7GlstuZoqWBYEc9E9ml92WFpqc9wq9U3Tn9lBo7-QdXr6N4p2CJAuyiQS2Nri_B-DB08ah4WlgDoOfL4k8XFPwQOZ-lXsYsQzZsqzvxcxrs3kO2HLRNhP8VaTw7PydES6iTUx2QWBvcJPRLoljduSpH1Az3SgSevsDOkSEItwO4HKYArqNdnzb1m5zZYZZFyNlOdKadofHDrqxbVJUktLV2MQ1BKVp8fDKj6mrTAas518mXbuEmviDD-GvJJQ0pGGlXlTtu1MyUAvgq-9Z2t7xmR3bkIoJZKlFsGZml3O_dsXEgxau87pgsoiYUDx6RjqJ6mQo0afN6ybmjroV2a2N_ltMURHYvgOGiqC15DQ8mg52p4YW2gHZ9Xa_b1fEsMIMxn8ICtWvaM3glmIpupwHAIyQuGlpc76uSzxNeATjQBZtPAyxnadn6q2n4VyeHi7sZej7RXpb1KIEHfMX-7rQ6CV-zhtJ34NBoLDhqiCtjIl7YCzFH1RgYdvEDNt7LPQquzYoSH7kFK0WutKLmU_z89bRMW3oGrsKOi8Y761cdzavdfNfbM5QUygH3fuO4SjklJbDJtTBjLHDig7laoowk8owaGsKIhsVXP-gI3KSwGlvHcIP_Xb2HPUNO50ONjXB40I-zT2OOM7SOM0cFgDFe9YpILOcwyw03lJXIAxQp_XLLAFOvr3Q-RtfK-RoWeaR4tB01n0eFks4W5ZuYuwHSUshB-uZW4kbSr5g_tMUpUh52v9pWCteKpvWS2xxY8662pEmRQ1_igANN2UjvqKOyviSPLmf1orq1CeyZaWsZkXh1xMMtOo-TH6rcpBMjHA9huqtKRrEo3u8w7IpA0nclmQtezZViAeT65R88L5JTLgdrdgo0eyIszTBwNdQo5HwlC68FKSenGBrWsIXthVd4NxrXvzpHrlFpNT_Cez7dZSuSePHNJYU2t0Z1q8rzHV1Jwnidhq6KA0zHiqftn3MTwNiLmDHDstO5NLGpy6Dw1eUcTRDvmYRj4yEANtcy5t8csYI4wGyYAtTIWogj80So0fR0uWbOj0xfoQvECMmUV4TqYNd-fvpoSVxn3w88OYfLGX1Mqb6vbAGn-o0MZlF08xIn03Lg3VWhWqXXiTyJ-W26wbc9Sx47PYEh5JpJEFrHd11hJd1JYjrktSVwne5SlEc1g2Tlsx3vZKbVRM3Xb9QYpYTERpZu9oA50DWNYHxjUtOIY5x77_HXU2fZsr_JQw0M4FA69hAtsMijZgHNivcPJqyvf06UllaP9JDV6eSIS5tXHy8PP4rVj4-GI-S17C4yWbT68l958AAFSTrmTqLwuBUlVNrewCTE_O72YMhmK1h0cPFFV9KGgt35o6g-LWSRxbdZGhvE5_Qb6lVTdAhR1-hpc-s1nqHvROxiT6i2S4VbKd0IzgR6nF24iF9qpe9jNItIDEeFyLa9XtY8SqM6sGDH_hIdO2HiLct5cPfLHWneuhCV6FSFfc0VDYcXxYhmCEJfi-2mRuI8e7nDLAoF6wJVEOoG00uEVrJxCm8Uj1uzj0gLptkWe2ZXmqCDME0kds8fJj_UtuayJba894-bxk-su_3NLTnG6VjCEaGhjJaKgCljz5vMPKpU6tvSvcuEWcQuBgelb6bTW64wgNafds6L9v9bpsAEV6I9uNCDSCNRVN_UXvXiJEUDWSSUQ4oMxA-IEv9drwka_Zt0xAf9NzCodHQIh4P3SUeKxgyJs1FbMAAFTUrohP-M4bZ2PmDcMOW3O2EvOUSH7HhI2VFs0BIe1IcfRkUREvTlBVX26L6iONfbkBa_wSFbArE3B05w1MJt59DclkNfZohGrtEK2o0Ir2mg1c0KMfroIRiy1KtsbbaS8SNPMBMi5ovzKppdpHfDrA2ldYobiJu5Y0iMpb-GfAyk6q7_Kxy3BBtg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="WrY5zzFA9oORaDEDtbX5aqu-FPm30WtEkw536sF--teQZauNhdZo3Q7Q8Qt7k7XH5C8077XrQ1-m1qi3YcP3zH5lSCzf7C98y8C2uO45el_hqMFOqJyKUHIBhL8Aofk_rVRYMA-F41Y8_Tmw5cA83o4uAGn6gfT6IamMvxb-n8ZNTfE3QEcEvHPhzqrdFpr-WFXwupHn6qP1EX2deZr-iDKQJYgj-4u2pIKFTGtP5YJdP_SYO9hwfUSGCvUuGg0anz2LUwbLlocnHCuQNrGYZuPMqyNqDm4tocvwWtw933g-Jtmg4bRPYXNXro_-PqhiyM-1lg2UpyCtRYoHsPKMze8M7sAf9FYsIkUboPajpKQSpVQoPv2fRpIABGPfRS_hdYFukgUwFWNispOqrsLL2R6q0_NQyIaZlc4gbqxoB0ps0MGwq6B8iEagRZEgFBrDzuHnvpzSQgp_lGyD5bcDngbEkpu0pwXMaO2moMa4OxITagAxxYANr-Vwi77jhJNuTuAC7q8JzE1Ooalc_9LbMXmDhytunz5yMn4a8kra2CmUDBu_9NFG_BKv8W7-XlBOAA9zALeb1rTbE3bwoUvHasEsaswROtX4UYBCOK9Ka61LDucuDaDiDaFZms4aO-UW3mIAW8JVFQ9aVdSyE75dVouGODAzRLwXiNAev1c1yR-gedIK6CIff97DExAa3sYIu2J8G0YrzWlg0iuI12G-rPUArOB4TizR0UlZ8bcq2XUPLFIFURZMoqOAEbMFNMF-dvsqMRqU9xEeNJkWWMHmMlZhkgrg1u3FAPNozoiHybkqJa6C-Ze3kei90lM5-mNayaijnE2SgqEicydfdzuC3IvywKGBzbDjIg7lKPPY_zE7NKicY3IcOfzmkFoifBoDvwGbkzG41E0SSJPT6YtTGNnddjRPkpCSiEHK2dX3Xl_ewrs04ZAg3AeWzzFmAh2FWFUpbFemzi8LYGi4YYxfmT-oJU3Wif2qS0aubmSkseI7qLcniVDV941AyZQiWpvACAkKMGeZg1W9-1WVUSXhJg1GHBDyXGyKCd5Knh59lAQfmQFzHkt2vg5cPyXdHnOFeVQpwzPrMSfA0NkcOTpqZRP8pmIqJsSsk7mlkhif2caK6VapgwC62CU72dYd0n8ptntaGFGqM97vkKBFlt_0PSdKF10HFfyyJVY2Rev1Ff9rXy31lob3epuFoCdZq9KpsV3sLhK6iVnwMwfB_54rjk8QjsXZ38aZS73CdM2YikTjFpCE4Dnlq_KnoO-EAyQJGiiaJBxXHSA8HudXS7u6H3svlZgV5tDhUzRH_OlzY5a1t3CVcpdI3GpAiBo6CKkmArIYAxfly_TJFjFSja1YpjovDDov7OB-0XiWM_WBwXFPYQP-dAFAlIgACQ1DDYHZqycufebGyzn-4Hg2WrWzgjcaspXZl7NEfZJEynlZYdJxJI7fJRqTDWEib7iAsOqIqlkZ5vz-V-S-W20VskAzf8X49AzC_z-V5W27HwHCHbfdfp6yWCQoHwZKhrIblrWZ8VTIAhcj-wWA_MenR-kKC5pN5vOPHMi8CUngGDFWMivb97n6CeZ5Z369t0hLb0sujlDJSBhoo6VTqTpAHmS8i_YAo5vFVCBPsyF7KtF9j_mvaJAcLJs06e0aN8HOMF4peC-mLaOV2HBIDh5ebwblJCdtRPZ1bfzhvTb99KCt3cNeAliNL9aVTSKNKslqnfxWuBultWuYCzGIRq3071Tj1jyPh64NPOawaVmGvrZvfT3v-GAUKK1gAHHkLcOo2g4MdIVNg0m2XH3W86WgQU-uxpi1_YnxtORhhVKWkiBLogM9MEnVh2w7qtZLCuYjupNf__zQth_E03hK2nikmNyjajjpILg1H7nCCh19gCXXVGjofKVm7TbqJ0dZI4X62i8gEiRtJE3qnHI9eET8anJ37KA" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="qY-xz_LmwNL9_HJSdt7aFwpcuflwe780yuxMZ4jDz8j_dsYAXhdoBu5xr6RobG3UeNKZ1KckCpxY62XgIsTDR812BI7FFoOSl_8fl5QBVHxHRUh-mQjQXVbYlXYK-LWkjabtfsGtv7yH-Anje37lXdjT32gQ_7GCnw3sFzYMgJvgb4v5bFE77_nGa-X8-IBzrXSLIwJJAaKvj0wjsvut4p-Wufvg8YmJGjyetn_jEKUYXvc0eh_kMKZWa8JDdDOea_CvAT6sQD0xzyKmORrjqqKiDptG2AHuP061l5IkLMrMgnKUf4gF7l5vjL4nf8_-p-7jzPDxrSkPAW5ERKYaoprmCqdMOJDiJidJTLV6mmichIWNk0QtFli2Y7qd8i304NoCYvdBWmmKDGbp94EcxJH_4bFP3lbCdN4hT_4SyQLoU8bLLXRiFY2kwJrQCvz8Yut7j1fNH0ZLG97VgBXUhpzQ3DxGqvokU38AjVvXEBaA2vRh_W58ok2K2vTA7dGTNd_B2EO8PbDXUwE9sDeQkWSmOeALYy13qmKxu137ufo4tpvLLUo_HjolR2mnPQaE9-s22hDqj4yTWGXLJHmTH2mw8lYIwO3LO5ES9fVVJiw1zLcpNz845WSqt-Aw2sR6f27nwjydzJEtPxAaY1OPBBIypb7uq39-vmrXWRrSiT-HuUaeYE1pdJMcB_HdbbcPkzwqgUG1yVw4awAbi8vzqntYdazDf4FbH8BGwaAMXgp-xp0gAk468rettnBKt5lMiWG_2uktaqDePm9tmn132umkePXXtReQiBuUqhwL8sj3f3aEKJxWIjvhN8I1LUuRGbbRuwUNAj_U68MhGKTSBJpOKzgrQDDXu1gk1iZrUbpaTh-BndhRw0XWHX7u5QzV3YQGgikk4In6-pLdm0UJBEigpnYbPNt9IWhZCfrITm-FjJ33EQ_yzmQEyuQpZzhd0B23QpSBh2QZPRsV1L4DywlGicsr1Z9TESW3M2ziLecQ-RosVOq18B1GI3dG3lsF6v-zk2aQsej8n6XIpVQjgUUoTasGeFcC3Gnl5MFAI1GU1L5j7z0X97fZwWQUmICjlukaJFqkdtH7izBfgl7rBXm4SzyVyMoU4UCQwRAooTRG3AYUd5qFcDvt_QQ9YtZlVEmwRUr4w12yJkM78srWRqZfjoB9fV_2zhkdr1Y_bhUoOr-5UxEecjAsIPP6Pigq56lTvYrdINHK4kydFk3C61loinIRDqA84aundvs-EYh-CrHQZT76-GmcQzSsWTF50nZiV5Lm3xP0rPTuYOVHQ_YygCXihp389jSVPMddZou5x0hpGDftjTNMMed7qRV-OIJdG9e3crpetVVLTmEHA3rvMOJWWI2OpakmIlIQq8JNd_FC37-7lcgnrse_jJa8ICVzOH7IiNS6d3ILIx51HCTBGfI3QD5vpG3trac15gw6M7N6qbEOqW670YexDl-31Sdc8aZa9gGn1TTaFE58i72qkimj-Jl6LShQT-kqm4qyAIOSBov3H0faxzHMYU9mWW1Ml9-1kLpGHfG-nxDWGfYwxswqWu6tlCQQg0wXKu-FI9lF-BxMT1OkjoWFncgKJjCpSxocZf8Z7oF0ppdvGGfAaAYQc8QEhshK_CE1_k_2yvVfRcDFqU1dDWLIAum3vIFUel-FKVkPEQ3saQhCuNTRanJ5pLuzOX0K_ZdUFSJ0z-PzREFMyNl4UbgZUOBCr-qKQwH-rjHb2tQagOcIYxRKsAt5C2oFKIkfLe7MatUM-zq0NylFvoLE47_WJ1f11mWQT0GifVdGQE023vEyMGNn-GGzNfDVtLrPNEPzzs2TT-LJPLFsBFJpbcCr7CC24FV6LbzepxHu48KV05JKg2OyXI8m59zKoEFe0KQia8JhZnuGrfD4WSqVd2mbPx7luPx2AU48kCRDSwJcqcneQCjoqFAjvC-Mtiy3cso" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="cIAlQHCNYaRPalUf9iCpRvbjkG9N4psQqE3oG6uizw18qQc1_LMOtXCXi_lBXdSOL-6iXrR5S6Ee0suWy_7Ee2iQxrFuCPddUaI33BhYYD_rzoACM74WG5xG9YKVVEEKv4XwhsZJaJ872EXvuXwk8DHR2ZDSue6cu6atDqORFg4NTmSS69vLhwJsF1zxYeTiRjzz3XSgXGKU-mJLwHftn-HpJMXq9B-HUZVf7xZ5w_ofMBN9lUNlsE2ESxaBRMdaIsKQ1ZnLoSDppN9lRMIkVvMHs1zmPPv6hqmESgsm3IVpxnnxj5HVnVRrGOHhkes-Bt414W252zsTpVYZXLiRah-g1Jey-AVnjVuyhKldEXIZCOgT_kpk_KRfKOuqT2UpG7NB5h0nLD3xApshCHfOfb5ILET2pGEf7-PqdvMABaMFI_Hz9I83WnhBzALjgzBJX8RRjXQMR9mIhrhxQNwhgXlgPLtmwodtcIv3sF-db23eTvdwsO63wvhAiSxQwg3vIjONj9fo1vXw8CVDhZazIp8ZmY9KcwgqvKDir37kBaL7BI3fR_wZRGv3wZr8Xa1E6QB5I3JyGx7cizb8X3fPdFHLLBd54yUELYk9y8OO0gaD-r2krjhTzgikYqtRyFRwkfOVdP2kfWqp8TIFxnZJqZplx6hiJG7dewgT5YXvAoCgVQmQsSG6u9qMqbmQEmu717kmeEIVpRSmbgHiKXg6a4NbVt0awdQVRak0kwrqZU1WfCOmpopLpHem8l3A2aujlFGuWzBz6vmgAZnKdzjiuq1xFid-a4LY215uNiMMJGhbss-N7lAkmooOYup3Gb4Z9Kk7ScjxCMPcqO-ZJfpe4uQndP-I6_ZPLUWTUZuLyKJduXhdHg1LlPuClqkSxfaedvOYF0ThVAl6vm0jw1VbPftqiOM94ZqQdZkrIhFz3PGwm-j89Tl7Vv8Phim5wIfeVP3KFLGFTcI89tcWVmShbCTQ49Fnh9JJu2dDTp8jef3J0htMyjmjoxfZECTL1T1jdwUtONCdp8jPyv-LBr8_6NNHD4_Zn15p4pBbhAJeWgjNHFOeaWNe2RCe6nLkTBRhFZvJJgXywKGJp4MleYusYgy692EEKZndAvF24uKTTWxeU3Nqij4i62UEi8auKk3TZ7ekLaRjZltMLnmAq_OUBPxRcT-XS42SOhhg5Ff4H8MtiVliXCzgyGQqj_medE_OtUhjOe2EsVZOCkvgMUpnRziQfJ0JkUrkqpsywATydrN5JOJ7j0DfuGr5R5g-QEAgSoX45HUUAgtNgSng-hDo7Fn0EGcw1Ij6puuFSUcufhNWZuZ2HZdh2an_nV8B-g_lC-c_EWvS_BfLo9IqXT7ayh3VNfeYTaqRuCixp2fEr7Cb0noUiTfcLVy4o4gMv03PzAe8RCVjIVc1NRqyVXir1U4u7LH3joDF_scc5GgHDu9n_t6PKZMzCRdEAppNI263hYNXZpaku_6L3CsJqEJQLRQH7UzbbHBtiM_BHodcMhAZZXiZS2UkysFjbdTVUyTjUMSV809F8QvDbrjI0-fYlR6H61OLfqKivkLraGZJVtOEd3paSics9F4xuXUmd6GhRcj8aRxIzUXcQBvyWLl0NURdnU31GTkbTx8I9TKCGEsEl3Oi3P_haAtOTozGzusqJUVGwgRtwqNI-dZriGIqcF9hn4U3w1FxmCSLRY6O2pdKx-GejrS3DyG7eFdAMP1Ss-QkiUB1a-ufyUXtxjJsdcfsxb8gbgpFjLnaixpDrLiZxO3whU3PmnocpXAEGDtewRcxckw_4i80qc78rbU-2IOJbc55W9SH93ijd56ASp5aszSyEsZScXaGyvSiLAv68Kje0aUVDDTnBHMO9tLlBvRx8CLk4UemMO83V1kxSJE9SjqwziL9bfU-ygKjWnpIJN5nuEVkiLhLDiG3IrPBtJ8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="rCQ3DR3H2NCAl7DnBipOKd8rXvIZm0DSO4Oyi9orafvk7gOSo7FXXf0NWyCEF8GDltw5_Iq2Ts7i2RbmXIZ3pHfkrBGeUIUxooppV5hRGwi0h-6exhHCd4HwAkP6me7KrbU0BH7LKX2AE0OHdM6mmyY_JVyvMYPiZA_GaW8kx8HfqFmqdibx75anqzexJFz2MtUXaYUm91tbHjjVJrSJYON7DJOnr6BzIF9SEXh5ZI5f73xTEv99ox2qBmk9oCgrGuHNscBCubVksPaTwvq7adE63c4corQ_fPj0UupMHDRL1gJ6g8TnYJjcPkQwgrUohYYrWSBIpf7_lRi-fNuYkCs_JGkBQAFLYU83KpryN8kuEJ8c-ks2IILw76SUdpFvvr_gMCpYXvM-OptI564PWDp3Gy9v-_GwmnwvOYR-QtbPMfNRXJZBAIkQhnOeOa6JyOAQBJub5RJKC363mdywUskVwPj9kf_rApLkdYFQ88Gw7_GothiM4n5Tl3vwGhfcsXXzVepGCyfcCEXY3_Q8RCkjQKn-r-zxIMcwKlF-z1Nv3iWIu7NE1OLd9RYya2C20nZgnnGNWBq-PIk7lyoyfx6hXeExLAdlpagJcQpv540UJDi39Zvei7Yb10C_FTPQjd3uXfehniIcZJ49GABWPiJElKlJ_ckYPh0wYa3lKjp9jC4cdR6Sk4XmuuRrs7TNPtMngvg1ZpnwJS0MYl6eq55VFlWvopa5jQwa2sodWfUTR_-2MzIYCk2INtE2z2qCCegqNVzuUgSQd_-e70qNRJdjOSTNjdcqQL-5-rrP3BRyfUbhg7btAV1tTv6IvNUS_8VtJz55lAG1EEfAkQAkoDL7tBq2kuimB9Gqtg_F5LwAwWJP-3QAqBaG_AReNhIwglX3EkhuK-8NE4Iv9gahn5-UsPOLj4mwocSd0zh7uTLaEI4PGHeAzEgnRj5ttws1Ou8J9ierGQmxVy7k4zSi8g0dBox54_Y5i3LxDcVXaNiGg15TsnM-VCBpg4IrbP1MJRXjlwZBs4dbRuSUd2qVjr8ZdbT6L8PjsMvkf6enswACa4d3-s3atCYW5LryY3_DMTFLJFh_Kzaklu6p5fuxYYwo6Vq1cXw8GmQaP5xLOZIyV93dn-hRbtMmRQfW3N5IjJ5IaksOS790pmkzwoRf4-FuipvZYGeaCmaXOsX8t_ACNowTyMzIvqKwpwxMz-Dy26LyY4zb325RDWvGXjDO-OnMIoUW2BJKVcHAZj4y5vekqMEegAMiiFSUm2OysGuTt71CP8T8gAvzdiqN_lHMJkf1XICtJcw8s4_LEV8W9lvyR-dvaCFmkHMiX-tuouiwmiFRIaeAGFUwRpmsKQKisLVc1Or5me1EEes6wnK2S1EC5iM5gEjfTNLeAqvskepDDmWS9rXVLOf3cr3oaQMb86R-ldpxW1UJ4PpYI1V_bwGFK8qOgzamFBS7-oJw7TacfhekbxtWyNuJtwzf1gkrjliC-5cWf3Nw33MCMJurJ-jKn9NFzQep7LDVXVZlwx05XuSzTJR8ACMJ-Grm0bT2PgWJSf9TrW_K7FEeBNAqjuZImtKx1IY_rp7IlJYN8cO2FPj554CJNJ_y0XV99sa7ztDrxDI03Eztu_a4YPGQD2W7ILn9cfduxqaQj5dx_kP1sjnno5Q512IQswfKXKgIAuozl8lMUS-Y9bnTG-O15N7KgasFevrrtK2sWYY-NycZsx4dPfgmnzElDoWTXvQRohe7olHk3QCRkgwyQF6mpyBYuBZBQiJPMQSjEhXd0ERW7JHtgnP5t1weuD97L0BHBJL8nG2t16HLPgKOcEDHAPcbC5FXa5EeKV761q82YhjhoL4yB-uvRIYMWY0rHx47fp5wW7lTgQFFzkFy7LTNz-ThVA23DgUS__qLjgyvEqllPg" class="dir-link" target="_blank">
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
            sessionId: "a3fc84ed-8752-4224-9d8c-1e3f5664a552",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"3DQP6APLA93P0"} || {};
            
    
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
