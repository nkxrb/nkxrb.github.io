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
                                <a href="/kw-click" data-ct="54PXhRZxx7-sj6QjEac2Mz5KCnYRyHy6IYP2KQIUYfAxUX6ZC29CGhuIjjlTuFUL_nZtTl6mdNhkRXumBD1-eW1RCfPL-xEon9G2UcN34QQ6_l0jmuAuMpD8ZiCxuR-e9YKTV5c5rmP3JorXxwjIYXy67fzDe7xlM6smyHll7aKNLwHiH0N21Zn3sigJu0PUTi10WZ-IWWHj9PUu8cprCOQIpqlmdygxnZfuyiU-DwxbjRdKRRRju6JLxysGfQlphXvA3Z1288HaXwYq23ZTVXXuhLVIERCdevaauMB6wN1FR7dM7xgBctRWqu-ue8-9DfuY8Ga8xNVR-EpVPuU5GsCOcUJhUTyS_MGULbak112UsEI7tzxzl72FrZgL7CHyWcOm5UBrN-_FK7eTVuW6lQBDDqowT7A0sto85ynPyDOZyvkP-tHhzOMGSWy5vcR1Qo4RWyRdZFMXQXnRxaU3F5Du7vfenZGK3s_pTeo674mBB62BKCW2yOZYDJakyPkXQZA0OgfzcSzwIepanqmS2C-EWiimu5qE7uYJgrok_erXfPjmqQIWSFvp9kvGGaeDJkqLmVUbcTLmn26PMCVevDOD2cua7r1Wb9jQXh8EEgBIwC9xVote_kOQUCt3LdLx1sF9va5G6hL-6SxLVIItdtmZzhIOdMWepcVMryisXBvJMOhW6G-tlGUyCeg064P57sx_3EBF-tKA7WRAXmQp8UrHrASvqRRA9ezQNeRxSKeaJsbFP19UjhmTFyp_NS7ududTThPSzBUenkaI9JJBXNOvkHnKJewlkqk4qFejHUQY0-NPg7-otHAYnrytpvRIoNpZ5a92MJeeOdPxD780H-V7aq5KJOCqPqwPEwJGzwbifD4ImgQD_soEXwrvtZ-Mes1IxfsWpp8T8fQh5uH9UT2Ffxvd7x0A-5o_kuXzz04-Pt8vWvknJG1RQDz4BSPRhi1EDl95wurvIuq7ybHeeABNXV48Po9i7Eq7zArZ64VI6t_kHDn8F5E9pT4vXQit9IaaQhXYAPAqYzis_IC8l0UiVjeZx_6sHmKa8Tx_tTP95w8xNWP-6VlgEQoandOB178Yd4soJcWrdPqD7hCy5skTG97j1yHmlP03VK1vRM3YzFxJ_MNTFZJGXOUCuAIYjqTtNX7Z6b2iaw3iPKyvoWwmurDwK2C8J37UxJ5_K1WYbrTi9Wex1FL-xNxj_6BPa_EBDFKELGX92gw8_Fq77nI5AtTRiSMZjn_uJDtZaUFCVtmgl_RAq1Yjq6Ag7wj2h7k2bkwah7YuQuTSK4XOPAuz7vTPIczkBO7cz0nZBbW_lwAIO3yKYfpoSJcFq89CbimDlM2BmUMSLRT0XUADqRbG8iXCXCgC3D2nAEvs5p959DzQXFA6HmT-JLHuw52rndFSfEQBKzbHVYkJzrci1gi4qCmlNZCRetWHk7fwijsiHz6c7DWIUVDycTRqrlO51-S9RUYlat4YHBhLQaSiNywhZPqC9_RxBDTa0UErM1T0Ai-kG6uep4hc8tbFVfS2K2flr_azn4ceoYC1i_pWj2tmghL2NHtknNM-3suYneezH88wqClFQCkbqrBRGjOGy196vxCMaunhzKDnPeaz3SRh94myPkQr9MO6_8F5Ei5tgGxvzfUPNdvofPR13hsLhmr9PANvTKUQ6mbEnSNIAg7clIbX5XpL0haKrzX-35_xhjXW71t99_S9VkPzbWd81lAOlxZlpsLzE_TWHdQrr38BWKb6QqoTovsBwHPZLoaymxK3Sj0LYWv00SArQg7ze4fIo-SzELwjXMyyU6cmFrhRKi7sJtCREr0IcGNmEqC0mPGGatd8pnK8vw0lO31h97Lq8ASQlYc0ZnjMi-1p-ul5-RvBxBI0IuMetzIwaykO-UMaxo3NN3FNrCMq-zM9KW4GQGfVxohcoALP4xCUqOLsrAI-j5I" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="vN9pTwQWybET85Cgyy94ETTINOYpS9lU-EAhu4zeUMMWh1dqfwazHXHYwb2rZIkbaToy7_YwpOkweyipbaMJPR3YeFkABNiZseTR4ofOUasoeB7IxS5vSb8ID21MedySs7qjRXtjwH3DdUEF2ig9lSOOzO7Pp53ky1Dyr0ER5CHd08xiUb3y6HQr7nA_m0CFIROqj3ND70njr1AiyEfsdH9M40lN5WqtLYg45VxB5i2eoJl_ufpi6KNJcCizW3eDRrvPpPSD6wBBGVOT4O4qvEPVLmFBzvNAXfAy0NbTfr0ojmqYM7pJCrZr05X3Ar3TEDKLCLTr_1dUMt761tHNN77IMnE92BYrHhKLhPG4LVGz8u3bRnIHxrVNtN4ckcB77A8A6suFBoA7q3mZ_3mzQDpdCG83daBDaTLqjc88Ys6aEk67NRCS_2-nd0ryscxjaSoEGxkIa9D096hN8RS9_2RGBSgHsdQmWP21n2eAYF_k_cpjMBNX-1N44gzqMZRzagR0E50HojtQNimdL5pCOHYMqs_Nxr9dJFiaC4NFfiIFNqBgGWnFpi50aRr4JSCW6Q0jNVA1ELfQKntJ9-huzHuKNr5KrbOAbR6D--JFEw7v0Y9ZayIAnDsv7ostSJCxb-uaWGsryiHdItW4of_mTgEWI1BplBeMWsh9ymGAiRNJ1sAsFZ09ysFn8S_Yj4OAln6xJPNXfWKZN_4PfoBC_56YWU52S2rgwbJqPVuDMxgN0SKf9prMhmLA75S3g5CSIAfjx09VVAK2aLWJuo2MDbFV1gF3fqebl5pSZkXS_Cu0FZpV5qwqA9LBuqeXqmJGLCARSbBRLhHGNeAgyh9unVCVZ5XC_CMSqpRcPJpKAReSfq274w66ntrh5AVZq72s790hlHc5YU0lfqVcoLdZuNzzhl4y9dZLzL_LxZuVYPCPm3CQO_KW8RjNpAHB22tc_M_MOKxpYbJOUHI_YRselCtTmo83ffNT4XpB3-MO5FiY4RAvK2h1wweqFOS2TKGIAtGS6lpxDLw9HhHLoOAIPuer_2dJVQFOTKpivht8Y1V-OLIuwI_gn8cxVyTmWnbnSvhUr7gmzwAdFO4IyPsWLO1fRi8zaXMztJY_3cDLsLQh0fazAP4QGCCJZxkjrt84Wrzn2MLq_mGJI21xJJqVRn_TT-0dGYiIlqJIwd258d-RCoqCgTH3ujbrUKy7vixEKVD9Hn8NxId8SiveN7Tcr1NEu8mYO_uayIr8meLfEOCMHnYGMyJxwC7SupBZQE90CXFF5fRCt9qwdTPhdwgC8201t5BxYRlz2bEVr34odo4jwzdmNqKJcuD8vnWfj5AuXmB2SFdP33E52PDTDNt7OFt_VO20p_JJL7KAq62Qch9FKdTfAR8OpjMnUAej6XDm2ubwSw1gl129MvCsHNuEUG0f2JLHrs-OFUDAWuhgwSIttTldvppRVqu14vD0Ina1VC3a3r4ppj_8T3B1lCrtqXE8JdjUXrEURcPgycZNPxHz_daXPEZr-tqr5XzI__UXn6e7GByOBmNC4F-WuI5RWOhnXngAx4JjabzOcdutF-v2vbMoKnqCQUVNNtU_eMlCW0bZpAtNHFE3IbsqYBCjTIjCNhWJ-HAj-QPcXXtreoHqd7SC8vM9uh-LddWpQrP2ZUkednl0KWt3VUNN55tbGVX3sS881arpxtyoHtEoAeo4KIEOOXnlVphvClfLWjOp1aSgIAXKuyblO7y3Q5t9Atp7Ssmdjez9hYo0uWb6evAcgGFnxTEwRU21aiLZ893edgxCKy-9Q7Gw5YSp9y3VSF6W4OMgNJr0k4Zdou3dGY_4taaV6OUKMEpkNs_0kHtt8c90qrxwFbNVP-KgyD2WL9RhEbIOz8dZf_xnr3PkAJUFclUg1tKTf3i52aoZHSBSou2xBZcyv2SMHICKnk0r1vj2KXJgRPzt2_aH" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="MeniSNxHgMwOQADIklVbWeQFRuMetVe-HPD1GWyFnz7IJvP-tm08fRoWGmrSZ6F43d4e8Ir9vf7ddYVN1_wiBjOA5pWwf0CSouVJZ6-mVp4zeBRGtzlCMJ9FHApoRegWWUGtRVKbjBX4spTe6cq3KqaYP7UNDJw3SFUeo7899SjdP5oFvIBGucoGuq6Kk79NWB96DrerI-lEiQVd8PkDeH6HkyKoZMHHdWWpXJkIGbdU92FIR37sD3_d0g3sHjkRQnjAYsADI3W5OGcyQGXEuXy68S5XFH6NEF6TEOVIQsDAEIZbDIzWcdaldKRDTw1MewtiqyAF6W7DRhFdYoYqNE_TRXDu9T1QtnCwjGtxKjuEGVhpAZySc_ryH90-QTa-fkKLqea89-E38qfGKg4sWbfJe2ht6jFAn0WxCTI_UXk9D4n0szOX4quGKp6q-eMs-7_oGaIUFVpb32GqfFzpmBjGqiZPQffLK8nCYxo14ii3NaiQbpiB8POKqPIhQ7WxM1mxaAVacHlfuFVRKQeNrF-s9UurIgpbN6lMrVvuuH5GGO96Bk8wlxWpoDCkhBJWA4EdcY1aenRhIe-49fOrR37biOTZDiDoVePRii5hUlq29vCE4YQUXg2vxklLvEs619k_ATf1qDbvGFN4t53LlVbF-lYnbvpPpv9CY30YlYkqkB6bDT7bzrA_XwFqsAi-Ke-GqWjyc2V_Cyvryo2LIvh_IpmTgLaiP69FdMDxKGUyHmGpa7tqm1tB4c5hTRKWQ8Myz283vmPtaWnOoJSEdoeFaeXsX205cbMdTogcJIfJkLgghLAPxatDKudGGeJk9EkmaY1nJKwF7fBeivokE2iRnzi-z1ufEQyVxB9jw8mvY7g1Pj2IYej2Ssui0l7ZYYsqzKEAAsOPeDVUvLCI_oY3TVpaE85GOsA6WXh8lsLdIWSAyuRozzTm3O4p7yaPRxKBoMwHqA-827mCE0_mzBPnPBRhbCN0UhdyDPTkLGjce9bPGKcogkloqOH2-80pGBGOW7ZI2MIj3wMOXfB1JBxXr3Uxe2JU7wqqIxwubqCjStShIeKPqhddALPNo46BLwbC9kZQUhNdUZaxeb6XzEHriPnkeH1Q3iwcZc_qXculq8PPjbsJzpSzk5jukgNsJlp8zztbNJ80l3z5OzOHlZnQ-26JycT_uihK0iJvw9WiGSkyoq-Su2R4SZ2XvofSPJYyDB7_nS_1o3nKVuj_F9B-wNCCITapJwsE2L5iDsvR_vvlnMAaxbG_zcPoVqDE4vjpV8fU7c24ok5q0XSaiD6TeMqXn86b6xPJ5KSoHe1p1ydk3yEoXRdoryWhfLmAbvt2_qkkh54nUcuCfLEN7LS_a9KgPkxacJyVr1GaPUUi0s0k9sD2jdKBOo4QKYqZHSjCadaJCFX2jHmrM0EzToQCf88beXrHAi3It71xiIsqubk8YtLOEcaA0wCXBvTPaB3DX56piQyBuF588SH7KZJz5ek9Da_WJprsTZton5ath5Kfa4CuP7ATOllqOnqaNNKWy3VmqLRglrW_BRDOZhcI2LoyPYTV2ZOjCb8JLGEa39HzJgdrUvHt2dpXXlmlo1RXaeSoed1clpV63Vq0jrMlP1UORzoCVuiASlhVj1Pb8e-x8y00C-lj2ijJPBpC9uaX_OlO9hhrm1B6Gq1u_5xj66n-zHZobUZ0Ywu6iyC0BnP83XhInChPwsPtwfTQFblRdBmSep5YppiG3LwLvTd7b5w6XQojMkv8gt7ypHATrw80X608Y_sWpMAfiYZ3_c2RAeWlsiP8yZTftfrt8nGeBkhgZh4mUMxoRO-SsD2jiNAuEzEQSS0zzFUXp33PcTEGdV05xvvCHMKyXI9HvYTcRlIUoZebbqQ-p0ESm99Ql6PpWmAGZvhWDRW5Uw8td4wZD6avjOCxHWdSBpx9YmcvKUpbYL7Jg1c1gPaFnafeLFv4xLOw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="vr_CwrYa2pTgveAn79jd-igc1m548lsmagv2sFg2fCNL1p06LHQH0RAF7VTBsUpWOf22qz6kZijTFs3zpuu3gCpBX4-thTVBGT0y5iEsZmCJ0YriTopVD11ByAMxcXNtx1-WzlebumHMubwczzeQuTnw643l62KMmtsnm0uz5pibQ0nPrnkLOim2qw8mx85SifleOfODEX48HfQIupNNFkUfLBcqso7xjZUcM30C8hlqRtC9KJ4RjcUMIyCWyKy8kKFd6yeAEz8WkdMamTZW_J-4U2aakxhKzBxcW-teXNneqZObDmSzFtBbmdC3UZYIC7esPJV4ABqkGPIDRC4pAHYoScvgZI3BF9bZ_J13gBYqsJDCsmOH56BxuRIhuq0nKSx0z7vyRbIo4SMu4XRtt9ttPgRr8-OQvvC0iOaQ_0goOt8EE_gmxBHDOCSIuTijwuPniu0QDRJuq_rt1rVQJvT_ea9oR59tRpUw6XBQI5Hv9hSXAL86dCen24CJe0LDVDDV1sHn_iYxkLngGe_qblIp-OYJffMjZZsfvI8UpigNmKL3YnxWg96mCHYDysNOxdCNWM0DBs2gzv1UtRySSHW8zC3mJCZhs9WRo_29H__m03h-FFjCCYYPqNvKp8erHBXEILkChNlIFY5rkRkrdNt8YRNjpXxerbm4mPcSsjcCzUj_ToUuuQAMoNBs4ln7Jq-j4fEwG6m4J9IubY42UQuyYsC9NGpVJqF4pU-pk4agTmTyTlw0_-zyEQDUIGJSs7mcXFnEzqmPrymYQ3TzGoNeYqCEMJm7Xu7r_U5zrn9Iikt-BiCPjTZVal86TQZwtln5cKNzFuGM_USEeh6aoQw7rpsdxr8H4MUHRkttctCCiZzbYCSmWT2rF3X8pep9WNWrf-AIHx9F8-NMyvD8azHbW1gZ-j-Iz9a1J7kGBquvbKx5M-_CaOT_QBx0VoCHMP79JUqhTL63Xyu_Oburn_I4Wr0hkh7ExmZXQH3uFvTnmIKnMHVZFOO07UGB1tSjb-74KrGcz2Lty-_epTZEYPVHpPBdCwc_ZmQVd4T-229c64xE7xw8uVgtze9BAMsTXqjh4_HH2OoeadYsR4c8XJYso5OJ9CjVxqMkqYBaygosorigGY00SSryvg_sLsoblqERLpjoA0HfabIMSrmguRtwCtfR9Ps6rKxCs0R6LC0Tr6K8t7-KnG6FiwncQREdeAcEzUbw2i2qEsJv-XHO-ePxGyJKMPHgDbyJ-VL1YkDfrX67ZQb4BP7DthBMZGlFY68B0D89wwgFDEp1lp-frQeg91jk_PtY7nohB-BdZwfk1Cr675Uy5P64TZlQk92yL5bhlI2U5-sP69SyuxOCq6vN6JZt4IU56tDkUl6WBsugC2_9b4-RW1wgHJWxGukFjlIuod3kD284NZDtuKnILwqI5sg8u6USuE2VSXYYkHGT6RMePA5MqupifE8vpBXrD3MZwGbTAhSRhTJnN9mhbZOl8ddyPszOXVkKK5fvsxAUZq143WqwoRv0Xp6pyIy4A7MFgv1iaZwl49_FmqRjfF1QpCIFNdJv4ry80RTjm9n9ZvgJHf6q2AYN5yDa5am5m7fvBwKYLBAPZRjs1wYwBOch25-fLATEXRIpwyXpJ6TLIZDF0Qj-sosjgy9K_cd_cQ2Qeo7-QQrWQR2lbdXr4dUdwpMidFErdtmis7db7yQ2qBGhMhXqBIiuIf7E0pnYtjrygHnW23kYCDF9IVuIgNlLFEzu_QKj1poQQ0Ne0rnuUtNmf9AfKoBnZZAnSGr-HQMcj_MobsIDlHF3-Byws1SzIQd39IOyMmJdo4qY9WlejSwoiBGHhfaFHAHmzHs3I556SVPDfWWTgbqPvcvJ28RKkyVQU6BlK_N19hbhua8JxJIb6iHtiOSDN-aNwDx2OrcNuHjF9g56pVQwzApyY-1Er0KMH4lrG_vz" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="eGygEXxE6CsvyprNVjQ-HffTm2UVQZVoUOfDZIBXWJ9-LDBrWWkvTX33lQVUBnjo9trrEGoBcoS9tHwdgT-kZvnP_1vo7zWGu1GW_BznMn7cxO6lHyTvPP3B6m1CyT85Zi-z7qAM0kufNWRTwFV87Mko5lD1GxGSCcefR715ud68a9QgLB0Z8_SyhcSeQMJW8YeR6ZbwgW-vuUn34Dou-fWiOyvYtDcvnkFXPV0UOqfKEsZHGi5fH-RvdfNExLeRPCegEnv9ndWAr_JKIfyhzkgcfBwSVqLCSBIPsN68fSqzet5BNY8gigLRe0lNT5s8n6McEUlMtWGzNGqPZ5c0hwMONBUFF4Iq4V_mIeRwFCkW6MmSuB_4QdKclr2c7WCbMc9PLkZvVDAi7Yam7i3fFML96iuvRfI9WfaGnGrcOAU_yr3mjJZD6FuIGNzS_LHdzhbXESFLNggIQWrq_9e4OwCNhokYGKL8Vq6m-wrdBNuglfYnNx4S70U1Xhj7cJgTB16dy78huV6IjgmUQaRiZ5k7gOEHIQNgNvY8YBZvIxPHxoTfiQOlvqTRH1hZyJdPfOf37moeHb4L5kz9yAKV8YHi6IxT-D6jebiPKy8FGUNjGxQHezjMQ5kxk52yJdjQ_0s1kj212s77tK6wDVkrQoSxzGqrdTjQB3Up6OHT6YfYqpSIJClep8QE5SKAw-qK_JZ5TIv1uOAB7TG_yuNeGnLT3D68CpNK3oMGaIfSvvT3FmN-rYkAKGMWiRQSBIMfYM0FZrdPHma1W7C0U7Id9oED7YDeT4Ic0xyCI9YeQF9sBVcOsb9UGs_B7HwVR3QZxhU_pyOC-4NLPDa9zgkToc27_RSZ--9nlLu7gMq5ZGSzFqQ_F9pdxytpjTjqlc1H9FmjMHnev1NVX1k1R_fc5KIuEGj3sBljUOnLqGfm6pwS11Uc7b_fwzusA34HtK4CSG3U8mltoi5X16B7hcqPTPNSXOGwoe3BkbABOLMaXifM2Wsa5MO6wT-DR9HkvUSZvKeg4ClkUj5HBzF0UHPgNz22STHM0zH1n3SmNeKMvJ3xbzF1mpmWeULmKichdioIKYHijntlqGXZC31zdM3jjbrCS49VZBvdUEl6NxiVcSsygFVDa7Q4LIPzXa-beTWqAhZ4plxiqy82fJhWWmV0xpIGdSbk2jazRMOSNqDhNR2E-zUW5nezkp7qj54TCDmhMKJEs2JcQxYefqci0XM9RQRYL1q7DkcyR5_77Qk3LjarvHaTR8yM4VHko45kOtnWJ6ldpPEbWeq7T7vF_C03svVc73iKxyRb3tXbTDIFUIY6c3Nr3MW_lQ7QhWb2vUpCx5pwiQ3dv3R-6j60oMf6dEofcN2RIVGUnFCaMEdxfCQBa9QD67wjIsr3-88C3z6q_zuKLLqvLgBdWAEG9tPBVTQE49YvNNLhb_7il0I_j8m30P_oj0KcZo5koN_LK7G0zGEXelR7sOHSn7YvWLwdBBXcewjH2NqPWv7M6KbSx5xh78Qe0rgh1UigVg_i93njINAYgrw8Vdv5c244CezvbmE9wP6EQRhrIN3bIzaex5GC98PPXdDgiH_fwwjjQRl5XitwO_av_Fr4QP5tA_F4w0TtWCUVHpBZYUix8RX334UlYUSSD4g5QgF7iuyXj_D2gx5QB6Zpwu_aHvsgpAtIK5cA8Lu5Z9oCxn0uHD-ge_BFnAGe2UfwBHuhL2W0fEIGTX1zML4yM6YQ2cN0p3MJH7IqJXWOrV3VgmOja8KN5VGFseaNehoJvjc9AyIWALEyhgOpbgjnhcHAZZreciShSZQcjGaK5-02WF_3CLXL2-BwqOZkmQjQrCNa_K8uUKDKlftFdtUxPAg7P-AUWVaaRCIqGJYklOvMyohqdwCURw8VNqBjpx8S7uymrzWzyC6GsqEngDGhy1SlefWrVKKYGUNZBXcbLzi0Q7i_uZY_8hLNhMzTZQ" class="dir-link" target="_blank">
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
            sessionId: "747999aa-2706-4b76-bc27-0e6f18783466",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"2UHBHO9LAO7U4"} || {};
            
    
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
