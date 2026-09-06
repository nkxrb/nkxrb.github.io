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
                                <a href="/kw-click" data-ct="zILDTI-WSibiOtT1rkk0K94rOYiX8skjpCO6IMonth6ymW8WVRXA7oShi8Yu2TFCLFRDMOdfHftY-JdERI6Vo6vUVSE92zyTwWAM5_xxgEuwazhwqVXkYAgxAS_ovCM_wAgqJ4sXsvZlY33U8VlrhBd7GNaOvbB5WRgyv5flJ4ildMftPtx3lfkA41xrpdJoNx3rKlGPKhk3tgu7OE2U5xAbNdBSOciz3IrQmQosTip6Fq0bk6SO1TAgU7pmx266UXFlTKXwIRkb3uGRCjrXiKSX7bGadTDul7Q2RpVXxr1B9EFARpXD1bnLQ01x9q1azu3TXsqjEtcHIWisCukNE9Ynbzy9qo1IFXKMXY5LOiVqDraYhxpa3TjUAtGRnWwbTlEuiIWVn848CUNlJn67k8nmO6mRexoHFySoBY7bsvbym0EwYiLzH6Mfxz4iRbE6op8RIWYJVPPmku_d4g-K4ioGjrEvXEIbLiG3j6XNoc-lcxGyOPoHeMDBACWlZq3p08PkQPBSaE4FOg-gAkjlVa24uPj5kMYyrjQ4wTKOrE1R-6KDcr3Yfe1-3FEuhdj5DWvbpp1m5kZz0ioaIl_ll1aJpCDlMkRLBjF2h96_Znl-F4GlztOW6lMDaQLRfY495SIcqGP2wumWaYLv36joLqDaXEGQOESHyroovVJwrQSvdgoZsWmviy6HHXWPNP7AGSp5FIr3FEqOzHQAgCVCyDXIpPHZ1P5EtOmDoZeBJx9jnE0S7D2nZ9c2QsMHidwrSi2QodKVX_NdwxpzjgsrxbmcZYpV4WL6Dkk34-Zk8cNSz20WYXugSWZNLn9yAH0-uXJYpdQhip3UMgkL1uwyt91R-ZIzgny5nwmvx0ZHTx9AOTwDgd_evF0ABALX7sfPjEbbsufZuCnN1RiBMlJgrFx0jCWdL2YIRskWfSptq8Jfb3DhiCZol21iQ9fo5tNzld3s14lhOfcI9qSXMnUciW9cYbbKelWCXVA3W2R7edsnnhTdn1XNCTXYJ82Ye5cgyuMkmz9yjqdR2-bG4ME9LH-C2gRhgtMwhouXVCSgpVFz1ccrHNdVVKHEMBSSlUoPZaYH2WucFgTJSW5x5idXQZkRerqbD8Lih2UoRd8JE7qORT7Tmy8M19Aj9JiCW6-tIJM5K6Qc66aqhxb83xy07a2s2khIuEnkzavUkQ4SPLPgGdUZAvGL1HAM7CcyDbYqwvenmi7tjye4E95MDaK1ycD_kLkBRVpR5MVE1ht6fp474vvyEMAc1pn3ebqYAx14WmCbMkMgGZPfITYO3tCn16NBDlfc8Rq2Hyht624NZs1IEP8Z6KpDnZvKScZqETe5HFtcmnBGNnPqlLd5y0nkFfGapPtf_gHmPq0m0hOTZd5SHZ2lNnDRLOnSHDF6OgMZacFGtUhaOMcMuDrTuN1BP2HIRMX8qN0fUAkdoKSnFHjEFVQirJ7R7wSx7KgiZw1P8S4LkP1-3aZW4HuiBGhUxhFZdzaEoxU0uwTYIKpjH-H1XW4hFszAqaeiBb3gEGZkIk3JOrWTFJJMEbGlZx2xqKLgdowZEykVQDTOAEdmbMnpTpJcWAhOn8Niv4pFaly932KDlo2ucfqjVm14l-JNTtFPwyhuzEYbyHpo6TJxJakzFopWTIEz8VA6WV1-_-aIEnNcR_jojApTdzc05dJWHgkdgkoiFwI4X1eWRwvCIDpkXGLn7s3Qkn_vj-DGEiSmqku1tHTLE3_y10B_Lj8KGPN3iQoi9Grb99GpWWYS5JN83H1h4LbT1OaJyeg-IieNOmIOBplfixBv0YGX_un6a33bgVnXwf847O4L3GY1szL_ZxIgk7J0AXif14k4OsVXFya5pjKaZOiNccpIMged0Z5pmf9zb5e920VeEld4rYgff19pPSRzPmNcT8o7HmQkSZCmSx1NfARTW7mwFlZV" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="jvkaCPFA4Kdmn5eeuCnc2awC0CpFVHvbMiscCBlXU-KOs1EMC1v9uTbqT0xDkMYGUBQtNL0r4IkyyhUvwgy5HrUS5hQhc1XG-9caocuxQ5fdJfzT0qOLdVWLNsUUKq11vTUwAk_r0Esre_aGUJxP15fls7WHqn4NWdZHMeu5CB5Pqd6RdBi6gY1AhwKiY4jmQe7aNkiynlTbp5Poaf5xF6kC9bzbEeVjkbFzoOSTwzC3flsyv4mTd83uCRM-b2iqJ8MbTFhwT9WXxZgzpN0wYi6j66t9OtQ4q02XllLLV-BVGvOg_8XQL-2xHSHpKMFN1MhWGzUF7mPoSlIbUZpw0aFhXwVK1gWSigFJMLo9oT3n9UPN1udWDUL5n1pcNlnHcoV0pW3mT_1cZGz1fuAmpk3nY9KoTCWOeGn6b-M8KejNN4WF4ZCIwSgHHBuuagXIrYXOcA5Vey0jM2tpEoxwIPNKUNwgqIBZIBATG8lzAKCpwwqkAvfStmwSJOXTl5aCZtG1LUsJWaNaCwOnEywPeFlxr4VsBouZ3WZMC7KEJzeP8HWyENyT8n0rw_Ao6OKO4BaRkpa-HJORR0j_D1EGZVXylWYX3nuBq1Cj5kBP2rK5LG5FUG1DBxhS8XX1a-9FJHbFyr54UaREIzq1IZsfOOYEOdniSJiLhjWIgctuz5hYxTaxOofqwSnRwesYoHISx2Z39j769Gb1SM7BN7riCWlzSsyh9XsPL2RYgvByC5ZtE-Bf2abfGArp_OWV-kSzUwRvz1X-nup1uJYDvbo_rP44pyrnL7U8udiEOzdEfTkyf87tpNZm36vZ5F_xWAS0sZLdehRX2oM387g4hhdEW7vICF84zfO2l8z11DcY_fSt7NzsINmXNiCgrjqYMo41GL9H88lgN8EpLgbLsdZYxxIwuE3YWQDMHQYMOLTXD2_xIzSZbNQ_pOEDaRc2NPQQtVZjM2SvNobnqNCJt-MZqAjwtDA9Z9XcI3m29yR7hhSK1PyjpQ2rAT7NRwwCOxCJifIAixUtZ92lssqYgPwnBHcU-f5xpGpcdYO862K3YfpgkpSaircD5rmKXjwWggDd2DfQEeWFWQmhnzOB6tJNQrFBB4JFhHOD35ZE0dLvR4orNND54EK77oXECzwjy_b96n_IdVbN_lF7E0yLhM6vG8SV2Wr7-60C5R0nnLY0ZvIXugYaRcAq-lH8Ee03ac4hnQ2V6xyCb2r06lkWf2TaNRCbxE0KBovolVoFgx1wHbA_eHMkwACc7bwSOtwuDhO7dnhkYWuLfwxwyboQIovyOo_Fm4iMQ424rZ2fjdCtfeOScqx0zrlzKxXxUo-156SblbdMnxEqVyeWHmY0h1L0VFF4JwCMT_JRsrUhHtQhrP2vuYQAKTVAA3I8DRVW1kteU0lIRc7OSHgNedHcNfvCcmgmh8zj7x7gArWEPp3oIM7DjPK2zEGtGB8Z_-mxiWkrdYY_bu4YqKdGcXueoWCyxA7D-AALWZkGzXBN54jyVM7L3ErGjiLxYor-tiA8jvxCnNBxP-8RU7h12IWS1OcQfbeLYa7I6_HR11UKFLTZvdmbXoCYvbKLykSLdHtUbA-uuu13Pj4qxdbXZDT7ScsB-8pCSSp5dFc4aBwGIOvH84GE8sQLoyUfChxBROOCGKi4RCgeqv5lRJ7QsK2uQcFnNS_l_uf7qHvIl_vTZN0Qcl--bEatpz64qv-Rzz6lIzCbMB8QFmZT-ghrXUsuwma7VVNydS1VjHb4FMSmfyj1eisE7VLswxqEkdMcsbzjQ2WLBxJCkDaoojY-ltOQOBXUmRgk3T-fUkJx5WJL7Jnhk0zfIU3QCwou_MJvIbJmgUc2UwVC5VTGDx_RBpyKbBKqJDNd6iWBMCT8YIKvD4xXo1FmV-u3XB38Qz9KgG6oOURDHI7xMBorriVfbaBljohb_Cdu3g" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="m45OyKToL3SrNehOukA9DwfiVMm6LMg8nmo-k28OLYWg5-X252ubUkc4mzlnJn83UGQ4RUPfJ0C6AnBtNHA3ZXqorG9BF5ZZrGUzqVdOltWnQpiFr09bgTZZ_fzRpt6YcMYqiHHK9hplw844lpmfofs82u3tBx1goc_p0LO39FCG60iKy-1rkM4v-LSG2GIyfBA8WklAnUg64D3waIDWBxAbpY7ZMvw3fjhtc_HHt1hichC7WjDBb22oDn36VEC-OoSWFQOomCul9v9t2usrRvgPyWgk6_JgV3DCYEmfpb4EDSU9yjrktqIFrQbPArz2-yr5VacJ6BtoL9MI-V8OWVXr6KO0s47q23DO9bNqfNp2YoUg8oQPmcFWTUJdMrXgnq88n_3FNOCdPq6BqVPVl88cxYQA1a57ryAAC-rHxB5q6YVxc1EfTr-SJrsolsMdVHxw4elmZ1AAsMLsGuM9Sd9umbBPySjJb6uD0LNGXbgvsE8fSUuet1N90H3QzLADOZZL4NlWsFpsqQFK0npZWj4DMpgtQC-VOkiy9gt_ZdJ6ndrDCLJb1GbaHX_RIGrPnAMEMTxsT-FnO5shRp2VzzKw2-YaV9bRFVdZHxcxb6QsMUSrzPihMdRkv5zYs-gge7rnrxLo82Z8Ha5qScVS2-8yuJB2HOZiCOHtgadQDUMZkM7MFYZZODS6moHymMPoOj5tCSUnVOPrA0JCiScfArE8fRElr0tST-Ei1gIFw3CFcvm7l6qkhDJgUzRLqpcRwB879WEoI_6eTCn3yFxGRe16GC9sNdBUAj4wbDPb2z_mtPfefPWD93FT-_bv0xU5JHWSI8u13hskw8HF2FwGFzqAbrIboBAEDFVKJtCobtDCgUrP36H0328T4xVNvdDTndXYMGEnlaKqUuaH-HQGlBhLe0oocgOxWKe0aszF49wdvd_elzI2wGWvvIJxSe0gHosdcqBtuBSvcQ42NdmofUTR0PncoGxrTolV3sIu-FPiZeT0KaRQxnOU9YyfAk15oKTs60MGHAy_lrV-VL6dZ0dBk5-iRRoQ0kslxo_FqgD8LSpiz4sjZWXUNWJpHGcjqaCZwXImBvuET3GLHEiXjhqhbm8tDnIAhkAjgPvQUXmoN6WJTxxea6fSlFOVzEgrtxXitek4fzN4uFkitwdYKMx9rCndtM2VyuW-TdCEMa2C_xBNqn0iwJTyIkRHdhKSn6hq30-inb9QvGK1Ojhk0uCrfv6CjZ0pt8vssuD9janQfHIgINxxc7F-TfI7E8c1l800iYlyID_Oo55bU6qG1AmghcVoic7sNMYkBAVbr0vVBO0fmNrYfvVgNM9J8MA15YzepBGZyyHT2eSZnYa9Sidc_1Xk_JOqcLg_O6IFkDOFavVDEMPdhnfiAJKStU2441Pw2qrYcDt1KzYci-Vn0rbyBPAFR6n7tGe5p1u79WaImx8cmCAb7JgyyF86hX42m90PA8RC6xcDMcChJOehR0Mp-AEtJiVF8QHqA1iPhGkpnX5FUpYUSyMJMUAfybJ9QeYGptjR5mM70nrKmHo2-28ixfaXGIKLo8QOQQOR7YTjpn6Ip723QbD6maPWQeMs8nI3o-n4zRvlFL82Hii5n8fN3v2haINESG_ojcuJ_d1z2IsJxKUxzcYy7cSg7BEFimxCV4syyQ7jxZ5GXahUJxBNRN0GT47hdEGykyhZcL4kMELtbbn_LsDnq3MVtYaQUT37470tZjO-NA0xezIBRC2IlN79oU05hK4ZYe2SDQr4TlxwupvxgFXzL6NZ7JdA5vB3L7bS1ruEbGvqbSLGVus4Ttf1XJXF-NNAgCht-2PU0h2RinTPJe_XD_26MR0vYiRQjsOmN4UN20Yo_resTqjUliceLQ0onj2PL_4qB91Wb6sxaTISdPH9KEtsLlxxfpp81Nam-oUZALRjVERtvy4qu9-ZD3uc3btrJxsKTg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="co1oYDY6jiCEGGxkzp_I-F81NLFJBjnU26omnv9kRHl59kX2rX2Sy1zgTnkoNjXpSjN61vX2YG3jssq7JzkYBX8H-7m-9PwtPhEoxJkIY74TWCsYYJEBMK0SOiSbAB2caKWxxg5f4gD1XEOQlO8w7frQf2GU0Pacc07Aj5WzAqsFVDO1Y84UeeB7pFTr1ixCKC9NLUPTj-rgq9_phAPyxpNAdMfxSFRmwXXYggsp3_bh5XIanBjC7yXRo5kfeFaQnJteU0rj0ZaSWoqIDPEtqeCY9ACxNOBkJDnCFncaF35bC3HOJCfFXxlAm-_ZS7czAJ888Sj4O1Vg9T081vLVt_NFVGEV4Mo_e7uVEViV_mWpcc0zcZnVwFm2rleJb5wzE2pVq1QtlgkPDYYpNQCiaOTYWdXusGe4g4gYPnVvwAxW0Eo8WhG3qZZkKmuKXFtbIS70DaallHAU1Aqx7JqfIigStMAGDcHrcqvZ10BhCEIQQyPVyza0T9QRIRJPWMcLvFrbtk_1YbsFScsE6srLlaqffQAM7qGmOJHYoMqWtrz3ZcEnxt6v-Mq25c6i34uDrFXOtu54UzCzt-UYLY28JuoBaSnXrowcjRmc69h2LYJu3LuXDk_HX0VnhE2xax_WgSn13_V4QeelR3fAsErQZhQAydsqwN5syin7VSbOGcCLenWIQxDBWMnGic0DobRqoGtRhY_7FV1sdPl9EhqE3GwgGwsBsygLW81XYCBplZYvJ4ypVEUhHTs8sPWatsbUHYxwe4mI--uezWPdhd0ls6G7VZaxED9gp_MCkYxzxb5BqlZSGSiF9hgUYWRPjP1M2XyswGiL3gEgk_5V4tR5KSL3KvBjlDkvqjwchR1dv0_7oBQZpymj9dIIEntXpGQJC_QbzrgVh_QOM1dENBje9D1vmUgv7jcQ507uG4QHSf6yw8xSbamBQx5qm1rUtfJf_KP6OL1R6wgrMtaYqE_eiAkCuHVmTTtgklx2S-V_5jd5H6NGgetjwYlqq8BcQgHS3rqZgE1mR5wQRn9ixFgLKbXv7AdcbQe2_j-ZH6HFEguSwavgOVIKxfzOOvnbuYW037hi9UU3ZkYAskiMWh4iSjPiJRloqu4bEdrqnH0uhS6x_4lgghmckNTMeIpGYSTMmTqn23LsD1rpBFX2B9RreAZ-9G5yRNqQns9Zlw3X1d_wA2tnFzYrvKG8-MO3Mr0eVbMjR2V-1Ruat8My8j69UjgqwyneiM8TGePS_RJe8fMOTjuN-JsvZsVrxm5_U7-kDjH-Bao7lYuvYDt6TVuqBKN0NOk4tZYdhdTMJZxY8zZGDRTaibI5Oz9PU23ZY2kat0xNv1BacCl0rvoq1rQ3ZS0ny4MgfSNkcoXVFK2WcoUqAHoNfcuwScsVOhpv0WjmWhgQ3-qFE_FaWFQ3FoLLJtp-qo9k-NyU30Vuugtm9eP7n8OLGZLsLPI28p1SPsKiaFDJ5zZylR5WIQ79hg8wgFe-R34Y4b4pKpFPGLfmHDMHvG0phEErdboD4x2tZwOCREc-0t9QUiKXIp47-vVlQpLit8a8Hivgj2Ewcy3S2vqafMOiRuHxygvJJo-JI-BDoDzLPWZNtAAuCNae6ksHD57NHeR11haQ5j1MDWZfNHpPOTkTc_2nGBLQqeZQ3JDwVqJZ-7SUnCuNxNHXFtnKHKvQ5_uiXr5hPeUGqOam4dhgDKicscSNcAA_vrF-6Pcv2q69l61d9ujT8pZ6-S9PtdvUsnjTYK3OyiLC7YmxKdugMcj4ovKb9aunm9NLOhpIFqROQGvpd2ICc1k2Pp68SWftahXIDP-Eyq5OfRXeYLjJQs2_C26eZ0QfgUuSOnwda8o7qPo3UVQM7P6Js7zqaB5UfTQ_E5qDcxgeyHyjJXYmaSjcF7mSo2ZQJ2-Y8pqRz1s7LA_-R2BUJGYGA2nEmmzWPg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="bjgd5LCpffP-vf2PY2IuKpAsKoDZ1Nzx9iSEyG_oJvvDLwYZSf2BfeySjU4gOe0ql84sPvtE_SYLIZ2wKgqZkZqemFuolQwVJlpYx-u0bRedgDX4zFypdT8jbfe8SukfYrpuleVeCFjoZMlip2UTHhvAGo6WcjoYZIqQIJyQt1kdgrL4B4Rm83rk5mHUlOyaT0TrHC5e0YuFa2Yvj7Ktx8MmJaOhW-8eGd31ZUmsVzsc9iQ7myHxM4meuZniXrWA-hP3Dsb9xOpO-OG6NCrofKKLuG_lkD7c7gCX4kQu_WZJ_Iou8WSprZ35OE5zfsAMoN3qvmElG3IvQqo2F2Qk6Q1VUQTrZ91hh7fsZsRhwdMSa5wtCecXrLIQNEtF1gSTfjI6YuLhi62DgZjGu7WOjsU8ZPxIsCxKk-jx7CMILZ15DdDhgBHTeMbnnVtAJgbANyrVeZ2HGxH4VtOCng35T8d-NiFlpZfn2D_kePmK8lx6zTWDuHgPE9kZ_R_nxOzTL-g_oJs_hsZfS-SFDgZ76qozlbWfa69-g9QJDx3PwP2nw50AEmMzeAOO-2gPT1SCiGyjmCHFVtHJVMjzi4IwtZg7j3AzkAzIv_rwfPx-kXNs846JtzybTQ2JJs5mrIUTkX0Gfqplefw7_V-NeB1tKdHiLqX35FaBCK4vnckK2dnz5wnCjQnzhXrdzJyU7Y693_zRFTWfEwEs3UVyk1F3OrR6oTpuGjI9WHyrjTd0zraNBrXilpxDaNCz4JRbBR83IDxI3EK92AKKH-9YUFRo0UfuK0MchISzqqKsXY366HSau6B5YBrI5VKG8HZNDokhgRnaERnB7ENjOodLek74FLOeLT0jMe7UoAOOFI1UzNag6W5n1XiNlmk_zTtqOfDc4c1bSoRTZoO8NeAMU8cVwtn9QnHG7TkyGvc_wmLC3BUPger-lRrqMqy6tbQLHFCYjOkPElkCXVJA0Zvrt6Vv9RnzDkUiRELXdb6J5UZshh5GEj2ttmZsLH9WSuXiSKn6_vqwimDfCgfZyr6PApkT94BwNaWcW9qHbMXbUL1ScLETBCtSrHFw7UtKnblzStOc4LLlAE2cIPffMbNFW7oxj2tpDDDiv9HaaQ1p0pYDetjgsSzU9j_PqEAzUerRrdiYlyFI4OHPBIfP1LglyXPSh1oAxvxeMQGC7k7Lw6UfCjA2mX-jIVBLslbxf5fWv_rXM0aaga19Yexdj3VXmeiz1YfwhrgZkY4gAO6d72SVbB05Eenzpdpk6AGxi8lyFLVX10H3usTTM1qnvfA1F0XLh0QplpNPm_m9tKtCQet15PfpeTMcpa1exa11vPXzv2wGd2RsgVTKuvzqURswV93PitOIIVhR-oaIysAd-KUeBCK8nWdtOeH5cAoh2pPuHPjHA2LYG52-FsKQlfmWdisusJUBFZ07a0gXA3nPN2U3XszmBzvhWDUVHvAfpCKAHNYK1_zLIyVa-IHxyeWv5xhH7dzXZfSdalUP1EXctErqAb9x01pxR4-px_YZYufCHcpojz03CJheFluvHzAXUlsLEYJBmDr2zxSzcxQvMtHFDb0RsWOt4LavieUW0gsXFUoFyjjgk0F-p2JYA1bw9HrMlEMcPJClPaFSSt84ZA0L11-UZ9VzNMdhDc1phixcYyCn5K8pR5tzZPCbvqa_zHbj54dUf79wWlrqYK7_MvSbaJQMElQnUq7l2Kz5WCzdbpTyIWr4Bfb3r9v704DrUI-5hPPEUvcXJ0zvtI1OHLemfrjJdw70tHVuXNdOT-MNKlYaeTsVFyaizMtBdNVSZ_-025Cg5Er4EFbqi3Ke9MufvRYfjURvetfIdC8XGpCSLOshYSOIdYg66MOTC6mfGY0KCBN5qNRbuxnl6YG9wImZxiPPFymfi0sz1LJbrV-jfryIwFX01fiWwxnTzRMpBf0zp6uXLZJL" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=17" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=17" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "cecdd55d-5530-453a-a391-ace80ffd577c",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"3A38JF5L9RS5C"} || {};
            
    
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
