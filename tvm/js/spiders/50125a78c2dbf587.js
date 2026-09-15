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
                                <a href="/kw-click" data-ct="HcxFoVmsJFK58btvk2EffCkCB8WgyEe7EPXXw6hECMKvp_YmDREODm3vg8h_jlvYXg5wBvWT4pkSiPmeNmBTauZbNv4GpdI70pGBQfspN1OWVfYOQIOwEXiaEjmFPBfQBBdNrczoc1SqncmXxzZVAdItCqoMoj8_cRxjNLspKiXZseL8nn1fvQQYxQka6cFePuZCq9A2RV_EMc6J531BXEHQhD6uCtj0Hpxqp52beeSeaRtQL5OEAVNkgCIFyk8Bww1lrMxZncbsqnAwphA0D0-QDdNh7jhhrdlqnCMyzym887A1_nT854ja3TaLKZcNpcnuPu-p1JbTxgl03QcN4vEzx7yyGkun0_wyTYjz4WsLpWOpLcms2g6kEwpVcQGQ0GTp2QM558tGWj8N8UAXBhWH3m00J4SLmRL8EedvGsXHTCH46elz7v_kWhUwL6OgfnuOwjdmXKtHo2tn-LRHlhNz01jV7yn7a2DvuaKb42oAwo7UMJiIdJRw7A4zynKuWTL_baY6t9Hy6QKRllrddY-KbdusG_ailDL7nLa88dx0uSuPDYwFmX6PfyH83LHvVM-b9EigO3Cs55gDLazEtkuBTAqlORLd8QvGSey0AL_GYrTDoisM-fJI-ncIMA78qQlb78wj4Q4DCsqobRg1vSgvfUcf2XYCag_Uq3W1-TITMzrRxkUcqoztBamT74oeGqn-FnmaKOTK6sO724UKZVjuZFMJ4p8dphtN35tp3zATBOd6b9PGenpqEwusLu2MF7iru6n1NRdHfhDyeZLxMYIyMglll4kEh1LQnzILOUMw1Q_KrvERKgfGexZWS1_wR32J025wg20b48L0Y0Cz-VGkt7o_31BN3vZ-JcUyC_zqFk6XTJOct74XwTT-OAsE58Oive17NmizLFGrDBgsWif41sqLzqnsCEK6dlzk_iWX7JPdun9xgtY7acM-idHqzAQhGrDAtDVUyFj7Bj-WbQqKILml9SvT9sq-nuSMp0vsKhOyO5kjsK71SBj0s1Ii4A3Oj_wz2RESiEKqUHOTcf4Rls1YVisyzftWGSszOGBlaRtu-TkrSDS6bGCaceAIZb4djLZSA4eIs12i5lHq4fjADpcH-IiedQAD-NTQqG5Nw3F2slLQLalt7hYmIm8L1EaAQjUdYPxRCVFF7z0GIxIl6qErgzClRGvQW4avlSZrnR0tDT0Y8qTIHTx9D2Lqri-mmyM2uB6QShTl1rvbRIVFTDuqVCXR1a9wIJp6zJqettVxRGfIWEpou7g5O8nJqu0t-CRwmq1cUfwqPeEcG3CIZ1_DOhobMWke_kfZEYsP-jXT_PILfhx07n7iUqFGTQVo4d5BipXXmeIvYkyhu_TBoEZthoHVPajQDoQSX14k8_ToBwTmDS45VRcv0MQqCxYOqbkntBsKDZnYt_9pQUU7qsX3EXL2kaIzLI3X8ys1d9O0w3vWr5W73yPRllZfqqp4Y5not6aSikw0L3CE_k6hiLOv26bwUBs13Ylw_B3_w6urp8ogBTshIe-iQxYLhUn6rq3w4oX02APCUy2EfX3JQzeBJ4hJ3hsv8eLltaL7Mq6YsnJXrvRqkcvZ24tTD2SukIy4T7G3nrBhoLv_S9t66sElslfptiAKSrIr1beVBDOcbEPmOWYCzof6QMJXykK-LTZBM74ys0CnUywaWfzopudiupiT-5XytDyr470zBmqdLfG5N2YsG7kGt1Px45lGtVFrL7m_TyIExWXOLEfhsvePGUDdWOAw3sOehocKIlTd5a-SSEuhqCUqqSGyf4VWFYew_WvU1gYrrdds6wgkyIPMGMpZ_Ubjut09WYHbe5iH2V5tKzEKA9GGp0BtMPc1Sil4XsI5G5wlHaX2_oZZsCzshbPdlX0ZD-KW_lCS4h6pJgLY_2Tvl9uzfAT21KEqvovpbSUkGcSKfQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="c7vUiRlERqExtLHr61KaDRxtBx2jzIkxXOq-2FqAyy991oOI2nhCl6c0rZQJ0mBs5ab3U3yyUFYAqRibvLzggMo8bCdLvQgIJg72DNy3-akDnbioPjZ8stoKwGtIyNqIIgD0DJrqHtcd-QRmF1uR7V8VkXaN0y1kmM-Cu0YN8AAXT4i-I9z5q-JlpMZ1f6BElZmnuhaxXqfh8hxdpyDT6enu1FzCBHnPAUTx0mDUEX1hMPnjtkWfR8Zb04KuuUsvpFuvrPeBOEc5EPD4JKeJTxISc0iIABnsnX-5kOywdWwllW5yLceoblD2C9ZevmMRGPSSt6ueLli_pO725rw2g7nES6w_RfbriLJblFapnvoNXgK3Y3Krn5k0vmIsZuldtD-5g9CpPkD_2_H7xvLX5nKraSXmdacTl1QQPV_iL1MHkN88r0sjh_KZaVzT3rg-bH1_8iDxsvzSI__wHwvGxsrBnruAF1bwOXyX4jPUVczZ5-OkZw4kthmd8D8PVY1IPw94M6kmjmGUZ7Ru8FsWd0RHGjIu2YmiXVpkMBVzp9zoVfy7UgyD07gStLEE3N-VfrnaSKRKbcE6hl9p5NA3m120-2Isnj0K9ZZv8ob4ZXIXS5qZbQGW-RYFrdT0TZ7Flm4PBdoT1f8N0KprU-1AhbEytPRFfuK0wcra8O2anhEd9RdJHA2PqTGrak7i_8hLfyOwI7jm_DctBH6d78M4CCQv1wfeG7CS1HnYvzbiR3bfZUNeUTaBIHxrknq3tfpLVCNzBi31oiFDAavix4A8BdO82a9eWxdyGWQSDJmazXrDbVtq5uYebd5Z92ydndf56nvSqTHcmKu04ifBT5bI2oKSrQFYVhGH4wWBIbBCc4G6C_nvfQuX1P3Gs4xMbsoPampGFhgqC5KZ1eE0ZBQyE72EIAL-Sp6dLGT6jXORg-JHBuryRRThWSSt1uizFHvA3Oi57PB6z-Cb2ZlTyhmDPYxhNk2CGyczyDr4Tr2QubS6i17tu4OQYaAR9rx9x58bchDt7yZ6BYhfcehK71UUySg04svlGCOg9d3IaCCHekVC2ghNeMJ5oA_zmYcTN3B2tDLk4qcAhJLwJCOH25nnA61ZsFaFIx712M4bGL-xh6Z2oJf-ceqIE83hXZEVDBrYwZuwO5CguudXRt1i1bkMzdxan8HKXeHmywL7NGkzqgBnsgbRvAy_u_sqqfbbhX-rVFWjYt31HriHSK5VCTH9WKdls83u-bzUbBuXKqRycYs46cMR6LnNDjQ41jgg_sXyVYpFf6yZGn1c7-MR_MKzFEod-6jVEOYuXJYx5fz0tFr_fCfsRDRGEPrtc9RXpKtMl8Gm4aXD9L6RKFs7tr26Ch9J2MsylC2hbtigJB-t7zbQsVhcrgAKhOEWwUOdL4gfw6cNxYsJMipzTsRRBVK8Gn1uQUmCeVLRzJJ81STNCIsf22pdg8tCGmmHbVie84lGKw255oQBo2GBH-6tVI4ySGdrA6wZJzFDsoTJ2PYO29zgILdX9xnJPd0zyI6-1b98Fwyj3EJogoJ3cIOrPbSoRwdk68ns7l5XpnEj8JAbmFL2g0TaR9jrDu2UrZv-TWxOvt5HNB11JyiaGx0I63X_VMd67vClkyR-Ft8PkGSUGJnCZf3EERN6Zlx3Km40vSoq5et7aH0mW71KNhp8BMxVXh9z361-RnVY6jxdom9VDW4gkn3XZJYcxeiZYX7uygGMfI-1jEIRDmSGveRYCS9qJFj90gOvmrC5BDx2pmxPwcaVwym7D1iRAeU1Q64qcE2s2gXHaHoRmhp4zw7_PRe428PhZRwy7Vvonkmb9QqSizzOsHFU0szvshXnErs9QZ-AKIx4vfwjf3TGZc7Y9UZxVKO9HnCF-n_e8vvlTIlkckDX6spU6MJWshXbPsCl5sRIyUMiPY-Uj_YscfvB6lf34nE" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="clEsAx-_dxDHT8VbpVS-p6bsqWgRAMRvw88mafkOSbnGR1_Y9Z1f8VQw3KfwG9wL74oW5L31PBbyMSWmBKOpDDkEBe2xPIpMFy3fdTSWYrQM2okfMGdAgN_L27Cz7tWxDfObvTtP4InJzYouYjgDu06iESOlMOZ8XheKPnBXgm8WttN5AINmENfNclX5_MJ2_Cn_xekHta88O5CA5wETCysOiwIHdxqNi9iYT-qzBoN5voyNLrIVSZbLzs21MyZmFJW2wBCH0FSjwIuMOimqn95OhwZLLdCdF_CAhCbgsAFvMe5HY1gcZQCacL-3Cj2r6Jy0YEZvk4FT5ten3p2sOqjjLAaTpfqlmB8vHKwBH7lD9-vHA5mquSWwJk0Vjw3MVHuvyrBBoa_y3J1nXINN9E7Sial0giO9qXWW5HlqLzWifOPt980SJiBWS04ph508VLsO2X98r1V0fY6orakmY46UIDxgPG4v7JW0n929CpLh_wXpc6If4c3OvEkrwNAzZiSdfzd9e6eYOpfbTVeFHMYc2gmgRUBOeXpDHT2_I15zuZd5G9xchGYccPHtjCK5k2GiM47fxZ5iN119UdiKpcNnn3oM86Kdg3Y56Sudx6-j_Ei3OdLVFq5knwEwPkYnGSvj9Y0Lx6HjOoV6-_Z72WE-EHgxv92yE9DrJIoBjM9G0_71gFyLEJKDgYbJuDzI74wXxCDwAnxXdNZiOvMVmtckETP3MNGfMweHefuRGFHaw1iozr-zep5DrzSip0LY0GZlfJxJz6JaVT38hC9GIHopM20Wv8wYbTq60og5HXUO3Q0HUnriM-ZVKhidAGxjBG2Ux8_qu4Fq8wfsvcZSSSyxUblsxlUSvIg6QL3XuZh07-SCGqBGMC3V7rNt8hlN_DKWCVfiibkHytG9UB2u7KQa__96Cfc7IagpKsJe16b_Hssa-GX8atZl3NJ17aQMFfJ1nyqx18VXm87yJlmeE-4QzOIkGo2LTUZ0r_2VZjN8zL2FyAAwtn9J40o9Z_uOu4A7Xpkgv6aJS0zp1AyK9cJfMYvAP-2d0MqcApYccB9wVayvaYdPj-EvAu98gT_d9qHfh0nFJaNDsoSVPWqMNiNjRxaR6P028grlvKzgMlDgXoxxiuRklrz7vyFYZCNQVZfnnIf0zOMAiq2MGo58TwUvQJwvoDfmx3GeDHwaIlAmCYAHpv7vYv6XVMO_3SiWQRjYrncw9j3FyYtsUjliqluaDlR790L8I_YCSCs9P_lAUw5Wc1XhLMI_HmSKKvH7Zt4LgPllOeIptUhKibX1LbNQreF-QnBwS1eXsFrYxixScQaAyhew3N1hjOiy0LVo8ZHdGTLL50o1WwpjSXiEsd6r3ABK7qeMr3K49oAR2HMeZimG6vbl7XSKUqBg1q2qW75exfRppbkf-UR77OHKE6dOvyOygXTVN-tWFcMvOBFikZbK0P6FqOsZsnL8az5sGW1q_6LusFpYIjn7HevLN-DdjHSpIMpSPGvYZfBjCRAjHwj1sCojRI-7-diEiaBWJwXFMwNzv2qzdLTEHzhhZteoQZ_I6rMtlXlkincKfF4zLUrHpFW6Jn45P5854np7TQE_XFGSQPYwFUDUdeX0AxLDeWw_k7NnEoR01xMcRfbv9AEuKVpOxzU3Yx1-Z9AJrcvq2PioKshFuR7weHmzNw-dMDdqRFNhoPOGuQqfb8kIvMwJFZQdmTKPu3CLwtmA8-1pWbswjTMV-aLgxU8BJ9QMO7jOGwaXBOnhV13FO_6xDaKeEQQL4o5j8UnPuTkU_2y7lU-HtmWQJKUAjXrt28Da56dVE1CWC8qkkvPxfR54yGFKIdWFX59jQnLikK7Pyqapt4iw7vKdmDyGT63z3lMKuK2AxSpXfhXJQmA4wTNauvzwVbdpHj9XUx7HyG1rnZHn0QW6TthRV3IqFC0lUmVUdpuvYjS2jXGPivc" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="mweF12BD6MZGQerMSL_-DNkDZ0MXVXhds7N4vn9oBon06RzIJNeXbil4AD4b1xOVyLNAjjb81OnMXTkg9RKPi9vAkvyY8Q4C7uQ7G4JRTQLDgrvoykljX-UOkGgCIECEiJ9iWOlZ4uNvhIp1JYsbGu4C_aMT782W043KWKR-dp5WRFe-8x09guCV5BGJ3End2kY5P-5BgmbMnWrdPXHRYhSgP_0NMlH0Cpeau2juhYJkVpoP84pbgsXw1A4BlrAyN5JV23DZxzEoKiTUxpzHb3hPmf2Ev6mJO1IKK9bgCrZMYbjW6Ist90RlMWl_MC7Pt8vpOD1Jp6XglnZvPMQyE6JyfWfqtvV_p4iiiV-HAbtmiOzPjYkXOVPuOjP1TA8ID_q6LIcSzmrbjrlY9pRXRIhkAGijXQ1tNm-0BVEXQ9vIxeDcjwIXsoj_OYrg5Y56QZkhO_etKNqT-9gAuEjDKHH8JlLvrlssI2yOszpF0yOx6jJhbOnDnbaTF1-hex9xryXlON-ixc1unCc3eitIvWGrqSzVZDgPBHtgM2jvcTXEKPuude7U2PED6a-e2EjTKwrfQLq7b57HXGBRylJ1IXNKs7viakylrQfdvx35bblEhXR5hIVIgO4JMkx11yVJvrLrGh7vGMVcGmCv89snxoJnwoiBry2AXaub4W4_3IAo3O6v0B961pQuNH7iyE9nRKeU-YPZoA8JWAX_NpWEltSo3kz-kPYqmYOYxiu7Voig-0-vR5g8-fs9CnV-sIZthD2OoWdUx2FEN-qv5BS1MTPwXsf9uNO8pGce6VBej7QJWRcTx0J-vj1_YzC1HZixQSGfaEHpXufwe1-uI-WpFYbFF0ElFBX94YtGA4sOgIebV8zeh9W_3nCvXAyuGLMPjDD3kJNmw8fCq4l-JXCcp6gpdtjsrCR3G-eE9EwYN29p5ZmGhQ-nkqdXxWlmvycELx1JfVJiw4QDaWDnTRF4Oq-I4r7bjR2iLhBV6DZVAVwbDWy0nVP0iwW3O_QdplGldht7eE8aGSy2orcw2fvd4QoXfaPyGcAfUKzy7DwyxNrd_ZNY9pNlx5Dhe1GO6VqJ2_wDqkPdG9jtTl7D1qviBr5yQcxBYxfHpO4veO6iU9jTrepZBMukYKUi0XPt4Q7FBy9VKLYSLh07dkNP1hyc5poGJnqehR6ZLzvc45RFCwW0ECd2yEXURHkD3IfPdZK8qD1S7EV_tcTCCQuSbjH_pucLc_c6HgBJ0al8hie5O2Eeyqji9xDd9Zd026Z7jttUgGxyg0iUEzI2TMNwXC74QvB0ncKiSSzlfL3sztXugReRdJWpYJIKyJn9bDLeOoCaWVn-dZAg2NPzo4a8HycjHRpWAhVt1fD6e-BUzUO6k5_2qn8vxxoZsFrPPmjsC_1reMEits9CZFJ2z-rc9glfsDhDfo11kBe-1Uac0jdaabVQts21IzZc5aVUcYysqHjN_hzcgADiIHoet1T_h6lPtGu9d8MAgHfdWziQLRn-It3jN4leNsj54dgYZws1ZoQ6q1TC0o4cUC9C9dkt57lX32WY2dh5Am5dNVxhJtD6MdSMcKwtxOfOolxOzPNMmMtsupOccOlS6D1cdXgI9tIB-1csLHvTIbUQ0G3h9V_WOzyaYm2TRfD6a-HwGBTCwQvE7S1jygwa2fcyckQv2XnVdcBnDEk3eOP2-VR9O56lVOsOb5DrDhK6XrADQXnkQo-hQSUpi-E89VlZvoIsbcpSreNvsWFBbMfwjo8xPEZ9-1COWe6Wfk-X-EN6Oj29qRlq6mRkHt3SjMPaFb_NkAHi2A4R0yODMCrJnkFHTu4JeKYVm-Y4C1Fd8A9zlRUTU6v3yHrL-omHLOaweLovNTBq59lN6QuRPVWnCSUjSJPNjV-LFenC3zFKIr9musr5cbAYfrqN298SKtA1qjsvIQQy_FQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="LpGI6u2WM-PBf5pG0ikOsBhuKBf3JBdJ2L5JwJok3IAEKt_p47vBvztxEA8q_-uJhiNfpeWx1FPtZCQaoddEEzc_xfthxlW1vd_X2N8s6lE8nTrp5Ilk5DyvaVVHCGIJ1UCQNe2bmZa8Hs8ey8yq8fSLhjLnnLqX7ydJHCLthz2LeEM0k2Gd31FLNFpqGaLhie58sNTOqljVgK_FkE-fR1MXJTKvpKOBwjU_5t7XBOk9DCcFj0jWLQ5Ew1JM-6sn3EpvBqxnUeV0oh6UR6VVm4msO5zm0BFMzNiY2bF6a3I-eo1u3ZXkkvywzhqmJVTD6E1WBY4jUlIc-0DC0p1e0qQMKG-0UCilOY7gV6-bxb7N2MKiZgNV6W4a9vXhYzVJ4niLGPnH7vx5nkWeuXGZdqFobPb3mOBeugXgRYWm2Akms2zS7L1O2ZFDhEncuhmrXFwfeQhyFZfuVg_Mx_mlS-HELiHPyXAgKsfcLAKD3nBkfVOp4ip51cXSsiwkITaAi4rGCwIRl0h6Mx1amFkF1hk5f1V9WHEcZ0lEMNxHEsLyGyxVQ8h7LyS9aY7M3inzYjjTVI_e_roNJnCvHeWDHmB81iLHzB3LUL4cn6IXan9z3l-cST6HoXW7IWmWXnmhqTarU-OXxxJMi_KXxGKnZ7OHn7qrndnPnaeIzLRzwvgDaZtwX5a0fqPv9OKmnhP7GS1kZUjj6DFNZUXXYlFMDl1D6g1M7MiagdDlzZGfq6_Ixg852TUP_JgNTEg_eTRiKEApTCOtw7PMOMWLo2bjswc9OvKKOw4s8oojSmNtiPTyRLXU_KwOlNsSCX8hAsKP3SpQBLGs6EHydb8glLQSWCvcKdxy8yRPoMkDzP10B-PrYroyjfwkrUFE-TFCQN1bZ6QF36WCtUzCPumV0Kwa7AJaCtQWTtY8FuYwkAU1LYChHMEIgQnau-k5Ki9JdP03ubmTUQKzKO9QyIlMYq2RrHrkUSIK5U-_PzEWctcWFhWkCqoLrVhob4lJTlQZtfR_Ha2Sjyb-7Y29QnQUx-I9p2-oJyP7qGOzEoJ4gPE9Dr40ndccxybnox1_L49NKYjxSmsISTtDCmTEew4pspidViKRRpD6qADozbHO0-tL-IjJ01Jd9RHGWbYAz9P4ORsGS3bjeZfzh5KPZTZHn3KoVkK4M_Oeb7u3EWJ24DMJRgmr3379ohR8ZaQE2qEhIVftPT4DezIUueFZ6RPFDARvRcRsGae6-JSsu49LXtuqWxY2mjVjmfj_uV7Qnm1doMgZw2Nco-riV1flBs8eVGgsAPCIkVwCaHVg2r4JRs_P1MNaLkJ72_OFlQBGjlsLP32MpLneY2rDQkCT21N8raq_pUVsg56D4st86q7Iv1laaB92G2hcOmuimS_XQO5OVVQ_MPA7ElM6dAuOog7Al9OAAkrnmvISjEWEadeNGFKthULChCVwZIuJ01uViVPaU8LsEA5GJpvrhbV1X3WGjgnNegcb11H30uavnI6yHmGmbjtvysOiV6z-tQNqYS1pTli0XJOy5XqsDycNnyTJaowFLqZuD9BuZXfdY8wqIC2zVuZkbjO4x1tapJRrOYMKczWL4tyT4fGYPCbOGQN73FPSlZSK_dHOHyJ2DQhOcS_6ZlV8Yl5P8cMHQsuwq-fvh76MZyPLNJdeEMDHGAuSBfBG80IMsJk8UP0iDR4yFlBz4q5UuwW3RRNBjokt1AXpH53ji0GYujMJh_RTbxiDpwDg0PjSFXKMndRlXA0k0iwP_N0i8EWn18MvfRvCaYdFvxfcWWkAxgA6kx60gu6gXkSOXF5pxd9ZyUSYR1gJ3JxzL4h7pugfliUE-jAkWrvQwuzJwHHb9NYww1HeaMXDk5Em5SrEcEyn7JKAUsUAVNmu3aN1Z1o27hpghIFURvxWxP8674HRGLJl8dXWCqPk8j0X8pREjSwtVg9PvU9J" class="dir-link" target="_blank">
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
            sessionId: "21b1db2e-428b-43f8-b921-c6d57344048c",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"31HG3JPLAIV7K"} || {};
            
    
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
