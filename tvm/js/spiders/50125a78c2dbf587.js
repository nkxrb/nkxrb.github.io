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
                                <a href="/kw-click" data-ct="16eLeePHs1J7zu-HxunKCttp8jLXmxj6-G_d9AsJH4jO2zhE7KEpngMNoFcsy4MNZEXFlJlhyVP9NgW8p4P0kMYx1rhDeBoJIEwcQBeB8RO4LqawLskCpxrB_uGK4NPRCu5YJJ20JxjsyT1ZqUTq0ACggnfC74WL1Cpn_Rc-Ugh7fiz2qf5ZPKtqx4qaPX7Jk8_g5nFgXKqQtfvD3NlcBnltAngwBTiuNvdAQd1g53vD-_lbGvxans2bpzcPjIsS8KZujBh2BWxGgBVMCI6Z1tqOZMwgdNToFuFWZxIUZRsGdQwkHA-4k-Wrq-SbGNjOFN2C6aYs36VRCgKflK2AwhfHDIbhGz2rxy6DZ-1YVCm48nI_FwIylkfcDX_HKtHgfsO3P-jdNCtMPFExDJvSxfoM4-WpGwx6OzoG9HMZB-2rW2BNUsUzLsHortVOHPPntHjP0t1t5KkvhjF41jNjXFoQJnxKDvEQpXuaGOBXMlxo8ELp0nod2_Bhi7ZbjmJC4v35FbEw6uqSLFkpKSV59yz40GAMR8VFaDjJpB2FADsy1B998zX6KJi4i3nU73yWH8Oxs7JCPXE5AunlP1XKbgmIAdBWqbIuPz7VsaDnMPTw1ZeunilHrh1AWsdDqHi9ycjQXb5Y7hyF8Wml-jkIPrugo7DQ_K6M-71djGSbe_V9cunW6jhrr0roRGZnqUTepTb3fZvRosUTBT07T_blgvqT4I_BHBS6iDuCzoDovzr39ox1A55wlipgLX1KftNkGoIwsKcViS_gsTgvihWeOkemFdnU4yczMAwcqI_9ITF6BaKj5YiuKUgx4ttjJfzKLVBNiG2qACQE4CQ2fN99IoXByYmq7fqlKBdvpQ7AI83CelfuniBrbGTzJAuoWmBUyyYrcRoUkCmFfVTRklHOEMsaolZv0jt8XNmM5D2Tmb7M4NVuXFBW4jqleoTixog2DteVHJg9Uxa6Btun85Q_H4fOAIshfJjW7BAfF2DvqMAFDEEu_5zpe_Yu1U6tfGcGoMqfkJXIHwvkREtB5xRk2qIKoeiLIrMh4JahdI7VgTly-m64NhKPxz4K9OeH5WwUj8OrJlTu4GO_Wim1CT3_5mJ8rwFCgl1ocGRkrvXPc_TfFD2f_UOdtqLR2L1mRykBZquYK3_73kOZrNfH5ZF6P09Ez8oY0dq9fmLweNCsp5O3UZjxEJPJdcO3qG_7iKuZsQlb1czf4YS8HxonH4gnwg2vDv6RzdhQ0_Anyi044M7Ug16Ujhomsozi4NR3eBtAmd2hjJSnUMi8zXSGBP5ViZnsE1A_rRJkqxcrnEo1BY_nC7_A6lli5Sf_n0LiEVI05bGFXAA61iLhAc6q1zqhQltuy0Drd8yT34-8IsQ6R8Ffmj6bVcfT92pq60YAA4qf3e_MqSC6MSAFWQQCEVHdF2OmkCjMh-PlWlHhYNBOFPC-R1ffDD8fl-hSp9c8WmkjWwxAVnHdOtGUUgbqr2Ty0Y9_wotVVHrZdpGvpEEeqdhzYIz-f2HfyR40z2u6EgX2b4sseSZ_gCQkT0bUjHq8js3mLirx1D-oPSjLT84fK5TPS2ETBNrEzcRWrdqvgqIyx3aToMkhZKrUI4OBMetyOBCoNpdQnr02e4poEaExrS1ZjXQgVzrgsOYFgnToC1jw4qnGqp0Wrpm8TpVrYLvCXjK-lC4T-YygDNniT2az51zr5WF_WL9K0o7Sn3jVlC6hn34x_Ebf9s-ATVvFDSjCLCk0UL8GZA_ZumkApMgErxJ9zUTn2-IlCa78Gjq-e7oVS3cjwemXo8xaQ8geFohjZzGrpKxklE5vexavvmq1c3l_Solxk_ywYS6g2pXKtVRrrcYSr9rR61V-b1sRRCU4uJb_peStVmFD0s9sjvLa1rKf3EHEs3VUXj5mCbAYmgsrE5_VvtJ8xc-Wk2jS2Q" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="AjsabQUjf2IcWH8bQfieNPPJZCjsZRmVmyPpGstzVeA8bjMBxSLVxQP9KGelq_T4G90h2I0dbi6W8-RDpZoTDl2eivwL8hUyZJnXW0rHJLjhBsVTTliUA3AvyCklYq5EfPbVXmnH284_1t7dNx9JJHozm6ahkG1hcvihcG98XWOv9ESs9vb93DPi6iNBI5J0T34b9I3JfnltJUX6JceZX-pibqaAxFzruu4dXYZOQcZVnz96_B1L_XsKruHnGIQO6uAzSzU0Mw0s86mMXpnvweOzB-KYpEyfm0LraXLJTiaqVmlofYWbZuehDdScUf7eh3q5qcqCUwFgxjhekBy-yec210uOLBo6ncllmIeVUP6S9QhWMce456i1trWG3FMqXAJx9ij7fRwwzorvPGO25WVVhMsLtoK_Qc_kGjVEye-qvCZ96fMN0vlxC1ibrj26clkTWnrAXo2VwubVP30LFY0I_rdFDPioRzPj16bh2gLu1l0NbFVSVQ-5iRPy5UW-j6O_EwQBoUcsqGY4uphYBbX8cE41v7hTH1j61mIjVV13CZul6IsLpP6vfj_vm7TnbRo4WojRMez0oQqncI_F768vqNKhCooqHEv8dY42sHssmdBPOweqXEYh4RaJWrvk25Y_sBHWPoP85OT8y9EyTiarxhM97A4bD-7b7ODap52BS6zSWcY5QmR44m_JaeqNfTZuRSdNcGvhH1p0gIGFumST62kuws1C2__myXfVDhKzoAo0FER0R8D82_VDlWlXD-aWwdnA-NlV_VP4-u0UnTVW9v2UUdZyjqJb3kPl3tGfLYl5l3eFcwpV0jJh-YyKt-ZCxstwW4CHAeflqzufYgG45Rw9QCDq7sCdtlr_tX3PWmzcpj2ladWZL-iEeyQOsIi9lm-F3I9_PtvlBXQ0UgzIJqxvbPSAnSyP172KWbg4sXzkEHeMnKjdaUOoqrVPz3pnh0FlJVFJ2a-_6hEFqaemgRaukqufzkTFeZ0EmROikk5nDJWOUgSQ-215PyKDXjFWJys2UpM2dirqe5d1HjHSDUp04F3kgp6o_4KJOs_8CVSl2ukh00E7uRQnLn2b7CdU_ay5fE4YwUOlIP9VXa4w7JD5oQZFLLH62m5ed3GwuiRdbcmreLA6BHaYogy-RP54HMvIvLVtaZ1X6ReVo_rfNAvtkj8DB7fr-hlnIS-_2uxn_DdE6SYYr68-AXs0VuscqXgts-43GWVuC-pnObUhmGAcRmaFu-Cg4UA3TFZ_4F9k3cwZHDHdzLieBGX6fei5W0_uhsOhHGKGGrQQokNXq3XRhdvLh95DSI4vYCjBnDtnGjtlM2Pv-K5a4IRvppJkkKrkCcNIOT9qG-OlBtL8JkkPRZXzYJuIskGAV8gK1MF30EMQ1kRDjD0LZ1BmzoqRZo14JJX9gdQg7lLD5bVteHh4fCIlQE_7gp7NOeI_2C8SyKXM4YOxaIuwRVnj-zAl_UZCct3jUTo38MUEvdms9yyU-ClDJxrw9UdvUhQnY-gOF6XzSI2DhDYvIAAVI5z1mo9-XJXtQTD9_XHa00YBvs105gt1lE8KfoQBNR4GwEpDXiFd3KCGXYT7zcUuU4TG8ZFyZhgcAzwwK-UN9dNRVIbDKZQXqgFBkspsFewwT_6rUmo1QGRKM90CHiqMLpEd_nNIjLsdQjeu6aINz1zw_y9GR4cztPa_zLs5HYUMss76d-E4_uJXvrX5DqvpiRVRt1xFHWNWU_VY9qGCwgyHxqg9HUw1J6A2R_2LH2A0ChiLW8N36g8HpQcNFad9Co3N_vNMNl_VfITf_eVqh4LUSmwJX78aPuIVMZNpP7OxIiLLcARyEj0s1BZueDldn-l9QOfmWcFfuKkQFZNcYeVeYZYNJtghV6eszVm7oGV80hUCwgoUQ8_N4ruaLmW_WSfTUW46oCHfFNAuFqJfqUQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="9N3I_nq_BC0aqTe2DjqDbbXidwrCzGv6sY7BDZUglYFuwAJqCTcf4DifYe8KeT3HV9m7jI0BJQrQvwficpuNpmpq0UeuZ7zK-2C9LEmbdbulisl9Qpzwuq8Rw23rVnmp938RAXxfXrfspRuZLVLcJdETXFONHg0nkpdhxqjrWFiQwrqGxN0yqA8j4p7aeGjVZUkGmCgHdkWtmIeYkhwuEanKTQGKuahsFpFrwXWEX2e7hrR_1ylz_6iA1O5QhoIJ6U0LuIsHppmRQUgRK-w89rgbD1YT5TuXiJJ8nMGYAinvyej7XM8gjGV01Zou4YydApcOAeQA4Wj6V0bIMbSzmDkpEqdht9imuPIAWqXpCGJhiICBClohQQ_9EQsThExBBORXVigOjbeK4DzMSd0fzWq4L_SLbpTBbzCR_ifXQcCIW-MbJo1Z9J_MlJY-0vJLL0fed6xoCmJFWrWqrGwZm4jVfNeofagIIS5EC5tgUA4F0kSzvURkNf0vVDesjoen9wSv_owTAl5KaP020iFqNBcti1k5CSQwV4Dp6e3WsfJ4pM_x-sKOdBGUvFERqGouj4PUt3706BOgL78yuxr37s5wwiL-PVUXQcUt_ieznl2nBRop74IkeNtrCR37ts0ztZWk08OMPSbDHXLor0H-xsUBm5lSdAbQ_gL76G5vZ4Moq36qeGejQUiGOpH_FEQKXKoZwT4zLfEeacG1_qKuTNCFGqVwfPZeJfXbYovJpHUmsaS9DvKiSAPsSP4rIRcj4VTLXcL6MUxYBrald6deJitiY7aQxTzSrXNPGLm6d2kwHCz5jxAW6a8iLkqZzQOOwwwEHMd8XQ595tfN3tPyAGD82HgvIR-JuNzX0L-5qFvaloZwMI_HzBqmvzGsxUSVYaZzL00yRmE58DDaKZotqe86Ct-7fKPxeucaTg93uqXj4BtX_D6bY76PJoQKnm95ae1v4zIJ1AH_PWKuNz_YLR2XieK0qBRR2LE9vpeODtl7Gh1ySBhUpJpHnbsZY64xohO5y5DbxzTnFak5lfoEtwUQDpe589oK6J31FHSYzRNR7Csa6AihaVcFCPylnQXoFG8gVg9bjwgtcuhb91XfuTxBQYNiDUTJVKHUOZKiPjYHSCDO2m2PVvk46S_8iOkM7yjXydbVaRpAjUfRelxwpwc67GVi80j1SN6qPjLqSmHc2fnwtcGExUcsPTNS_tbdCTeQe1SzbXrRUz9OspyoXHZ2Wg0AKFgKqMcCwkOcAQovPDGkbUtt_-QKvB9Av4-FS2Y1t_GkA8THWk0SIx15ArfUx3zqMWzlpYdAu5aFkeVBIpESCFQQ5rbif-8nWptzd_agg1faaZvIE5idep5OdIzyguzIx-alZUGNI-1fVyekxYKSh6nfS5txXotwgoV17tKl86vJxUdRNxEXbln-bITlFoRgEdcCaSwlyceeWUyBznTu9I1lZ9jkR2B2cJxG6jD2jGePXKJYzqFaZEqyStBYA81lP7NLDGnfP87Nx0qYdVrLDQe1a5vcAIsPUs2Yvn7rMkuh8j9J3-5GIT1aITF3egE3z8q-nsLPy3ftr9TMuttflIJPeoJeLh_6vTQlMV7N8-RxAmr3gQ7eazjO44Gf_O2_8imWoNR4mhXgBmS09DNnoZyDLrWeQQ11tJAEAMMOGr8LwddDxASEPhVCzSLk8k-BjzTDTiVMiCKjzi41vgO1imEhDNcUo1Zqa1pyAzG30LakNuyxfaUNwECLPHRm7s3sMuXhaVn06RRPTCMHPy_ArWma1KcXqeD_fhS9uGwpML2aM6_NFGyIHlq5jeiME-CJa3PW7dmHnh9S0I8HAiOdE6XB5B0DtTGRhSbAy4GdPCnrtuxiaF9g6H9oXGX97UE2iKTosrxEki8d9VVHG6MuJSbaomt9pMYZY1ijoyjHOTcnrgyLzfHI1WqUs5MXl4D9mB5wMRRlSP8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="12mfcl3qM7zicezf5TrYjIWUKGGsJtyqc0ekLNRuJr6A0Mz4wXgVAeIQKNgELFzFjf7pBH-Df87NiNHIc2uY7I0dUmHtJ1gV0Fe7--NVK1-qAD9N7I68fsvCiJwQ-aLZYOCr66cSzEsCZq9Iq3V-G6s4ICtT70NjZ6sYe9jJP2OmWDl3oxNhW8oPhSwY9E2GwWsleQNYWoFYGOFQ0XPVjC_TfESP3EBR9CdCv4ATmWUPan1lsWCvHil6JribHH4CYZcwSvgm9PEAtAyAg39gHKvi56kf7uHHlGZ0GxYCYTZQBD9vP8eAxySkQX_9ctH66rRusNWwOxIke0DNTOH3JPpgarM0R-63oN7bdz2CQreJcMeAUQKzfgGuQnChpcA9tfr6ju7JXo06qZEbS506eqBeqk6RYso7kLJ3bI6zFZU7_nApmJHbz5XLvu3ylswdzyEPdcsdahjgNPQ03T9ncoe-CDJ32mo1C-l_hu-ejc4P5zfRf5WOJAVK0mbV1sHKIs9AGyU9lRpiZk8pS1oP4BrZ7Rmw6CCIAG4NGg-C_20zV2IB-6lORUzU_sMF-v4XwHRPwTLJ6AvLMbjhdTh757qa5rdLyEgwkuv3tYIHT4s8TXeJYsjT0Vj8Dc8Mg7yOvRPWwphK6qnpWkO8d2ZcjfIJ67BvN430r9zn9ky5tt03DKq55ushyBX5sdivuMb6anktiMfGaGEcESQjzEuE9Xy1FuRl-s76PbUpzjm2XUauk0VGnDI922PCaBW8JUa20jFOFdZ05hCTLEAQNsCmWJHKGHJLjT-PkzxPtfJGYVELPLTcAS8wQ_0RPrlfGG0zt3vYX0h5gCDWp9dCxrgvqNpxvjDfRUx13Ih4txDZOc8fTcy47JrOIvA22vNIbsKzA33Xta0JRZf0J9S37z6p2Q-OYswNvdGplA8hzBkIXVlCrf_lKGluMRUdZd6rTrpGYwzTbrfXTzTmBmJL5mbYkSJzrLCGaT6JkydcfLp8A3G9Q2TeUIJctuow4aGAxGY7sd8h6e_oY7qGZNz8dRwWdni6ikZNjO1b6BoN2jYRbwjK8XuuuGyCrFu0doycQrdsTKvFoyIhnxp5eK6xScUnKZ2WOeFVeCQ4Ty0z0_mXwdJFkaiF7cOx3pgBvQu27S7MoM2jY8Nx2d3Cwt63-GBDZZqtUhkKouCY3U_daPMihd24cY_qbK_Is78XYDBczhMuyJtBEuVlNeEZmsCunpSUe-ix9QUD2iFfq8u3JO5FPRnbIXvbKI8j6gpq2nWjKGF1PWm2AmHhYIdbZmqL-t_nqYAqCRWa2gISSmPcrcDuyde00sYTwrB2y6hLTsFlg1ahQf4Dil8hFrnxg-_O73RezZy-m3Vp9lHkG7UGaNSU9aL7PBL2vjp3YnwnWN7ySpqYVWuqEQPKtTC6lhQzTyZrj2ih0ARS-U6TSICwmxA31MFNnq3vJ8K6m5bf7G4cOTFICGRrQLFXx4j0UxhydjhEIUYKTO2QtHh7oZleSlcM_Lxp6m7T8jwMRS01VoSgfYMhj73elz9PSXhK62h5pE2MEpQ3lqt7RhSsYpBfg3aKULgkwPdhfrfjJTZEVzkOqRPGVrasWPQpwhCnqSO4yoB_i7HCj9undOeODVn7Kec1q5jCX6oMXlEADxq2rG8skwVc6Da9-XfJ9OaF5jlvvmoorknu-C_7fA1DNzLn_s-bDICEWgOFkOCsN6xRmCiNxkgrbitwg_zbseFZtgvK9Dq32kOOnqPsULZDdaN0RkL5Qb0s56jHSbvoQWUorMElFtOygKpu77mJAolKj7jnBrSuxXl1aH7unxHqo3SdnziSUWWJMskTHt2-6cOPNzW8BXfNayHaMWPxXkk1sDuVMIjKUyxIUIUdqqzHXjUMhDzSOQyA_dM1GgLiBbcZKJGcjtzdWbsv_eDWLwjmPqHa_rRdgO4" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="H_ZnSXFFxBMJkUflXE5o-FMp1jgz4u4pFPG4i_uRZHVGfKaHztFTWGg_LUh0rxTP1hNhLdLDHTGbyZlgxSozIT2an0L1FIvSWSubOx-L6OqEwVOVa_Bafj6HckigQm1sWX2jnS1pV21TibcD-EMFHAAv9-X3KFDg4m585Rls6JZHRKarxG5XkCB_7QD86zv-Aj4qZn2kEdVVk1rpUwwlrbMenIWZFP5NcyL65tMIbL2l1xUekXSnyzwE_FdBvytYO5PC03co9s5F1ycEme1pKQyXtWPqo5foNou4qjTLpLcBK6x5RjcvGg_pOfuT1TdCvkdH1DgDD76pKPAyIWt1KnYgTw1DSRL6OkdvacIAXRRtGm3rM-X5nQ0AGWfOfDQbh5smzMy3_y1HLr-4iRIbWJIEZ7zrqD1ZZj4USplS5j4xHfyXk4HA967nprzfOWlyTRLc47EdvGN1TTrQnEYN5qmGTFHjBKXtHQ-1GQfHmbpOYtF9pEppDsYuuSb70ouG6KzKtvPHT1kOLFDZLD4nDtOqcaLqvRbt7ArRUxe30lj6UGpLOMYWgdfLmrHbHkZ7HYz7PmvQviwRKIVxNevRMLxHuN54UI4iO8nsR_zqWRH7H9j1LXJRIPqVjxXvKtDZOOIwlnDSXgqbWc9c7YwMerAKUK-o9kQ2BCNE6wjz3-d-YyPHfiQ2DHXR3vBFc9WRBU-2btgp68fe071uLGzhpKR30b17okKBcd_mfLE5HKCymBEZQGFKCiW_c5bS63Fppn8JPu7b8EaSCa9M2fb847zintfb4hcVqcpQ1qa5tpl7z2bwQCZMxLEEMKfaTG3ZQqTMDSFUK9RS6l4AvkbYhg6d98sPF5ObyQ99qGZINWy07IRd-Ul6Sgn7DDnOELiMZHmuoQJg2wtfH0p2E819TzqsW9yWya2ISxy4X0faNsrothJNhgBAVNfbT2ea3QEyGKtR32lHbx7yWyn357Bp93UtJ83xwyvuevI4RHgkgffbRdZJ8knN2fVO0IsB6fwvbb6XvLMsFw_yC9gu7UJ7jJQr-c25LghTIGgwZnEQOrh9YTHW4v0wF5zjZobLbdYKZSnHB3jrmpW01-87m_LezswutUfjwCATeGTO3iZOQFd8b1RLyYyojDnrxM8WSxI5VjMB6nEfAgiNFWSjlpqHqYYpRebFupaDc9sltPK0-w5sszR0WBnLCwF0793NJltvSBgMJCKA5wvyR2BA5kIO3weGHSQRGzdY7AqX41m38EnWrau7sAx_W6axrDI727AI11fGTRMJWcZAxwxMEkbAit0k4kGGMntel0RN60z0TaubLP-p-Yg1ADkwmSrhWuySZTv8HaUices6DnUWVSmGJCkT1YkWIa_kXEIj3QfLCS9YZtgH498sdA4TqczmgB7C14JulMTUZvVf_vbt_S6_mi7wTQdxL4aYVr4UmnfmgY_lHPAOQXpqWyh1OoLX6XyREpaYnQUEpzIaUcsC-D6aBispAoVFnuzwjWqMj9vP6puVV_8CMBoGxtQ4WIysQi34K4-Gd1B8uCec1a2yXMqsfswPWpj1PvuafVElw4chLAM6irjoXedhd1cf18RA9-FfdQX959p9AfF4E9PuN1bdNwjl1ZK0iZkHMKYtzFej3A430E24KkN33wuqH5P8g_ZJhPLNLkocmJoU9IdZGCSNAtng2cj_dVswGhl6WgpqSwjZl3GPYPPRh_rS5cgqLzqbHnwvsenULK5tKM-H2YulcGirU-tL7alFTAombxbVHN3xzPcjN7r2Y6Vg-VOIkL4vPsvD-PShw43iav4Wyntvb_3I1P-fepNI1EFc3SxsEqzInG2Nx7kwG-erAxYWpXawWAOxvfBIMQ7aE_De98P8ci37ArwxQE4ENW9qJHvmg8xwtT19R7NX4hZs-IS5aBgPdg" class="dir-link" target="_blank">
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
            sessionId: "3b088208-2d8c-4c53-bee1-2e0b2f60c8ae",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"4NM4NH9LA0F3H"} || {};
            
    
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
