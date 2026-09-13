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
                                <a href="/kw-click" data-ct="kXrOqxBxtTxkxPWsxSrMwANgnTjcMTl4q9nPjMQAppTW1JDBBaKij8E5eeYHwZKQqQIMAR5UDfwxLOTALtaR1m2meVzG3aQb33yLW_GqXlgN5WXfAv4yzk4a4gFm6lpZIw7htRUlUYu2vLgobFpqikfCdVNNnJ-Kkmbucm4QAUi8Bqi0eUp8SR0k43ecDRBJwmD8R8CJDuRDBR4i7YOjpIR_Ej5YZ6cVHYHy34ECSVN8w5qyYHpw6yoVDPv1lvUQVfCUPxq234B7C_KVkGyArX-vt9n8qfyAQlTxsT0csisbKRZ3BpvV1XeBnaxBPd11NPnwhR4dc1wpEjQHtysZFWXLloSBqo2BX93AzAUcqaZgBf4qQ_uSiHmDhtkPHDapIXvbg77BSbPDWrsx7r3Ur1re5AW4zzGtQv_L4HJnVA-dXVVsDDlroz_zX2j1xMrw4MHjvTzfVkabAIuGZuw279d1nxV4Pv5nvytUVaqMsW9T86EAdJHATnp75tiiabAcIwymxhWyG-aQKVSxuy26km3wo8JZ3w-4L7daoBtJgLRAQonbaTj1bIWVLlJxBOGENBGvD4Pikxw78tlVfV-_TIy1lj0BOJvlP4NewZhZa6POGH2Q4490Q4u98XfXxHEShL0O87KPdn0r-BdgdUvNU0E7j9eLKj5dnRvuiSlf2JUSIGGUB0l0qIFLPhPZap4rWjyb2h09JemJNkfv82q57GdwOdbE8qARzA3KaeNOwJZ7UF42iF9kJluqFX7xdXTCGi7RrIz7s3oKwOxGuT8QF1WwsuaFjLgkArOlvu_r7a09odINEESkcduG9oSkFfHP7o2Dd6-XPGLmLApeCQ6BP5tuL-nGu_8qEHV_CDE7iSpj5AqIyIhn0vNy_qELwvVZxqZVLC1rPfIJFaQdnp5j0vmo64ZKj-xiUfRv9-90gjWDQzAP7VbCpVMZ64m4gnEnU11uqUZFTiO-W7QefvcAfbC7AHELfDWodnXlbTYTnLAxF8PQ8TVFzAtlXvyIL7YEit7gRw8fL9TW0CPS_WEkmG2vI1ubu91XoqvULzQks_Y-HLax9JGTZO_Bj-XzNYugeiJPqZK_jwhf7155xYtiz4yXuV4SChpBKdqhYbzH8oRivNHWMZn0kuekDfV076Phe6Sx-ulYyWvMTjfOXXMeNKBB8Rmqhliheqc2e_l39gIP9ngNfAaXlcwCmfTQbxTfw8FuT_X3ygDuWszeBx3IY3ZhE3kCgos-S628T5nxyQmS8Pl3Y-MV1KKd7Znzx8CzcqGFs0IjQxRR5nAYM1raIAMyQMhh8mppLjPdZfu37bBJWXLC_5HyOFH3fm2j4IhudIUP82e5KWCB2H7nt2WdSk80IfJVMcmCxoNB33tS5UW6Gjwa2WNSXDAOmfed6VXmeFzkf_UAtdcY0D9UA6MDv0gx0JQ1sL_Ynf4agwgmUwkqYVO2MnBmwpBQw2M0upN0W8sjy7XR1mbYbgagSAkOBfw9paTn1Y3wHkf_CM372K1dscVCOkr1uKRB2MJXpSST-fiaQyeTyj9IpNOWkmRXayPvEP8hNryJVAfu5mRFvO4xnB84JD0V_UPxIjnHyHsfAcgU0UHZBrNDtyY3IPapnM9hh7567PmTlYeM6tdv0jj8P4SHqFC2Ul_8zgXmSS3rL2fmx0pDlUlX-qj-8ug7dce9S7vi2EG4kx5gloANJWdQbSbi69Jt9ZraieieR33YQQOwX2x2_gz3dqWygmfUATEhKVd40Y7oYU16EqiVGUUeGWTDU9GmiBWtxe07asrBP1aJ34P09inHeHXgFfCt2dA1mzWLU90muv7awOE8djp8P-_bh2hVpxnMnyTEaw1Lizm7tYa4AhJZ0hiMfSQI6nmOPfN4KMgTC5eIEbWg6Jv69AD1YcbO8SVrEGjS_HRu9Q-0HXBbAcsQStBvq6ic" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="oVSIIvspMMxr1QyNfgR85BivNzu_lxQSrtxlgw7w7QOxRqlAOy-QpDXNg1zjux0C_R8Z9I5GZhNPIsuGAynSULUBdy8AY0bJ5uIPnG_syqviXAe5oNFUu2FC82e8x02qJGbwExlCagowQ4ZGM0aVP797kyHmWmgQNpogb7e8QXC2u9rRISNBQPl5TiWmcY24S8zC__RIDCvpTMDA-jweWJx6C6IE58_IK0G1QEWtiCy_1vUUQTnhxS8MV7PlDTug58EJ0uOnRX0OUYn7EdHNCx4wY0ae7AqBigW0EFxGn_tFBBN_t_0hHG1WEk80hYpDwGIObKW2xJB8NmW2WWJ6Iou3x4AA95lTmk7z06Nfp7zl8FNKiBvV75QUTTgu7pnDOsPaDtywlDg0B02OC9yAtP5AFNQMU_mtO-KeIM3HDDho5xxwz2aT1F5zdWk9Luo9mPheEb3YytJNWDyHfbfriTSDNpxzJRckQCHQJpc0upzr7QJK5ciBGgUUxfNUFWcXsI4ZG5obsi_UjdcPGTEQKaYjzQfLfTgQrcFYCX-ffKfJpCEp9AfzlES_oHCmXk7WZwT240qpW3rlFDUevHL50KvWQDaP4qy4Q4227PtFlmhRoI027bb5CHjvg8tD8j97hjUJI_l6ZlNGVACK7Rk4l6oUf6zEtkE8hacaPtoXfugAHDLW6hcVpTl-46dqVzmfT_FqCbLA915GiPEFKJAwL3bLzhDEtOlb2JqGxWiNRgcrc_nLB9cc_FNJMDvXncPG2ZsMtXSUaTHl360yNcLb7NtWqhN4F4Ka531ZJZIl6olxZbduX6Ip_EpzVZpGkQGdL9ETGkAPzCky-JsUfo8BKAK4hmJx5KJSsHzBGtJ6lJ8Bb_cWlkQhRqWFixXcmFAdjPS_QcWa1TIKlwofQ7_9ToD_ZroJL2Fjw5g4JJzdNc2-PVNcqagoEBKVhf9SneBym21uFfdzxNQYZ5Ou0NNo89J38-pKmgwU2X8PD8ED7aJ8YwTG6i9c5yNpY85GEd5yfonLDohvA8HHUrmg0Mea2TGxyXCWujLvbCBhDp8VRwgZvMUAGR8NDKojkLrv3zy97_0mphZhKBB1TqUAC00Awo4ye60Z38uu3x45QRgOvI6IwzjjMKgO43lb6kEMkMJpnnXrHyQ_RQb3FajQ5SMcQGKVTFOvYopWSxAd72RxDnScKFJsq3Oi-0UH2hjNS2_CEtCldaJvY8JeggpoKGPRY5HfpU7hQx3LTnFv1BoPW_lIFprukZqEkomB2aF_rCbirl-hAzOBnWG__3DYgxIKcFGC_PN-QS5F5o_QRPFTaJ3-8xKSuMc83by7soQSWx7NG7ViKlpZ1y269jUo6jFMhLQQSVkAmOuZCUYrOcDIJE_bIkTUYRuThh71xU_hspHIstF-g-AKILvTaOdzVw0mqbPxvKKcIEEMdqypYtN_Bdz2Syigzo7f4Gj8395eRMFnAGngdhHoFBTipncAoBLm_mjk6B-4Zy2rLx4qbF1d4ahGGXt9bXL-cpQfAxA_iO1RcSC-mOxh3NMDpXEbkK_LrnbbjvgaXGgRWbUGYaVvjs-nwsf19v5876kaRqUuF6SD3DynhKgXNP-foWk7BQSCiyJA1bKJXlsnqopuLgj9JdSo2dj6p4BmBoZMA9UrliwW7N1oDUXfeKhUJqDW97LFd8GlsKwnrYAkBrqPKlzdAvw1xcbW-11l2LoH7Z3SJAoC_UA7yyiFA7Uql_exWnD7rZ0kbf3Vi4xt3pjAbTHO02yRaBfc1Vc6nyy_qDaFRsdFS7vaOMpX9H90FYDI27W31S1EPWQMY3Vm4ojS36oZ8KtzRHzJY0dYyUTWz3KHbcnwoNyoAF8etmceXoONm3i-YCdhGKtKw6AF1asEaQaFmFCyc3vS58_nrv3DVVN11PNuQp0ygrMjITDl72PKH9O8FrTQiw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="zRwOC1EzCnqrYGPrzQoTX488JYdB-nq36V905e20PN9y7tjY_HptP6H580daVXPJ1z-LdCd-Bdzh_09DYNVyRWCYILRMaz-BBIn-CO91tm6DbGWcZlNWatdSpAm7hmTkAzdAEDauBA0rH2frXZOBQmUg3fHad7GP4ae7-CkMuBGZMptcRT7_GOuz7WY4VPfqHTxYv_g0fpijBVaJ6xORC_7sgaptZFJZSfBM7nKHI-28soiYLU6srjP08fO2-LChRuddW9Q45Nm1CZGE_A_spFeECXJh2WFjPQQqda4qnGu19-0C_nVQ11Zw1OWJEDTHHp7HyN4xr3MQdx9IR2ndtg4Xq1MTXjFTw2XTrhMR3OwPx8GgSbtYHnF7A8myw7DynN832vQ69vlkS-XWlugwVYL4Tan-ORuUp1m3YF7chOAkzb0obfK85mFh3SRTbcKJmfj8CU2OgOoEFlaobBSBlsug-3V_RkyJJGbsGsXt3CRHDlLs_LE_8T_WOxIeZoL3edzff2aIb3MNXPBl9tDt94Rv4llJDTScVjQUOPt0DEIWAl8lvOZ0p6hZ4EnyLTR1hcIW4RjPAWbjtlbJF1ubFRcI71iP_S9g_mwJo6mPHdI6KGtOSBSQwIUYP_Wk94wMP1o4OqLYmWye_ZaSQnqpqtCY_YrTXLBCIZivXmgHwh5PCY1GYkge2DIji75CQZkY6UOL6q8z__VMCyqUmGB87h948zWag5s51rYN0lrguOWGxLX1Yc73trt4I4ujtEE6DXjNHChezE38vpP_PB_VbawepVAMJVcjWbEqVm73HjcAbJKwl4-To-7mvsvRbD--1CzdN_cPpOL7nEE0P7lHGAJrc5Mb8rU8BRrEwhfcKYrNcbgUqXjE0WMxcskLlnDyh4r6WnCJBe7hj54KyAHifaigHGMZBKSbWt0gHFUnP34DMqFDc2_HzE-n2BZiR_3QHRjA8bQlt6mbQdpp-zbGp940BbGJLtizSt7dSBtvc46-84PUah5tZyDgWL1VB8TwbAvDrrWcJVNcWbnrZQ_ZzdW4_7LFNx-NDXyyMk09VnKjpzDxerxycEZSVKFvuwcK-SG_39Ro5AHvraoTpIo8gAUnqD78vDa5MAEhFxyNAxSQ3yy1MrvPV4i6cINF51z1ElfFjKxdHDNKF7ZBQKbW_-xGg9Wop79Udr4ZI3apaHFaHwtp93Ia6lco8TNqrqx-ktELQcHE5MZDJcPTy60L1_llNzPyAhQg38EOPUuZfzobu4RKWChle3ROc5wHtV-IASbvHh34aYQV32VWVwoFQm93tu_m7T-LXHNMX3GACQadfTPAcdAQNWt8r80s9lBzzl3OjQAquTxBsNdz0U0JFPALCCjaJjeuzevkQCRMVik2mdzmvgLzox-lFhLPfGPV9R3VBz09fDV903AMNo5FdOm8wOO_JpeHxd5EYryFwWbsEELS5CIIgF56oabo4VhL5MjNAIY9iDb82BVK02p7TbWGRotBVMSIAIVU9B8rKzLkTBPFaAywv9LQDt7GVFiCo4RDlMXmcGLyDlHSNTKBzucmka3tA-UiVGap_xfZbRadU41lmlP7Cpdefwyj_YZUejq_dOkVFgztwS1fGgQRkv0yoiN5gRH95o-BERCHDUiL57QPElREvFubGrQgFw7tRwBlxatanca7sH-GIyGtFH2SwSbJqY54EoWGpkgbyP-4y4zm37am3vZpaT93hMMg0gUVex8J-UrvsWIUbGBVvwNJCSyqZ_wDEs1xp9rxDo931EiPNjC9I-PEQpMsb8dagMJl1_NidBztiZkfEs7cLAzu8vLepzYDgfC_7SUx_mB7b7IuXhpaVVOSvEN3qc9F1O48UJ08noNrqJnd59rOS2lK4vdgGKCk4xJ2IU0SwTNn2uNvPMEH8ZRmhb0QZMf_sBck3_zTYSJd0wqGTHZ7tB1BK7PlJEZ6krewMAM8ig" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="0IoS3RvSLWb0NOp5nq1nAmPLg04Ihjv4Tajz9bqFfy2stKjA4RCU2fPkdZN1ROCyGhgVeiAeLvokD0kL3CUiEXZF3LrLvdcJJKKpJUEitl4sSrp2pa0Q8dJhrNenLsDbO3nij4mGiTr77HGhbYET1BNpm3ushUnyKgtOjFSoZZwVzZWQAUB1-Kgobmf9qltkVOKh8WnHWQu0p095oMloewiZprDzKa1kMCZKdrqStVhhitd3d0K-UGmMDZfeFPjHBcf8LRqb0Zuv29tHwY6bCvgHgVvh8k1CccoRag5UDWGqAk8RvjAZNKPwh6jO4vOJWm6sxp9D_qwGvqGWPhkAo2P8ejbpxy5evx5ZouoGSezXkbMmWJjLlK-3rKPPJfQEF-9r1nCiLc2d22-PJPyA1bYFQXhReZ9tGWq3xLnwufnlSBQOU2pqbDqnAeuHUsncRZyQ4EHVZOfzBpGRt1qLowe6WKMTHfZkpR239Y9hcvbArNx7GiYMxTSjnkwESok3HziZfl5r68ABtSYtSU5L431nW--AW-Iyl8DgXK6vr8tZQQ5vuKekVh0fSOFDcUTDJ4tq_Dz4Ayh-mmBrD6Wtx0jPsA3P5XjoMDiuWPcVxDFz9RNra_icMOvWVyqdu0j1eFNdNcEzQl7nxdT5sNK-KDWYDOutQUdQmcm2FywbprRVUtxKJkBfWDCnxi3r8NxvTeR7VEZU0_qwMFCwE2aQVrESuyx7jB-nW2fMpDtnxluql6DaoHWvJyFBG6ItCBUQKGLYA2XwfmPCEZcyZ0H1q1d2aPFT-fOIWojAeaqd3-Z-E-8UenlW7dbL-hYckrZX5hmJKN2__Zo_cBervmufgh0F7VFlQ7IkQJEulMsHAaBkKI2XBu9C7e5DYgGTCVkQgNEelK3oJMBidhHwT5KOxpPyzIKAintdyVnttJb9OCQJLULuWnqgjAqA4l1j3wL-KogTkTK4q4hLkOQ-R9bMXLHpeJL_4RjRhpNemKfmRdcXYkObubvzLFLxaYZK_fJi6hs6AnjninBZ3D39ifgZhWQ-TgNbW-G-zh3pmgRKpYt2w_CxK74Ei5UJSsHo8jpsdChXEVWlpzpY4yJR3Y-6x7qvbqhbj0gyDYKbJZHR2zFyCzssbqDglMuYUYNcxrGFvZXRxC8mg-GDm9ss6K0buaODwfGOKLT6qVCQRrf5LB0VzEEgWRMqf7gbnazn24GqRs6Yp3tkoe6T-DCgfY9oTjDlVHgO7ojP6RWurlY6_wGAFPy5VlRDVEtUchLd3VB1B58mAOTu_N76wkmQcxbcWwp8k8xB1tm7rmHVQ_M4DRui8Ij_ecCZACG_ZwD_niL6rUXtlM-5p4P2scIcFLsVG-5CMubJ0B9Q8geL6uWVAianDjj2Tm-oo_yrsL7iIGC80LbusPlkX5aVEFXq2gkUsKDZQYmBQjpG2l_1vODHa5ZJMSXfsAobNUm7nqlgbJKmCN1FeUYuimwcRgE8-YWPZQ70bQbY0tZ3yTwrMR8NkW-Md1k47GzH5Eaepp8giZU-SqE3Epx5mFdnT7DkduXaeWHffSRUoKp-uAe4SSZGHpv751LxtEn3gKVJs-3qigf1HwTB_hbpvWVBikjtxbCF58fCOJbqx6VQysCBfszbXjt_oB3uEYWtWVYASxMuOHOPrvYWr_Q0SSEzjtbpPKmeuS1IPrmPjX25FAbrtYdIUWlu2bNM_2JftSc0O0o0DKwiNrCYPKUJtpgePryeARD48H-0aN9yyTU_I4j9sKULhxL_KjKwInJiCR5tkjEy6JP75VQ6lx1pLabLGj4tHuohXcnyysrWpqu21SfsI3vj--sUf_fEmSjZFBJlWFskXwiDgGpKwRwjmTB9XpQ9uUJBdh8O_i2KrdSMrRGwUXv-AEcEysFpGyfXg52EBtHhNuZIcJ31-KjQo2UvUTtQQBRNc_Atmg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="igmHFM6p1j4k3a2asbTIXEo6_OnRYXDkMLpwAhdFOUtFaB8FS2v405L8MrlbPZNFQ0R0o7-S0k2M_HsIvhv8nkxr_9u0DyH-Nd9xnqPdmCgkIJTOj-FjrAkULuMemaXPz7OlzrPetOS8pSuMmtJ_ss8lJsJF0vojFV3-9TK_wLpffk0bs922KbP2dEVLk_rk-PuK1adUx5xogaizB7O038FtRTLeThmQlnCyDsIIaIV9kkJgs64pSTHOSrZ9Z4QuQgh9t9hFP5dr4f3X3fAToxpM03QB7yPtE8aAvJS_FoiVR7VTJFB8kLKzP4tQXi6Ko4fNpGXt2LmcJAgnlhPUDU520Lc2NzWyNHWY-Xc6VF8IAOVL7T_KTj2UgMIEZrgaP4qcH-HxBNViQv-p6yMfeKUw3i7hh-PtNEYE6cilJrcjJAHC6SCk5ebe_Zf9Ksq2ig_7OegPPQMI5xforoa-52q5ui_35BmPrcImcpswt1ZYL_BYhjdcbXcebv_yoXwXX_9zsswiR4elG-cs-ECLg7AShmoKYO3S947FmwuFXwU5kYYDG0o7wHThFhQyGdICzp6XLuno1x6ua6uWOeHmgkgtrhU2RkOboq42DetzahdRjteVcI8qnIYOgBu92zw9VTns-KIPTt5SdvqUBaqYKQDOTrOwX7QOsMQQbGdoAynHgs26GEPEJdF71r2XYcK3zcfi-fUmbwtzY_PT1mHKSOTUBMhfOa9HoRbN0OdiU9pONOD7r37Zp1xs0nMvJO3s17KGjN0F-nI4XZdkfYwEMLAnaIG8kHmRokcnkt8YeXN9-PHms7sk_IZ_Ajq--8VVvbwof-mqVKdkUIvNoeJi9oHMZrmI8m2XeS5JARmmbirQA9GkbfNAzVAGPh6-uienk2BAmedFUN9pcQEZm5ADyPNdqEkXdzl7ri525hIwBT-3iDjrT-mIz_gggqLKcW4T81fA1WAd-B2AeyrEbQ9eAoOHBQVvTIKcuJC9gQ4fw07zzAPmWGMXlEOBzOQjti5f4F9dEJp7f-U4sE-24R6_O-UDvcVOt2YqVrrnGsQ-3m3NYgEd4aunE82cQiClqphsa65u_TYE_sjgQSpeyqKS_sax2hRiPRZqhy_O4Lq89LXq-cgxse_bgv12klaMW2CdbZD5qXsfGI6oW57DIFyeS36iE3S7O_m_gzeLl_lJMYD3P_9GGiVRAg1FLeMwsOud3YuOSuhnDn2brPeGG1pX2Vs9avxj_-wDFrOz4lWjVUIGmCGiRoRtcblh38OCi1XTS5IQ_pO3QhyPArc2Z_ZpUa7VsJYsClJobVRLJQh9Xnx6kdTA3jMrFqGWqSnsiOQzTNAGa7rme0yy1tgi84muONgAQ0YX47Rb2mfjOzC1epMA7zuH4acaypnNObHcDbjPzy3Ga49pZBLJefpEhn6kLRckLJslJaR5C0GyWwRqkrbYiWHEp2Cq42guDeOJKNQJC1lCTGpirJrP9PHowg2hVfH1jBtrzYwsf_7E81EzXXMXdJ1X2bjUw0uWWGn5QBj-nmTDDD78Cu9XJEhYyCcal1DbtfS3UM701hBj7v0EkypS566IQ5G36382nE_AJZEiBDzmgdpf0T408de_m_x3zG2u9iw8n8ZG6Nqyn5sDn2carZvVwVi_FsKccdyOJBnWR7sxau638O5zyE6nVZh29rWv3rF2lkT1LwdPxExOV_6oUyyuwrSQw6U2QLi6RSFrkJMdJAu9JbRmEftCQ4K1jW9aDkcw6h7ecEVxbNoCWdXy_PNUwxKLtceijI8IXVeRnTIicfoH9yBFIGoHres644zIkhM9jpTE8w7wq6HSj4yYclALiXDjU9NbL37zOrvf1CRV-nK4kOTTGaGpKFZGRSbpt1XiN2WGHjQsnu9K3qZhE7KaZGYFdf57tFXQXSWJ0bkTxW2HFzSbAXo1uwZNVAG2ZLLVronztrr5yp8" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=17" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=17" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "bbae1c6d-4fda-480f-b104-9b856f79ab29",
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
                    test_id: '17',
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"68KCSDLLAEC1K"} || {};
            
    
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
                            test_id: '17',
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
                        extraString3: '17'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '17',
                        root_domain: 'gh-proxy.net',
                        item_count: kws ? kws.split(',').length : 0
                    }
                });
            } catch (e) {
                report('keywordsPageLoad', {
                    wa: {
                        extraString1: '',
                        extraString2: 'gh-proxy.net',
                        extraString3: '17'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '17',
                        root_domain: 'gh-proxy.net',
                        item_count: 0
                    }
                });
            }
        });
    </script>
</body>
</html>
