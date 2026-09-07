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
                                <a href="/kw-click" data-ct="Djri3Ea7HWGr2zZkhetVhRQ6hirTh3IiPY9IP8P9YtV1Ml29qgnGU7UYn5Hl_xGJoXPe2Ys_4mAcvu4tYUWPwnj-HpbrOr2r5HFOTslTnzvSrOlDPP5UGyGPJXvx9LMTKt84FBoEHTzuIDZA5rhzD8TyeFVkpQ_QbNpkfxosY-pC7vN_LEBjiMeGLKD-a6sHxwG5--H6CAPfEyqU8zV6YjrKy5Ay37-t4hjB0XxRUJSvfyuvKIryWSAc-qMoUTa0ztHoqNt6y783XspTWWQw3zqwd7oROWM2-3INGmk_kwvtRJnYzFiW4GgTRO4DReA_2uIpeYSusRWcIrBFtuUcNVRWoRc9mwL2cIwx7-e4JY6s7Mw8htp6ZkzotOEv_pN62jfYKBGiLmN0tAIyeBX7J7ik-3kKhiKqMcoLmQCPhP1m7GuhIfUkOannJLO_ILhsFbI_dUH584Eq4BMt-GbJnCUl3DCHxycg3M9Aj29a9hRmQBHaF7foV9B0N9vnlGM2VOQTm_yiVkQs9gK20UPXdjusWQYgvC2_i3tj3UOKHjmN9COUkWJ00-swirze-0MSmn7wxq266-QIxYoSusEanI4w_HjBRI5ZI2yonfFqZaNF3bpgrR0jZIeACGWcXf2KQq-E6-bGBN4jG_9qgRcPTuZJaEI8equL4QUTxxKt8iVpR06-7805vZooYNjzqx7vDvew4yLFfhJpw-WxQeTqf0yqV65gIWesQH4wkKP0Ci9lzRxlD00gHP1LOeEr3Ei4ay5EmF3w8YG4hvcy6Yc12NhKYTjb9ljduRJx0gjP00a7uiaa-MI1LbEILPWYjWHjrl-gFb9i92bzJ7YDvv6BYPLLnz7qx5QfSqptPW8QGqQhHJ2MZtmyGRbgTMwexyOhWEnDkYWpUyplmMa83be8VyCjOko-FTnfgDZJhkeKE_lS9DjnFZgkoKhO2BAtC8JQ1S5S6uH353Vot_bSKmP9tITiIapz-hY8fdnvfP5oxEo0gesMy88EwezRiLR3uVVzdCwfSxVnWDq1Gcd0evGST8uJvM0wO_z75ETCls79CistMOzGr_UwtHX1pDwqMjsJ-RcAD4nmuEIx4lPB4ogMy8HlzU47KfxNAaUz4NPILPkdtu-tjgGBfE1eIe06W-LCXUcZ0Q_3ytIWtty2OKQRqMxwtXIojpNViRRtntsHylK-TChEpHk9-kucTpsMWzLnCT8VXERSkLfXBvhgY6bsqEkng5IQjeUaV2Sgn2TgUymoF8thL6sbkdG5nR5DoQ_97ouuAUm0g4wD_92pixh5esCURrtFN7g8kRlR3ZhW8U4Dl85IMc2bXuTGcV55ghy9EDImuoHLsGq-vjlU8aWOC4rogpa8X6D1T40I1nfde7oam_M_EZ_CJYkDNGa0cOCD78smfnUAQwUiyO5xNiPXEf7FL5e_5HImc4NBH_VyswfGQ6G5Le7JMHBJUZLB8Dv-J_7uudAPjMahowmwoJEwxKg_XhXz1oCZDtcl3I4N8c0Ws1AJKI95l_ODS8Biio8UA_xQt-zrq9M38SJQORvCH6FWzbBg2CxFAbgR6ODzIUfhoRg0UUr_Nj8B9-GC-l4mwoDLV8khUp9a9GAsn4NErAjAJ-2segdCh6yFXi69ForrxHnnmwxsz9N9h3w7cbnaBT4fl_FIyJwIO0XFk7S4Rhxa60gz1mzK8kPPxXjowX0jkPc36ZZeSmN_VQA8YalpY3d3jE7xM7GVxu8ax1bxcTRhvNWpfdwe7oT05g6Xy3CUj6PJD8emsfTZkz6EBwwU-LxzZ7_RBT2xslP5VWN6KYoYfJ0pD34I_1SlyBGwlEEH3pEfU8cek-WBdGc58J6bKKeqC4cYk6ClLhHyZVVY6oSvOkaQEMf-vcGWXQxJigUubeKtiqknxj1EOOHXUhjgd7GhPcbkFwI3DjGqaQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="fehcwQWkD6fmCG6IXtf2_woXrRNVOtteWq8YFMCdM2jWB_tuQjvcqg3kFUbTdC-tTAPiDxbDBRPPQkaAA5OFrD9t4pVMOMloijxlr8xedGUfXk7ARIES7mYmGQRcq1rzj0l7CCVkEghPqH10HZgPPt0WuZx9bpBY1kHCaIJw9jiKfFX-gSlBxDfu5ZnKIvjzUlIm07o2wOPnoBrw8RmHlP_TqGTKTb1VJxvgBoAQCZyW-vuJ2G3mfxIytkCcFAi2_MqKe_t-4nVviDygiEAQzWHqmG5QGWZoGux2K1I5jWGXsmZ0rQacPmNvqAcrrvAfzs-rraaxpG0wveXt73gbLGzp-GN2E_UhboFPF3ANfY5W5i9tZL6f6vud7WaYysEdjOcsi1tOzK01mtVi4v-zaJvwttTbiTP7GI35S8DbxSCEX8dhJuThx-iFZwyA2ULQbpyMuU1vKMuu2pzKxg1YB3bVPuMI5a8LftDGEeVmrapRUVvDNMzYojOeTZ5Um6mjTBFvXFWrkSncIQQdUpWZlbilTlh4oUinPVwpPULoO2kGb5eUhqbgJbdc7sedfjaPgxgm5VLG5JPFYdOQEQIBmQZdArhHCuoTPLaBfQNVeWI3_Z390l9ftFMwgrhlTTlhJJ2VrExAPTZOTzPBea4uFlWvoE2LqaXbCFL5YTurIcz9CABjLdmPobCrGOUPks-N9N75ihtxxkwlwOzr7G5IP1iC3ddp6aSSPYe4S-kXKkHGAldTzG-cfkG8QVAR-lbNnAg42sJLWMjjhtuoQZ3pANtEzsocGL0Tg01BFQ-eZO8rg-pZDkyi6gmRenydsQTarsREFARdQ2RVqmnJJ3-VMkSpYDEQHwMybqL2yDAKUPLptgWAicJIp03eclldvSeLxI8PwrQCC4hc19-mp-nNfYywAtAV-vUET3qnm0zTw-ZHwJrkasRpSB40CXB650O804U7faSSqyRAf5fKJ9ChufOOUjxeGSjnC9bQ9niCA3Yctj5vFXC2wxw622IzsiDTyTdC2Gn8CTqhmHCg7xehUPBSNKuJABIwTZxc8I6zYS2f_7aAZ31t88Vdd5u85hWt4lhQLSFcFrUAR9yipjzzGgXkw2swNKu56x1mkpRQ_kxkemyF7KcWz4hkh726kjAEW0bEHSo3Xv_NiidJeV9hTgSCwUd9EYYs48HeZLwmVtGF3OD8nbV1s1uQpyPzmEiPcYm9WSI_8Bv0vqko8OLCrjV2Su48PxnT6VTY-Y1tzRCcdpEV-10HciIPGhER_miKJRQZXLE8dZINAwgK1IrGV2_Q-jJfgRBw4Pq-_yhRfn6HmcYldsUlLaw-V3h-OhS34Q-hW8yEMffk0BH_3bDTPb18zRH_aTFjmrA_IG2RVGN2u98SWdoFa7tQkPkV3mQ8lc7kGYsRjpMBW14O_eRkLbIjPfrDQ6_lAQVqxuU35aD94p8fzLE4SA6xwgkW_3uzFKHCZ78lLqpKQwaK98jgv64FRd-1iqQf3ONw5PCteMKiAJ-zV5UfT49hZC84wW5QyfTXgXqbLpZJnbWgijMQu56sGXGI18KgumyzGluQVdC0iQ8iQnaE0giE_XXQ8KbZzv_BjqLqUM9AQTy2EA3DzvCQUytb1EghdiRDqbZJoleXeecziNFMDHJfw6IuG_KqcMis6JoAquvRHe7ttZWGXBDTqBt8J5mgUwXtFOXXoYRYgHHFU4LuVDaxqhCSLyYd_HgNZF2lugT8xmSY6m3m6S25tXRGENmUHnnMpfNM0znO84L4jj2Cr4azS4w0KGT5oAkfoyh5WSczGcNxX1T-WOdfOT3KEIt1c-L5e3I1ZhtcMBAohSJZcbn8jOnURbQ9YkDVybQYcXyFn-ZNgLOqnDqZNVWKTgVwSXyzLoAO3gLFQ3tNfH3nYgYVb4_XULCWNgI6E52xk7-Dgrh4UtH_N0c" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="CYkwx2V8fa4JmxcFUshEYySK5_IMYyYdUwsS2kxdPgh3aS5TVZZxvGqd5VFDh8oDC9RPojmke120k5G5lI6r59mIUDhRTfPeCdIZyrZ2xVRj-ZdDtIzT3wyAcuOI9FPS7ECIK_1alCLHPvJd3OJeioJ6_hMwgK3Tnzui1FVqf0SgtKZ-HP1_vpOiXQ4r6jqw3LDalsvzXiephX-BAwSNQaLUmZgQ-hwcY4F0Z4aG-_J8tUzeqmLooxsRuEFOmEssWOipe18SB8upZZz5SwL_wigGaDokLHdO6gZDHWCZkM-f7fcXt2U_GpIUkgEEc91s6t43y5nYPfMD_fFXveHGWp1NYe-oTAu8Y4FSKKQFFYdeBZMYzC-_zaCMnKQpHirA2fYrs6bDYdUHNdf82-tDRJSRRDNfPbB3V2oGLvKnvLlED6a82LwD6PhVX-8lmSDbsG6NFzl19yqwGJkpbPwGyGN9nRut2IBclwOTbzHHNFZNSt2aU-etnaMKrQgFZ64GUkENpfyavgWfhyJpNfz3Az6GvcKxzUtDLOAbFXkxFC23AevEZp0Mcu4a3Qm7e0dlA0mDsd0GylepAJfnnSlsTt5Vd74wopPhOuCXKh-8SJIyheBWCidM-kdB_JamxmrY_ZtM_3dlJKyR-UGoIfDoCPzXGRBuFjxYVpp7jMwfVAdoelcBX2TSt2bZauK1Nk_cIVCzhiGticE_HYch0Dj9K4a3zp-AdbmNGte6hjDUYmttZDmq8wDMdMP1VQ1ufoPYwWLQSq1ITTTSZDSlEUqAcQqyUvGno1tZrch1ccayoJ2NWzSKvrDkRKQzsRb3Ik3r0p1LAupuFV_jcDJnSKJmEqc0zfoX-khk5mg6FrnKlISaC6s_o1ebUC244AV2rBO5ASoz0LCTrbtVOAnFDF6gaIoFqNAHaEzFCRFZcbKOY55EvGgojN0xYgfRQWWjCdvvdGEOUFG0o38GBeq4CcHxhmKT3QcjnmdBrM6RwWPZIApLLD3Fuxyb4wDITLvJiXpJL3fRAPaLVk32KZraK514ZNOtDgjofkXzaYv0kSiuwbWBftB-xX06c4PP4GTqcxJSIgnQqegW40YIbXZzzF3DROFgLm9iZzXZOe8S4Hw8taXYNQBIeomCebUJswxMfOK6QmvtG3ibpG6P7i3CNI83ldne5uq6dUsspWeZQzdRsLnfHWbii2xSmv7V3w_McgJMXFReMIiqd05_A8x6EwDw5t4yKbwIMdVP-seuNovtsYghh-zrVuLeGQbOKpb9osoBsiNnsVqnRykuuAVc33_v_RzEdo2svjHIpuWeSwr9A7yC9kniYEfEaKgJywGDCjQsMIiBItBp5y0WK4_R1voF-V-tXTlBTHGFo2luMUBULZU309BBIvqnSHU6d_5BxVqB88J4w6RUOB6gBR_MYQbK1hNc4wlTyUaxQI5NFMtW5cH4oOGH_G8y5vavUtjol7Lva-nDnh1qHNVgCU7v0jegzRqsO-SkfXn3BKx_4b4Blu6ahKR4CMp5r8RfltKpFwDgg27WHnFaVOO0aRVkopF7ju3_Ifu5ufFqHtbf73dyKXiOmnncG3zEp0AAKyttIaLBKw8qSwbe7Uf3GwQDa3ApK7GOsiBrF6O_kbkI1WA0zYeM2i2DtQJubD6aa6eG8SvUTM6FEx7GcgK13NbUstAWkYj81PqajWGS2hRj04J20-ggtJxmmpuOPaSCRKVARlOmVrZep8hDc2Kdwvhw8L2XPqOtiCGtoNDq1rxR3BxMhZXzXMAQbPUw5L9qIjbgfuU7t-wlq8AlwIQtGptYdQQVrehXw5pveS5v3mnp5HgHjN2TXH9aGT-NjU9Qdyh-tGG9SO7RW7HDsAzx9kIEaKxOOuBPwNfhzYWHclLqCf0BI2B2dr72Ni3iEDzB507AypEaU8hn11yatbSRz5I7aXTW0CvqAruf2nVO0Ynsq-c" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="O1QnVHyCbITpHA5cLSRALzPV2BjGDif0VnKBcJakPQMlwbn5Pdp-1lJ0dWBz83IL5GDUcSoWla2VY1sKoUwMdwrttZ9V53F42dKSnmYLlgAwWZqZF0B4VuZTcIe3Pn959xhfBnb4iNkL2ebK9ALW1ya6D6ElRoes1zmijLTICNTzJ06nLiw2lq198-_aLDkRP-AmQQihr4taC0Eduz9EE2KQBzwRl1ThV6g-6edJkmoH2ZAorXpS_PmT8xEIBDce3kVewsBwEoXRdvpMbjO_6kBvYWVi2oIJLzYq-kkQZocJsEWca_80ezQq9CBuOEzadpSvvdzSCcJmyyFYC0P9QcliKMa2NMMaV4SMnEU_EJcIQWic9IZJop93IUi3Gn159scVZF6B-RfmGpMx_fOa0XJECD61itcN-UPyXS0F5BEhGtMJPvCqaQo3iiUt9jsJInVGrd0Kr_YQz-vpRwGQaiD7V_vbOywUiuGbu245vPKTQup2L8clLCAJcESI5rDLhPfw-1bCXjpobGKw4gs8SG6p-RBS9tvt97hk758gh88-kPWrKdWDsArkYOibvxyDX92R_AldZWGC_VH5uZ1oZZCOy96XrjeSb0megk6RiABKjirORNQH7GBy36K5wsQUpqG0JIHMOHz0R0DkkIrmk8u4AfjDwZMMah45kP9By-xia1RoqNhL9wNvlhbkC5mkXMLTGBnYh4HNoJNeYnyia4K0r-XgosFfOgYJHJvC68T2NA59w7Dw-pBApEnseCwH8YTXqfHNwwYmkQgzja2gR46VaNp3WB8C8TqJc6d2fznDCJ3qw7F-U-1dWah4xL-tPA-4T9hLPDBcd4KLs25N6geHnazzMaIXAh1uKV6EwuLYAmONJJtDeqwbDDV2lV2ffgQ1n16GK5bOp3h8uz3DjKaZ4cKroy55r-btUYcZPEZXcILf-sFBo1-9-etl0OR1xwzRMzL6b5PWFOcCr_gQ1pW_ezOeE2HQw3Pro-v3KxKc1YoPczDDqXfyIyHB9dZjbfgQp7hoENyxQI2C_oWRF2g3Tqfxv9xJ_DsDmdRHMmhEyjVUjrYiaXWRalV1-alPu-dyIyEYQBU8-MSKKPKrSObvsupEJiXOHsgfTMgiYHBBICoZ6ETbsLzc3NLaqiwFrRr2rh1Lx4qPa6PbQLY1MeAQg4_flLlmdx74DX-dnXmVRw-Cm_DJbHrqjNkxDv5wRtgXzkPwU-oXDPSgHh6ofAbilDrP8uLQAK_VrE9q4lKU0e0QuhvRwHhbkqExQvcns3tLLIGcrl6_wbM4OfZKKc7sOFHSbBsHADAWCdpe294R-q9Tyr-oGVvN7J3I642mBMcYQQu2i5NYOJzex5gnTS0iss2LCB4WTbJuZS6I-5GUoETD_yVHqH1quChh1_0nAcVpTF0P-TVfu3J90eKt0VK17q1CcGP4dbNJgjEEDDY9yplMMF63Frmay9kp7mVcDLp9Gq4Zi3DefL-4M4WTTmpLXBY0r8vlLfhRyM0-U7q8W4hbNgCY2yrR9MfuZxjdccc66sIe6C9wj4P47di67kBJcLMdo2xSHzCXzONuT4aRSDM1AalZ_YT_tm4j-KNjJMVcunI1iCbUokvATFEyUn544F9R8F9D-j31cdATedsDQKnLVTyCRlx8ngSkKKBdazwXxgbZ6v-AF4zJ4a2iOja3e1Im2XltXsgc_Z-lCi1jfrZAmLr6yQ85DS2WRwcRdHEXOx4lScV34bbyx6iugKwOGcqv_1S_RK9hiV39tYEUU2uRBmyNhhsLengoJ0wtmsOEfnDQB9nO_RRnwwet2JwpnheAYbzlgXmuG5pgBT8saNhBy_XA-_jgn5Qio4jw-WcB25Vk0CgJxtKhZXqKzH07iHYRdlN-nR5ZYYINGxdJd9pGwu9cdNDkfiVG_cxsXsIJwabYrWXFrq05o7aiRWo" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="rrPjaVNric8MDIOIbAMNxNkpuFMl6UQQNxIVhoS_19EbeUN746z1SubeVeu2-zFpnvGpSFJBGgNe_SPt9gHpDMXL4mBwWKT7mJDXeQNO32kX8RcBxLIAf7Xg9OlKxVrYNP-iNfB3pyJGSfLCvoIT8RSuiohNbqnbXU1mfd2SLIba3jdcdQnG4qYvO7IE5FLOF3fohMAQ8JnAUw8THqxlmuBSRqOTvCnzt7Yv-wEY3XU4QzKQAODu4SVtH0oNDcE79-mK5FwjJuG5UtLtQx4Z6MiCoWDOPuVgWKI--K_FbX9FvPSri0g5iRa2RQTXRj3W5gTnTLGxsw_Es84DSzsTmy6VADOAh_AMcrL9k4WU_Zv4uxq0TFheUzY15D0jmEzjoJRSJQ4qPMQUBnDGzSaoW5g-eJ_6J_veGcICBMcNZvb-itI7k5hl0AEP-hzOt-Z0w8RliFBS8XSFTqPq7moxHxRUuFn8FnmLRgUlWfg0PoA9aaHk2PPUaGFCTT3GoJy2XsoM0RW8RtHM9ykaRH54OQICs6JzAVphZoII0n1J1j05Sg4aCjmGniFVyapHMwdsjzlgE1CyCeCdaUxOrhzoEgw3TRYZjU2MC989w6DVoBZvtQ50tY0hreuRpLD5IBnfbCXaUAjbJCwZH3Bn9W_VzlHIIhcT6wPDqKko7bsX7FqBh4qJAiu48inM6yOaJdpGIRoOn0EYk6SY7285Bh3AQBg_IbXXTYrQ19yvFazUhRkoQtQbciNUCf1NhJN6B6azSOcoPIb4Fd-5bI8iJSr_qI2XzZhO7FoCMlbG2Lk2KAYmIhI2ZLyR4NsmM56Bu1m5ZEOuKAPwdN_KTHGRKH5pUggyybQSSmj6F4FIvznJ-zMA2iW3hrsjVsVS5tAGdQJrQ4IW15YS1yUv3Pu1ev6JLA1Arju79tH7lDlh7DzdkjXa5i2SBjKw61dxUpv4RhGJhWg31ONdblJg-jpKksnwXbLifwp1LR0wG0JQAVUEnN0npygCHLaR9sAbf2Qy8G2GdtLoyHg89oLYyLG2R-AKU4G2y4D91_XS8PnQzAvxvrahho0CmS4yMUWqExcuT5YNuWw490vtdPwArcq5H4SlGqWl4SHryMmd6ygBfFerPoyI4tHFqk-YbvCkv2WtaQT2knknFLgKYDy0uRBQ638e03DY3Qs5sY2v-JMAECLgnAQEYoPsrBH1sNBYWk7vRNgGnB9ELPtTJpdzAMp2t0H4y9ZFbPBf2-3gwPKfl9w6D_aAuEEEvYRgFpxEWQzUcXa0P2ajjyGC1WXJls2qt7D9MC2Cj6G6I_84ezghA5MuHTzUIhEYBQqOGrUU0zjnax4BvOuC1XHz0Sjt-PxnJYGsLAB8G65L2wB_qTgrvLniXriab94XF5riABrnKLZfMiT0sBzUulMtqtFsxjIBYLfFze5vAjd9sODHAexdCClfE3Z2IpYeLwVXXR2KCjS2NdlwVzGpqBERWXD2rPb0QOr57yPp2kER5-HGzl8Du4VMwROl-p25AN6H3VEJFo6nUKJORw9kkFziKiRpxTavyvb6qhN-UVI7plM5cXdblUA5Il738ZDi_tczO6TkzYrea8X_16XSowI-c3Pc-2iKZehP-2pwZYB1mfEg0Px1eyLEMsZCb87kjLkkwjwPuAdPvc6gqJMYX7suRizAONSBk0qvsITBPN-CNXSb2RSHW8E9flch-w0GaKm7reh-xTeNGZG9zUM8KIF5_VHAfE1mDoYe4g47rpn3JxoHpCpJpYFjYMEyxVtxKJQkZnzbfXtpklDnKRRZjoXLjK2MwnkX8rAvoE3ZkzmR63XMuFfGrzKXTPtdkxHqF68i_yLC75Twtb26pMo7tIVxVhGOqUbjItC5-mlZ5ENAQXDvi1oyzVBaYAF9w2Q0mzDA7MJssPS8xHhPV8QkLXWwKURePI7Y3niJUQTsbA" class="dir-link" target="_blank">
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
            sessionId: "c170e0af-55d5-4e59-bee3-185311435389",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"6A4RFILL9T5JL"} || {};
            
    
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
