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
                                <a href="/kw-click" data-ct="jJvFRzAuwMU0ZMf2adEj54JzqmhSXcSY5ADfjExYJPfLCYEvPq2bhEAJNptVyK_ry6xAx0z5BVMmHnDCnr4W9GLLyfKZ8tggbe0NoFuRfuBFJP4nNvcIQjjwYO86XrgxkXk8RcGs0YoO99_m5So5kD14ulRzL_7vF9RHlXZDiezhymL1QBteld9h_ueT2pw34r33i_D_Bx94-U62s2S-CbuT3XyCei3T2PyoPeYuiVmqk60XesWDHiuQfsFk8FTgeLfVydwYwsNut0kB1Vp0Mj2F6MdZlibkNBhrGgiGZJFsfRKuCFcEadcyYZ76krS_1naUDl5Z5akxKfedh9_Xl9SJ6W2m9M-mMrn7Kd68ix2GNbIYxB72WU4I4VarEUnDzCBrkBqlDMoOipWWuojU8ClAoLohrecFjV1AWlsXYElP8sa22jNAMhCpR213DtTJ_nEKhF98KUXOhZuPU8FjpEKVMZ3SuknTmCbJrFrmuc3fD9j5j2zIKoKP8VAkZZzK7Gbrj8AQRS9IV9J4kKoQy1NY4bVkPzgPfOMQWAWkf6d2iOm1zJQOHEBBBcj0PGY5hYhCK2auPVuXKkaBoI4v4BZ3o3bL0Vch0HaLtH5GppfTDDj2RL87w7DZVBh5pUVWjnt2mEx8q1WH9H0Zqq4woBOIZo_w63DPas9KM4lCpcxvsSr_SyTBLb5ttbYXi6MabinKDwxtSyK5fGtJn0BBGIpLllMzjcEVWABg7lrJ0nIGD7gmAaU9QMAJJ3kiy3gT6wFzPDJJdu0kaMQZ5o10fmVlFFeVfpdSbNLoEPIK9CnlbHqI-TVcdOC2TPXNZcS5yeHzLLElDrmBQJaL4mPqF5f8K2nWe61_KOEFUBPOpyoskoEp4lFVC8uu_TiSTPNfl_Err2WMUOq7XjTM0NHerTvVFuwjuH7ARwBDenCCW_gh3jlMF0jaX6rm41Ia5a6PJtuueBV7J9syBPZGEz42w8iqcy9ru0w01Yd58xvzEiWcOIdvQSwYfdbPW2l7aLLjfARwRjYdbC2K3Ip0HrZwY9KvRA91pWQaoW39FGq7eNPemimJxrq8CypUzoJ4076tvUQsuf6FymwA7Lj--BYBKy1wyYtkZ21AaanTN4ZLVxtRDri3EoUMg2bJBqbuYY4Ibfbi8ae2aYxR4_Cj6lPg6MUIBo5b1hbiX0roo_lWKb1jgICB7R2TLGDjKv2cMrCskr-E5Abo6JvkBhXTQP4Lefxk4kWT-d-KTKiLwZDkQxnY0ggCaKmzdn3-1wU79WIRYnJczlbFOqNlwlvXAyE3Uw-E0BLEpsZDVUYXXxizmzu__spdX3KL-0uMWfNKlVuDzfYFzlQbl4r5GUi9HIQKSyyd52RA-JEoU8cc3ugev9UsLRBYR3l2rleF-VHe1jdNP32tP58mzZaa-ejanbxhvf9z0T6wUNyUmAcePt-a50ZcwgwZg4lGuZLbu78TvABW4Qa_vnp7UlkTPGSN5Fskjw8DMO3XWX2nj8RJzPoVF-Hns94TWwL_3Rt9o02FpL98mkl7Gur2ynyhzGGv_HBDbPYoBAZpq9PYuxFm8gP8TdPBG7-SHQpEmaVb-kZHehCMlLK0_rH-kkoTRMQr-ywlxaBKcButs8sME0s7fm-e1YdnD_5luTdkTS8jW89BKzawDWlKwkGMyqREOvYxex7VTjYAGENGfpdxLlfCzu9vb2m07O_UaQlJBL2gBZGCN29LychV_mHzbrAHJSV1Bzcw3hMcQvH-dL7lmktAAPGaAT3N5tOU9bJzM7hL2x_F_GGxwU4dg9B__ZNvXK6hWodEcBLIb-x8w-s6816YucOoaAOl07wfuCRmlStiC0p3NJj1IMXEkGnYqZ4kJIIdbzGuRtoGu-NQKm7y6bqMQMX1vRaNFjuLZBKZvmv6Nk8_UTupld-bA0RNU7mYhmt1mg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="ojwRXs8BxmBsLYA2YagZLLGFJLQwc584lCuoDkkIr5TJNysHk75PB67DbxnkAxYTI4unEx0q9Io6qzG5_ObsphcB9eGLQMndnhHntU5haN28ZHWRThPvMMmmb66GEOxUau3LWNIt9t3AbXneWc0hhK5A4h4DZbStSQ4t7h_R4QQyGMS_6DjQepSxJzlHFq0H469vebei-L0jmqDpj9fYkn1-37vZAHNlZoUOEG-m00ebYwPlcXStbEWH5_VIRN_gDietC69stiJF_WTRahl_9hNlP-HrYM5c_WGLP7BugNs46qjE1msaJxCBr3cv5CVz7X2nC4r3yO3HIqJiFIxwcYgNIZLKtuk2XAMflx8UHdSS4-kfwiopXPnTsyIeMj_9e8K26ENrpz6WvuWC_SBeCV1MuETLo6qH1WATDJzHzGBkTlHy9tiQILtM_iFgj4jbPNlRiIM_AFoJ0z7Dimk9NPwFP_3UeU4Ck3mfzDEJ-spbVZc-RZdqQfcx3ovK5oWvDJKzLcLvh7SUTJZnGmozytvLQoZwKgyX1h7HKWm7zuEjYXox0HK0sMT-wGhIUUfFYaGRXhdpIU5B-0GRuFzgnqYoNep_5emf3_NgJmNu7rdANUZM7qBLY8s1u84MISzZjJ7CIJBGPWeyeeZQuODkg5QQZL0TAQBVr2wKfFn2AHete8Cgc4gB97zRQqaDlOxREzJZ-RqSJqgWurVjTqTij4lMxGoN66oPFHZqPmL2xLXsPSvSDdDsIT2Kq6TSiYF8WkX_Kb6FovlCIGoEDw0tKiV5DboXlKEgYq1-FVDYIMFLizVnCnX8QuiIeEug8BpYKTpMYoZhM4OtFqdHEu48Mveh8cs0uQbtlqGFnPBW3QFgAGXg8qegQWhlW4CMu1ddveyq3K3wMKo5pEOoX_CKA0oVZmzlFc2-1aMQFKyscfz6wPWEh5Z3VBCSg5UxoUk0cPtY0shxQX2MqU_zmdAls0QMb67XcxgJ1-EzulrjH72P21H1NrqqlldftiFCpwOJNEkRgA0e72RBbgifdMuGE05WKRGfdh13oNSXPHAoGgyq9UJikM3MNMxMqlRQWyH2A7YqmDW17JwRlJzHU-2lZ6JP914hz8hTDoRCU0Rd_GqR-XFIIDPeTPFBP-YRw12OYjkQCryGWdU8KRjVfmlQzewK5pLCzQ-MDmgDfZwsFPmSsRaagWf7m6jMF1rgN0EqsZrjkTXJoqJXG2XJ3X-KLgW9te99X0W7QhzcnaZFkF4WGLT3SGbyDWKVmGLaGjfKziS0oRf3zKJMFMRAN0mUPTdls0N1RNf_PleHOsFiD7zBxv8pLgpoj7hewJ7yoYpfpN5pek11XPU6m6Wl9IE1qRshGjldhVDGzmrtEuRI8kH43jcRNHC9nKvL34RgAOjdbxzDMBc216j4h2vpRpP0ZsYWz3aSPdWPFHT_2sMK_H_R1YG35V_IWfuhSiIEwiLo81vWrdY6WLQSXVIfTOOCUTIKbG2lioiEXukNpmcCqYVCbixfy0RT41AU3CierAWQUruWX-VIYdnnhAG58q_ufPViDuOE2nKl2NaKFUx_SkmBTVtXb2AyTp1wOAcxq_bCjxgzdi8Wde17Qczv-phUmqJa-KkJxNjVqSBCbGNKg19XJpXfRjpRIGdR8Y1giU1TZ7UFINldh61YzHinRbw9Jn3c3C3-uC5rZlnvtvHMQGWaLOBtpiXFH_6qRj8ykQmySngqPizgfRRnEcPm3XHSBD6rT4H9dMMT4DwvEmpSXOK5QKbYnqSkyRSOdvq9tt9m2lMjyC1nnIAMb10_IdkaE3P9FMECd0ocBVQqrDuMcVAs9la5CmZtM2lbcrsLA7H8sechEgeMifUwSZhPMcppjPkTXzA1PHHt3rpeHGY4UkSkuZWn4ugV8JSwNzjSxhNETpjPiTcyxSA8yXPRnc72Ho8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="-XY--aasts1YjjWXk5qZDXZQcSqiEy9JicopQLCZFbhzhs_hCxC2rRXQl1uinhsCvxbx1GaSrSK2fXI_mn4JIjEzP_eF3QgAKGhkPb1IiLfadZE1CaaYPfNR8E0fV1Arp-QaVMZA5t0-tKLdId-TF9srG_l6wxTSjg_VgA445ozyJJKUmgy5zK-T3dBh5aGfsR1JTwvm1ws-WskSTcELfyAEW8gWxR_TU3hhb_f9gxSH6gBSAzgeaHG-nqW5kHDi9sTDiuJDG6jlhSqW8Bv3CV6CY2mh-40rDj4gU-l51qY45ZdbuliKiKcZyp1l8mFQqqrCOPgkma6iCn4v-jXmX4R2gI26FJSFaImBIflH5F0Ouehl8iCT4zk_GWKknQ2axLEMOB8bs4gRST1g9h9W6mNjCV_BpT3stt1RuFqpHJ1TI-CIAyg3x2gmqL4asP3xFhkFiXcYSy9X2ggZoxpm4elLAMzDOFh-v8zbr_PpBAuJJ0w6_5kx5pQz7E3CV4cUrS05vx6HYPBJJtbAAqe5MFw297KYHx4g172yeVtC39r7W9PYOcVneqauhgogoPGiJEuGViaCNaS0O1agi7Ufqnbxlt-TNep6qvT_1yN47NgvkcK-0P5DpYMvy-jNJF4E6nzq5Tquq5HLkjqocbW42B5ZkOztbQabwoii79VVRWcSpiBe9ttmm_5I7N_wVkBgJze3vtQ7pzvo26pC7K4hMZQACtVQXPyj6FUWCDgJwbAU41B_aBU7eX65_YFkwBdB5vJQi6XGKFAQa4Pu3y6oea0vPGhMLm3i6AgPQIReEIF6bP9cTMb0mzF34VPeLzUdxoiNVv44aqOwRW6OUDfwh4qm1LfL6J4Somoj5-8zvBK7qz2D-MLQISZgxeWL4ikSDVaMoSzDTAc1SVNPOYngn0m6afJ1WNZ-Ez00n_UC2m1q21KJg-STuxr6VUnMuTv0NKLbeJ5G7rtx3Hqr4Rkcv749znVGl85qJSH6lwKOiPYGVp4Fd26kdfC4gdx2abFMAcdBR4o_3qx17F1NRPuJmkJbU0v95AG1_z3uZMVAaCARsB_UdcPLhZ79S6eEEZYb1eBZ6R9qPf8SskaKLanxRXXK9FIGTe0HGU0FMZlJEFfG2PqPSh12w9BLobU_-ZiSneFFcO6r6VZIMjdj5WCEUomHY-uA1f07DKTw_deYiEPEX95bdM20duB2FGbvkfK0shzIF4mXUHPi1nJ5gKBJXbR5rIJEQO3CeOllcz2zjR1SlXF7Cn2DQBjHOBnMvlMdR4t0D_OL-E2fH6n6ceDn0FQLbe5NVXpr7gLnU4DwkrU2EeB97pEy9mLHhlR2cWHsszvFdSO_iFaGp3g_Xe4rhjwZQmuhm1mX3GswHXoMi2Ai1u373M0B7GrqhhlGVlmwOvCmX-KvOpST_EzrAjTrMXlIIskGM-fYIPdm_h9cFJQzv2xdcldrfyLk606Oeibx0IPeFX__C4891z0HKX-ghKfILki0OCxQRlMFmr8JLntHLaXb4Fh59cIh8uACgJN_EMc71HdAnOzR6LgtO--4xvfsudGQXuETG9evqbZ9U7ANKzNSEsBNGdKvCxHbIDMO_1Ajv-7w3s5VPhK7Xs9mELq8yH3DrcjcBJUNUBtD2fsDBR1jVdZDZrFLSZmG734PhDjX-XHBhCfk-EdcKWn2DGTD5jtPxsPRfI0WKdVMjviEajthMCs-QyidRxHmKN30TZuq3szAb6Ax6H5rJ3lRQ91ECV_mdIMvTl28jQZyojxeO0tQnIjrs44xREDzvqfRlhm1Xo5X_rquOGxx6jdTNF0dFtoTF2sKL4uk1zrHcs10VAH59k2GTtQqSimrsbkb-3fHdhQ1b0ruIfTizmgN-P2nHhkykm8xhg_PnEcDzf443P2A5EgwvTGLzFcwNV6pUY2sz7eFzJqpnID_kReruS-thj5_R1b21YUT0V8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="TVkHHUbVisvg7XrGUQaT1g0OkS73B4q8EwtWMoMy3IQ9KRBdAFox4Pf7PQ1sjs6AZyUpzSNnHKbTu1TtoJWUqBpfXK0RdHxPSfhmHdeeQHU2Q1NheM7hz0nfpDKXfZBse7WYXC_WZ_JVKRCC1C4yk0OorH83hmGrf2rO7DkxH7k090K-fJ8xbf4hm6EfCAVywUDHTJl5FONKIdp_aFlOOPgQbqGHvg9rVkdqqI7DEMRfGnPVfU0sd0GAiwQR2O_o-bnFKa-5z09E4-VVJe-fZy92WJ4JQd5p71y9pL8oHi6Y1V1gOT0yIGTbzzwu5CJku0ZEkFz4S4wwetD9TN45G_ySTFAy0LaM26CLnBDAL5hSjfn4hfRi1aVubFPh4EkTVWS5Sn1O0-VqoSAz8pdRRXZRUbpx6rKhWxeu-UBc_o3M5XhE7z6mMD-Go2LBzh45MiMl8k4xfbakv4EX0p69nMOHJdU4SHwS4r4Ih5Ptc77tyZ2fJbyjGv9kQwgIYl7Msyopf3P-V-tA7Stt0qDyP_QFTMI-5RDuH2FeB2CwOhSJAo8ZELbIlMf8a-58nsEN0HoF4s6uQKbBz_bUDdpN4KoHZwB7gw2KkFBoS9opDw7rT5mw18CSi5o75lynxnauQohjWCTq0bfUH6l4vdmRjz6OSl8kZSW0b3Bss_7Exkgfqnd5Tkr2ySkJZjpSP7QuD-F8V5tDqVIk0uFiwMuUpH3fqTCQ_wqHdEhnXWGEL8je78v1Kka2X2ALBcqPhEf5Zng5GT9STVgczhqhDVlKKzdb7shg2xwhiq3j9HOs1-U8PINIEvOWa2wH-IfAzlQA3T600AFo5Z4OFNYKpbaSCHwVXtSgmI6IG1LnMdjtPVIdPdesuPLEB6j_3jJz6D3MWUTLFiTPGbBvNhd8HbfqHd7yGkQtfU7CKfkZkwDo0CeLGR55_Au3YOYkCpG95RXOJuvui1tMWZbwW8ZyKmH80bWC-pHxDQFcciPWtCgbbZmw5bnM4pCxuZfqgjPHeAw1a6JAOHiRSn2jQsM1KlWB1EkQnDdKWqf9v0QtexoKTvWSFD5ddh85exzqZ0wS75t6RsNRGG6FaiHT_r78IkCwC7YTg155eRIHqDlNq_NpbMnxUS5DYcYo4IMIQOitPjEZaiKWWeQd3xdBe9It5BEq5vxhNL4yh-mevIPABg0-HEbk2xzrIQlurtBP382YJby4x6CgopbHwqJmyApR29kBmYWG1wH5pZGXiW8p-9Xl4aPm8RCMXVfbVtjy1raM2J1VmEyUOS4Z40W1jTNz4Y9Ci9L8VOFUjNvxkPdbOY07CcqsBuIyXD8ZOYRxsJ1jhxefgL1KPBB3hd8hMJ8S_WWOlIJbCuRHu3ldRgGK_u_sg9DIcy98tBpVcEBm6skyk5hdslEu0tLAlmBBm17hxy4O4Tu1BAFihN-IOEHoByrFWxZT6I7xSISF4FqRQYQYCrhp1Y1As8gdKIBZQ42FqUquE100isVLhIUnP2DaKgvbjjgOvgQXoQHcF0Aw5GVlUItg1PNHgdLZpr22cBxqrHFaPKenfEjsn1KyQ6bWW3mZZXSul0v-fR9UY_2Boj0j18OhwoQevwR4e-_dw3OBkAXKGktrdldm8d3xtS8kN8W3f2iL4yAO4v1CdB9a2gqOYlQTggMOS1L9NPa8nnenpw_GtrPqBkv5inSjGQHw2mvlwm03sFosmR19QmBmt3ditM5vsiQlOQCoNhKbGpQDLyAzGm9jEEIedizelydP7splrWd6UuZ5UQmiVxN8oGcdDoo17yE-bekapmba-4FoIbA7WrRybXAdbV65vt9yGbZM_6YHc-smw1QTAdQA1y2EJnUs6qQEnnK9oDf8nurG09G7QHVIcvvfaUAeckuxnZM24KvqiivT354z4UoZRRJ2xa2aZlrSSCgHzLkiIqtFocfv0qU" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="cEL4-WjZqvwCfAmW7DaHaUTGAl9rWnAEroQ0ba_QEirCXxRifhzzPS9om-yoBoocC3zcVfonxj0Xr7Q1bwUlQZu2U-BzsnIXEg7zS9KJQKYU2rlcT8VcldgWcREo48-jKPshx0z-wrrcOqGuole7hy7GiAlz_B7P89ZDH2GrrJVwyfa_KGzGD4_2Y9AOaT5-1MTftcESAUFve8s2O2srZRMqskHj8DTUWm7b_S2nej9Ol_rH88aD-4JrmFZVgJLlkj3-wxWn1bxVeReyAo2KinsnoZpq0KsiJzD0tjN11HkSjLCvpEhW7L3PaCorfpM80oN1cHfEN4JA-UCWJurRb5QgcgSBWbYSJlk2qptD6Ba0bRTFF7xkP3vqVwnU3-0Eq7Np3vZwARsVnasTtnJ_EIH29M8eBjYotU3NJ3njpsDEy6KnlQNIo08SEoht_VPxPZZRTovlDHdSgmF7Fq0qg2WOQaugTOVFi9S_VT7-hHCi4gm8Q-GqEvgb3ObnC1ashF3k0CSmVVRmcxt3b3IPi4qq0g55X8VwqNkNqBE7ph3IpcZsptXT93PzFpLMtUmuTp1fGozw42LxYdUIHnSnawIXTuayEUhJde8oULym1luArjpOzYQ2ajWx-qtOi4x-o_OZ6qsNJSI8eeo5477FdUSfunRAhGneeTwbECVLcDpewmm_Sk2xg97cPwWyDbcGs8nxYJQ0LCmC8JS6aO-wwM9k5cHpfHq7eQo2KVqX1lLPiN9VwF3jbwy4u8nEKcjDfl08KSd9wkaKZs9xc2X1RF5M5XzT7SMsh0oFdtP4X4r4mpHfcazemoT--L6vcKZ0tBtCMoth_4ff7GkY-wtCZ9wxOJaI7mjUE8gmoH-333_4eGHsSprcwi_B8s-DTbRTRCrnc7TN-97jG1Y038dYR_GfhM0YLM-fbDFS96TRbKDdtgTXZCivxdmG7-jdnt7roN56UG9eEdXzPItIOBWaamaShRxJ5mjMAtClUxO0-Yl7DIBmXp5X0GimotcUW5_6X8672j7lesoGLnseuGjTxUdEYYJtvcqtZFwwMQ3UYvdi0EtY_-HGq9FDv1Se-SZZVdeRR-D_EFawElF9rUeyZXNReHGQc2AUKYHyBXsPqKMGmQAxpu0h7HHWGLJWNlnIl1bY_lfW70CSpXs6RunWPBZefH_nHiCYMEOd46u0IIWhlRhOJydZFdT0lHyL4Nbrl9aRRmaEwaTdEK1HbXLzsRvfts0gPkMu1TPg_6CY907O9TSDD_JTjKp5iWLpW5nJxe-ycbgUxFTmpP69xOThI6dcDSSphyNhyC9ieq_JLGmSX-nRoJ5db7tYLGsQQU3x2DF4jLfibypj_YnPT_RS5e9l-Uuk0F4BHh65TVBaS-xfGMIi07lu9sBV8ZwQ7XAQOemon4diVsSve3v1cop1jH_aVDqsXNrDKlNrIpEgZIj5yull0Iogh9TAEv_8WNOO6ZCw2FKrojmY1JxZxnKPAJt_faJDPrIIen9GUyenIy8OiuzzCB29BgdnsLAKAh7MLBiksf2e8mK0MDJggPM2KSzGwfa-MKCxSxiUdCHmeIzarKwASX6X4HbsMsV9u6vl32PwJbd5CyRluts8bjRPtzskzK_A-qxFmOoIQ-XGyK7sg1A8jHTEH6eCL3E4OSZGDFCGcRy10ShuvZTmAq_H14fTyen0UAKMcYVeeHGMb7Hg1YkpU1WrxLy9qiNggCXSRmaJlpgchBlKdFMfNu6WLJbYeAgtN78VGaT_WhXbkGQOtgI1jCINUeOfilKU_k3_nuc0-3gMypa-yPCeG_eMFNABNx6Zmp8zp_Ipn5hafo7bZCA5t6RScK8QbrB13OX44V2h0xUEd2Bd6SZ9_QndqJsqO2iQgeYaGqB2qNZbwlyo_Mzi9Kx0kYVj9xpTMon8dg" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=23" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=23" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "281c5664-0d29-4959-a3e8-7d63ae69ebff",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"0HTOPHLLA7QAB"} || {};
            
    
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
