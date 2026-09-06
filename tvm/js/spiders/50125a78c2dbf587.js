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
                                <a href="/kw-click" data-ct="U24Vx2KK8LLS9GlVYIdQSKLlyjN1l2TvqwUSObtIxbvNt66BUJWxzjt5bjw4-C4rtJCGVY_7nQn4Lft3ZV1SDVwa_0imwV7uGzsPT3crqmZL2SDvNRiieuuPhlECwAiDEp6dirCUKa8gPTSutaUQMytpyHG4ponBnRHzM-OAf2qfAWfp4JfQWetXXLOOExEq9HJwZXikDla7fU7QqroJfF3jBgADNcvmXGY5FwG2SHgqguERA4cjdSuUhaL5m6IKIsneWODIsAP7TnTS9AWve9rEPT23UyWkGXRqrHVI5vwTDI2JC14hFwjbhjiN0N2mUIpPswJuC-o7JkHQVEm8MauoJM_EaRzt_L0-xjOClNEuixwqVwh1nUAvSiX5s6AnEBV9ReZH2c7S-cnGtYXJb_H81Av-_TFQ_2Wmw1sMZgsFNpAyRY7iz_7FJIPK4ynS02MCvCImCECqBNFccKZ5LhCWufFBtzIsJ55tmPSWxF28XP551EXUWTuJNCaBNn6Mm5NnUNMKkY_d6Hs4TzAhwIPCyHQ-a3e9jS2bUR-lzVEhc69X8tzrx0tkwOTUPUqr_9vZKCDrKC6wkepR6-ouw1s8m2_9MFjd-pPpg-itYHj9UAw_aqyUCnjRf1tyELADtSWp582vX4Tfmo1CWmRdGDkor5wTx08LJkUM6DLp1nSGdj3QCPTOUw5m4cupM9szPnlSVwfO1zbdKZJOd5aWHbx-H1RBwlfO8L1__IZOj9a00eyjgBr6L2Nu-LtmtAjNLwV8gPWbaSOSzr4u3OBT5y53TjE8wiNEp93HdRZw_6xWyihbbal8bezu6rUGN6MWqLYbD3LJwTEu-EONeta-1_UsjWldRT6K0wkgOXRIjSHn7uGr2fVJU3-u83023szyQwZNBpKsPL9obXo6W3zoSgAsw7g1Y7uzmCufHJKp47MDnwl130HUlZNPbPbzVljlZaxkbJUn2bDsA0bS9SUY35_-TazPqtaGvWT9WVmLmhh0iwmM5xQFJ7MmW0cQwoxEzYaJxt5mlMzRQ4HsEjVJAdD59RN5e-vz2FJ0hQXxq6T0tTLWCMp6VLiIGVCh6_sY7TzhpwB1CopD8O0R6T4GMKCtyqv6FK5VnrAgAsvwvKtOYBn49kS22kchEs3gAq6G4e-wZsdkvX5MSGqUr1DV5xY9KaYr5AawrZgZBfbvCrFOxvndWYTKEOeZPAz7ocj6fO6vvF-esQo2WpGh4PWGjImQjqmCYxzN_jKfgNyfcH4DRcb3MLVgnEVqg48luW31QJpt0eqaVZ93F2Jcmg4GvDUFm4OEqyVENfKGb7YUYzIcNvMHKFbAggR4d3Jpf_pWMkxXgxkyT5z39fD-b6qP1t31yu22swxXNhoEDN-dK0UQmDvT2s4l7qFI1CScX5NIM7ddQl7MEPWJ2KCHxIeZ7mK-jlKnP3BO1NgcGINM5lpvbs5XupvAi_Cz9FHhrR0a7lb7buiOS_pktmKMfq8BNUHcnNhfG_ftgLTyeW9Ph14WWzq2UVhFkwRobv0DTwhYfHB4RRys6pYeHJUxe1EUNFHwn7Su7R6T9YyDOoXHswF334YiHRmtNlSfl35jf1pYtroeQljRWWGkPVhxe-hx2kwIqW4M53vTezzGOAF4rXTam72_AFHgFv7HjIsXVCV1Ap1-PsC4sdslSdHz579yEfOCBur_P2ZAKHBmOaLQESFvylGXSHHAMxv8rFbxGBU9azkO6aIovjwQp_B8hKE-xk1qWsuyTEUY4tRt4vZ7TVzq8NoO65kK3ZyF0OD3B33A_x1qGOjExQIu8H1j7n3srYzidMNxl1HK9MjcavzK8fro2yrOrwIqIYlNFkUnV-4kZAYC1VirUTLEMde3DxiTPlkczVdxs6WVfhgNK15x1H3kbSIdb2bOGcHBfYfK6TNwwTYt5nHMUZNznRmvCi0j" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="4UChrdCDMWsloONLliNbIQlhU4vyNUB8wFyKwf_CA3M0Nh7pz84dyj6qncTyP9nhUtl0LbQ-M75Xad_WX_oCNUyrhyBYV0Lq2_7o8UC5B7DmcI6PerXcAjCPPQmC6tPSIR_-seZBpP9Ep1B2FrYyDGKAgp5ot3y2OBM8ONwLTaPFR_vvr2r1B04Y9fplCmhVuTGxBjKRAD4Xa4vNYuiZfBkfs6IJM6TOp3DZCRn33pZ5WECJdcEqb3WWeqQFcAvYpW6Ym-CGZ18ObV-EmJgbc-68Q-bkT6CZna6o5qM7O-wzQPML4Ny_6KCsSUIf7OITkh7RwyegdFSk6wozJotWDy7BCG9wk3r9M3yGwahDo6mYlK44GnlZs1mUcw6jU-KoITnYZtsqt5ZRXxOHcqX2io4R0hSd2kgXEu7lii6Tcqcfvu_GtroH_kIpSQQibCPjEQK4UI4Wjw0nNbcTyio460iAynoOdZMR2_KeSWtvmGbpkyXLR0lrQoNcDr3sCvXZFKwXS7B5uYfWOCdbXsmYyTVuv7CQP8I_UCiy-8t1sVnN33WXnU8cCZxQjM94o5GgwyF2yskdWZ3LA0vvnzCt26ZZCigPZLnpuYTVZXviSDigCHLV_N3bIZFIM3A1r6N_mW7PTsn_Y4mKVqpPXKiUarhWhDnJSr6ZSML8ybtGk2K61QeOmKK-TfUjnVl0RZ7vzV6Ugqsuynq_0s2YLTP8VY2yte_Bx3tdSOwyD88B0gJ7NOskYJ2he_zJIEqIoOasibg1V2mm-9ODFVnES8IGVXvFkkFzHTP3J0kNesTqCdbu1SuUYcdUl6mGlrPGGW56pZrWcsUq0Hh-jKcOjrLxxAXPMe_tnWo6eFL8ITKvBmwbtPhDuz9tPZZzQmYwM8o4RcGCvRI9SqMig5Y3qWJ7lMs78G3cwX0rYVnTK0ZioJeqmuPTN1mMtvRT8KZDwSaFo82wS7GXtd5ZeTY9cr2Efgu0YJzKOw_ttW37UygM1qbVqFLBi018Jixq3c7ZXqzrSjgpXlSFiHov3pIm-oE3-TyqQ2ySYfXgB-AevOvhiE2Jy1gJP_mMty3KTjWgp-9PUFsv2SJFpoBlYop2BndEcztGMoRviZ2C73tWfjGgNnb1sI9QVbzJn7v8jDJcYFYQeT2G1w4KxEim-TkYjDmDvp7bIlCQnb7jJsha3Qf6BBy4o6xeIhyk4P4NNWnhUT5QF8jSxVvIoR6kqXQAb_VAkxwnuefUBv3OMf5HygRRQ5udEucS9zOt5bs6XzZnRUPuH7Df0K8v6a1pniZJtb2qbqD9EfiWsUf6IMDpCvUYzKr8Sg-glPw7Fl_LzWzwPDxvpj8WMeWEsl9qMKXN0UPdCqyRLvnTSxQynFs1WTEUR0hqANkr7mFmGLpfrDmPA1mQQ2e3Ac3Pv_9xpy8DvSY-uFQqFH0R3VGYtTIqtqqBfIwuqC31uvGhlmrDR_h1J3rSpnrL_P7rWMo0sbjajUG8ftys6TD38TfXN4UsJTyRFf0pqMQ-NKolnY5ak0DehuGCt06NXdY-A-krqzl9BclOvK_k795r814q1RjKG8gCo6W_d4JYf9lmMUwOBvPJoLCUPBr_rPmo0V-Y0o1-JrYPzWfcsyUZ2UHOLbVY1J9hJELB4fjI3RGBin6TKzEaIo46S7AzInzbjfkkA1qc8T1-jt_sUR7nuQUAmn7Y2NpBTIqcA1sdtk4scL9rxjmLiF_A5a96SW5DgfcurMjNwfQdGjRv0lJ6WcWKuZacRL5_LfySXP7a--gn1EqKVzejR27fj5Gnde-FbgLCABvQayGmV_R2URxkBSESq1St03JZO4UgpO__OdDhdoC6pb7I3UIgiuuYUG4iQlCewTRP5PiRy1yUizzp2X_N5sbRf_bitulLST9K8WZW8Rt5w4od0p_JQOSdrB7NWMHjWiTW0UxHjayXqQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="udI6pwTl_I7LO9K-ViWaKKh0jHbv2xa4RS3O3ZxogaZozj4QCq73N1n681E8cs03fHSbMQ68bFumx9iBXBvbWlmMngGrgxoUEo87Qg3QiV5VQ9iNydH3-JQkWS0XrCmW1kH4NV3nr9nnR2SqZVr1wbFB1rLaFh17ov4y3XN6PAGgrtkgUCd0NoDdQws0Xk75vkjb0Off89SBDzQUEMWI_9xZRS8iU6lqgN48AeDs4gxWfh7r4SrpXco-qEGVcCYIe7way-Yy4zOdce7KwzvcCemVuocacJ7Rcpj4pjwKD78x6fLwXCZ9aRQmvpb2SCLhsMIheOYS2Xd6HEderJfKKVNeRtJGbrfnScXZnsr989N8edYunvlLgVsD8XRdwepafgqNxHZ65wPvZNxXo68Sq_GD7eYQovdzl_YjJAnsMY2sI4pbN_PPZiG52Ao-_JNAKHahkZsJ5AMIeg3wtz2_OIKynEU65QHwLHq8QwGTO0PMKn1HG9_bJ_UMKtZq-TcIVKCqxME9qVY79fdt_ShYhHV70R2aDDt-xYT6Tz_T1gNKo3C790e7E8BOwl8VpeAEbbFcSXd4veGkEomGcFX1Hrcd1-MwcwJRGHzUHg2rsqB90VaveB7S_P2nsT_mSKR_PZzmbcaNIsSmhXEPvzaqeBy6K6km9AVL_dgFLG9mtZK4C39cEJ78x3tcW-RrVsSZJ7l5uuzxJF_S-SIvwjFH_xVjxthIqyu36bMxNRcurQLZV2biz477Vf-DTnIzmw2Z7hS_brBwOJhTEvR85iiksINKEIjJU4wt5qSe9ksuN7h3hDuvJumS9wWTc8l1yag1Cz6TA_4vW9_I6RDxoH_k9DeGVf6ENCBdjJadINZIc2uitgkRQlzR3yiHkiQx20Rvs-U0hjunINd5Cn5jNAD4KCF61FjFtZhEh1SZkGJTQTkAPHT_1XEsMI9f6C2liBsYCeaBjQoSW0ZDTQK0TNVKj988x-dcy8zqPGh9T-MGCBXhdGjNNdJ3BSqsl0FcYcBVpQWHaDprfUlkVGaIFcLrINjPtyuMe-eY9qefF4uvuikIKSneU8Ib0kymkj6d7IK2pO5DzG25CNPc_uySApR5LvC8Om4TSLcHwXJyCuFKyPi-Fx6VVvEugAo4ED46hUhXIVADecZVrbdCjtpI84pPQZLP5hOqvJE0GPKUGfZkDnfJMvtOQ6lLvxvhG8jU_n8o3gPvdNapKuME7CpylzU9sl1L95-PNXNERCnixuYKUPnLC8bRfoezzVGVBIxeTZeGQgt3rJUqNEcewdW9b9iaYB--ENkqzhc4PCsHpQyaU2lkRrjhvAjlgMhDmxOjts1XUjPnm6UfOK7hqBPx58E4fk8Ud5n0gOlvu_PV8fmkxchAelzV_SmNv9xmQDquxd3TtDT1nxf7mZNqJP-BTHkWzgv_KfrFzDYv5OLLiG_REP6r1I04GpzTo1Ev4JQpM-hDb3kQaBBiDmCM_M3N4EUE2sfPIvjb_ntFOQZ6i4Tn6mbaiuG_lNfD7zFCOH_Aj9o_YP8_xX-y2UIrXD28DT44duoKPTGgHj_BwZCX1m5OPgxPOr5uqUyBJ8qgl7cCykWIGVxJExZqCS8nSamS7vcJxz3NQNtQdiq9Omb-smjiAoF5YQZLirK5Xv2ewAoWL5OaRLNw4HmhJ6us6IhfdmCYDJzqBh-Anj4xH26IsSTQ6eTjFfrlnnx4JWnAU3X1QQ0KjsV5qxjkrKGbfx4q4iY8_eDhD_PZrzpJj5Z8DMsC32hevyAZNXAFZpBrUXGe9iZmM__mS_eHD-Z7WO9eAZXPVB0sGJUFJ_qpEnN6udeGjQQ6H7W_i6ETVIgBW4gsq83NIvh2kkQJC8M724DTWpAhL57j7TwOpbUSbYc1Y5Pv3u1IGQUGkFiZaMoPUrM_4yT1lSyCNdJI1n5JYKx1COA3MNIbv_80R0RoTnXMmjWlyw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="93aBn4w0oMJ6LJeNPH0WnnP7rLKSoQKAl2H5Ej4MixDtpv_1D6LfiY8Zyora5KiM4fdDDzuvnfEwPwBeu_VhC1U7JngayhdRmzYDmB2Wf7lNDlObZjXegMZUSfnic7Qo-1W_3A8z_e1D4xXuKMC3fqFMOgEBJZ2CVaHTa3KIq2kR0KvSjxzi2jWgg_mTsCuEb-bdHcrsO8i-c5o6yRPQNkcz3sjefHOrWfs76cfz9FbVtnKMUIMBtYLOyKs6T8KK-xoygdeLIDoA2dOivldmJ0iVw0nz92983lNqwSHBWceoVygzs0afkGip8Qv4QFv3v0wbDjW_3_7UmKaoYoH6V4gQ-zjG_0JvpOPlPh9-g8SleI0KnPeZYueERMGjd4uCcMSSzR4s8UZRDSMI_UZjfarCdIhnf13wh_q1QlYEZl6lDAD4ZHOpFc1uksQfX2RpSdiMNcmWkjeJBhhx8ZghzIuKu0gjyFErq9lvhvLsCf4xqMu2zNsG8St_3xcvdJYwTo_n1TYYBqFyDxu_1_UcGzL-naWATgm1wHnF2NC441QiI4g0uoCeIWXHzIPYAzR8av4TeAhJ9wbXZCwrYh-PmIoPl2hF1tezZIuhooZb55pfAGr_kmVsik5Xt0ZrPg0IIrKEUuYztSYyqe2dPF6TYwcAgOTNxsN2epDDjdTllfgxNNkdalvI1JS847gjkNzDRP0p8HlTmvaJosGtz0MayxfaxX9OI5zXNA2ZI5nH7q4aqQAAj6MV_C57zAsxQHiDV3Xt-IA_YnQTLvHwI8QWJxK7_w4t6RcVkdNxMHaLhzSLIlqkRa0Sw8RC3xgwGvKCFcZMxmzEh0La0vhCOvUSE2QKmbMICF53HuXiIXM-j5mPiAAc9XhytGwMHBFYGTK360J6ADgixaddQd6fyDoRQRVdMgYqsgd6buXl-TXjJFzndHxzaShHz3wO0zGKCXR92AUk8_-6fgd2KWgX8PJRLrKyMr54uvTRWTXwhQlTbv6IHi7Exqb1e4R7dRMPjJ12MAUVsbFTaiXfcIB3YqvpLCApscVMzPl7n5v_DAjNS3TXSa690K9VoGEWTt45XrLp6z6BL-QOoXAshv26uDKfKNnrshWs7FqxRUOxPuoQ9VRJuqNXeA2AAO700vFht5T37SoWpFTaTud-T9g5PTrx3AI5BvXs9Z9yRqnsfjJJUQMegS7JCerG2TNjfOL47-3l3Irmo4chU6jkyCx3rDeziqpY89gwBPhXNhvxnr74ZMTof_2Dv-fc4zBcNb8kabIvqOcVOqdO6XRim3d2myh-c8bQLd9DAmXUcuC7J13jNANikxz0NXUyeP2DhTZP6Zhu1_oCDVPLaPyPGjHfxJgiRDANNr4WGQq84n3k9Muqf1gqeWaDQPfFHYPNbAHvX9FzUzjqOFhjFDtYJeNyDyHEIrHrV4DA_LqehqzKeHBbh62DaCdVWAVpaC3Ydlo10wKuekdH4-7gRsU8RkC0mhhk3kiy4odcp8eYyVzz8p3Ju5ALrI3sIvV_CmzvQoHMuDNzluWSKoCfwn70KX9LHzHS3yw0nCS3o5_5lPUTFAJlCc0BP_of6IUomejhGr-WfusgaQx6t53_YGImCcVFU94mhYuoq10A7XyEjyo05HK93rOski496UxQd572tOUdn84tJBNOw7g6hDwNrtIrQdCbDd1FJMVFfwwV7lq6EtN07LPXxe8uUMBtEc0uFeoZ9dMZ4t3W39zj1neCws0GSVrj2LkISt00POoYlJBU45J6AOE96e1iHGQ7Ib8pjXq0r5T3JCqa88VrwBdI2L3f1EzIOWhBsepOly3ZPR1qLQKhcZl0Nl3oE3JVV34mrGDCbQPngKx0_qm-yO3AXdzykycvzGkuC26tD9IR0CyD7uaC_w3GTX0y1mXz0r6242hS50ej1iEkFBkn0gXlvI-Y1cAlzXsxsA" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="dUdnKdHytEssZUO5hY7NVq99Bqv8-SrFtfnnYapUvY5D33_h4UzjODikq2DY4wXSoHjoE9bBOTuuULBiKaWIGgQqRWzXf2rCi9QHXZHxNLA99CmBpjNsbY9_Hfl9xNED0DfqcZvIczIVyRmy0JuHPvJNCEExRaUjhYUCpKsdc0m7Vwp5Xgd3gOiokZYNyq4cF7GCxEyY7K2eTdiAiVyQxqAy5jPmJAKO6x2Wkpqa1aXwnw78_vLzn6i31XdcYrnoZnE6uQYCEYFKqom6lUUO5TLkUgMwbhko4_8atLP-tY4imQn_fv7QPh7VTWKxf_OBLB84-8qn2yRZUo1vLKDGKNczp_9hIJzEx7p6qMj5dRnqciwD_a5qd2oHt1VzVZC2QTSgXjHfxkyvkSA5AbXdzLNE815JngqCe87pjDGi624L4gxViDq9eLVsVT327HZAHl1x3R4Q8iSYdtNsqDdJasgTuV6QEmhUMiwmzzrbaI4P-lNdFpxrhdQYYAaIhgjXfGyZTzR821NoeORT3MhaxRm46CbF6brJyhoCP4GyTNCrzXpvJaZb3R7CJWWlGODVoTtyEvK1D7v0s-c_sDrTn5Rf6JMB-W4qdv4QZ1LofqcnrDWN1lalsJm6lYrsBBL4x9leD6P4vUlLasc4-cEQHHUemzYqh3eUFLu_d3LMLXM3FBMH4W2m6ed6jxQGtMGaAaLy5gCMwWsqqVtYjm_HJrGvl4pBuLIGVtaet7LE4qaPLOQ2YHbJz5WeKOhsBSRtOrCcAHhY-rXit0J-d04yfj6xTOIopIKtaoL_R7f6CyPwf2jta6wUOIFwdzaum6qrRLpUdmgBL77ZGpRG5AAn5Y8x0G8TPWmJaPu4Vx18sTQpcJ9j6mxQBS5vxbaJt5wn4wN3ks8BRzUPFWJUt4OXvCxWAngZYJY7TajUtH59PMNWAyk541VkF9ut5-q5dFh8cchp62rPvZGp7iCuBLqDUgxYuhQBNJ53rZwP7m_o_FVxLkCBpHRSC-zsmmxkXxCN68BgfZwcAa8bi7nWK2lmn8rGQyoUE531tieI0a5aDGCfgN5GIx7IRbhCJOQHPhLe5cCWSTXkxv3r3nh4Ciskz_nPliAciouqJs4jmkOpULlBeHIL4LW_9iFreYl_u_rZuUAbEFUFjDaHdXRGRiGsQgdItY9YTVzXondt8Ko5Z7-ke0cDVfUoeDhUWUdcMHsfvTe-Pp4evy-ZUS0Eh8722rlzjQR1u9UdvCxwdooGtRt3eXfXqu5dYFkf03qiygX-4pjY3-9OXt-ugGfI_wtkVLuWBZ-wfodwfVWT1HWNa_UpkoZYP2W8aA74xpzO-xbIS5bmzUqqnrzbQzEVZcxeCfx6bTHdJrIoM0i0lHjF017qywkVTrIoruy1_NIJAPngneq19P3dJCC4uNwAjY5bQWQyzSUlZNq9TNrYEngaSVzBeOWHmX6RLwI8b60uKJM0k3fIdJITnJy_VyCf8HSfOKUrfNDfNBDEikywhcPFSEpvz1YAai4Vz9qFt9g8zeAQstZX59Xvn_s1IytWy5_N6Vkm1yNeq2I6GqsoIOLU6FYNFE8CECYaUsey-R-x8u6GhYs3ZK6eIv6UuQPnmNlmaLgd7Kpte5bqK1FV2eo1dH8RkmL_fgg5WwF2x8BQPmKzkWgXah3JOtYki6gy4wdoruIUzyK1pvQ0hOzbh6Juwo_WQSY2k9SYeM3b9F5rvf88nxQCwkO21P3B4TyGu4b8wy1RLI-uxGlP7Ta6e83qnBoL36XR1wVhbA3bptK1St-CEZ4sO4vbi6ZsF0952oF_F5Ltv_J5R55TRXhDKGrt8dCdJUEQzg0KMe6eudMEZ6mLLqYzlkSPLr0ipcfAdXDlHFyMLXHSyYwldAxyUsncTk-eLKu_TPPVbinyfUojVNi2sNb2y0c5rfa-fKmcgJ_ejQ0St-4M" class="dir-link" target="_blank">
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
            sessionId: "1628a1b9-45e6-4ed9-ade8-69587f503d72",
            source: "",
            tkn: "t2GsA9xY",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"16LH7E9L9QRNV"} || {};
            
    
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
