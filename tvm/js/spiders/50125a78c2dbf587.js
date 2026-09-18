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
                                <a href="/kw-click" data-ct="90jlswHX9DhO4ybTnNHK8BA7Z6XJ3Lo0gqlj3KDK0MGNSATzhoZikd9USAd-UlgfeRk_heL7uiQVH12KtRMyOnHKgd7WrPlbKNnuZ5GUXlrMIrMSQWNDsdIOSk0KZS5BEhjqHvxHln10RZKanb4k8tLAdn738DLz_wxq_531fHpV4G_sX54hAUBqXVyL4idxnePYxOJE7eppjeCw1wWjWiQu4xaUSUrciWkCBKgMoiO-gWd-tUPR-boXyQmtC8jHrTNkCVim8B8gxkBrygdC7zK8wmzrkJe5_SL4eKdl9_2APEr-y7edb9daWYindxSnC5Y6-7_GiKk9I4eygNvRDegB17dNUJIOGDslu8OzgSbl-mWB9BLTVy6YueOLaFFzqUl3vbOXQsJzFaj0jomcEIsNOT5ojfV0cfuV4IMVlzOgSzvWxlk8TbeVfGMFxt8iVHqVdD2Ms9RX86AqsMgTZ-8fE3CObQT29oJYwB1U86kAKqZmRKeOt3CWkbrkcLfY3Uex-ycAiCZIi6AESq6zTGNNKHFzr4v_9qfEZP_X8UJ2T5RPqtcHqm-o3AlOrJ6ZwuTs0gytHb-RTW5tJzS3uMmzDSWKcVS_BPityB0vvtIgbBScClBYguWRD8paQ8kStj7Q5zrq2ECPa7MkkyAdgWbJTZCfXbJRlPvikfER086Lp3ajh6KNu6zqu_8th7JSMNCF8kcqqOkdeEdXOQVfPkwAhmzbdnTevoJvnIqj37cLnTlJQCSXuSMYpcpFLxJa6F5vniFVOrqeapbVKYjQ3W1dxXO3KWNt45OTNmgWiHRZFylApeK1hsMxfmgadAUidAIjLL0fdE7QlTOlIh3Ypz82HWUlkRCLQbuele9bluIvD0bdG5I_GKm9miVoDH8kcUBzfF9oDFRNm7NHR6zOm3lBY76DY5jIFiZu-nzDrFnejZsMhV-wtHxfDbQzbI9U9NcJdG7pqbokCztFbTdECqQ1GPHY9pjSKYteY8sc0GWDg36ROJGJwm-z3tHdGDgd6ZUa_sYVVDxDIHe1KXXhG18FOIiVtAoXjfRC3WaR9apRJlNwCu0CdHE2ZWEGi3eVk3BnHwqYRBWEC194HO3srqfKNlDOIDMWgwfr1EF3Vp7MPJ2LK4lePVb8xSbiQGph24dAi29on4ByU1bvziHYRHOgGUHL2AlIS2l13PQR3pNbOGLiKKzHy1Fk4cbWJ3aFLRfG7RTsqxAQsaG9M6u-L2SzwsXdE9sfJ5-XbeSU_W-SqLYf36V1UrKBLZp03zRektMFtZWD5wxuFygWxv1rZMoNd4IFCUyOGqSzjBYr4Srhot9qJzup3AN773lyWI-nfzdUX_gzZLmbv40fOSMKIwcUKn27lGLUEXtfYFEA1yqhOYG3skqbUr7WHo-TukQdhZt2waDjPSV49EF05101tMIiQ02xdyB_oJ34lUZ-AwT500blKZSU0S4NxihC0N7oNOoQ9tCTM-8tX4vS6t_xVrfMyiDtwGGzUAB4CumPQSdEl0rDY5VmGGxwnFgbEIBdgUNgHj-tcRuY5nGO-j5-TRtDWKBcItlLKN4CPuS9s_tfyqK4TXuNRKZsSu_QtW1lMFrLsZ2QhZGW6CaqddEkVpaGgOIA8vXlLQbDwf9SS_BbtO2o1roQ0cOeOHTIJP5r3XfxQcV6sB01OOyfdj2pS22PvPr3L4Vwgo9UDvRFTAqV-Rab9LMMHyo6Pa3OtgXcCCiWvRwSucM_xQr5geDBG0vOZ1BPGk_UnkCWcENWkGdqYeoaqs0w6BnxYj6RVXlaDyQrlWbsnuvhlLaB5eoO80AehnRUSranJCqP_ToXaxmhEArJilLqNuWSE-66Q7rCvCsYnlHIBLD8Cv4b9u-EWlODOSdB9wxzDjLB77Ga9hu_ZD_C7sgyovykafMJfz_IzmLI79Hbr2rYwu0X8FS-vDC_-ME3kVc" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="raUbhy9zVuK-rlLcyQxkmADqnYWqro3hWzTiw4ZA1syOBUGmOyQCdIXpUtK_sUQ9E6YJ_nSwYjnS5sIkVb8NuHXexC4pQU_s8nT5qgAHsEGH9fEvOq310wkrYT0i7U9FMr_8FYICFBXMIx7x7qwvXsWg6R81nuWmowpH60mgRtiirWmlruMG3KXx3pIZIdWCmsXzU8VevVOGgVHoyhz2WPuoE6JaqL3jMKDPsEd-UWOhxujIRXtt4viH-_4a37ZIq8Zb2OwtlDjc6rMlH51_jo2MA7-WkSAEbd8KbW46tj0Exb0hyRbxHOh0Ps1iHPaKy8_KPwLny_uFMEAccRd9gVRy4keMZEUAzmBtt06u5ikWIf4mQ9qeGvrSecb2OILfcEkEFYeJJKzRMWqaTNQVGGl80DJyEWODzjWbMsU2wvAAZ_nUuaT5t9G_JhTMAx7y2TonX4vbJ8h13gCw6aQ8Xu6P7tpisaIatZXDEGfSRc6XDoP9N50MAkPhkIEecAEYj_Iepv1zotIXnc41W08xODxRrKk-_Z_0iP0cOKBJnTa6hHondv89vAoOjVBeyKtkLH10qyjmXhCArKbmk5VIsZvmnxYAZCe98kpqLjandQhuMso6uWPBl5L2WbXETK-oUdaXttA6qxz4YlOJjh6Sk5BGBWYvc5yGcteREZJJ-POb7P9kqODEfQ9xfZjZT5-Tq749e8VFf1qcNKmwGqFowZlahQ-DESzO5AvKKvMALu_lb-KacC05Irk8K9biVE3JkFh6rExoiCgkgktJl0kA6_fbdd_Jlv7H4xdlIS-7bb8f5XBYTY6Ifbci7y4TPE0OilvGwMHfYDQGInZdOqk-9rsRa0OkQltqoUHmFJFidGSTq_hpvJzUtwyTrZUSBiVeY09DmyGGI46jqOoE7mRlK6yMgpsyx1Q5_1T1lDX8ZDjly2IupYe6T3t_P8xlN_L15-MtGArMed7YJHw9T9P5WwWztN75ha68dd8NY2sGtlDHqp3cksD-aq6AMJqf6Ucz_LXHecjOqUAdeAeOJxqLS1B46sWYylNAnfqPBpKxdM12PXntM9sLAsstAHfwZqdULt91Kp_jLMf9GOZ5ggDlurEM5AcdyVeBxUARIjp7tqJfJ5svahKR2Ckuf_SunXgnwKD0EepGaTGk-f6JYTHRw57K6GzeL1e7j4g1LDNGQAYoNcbeoFi4uf4fZXsiVArx9Bm9cnw79qwO9S8Iua6MWus5bUggXZtbeNPTfCEWd1igFIF4VTqPir5L-uDSBk24cg1eYmACsB61PF0xpI77BfeGgIntWFmAh-1V3wmUcc36pk_zEnvrxjr5UM1ph3vH2Cx3xHLEMg8tNbzdvumhbHKFLOkGdZGN1BvICbDpJxOCcc9C_AsbVBsAHF1heO32xvZ9k5pSj5st1bvySbDToNxbyG9O8D1ijiNd57U-1r2P-A5gF55XLMqROJvpx4sSjkbeMY3qchigC7TagrBwjYfpdhznF_GGFmfVO7q-LZEB0BogT7XM_vFCCIq3y1tfasmjq7zhr_Ovqy4cUYFc2Sh5AA83NoKnOoEK7Z0vKJarem73WJ-NSZv-MlhYudmMWIE0eiqLCKUY2FiAAvjmv6mS8fkmnVcErO7e6ISrlW-BB9VaLPWbwmIMDuyPwmjvrP7K4oFljIF-kVEqe8egOUWzKAd2S4jAko-bTWzX1zgtUqzUb0HJC3DZoTGDyx53PuvRvQ8BsMGaYIDIw1sq76N9Jub7IZ1G1toMMyFelPP86BJmCadk_4MzzU7r9uUSIwoQE7ts_YNRNeaz8PSdKhb9yWKsQ0krNAkASu8LuwlCEAFujRoSUwDFppII-oN0tdk2f485iyTCk3VGQfOwjKG6je4ykWD9b-1ieW5t-2NxaDubwMOY-h0zZ5qY93GTSW8JxAVbp7OSNlqPfc9CYNZCEwyE0H3R1t8W" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="IboLRtQ1voqXsWGrilS7qlQVHBm7JJqFUG_w9toCYx20fcpBuopZj96zgiDo8bRkpqrwBjdtS0RV4Svl0qpSRX3EtqU7TzYzyZuVKNtvobJqzFUfqs2goIiidBg-ohquVp2a907jxVUDxgW8vJe7dqc8CjxnzNa5KKvZSdI-X3cOlGiGqJur9pQuHbFeJIUVraIkSpljVM772TMC3l6J0JQgxcmp8veu8knwJakCHIttHIOlKHKf5U3HWLjpdTWPPXTCE6fhYqTkn3flIMpZXS3hjcgkAVRD8t-AnMYcGDOZzxuRJGSM9ZiqriQQRpvcGasI_RFWU298bj-D_60Z_JeZWLuc-a1t6DCQQcfNoB-PnYXu4tMmYa9AP9xmZRyOPywl-8FljWsyPjaHO6r20COPivNP9oajQiGPf8LAsQ0wxc84QatweqlYqh9aReKzUb0s3WVz_68zytiFRDQ4C6HvOBh3bboRMmRf7jKFvhzQ9txOC14GncHkLXaZ5Ug3O5_dtPVjKvFGT-5F4RVQvV34OEzpmM2i-QlW11NTU1aVFDWFlztFPhLyUbnL74_zLhLvN5j-1BlUq6uhUyL6ON5bD7x-9eY_n02WyUcmwyOSaAVc02UNQOkNHc6aQ2WQKF9IoVGAI02bD2PSDFRXqfoCTw_DJ1NV3dcfdCh1oyL5HuAVNmK91_zbz30M4uSWq9sZXFh27HI1gTzRSdvMSvUp4eLuB4kWhr54e1-P1x55ugIXrGu2HzVC8IHVXf7XpEW4ckxbA0LLGd68_6Al_qshvLloXEeMEOWlcezwydXkCo6WPM5t3EtkmKpkQfPzYXQnaA6aupK7UrIn8Ej15jIsibvYUADqAUswxwMAotpYY4TjMvMwTwhKT4IuHaegitQjxH0ZM5ho9xnYrJWjoYmRKXu6vazW2Re5qqMPMsk-SnhX_JlmIAtlaZ3EGBP39NRWw_EhiFRCYU3gwNoNisR0JEgoI7g0SBnyqwEpZat2PRJsu7iwQdc4MYB8vQ6Xm-ig1UilZazthdb5nuzEIKW6BfBns7MtfG6UVWt2yvNQjyfE-2xsPRcxbYXLLztbjzOlhD-aF4wL4qzKggxoEYBgyWei7Ik7zcyTyAPVnmccRt8DekLP7bmU-R0amzW2Ssah1-P9U5ujS5SwmvOnAlQ7SUjaZonPFtmic4lOEMWiwTHRESjRs7ny8kCrHMAtpO-r-o_Cu2dZq1P8VHGlIsEOSN60-a4_RzULkGpCtr2qSQyyLWg_TXHA4-76dqTViGdcXC0_Theq-R95I6-GgZVZCX4gSFaajxn49EmZpMCXX7bJHzAFY7igZ0NYiH-G4GwGR7P9URFLn38nQIj2KvBpyb5UtK5hbK97H9TX0Uzu0S1v74EPd4rGV1GRFh_KRBDf4NZEHF8vdAXuwTMzhBhKNXtcLBGXEeCJ4bXz-swTbnUJ0ZPAEpDpefU31vBUQft-RLHmS0WemrLNxnF37caib1mK9EYRrICxrz45Vxgk75gYzBh9NISKJZpMhUDHO__TuGeqAd90tjYuaYl8nRxVLOVZL858GXAwZjZuETwv7wyh3b4ZPuKxAsBNFrP5TzS7kxIvyGVe7SNtKa-2sWcHohwa1GuZixiMEiYEUEqgI6Q5nPuVYFiU4NwORBu0Twpzf_RkWmeVv4XPgFrfIY1UXfXaPiKrLhEVzHcjHYwTpDjmihefwRLwM9ZgZM-TSAdcneyaioGsO0ati6HODzfwUkQVLCRXVgXyF_1B3k-Yz_QxRQ3sYGL1wZqq59yM3PxmzXMLuRDmxtgUyzjWHe67dGctnj2KpkGR9FGCVCeyjADGYO1n7jB8hIBAwmgmSqmvh0gw311RiG7wJ8qf5icAZIY5KwWi7OJ_ib6B9x8qTtml3E5FKA97PS-fwZpr-AmsDVDbOuQJyju62qJyjGjyVmB3_yxDbj0l5Zloii5UWBYXYCSC" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="9cKf1TPKTlAit3U8NoU9tB6qRO-4vNv-01zjf33hHs-qLLW5ETtCJoX4xFRxOS4AMeXtKmfHjNyTSOHZQhOky9ffnKh6U5C315bpuwSl4enqVWvE5fLjN9qWWxnBREvUmvo6eE2GBo_HBu9Zp9PQA27NKlsrvYL-Fs9q_W0sGXd_puWS0emkf8G3BEqQ1NtmWQpQ7i6AsmKAiYO8GyCSa9lnpe3U0HF51dyu-6dBCZckYu8bWOa00qpmKuKLv6zpgizOXiBbubOEo5UTLw2X6zYtmkdN8foq3xv1qc6rqwukesLwug5hkQocJfRgRKqbe4E8s30uYTh4rbbVm9rMHm4wvodfzRlWSr30lC8du0im5wRpRPrZBbH99dbtdLnb9KhKDOysFyYVUpfGe9B47lydpuXQEuU5Lsma8CJ95ghoRpYEbSxnFOCvnYvy6jzjIdiL2QOFl6CsYc9itO9hDAa40owELeHW-AghAE58YXr_zpqEy5JGapUwnrd2oMNaWWOCwnWgFrlLDfeAigIgKDtRutvODpRBSDK-Z7npqRN4Gm76oc4cqAnH55S3-DigQFUz5sc68GINkIy4GkWZo5gKArn_6VVU_CqJhZ4DnZw0zkhQqtLMosMy2p8G28Efm6_VWMBpraT9QPSYQowdNKgOgzFegHP7LM3mmZV0v9jbSlBGeREaNGshMTYE1EnpbrLMLHfKXeM0Uhf2GgKK9vHB43VwuIFERXVvAOQkXtr4Si15uPdZ58Wfa8HOKIG97-ASztq4Fz2Uid4lXuyGGGXUKbJuXqzvb2Ide6-Q3WFPLSRgW1cDIG0gcFRDSTAu0RgPaJ5g3gfOOReKZrgNtiNg4ZODPpQxduQUHTkMPzY4S4SC84AAknwjEpsbNe5WCQBd5vzk86_4RueHBWcSo0l8c0noXL-AQ9Y9wn75ZLRFMq3nWdNWRp1IloGUJ8ZD1kA2cOPX0gqcJYFLLku3LhZIw3j-lHe1j6IQUFmF2fqMG5HLlXhXuG82h8rql4DIcLyARUhVMHXmIE5zRiir52vx0h7czR9TSReQDxN65_V6uIgQ9y70rHHWFuCYlwMEImuszrBC7Yuae37y_nByTy3ANs_Ybs1emVCHXdzAmdRNvTZpAFpLCkh6cH758aIRYnW5IoBUZKgDBKrxQOoI5W4MyKZUkLepZvUdNImhk69ZZ_Pt7BGNvbM2FMdOX08VweM3Iby3IdeyLqk64kRPTaW5cT1ynArC99HkReNAoLabyTVquNI7bXCdIYKYPdYHG9L-qB-fIF6MIyd7IvabEx6e4dhG3D5IMASRXeMGFakSa1CcAanaukBMdwiSNGYr3UlTbxEaOpoKJr96NM2g9h2pAuRVWh5IhRWdO8nRFGkYxHSTFeaeDDTugzZouTqSXVtKtWPNOliVmwZo7zyfdAc0waQg1J4we4jMNnMkQZv79gbHYmxuZCXlPl0vCPY39a080Cq4h3LtGE9uAYHo9Z___r6mcEs2H_F2b8ayAoAEd6vEiSyIRt0cInC9aOctIXTlALB2PJn3gVvVaPHDvfuQbtjpeY5_ZGKLTWRfM7PodycF-leI-_esPQ9iYiMFdaS8LaUni3gae_7rjhAoaOJgOvqw_CVoaB5dbsmNey1yzLqUDb49--TPfGEORkTWT42NFGXr3NZrqwkM3m3G6KFBzzPdODwvyRhpKA97ZcZPrs_RdwzcfhVVpHF2yx7JfcLZp4cXpaWvwyarczg0N6V76S6Ml7Jnd6R1iZaYex8WiLus5U-EJ2XjaeC7bVVR8LxPJwDoichmSPk34BB2e_S7pDafNDxoxBJkKQUhELTljUa5iy4Cue30rt-MznuvTjMJ863yz4YppPIyMuRmUhakfA9DvHY8HVMbHpOqlxgoMn6kHVkxN_WjcbkD5lL0h_J3Y-y0qY-SZXPLzxMUID1kJ9388rw8D0Lv" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="0hRqtRtalE9BDgBVRA7SP0zFusdRgnCFpddraS8-B6OR7mpturMOKSt4gtES31lrJFjEHAsmuwSXAD2oM4D-nolEZljJD2wmOJzVnKvwuCuPAw8Hwz4N8wXC1hL5O5_vpd-cyJKhg8cZIKTHdT0kVzZZzN-JvzbTzAuVG9xvuZNR1Dwxz4jQb6hgvf2ckQhC20C7IfXwghio8m-s6WuwjSLFFouo1A3zk4UJXxDrWg2MqiDYGxnY_a9PaV6oPRcE_IZwXyxFx3zHQQXjydKHRqhvnsNbxExjvzCb6hMd8WGa3V_K7oh-XgJkztx4DNPD5clGAg6FLADUnmxWsmA-I_8BnMyk_EhZTgyzwFUHxCZLaf2s3PCD9-r_A5C_4dWB7hOkT1HQ9FM1rrIyBWwHuXra9HA2qJabedsfkGvqA4lIi1GOezuqtif2fq0mxPHNCFghJRsU7exi6f_8E8I6jGhrrmiJt6SzmSPY390sZbTw33otkVCaicba1_zyhrZhaMPXvaj9INRO8BTZqTSOm8tLh7LRTHjG6F2EJFal8XjYT4Sg1SlPiTj3TRxsn3hU7xkNQH0EFvq9nklQD87Jxg1DIUGp3xgPgx66NJxh-kplVNYAnFKJCgU9zKLkby9AlrWAgfUV_3sF89b0ErPiz_pwylCR8iqaxht2FoT13TU_jIYwJD0p01iJ2BzRztncghVowp6U3OxRryhMLuHhUfjlNgZIZsfSuiiB1Xjldoa5-cMnFNzy8LEam6HyUtRszXluEOal7-cfQTCXCQTyp0_eBiKYbQS9M51vUQHqA4a_dIuOhDA6HV2EtfXFSXl4EAiwMAmfd1kfr5PF3VKPnVUEqnTdggGnEk3468ucWZNv4F2mz8kxQB55queQ4jGV3ZNYOr1R4RpDVMgbMhwFj-v5f_XsKppHtmxjT_VWSKp6pnKIJ-C9lxkC29mGzJL81kf_E46z7FxX6Olnb4H74RrHkXrX3DPDKQ_14TlFv7vw2SWtTDn91vrg3zV1MJOzZJC8SVzothiXNj-vv-GbCfanP6AcMygY4pv3Pw0Ng5erS1KMm7htPHtC5iG8xtBxlPlA7MaUocMk-JucsZSqofnrGqYc8LZSZPwGuaE91OOmJbYnhLEr74I3BehlcxHSXv65yiXu7nw3ya20X1th5Dlw2_vnAyQ6ztITZQFyGbQi1hZWTA4z2slrmhkx2_Mwb7FrVGRZfX989MWa66lIV94JHr66fqpDdbn4FL31m1wShmfg7f0njtzxp03zmxeregrYYb521fuKjjXUb-IjXSrFUjeU1idOTRfWUeuEdLUMhtnVhN9bGGrPnlK73iaXsN7svTWlXS39pMbBVtfmyAwMPwOfZ0GsLC6e-7kAF-6JBJBkkEGzVayY0VpUvrv-wwEhzJC4mfunNT-IG_Q_xzmu8OqB8N6Jb4q3UFxxb0roc9R5JGZJ-g4AZkvo5pqXGCIoL28-aoGA24OLznZJ58mGVuunrNKmDTOR_cayUJmKq3o7AXoovYH0kAMVJZYHMWcMBl6rw5ly1ItkAgp8YZ7sdTQgyv0FFc4MqDOf7BJQcrJxzHr0nAVg1u1Nh2KTve5WQoIlIRWf1YLedz4Pm4-9s4GIN5H0RLCJbAkvt_cHOjZCGtnru1VoTFgLPvTgwuX-47h9n4z3FjBy0wPXK9KvMu6W2oMd8Sx3ouyDnAvWYfwrRw301pLJ5XCzfGjq6prfyeXmjHdkgGNnwm_sO0ehTfj9XChlJMh5HiZ98a1GwLrmA3tT3YdDiQnfol6d7aeXB5-h7_ybC8hL-Jv6iog2Bwd3O2Rt3EXIEuh53VohwmsqAEDS43pHrRygUE4NgTIvpn0D3rR7hEGyG17CWW8H-Z8UqKTcYJ117RH2SegkA04Ma6GoIXNBjXdpSDTKEtulaUU2hR5fu3asYZIiy5No4nLeXfKohfy3zZyW02cBe9qdbQ" class="dir-link" target="_blank">
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
            sessionId: "fb1e1d2b-6543-480c-9b22-de7c3a13da53",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"244JQ8LLAPHET"} || {};
            
    
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
