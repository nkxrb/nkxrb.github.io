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
                                <a href="/kw-click" data-ct="dk631tjxRudHi7v5x5Q0u2b-8lZY-NGpl5KMa5ffbrnCdwEipF2q7V_ayEblP--oR82nyn3x33FtS1CHsm2RITRkmLPIJUAwsJTlVPfpaWq5O8uEdlC_So2kEzygindaGvLSLDm3w4L4MINvsNi9XqdN6D7QNsXo5SM2mM-i2-76OmXmlf9-umSgFTwRlYvwl4-D7yjbVcn0zAtz1dCtIMuq_1GzV0h9_KHws1_KKzZE_aYSnO8U5UVJ2yPIKh4JN3hghHqDgIkiTvdcyaJxLkiNtxZvssWD_a9ZO-f_DGA0FDhCTRyaugJ7dFgCzNZiYiyUhK_vnCXmfILZdDA2tfHMHfsr1udm5ZmM5GHDwpuCSHUAiWeGZbkK2mAu-Kn1Chs6T6TgqTCkthGd648OP-QYKpwnJtuF6S4tPKyj-5M17kLNuVJqgdZ3yFbwPG63lSo7xknznYfW2WKjekNDkg9DLrA46hK_0JkIV1gQR_o7sJ5hCRNdwpc3wLwsAktrXhW0O0KFdN62fWzMQRwX-8EO_mtUByRCrNdf3sjCAC7fzBHqnTONRcw2AagDErZn3LbLOW2XyHv8KmWPw4RNydNbAdrjxyE9zH2LC5XtnuxmV1EOjgbW2IO6-EdIFtukxJ5ccxQFvAIW_2wLy1IkXR8wlVyfl0eBNDmQYVsLJkJjXULt1_BZeB-oUqwx5yZ9KMsZ808Peu-XjlIqE7YdfXwtoYI2rtDlpQV69xY75tDcEhc4vokSkowoNC-wth0w10ietQPw4KnlZgAtsWNbT343aGqvhTXooXsUVaOufDxis-jJQNWVHSd4WT40gYcoGXMF68WqikGXd1m-4hdQnqPUtbC8WZcfpoV7t6ZVg_kdloxaFlTH_VVxYkeg73C44uavSmMrOysYGuWPINRoQdW9nwqAvZUlolPEsNZWzh4poMqMwWv3g0oGUz2f7JutMXdfCRub4-fFm6-TFXHg--Bi7-o0KnvlAaR0-odWA0urU7IcqIQ221aJl_Xw3SHMXA23a_hEKL0gf6pAD-Q_HertCnIEGLow7B4MHo75Ct1fEiH4xhxkEwaa0J-5sIgG9oTBIM0uHx1Fz1b1iUNsI3HX5jZW2w2SJF_D6n0LMowN7BrPgEy02RHfM2uWmVwWUbvzhhAXXWv1EmzzP433QEs1T1a0BIHnS4mmeymXGEYUVvZ644WaT51n-9BVLVb1IHV-NQdxz_QnNPnWPDPw1w819CXgAFOg99kO24eX7SjILHtHNh4I4g7tKoUl9XOwZnJLx0OlXQPpLvzJC710gxKyGMLXQnS23tszlAjl6iY7FmiC1kmDcQl1La0cyec2LnrMS5Tekz6w0-eQrQsuhwEmSxQ1mHu9D0Sm-XR3t5tNNJfmY7epaWgueE6OWubBUe7fNUn8AFYtvflnOeDeU7UgUHjiHkFqdSpDf5Pq303H5tRqOvrwjEbsFUVik2fDBW5y-8EM-rLEb6SMrufrrt2x2wG8gORBu67ra7Kmx_E-RWU-F9T-OwacYcA0pCWcq9cY1gmSq5u_-KBCHrpYOQbA_hZSOj3GJbY4kAO_iM-0blONd6bYEPjzJ3u7IOrEA-QIDzqSlYSsF1NQ6lkBUwUd4-63XKfyZ5w761RQeYUNw9YKG_3BjzS7txyskioveJvskbCcFGCJrPRvaajZzKG6XHOfC57g0B41U4YN25kRSODzqzfBEEiL-KG68QixEV_knbwP9697FX-5l_wWTRxVcuVkIuIYrSGQfv5OB9deAZG-46Cy55u9JsiM_E-dIUHbR3BdTMKUrFw4ysDB8C5gv3M9Lw4U0BLNYQBMjXD3C4bXEPgV9loUvW2yzT9Sw00dPMnXgOt_2Nl29tAy9NqiqqyByNbD4PlKhDmlpwdlw6wBLK-_wm88Fda-CRhzKuql9CfHSe6_4p227Q" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="tE53fyhsfZR52BOUYbKFTPZCvAVfa_dWK1a0z9lzLO3ll_Fp_EwgGtSsY5Byuh8o23Ht1-7-lSHrFGFIX7gKscz-LlXf2vUbGvJvD-bxfcUCArRvPcMPJed0Xx5fgmbaSWYitHfiNcCREUd5CfZLSZLaJUJz6bK0XavAaAt67XDmdaBZ0C1CRbEcrKu8dQ-qdqrGUjcmXbCYVZKkychied2vZNtV4HRhDWFq7EWmYtaVbtTaULO9SsrdMhnHwVvRuSBuGmC_OfO-cGNZdkyndOjOT5lAm4HAfBOTV1D4WX1UfGOcQhI0OfS5FxuKtSVpuhhe3ga8Y_M8Lu5fhX4prntQQ7RdwjBjSMqOsflOG_Vsfj1eJVizXQvkWH4zLQ9PdWWLb579i1Q4VWYX7P98ZUyFXz0JU47Dvxa_4RjN3NNwOjjKVeA3oXaRoqPRN8mmvybiziJLAIMpQAELzkehOoCKpknRWSQ-1AJLH9SzwQQeDOH2y3xSoXP5Z28pzMysYC4pv8sTmJDJbW4Cw5LIfvSp5iZbLUSFtW1_7fLsvv1SNS9HPkVr7s5q_sz5YGGjnjZB64EZRPigx7VRFpqFK6xUgaKNXwmRtAWcBpxKP4Ue8WzfMjf6uO5P1fW45nJO8t1zaMVT1tjF99DOL3rnhvS7WrolTIMNpo9SJ-2TWBoZN8S5I36TnsSYj26Fqk7uYqWlH9L8TIy7Syl7S6s9V2jO8HoSlEIFScgd1szJ8OhESKV_lvyosBGAxCmcLQCAbo6TFo53bEmdIioZXzOXG5zr3UJeZ_Ok8z9f9n8UzCuzH924QTwJ52G_5UaVEcL-9zfBvA6KDcTI-H0uMu9FXc9vYCUhu4_qTew2RHiMoEh3BgCXAHQ8slSOL1FgiTqH1O10uu6AL6NRSz16FeVPDekDPRyZHF35Y_xxoYC015idjUfhwn0N8dEgTeJo0PpaD1ry_YmPybXvzfqoYDpTw1re9OlVPasq8g1In_LStHJWF9uHN_GckFsPCOdj4nbuKIpHhjcbH-sF1IN0YiBRxXJmEXOhcM0e2b5HrmY_biM0FIk-sQChBHedVcsG8TdCqkXRN_vnI4DoAVBQDWvHMaH-_up0Cgeh7FXOD0yksa43WcYtPwZ4u2ffGoBZSioHKEfTLp0-4Om6yB-oRe_8C0Pcm3TBCFcys9i-ryqkS8DrcMT8QL_jkDTmkP9nB2EbZ0_qs8Ayj9K8dnTc5_AzX2mXQQEdRfAjQ3447xl_NRqRTeU4tCMVKPVZ3giK4S0HDLtoY-oN_BBOsycXf7JEAPKx-UYE6lue3lNrRkekQjh2e5Dn7CbPCwul20cAe3AQ-EH59M_RwXHoThKTxade_cgE6ZoaE_z6FKhRSpueDwDe_9u0VDcFibL7ztQPZKJNgIkKZl1tNPUhmTGztNXmbMlDwbjXUyLimmWbY0Qr6YrxNkbCF94zPA4fUy_nn454xaHlVNAZjUFTN5Woel8ZaWAJrKT1bkTW68wC57OTgC4aViCvUrRMEHSsGPS3cM8xTehQpG_FMEOUCySyXlYCJadPfJViohJxmslMYQ-59hoLOE5gfA--pkIBJrV6r0t5DzNtBwdLnRG6RrnXC6QyrautfdAJEqpOgxWDCsyOAKvDOVKpZqrqsCky1lMXjaeok7gxlcgPbyCyghu6S0FgSZXO0B7IHdZ6SIwA0Nik4jRl0EzixSRqseaDf3DW5rV8LK1HgKn3QJbpy1mMk6CuY_cGkCe07RG7E6zxGWE5Yi5mhp3d9dWXnVhdbkfwyZG9jgxjI25h1JRHVFUPvgwUNRFpYrKbTlVXRlR4rvcer7gnvgAkL3tjM1wdCHqURejC11H7QhZEFbxtl8S20ePCEmIDa9r8KL7tM-pO3FBL-7AqtwrJLevDtOvfV5ur2oBAlVnPVvDrp1GcDWQOAcTxXSE" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="jaeMfO_ZMhBGVmCrVimf9Z9EqS90j3XtY0cHYdiHbBNjykjNJrLCT4ydcSanYuyBaDhSRPoKKjgHYlYRqVNcbX252Vnt1xLS0sVbytW3kg31K70fB8zVXuTm2gqwyyucxCgwrI1z1iN58cBTsUJFP1IynaJ0xunPeaPesCmMsky6-g7xc-2jyl8OzA_ol8h_tJi9av1z_Ajvm2gBK5o0JXlpuLnlAcPxxyRI9uSt73X8s3pjrpOXFQlU0BIRGMTqnJ5WqUUxVfvmJZlmn1PuD8UYK_h0xgDQ_Yu0ZMDIlIIOQ7Vi9N8BaP1X5XObcE1gS-biGO0kyv5YlFrkXfiaXyr4i7GuuaX6ssAp_HmW5NoVnOuozrCJx0sRLPRIcApwMvy379o4EcEpGFHxHGkN70qjrSq2tHGbvsAt23W5k4bz6qdf3CviGNJY2ikanDL2VBdALooAl8XxvO3kAFVznPO5jzwKgO7qPFiIvzrZlTSk861-JZxr6W-iTu9dXLANiX2oLcUtel0V5-69VujjZvXwCU0yGyOMQlEUVjGtGl5jaVhGPi4CBEVk6CSc0iWKF70Hes3QbdAuS8UApj44I3BElpM5FLSiqX3Iy64jmn-v11Mt2MtQt-qw0iVuZ0KpWXNruPmH0iAKZZC3cgHj0ls6M9a3WvnC-RX-jIAVgLUqiBvqkA_zs5AoSiP1Q5qEGFPOVyzLyHTguH7hOiXyz99GjT35r_3lTGTED2n05uB70pF8eVO2mcCWhSDfk5Gn6HN9kTCpRTxPaTi731WCeCHTokmNt7Eo8xYmH_Y5ploaOoUosLbhVdqChvUEJy-JNmOQt3GadYNsG33bvMplGwZ6mXSmqCezzqITS3VNBiDEwSMomDuTEcsUoLypB-oMYSgxyhHXowE62yQYhAl4Eoxo9okh8sKun09Q3yml5MSRH1Gr5oltrHrTIwstJOY35aXIpUguo8HZa2z8rk0qpLbowG41etiB7WZUhmgAs0VPI__OWukU6_SE1Ou5q2-JUIw7-5xysOxqeLvBgNmeoRDl0UPz4nz_6AhLgBu3Rts79z_fAOLHqDVckQbBzk-ITLyyi8C3LeREV_8ng7vujD6GBfzDqsKK_70DJ-jeKGW-XMPSPoIwNxcQjdFSeHdA6TY_WJjep0xnDw3x4pATBsRbhuW9F3vKLeNTeb1q_sYQ345ToXvcuAfDqypqPKEyYu2JSu6yW1QaEsQMvMJC02p1phDPJdFbpP9dItAkbJyHBZn1kzZsjQX75oF5xbcqGvLDEIwH5Pn6UCe5xVBC8u3eVakPxVnqLga8e5K9bvTz1p32rpiAk8gyco4S5ZdmMOHDziFxc5RgZyN_oPuV8Xxjw1RQxtFEsud7eYyTnHuEsjgjk3V4iOq-BZnGF91whnkMtV8mA7MRJ4HE5lpVoPgIVH3b034nZ8tKMbPwjNGpRP3m5Rv12VSf4rcZWHhyJLb1VdTKNId1Rcv2A1p5JZsYK98ieJ5jLpv5870UphDsL5UWXifjnSLQzQtGnom0iqdEtBOAbihblU1azmpbd7z9BQ0JNfFEeO0J95CU_0XJ05JscgtontaiPIgxMbJ6HAUNpLig0jDcaPRuQfA_a-zZfSUSlaY_c_jEG1vgj7EIfv9FNzqKablugC0Ve0zl4aaxq8ZPtgWnlpjEK8rjd6WQoxvh-Hlbh0nnUi1yODMpSwe4V4PnU06iqI7itk3BnhjNNvAgeUN3D4oPKtqZtIUDAi8j7YtytVeZpcr8laSX12OnfcEz3v66q1OP4eUCONvi2ycdY3SfLApRzLczWLCXpR08Zzwjmm8dEvP_QgJOBd3nBKzsSNAE5VRx-q1sVlT4P5UAR0I9vw008S0RocSCpeRFPYYk7LiDU9JA09AdZDGU3mQC7tEbuE33Tsp0Q9gP89AZr1ETYmJCeYeV6pdjvXH5fFI1_MKeYP8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="BzIO15PzD2hY8vs24nHK1MrGXy9Z3Kj65Q6G0p7si1B3YO259ytzZx6E-WAKDkTwxCixembTSC4fN2hFUftZywSG1Ppk4494yjqRBm5wWciejAkrurx3MUkHaEUrN6UHTvuRg5lEeTHEwoZ-PCiq75JHAw3bg3PQWcfdZ1qiLKbx7o1guPEp-Cl9IyEp71W_fxmTLiKsQi_ZYUOkxdJ2GtX0czVRXJBYnQaqt19vULgTAOX2Q5ylHhI2nREVyiKnurC6inShekaJ7vofcReheY2L1o5RJo5MsX65PMolc2cmrMUULBPRn9iIWX21G3_Rv8Y-teP-ZdPodd7ptW1aEhbUPY834ZSzmTvFVeSX0bmUlEnWBVAJ-vLWbpv2s7iOHC-zIYo3g2LUa5EpDpfBJ6YuI9MbznMbngvcZbG5sz30QhXiLudel53iVHNL3cDRHxvlTJQDi90_5IHSG1UJ4qZzesC0i3bmwZ3H7kzGo9806mupmcPC4vcK1n6Dk7732tsOuUQt1egNqFi6xafwEi-KfJf-EPlwiXoJwB7uUyre5HOCMs6i0Ruxi6-HpiAcmiPY8NPHlhoQU2Nq8ykEsuHIqgzjgEVgx_R6JtlTgCbW5QiEqwbkp524HwQGS8Ail9Cgr6j9FGWMYrbZq0S1n3RSJ3MPCpHDdQICzkMU5WVfsy4pNr_Quzvgu48d5XZmzDJqmn6sT9uzA1z0j6wuDEpK2_8_xEA8ocwQVfq5BDkmoo9x-U2e9iZ1qG1Ojhr2nNUs8LF7rO05TrQ8M9cKseWUr5EP3U0gDR2Qc3YK4ljcT6vly0R5DZTKsG7ukGbCviRfbODDrrB1NlF5KXLIuryjfsrbKWq43iywzKi90U-7C5qmNUbkK5Z8-wXv-VuGwBvenvVtc_1SHmSNWRbl9qk2dbdbdBWUc8Q0QA7C_h6dLgmoeznOkiULpwabWzTgCG8MrfqyIS8jpTseCH8dKjDmH6R5yPaD__TDcrMcNAnXCu5bsu8c_xeWz8KgoPDYgaDw0Zg8Gyizimz3Za3hsgMqezuEUkNavo1Rgzi5ywOoqGprFsTx2PNmsAMTodLp7z6-9qre-9bSWLOax_y10gn-5kQIc5DP8MItb5h6bAx7SchKiGfi4rXMnQ6eABRC_xf8b1HyFnykVIBBhVjTDjIdVzvKraPQYF6_AaCvJLmCZ8F9ZOHADX8YQeGfDbDb55arQxJBTsA-cipuYKRHXTg3RqFL_npldroqGH962zivKRkQoWCTbiZAYEEGx4DABgv-TctxztCsR1jAMcpM0nviNfvB0E80ZNyDFnf2czgAZZgAgTXwo5xH9l-gE40HiaUeiDCN7S09twwSdRzpmH4amFHXzuUQAyJh7_FeEm6gfCbdm0VinqJYH7i3IHatM0ejQW9cK5gEW5iqxQrXU_-rYd88CWooKi56xfCZfoNRI2Kar_s-3ZWpX-FnNZ15z8WX1d80DtOBsbjC7cWUpYGaJT1mJ9hCY9H8HYddBep5dji64v3xnskK5zUHb7H8qViksaexxmLGrYE03LuepnfrYI6rcdXPVFJ61-Dkj6e_ncI_0ICq_S9bzIrX8jRPaWRlpwX7-w1Xjqf5J-CrksLmA4NO8XuAuhrOCaErd8I7CDcVP0m1BQPk5q8qZHycwntp63fHI78gnpG56FBLrRCO2gTRrCu-iYxn0P8UiTfiy_Z8SA8jFCw-PFHbL3eesbPZlikoAwdB2sTKfKXiqlGvNH8GMayb0lXgmBR2eYte4zNKeKjUOnAnP8nhBd1YhQz4Vd0w7P5RZrnZCeCSND7xR8Yg77v2XnHpk4Aj7U1Fs0x1mtklGLphqBINhGyAqIJ_r821esgaEs2RKMgF9g7w_IH77llZ4ywKiU-jLzrLGw8VhWCFPZY6KqDQGTCwaHuexsmz8-h88VgSiKBMfxk" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="0XewGr0J33ntofW8pVT93JqW3h_57L89BLoeUCS32f6iJmSDJgros2i9ACXCQkwGVnDOAhSbAXz1INwbZpO77Vp8w2DFLMNk9FBnIXYYiHaG80YIHpMV-dR7iIxIxngZ3a8fceH0yuMNZcpkn71xzozzE9vDX4aek5g2Zy-J-AEvl9d9JqEtkX9RbchW7fCWefM89wKQNLKH2wFKZx9hA-PZspKGNVF5vx79Eb7JOmr3Z7uQSMd5DjAR7EftNXvp7YEtFN274R2UTFC_de2vqYDYxw8vY5PAj9br50I-2yEgiL7yV0ItaW29iq0I_a9_UM7n7PD_K47CKwgnoL2kWorfdUVyqpW2_-LCODmECQyTFfTs5aAZ2RDYYEaV39w5fYTFRsU1pOPEn4g4bjVwbl0yX7p6foZOnn-RZVLpgYMzetJRPeBkCh1mdXdtXs2WCYY9P-QtY7dyReX9gSJmTc6nDuE-kn-tDey3_W1B3dGgh4ohA4j5fOjHlzaXSuOHNtJQytdlHbWXy4mWizhvpuVEXEG_RwMI4_8QX8Ti7x56FYCMI9xkQVdul1M5X_1ylbJA3IGkjyso7sof6ZixLttoPoWUe1xlKByx5oEMMUhmUWG8LDGjnfQF_-7u1o3l1L8HR4KprhravpI50h-v0v1bdzLXJcYqv3cE36g311P6Q65mgJQltTG0e-GdKVw1ULiz7cE7mXZ2hVD_GlP3ISaTcVo40sFiY1N-BVNvA4_SanOcAaZYu4Npl98MK_dx7kxKRTnfoES-1EgzfaDP1q_WquhZfXAiuUEFFFhyfyrmjC_ltX-4oYbsYskrFvYMMV-Qp2HQKBo3uB-vvqz28jDjj-u7mRERnxTnPFjgA4PYqhLtDvsKQ_XyEDOO1zfJZcBf4Ljje-11a3F5w0TZuD6Fp-COdaTqIbZaQD__DhkRbRJ1N2n-A3ZR68juDGc-S0Js-IZ1yoCDLmUqfYNqwsqmRP294Hdj-ZWcCAT6FUuiGz0vCJ3drt4iLKAWY9otmzR3kolCDLy5qGA6Yuxn9zIaKXv0Bu-gwAamSK0M64_zG4bZXoIe1WXUIxI1HcLYaxvyrDjoISuWwSWSi-jxnItQ2L6pifqCt_KY3UoN7tppUTINBFhBQhrS_BCxcyw6FjL1lmyEZgS0Anvqq5oU3pM_uQHzHVkBL3ywXJgo-t0PSKBiyqbAppueUira-tFoV1b2iqbQ2f9-ocXJ7J3uh4oyeLk_E5eY-d9XmvH-i1HSmScr16P70rtsDFhIC6yKzcZkmAN-m8D4Jd85eAzlpEfFB1oDTvPyK3RA5blYG2dyRbrBNkIFYCjxfNp87dhyi9ngIPxjpZwGMeXN7BaruAvu1VrqfIeAapZkDKSLl6Fzfqu95Q68IZ3CNiU-6APcnMfEYzscvsjbsoUIBm9dDcIfMO3DkN2dmwcCP2Bye7QTpsaZ0qc6obG8mSiMAZAX8yzSn5rKTO9MDH0Z0Sv6-anl-YWoAEL4tHVy6ts8EoJ8MtTAnvwZimKu7RLYEJuXZeiBC3_49-0Bue96WNrLrtPiuJcIUpxvqvlqfOERYkyhtEXjrg5EC58hsttD5jZEWVLV8HbM5mGzT0Wi3qXvuaOcAi9K90FugREYkRIZd7I1dYr7OqBxU1W_Us1WaWSaN4uc9KFNyygi4qG9laFsAG_-TxW9YvOxXF4iCPG3jKoElzSRnmBy4JNc3G01VXW67096wyR9LZOWL-S8Qqh9sROGkW2sW7WMnsCYgiDu89o_AXEr0CnpyBxe8pBCsZ5pWYAXXrZWfynf0VPF7jpR8PAomwh1lDcxTTvnG1yX_DTvJKuFIoGk0nt_E6MAkFf9bqgZKCgOsTMzy7KXFZbpOQiyV6uFDw1vr8n1pw3XMdFgR454n8KcCQqfp0SdaRy1FRyyTA1nCteSfwrvaJ8W2SetMxvW_UEOqMLl" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=23" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=23" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "5eccbb02-a8be-48a2-aaec-304e8b70e83e",
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
                    test_id: '23',
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"3EV99JLLAOND7"} || {};
            
    
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
                            test_id: '23',
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
                        extraString3: '23'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '23',
                        root_domain: 'gh-proxy.net',
                        item_count: kws ? kws.split(',').length : 0
                    }
                });
            } catch (e) {
                report('keywordsPageLoad', {
                    wa: {
                        extraString1: '',
                        extraString2: 'gh-proxy.net',
                        extraString3: '23'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '23',
                        root_domain: 'gh-proxy.net',
                        item_count: 0
                    }
                });
            }
        });
    </script>
</body>
</html>
