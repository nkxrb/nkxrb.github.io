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
                                <a href="/kw-click" data-ct="9dB-ldQkKBgEtgdCeX-SK-K6uFwKadqEiQ1sJkRElsv_stldvpCfUGiSzDgQfl0s643QBUDahLXOnf5HbEP9q00jj3TlzEDAACXaGlrowiK_DF3VBUBYEAH04nxT9kGN5aojriJocDi8gI1N_rQffNkEEJom9_VjgCrHzQY1fm7KivW_jDt0ED0J_Cv4HKPc2gZSrHv0wmtIgVhL-jpB7M0ML7ct2Ig7CWFaMaW5jQpCoDPfLC_NcVpmc_7_v3N4JKq05ggPNHf71XopgABpnxKgOO7wkoVKqKFe-R90ZuUgi7zd2VUwCCK0NzE4CKoCGpw32e41B6BRD7bmBL10sr-7hFOl46iSlQKP4j7IF2yy-1AqYib7ED6jwJDZG0EOPeN0KTHPpKx_nqofaZWl-uuockUQ_DY3WezZU8qWn7ncuTv0RN3zALxnmg7Ek0o1DYE2Bj5TQQTjWnmQZwzglARH2i_U5UdxZXI-hC3BvFLvqq2KDs1PBLq2Zll4Di9Fipi3mR6xTcIL3mbXkYV0wmI-zzzQGK-IGyGJpi1pGoN4lODZJjMUwTcbsVQztZWGtb4OHmGlrM8SWhFrTW8BLU7jH1HWUd41rROOKqkisfPJDXqdKxVfJcWzhhpODMH7QLOVdXbXAXQaUNxwx9aMZtgl29x4WsYYHREOdPqBGgESe7suFlyOjpFuLV2PCKLtsE7708G7XJibhsd-MgRuT4YtSEtdj_ZWaa0IbqXaL4BDyfiaW6qslWkrXvkfJgoVzVkgxPqJO0tpIU-vi_PabZtCEGqvF8ihPNZ_83vrY2jYYqgm8oHp4WGNXSLRi7bUQ7So-h-DvK038-bUk9_UM679FwLBzI8VL9rJqEzbqDkTyw-feYHFmDJ2FPEvXTqHFjVyfBmoQKayWJjN9GF3K4XnQLLBQaJSdj_iIEj0oIxh6o3isNAEmj_s68xXlBiCNE-4yL0_rPjQqGJ-gSy7neOr-ydgtpkFUF2aWuL5kPG5Rc8n1u1mnBzg2qEXp2EXnzp5Ovrmsmk9WoiybU097D_U_eKjyseJw5MLLM86JEiawEAIkp4R5HdXn8sFfg4tubrTxMfrk_GMtG7gSrKkcNmk-bo7A9u45gl5yTdol2gwQld-AaM_xJr4O1lbgvAKHAVxH12EHbFpsJrskna92caUvgEYRk5amq5NOAISvCYCnto93oguv69SI-7MHHmeePUn7UxnkT3Ilnsqzf1FttCxsJncm1Hn2c8yhxnBHK4iewaOd9Xc5LuHSWw9NilPmXbft8KiOzF-9R14AVr1geORFG3FRjI1AAd2PrB3N1Rg8i3O1LfsmlEZLdtxgSfqW359tqdxGGQoRRUJF3l26urSVHewHqg5PALUfPFW7pcL7uJCeFsZg1nOrtNPRp9U4qkqzrgcJv7hhWjzPEyRma2A7e-dU2tZXXY0ziQkkTBEAEqCL1oVml8OJPhQOGeUsCno9Rh_EHgjkhFJQMSWNju8ntcE0jh0toZxbGrnUaH1r0HdE9i4-JHi3xQYugFp1qhcpMy1rqP9leGXkCyXU2dqHyruU2FnyqTeDHVk6Ddh_0ypMYLsa53kEkRlRC63UB_OWZ1cZf-RDhsfACkuCmCCmjzKws6B8gim_2Ief8itk0GcUvcB5yUMRvYGg_K-V8v6SxTVfGmrwTa1PXhC0aCqavRxcpB3XP4oOxIxuqOb8nA2zWQVk-gtn-qgrK1uMaY96k-QmLn_ldyhk10WfUXo1pwR53exKkOQhv1rGSGUN0xc6YLRqol1JAbsskUnQcydJ1JFHKaETW4OzA1bWSD8_m4DR19cpPgGvjhMVaJkoUreOqPcLv8waE7C78stmW-pN1rs8UkPuQ7i6ljAJTesTH-fuFIsnvvMwk0KSaFGGLW6LH2h4Fn9o7iCQjqhc9VMgPMjT62E" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="HoVWyZHwkuBbN6MIVFrFH0NktUACJpsHEOWJdvhQ6cBLz3GGwF-zYfcgdDJc8IgvaB1Pt1v-Uwcz-n_pFCtU5CvTS1n4-GGRUndm7N5y0v6KsZHO3yz1MDxfRM5UloZwJtq6JpyO4JW9QQfOTFGTVthm2YLGXzn80dgYWlgSJlKL5VLOvz34y4C0CqYbMKtYMeHOPkuC6OYk05wYVdFZEOUOv-KN6OLV86q711A0U3o-EjRB9mBEYU3i_hilcs4xmc0c-r-wB2g5k2C7dx81sy4WpvNMOWaNMbAHef9x3S99WvoCUxBl0xrHmCkOkcZIKjKmjxTmC7ha5vwFGBq3dGjGaQCk_IEd-55XLDmZcrs3Uc1LchkZJs4WVGjBtWGM-0xCn5ArVB37xASWNjQZ_2Fi6sgYZoJnzMp0XxJPNhWfrLqiyvlpCmwZeAv0o2nMJl9Im9eRd-7ymdj31WeIP1WFMVHCDIRj8PvipY_vFSwNIsSDypynPjztyMzzYOZOHUa8KdErU843fXp16pRXAQzZFMEFeJ83Eta3KH-W8gWFFA35ZxKvAaJI_yLgdi3rELkNGX7XfbaaXtA0ugO4AouqMtyCFUdGeYnSeQnSqKUev-d9qMTC8EPFwN2McAU7LOhhFh63aEoAdcVcJ60NA_wSZlPEXr1u33s0R00Vhkl1AiO5sMRDBQEM-CWJJYcnId3CHwyvZHc1gStcldXFOzIF2bCo0kpoMW-YH_4xkSAxf-jPvENcHvoaNSKTaB0Oy0tdgo0skALNZRYNPttcUG-ujKmAFC0lImyV6gnYKom2pLpQ6m753VHwUZ9pcDumoja42tL6pjJg-RqM7uvw3g3Lmsk7hEODgeMS_Q9hjDA_nMs3msWtNH42nfgi43nvBRKuBMJ_uVPp1QLC7oPNHc3L3-h5IuqPV_FXQmBBFaWbn6Uu23_MCXqeF4VlQiM_9oH2worJynlb5Jdi-3yTV0nXqNXThov8IKpRqC7vxVNg5vpHzYpPzkBX_7B0Hs8J7LycTUJ5WJDuAdy37oyeTktJr7GD4FOZS6HeBf3flJx64kVHd3ki-sCl6OAERiP9nbd7q5ORTCIE-8PVcJc8HhJSVDO6bR41iTFKz7LOO34Gc2Z-S6w9PhXdXpZffREv8CokPCpgz7Arlfv_xj9K2NQbWTojjFBsreEcrVr-0fl3Dg-E9RHu8wMjK343xkkH3N9Cl_IuvIbmSAjMYZK2GnHHS3SPO99Y8KYYUsXFHpLpJAzeUkk-oaVo5DI1gKz14Fzaegh03gOMgmEkGuBLTciOcAfwT-RkiRIj9E7kCC9lSNl877MPLoLyLoP1hYZzDg-nQZL0FwmpCLMLnR4UsZRrbxHnM2aFXgwTuQk_U6KGa7_6JeQK8j3otVjuQK2vvkQ8c9Y6ZNJxsTJmO6eIPy9oBSPS4T9qqriTn50bfi0BPIBhZ6aRs8jWWjjeVu8TNcKqHOvaf5HKNKyE6SsShj7kq6ytNXniUKNfMUW2YzPRf6FbTWtZvNS82Eg_0z35k4oMctrZVySLvW8pYl8H4r40m01pFEYtaDMyXxWAqO4Jw_SLEH_K-DzHU99BrRyRnoIxRDpZZd4fw40x5kT-noVUt9EsTAGxIFuL28VSH0KVRf2FoypW_1d66N1Uqgg6zZy9LsRW6pvmzBMi7HEX0slVbehXuIQ926tZwW8mmEinWwjoJIqPHFUArIYqcLhxqb-Orz8xojsbpsbaT7o7UfcfOxpX-lWFKXscx2pImdZU1pC3eK5sLNsKsMBVmx43Dg-gFo0jtxjuiUuXjJmV3kEXun9gw_q06W4ExzEbeG4LcgBGRvSiGPlLDg6obcjavwrmK6hfeXKD8oAD1awGqfBtPT76D6SdFe85AkITDaofJ9lg1xrhns4U6zC2M1u6ouH7v29xof5P6uGBWQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="w-ul6Yc-ErMq40vh58spEMmFPCZxsmRqs6qBHkSZHMyH5wppdSKHUus4PP7U8sTAHUTuxtlXDjv_eHH_ZRjih8hhcfbXhtIVEW5p1SIlufB2Opj1c0vWLifQpkE7Ko4jnT-1zYHL2w8BCiMV0c8TfVoTWJP4UQ2MSMA5KbOoqf5CIOTo1jYfbnu-CgYEHXnBrGnMQ9UGoEq2K4sgyjT4PQe0-CzEIZ0GHLx7ttOoV2PI1-7d76xGCvBfEuJesj2eZWadLfODwkX6AfDrLPXBHMiXyBgGXoFKqm0cL0o3FcJO6J7JXCPYq5qqEzxjHhEFipFWQInz1tWwFKYWvnroHcfiAIgG1-X2VBLtaHmMt8pMQuQSI-ovpm1XwsfyxuR2u8VqZfUEV0JVc5wUH00wTOlquB5_FNIh370R355EiMAwM9km3lCceOyK-jAsiT818akGYfVAVxxL_v0JUiV0ocWa3bTxL_mhZ_2zBBgjmYjje_51qB4MwEQJ8SFOP5rYbuatrlGOkeCIjkxRhDjwwkBzNzuE7lvt8a-SuphbL9IF4W-MiViwBzj6z5S1b36N6fBnyAn71JzjLpuOMUmAwrT6yUeEPpvg1wIppY09mSIl-514eueWPb2Kk-YWwmNKXbb0TLwgoHcCNMr_O0H3NEpNMqv5M9As-WjvliCPklQBfzTJKbS48C-NSqVhlkg9b6e4cE8WB_2Ihfm4WZvnXw05xG1nkh_UjbUQTH_1wN8cDa1IYf84ATbdyclp2wLuAFCrvx4wtfNvQQEC67p-0a174gGANrVp6H8-EKZcTUKwAnpB_-Mt4TI20Pq0pJ6aCBYshWF_NgWlwrlv3r981rZskW2ch4E1FksebFNZjkXc4O4DUxp4TQvDLS5A2VUE3GejsgAiWOURypEnS-sVf-fY4WBy4hyTxJcO-OaUG1yH-fbnKEztC1gF6xsd3IfAznVtu9kCJL8LDcEJVXUzKxrZ6BrRGZGwk0MmEL0S-F1r5uB-IixGUQms4tg8UgvtqpXuXTPFsVnj01HDgB7J6vhCNBv3oUyfaMXVAjzrUxtYyJd6zK9y6rMX-o5JIhi7S561QWcNZ9QTSFftjZ8fexH3_m3ev8_D2KB1gPQkgxwL09MQ9RMaQdeFQUsNUoaELh9HXYDM97ar145MpdNlIxr5d0vSTQuEO27ahUwvpV2KFtjdk551zM5JVqPu6uZfk7HvVNjlDwyyFI89ayL9NKvJ2JBiG8Mys5OgVkHMkZVx1hNW73QwqcVVi50dZNvNF6E_R0gWkA80zuAGvM1cQJoWeI8qtW009xAzKkPXyHN778iMv8dQgI3S5jGwSRlMHjAK6WPpccoDipGx3kmSToMhWNW6lth41EIcZzWLuYeprSB2pB9kQPsBxeFOR4bX4fJLgCQkupnVK8k5MTCSHdnE6t4IkI7dS2kwLG6pdHMu1NanAUcnSq-U0rhTwPPb7Iyjzo0_GA0lxtYWMoPaF22v0E1DSP_kMxtTRdsTKiQfgRKr_yEogKYSyOCYgavr7qnFMORjd11R2viIZF8CHytGk6j5E753Jmc75stsaR5AZbynfpz3tAl2febDFA-ePV0xmTN1grFWxAxjHQYkDyVzwSQNkNhK1y0plJJVaq74SK2pLNEBBziPETKOr4De2JGS88iOdfVKyuZNfPhI5u60B_DCp0674En8thqRLYKNWpeTmw7ftp5d8YB8qsV-29oSYGBaGLtvQcJHEh1lE95TlWY895q9f9KzW-nwOLd9ovj52sDXhrpU66cYixwopf8cNksIBLv_2cR8ZQmLc1fKwXSAqoPD9XSO2oQOZLsrrLAjJNnj2Yg9W1_YXSCplYKqD-dxjk4t07gvy2U9Gu8k6GGgdaRbprIZtGJtF8Dd526EYaY7Lhb7bWyonvWPWLzRXXIbODU9OFOBbrKML-agGKKX_VvzFg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="leKFwKGur4s13BFJjQzsY6kS6cMfNxoZTFgLRcj8eDqHVuEFzxmLY7DQSZxWes4CMwI6Nzh5NaOBfZNLThj7si2a4Oi3XNg9Aj6WD1t934ywMeNSfNpnRatlkgR9njmL-nscEhX3L8WoAZrQfQtt7vQeuin7FAvtavZoKo-qNLa_Wbtkh97oYX0wCaNdquNKC5K10cymaLDYLl5P_Pc6E0dFxoxqXIqx0LJgHy26VnUNeHpeYa98nuXyg4aarclNzcUaGCIk8_aOGviVgCOcyU2a-iNABOEtTUc2BOEYNqBldaioWJeVsU6JmGysgjoJlv_QDa2xciuALiCjjYC1dRIqdfXLUXUcpIH37zX6MA52__f8b-L7kXf3SkuwLtHfXiY7q1eBJpp6JIGK2OqMhoW0s9sDmwtXWBFOTYn7J0-zIdobirX2bLPpRs_8yap4MwyEtDKvQOj6iniTR6ivUlC7AlY-0OMgmSH4MXhtBNgtm0xwoMc8zpvSYIqdCbZzF2T-cjtV86hbt1vofLzV7gzJ_9l4CEwJeh1fEY7ruit-CXkL-eWbwV9NHoVZIklsKalp3ZQNvyaE-eHquD3v53GoQr2J0UALgQjx77tHOHu0I2f-uSWmz4fbcknk7uhVruCPEZ69nHt4CN-e2337PO4ekZR9t3bmnlFAflDRmjuRigfV48AhqUR6u1MxO94z2n0zFHTgakyF2p8bLbTvCprDqXloHUI7cBQwH9gS29mzmOBHp4LKiTK7LsETa6ebq9OSBVUiP63ofn8pYNmAu3osKay8DdLB8RJCVuScZf2Et00clnelJ8Y64G-TcLkqc3_uBnLZ1BwyTVPAhYzJwPoXWgQj6iZeHKmyXWn_Cv_FDmJPYoEr-Eay_PxPkKnephSwbfFCIzsgrZHua-XB2w-MTC-iT9qjsXx2jFvBYBV_A8BoNN_YyC4BvU2a1hK5qPm60ITeFhptQikxArQxKlCSzYWP-_FKG5FTCaIt5iEdZRQwnebUmLnU7RAcde4EDB9SwJopBU6bGTCNWntmlZYnZ5yIv8uygfM6MHIJUaSwMS0dmPnVPIeAwEbEyWD_81_TdPgG3vLPGOKwfgroY_nkPPnqudKwrZ-eb1rJik4ZVeVuBpVIRImzbzZeqIjXd8W835oS5ARpTFAv4abYRHBPZHxWrGBSotHNKx4AwaIP1WosqWomdVuG_D5C6TQbllxVZJDJJX87lIUUEIUPsR8dJW83UT42rjuDR5MP_cLTTmSEnHIODpp2a9f_EVCWm1dPZsUSsBhN76Wf8eEIQhgNlNVkHC5Pf4PZsScNPGnQ-ylRcE0bBcXavxrWNPBt8rvmdLJS_jyvg995aHl-YjpBXamM6vJulgNGv-_DGG-l6iIzbxor5I089WmlUxRV0Yal9C46TWD6q_Cbt42DR9do5X8GIiyTWBHPr-L1mc554zFXztZSp0rYJmmWzAPZ_7wrTPqvXjPGEH62M6VqGaiD_w_kJfJrt8sXtbOjEPr18zz-jDBLfJCoOGEBd6DWLcOn_6BL3NK5dgNTRI-v5G1kMOV7q9LJT08k0q0GVNE5QNnHoMqyKEA7mdYGOfAwAwudlrSo-Sf_c2Sb0Qta3EkQZvh8-1SHU_24z4Eul0_W6paYXcTkj15QywvhTZnD2NSKTJWZCDc--sD8vJeYTeIn0xtl4VAYOcMOw3YnBRznSAWoPTlMrb8d6hW4ypFEQXcq6c1oFgt8xgaNIBTUiyV3M-cAIrfxcMRRtNn08NKDKx6pBzKvbPI-7eDAj25zNFa3PIQPMFctZOWjlQd_rPXp4RPqEveqlY8ap-X2-MmC4QqAJ_Ob7tNmVlYOjkiAY1rlWIFRP-Seb55I2-VOWFtXc3N0xGkbmD9WKWK_oZv85z3gHArNLkYkaEHCgXpMtyVUALaQzUTlCYxh3g" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="lgqGxTgk42x1cHl2mTdLKYfLd2xObtu3wYBjjbR0VECJs5IQuwHOmytaBvSjYgsj1khlxCo-EYrO64t0qXGnGAZDZ2eiMS0F_4ZLVAB-OX0ziY5VY4ZivTyqKq0ElKO8zrR32yFkGj3edM9IFI1u-56EfjbgsJedfiQXbJtf7vHbLV7Sk2RlxU8yT4_bBMb-h31DOo_4Yn3OsaC-S5-I3521UierVTS6mKcMatg8mKnhOSGKdkcCJOpb84Q6zopVlqwbxuD5JyU8v6d5TrWvI7PRSBEN9Pbm7mRgMckfy7sSRh6gjdgtmEpnbvbcOfb8A07PE1T8SfGfPZ2Cc6aRAO0jMFLKtfiF_0BMOHUYdoycxAhXPAkU3AFKBEZZHvoTknkwM3zlvawzKbuoEcl8pp6ORrg-P2JVVvTikQNdFfXJIDeUAimBfH_gj5Dr00dbg9-TLMOa7CNym3U7pGnKyUrlQopzrvMEpANwXxVrcNhRWAlCX3eExtmvm-VUUkssvlcR3wzHpJsT8AO68NLhNpHPPKiaay1Jo_-zWtf_p7J3DphsQP6IBrusl9g_szY5JpZn2gmniipDae7mhOD573t04DzC_TndhwCdhiCzvjH_2eqH2GdLj-EryR30YMTGoJRG5Yqz30a71TwwShiYp_kO3bZnAyYHv7JzqoF6wvupikQ1eTwN8JUwjw66nMmYZO4htxv4SON26GFsg5CYOuknR_ykEtwwRIkr6Nx0CN7I7rzivGuvK6RBR3HizIkY7CJvIpMd07aFNEvj3bkc7KX1HgAVLx5U2UuUnKOnMF4nPFfNjIurujkA_2u2aBG0dwSEMmA2jIJPwCVL-w_W-8LczfQBdgOfO8-8-O7-UsavoUcX0ymLMQx63RcYu1Zv0NquZhrx16BKXdKVLSsw1TSaO5gWZAEbC8K7slPgVrS9wDNBULej-407lJxfUrINBUHXZeR6pUQadw-uwo9b2h_HBZWekQIGLwad8r93ZX0LCdNBe3-enuZcfuFFyWAC340UwjvZk7QQSDdD-rStQr8tO-qXFXZ7c9Lr6_bCYwNMhMO9N8DcdxAzfJlseAVVKM-c6fA3qMW7Q8xDcq7jxRjjnOSeUGrv1406UmOTeaSik4a_WDKB-hjnXf2UKH03e0O1CB-faBZphxkwG6OZKgVEU-kCcrbrV5Qxff3_Ndo3H0VEgpJ1_Qf7izBSVXDiDr4zFQTC373xxdz-AGUIAAn24RYkwHEkK8yg3wzrM_Xp6AJpXG6RaorRPO-i94xf6cix3v_3E4vU7vBjO0ruTsAF_F1ngdZopjWBO2jf5a1h2lkX1vjRRcHXliQyuMvcUtEsAeTqUUYBd1-OiSzmhzRoHHLLx4fbAQ_DL_51UdWQfYgPAOcWrhX58WtAYGsEudEkniaxwJPtuV-dG0Ggq2Gb154J61qxZQar8MqQ2zEZyAJrUL975ZA46Yougl_RpWHvyeNbkLL2683WA99i92zTjLES7BeSmB5Ji7SJKJdPOdfpN87n1D1iZxZioBiZUkXO0DXBjMGKu2tCcB9PrhT_uw7GcawnvEXLQLfMdeOyHICmWJf0m1b370O7zCZeocJjN9ZVQa6Q7EpYxj-e2cnDTctMnkNkuXc_C3hUPxJtw0ChyWBv3PiIYaZN3WkEVPNfvceyLvi9KhXm6LWeQuXr_J45iUZRPIHYWy9F84-fkkvGMq5_EqWDLSj72i0U54s6EwMx062qkjmCNWLGqtHxj2ht3WTrueluhXMRNML2q_nbYC9Qujlr_Q3pjTqV8qkzDj4xudJ424MaplHwj8A96zUHXTFv3Sybe2M0omVKTAplzQmCqwYLTyLtNqk15HjpiEKekc-ajlfLr_-EVcw8sJFu_rlXuPov_QQHxVBeZkVf9QkpulCmHQo6" class="dir-link" target="_blank">
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
            sessionId: "e29e97f4-21eb-4e12-927d-5e8ad9a1b730",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"738P53TLA8RJ1"} || {};
            
    
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
