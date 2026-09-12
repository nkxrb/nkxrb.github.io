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
                                <a href="/kw-click" data-ct="u4M2TNNJsHQNoXQvYodPj0aVeWzs6HdElqmtLRc2sMFBoY24KajyaeYIUKfIJCt7nzax0SeqGX8JK6C_4OSpO9DBVxsA-gWldydnuMZDuyE92qL471xIXbI0CaDogImevsaM_edwyXFXQ-trilOuVwLnVF3tSK02iHU4lWwpadRFP2swOig1JAog6HOLLl3lVNc1jWBUY9XXIODAcbTo9C14qmPWPI1T4L1LWIKn1YTVzCUL9ir4PR9sPF8foFfbshjs8PiuW_5hXjiVLtqXzXuqQE6e-S1fv3P5VbQCgx1-EoHzaZ5HJuoPL05cmvIPSyMq3IwvK7CgJAzSZo9MTHUe-tkK8BoHmUXa86qwCfmUd_r9Lb8g6G23p0DZt76NqV8Dhq-dLWI11969Y6UXyf3heJvoWNYaSfGUWI1S0mWHYuIOxW36ds_iInIXtUYZjYl_zyG2WOvbOFdgkRn5epvPOBWiH3wlaEO5WwAD_a3QCTv4Jb2e20q3aCgh9yYWc87dJjXZ5-tzSI6W63ixY7IZjeYb9rYbMsDKGomcQkneE7hXYCysCVQXcFAI3-SajSic1dPNrzVZTUpgb0OS9rkLkTun2H96WHoVllSIDT2Og4QAQHyFrxRx1sYimuXu4QM0DtNvvNa6-811HO6mA3A1eGr9pVK1H2YBxS4PSEU4mXgkLum5V7D4CH9o56_U8qBFidrOACKLUCJV9DiFYn72O4BFfDKzwbbfwRTfx56u9dv2sx_CrAlubgdbvAgz5gqlqn0Zgq25hJuCaYkZNWbAtzenm2t_HZxhRphUP-zxniJrTggIGa2BziSUJtyNSl5t0eCLr21Z63wdVGYHuQZxDk5-qc5k_qXPX20jhoWAy7iQMZUWUVcfbazCjlvWtQEx45yqRBBR1l0S_7Y7pTgTF7zFHCnGHYQsj9PbootTpnLousvz6DJWdQxV7pOqfo5UK7iqKMUzUKYEhRYFqdjraUPVeJzELxKHl-FtGeDOwNd7R7y3FRNratgIFMSiwDxDAmB37j0cnzUks4j1x0-XyNI9iTWlHumxcUByEi_VG5LPpkIr2yxhphvbgDahcdxeYX6V8M6Q14pvtEfMCVlrY0d4eWS58JxlmpFJTlqKhgPc-5gMFu6SMOQp-5PWc2Vk0SdubzTiyX70MmxWfwK29lrR1R3x59bZjeoLYW-bMZJOHxvJKGzVFXNT6LHMQaJ58X_kgsEu3hLmEH81A8P83jZAXM3KLfu9w4Df_OhhDMAuCtIJqz_HWXobKf6y36NYgZkVNy4On-8K7Q-nah77J9L93C8afBjutQvioVC2sZ8OxSMSeE7ALOwfs_xBwSdrzNuyQQSAfeCHDcsfgH4mtZ40fgQmU-OWVfdbOUtLfKOjsmQYpQcyrjguszhAXgrd3aXAuKg-SLs6ps2KQuy9TIkNMNxBm93xh-dqBcv7zbSXJhp5NKKMGWUKZ9Ky-8S88gsFVengkf6pJj2D9nV10arWZi41o8EJdZYoH_cts03FzVn4RiU-TWYt5Zmasg3UXhDLMbK8aBj16JT42HHxdqsxfd0aM-efcMgayKUvbKx6C8f4jj8sPXcA0RITqQZ51sN3GZLBuU1HxR-P5GvcYKP0Nd8nJLthLkSJEvdxMKQu1G8IxfD8pavx8IuKOLNC6GjD0y4qZOR2zDTd6IYsKby3C0ooXVn5lyxffB-Y_ZBMhOUatG7jQUwrpqzWVU-KfknKNRFMv1umZ-jvwIJkwzQm3dJdBs25YHqWICS-_7P_IWeOHwAyc5f4JDLIV57vSx-Fl7MZvLWqx0EXwBTNFXzGnHjswIEn1OYmK_PqKT0usi8mDGUYWyuDuLhMHcJz04MGIlPZGwLTyLjgSerR5N48uHWT-8IzVsbdFuPDf94lgn7fMdRJpc6SnwuN4x9JCX_F-z-doJ1sZOdG9xs" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="wREwdpi8-WJLkaKlSjo5TcG0jmjg3WjzM_mbJmgXWQ8jMchfP_SgLX1XEGIVjz-Y2YxESgmEJNKACH1mIqjsP7kSQ2LMm2FVwjCDbiirTwbqBQUmu3K8MMvzht3DzPej_E35y5CEdTMgXDJ-i-UCwfLUDdSHLfoS0rAuRydXmh0D767hS9FzhdjZldnrWGtRh2O_211VlsHMRyjOqU8xeSRA5zfPQQTbrU7pl-CJfAMzhIjemiufkD-1-mSH7r_FNWsfWMfyCOkMLQDy9Twds9i8xi1zhco2ciyJR0B0JgbJCe11OsdlOX12E0522Fy48ADqHmTbR4uPdhTRrt-Inq7_6l6XoG0sGk-wXZOdl_pLDgR0j21lK5khOL2Ww4Yv8aW5Fh2xdutC8FPk-GX3AymcVKTCziDjbRLxcjL5-2MDtjg8QSVGlhWMmmK6oDB8PbW0KGzk2mh7gIoo9czjx6Po2O83cOykI4SUwvDmLkWULUU6qvaZirk1_tNGuotbEtBj8wHWIFAo9bRoVTQVsc4BSP1jgbjPI8ztrIlxynC8Ljx8yDu4twqcRvAEao2G93IgBX_slUaPkz4YVyA5b9Pfkf3pSQ3kT90l4y9I2pVDzWs6C7PHgSFz7JzGQ3IXcFeriaiwo3pXSE1fNGJqDN6gwXQNtZPxiKImv5YiRkddiZpRfBtkz5qQa5OkQhvi5sgFeu1Ijvhd35RqhRbJKkL-ZrkLF1yJ07AsAMOBr5fotKZLwc0RwJAoh5PHvXiPawu5GRRIVRi9GE-N0qjI4QWhdRNObtRkra0He8FD4EkiYKhup-VpvfTk6PmSHaOKgI35iYQwI8K3bOsQPVrlFo29Af1O3ycjDsVnFGoxY4c_rtQWONf8f6yvHdaTElStudnSCwb1sX8X3qe7tSYRBqHOHowLtHCLrN9pgRuuqJxs69yrPIy6g_xPZIDBP5bnv-r52Zpra736h15L0VTGdN3BwZtZ65z5nOioZVdheGe8Q8T0lvBK5Pf11rav74TcZvifLZcmivEVlNYeUDt5x9GtChrbAbcPYyWGNcqSRtpRWUKrgHRlK15jQLyj-arZABeKx9ZnfVUtHsu8JH1DftvoVAz5E3lMx3MLdKD7VksyaM-AQLptQ1aYnI-CVu_4fRf1NligOdRfXomNtELbtNKngeZaod3bBcoz-VnloDfG6-MEtzyVW92tilBBwNCN6PXbjexB1MmL7m4dmHCPeOovG8oU_uzeW9H6csoeGtUQGkKUIXJtl05sOLd49p6wLH3pc6q9kYWyx9Usp4A8NmiKyNrufpCp9t2fFSb1v1dxBsSoOt6N0v4Udw0EkasL8RJtqa4ZfwhUqal6Lkt58IDsdvy8TjOFkic8R9S7vMW6WGmfzjn3JFEGs5wN0oAHP4FcTq_GoGLRtcY2BE8WCqhKiDhT3cf5PaCKpT9NiqMspPt-s-wDI_PXIF5sN5Gm7OszwhS5edfRLVjlPInytIZD9JUDMX48QQklPjK3nSOjZBG8LBS5cX9HQ4B7OHJTKnjrk9uQQAuWW0aZJicLGzKzvLRlNuzHoz9dCBZWp8tmdAlzEhx6OkPACpw1eypvmhvSPBNmVWA62ySfvXPsMzV9iwfGWl840iVd_pC9utPlGDtwBQTV8itAC0OB8PQxOMz4gz6mkIz43YW9Y-ufuiCjzHf23_l1GM8LTwVbG9X3gIs8bg6LogzqIp_JrcwTVqEWpWVfZKEbRIfYdtbD2OHdn3G_8cAdZj89tBcIMTLyyb4b6MfpSGfD7ILDcvpczUKxQt_Np-j2DBiNgCSvJG9Xc1yceQr0X4mKGOJ-5TcWqzeMeE5Nqg9yd15RUfK2N_Ky0m3srp5-kE47OrApwSah3BMkFSbSyB0IZ1Q8lSc9pvexhdXM0DjOYxx04kdQJUQsXPsn5Zdu6PElUeJbyBzNc2fE" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="QN-3KoyMe2L5h2q0HPlrDhFWBu1l97vAK-qLWI4SR503LrhzBFx6ZBE5_yF9Ilzt7YV3rqZHP2kLV-i1D8rmFprhFKbVe3Kdzl6CQWco7BeKiUEc6V2g3cEHAulTTMIoIs05bTk85pDtx09l8Rl3U6M338W5LNfoqqmwUTtmj4ypJ3EThurCbl556PGlwGpQlEUVDpuWMRUiZ9L7CkguvJ206Yx2S7MDQELEqKPYSsakLY2NIrM_gdFkPHZd-I150TbSu5iXwng_KkqvPPq9zd2z193zhQAVcn5d8PJaCP2y9zOdCdqSpJ9GHnAyRr1yY4YuhRAtfwGLIiffdSFPizwXmXmE6aiW2avhgmsL6bsR8GSZGioF5LQ_y2TD4-17kK-QzMlxp0VWuk97R_mNMarZidKucQLuvTkK3sJSMW-ZR5ThDA0-HjvRVcw1YQ5m39ov1WBo5kOkxut8o6giL2TD_ITCqB7SbUhCYm7QyvQ3MCngzZ2Pp8KydZIZO1NRquBBNFMzOP2rHVfWZhmbO-O3iHbNe1I9-6NgtfATwd-RdsaE440QISAJv1amq0z8C7SHcCVW46zgIfPCVYII5Fh7qR_5diJwV79mcueee-YuM54XWShhoaqF-wqTbR2OsNBHiUYoqmVs5-j7Jak7p-SnQJ30RfTXjroG6prCHfY53nA2Qfuvf1JyLkd_hBZ_bB2vyu0KZy725y0dFoZQqO8LAF2q44KADGPBh0FQUhYXbS-G0wkjHq9i9Ibgeba794MARUNO338RUvzPNBxnV0V5uIYaTzDKSQ1M5CdCR9BxfR3Oe8dYS7BU9dMonZq87SrNgpDQKLNOaDY_wAR5CBvCVIfmCtT57Q1fRcHbNpEdzHVkGrzNFk1fU6dVz2ZxqSXxPqnlAWnm1Uah9QRJ-uDT-Q7hmnaHSRHT9VcXluacqMXSfdln8Zpez7iUXCN9CIrZKMNVddjSURLmRRaAz2FmbzuHs-RI7r655AKq20VzArEaSA5JRPpt05Nhl6OvFxCcQeJi2ppWUVDx8J1M1iwRN3xagmyc63Gig-UPi8FMXXubcJqanSiJymDJd2oJA7-KXrmMHx0PklxbaFdwxrGK3cKZFC9J6Y60rL_xG0loSANQW3-xrgzKb_i2VeUWKjucpq0CuW6Mah_ZqrsW_3ZHzXx5jmGjDUCL-fk2TmO0vZO5OTWubmGtqZRI50EjV923MVJ66sWXTK4EAwEP-CtN5aNqJzytAULA9iMhJ1AhJY_TLm_JATBgUKLr9p2lkw1meBvD5sC59zG6SAkS6qzGoN_6qoO39FswZIqLuL43diMD9VG3_ftsLxabzKZ9vF7HTH-JgD-zlPTMtTzexrtkLjmIjuV7JUYjuuyKBK43DM56Een-osWJeW_B1n4KkPHXU0ScdK1n4pQve9nOxoslMHgmpHxOcddM8eFxjCp1h1N83GZFPmI_30h_aKA9yyS3ViNVLQx_awEGXFoY-xlqh1h_a-TY7qtvsE6fUVTHrmTC_Z6_01_FZ8I7oGwd8WWYb25be3SsaaNLNxZEIG6L5tLYNGOX94Cj5ijKb2wtTZzZVWO4qbl_0dSWAiN83QPk205lVNior2UXCjP6xrKQ9Mxk08sTeNocm8dU61e14iEMB0WIwq9XcBE71OySLdkoVsNgJJ9eK4DI-8-8sc-P0Xo2l0-QXfzOcYL6thWvmkQiREQEopjktCx6lZC52UT8KGDNuoM15u4tkxmNItQNmgEPHYBfasY54yS8z-9r3vv3faxgnXpbyEObo5_s-BnEyRls40yKQD5x4Jds8yGw9AsaYib4LSeWGuip-5C3TSyy4I82AmoFW_1txowpYhNF4d_7HeZs2wHdjOPMGKpb1yHCn46S9X1othpkf3yAa3--F70pTZaP0ZThWk2L73xJ1V2Or64Dnw2V1jKoT71rawANphI6yOvCkJ7xrYZ4" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="u2bEKq9xCRiXjiQUUpt0fhw9ieueayDRX3OJGV12io7fMrtRuH02Q1d1ct7eEvd7oZMjLDNIytxPK04r9RyOFqX_LP5Cu5OY0OVRK3jTJcRcDuympMohA0tIwOJ81mDL1koEXoK_2mGYO8-hzx3xfHKfQKx7TrvHuMvtVx1iOYh_BLDfU24HKyn_87ZF5rgiarXhKpXDZZUossYNe5y0C4GYxdbhbLjfNsgQ0MbszxZLBgB2bdfUlVnZGJvdnOTvb6Ic9eefURVgEK7QNsh22m-IBt4es3-84KDAoALi4C5wSSyVCpzCK-8qvGBJDV_35lXXLVQEb1dtyU-4hEo4iZekm8rxrAOmb2vquMeyW8mscDRlN3u7ACilfhopDIMLwpDfwfCAacRuxrFMxOtZ3J55SeE2r3la1Y349NjhaA0mH75u7y9SxaaMHGd5Tyn3cZuDgfjAmzhbXwi2htw1zAeb8MmR74h_4q8zwCPSGdosc812qI_eveI-lYJGoxRsC7ft7diDdIP1x8r6JemN_hSWJKyMNhNea8lbKnbviibBrOpJd8NRzBx5y3iND7p63F2ysTqeu54LOLgXnAPjVv31_BOIwQkiJrCTaNZYzDI-1mKcWpjie05w-x8ROzKaXa2QzlpmzGe7cMca2xTWE6t86OJWrBKjOHQlzhgZ6FDomSoeaK3LJJT2pks1KWk-FhRVN7tI2gC-vc6pjnXcR6kmk9LyAZwNJRpJhQ1NqXDj_5nhrlYPeDZGWFpG6srxAYxMkJG4xtlXVFp3W2uQCz6o2BM_zbsoq1bcZpIz7UlzrKCiXPnu7EB_9r3M7-fk89IiiaW39bKoIzjxWI5P27piKlVoQZExCzN-Hi-C979uIjtALM8BtA_Sd4cER0GPGJvTkvBRx021SjGtMryZ0JYd1bkJZEGLnnVaAJeGQ-WmroG6zdVXfNzgifKkd6nQwkcApiLGmN6JeG9VQvDyJLYfkcNIGpi99Ox6MUBYB1srZL3yP0nxXJgafRRf_VqCI7OhMRFhY7mL0dtxt-lheZKwV-aQp3Q8TTyiWySofO7nujQZVQ3mPpvGgeSAUQ7Z6_JL6k3g5vD8ttcbQ3ntBVHzxC-lQs7VAYUhYX0Bsrjin4ZyNiu6RqC54Lg_x46dIOFSIwymgMgupiRiYuoXAS-n3nG9SJUQZXU5xmavKjqJr_QkZZL3At1_PdL3n9H9ai3GM7g3QkmoJLsOWkcsUCPFETmJjaOiAc0pYRR5PNiZBf8WMrYt8di-rqk9Pux35dNrb7LiJbnpB4_ZtxRRw2m6wSwZ8D5nR3dYR2knTrXtkmrIBNSRXOE6BdCe8AHAheG-3XBdbbDkz9DZlVBEAwVP6wZM9qXcmkHKdqnHG4OdfKQx9a4k0jkD2BH6FueoO7NQ5370MZG9qE4ARc271wN6_8DqENv07kfI-h2fob2Q6N6ZWMS_nOgNcftHEUOblu3moOMDzTdFCe_VIhMaTHQwTk_b13g4HM8UT72FEPmnrKYpco3f9yB3wVk8UDkNWuH7s4SZVOsh7bC4o7ehSw_c__22erz9FHQMI6adOZpTQ16xFKPhkNnrCHfTNrH-d9cPwEfO-QstENmEWgL9Rj4RqhdqW89ll97pTQbPKdiYzhyZAvmmOQcN_R0V6QfeOaCtBGzM2p05j1LS2oOpt4WV1NRaWvv7twSk8GgIN7JHZSr390YdZ9VNGi1rEiquWoBXqsH4fKIjQhoZ6ZCeXvHsC4V74shkYw1ZyPQ2nKULiFfNZaJ2Jj_Nl09Wz_AEBat1gZl7cFbjxI-kKDN8V_7X0xRvcLygdHLZcwkPo-h9A6Z7sTxlmKpOXMmQRqBzU_QBkQ9NAW5r3EkP_Uo2mvJoucqyAaaUaCUpjiNuRL3Ux84_5jQI1-aJH8A03JMT-_nIQoMJ3Ui1RWmdknaJ_9MPhHKJ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="Te0frSKAd5o97JYs17vI-_PqUQbjWQPlkITpcTQknt_3XHCNzs_dW0ZiWdrebzUudKyQo7dctEVq72C74Lu8UMiWXQDS8J7VAPYwf3uDyQf5kpmI3pDfjGrtCahQMbIipmYW6PpfS0jHjE_Fh-bvswys-U-4RHACc1_-9Et7jKkOa2Hn84TrtF-JlUuFwaufkyjA9_3AwOKoDYDefLjwYUQfbi22ZztQmjQM3b8I-7tEnADatIG2VDTQm48lTQmpWJCjPDP_c0Wbbb7HjyLHmwHAM8hS9GRI4gl5xtvEx8iKmhWuc9yQgSZW9lblH9aUmxqz1ChTTbOFRy-o9Vyhx4-1FmGcb07AlzEqiPctVLz19BkwqC0s1LnfWrKAimv7URcT-Yt-T-dg7jrAIna-2skjHjizHiGnFMTAjHQTGUOg5SjYPofLQeD0wG1qSTNHUQDJ1IOV-CUIvp7MKfKpupTwrH9wrjdYO0gTrG2AFpjhCt2tpcryQ6D7I8LY1hhdxXiVORSZ8vfI_j-PTm_pVd65_jWLmBOpbVaaI7fSvEwnZ-m3xexeYxBeJ5VkLv1uQ1xNdf2yhTASAxFKe7bqp5HgtZvho9WFnuMI1ICRdC7olKMTsuYo_fKuHGANrgnoDc6kbGAgEfIli1Ni26E-0VLJ84meLn-s6aXEqemt7DoZ7uRHNIfZYHN3B2k13n-R7yuaz9kFJcY_axj8Z1x34sDIqfB6icLxyD17pTtFlwN_gTpJDkDtRZMfkHSUdIJsg1ycDVNa6mxlvQ9wQLlkX9j1-F8lwBXcX3ErUt-OV-rZqb047hxhei-96K-qP6eF0xohVlk8BbbN-dl0xtxIq8OBs4XEI4bb0JF0hrh1aPPqlgragLa_rdtQT379osB6p_D1uXd36jBmnb_ySbBMX2QQVO1KydgS-Z_RK1-cHw2AJ0AjqeIx0RllkoIO3RCbaAqimoGUWkGG8NsysS_y3gbE31kPlcOIVAqGPAo3zJejzgArFBJ9oAv05o5jOoqcefhU6OSBZXLa40Ts4RZBO7oFnWflDUGdeC30peu0MSY4iChPEEE0qc3l6SmQahM1K2vxb72qza68x8q009AJzD-oZHfXu5SMK8wAM2Mwa4TJRlokbyhfHRtEa47rpZbLJ_Xgp8eZjK5CnWHF_jqfc2nf-2Bc6YqZ_Ml11yPLi1iIIOk8A30NfIyb3YC06AzOge4IQxaPnFE7sWkzEqo67DE0DDf6Dd_SwYvHvyPblqajVnNGX2ubVBQ8WKDAZaMRBpZ_BVpjaPHoJi-ufw9_U91DQ489tLeGKRkEIY3Rguk2eOLcdV_6MvXQ89ggxyMsc-maHdG_hmhnDz-Qr1PCpwLe3QzlfzIgmfzrJSwY6kwYLiEHMyrULdzRpKpEyrvQdepbv7OfFeqTHOAvnuPyjAXXEq9g1SA6BGa-NO7jE9UnSUu-_UWWUrfejtG8Y5APImTFByo_Lbb8QDb9Sz3_TdBK-uFXOXfJARyZMXLCAi0702ui49hwYHxd70ozvHB0QKW5rWA_zF6BbVUwJD6knfqhcHD3_0mBpq57N5UCs8pjrgAS3etQdItFJOVppGXhnQcSzE-ZLoaq4Uy9-rZmuHOLUHcBq8H3aNxpa8Ywh2yWpsBHGxKeRCskCCsBrQ-ZBtFniGXTtiNs2AJmLcxUkIf-axjJD1fHU1olVZJFG-I9rHgkdQlDYRFOWwVcXp8WFZdi-KK2MTgzhsLMV8jPNXoMP19azXbaqmHdNuyeeCDrtFkevf53zQTrzPSAeb-clVPHYqQ5OnWXveGjGrUAUf143fyddn8SwegImJc2O6UJZeBzDx9Guvx1OzLg_mgEK36X381zMdGXVM6599Rgg-CmVHNkubiYprahykjimt-EmXqwGtHThN8ORbwHyBfCw0eAPWKU7NbGKyXpK-b_t7gdbQbYPI4" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">cloud storage solutions</span>
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
            sessionId: "6cbe118b-bcd3-4f3c-9b5d-3d047ae6b502",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"59Q5POPLABEMT"} || {};
            
    
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
