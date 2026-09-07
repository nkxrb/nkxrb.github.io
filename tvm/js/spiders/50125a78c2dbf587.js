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
                                <a href="/kw-click" data-ct="JcWfaUJlwSTyul3KC5i4_nxKkA3B2lL5Z-E7zXKA6iA8ppiIanRw8E2Ugk6UHWdfr4YvkF5ugz1cY-lXoPNIDlIWpk_1HtW8D3sY4Zd55Lk8VmrcPy9A7ObhLNGgkcVV_FKSwmYq6kVUgl2hUHK4zQ_JuRBzURCOBAtmvZiCOm2JplWJHvJEi3v0e4Fe0FKyna7pKUNbEk6H19G3aUVFetju9dM2qBAqzBM5JV1CGVnSRNrGgVeKkqnZGvyd_WBVFjyQxKSLCag32cgc3de0iAZJssymVdhxV0EbLPYepUWXypPKfaROFDv3k-w3cqSoJEUrm4xx0JTUB6kASTc7V3O_RPqBClaH5W4A3234S8pGtntZ4gu19pYEvZUTA0-aLXy8DMXSzZLtHzyG3qmkY_H2EUDW-garRJlRpUAK-IbMXHe2LxrthNEXZ7QP0a5ogkBJOBeD2ifxDsJg0hkyAPaMkmVakmDKRYIUxraeNbPXN2lOG9PgcLHhF9AKB_FDuHWm7CPzQn9Tio-MA8m-MAEH1hYIAJFe5ZrReCw56D2p_juH_E9DLcR4616JcEUSYHy8VJVdAitny5cbbtppu0uJTmkuHE4VggjPizyGaR0XMkJWzEi-J7X6lfCxleC5Hbv3XqbzkNvtSepRDIMlc-bKGqPAsidsQYZhHzKMkWhCvkurmL-vQ9eXLLJolSPpb9ngvJ4vG0ctega1__lZ2K81sYCK36QdwLUbv7Xh29oXajt9Y6Dw_mJzvSXpp5fgLXfwVQChZBFAjT7Ki5Gs-Bbge6i__v0g4fAGXdMVVfx-IL670XFVUxNAh6pvSKN6qb3-kNi35hWjpdKTT0DFzRvcEueOZo2M4HgzZnkv9qJzOLLxr5IzbUC4wIA6zWAd0DGGzS82izc7d8Q3Rxog_uuqw29Ns5MVH_IDOK4BSkbjjO-y1XrwW2yC-abXBRELTZ-GdO5l8LFOOZBhldPPFm4Xo1nTh4Aq6oGNZicmWQWapHH8CB-QjIP9k2KP9W7zsCTfxGx20hHHIq5zUmOvBM5SXfoW-K-MGx2eR6KmUFNzI1md6m-PQOCMu8MmP2dwcVqz6D6Wxi_OURv6w4u1SGscDCOaM3dCnYzllavAzed-8BaIRbY52-Zflt69E-skp_UMaqri4huzLzSRVmdstT6tzEikGeh8_qc5vrqoGP_8XaGejDGm6fHmXCkuLmIl7fVkI-OT_Zb4HV3NqnJW_IR9RK7J9ueZZ8pxtcaxkXFLsjp7mFuysvqESuJmWGRtzSrv7sINwFbIE2bPGseIkwyMSIyqxdXbznCpKedXVlHmJ_ObLdZBp6MCXJSGK5SeoUyQwIj5Rnpb-SNtUvgUYXw02TGtUJkAG8YINb-Xo7lDQ28KLUNGpaKo-dmnBjRP3vXm8eO_YDxmTCmrzG9Ksu-j5YnDzwuNecE17moMEkYhVVZV6MQZNotHzhqYG1Cn6Ff3Q7rFW8n-wAKR4JesAwWg5P6dmtbvr1GRrdtT_R9WNTdGBr6B7o7vkRZLcegamk3uBJ6q9mvXbdbEC7OrA9vPK8CSvxkR-HFaPg1E5TaGLqAgAo51gIljEb8pPQ4MCy3W9OtqhiMYhoYSNyQPmJKYMUt63EvQYim4lbG9_p8HvAKIG240Bnvok_Ncem6rhCcsAyZl7YeZFp2Rfsw81Q_c3ipmbFkv2frWS8LCtbJ1HAISH4gNwSv6_CwTSyYzL54B3ooWETTTHloXBEv1gV--kxXVwezCBDgqS6pwFBQ-y5ISHr23lpzugFhXsTvfDxQn3iddH7IOpM4Q7NcDFvM31b4_hD6X_TRTbLijm3WOgq6Mwigx6s74Uiufq0p-muFWWSx_LVf4qF-N9Xb7d_3cmw7NnQl9OHb0xjdtuWTjncU5YUtX9KQs_oAxJsLB_55synl3tG4aazpRiw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="u8hgSArxdNqMPrnht50QwB0WReW1zwy7YnFu2mxU9oC5wcHK1fX-aNJgRa9s510GO9JIaKHDrKahmaS7kmsvLxDzwd-B_9xRYCMiL3FknZx7V0EKfUfEpVbCDRwgT2cyUTeI2of-b8dAQMLk2G0NrbedXINOSqpLH62a_xa7MWjkgB9FuXJd5UrZA0KiRkmP83bLDF92BgoMB51z7gY8RwONqkitothZIcqzNNeBlbF7AZI2cuxyDd_dlAGCVpcLEqvkeFLsn7Gr3yfYtxyNsyBeCvAXP_y4el2XUsKQkKU64ol-A4cSN52vXUKm1rjMy_3os00k5TCiIaDNubWumdHYl06hs3fR3G2O-vnSYYjfc2Gam5kkLecZeGxgMRSxiKPyRm-2LUlimDLK3J4-YvRpNEMTf7Lj5A6zZ-GWViPs8HTlAC8rN_gg5xy0vn6EwdzKRnem3l40LIBcP9JaLuao1SuJBpFAoK7OehMgnLt4Opozepcs-cja5tKUulNmpcGRstA0P3oEUC7b9ysGN4qPt4pRs12hL_HWAvYMBBsGYkNhggmlo7QbVmrB0jjNXiirX34YWeHLKO8Urm5GVy7T8V_Z_wWcCOJbp7o2YTBcxsXkmMQyntN5JGAKHM5wsk93vAHU7aLePm-PP9RSOOmZ9clL0yrijH_OZUd8nzaXkdr_ec3mLb4If4y8XuKuacCk8GNS2R1TKpgSc0zNB3iGJZSc2WrxbTvPCIjYBmLz3-IG76Dgke57BYBF60hHhI8LLTeSVZErf7xaLnVRms8V1jgGsxqoWmKw1vnYyTCbTYaoHKGa9VB6vnetlY3lYEYdygd8dLFP4SN3mAhNgOZo2p5KjQ0pKneiBOPsIVpgUX9d8aQ14lOlxjFztJ7fywYJmlsC28KvgtUyXmeI0aM1iS6DCpEvkSrjPhVvYRE3ijlVID2vOYgpVj26vrk4BXkpqKNN8XXYZT_U0aUkPMBFIzh9MWyWKtNpnksMHVnNvpkjOLQQo0Sk-Lpcb4CRezBB0WcF2buQqKowKXRQA6J2rgZApjdYZ_h0mCqr_-fefRo6PgGnFa839xeU-M3xQDIqaPMZHJyScIAGjfFoUp3ECeqVBYcSMhLcEvnRvZd_WChx_dJgpSBZpJfY8XwlifQgPGg_zlCTJyKA48P3vcyUVZKjnHs1RiUm8-eb3jZ--YwaI-iy4Yq2lTb1L1n5lDoz4yTE6O87oZX-HAC03Y7piaPCgtNl40pBqcq9IM9Tbn7WJNzFTARZxtneVal3zskte2UInIgNo5WUOBC70j9aoc3fzUMu7QB5Wi19-NRAb_Gx08xyHIGfGGDW4CdUTOLIKzBCeImnD4IBZPK1D3IyXBLbXuK50uHRbGNgQIh0Q6BkcCyPU-b8ixrZ-5CyjpHMqeuyPqItTdBqWdP9sJxM6-CDyLUZ-mc6PxvJPZSvixok_-HAnwajuztNjULRtgm9FisoKTtFGkTHY1_19eJ_bVL7PXnxFJEKZQDQBXimryj1Gv10evZ7fafEtjXedJ16xIzW0EQrW2UA2jFE-zu0kUZTq2O46K30TWlyAsi2ERZ0V2RVKp4JK8AyimECi3cFd06IVnW3ryPkuYi2UKCU4w5Ji_kCkRglqJi5bcsID72qE1Q4G4_9G2CIIRs0n3tdcH3nsTXxFtCag5JQ50gkon5rOYsbzvQvtF5bioF32M1a8zuKA-i2_zzQz6HJx74BlYcvNm_WNESRAU_EIl0VhbJ1yhWAAqfuSfbPwImiP02P5mxw9dpf1p4SFnDncQUE0fFI_X3PaxExaBZkh1zCq1hqhl4zYbs9HYICdOdyWFotZakXwhZr3lJb5BW6faklws3itFme4CKCPOa_gFlqmOsw06RcLlTdu7krwEGnY_yIA_-TY3v7l94sKQx6so0PK4Hp0FAl0QCFyKS-Pgo" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="H5Tb9wiKsgp6ZXWJGuuBqXC1m1WiO1dbfCRTPrHwLhGabUUi30Ge_ocmCejqp7Ci72Ib4LFIY9HO2Owm3yJIQ6Ze0CWyPj5AQN50SebcIbDABxP1y9nNAZNJzncoEN9I2ERdeKr04W4EG8BQU2w2YcdClHB5mL7d_jvASULkChx1CfFf95hyb4pgkNBgRoApZVDCfdbJqXTcFH-PhMH7xCc06xWM_7Ke95Bp7fMsbNtNO3lb8KezVccDhEUK5Oj_j06zRnKi1xccGGna0oFGKPyClkLp6mEviXJ-ODC58KLT3ejoHMk28fD44hQacBsA1gIqVDSVeDmT8jQots0jn4DSuTqTKvPyGQpawatReIJ1YbieyR4I25d9qKCSJsHpIp21bKmmXWq0PevP4YeegYQ23aExuq-RkxwijO-fAzdBLlmgG7w8I-GB-tDjzeaVwIbVYaZ9dH_AJxkc6ClQMt2HlK5MeRBIMMdO_Ej-WgkzjEojRUnkdZAtYgZpRFpVPqjLKaRve4dIxM8laOM4uHWJIlxVn2Q4pwaucYA8xoBtTKgERrZ8rG5P6PQ7zYBFi5aG_u3l2lBItmM8j23DJdKmUhPrAFE927OFApqcysOHcqJdjgZ7CLGbWEq-VSGFjI1gy1eY_vkoGrPjpeXPYc7IAgRHGSrd62r9WWOrgzDouKxsbqfjTi_vIS-64rQ9jmOPEHft74KgHZ73VZ-bwM98hsD0-WaPROKXi_sAngKnE7XeQEj_f6_AtLYnxiMjeZrFVUIParwl_tODW6TGLQX6Ae0-EnDBvVISul8BfpD3SoUI0UZOOYhBuChUqmNODpx4x090bHnEGtjEJco8tzDffZmSebIV2FQPdNM4fC6VMi-noCkU9Lt_fRjmpz_i_uHlMYWW7_zsW_L6c08WO8WPiw3wEwVSt5mQT88n275mLin7cMCM3sOOoDh9wMSf0mwBh4SGLMtUR5bHtsD5RGxevfEPq5vDtb2Vn2kJY9QKucnAFkDOqT7bfpVEIFvIP77T-JEN-Ck157mn763Z2OdbTr9hlRFn-327YmRZT5mp1PRoXkXvd9CskatqVmyZKVgM63u0RCeWjLyU5KrHDyD00jlpJN_1hs4BNmemFbCRLKS-Q1f6arBXTkIONeJ-RW92SEEGB5P0vyg_7xUl1xO1VYfEZ9wnk3C7GqdyTZZF3hWp9Dfx3JzIS6_x8NqIBuXyvGqp9SirmLjDHlPqHTXluEdEKlfmJY9RIZTza1esHVyJic4tTrDmxTU_HYVNvBq8PVnSRoZkLxbISPIp_EiVq_xMUs3u674y3dFL7H6h5O0iWNy6P4bkxcyf9q2UsShXv2mm4fuLABvuzNnx4EGJGtKNWaTMLa-j0OOcIVENxfAIrCr02n4WpJzZiJkBWoDfLJqNihYjwRnm9aoCR62EF3FssupHkntcWnRSblrjihQcflCMm4dO2L3UFFArVS9lrRC0i6nF746zK7pBU3uRNkmYI9TKtDD4xYmSruiXqLM1TqkJlDHx626MqKyBrkCWoSrpjeqLJI4u4eSXMQpjlPrljV1v1SRK7pPojp4YjBE7yz5QHk4V17pSX_bpySvXG00QJkHfnxLMFwIigw6U3UhtOefRojMWsTQv59EN-ZbmJT3rJu7d0wAKWoOOLYvauqSOuzoAcT9S5lr93a86xQFlkK64p8QXrk-Clj3G3HbXcHpQRc5DKWfO3ESiwIqxCCPOyV48wHCda_UWD1JOFClAzVjAXdtR0aA3hNPQ8T2QCxw6XPSoy8Zj2OEBY586EWwv4Wjf9WKW_SeaiV3ICG_IXXSQ9IJquAcoLZ5nmxIT_3yHsjlTdwpM-PFk54siJt8mMxBmUpvEWcDfF8ZdxcpGeE6Pz5SipvFOEhqyPT-tXh_C_bqSO8ic4-Hka2AEq4i2xXCUogCrPHTdQlGXF-46ZTqWMIe_ibU" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="DffnFFmojiXtcMNAZvCQ2u6gF39UMYGrQstivjd16_Y8m0xdwLpWAauvHZF6jMwj6gc3SC1xKUlFEUtBmp_Wc3dVWL3kD64juZuJ6-7IxErQANNQbRzaHeRlnZTMwE2k8U4YZe4MKQTSMBwdT46eG8BhTxcghZc0S07gcYltSdwtDqB7hUJyL9IS4dc94fOw-rtuFiWPg8TaTizBxPwvsvSZ5r3g2uuLPIyO6Sb3LETlHY6cKXn3gT7geIb5ul_frOKWN_6s6_9lrCHG4MM-Oa2wbaWNaAtbyBC7tB45GHJJm7UJbbygkkugKW7wcipYOWduoMmYUiYWik6wz6TvBtGdx_xHdS9_y_dj92VkYrgKFDqgpZrIQsxARd8c6TDkgGMkCqIC-OutWBFwNLTMKa-6N6VsFb_CQl0430gizdtBZ4_VqA33UVLrFk5-PaZs9MgcpqkBNYBKBH7Kw4d43X6xXWjOtQ_DDMh4UsVbPfPpGtXv2WA6SDBYWERn2IVglkQB1tzK29COFpylo7wI24ofC_t6ozduQG5R9C1cBLnP4ksQeW1WN7R2Hac8uWKuZdWAw7IHvKoHNn5JFeI5PMNIx2i-5slkxwKGqgq4LQ4Iuz-bPCTAg0oojCPQ4pcAHBMRP4DW9mZK9YyQVeM00dAr2_3b2OblHRPTgumxZtG2Jpr93bkyPzOZ3WIp6OsLC5uWahrnBYyE6h-tHmxakf6PoqnAZumcrA7GRAAliuJ76FUKb2KBHR8QvDYcwaQhXlkDKsR3qiElahpyB82s0OD-ZNVUU_9rKehFRt5yvcAKQZtkN_Kig6rlsseAWGtCKjej5fGeyr_UklcrLczST6JnrFO8ITgEStbGN5iqJEn5kDh8t6kiFleM5-NwxgXilbHB6NBtml4xhR1gwToSBWzojRyFCE7Bco2VwkixFEG0Gj5HlRaQLYMDvvFfK5HKCqn97xi7Y_vz7U6kh2BnadMPE3IHFilGX_Lb1nxzzHJuhkfDMFZa4bFathqDOTqXs_gpEoNNOMHcRWvHQI3-D5EDYTLifyt_jVVzkUY3OgxJqgIWhRPI_rLCIr98LzhyCNNCsOihD_ndlzfgO3cvVbvQldoSIMPllbExYV52NDNh1jx0qnKl_uT-jsXNQDf7eMteozrvqcquuufCWFVsrybxnDknKXyc5gD0yv-TxuS9GMFZSDNpNAW2gvuj1_9Be9dqejn5PNQKKy-iRHM2AfxgicKx0kCJvhBNEhEfZmpH9pRN_HJITCFqBPx81stHzIpaiR7LP8FPzkWXuLt6bFCc65XLj7y08inm0XDIuBSiOJE28GfBuZvr2W6yd2kUJR45SCbO_37aGkDOxFY5ijWb0Lf24O5l7iqsWoFKl-GDJm2iBE_7G5RK23b0UGHmMRlRpG4rb6M6VDkyMXKagLop-jzxaIBZfswuOJ7IimCSTnBuuv0Be6-rJMji2dcBOPyqNEd51SMosjWGXdoZCSrZH7q766QQDWU17rCND-GyqSYScHcePhD0Y3as3zb9PvRtcWJ4YoG-DGseIPw53WIJvVcspXgzX_14LL9sNKcch1YNwRItccuMMFE6EyeoRq8TMeM0jF8a5J7UkyDcxNGds_7eIxtsQgRRj4g6_A8pJ-x646JbQD18jd1QAVzszsvfezDE1f6pkudHN60FeiSOxckQvcS2Sq4_WjEoaCg09ghZSl-6EXR23oM1GRIz9nrXsW37Bgw6Y2m6BaX36DwPbqcC4KGue0J6Xik0yFFK2_gN5g0fraxVDh0NP3KFtg7x1tIiiz1IxvwB3i9GCLEl7r8QFgCL-OCRL5bc5x1XglznXnhdIYC6cJ3dDoxjLyvcTZc4V51cNhNfg5oUivfQfwBXHW11m9ZpkoRFZOl2Jl5ZbEtYbN--7TaSfqC5A8TyrMufbevyBwqpeaKMkI0" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="UvGkhlvF_KeseKbngGDB62oK3oZzICpIfngFUziHMVR9kPAiIWMpr3DmAFEg39d_BJ1Q8qnaHn1mPqRNOut4Ljmorr4LjsZR5uDpKX3fqsYCHxqAPW0y1dE86fGcJkVo5fdn6ZnAaRN3fFpLPScxPXtcCGs13e_xLpIARtxzXA1baJr2E9M1_bSNinNbOgoPKvS4DfioEB74X9gSXXHhexgTimkAclNFeKHjMTop8Dund4GdBXopLhhy11R-RFrA2D0lG2ymvLkIZU2AFQ1YFMOEMGFVESIF1RWt_BztKQtDosrDOYd_OopIcRArQFcN_JDsTeLm3Hb-T57QjxFvrxvzPfk7V0b2VS-Y68BFGrZFitL_he8uvsxDdnVJCRZnLcX1HCGOZoIzoUvyLZNuf042gCdAXPElzlxKi6Hm_2p-38Ccy2kxWS0EevvQaD-AxhC6NK-DsUXk2dgdkgCmDbuLsCTvzjjjiV2J3_LvuRxNe4nLUipw5CB7dcspipgTJ0jCq43PRMlmcNcAC9vIPLG14aDJ6zbZx91jmNcUAsdl2cCPyi4CYKkxSZ4LYlyAO99CAr5mOdaZ5PiFtoj7RCwjQNerxhwk8ak955nYYZZjfbHzHx1mzqiXEuVdNzpIkBULvcg2C12Nyl2uSVzShfcGl4zv7NIoyPbXxJn2A0WKEMXxuhV2hzi03ZWxYtzAm7Lb_42x4sbyfyPbcUFZdphWIiNIyDYXYpUO-cZsiwhmdria9W-KqICfnMrFc8SGkyAddtSp99NXnLasSUyDzCt1fNpCPE97XAStauvpWqrpm-HuRvWVbH-mmuXY2hUDgHQU7JgNzuQx7hNxAaBYnee3NXjmZTlprIqrCPN9FfxudIDh7DfRD4P8kv6BsTrxxWWmTQspATPnH8Jf2m1EIG3ErffREggstgqSbQea8nEbOahxCyCI6lJY5WhKn5M2fCW11Rh-xiokQNsxIJofgTdTo5yVrMK-rQoaWWLxXW5bn2zHZgfEokpkj5k8y6a4-JrJLhz_8XJycYG1mWCZgX88qkjsNKHEg_4HbilzBXgOYzUzQ3yamuS3DqahKvY4uVLqhRAMjS0LUcEp4YiHw-mPE5jCSP4qZkdiKOdn-EG7FM2LZEM9olAtqLX40rT95B_dPyTXcwVKCc8SUiAxil93DSnmdn2JQi_3GGZspVIWlQBhD1VutaaFqfDWJjXr-n_pQqNz6LZvB2l24hSVv_a-NbO5ANWUxMbO-k39hAo5pFpqHFIL5E6BFS8vC7puJp5EVdRRfAju92et6waMhMRnfrGzNrcrQD0sPZauRR7GdJrZLuCa2yUJAfqGqnH1EJSi2cd9GXUBBo_POa1dcAhx50rpnwWY-rmCi0YRpUkr5WvJLK60xPES7ZIUwq52XFWnY9FA5J6pbw2UENhsBrwC3Ftk2UC77T90sZ9qTplPVrtWEcbub42d7WNOr8ziPOI47lstp3b98cCiTkjsUAdGRCN3dBW9aYn3q_siMlCX0u8EQDBFhet_ahoBjdAd-eDSCglUwV0daCeCzbVWyZk5x1j-gK1uAaAy4kySjwIcBO6YEaWAsbR7lifCN-0eaKeu1WTM_9h2q7LEJ0_Qeg5En5mv6h_cytOnRt43L8ps0mJQd0c-cS2O2cDp-0xhIuxwPqrqw17Sqb4AdLidaCmFwlOJRISETHkFSqZuAlgjKzTIO3BQe4Hv7T5FFsnRvCgJKdSfshr14jtdih2EqOuSHQxk3wUM2iaCXm_riYhi0E4oWIhCVSkMnCP8bno8Mnldmt8A6Jc26jlbAxNqTBK3aBB8omQg_T_zIL0OC-BLCcXvbLdfmVMtGLt3kQhLhOJTCyhGJIi0YFdsUkpDz-VjKwBhsgxj7hCa-8u9lRFOuZjzSyxPhkaJ0b1q8R9URPcHwdmlz_M2hiBPWPXd9R99-g" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=23" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=23" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "d6ffc256-560c-4d47-b192-24141d220f40",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"7GK50FHL9TD55"} || {};
            
    
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
