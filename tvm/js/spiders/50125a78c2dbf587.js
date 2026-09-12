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
                                <a href="/kw-click" data-ct="MKrt8ds8DXrIK-ZlnVhXY9XvmDllUXZ2Ofp6aVGZIDfzp6EulQoxSw7gANGbU2KozGV7xNfn3G-q_YkHyayh-_Bm16OqyrawE_ngs-0jw5gNkit-XSKTFfb3PA_TpBQg1t_EOoZyK-ttcVMn_qABdfygmtIo324s4ZXTOAxneLnrgt1zQXDtdwz1Ug_RuN1F-P7P5krN82Bd2e3dOToWU3GKqeXp_KiqlmlVEOpw_YZzm3PSYsrEHGejk7Skzst7FMPU7poOSCnwHdoE0IqupVuTaAgVQbIhkuu17ltoBLhGXupbDsp1S64C-PJz4XNzfhefB0FaZ4tzdADj7OhM1HNmd2if0WVA6Ma0GtH2WDRn2fQ_uqG3frpTUAD4vB-Y99J3-LykJlfWcFsiOnfFglNsJ1EsI69-FHrQqxEhDtVC6VDPEFW_8t9BG5CJrzKbuMcsjeZ2d_8g0tydTXL3gqXI9O9Io7pfIDSlVBqLl9Xn5ka_GKmb0rluXWa9QMhFKgYmw_OnKTfK0CtO_ZtKeD7BUWiEQAWHPIeG8Lu9FqiPXZ1aT67U0zU5T-XKjV7JmRdBXkJXpYFYQITDryjYqMXfO8ExyxCR-FDXG-ofQ6kjiLTHXz6dkvXvElMTV-ArYNZsWo33-kK6ZK5UfVu1m3_rybE6nGq3T1LFfPs6sLLui5ibCpj3RplbZ33TOv5Ly0P41Nz_IUFrIz2PD1IDyUq6fcltFkd4pptMMXXmZ91pe33ZguhyKnqLMheOyCEe7AC4bKVga1R24TH40C2DkqmronxmMJBUlXZ12n-meEPcYLyL5txsv6bjPLOdRBI5BNusxYqABi5opUCu2zF4RMm0fBLpwFyON0m5kABErk0z6a_nF5m4WON5Ko9rM-jkmgkqQwR_aJJqLx0oVQ_95Mt76n-r3PGEj0YO2tSRcrvr26M2hZTDwCHhm1383Ug1UvM6l2Z4WeGrt4mKHAPcS36QTnUlTwlUpGw7k5wtSmvQKPVz7N4_QBc4T4rnBFX0x_U-XSmiQCxGQc-U3P7sNuyCtslB6YXCc8zG5JNyx3YC9Yp3awfuo5-PFths5yYV9bATssMWmgZWZ2Ja6bEKz6PA1VvTGI1MN_3cT3vJKXYzqk1rUddHtIvBnBZwuAUHHEiPW522IojfIffeGSZqF1ELUMk8LMe9hpR6cu0VreLWO_O1i3jghfFrn5_99e4Cvzp91mjYrVaP8FBrH_JI0O6TMC2k6wAMSzajkGQWwqKkMUxxO5mU76TGFUqz8oPYOO39LfSYGRbOLfSnPdW7OXX_2k12CmM3bZwu_WM0wzi6K9YXNOsJVBnjOrnI8anRAYTYZBXI6qA3OgL8Z7wpF6zlABCh6LmcTiJIx3rLVMi1WPfQLxDJ2U2C78DUEu9XQ4impdrygL8_osf8hGjfp9nKv2uiL2_SGverQfP1Z8m5Jb8pFv5dVdrW9EGTEyZ4yrcABXawG8pZJQqFHwKKQwjvcQfupnfoR0vlkg6JWau_487fKiTDbvNJjCOo_yvqO4qu7K2X7u0iO22BXYZGHM5Mzh3LH0J4mfx46FaWmM3eXzUcrA9GW7wy0WS7XLr356wl4bvI7UIcznSOMdMPvPzJQuJJ0SMtQG6o8jDTfvBvWYntuHbQpqM9FF2ZM6_GEewXtvEIPyNgqO3MNc215SVj3RZ5DJ_QrFdyGjZaAR3m_WCtDDsTc81B3tj7-Aft7j2UkT8hoZNK5ykISCiaL2zTiwxO4iAQbGzRmJilm_GeZBAbCzdGAskEd5M7DTzpYu6tT9eKCt2iSRP_gfpMwHAaUC4hDL_8WDVOIByvX0wOAAoS64UGWRCjnAienjTFS7B2zpF4JbGrAcJRIo1wBll3mM6mE99E5GLXttKkHmPJ8FYYwCjIGrR_1k_ECrTLkUpMUH0nptkMwmxeSj3WI400dyZ3nV_D7nib5C0" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">real estate</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="Amgqvyy24wc6QPZY8OvPKZzr7EYatvMb_KGAk77VUxaP84NABr4f1796nXwNw4kta3oxuMi0D3ky5XSU_TFhBCp6ZMQBZ4tuGMdbv7DZiMffWdCBH3bVzFIt7Y0Z9OoKbir2nCfBLyBvs3MMbQZkkm6IudgaJb1sPnuAl1yEpyk5z6_tXp9fL_Of3CFV9aO8U8f97GjQlrnPPF1MODS-9dJT7umFP-kL2l8_s99oiLs-w0tKDAfVyCcMd9L4diKSgAxCi_HD-YQFpO9LMVQB64VX_-JVpF4RhzCx-2OpGUzJfZfPJXL6MM80rK2TcnIlwRh0Dst2duD_g14GgapGLWM4CsR2qI4UMEKhq_H9aPoi2VBbI4ctXHhw1l8RbYFx0FTxLcw-AwJKKWL4WZeuclZMOXxUDpGHNWPLORbYlgBinM17mIsOaFlLPx4fcQ9gza722XVp3groUPh6jFO5XFQfbnZWVFtyeYjdKgOnJZ8HLq95O08yccGa0PQ-TaRdhKq67zRI8vpfK9bU5QYhpMpkCrXp2-y67MfUJDew8Tr7EiGDPWzlOljXX_F-tE_-KGnhjCE4QG1HhcRCF6oPS7t9ppXnbIc5ccKWmu2NdYW43tVaWRXc3VlFAjLvBOflUlVif1848MrkF2x8DNA6oSisFP7aS0NQeZwGzOKC5HMEWBwWCEBtYzDhCSYJdYovZlDVuIi3erHhWOiDGBSzOaZnaIgmjYHot90q6irDUYHR35im2H7NwhVZPickWSzfP80GwVRFR3SnBp6vIzuOduScqzpvzcMNDu3Sm1gz_KshNIxlBufqKhai3H-S3-CXUqOUMzKQnZA1Wfb58GawGdV8LQz9LLngVr3LQy1KcERHc_G2p-9GetZNb-6zMM664vsIJYJxsX13h6JCudJ1_MKkhbNYmaf5UGlDmUGa3M0Nc6fm6K5XpA7d4VWHwBn8iGRU4m0C4GsKJnReQ31d1i7LNuPxdbfoFD1vsdNo9IPkZRaOVLoXPehbPiEucCpaMYv9rop0Ec-V6W6c-yyD1iqRb65XvW_FPwweGDIAvS_qAmoVR38mcLK4_0RHCWeCSil-OH0qfNbK6QxxzYXmTrfcwYPh69hciSj_b7P-VJ535kUfJOsjS-SZWcGXAlXqyeXxkICc8Hf2h1NYpUc3HRoj5exWdVFDcLfXwOM8mvRJ5_XecP8_zlgO5oAaSZaVx2o0gxVM1_VPjyL_TnqSwtEe0Nv5xeut8ipyqMLKwtH8oeZ4TD80nyVEyvMXViCKNhLQdE3KfcGgB0aQt5R56UaArqi8ig7B5ZQphkj9XJTavvJB96sieb1KwEB4qLHXTnMh2njTVgF-aG-rb4xNZ_arJNXFJoSNP8CqXyJR7u25n6lyRpeW7UGYLgDtok9WS2-IUW46Pd8yM6UL9MT1BRNrmJj4FAoWdaTlsQEP4561vYNWO-PVQ-qFfp90nfVgty8lkmSgUCeb1a_ODpROSZhGErHwZZO79EEX1Ya043GigTQ-jnFpZmG7Rwu9NKnx_-FGcrfhcoXyZ4PXYSyPpZ7iBo-PcXGMeW932o2idyYPsbkYypogCwFdQHmXUm-GTvXX1STYNuiUPwnKyf-m9NxdKZ2qTIPflJs-UXId3QIljjdSwcBEMD8_4xLpRahO3B6S1oZHyOJEpv686GZjj1_spzxS6S8ZXaZyYmto7ftCMZn6AO7d06tv0NvOjY15HPXkrmNvTqaIq1S4-IIFLIGjqqF_oa3qbBoI9kMs_YCWrhnIHeo28vB3wvo2_a7uORdGkG71NaxKJMT2GWfKbyJW7H_Jsv-JiJBwlXqThMMHqgsyHM3_1p2wraIT2C9KlO7R3WZ8kltZdedBlZf57Y6AM-Zxj_ORF6dyrHkokEz8N-ibwIA-scAVwY_MYUBCCz_VPv2yHNbjUZgk3-iqiPVbmbWlxnQBRIBtOntxtdj8aqe0n7aZFUFBAZ-inCMrPGk" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">apartment for rent</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="QINpWf8FSft9u19PCkveH72FS40nUTh27U--XtSUCp9CRm3J5NYnME-d2LY2KtLM61cOJOzzSeNQauwSxrqFrozaLAICR7-R1xv9jKbeN7OqmywYL29zOZauhJPs7hZct92lU4bg4FA4pHRlIixiqtR42Ot4UsUOv2ATIA4X03_06G5Mmn3pCksrOdpKFWHn98H1PQuZFKyVLFWFJGgjPoPhweiKcazFKjjDwr54l8CUGYGDP1MP8mDzR0NriYxrrCfes_xNyL7zTDMpMB05pw6iU7SL5n4JtnnT3GTzo9AXZddstDQIPc67mvr-ybQOn9bofmf6CEaNje5z66VB8mMHP3XxTLET8ceLduYs8ksJOkoT5RpW_5FjyUqgCqo0vOpsFnqOqV0-6OEiS0iWtYqZiXOexRzvw_-SFwOBjdR2iTPkWwh5SuuTU8KunHZehhUl3RKrCQrLtphp1RmNQoXvYE7CWHNYNbHahl24MpOkVPbS0KO5jgr3AOga3ekFj0-tVVaH_tTuI7trA9Mx5om5K6K1NbdtTqEn1vxz7G17IcwnWKGWHwjVtj0n_VYFYOHE235zng5zJIyHM-HuF7ybPyr2tV2wpzRZwCELRIuQni5w3tRrwagTYMwG8KQLvtAPbyBX9Hi8GBSF6mP82wiEAhXsGHawlHXJU9NT0PWKnjYYCf9kJFKJ_Izjey_wnjltP4fQ92e3PL-0rvxH7_xRv7yzaKTSBmLvlFTXmyi5pjs2u29HmIBVpkTTiWylgEiYaXWZuXt5sD04X0H80ze_0Eu2q67CrAgcBdhIvoJ9CjbLZB1LGDWSCp124TxPoc1uGXBnMsh7IVGaoPh3LIkIXMK1VEVheTwyN-nGSTHGa7P9Pw-o3qA3H5_0sWrCr3FUlLjIOpLV2-orT1zhfKGmvFM_RHjC3IohRRWPS1kuNXV5-R7_SWcGEe9chxUFNdZl0-QKUr6Z3K4u5_D7EWb6txT6pIh0i73B6yNKX4KIPtb_avL94OKeDOTamJLiHIhK4Or81Bxwhcb4jKi8KHCg7Gd9mfHk4RDaYrYhsD67en8ZxcspdedXkwOLxPLJnjJGI4ADnbwekKx0c4SrlOM3xz4e8SMRjc1Vy4e5yQnp3bJpjh33henDHQhxZJin0x-SfAc8D_MFwnS-UUi6avpVwUi5SW2oK-kCLRjCVWvNAbyM6dbD2jVfWUUoW1T4gpK3C79NknRdDZJE_b98joWVmxpVAzj5XUzvR92tYq9SkkLwNVbvcUN3GDG0TmEypcu1zE0aPM4jtSZPNTXDkM_cA0RaG3ujBoq9GcIaG-8V5Zr-nLYfOCCyBp3DsbDXflLfRf1x_kpV5nwkT2TLuJ22wWzeBmLPh_4d18WiW9arzOhxX4FIqttfB_rlei5PjB1Wo8SW4AroRG8g5sI2A7A9sEyPU3ECaQwy8DmLDqFQOOP8YcsS4YdqbM8kc5lQ0XrF3NK2Ay55LheZDewT_dJ5FDd4oCnXGxQKaLbAa28ydwEm1ByZQaM7Kt70WneQeMq6cXvbRasGdDXzFEfVq8P0_w7fdVKur1NPv5E6Fi8xCZRldmQ2GDFvGWr0eLyNXk7HcYami3ol_D2WV0A5fpU5R-_gvCH0YjfIiB4SH9x-P4smlv_n1DuSbprgiOJvJiV8ImHZuWTRbJOa_WbW9Uq5CZxpSKNfp6npyCVoQYntzWWk599if3NPobILrblVA34GmMJBBixf7P3XexwfUuhyzal3cF-0qp-Y5Rgzk_LlavEUOgfbzhZXAuLjrYU8jQ_btfbmM3OPsYZ2o7bNS-idxkaIJJrEvQkMs7OxcjoiXx28R3z7KxKl_jcBLrLjDDaSNFwxB_D1eGcQDiAjo-DlffA2AUpd4mo6CzUCAIpKztS0RaMKnZIFT4wn94OJjEfzBpnG776xx9cAlBzM" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="dedXd55dgE4tv9X6v7N7WJ3AgSGHxLcPbGPTCMDEFWqITdAj9nq6-PoptTyQEV4Ch8NsYc9a61FgthQBdpiTT2M0KV68PkiIin8_Lu7BYTMOi2RO3kRLzf293k_UzRPzy-vV6mmMlMB-16ptpWE3T3oib2T8fw-y6HH4LsukwJzGOWIA_lyJW1jskAtpfItEBgc_6bJBzVzkC5wBTLcL-_3pPSeKNwKSUWEGhxw4KykKH32vVhTWpCaJUQnkr-wNRRnTG2nQBlcu5CACSIOj6ymcSnHf5zRWbM9fIjVAIe9m4I2I_oMUSYU8hyffpFFh_Q9m3_jSodmu17zmjbwW0g3qrgP_hTLNiV-4bjDPN_QQFAmgMKR5-IqPX75wBAeLmXNr_5ORn1vGMLZWZEKL0UIGqQZ_WpGmaJUVoRe1bFZf_z6Fa6iNoi_rzjXwBDZxoS0hb269rhdE5Bj8eiX7Q9Vz8UvkLiYpmGdrL-8ZPM6Iq_cxJBTw8-QbDDqOWOIA_fr6Ykh5tQT5g9nqlBvTE1tMvTlo-y5GwiEMEEc9w7voItgi1MOGoHdxg8QWf36kDNb5C0Ytp7_Pk9Y63Vy2rp68QS3XFleCOsZher_pe5jtqt0K_ZJsnLG_-djrP5du4HhzJKwCMH3lZ80_IJA9ZfUs1hKd5yMRdJYEEANx0kkjDpkHFf3YGsFt2KfD8dGkDnpaHKZRYOHaNUvWET8wKLUcJz5uKZ63497T04phh1blvKgMGsDePC2bp7bD2s4VMOyKGBQsySbPYbfYV6t8xR5jj1EHBjG5IR3QfQkIU6pVXQIDqBO0CHvKYIEhUJk1zif2x133HmEDApwiMYIzddm8tXPWGgg8I79zoDexa2qokI4Xf-h2MP6uMARwcH9w7J1wUnRVIdYXtz7ElIh0FwB9MGOpBxEfRcSgvmiKlUG4_nfDdD4F_P_x4gPIY2PuxGd084ElnBDSZQ7BCEXA9n1sSlrhXClki54SoD9s5cQv-Jv7xQZet92_G-VuR85rfGzOF8EaEcBBZgN46pl2dp1riRyNS_eKt94lOdgviEa71aXQrNF7Qpz3X32TVy9mdDZdB0sdzSCnipMJhjH_KJByWhjuoRJ1BahboHPRkSdbLaJWmI8cN3_8VzTpDeleDzn1W95ayC7KG-1spTisoLQx86cE_PIy2bGZgYURpVJn3HWK5BvjJFENgiq-Ak8slGxgJ_RMcr9OXOgCZLviLkxQzGorc1tiyIN0v4aywZbymnkBPgP0zuDuCMD83eD7haVK5NYPzi4kVLnU3klYl30TdHjpjGeYCP1nNkRg99Fv2fNZcX2asRTG05HSAVzMwaRONYDTjvYhDbmQVuI4vJwjmFueVU3b9WSiR7uKU-kUWfHAnJxvkFTsRCEU_THqj57Y0H9FKWvaRzFUtikplye9PT1QLQ4WT5Irf0Z51hOePoBXpS7TRx8BrqcqnmQ6nLKFGT1mqWb5xWbcxPLXUXGowpTEo5z8YzbvmuioNL73E7sxtaTK5mVYzljio-0_z8P2mFsLd5W-2V_XkSGk2t3FyXvtT3NfdbgRL0lvzXhaLFJp9-YUazRdG-Hk2KRcrbW-fzURkkSvRvZUjR8Ri-oFns9TLVrHYLgB8Bg_F9LqR_pntaZ6UU7ZHDydX03xmMYsk4O4jJ3EZ9TYoHFMVa1sITuKlvz1kBlYZgc7hCHZmX06AbUIYCsodKwXUoQQvsiY7KtUpGMjvF_6FHjove8Wv7L0CExfk9CggQK0-ssDSkg1crWRqPW66Kp3ZxLCfetM25rrEBU6YIyRMkhJ4ivmdETNxTcHYF7JIAwu-bFRQMGoL8PdY8ljVBUXuybL6Jph_xN_Wsqc5ioaPR40UzfjTzYKKeo6lTTl2QwBxHEUxp5a1P-9jt4fEh-13defYbwv21TLRUf9yywAMNOfoMn1pQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="_6nYqfMT8XkNXQmIXWQ_dUqR1qnGe_x_fdgMhc740JWbprsnEcFo-x9iUgtCvqDSusOS8_vpQHLI3yAOYnYVBKZ1J5otM7pAyoX_EIPuEElKbEHB8u37qTfMPIc4vFv1kneG1Bf2aLT7Y0fE4peOKAxiqoob2OB9QGIIdTKiPi4en1cdat4IOwy206HEPxKZVE1olqGoNNffVOdhgHNb7aLDDO0-If8H1qON3zooTsGFXmQMvKXxQxwbf1YXgUuvd8BHcVapTe9pd4ahwE7F4CcZhNM7MYSx2itptvPhmQWo62w70d_svVsmYlm2eZ_kvz7WOETAYE3aT-p0Gs1sVL8D_evguCXIfd4cKlbTTeExoG7NDWQszFslkwbj9w7HzRJ8HIbRTQQxqxWnhMnWEI6Yy9_2OiplROixA0do93nbf9Gt6-3or5lrjfzO9488xEKqYLWBL_0S4Z2B06vBl0o-HBFlbJ44zm36hkEqBB-r6Uy1yNV-yWX5oGYsKEC6IqL8oEMsEXSrwSFGT24eGAkEeuV6N5cyx7IZpLm49eSkEwdzrKXvApcnCBgpjJ-n9llCXeHqdRqmtQs8Srs6nkpxume4b2oJQJHna7SI6tLbcisPViFpeuw1NpNzewDwoB6M9F6PO3FkeOglYpdxiPDJQ8bN6YYZ29s_nfscIQH6chrNdbKcsVC6Z3PiHoTgy4dOWfLVfQz8nNRp8xvAWqD8-LAeXe_K-vad1_P3voOvlxgAQZdPUeKRG0u1BfhcLkLiLb0NhBlzqdNpnJmjXdTwhFp4njaJLFf1R94ggzFWm6-nDCuCI4_mMTZeDbqFZF1Ox7NsWuH6gTBHn614b2f4xZUkhgmXLRw7yNEjk8GaCR_C3clpdn_MYd33u50BwW8cf-mQLG6c_tpDGJjhvCYvhgDD1WzZD4GH52kgeYI-ojpBoLVMgp9uzxugV0Ee8xliMoDm6sGihZQhbJsfZgB6vAkQOrYaK6BuQzITRQlbhWdYKioGkg-fZU6p198DsunpuF-HhX7kPttlk36mYDiJS01rSwCd6bWb5-Iz8SFqKs-FVKhbgWcgFubVEwnAyVil7k0MW4tuGoYxaCznnBKPVTOPaE05uodgu-jlhCBU8c02tho4cYEVuK5y5ZJXLbt9pEAC3OPgqu5UwVkflpwzd8zWCIgu7PxliZh37_5uLG0ZXddi5iUY5VvD56PWxSyo45UnW4XNdIDowhouJD_2JU3pHj6S34KkwaZ5AA5qma0pmpBWyx-n4C2I33Y8fCVA8xXeTmGQO8_B0RJOCxB1yuDzqEd0daCPDMAtYSFIZrrMqlXzjQX8y5gHWQsCfbYulakDT0eM4Ino5ytlCfbsLYfuumBF8lYvIXNq5QKFozK15UvgPTslOVs3Ae3lBE5lx9sEUoARGew2nP62jrHN1gC8pb1SnsEg1gVCTUTMgvbuSy2Cehh4D0PjZWv_LI9-7RrbtLhDUQkOFdSqvSkYWp9kmaC3TVTiRiJDWwaZgjnBhbHvssf8mCbCnStUYxI1MLL80Now-mgdRl3XLqMn8r-vHVLmroPzf2GoiCgS3VkRMpGebXVrBfBUl-s74M53VhhvNNYuiiR75wQD1Ety3dcl3PoT06JyZLGWbB7sN6nfbEiiCYcPhYV8SF03kPKGqz7p93331t7STq8pFKtzMez4CHdASGdsIhBdQ14guHQwTbHP_yMFioJsJmVxRHnz9Exlw9KPD0ZZucdqcAgD1NEhMRtioxVaV-hH-oc42c32IOR82yDYGNTJ8syJNTM4qEF-TbaNFRi07IYsDX_MVt2KxBk40Y0dAqTmtzm2NzoL-SA9qM2RY6FhZlbND35gafcRt7-A-U0QgWsz3P2Wu6hEulSuTojTHBG_3ZTKAOBDvdeI0eznAQUTECZaHPTh2tHvkaOrjZuM2DSYQKFwbYws" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=24" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=24" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "1f78ede5-b712-472e-a58a-2b6a006847e4",
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
                    test_id: '24',
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"1IL4DNPLA9MMD"} || {};
            
    
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
                            test_id: '24',
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
                        extraString3: '24'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '24',
                        root_domain: 'gh-proxy.net',
                        item_count: kws ? kws.split(',').length : 0
                    }
                });
            } catch (e) {
                report('keywordsPageLoad', {
                    wa: {
                        extraString1: '',
                        extraString2: 'gh-proxy.net',
                        extraString3: '24'
                    },
                    dmFeed: {
                        page: 'keywords',
                        step: 'load',
                        kw_variant: 'keywords-test-9',
                        test_id: '24',
                        root_domain: 'gh-proxy.net',
                        item_count: 0
                    }
                });
            }
        });
    </script>
</body>
</html>
