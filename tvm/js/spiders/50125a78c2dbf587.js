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
                                <a href="/kw-click" data-ct="HvuB1RWRWPczV2l6agl0MXOQIb8zCa6bDdElK3qDjdZ4GW7jGny3Y4jffyL_f0j3kS-pb62JH3Z8sNFMafhrI05n2sjrpVXcro9HCqYu8YlOjpiCGayVjxm3ONnuIQUehNgKa9ixy8XUG_LdYHpizj3OYOpDRwbKRekgWGiL-rj-pQisS3zHrNg9FmLZ6PEdIvMLvMlFOgZv07yjow32-Yl_7hoqavuzJVz-PqBuyVoyrj10uCdrNOYjnzU0klTikpOUwSEc5Uurga3Drbsl13r7uGYhtZ-iv2SsAdrPW7dKHwogcdVPKk_ug4zlh3KT8Z32JKeIVgzCYb297aZJBcR_qhOCqiQgAtAIbRbiDbyWv2xuVkLV7IorLnS7grkNFaFVUwI5fHT0dppY9QnGO6wUdl4k-uthwX7s3RYa3fQOCCpIfSQsRlaYXe5awB1F2EraQm1qdD2oyy8EqIM0kwPDhzJsmpwwlBpZwda8WT-MRs-VuibK5UTWPDI-FN3dZHI7LOx2FV6QgRbNKPl-oPCDSLtQxSmL0G1iqk4cbwjV5G6RqqxD2JjXo06piaS0Nm_gQmHTlFhgO5Z4S6aHvzHzJ2KGTFZyPQRPXPwi7d6vjHD8kLWCQvzN26UWp-pZf-z1zujs4ZG2SGxG_FqgRLcXp683_QNTe_CPK0yA2DDABVN67nI2Js6lU-CAo-dlhMRslwKoMb2oI1bONCBlX-MbGjfXPVfD5D7Vz87LMRBAKLhUmEz2PijotCqqIOo5ARqJFHP_RQwQ2UAxajB0BLT7T2w3kR3WNqt1I-2HBRtqap3FhFjc66PQZnPU3VTwbCgP4CGK_b5hwpnjpJhomTg0gKqxq2n6caDVSyVkO2gsbYmbKtf5CFP2BAuic38EhzLkVt1xc6PCp2ihWa-K_FjaEULzP8phdoKBbtyO8vQiSQMNwjRr7L_AD5NayLjYI6QnexRtiNPTy23NzQPXs6KJNgzeINiReFiKzuyb9m8abyvRtUNy95KRXY_9e8sUSnbRsIx7vo_m3Jvt9aeIPbePHy2wVmlH6LbeS2ybJevOT3mIJ5Q_VrZrgROMuKg2E7YZoKPq2F1CVNe6BU-92yZmuJt-Al-5nULwb24VgCl4nLfoHz-FyRquXgLohiLk32oS8YTGt-c7-jXa1yYWK1ldhGBPQTLZbEnQTA-YjkZ5vCm6Gev5k56fkzWHrQuldBJfxUfnjIgDhxXNOaoBxQrB01ofRi_7lwMyBa4GKrhBEKLi4516lj7vmiuRaAI1Hw9fU7C2u-kczdB7ZmqGL5l4LDNTjQV_O435YoF_y3ZeuTIVn-Zk_paKC962_TVUBNCeco5IEYSg2xdAyzxwzeWox1c_ud1d15_Q-7_sOjQOJ5-IIkTUvfKL_26w3lLpIPAJ7YlEqCtC1gOcn5kNb23LgsDL6f0w0JgCU0kcU9akPmkUUu5wVG1wjOZHXr0Zv21kuwxFucXY3zVFBAharKVQBHlvVgnSTSjCV8QrressJqDrHNzPiXs6k3UF5zRLwtVHyEvfrPL0zR5SQQM3jQgmk1238oueKvUo_nc2ypIu1yn838Z0uIzhxB7MC2CTcI3FTvd0im0fbo7JCInBpVsI8xnDw4G_VCMJPZVzDbj13gHMLN38qzkik3hA1HiAZ_arfK_ZGK6qTYx5O5xf4kLnMGOd2Ze4mDbofYBEhhSJYjq5Q-l3ujiZsR9tBPG5wo-iRycmwZM4dEuCTf0qN06Bp7uuIWtdlUS-QKcT9dktLwu16Mkpyv5rdaoqweoARtkTXcOpgQF18Sx8Zqsjb7yVG8JdD1FsxP5Zf_KRQGYFyEuwuwkGfNhNNV1-H7tSXZH69fSWPT3fuF2yE0lE5dYF4XTLlYvQm8IBuqujBhYDCXxXdb312PeHS2j0LjruboeUvzLTzo7ZN0c" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="pUPrKj727cpcLraDS4P1sR2XoU9r2ASNRbv1-WWy-kZ6C4hMkcw3GAOEPhcVL_eAHao87oOf_DYXMKZh8-LrYpYrW8QKhnV1hZz3_GnlPuWvfbiGT0UUc3VH1xMU56gwgCdeh3YYxrxlxyHTVzocz9eLbU2134LQwflI_NSKmPgnA9wo7tw3HS1NNZ4_VItEPhN5YC8bZi-TE3NXx7kw1Z7TnwoeMKXxRTO2mOJvAhWyfmuA8CzNXQRPlpVe9G7XXgyXU1oJSM9ZNwDEep19NxsRUZk2QWmbcowVTaXGbzLwo_L1XPAreHwpJmrY06Iy1k_T5vDzx5HB0XiclaHoSGf6sDPjobC3d4YnJ89q71dd0hNnBrXA92BZayaMXC6asjJQbql8b2EG71qoubeGLvg3wwJlyx7lcN-q0T9r_vtgP_rKQ5TAJF9EaNXsj_NdlSfB5k4hVQNjOho7BFhGZ6SJqLU7EqCWKpgkFsgT8sxA4zwoqb7GWKvDRl5-Zz7_gWEdYAn4MOuuPFdBO7YQf-b5xx64uhX6hWjaxfVnpPH_gxODfkOYUUwtEx1UNuZI3bSKKFBvFzujrn65zyJjVr6EG7XiPq6hvLtM72pAOZ4lsWm2krK3ET0TJhngtnwcLMUniHE4uN-ntxieY_KDlXXplc2Gp5jKLcrlv1bVZxtcYgcWdAhmwez9GIp9YpaupkA6aoMUbqQLyiEnzadjk1XK17xwaWxy2QBsL_x0dUGOedy8pHOFFd0fkKyCIYR7qI2Ts8yiMEbCHbFFlGnmBowYGeuj_dFaxsN3e_BIoQUKHOUI7eU8m5ee2LeFeJzogEGHpOEclPOSHKQbeXHq89L-rc5-7G78LREFGbIjn3n8hrQ16lggAJ5u0MBj59lzVx_NBr58USL2LuImfG3dAD9avsSeUE5OWoQlF9pI07cnWS0MmcjRwqY7WjnCW7RLJvOUba8Siq8rmSD8KFkvg7tqxlWaLvnTgDWPvInL-JPVrX5g524mmsa86sWvYXcV-PPtpl6Io_6uO4O5freD5i5rQrmHCDt_O5FrudY5H7uOdMdpZU2c7ads5EZwUszsbq-CE0Tf0btr-_48rFT0-ufUl0VbndxLrz_jU-2XmNvKoZFN8__sgQEfBlhEvuEMRL0pSpBpH40KSGABo_hvH6tY0TsG-E1uYYEBHstBoYNxz8qE3SrhSkAMg05YZCfVL-fEe3zq_EdJ2SGB08hTLVd6ejFip32zXpW8v3XFslO_qg4BH1T0FtzRYvT9nHWdI_JaZQkdpJqp7LCxCrcCozVgNMYGOBGY0FPx11nQy3fRKVUevoE-p0hDNNAKHINe4DfKEwHjQDcYTiXAJO1Tj3PiZtNYgN0K2g3_SVtzv9pIDfm51uBZ8ZUf5T5YJdQcbyEU0Hk7pa0-nPd79Yba0BW30SclNLJd_lrCTGnBcsfbbwRHjn-ZmzSjwhEKEderfCa_qgWOLtFf9Gshh0SjOTfd7nVszJZk-Eog8NGe--S_c7-oDYZ60q7NResweiCTGNTLH8q9zP4Bi_Di5lFncHHqz-bvr-ucyNRk45wjtXs7i3W04q0iBfkerAhZnigeEMK2u07jqcox9jSq4V25n0hmBdHu9xxr4LsdP94FYbrF6gwtZBwgUGbao3KEbwt18U38lczKR4-1oJ5A9gqswAPvwfho7fnAaPiqdKv1c6U5_uP-boor95POJSEWees4swrtJMMnxc5h4FbY8aTOb5F4IpoZfWyi75afdAk8CLwG2-7cSZbhbpIYJMYPvyAqjyu5iLAHD3qc8Xi-slQzz5dKspiUJPEpuSbJvU5VrX9mJcxjg5AwLFqhl9uPzvTvqVb_Ndt9SqyfbJyKax5FJxmO7Vyegu86F6LzQFRRstlvVD8zOECP-KxXsV40jTHr8uOYpOIDOD8WmQBM8u3w" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="BaeBTyPeGl7o7GKsybgqyb7brydVn25URSScjN-nMMymnpzsL8J9JyoPyC22n-nuQzIfX_syxHR1gAQgbA059Pv_idjsjNBObKBYMYW05cxBhz_VFo02g_LJ6OSiPzNVX1U8Aj51Z2uArDiTXfpH2oTf6ayKG7BVKIP4R7lJgAJlNbqbvMQDeX3M5ZhMm1_nNOEWJAOdp8SMGdvXbitdIHb-9oVHCDIi1n9xZqQM58YJeyGsbV4fVOZQMFD9vJ9UdBbx5PWdAmFMte5gE8dvXNqAkz_pzvP6FnWJh594V0BUhi19qX8MhpU-ELGUgLFeXyB55mnm1rCT8fzKmT7uX2L-1axRmvSZGVb3CeY02WaS73hxgSKLUp0hSRa5psCvbgtlTGuAmanzx_JmG99_AOV92nSiVq7DFWVwlVNCy4iGk3tmVv15sQ2Z7Dupgyaa3kaR3X-TBjqnYsR_I6uNZy1dMnhHzeHBIuo4RHkyImvh-n7S1WZ2392uBPbfKXt-M7fCNUZnflsp-cCQbsuoIDsYXy-W9AXi4ZOkiPY2wAAB-McbV7fX56icXKu5jOtkTaZ1e4Gq_iKfEXJWKOjp-ep3jmJkE6PJAs0ZpJkRIkXpbxR1Och0KTQRU0pQV2PG-M_fgYK26bYZmwpeVPvQ9GCLnZE7TXrQGxAL2Jd5BZz09otO1q2K3yfGc_kmE-NvNcij2Um3IIqKiTOYtKWe5A4COUXlBkT-hjoDmPazcALIpBXevM3gyT88ms4gMPrD7QMN0QmAEZPs3gICxBuYgl6kmUbiyyRC2AmkGRODDlJSBm47_5KLUE0nsRkGBdV3Fb-0bRg_q3dVsnTCNLeLRud0cWTZWkIskJtorWy0_XO7leZINNOEP9PhsRnF80eAaSnAoNXrbI7k_FMYffSsGJK1A8d4z_TGqZK2W9nnEYlxBGuwKFkLCtDF4MVMrlbJG_s35-HkIuwI7Eh6d7Wqva6awkfU9UmxEEO2aZtDk_EyI6QBElXtmq4Q8mEQXW2U8MIkFdTmnztmuE9Cof9p1_KKV7KX1Yl2rH57EidxD23BJ1U9rMvX1KylfhkqRYVoo7xN4xVvQtoU7fsGx3M6-S6uThU09CtGAYxdGt6Dc4Ha0PHvCv6ByAQHP5dlgKRlpCjwZV759Dvthhn2GthJDxq7_Lyzy1AD7nnSjx_duHwagAh4ZsMisBHm0v8iT00GQp6GaUL2KfruXT83PxQVAHrbZXjGW35JYt9O67W9PW92WESu2gaVSrHW2YvZymwUS5Mjcx73AQU81OQm1E-leSeedKQGDTXajH3scsg74Ck4n3PbdAxbt9gByciL_bh5fuXaU0o9LHO_ZADZwdd-82jOtuq8kA0C9nOxttdAx9mrochz63AgBI_Hrvc9917xOhM0yg4KClt9bw7TktP9XeLDQyG3KHkYk_TcAo9GZHyYl3JFsBuOr7KD-YXj24nN4q6qQDB9_Kf9HVdXDyxi8dS4bmE7sLSxnotSdiAsA76OmdmriWFR--H5YEGQqtz-aPdmzgQHFQse2-ndGGh1uuQIzQuEFl27aYFHiSM86u7tRlXM83hmHZ-8gREjM1I4B0Zai92jL2R5LIsBWEcd8-fKtduXzCkQeiF_xDazax8JJSmeNcMp2jJWayXZZECXkAPs0L4vbjWeeQeFMYmF2XBMfSBUtdmThG4ndtTcMK415g8noqTo-hbdelfCWoalhrsMrKWJVSxNQwxf0MqkMz-9bb31H3sy8ZlAVa1oUZiFieY3srpg-u2KO_XAKau8Z1A4pmBosl4viXypGZbXHLmivM_OerbeCl9UYyXTfvwsS64fdi4K5WAS4xZoozmfRXRR_vhPYwBvUOVeg9FjUwhqc_QOjMzMH4k9FE7tIaBrTTLF4eVGzmKcgDae_LbFXHOz2knCCjs3V6c6OogEjPeUTQwdvv5PanRv" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="bsPfcNmLl9MFTDKSUhEFeNv53RtRkeQoNyTA5DYwWhDWFhUjj-s45xr3-r1zsLUxgAps2NO4rD72V8ab9w3u1eob6Rlf7u9foOBRVR8wn06T1NJJhbdZnhwb12rcXdqYz1w4TvXTNGyEnK5V17ODJ5RFMwl9ChWqgvV_ksH8QkPbpyK_G1qj0OSlSqGH0VoDTu1T1Ww_1PmAueMSk3dGjSsIfOtMZHz5ru8n2mGjz7v5DRkv_3WbXnF6W-CLq6i4DDIigoP8zx4XCEmrRYif0gIwJ_EIz0KDJA0oW010kFDoqmc3sYFD64MOxOskEmM3rzEWnFbOza0Z37-QY4YQe6U2fBnqJ1B_0z3NoTYCN4ji2qYUFODm0sOwD5ZvWqgkiYKxzgnwW7bNqz0bZjzA929BsOD6_QjA5r3zsfhBK7BV3yF72U1zHBtzNE2vLg_zKtrDOKHDKA5uHw18RT0ZtWaKo3O0qP9rc99RCaZkrtGl5247VvWlfyoEfrOOd6bl5OJC-EUAO1_Vlhlo19nWeHzldifjFK30qDNSjmWg-DM7M1ftT6_EpRzqAYhLRz5v_OmGMYTzjxYp35JDAr563cXLksVjFy6ci7Eplo5WtJvvGAYC5DdzUGat0-kUmFq-72o2X5PddeGfgUAGGPYDWIybYgTsknhIJQXXYiMjkjUEn6oBbvVupYVI8wSudy70VUlbZabuTJKgfLbYVbsPrtwSBFp1i2qlPkLRjoH1RRJeft4MVtw2qh8y1H3xjoZjiAhQ7BCnOkCcE36fgDb803Jf3-LtRZvp-C_DNxNnp_KE-S2YFEvsWajExIzapjpTrHr5oG8pB138Pkr0dltR3_fYJud1llQTfhjQo2ZlFo3t6KKKoOL19ZP5Qe7roapj-aFkmAIcIx80n_gzUMSa4IbjEjviLzrLesOc8dFC-tO5MZUz0411pgmb2Rp0yrdHSfEPd77MbRD0cx8FwtzNwpKk3Mon8XRgp55kUaSXbrNR7WC9Ov065AlNIYhRaFYKwAJuR6wvayz-tHFQvqkR2P8IoZEX1IimW29hkwaMP-VypNa2ZoROFvXnUvkWtCe8k3fGtyeZN8cz71ZqAo0lxHVWTQ3ZdUzeLUwY2fHbTyZkDeFQiB8baIDr2D1WKKTUnxNPueEnchmc1JJOOSo5uZ16_wIY1saLnKyiD4aawC1MY9uQZHNzQS5TczZ-xWTTW-Yj83IJatclN2B7_AgAtqsLEpWQTGoDRwvU40bk6UTAKyItYRw4ReeW_Pj7y5CKm2w6JPre_omm_qX5nuZMVPDBIpR7aUiYl85GYvR0Tw7AcMtczj2U8ZA4R8oS1UUoZ4texazmW9pkejo4y01QLFfR4_k0A8m04FbgUdQqVDJWxWj_bKzn807E9C3CoDfTAmGF8gU_fTMeCuSQgECQGhoIl3Agbtkp8bYlrGvEHUwG67-j5EkAn7jc217v3ZJK1OD4Z1Pf5O1oXkuNZuiajqctLNsSkJLVB-8DEBVCegaw8NKLEsaDRp6hE86W42uWyMUx1NVNDMPWNatQFwHQEqB6ywrZoUzfpBu59t_TjhrP1ZwHVOf69HsA30xQxGUj4JbUeBuTWJwz3NZhp2y5tMrgPgHd1Ako0Wtk2vwGmeWEjZJ0iCKpJAI-3OiCt4kq9pqxTWl00A8mK4AuOYF3FsUhAp_QhPGyx7RqJ9RNRUDGHeu09Y4fNfVwNa_cS49o8JAHO-I_i4ijLZAXJDsLmXDWyc9xkm4YLOggDGabIZf9vEM7paNvsE9Wq9PVlmAVUUue2cGF9EhyYWXfnyOjWomQQDd0se0uG-E_KFYrTW91YWwdNjSyLXuMalqaNNjVV8RdEY_KG6JME5vDIs_DJo84rFgDmupNcmKzViFPyPsv5m_cSHlzJR5NC3Ju0qYvoA8XbVcsW-8do4qFJwXC" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="6TZrjHpGSCHqqELWc3rhW1LD51WJhR2ohWQIWfHYkB6iy1bJ2NiVSC-gGFoJ3aQKATJANLSc-V9WiLoA8epGjSh3nUKUR6BpJvZN7yE1b9Rd3tx50yihNRmlE-TDiNRw37y_TSJPINIzavYaNFGwGZyxL7vI6fE0Cz46VSGHE5V1g8goKI31gpNqzntnUOWXVHJJHMJ4ApeAmI-2BdhghV155SSPci189I6gIDcM760y1XFLMR3HaajcM2k2dsfS7BsKl984tbJ2DQ-jiV5qGUEAmxLgq9sC4LuYxqn8EIHfqCesQGsOHGmhnMFhegWGeEcywD65MR6jRUSiMvFY3qK2ntxfT31fQgNhpnIBEYmwbnJrXrvRdG2ppK-UBzp5hIU9tv0CJLGp5Oj5eoCJlYDaA0h853hCc23rU1WEBfA_0qNWK1P3hNNAFbbrZwSp8KJc4T2XVsTm8lufFkBd_wQOm7J0eynlivJViZMB2um4HTIUh73oZ-r10jYJRzrM47NUSy3wZXxg0uo0lhAW4Vb9ToWlWx2IN2y_S1B8xR6ABU0rtsYlwWE7K-b9cxDBR2GiV7mhWzr0uH6u0O32-hu2Em4DnliSjYTK8i_xpXcBZclyrSAfgJgKqD7ThbQuzdVKEqxxKTHV10MhK2KOIttxlhL3g-SaKHGfX7OyxI_y1zLICGZpB4mWkL9-7EKsMMS2zpKsd6JdAkLokbFIMlWA8Ia-4cWmId0QmCJ5_dPWZqlp5ZhtUTjufLvqeKvgTAJ63RkIpi_HQalbU24br47K_AzIQUecHpdJD0RS3X6Xy1r3YBi_lujEbXm-bohY-awfW7GVyVehf_cF0iLRVKYzTt6jTP14sxFaxMqSZdRg9gbFoyDnsPDNFweop6CBh8Q0pB18FxMo3ln9qdFXqamuG_owuCchnsC4cqsmbuauuauN77sh6-KvNvRJjtd_lKRXi_b7Hi5Z-nm77vlZzaQxRMmkAiUu_SZTMLFW8tFkiGpJXuHLSX4U5RUpKO_1KO4GXfxYFU54C5lOw9YqIApHT9H3Q5pwepfC0nbxunvyb-XFLpSsXcf34u24q5kNe6U5tovEqgXj97DjjObDvGvy_dgzuyVgs9suNWQKtvkaE8F6crgu8gW0UE762kE9noP11kBu92W34twkWZtPlWyTjbpaQe1qN-PKZiV_YzWOumK1AB1jhxrXoL32zkLR6qcUJbdWN_EzA3isBhxQZ8v9ruGmpSYiRODOLJ-AN1qgSfmwbLzUA7cBnamlbWJlmvNBnnoZjTnG7qgmTB5SwJLS_Cp3qb30lmRsL-ThLjVRoixLzK0IujAUqVCcQ0jRqkR8QWdBckw1fza6ZRPVoUmvUm1uKJGiTrkjwvziarmAtF17m1OJia7QlxYMraC-kj4qDetvHZJzCI5xyTKBHBWpoMALb4U6qBn0ZsmUxPkamZbJRVqlXKYA7DIbD1_VDViech9TBEZs7P-Z7m7fcr1MH1SkBXj5_vvQwYWr7R8BBIgvohs2T8ZlnYEwpVM3DzF9ZgsnSv8jpkAIQXtL2ZyHR-EAeKkHrmXfE10e7eW4zB0JjMynJJQgNwrN1dgME8kMqRXBHpzAyVuB06KVLLayLOyCzRwuL--w3bRtFAyS1sGL95WuWBARBSQznNq0BvUvpXTUsL3SPzaEENrf2bKlcBqxPYDXdn200BhDW87u_83PBCBNtIqbbhIHMtZvh-z7E1x8_Y3lS1fewz671L7edZa-9N4DB8jO8NlHpb7_omeonEWg2o2LwvAsZE97AGubUjWmLODZhk3bz1MvvMshWa-LHCIJ5t-XR8JkWfi72cRafXgGjnN4Z06F5qauNuZZ8c8Qya77Ewy3ZZmBXcV9xGqh9byHHn_KmHGoi5ryT0kcjwXWWoD1FapRCQUWdgOLYNO_1f15yXfgj_kpHqFdmFMJaRwXCQ" class="dir-link" target="_blank">
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
            sessionId: "a83475b2-2ec8-40d0-b89d-31b448bfcbbe",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"4D0GODLLADK69"} || {};
            
    
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
