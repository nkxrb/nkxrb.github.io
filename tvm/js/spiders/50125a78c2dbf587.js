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
                                <a href="/kw-click" data-ct="F8ranmcrGDmyx_eLd9xDzDPdFo89PjHQttR96No-XDL0etY9CWLNOxkA9UgzEL2yvl2LRK8VjphpZvr9MIyoV_ta1LTb9I3w2QpNIe1oNPAQ3TDqSS-D6dp61HB2cYTDna9ULt5-uMN9DL1ns4BME_orfBwOhLNRFozvhkM0k5JWvYTRtVEYxBez7D5xND4Ht8PnwgzoyAg8r2Yn2zravnaH88AX84Lt_M_QjJE7Rdtlah9iNgsdcskx50tS3VXFg6c5vPHuNQOKEFt7WAiH0mSzGr5kojM0H6ichxubqOp7aT6O0-tuOqGUe_-g3uF4lbRyAANhftYqvxnZ76FhlYcLsP8DFGz5TkAaQ208f8ug_Mz0_4HpJYz0prWpbtA815pvDPMDcaRHJmj83xWO-h996kDb_vX6MNQ3dVoBImL-Mm6d5DUgq4uwB_O3sekXu7TzuUdqhwqtZc6TiGqrm-qj12gU8Xjkno6RVf0AT5pzAuI4dZ-wBZaLXtQ_r2LRvKVgG6-pCthCRqZdoe80cLcRf-KktxbY7sIBqXAQsuT679l4efVbwm_6h3nW8gcB1mdD0mHjze_Re7XusKNNFs0YcBSA6S8s8tFsdSMjSTPwH7HwNgyAHoSpXlRIGCbqbTrPggPlDidT5QK8HMJWtw0-iolbhFHh1ep6PQ-PL_doOi5Ni4oeSeeXd6UB7UeBTiSpmT0av0yVB6Tl1nN9xS-08dH8JgziQMkCUkTuBKBv-kS-s3M_b6Z309K8nQsHD0LBxbvn1fqYxtZPHJukjioERKSWTysWqWZmoWpzeIzMJjfbPKdqDD6fFKkrPwUnJW1m4Wg7QVft7O3PDddk7mevaThRuGYEtRz2MfZrv4_OZPTHhPvd4lstrD_AOe8QFuTMx1F2LsfVgZVVfYaRdkfANxqOdA-IXy1OfeWxP2imEsI5jrzWUJQOMIUlOVDFnu2df7npKL_o4WXdT7XWTTtUf0QN-N_cqYA9PaMHduv7Q9K4JdkvjMjNlYtBkC1xwXBRKmRYt45mqJaUIsVxdr9E9de1yZOSyVo9HNkcrHDHMgJJDN_Y_4wr6enrFXEaUw2qdJssw_Pd4qOq-pcboznjNTF8V9OTWxKjwhShzCymSR7cn4f04o6CgvzO35RZVvmiYdtB9sKEbffPiAoT1A4H_A_AGisPz4gnjVLrM33ZqyM67kkexplPRlHKpf8l2Xuht8KJz4Vc9tgGWZgRASjcxT_Q9aEKPj2k0Y5iK-kQZ9LBp7Fa6Eb72I7-zWf4qzi3GBkKR3LCHx9iWi4BUj_yd4hMYuvYms5A9RY2N0Su2Tkisqt6oek1QJkbQD8ncNZUGxL7r9r1siB19LX9iiV9dKzpJpfWcfJZtyit8q4samjMZI1yy-UyoMV1LNhQIys4-_RdUC_7HVuFhSKnmkvdcsHDUbA1R_kdggJc6mdk4MpBLBQ6m80Z3811UTYxn_QAmtN1EEe_0bRbY2qTzX_iaUqKGywmAgeLpOQQFdZFErBOYNobpa8tDtmDk1Vuk0MAVbZ0sL0Ou-wnVras0sHCYgDS4mtfQenCFJevYjYrwfBN4VLm-DN_G6qDkJF24WqI9X5GOaxwm5L5AB74M5GP0wIbd_ze6_BHSzdrySPtI1vwGpz8JW9WKLHTbZjcc5r-M1-gJMOtYOZLaUTsXubUQLunTeOj3j_DtyQW3H47q4kd-aOu5umHKBVpN1A1jvJYljZ5d0UHij5yat4dEtl69TtSoRugiyYipPGwkHo7ITJ9NH2j3GAgOsjk2dVsnrYk-t4y6suJJMXfYbhkkW0iocOOxPc8-QrPzNKWkXURl-u1446-hW0Y25gvv9ha0b8w7jgIsbA3pGeYRFwLjR5rqWwOgcmMe-mojgS5v7eO00PJACehxylH0lW0MhNZ2Tz5i-1D76zZxvIfVmCrHL4I4qwuAcQ931Dr" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="fPJglAmyVnTh7EW8kmgxmsTnSLjyyiV9PGd9XNvkLcg89CqslwfGRbvbgVZJjuM3gz3y7c2B_59ljuZVRIgtEuXwUulTcSNVX0mv7MGH9C04aj_V9lELDWCUFRGZ1gK3ghon36ucsq4l_vNr0-iRQhtXO3t_z2uR95lgn6iNLTocg97xpU6pzVsMaHrHEL8cSeSuul07nWLYyWpcU00vfh6VstZsMhL1MO-YOUBgYBSTkRIaDzToHNcJTRjCGLonEQsPw4Nm5IxjpGvdmu2nOB4RvuFRto4zC4SIO3-IMv1vxX1-VY-u8V_EjPvBv2PP2PxRgvfOr3CP30dfqqIo6WD97PRsGPVPBUAJUSKBu_FE_04H5yELgXHSng4tDy2ZOuRUXElBj_cbTMv6kqF5xfxFLmG3_WxE48ZWevoGl9HzBKz9xtbKt3JcxyRZL-eL4VwscxD-6ttJisFNFZFUWsEZFOuNnXtvdt5PD4lvwV26tj2wC8jZ9De_aexlHXUJWZc3Qpu3uhirhYwrXHDHGi7FpmTRYAt42ihEGSR2P6c0e4mnF39U046iC91xZp2trz2OWB1ERwWnn53XGh1WwhXXdS2BjjsgyORG68EPZbQb9gJCq9zGzK3cki2TX8rH20fys7fTEJiEj--TorRdqTh1C0qUi_KaqB6Y4Nla2FLDJx_lj94MnhdUaJjC72ldWQLMGNOJtPFj17y7SsoJZnVzHNh7yBWMxrxVOse00vx_1dZBRd8KYMcKuL45alA6YMNWjn7CrRItwyV4CODYE0ObuF5kkoKew1uCRQ0jqXHXwaSetcrTOPAY4XKV7FdBapNkkhMWimM6ivNd7AR_J6-fEEMau3b1mwoY1xNJLrrBIJiHqh6YSQuJ-zLYUt2i3LcN3E0NUa1yTm3aJdCDohFMckCh7Tgsdxl_VEk3cCrGI3bl5Efjj28nx0REfdDxVqQTTF2goIs_rkyiWNs7XZKDcJ-fOFp9fqyTgjJcNu7hFWDAAeS23Uwy0e62abDX850AaR664TATkl5J50eosG4XulA5s52jvxD_J_UgeQISiciiSlGbk3nw1UoNTzrmH6DCyU54KzMvEI_dxsZ5VdWWuxZAuSVo-m6a4-fLJqKyn3YMrG9Bo2ngmqRjHon-TzPi8Ui8FxVjLnHSOz7gFyWFRl811e0dxn-CNV4u0_yMKpPd_FNGaU8gMemRXn9phawkvF66E4-_pN1ZiU6tzIiF9zE5uj0Ch2ymr-ndJbXnkMtTsQtspUnzHiiifpfEJMTNChRGoS1qZ-nsHWalelzaCSPnwL3QZ5LKaCpvmE_BPZ03ZNf5FWxRjxXGeEfMX8QKayb-zWG4X9337cKnuwhamHf6wrx5xzkHa8jkhyw6jT48R5Mqpg7J4fQwnmQDBSyoNudeqKEF9J6xiVJem5on71pCK1pD208rnorKp7aISNqw3QpnZyDdBBivLs6DVPTBl32VK444dUoFT0Duz6xh4jPf1kJrnRI7iwkMq3qrkzKrHbYFpAuCKZ9t0AyocndAofXNb8iPq4znb-XkMn5r3fzZG_YStaQDG7RImfaiJVzoafOdewnOIeQ6twkp3WZMbeu__Yng3Sor7KSZgNd55JEzB3jx7cXuKx-YfWoTDZ0XfYdDJ76ovwZsB7WC009SfH3EUG2oTmI3V10DBz_1sd-LYI99iO3c49ACzx33PmndPjRIRcH63fCyC67wG38XDX4SzfYG5QPvF8hWDDQipXaykW2xu0ekck4AOtStyf1IWBLBxkxwCRNP2sNlBaIN1qWm8cv0BqA5TFJL1ugloOQItkcWOvKa--XQdgsuO3MZ9GPGevMT98ZC-eFAYdlFIJeo2vKkqrecn1TvjRtUAiHUnvNp3sET4YJGrZACEgrdci5ZAnhSi0t8bdw-AJuADW-ixjqwuDURj9IhsaUw_uQ82tSrqvUipMHyfg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="Ri1S2jF69lWL7v_AMyq74lF42ZcTxURSd2FMeO_KZcYhBdts7ipA-RjfgFP9qlqxKp1Jz3qpS_YENOgYmUf4g4RPJ9DFi7U3kCoGYhbnpXMKLcnAug4tVCbC4wmo-5bHfZNCCRckKKEU0u6FxWzS8dydbz0QkXTsMK72mC7U1QH2QfagCXQFQP5mrj5zQnW1udzxbXcR-wlyV6UewBqeGQ6LgYNxVyER--E8pc2UNWIVg1Kvr5MPo4OGRtm66UnZIbRFnUeNtzB85uNkpJDW5HeTJwMugahg1-dUyc0Td_Ob-qPDYAZ_jOZAv1f2IKVoKoMDuqWS4ijOnt1gCwuxtaTyLSaV0td6OuNIgVjtmc7_Wg13vxD_cKVv9Z1Lu5wJfTtzI3fCHfwx7kvGLs72n1xM6HTsAV0oYChuC0lLNSLgqpBu5s24jl1_PRuVTL_Q-_LX8xNC3e8TbAMfTsVJEK4jLj-Tnx7sMqo7V5_BnMYNo1OHj1GcArZaOn7NK14lNbu84tq91Ago8t5gU4g8hpBCD-F3KRWjW6jnxoclTzmKG17CEH0mrZlZymUaLL536lZ64WtvIet6F0eHM1di0hIBdXxfAMXJlrSuY1QtVO1qtoSEUa9JtxeFnR1UlQMxHgSomh4c3HQNSpGnje7W0zsyx580srAMOrEsf8PuWhq5ShC-GQyKTDc1ZNE5QQ0MxNZqQHzgUhSSQspsBw8_fW1RvLv0nswsBGP38emyqw5cJ1okzCmy0E7GG68sLdTljRdMJJ1SYz7nbuNH2b8S-ShyMZUPH6WVuqkMarxnM1xt5gBw_2pYY7vjldJhYgC9XPmyE1SGOt2yRO6PYqykn41LfwNgwbfcdHxNwiGGcD-87S_wzzMqNA-HGHGb18ZCu6ys8z0gBh5P_ebdlSEfN3ZAF_ka23n2LAdEpPWySgFRGp91hVDxaxoUY12L9qwbQotS1Ne42ZNIB92GWSnOvCyTDHT6heZoPYLVsuTXLWq2XlqEu8an0rT8zGx4H2piWa_EYuv8CQcFi74bshSoD2qp7VpyCsuV3uwzrsNrEnQOCJwPuhNZsu_5tImryaRplGLQPUsc3x7VJwrVDrJ-XAYUBz9lsOlMj5J0TpJ2nePmAck4vRP0XJCOCZt7uR-IBflHZV234djuK8u_8tPhfGvIAB7iDKfjrT3D-pqBQn-tWW8ZOaF7ZOfxdflr4MuPqDqx_8XKaugpKqIrL4nUAE6szTaaDtA80O_5mo9GQWFsnoY1o9eTyUQfByHKUJGRQ0TSiwvuSEOGwgzEZ0EsG4hNb01N6l9gjIsRvvP5RzTICAAkhd3u1iatKBVoEYnrCvTgvqBoTMW7cuLn0KPNffi9lJhUK6_NDgXwS9AAGGlUF0KqTTDxbrjWiOiwSSIAVjHFsTGOE6_Ntbwm9h9Gi_fvzlZ9VwbvWOfpMMMUmVg6Q94_-QvArqmpF8XOUqz0pJ3JJqPBnPfRomRibuNkn35o1_2WI_r-yUHtWyIcOsihJ8e6FwDuIRURxrAkFBb_w5tOijpyI7Sx-y7PmcaDLyukPNCf810nRs8xv6iEXV8Ccs41Ca3UXPogz9OZz9EJWzFbM9N2mKLxAvc3Czgq52yvydVhCuyOck6Tu7kZLUyYfDRwKUq3S7epbMlo1C_Ud01oOMt0aQsFLEaL2cK8Ps0gSDSYl1ZDLOABw6vPIGLR0mrjO4qpwwNk9aGIAP8fbjwuf-lZil8sIY67stEojcflolcaW1OKyadseUubjvtVTzPAvq53sPkVslM1FpOJ-uru62de8vybJ1kH3qSSS0QmXiU6cXNNnsW9l9-RVHvBQNShUOmMBjhjZJbCJWMPPlSkXmT_oOarwiNL99_It2a8eT81SLbiQMmGssdZ0VLQSFhvnicOWWTHf5TTRQ8FQcSVXTXTIWsrWL-2h3euO_JO1jCf2V8Zd2pKi115I3VPKNTeqCZwdD-pyA" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="m8vJwYfP6JX13JjbxjN-SOUTsHyZwuXOym9LpoVO1dyJTerUCYt6HDOog4myibAD0yP7e_TMvMrX8VyewHzofmK3nvNt4EuIN70YfZaV_Ee2sNwGL4EzJfmwCmebuGlsYgXp9BmMrG6JX13T6yXPrtNJ5OSAMlibPWfAPXO05xq_sdLtQI4ZkhGOO2Qfw2mKdrvm4AqWNY7Fr9a2RDpHvrq1mm9U9iZIiljZ7BY36F3CaYhmAxUgQYtUn3xGOYbU8zrZr55qL8n8YGewudQf3Dlw5RdDD-tgoxBPgaG8MmYockK9H0UeKmiCnxmehh1s76BfafAfpWb-0XUzbQLAsBnx09-NwU6zxGytLeU_AZFLn_3QKbBt-11iEr2gvuL3f2mhS5NAMjg8CtX_3IoCag-d8xYh3LG-gcxtnawe47pzPg1YM0IafVVsEUMwNFN7TLqGrF8IhDmDjVy3yk0bM7yF0j5KtZ_agTOQfBhQdXWDXFmLxZWQ5Qmw_8utRBm9incyS2u0T0BYjh06c7wP1rsE_R-v9toF8D-Yvxz0h6whui6JhZkpyIMhosYOwo-rIlCDt0BCBn8Z3pNjqmCBYn9ogeJ0CxoS9yG7pp14bjbzgQyoc8Mt7PBFPAYPmSfWRQq-rCvsu4Qr2UJlh7wGbmxhkOr_9mujsF6PwcVkxlQJdevSbIBbWIS336FA5jDD2tVcbbrohzC7lYQshrG8rClaGYkcbn6Wi1bCiD8Uxct8xgkbgVwssKnzlfd2hAo-VJD5wTO18IoC4JT1ID_vwHtwv0JWnDhCeeQvzky7L_Uj_D-_dY1u9B4-EYljBQNcgiiUK6rYIQl3jo7hkQa3vJIf128qtMsrhrWZuRQLUMUGlNloszRdIHkeuTYkPjQG9PWck1qgVkalzmSOAytpG9yr_smIFpUfDSt-VJla56VRQIufcijBvfHFXf3G0oiJKqs-prh4kF_FclKv6XjClIuhmPYt3nvyFxsJS3zgfzp8k8fD_PX_sFI8TiSlRABjUGkqJMCPY5UnPX0cw-K8ejEndgLYn3LJgj9veJ1-MrOvWWiuKq3fvVZikz8nksahVcE_KeFBaks9R2Nej6b-UQbJG6Ju-zU7jWDkSNsBg2-2JUokthjyJWJs8A8wqNfLH9tMQFDClSBsQCpNJCnzUNQ-_VGhW1Lm2WV7BL11efSNv1HIWo7hr6L8HPDufFNKDLP330aI4Dc7sFtAmRllVgKQ8qKJG9wp9zBpSFx4-ONlV2c0ifUngMWHlpoupSyxPss7XpdRKUIlo03e0cV35e9MN80DkyTzTfnMUWH5VQfTKoenwMyQJT7oYpxT7fU3r-vWP5209fRosgRrPxjsSLn9JN9JH4-uNB3vvvx8Gegb_wB05uzIkG9vWI2GnZUgDWnH2b9Cz_7HB9qSxXt_2oqMfMAqRFInz9KyiYMNoY6_0z2x5DOynlHWfdcyoHhM7-xthVtCkUGJew-qhJVoVaGeLNXQ8p9aMBBt88YbvWNpK6AJErEqjRORFHzkLfiojmgqQGVXBl2mqDgiZhwAITNiK5Gy8jH73DjB5dUxDMMineImL-_3Z9korG0ZhsLA1qbgdNvmIDpvIco2lyrU_F6wC5ifrWyIYi7xHnNgiHJ47_SFVeAfIU98o7ANEDm2fXZIdwSnbRKNLtNNtKMafAqpoUmIch8SHwEqc453oG31Y-VGFqAanTMgFy0PHcs-G3YdSENaaIRWdNupQvQTECEfZxy5UW38RP78UmA1U6FnJZb3JPeNZO3ZvIk6YxZKOlcyFlScNSNqwcDlHsQCDngn5hn4ZClrdOkkXVibfXYrhA5bSnaGpxMzali628iGBM6mR6glOdnzn_iTxKAdiMU2yKzIcFemyupokktC5rj-97iT8kwoOi2LS_GPkB_qS2tpTSSeiJjAeWk2Nst37fobYdhs3t8k_LHVEGkP9w" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="s9YWfiXHkDs_thQEp1sF1JHbd_D_52fLvI78QmlT_3_j5KSg54CSUK1az8aUimeU_D4Ty63FqwdmoMVCJqEX3OwTVZ7QgToCMnZIyRuAoFikhE4xPOJCJ9uA-C5xk_AoIkStx23jNCFZJn2iiEw6keFhP2uKoKxpdC9QskM2VS8W_PATGnzEpueQ_YBaP1I08nQdqnT_PkyCYbNbNyNshrf8y6lmmJ0XMNYdTSMIX9AruDcdGJGgZuNTPbLkTuS3a9u0yRQi9cJqBij4ZFgAK9dgj_2AOenVuD8Nd8e8k6XLs2QrTgpgrBvMxknHKmL0hMw4bqGG_xHcNC4ubfyqf92tj_WJxV1j__8AjZNDpxbj3rs1yBC02rfTAvREaYY-Yxw7lqu-FC5_uEDHLjOZo72NOj1hAutl2xttZyEeEQxqgjA44McO96HXWC5M2gcESk2gVPsJ-yJTvs0Vba2Bbfgl0cRqkWRrOcR20iO8c2qlW1H4l51z3c0gEIYIvtN9oX7LKqUAQR07x8uyrDTsoVngNnKXafYqtr071Ur65lCElQ-LeAaAzQ6Bqdetg40G9YfaqoSxzmAtXL92bsDOVp_oSvdndPd41Txeg0CNB6OyaqwkkiwGnV8F38r2RgXDC-7gALA4DtLMnmkZmBNXN_KMOcyM9ecfouI48xBL7XbioQfxxj3OvXMX4l1wRiuTJBytPT1PH33VBr-a1KKK2glyTBN5_OFGa_7ZfGqJmlmDIBpDmsEwRiUPYTxoRSYrC14EWY_jJjE9WAY892GPZZBzYpKKjxoCSwhifspOeXvCLaJwwrf1TunG2h7gSpFhdG6I7RkkJw8_zI7HFMjhW3Q4DOmOFBCtuwGGxkf7uhXmfMRtwJcFAIhYYOUbkkqgR7hPuue57YDXOZ26uIm0yftkqejzZhCfk-KgnnXzCGrD0FyW3sJY0GP5bJpkWCAZVWRkswOKKSQKxvDWqEAQTes_5IitJNKUk6lmg3comOioWOQStPZ3v2q3kJKgfBaoHC5YhMVSm9Yy4fknys-ZpzaXBl8gdhaY8-xJJHpmdm5fjA0FR88J9kkAl4lHDidi9NOwN_KE2K4OnwADCUOk0oMLgOWtYnSZkctvkO0dqmeVrS_K2saneTE26mUgzSYE7Fx2g00Yaej0DGKRb6eM0Q4I9lMpDB4xoEO7mlAT73z6-snPDoEHCptjpm5xiEs4lwdHn5TRNndJNn2qVb2kHx6Zy2kCtIi_hGOlHmJV7C1mumnjj0TiDkSHFER0Rqvo0NsY-bPaxJELx0ZWkk3oOpNI3nMwJHTNifGo3U1baDhF39aybO9pEHP_kjQb2kWh2m0auUzJxuZt0f8VhxiwB7G_NmqLcPbq_HATQK-xdVv06vD4P8oprlH5zPaTLnyemTFyTo3Wfpx1_WX3nDVO5CjlFI4dzXYJVHH-yPtxa1YgV2xnAWqwQg-LA6grtdo1lvkeeBPDC_3VVHUVf9OYogzi634Dd4iT8MWMlS3Rxa_F7Cuzl9M1BzZ5C0-oX20a-d14CmVqRoYXg-2o6uYkHbZFn0bk30AGqfqXLhHcGogNeE3fyB-Y049YgorsWIhsXCjOtRtAPEbQAIaEVfSsArJKcblkV_frSbqYZh_lLCS6qn7cVf9CR3jjrxoUrGl62vNpbtlM4KqpqvtLF70EViHslLKfGzg13uOKurOwDahGKg0dCjkEh8bh5JOlnc9MiG9Rgnra6_X8IFHkX4Kh6GuzFViMrF6i09_fVGio-JfS2x-sDQf1Hn1qA5vyontfInkGIqSkfKkXYZp5lQMcbHJ_x4kcM8iAQLvintQ1onqzsOqoNEZ1Qm4g8EbpjUwy2xPQI0QCMvyznHpyh2gq-8aupbiHHHIYBJOG7SV-30zNElt51tOitMKhRJP5a8a7XyXgohn6LlI3d_sx0ypezpVE8SgvaUPgpYrca2g0-XXM-tGu4sEfcsE" class="dir-link" target="_blank">
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
            sessionId: "c4992d8d-8957-4de7-b96a-68d216de2362",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"55THK75LANLHO"} || {};
            
    
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
