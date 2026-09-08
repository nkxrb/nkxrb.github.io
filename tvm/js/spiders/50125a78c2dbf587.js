<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
    <meta name="robots" content="noindex, nofollow"/>
    <title>Ghproxy</title>

    <style type="text/css">
        a, img {
            outline: 0;
        }

        * {
            margin: 0;
            padding: 0;
        }

        ol, ul {
            list-style: none;
        }

        img {
            border: none;
        }

        a {
            text-decoration: none;
            cursor: pointer;
        }

        .cf:after, .cf:before {
            content: " ";
            display: table;
        }

        .cf:after {
            clear: both;
        }

        html, body {
            height: 100%;
        }

        body {
            -webkit-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -ms-text-size-adjust: none;
            -o-text-size-adjust: none;
            text-size-adjust: none;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
            background-color: #1a1f2e;
            background-image: 
                linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .ios_fix {
            width: 1px;
            min-width: 100%;
            *width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .wrapper {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
            background-color: transparent;
        }

        .heading {
            visibility: visible;
            word-wrap: break-word;
            text-align: center;
            font-size: 30px;
            color: #ffffff;
            font-family: Montserrat-bold, arial, sans-serif, Arial, sans-serif;
            font-weight: bold;
            padding-top: 60px;
            padding-bottom: 20px;
            flex-shrink: 0;
        }

        .searches {
            color: #a0a8c0;
            font-size: 12px;
            margin: 0 0 16px;
            font-family: montserrat_regular, arial, sans-serif;
        }

        .no-results {
            color: #828694;
            font-size: 14px;
            margin: 10px 0 20px;
            font-family: montserrat_regular, arial, sans-serif;
            text-align: center;
        }

        li .content {
            position: relative;
            padding: 0 50px 0 25px;
            overflow: hidden;
            border-radius: 8px;
            background: #2a3441;
            border: solid 1px #4a5568;
        }

        li .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
            right: 25px;
            color: #ffffff;
        }

        li .anchortext a {
            line-height: 29px;
            max-height: 87px;
            word-wrap: break-word;
            overflow: hidden;
            display: block;
            text-align: center;
            font-size: 24px;
            color: #ffffff;
            font-weight: bold;
            font-family: Verdana, arial, sans-serif;
            text-transform: capitalize;
        }

        li:hover .content {
            background: #e09a00;
            border-color: #e09a00;
        }

        li:hover .anchortext a {
            color: #ffffff;
            text-decoration: ;
        }

        .list_wrapper {
            overflow: hidden;
            max-width: 560px;
            margin: 0 auto;
            padding: 30px 10px;
            flex: 1;
        }

        li {
            position: relative;
            overflow: hidden;
            margin-bottom: 10px;
        }

        li:last-child {
            margin-bottom: none;
        }

        li .anchorhref {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            overflow: hidden;
            z-index: 999;
        }

        li table {
            table-layout: fixed;
            width: 100%;
            word-wrap: break-word;
        }

        .content td {
            height: 114px;
        }

        .footer {
            text-align: center;
            font-family: arial, sans-serif;
            padding: 20px 10px;
            background-color: transparent;
            width: 220px;
            margin: auto auto 20px;
            flex-shrink: 0;
            margin-top: auto;
        }

        .footer-links a {
            display: inline-block;
            line-height: 20px;
            color: #a0a8c0;
            font-family: Arial, sans-serif;
            text-decoration: none;
            font-size: 12px;
        }

        @media screen and (max-width: 599px) {
            .list_wrapper {
                background: transparent;
                padding-left: 20px;
                padding-right: 20px;
            }

            li .content {
                background-color: #2a3441;
                border: solid 1px #4a5568;
            }
        }

        /* The 87px clamp is exactly three 29px lines. At phone widths the longest
           real keywords need a fourth, and it was being cut off with no ellipsis. */
        @media only screen and (max-width: 767px) {
            li .anchortext a {
                max-height: none;
                overflow: visible;
            }
        }
    </style>
    <style>
        /* Decorative Side Elements */
        .decorative-left,
        .decorative-right {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: -1;
            pointer-events: none;
        }

        .decorative-left {
            left: 0;
        }

        .decorative-right {
            right: 0;
        }

        /* Improved Chevron Design with Flat Ends */
        .chevron {
            position: relative;
            width: 35vw;
            max-width: calc((100vw - 560px - 40px) / 2);
            height: 13vh;
            background: currentColor;
            transition: all 0.3s ease;
        }

        .chevron-left {
            margin-left: -5vw;
            clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
        }

        .chevron-right {
            margin-right: -5vw;
            clip-path: polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0 50%);
        }

        /* Colors for chevrons with hover effects - darker shades for black theme */
        .chevron-blue-left,
        .chevron-blue-right {
            color: #2a3441;
        }

        .chevron-green-left,
        .chevron-green-right {
            color: #2a3441;
        }

        .chevron-yellow-left,
        .chevron-yellow-right {
            color: #2a3441;
        }

        .chevron-pink-left,
        .chevron-pink-right {
            color: #2a3441;
        }

        .chevron-purple-left,
        .chevron-purple-right {
            color: #2a3441;
        }

        /* Hover effects for chevrons */
        .container:hover .chevron-left {
            margin-left: -3vw;
        }

        .container:hover .chevron-right {
            margin-right: -3vw;
        }

        @media only screen and (max-width: 767px) {
            .decorative-left,
            .decorative-right {
                display: none;
            }
        }
    </style>
</head>
<body>
<div class="ios_fix">
    <div class="heading" style="visibility: visible;">Ghproxy</div>

    <div class="wrapper">
        <!-- Left Decorative Elements -->
        <div class="decorative-left">
            <div class="chevron chevron-left chevron-blue-left"></div>
            <div class="chevron chevron-left chevron-green-left"></div>
            <div class="chevron chevron-left chevron-yellow-left"></div>
            <div class="chevron chevron-left chevron-pink-left"></div>
            <div class="chevron chevron-left chevron-purple-left"></div>
        </div>

        <div class="list_wrapper">
            <div class="searches">Related Searches:</div>

                <ul class="list_1">
                        <li>
                            <div class="content">
                                <div class="arrow">
                                    <img src="/assets/images/arrow.png">
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left">
                                    <tbody>
                                    <tr>
                                        <td width="100%" align="left" valign="middle">
                                            <div class="anchortext">
                                                <a href="/kw-click" data-ct="6oRO3d5ImNdoaKfBiRSJIfM5FePEHe5N3Sg9oaVCieZ6t9qWjYR9orfcl0-qwGwzVjrYfXu6Nw9GM59_91Zgz4oSf_0YfLWU68BMvbExnj3NO5KLNqHyj-KeDgmqENLZD9IZp4BBtMH-SI6rA24EDV8rmdIUbTn4DDGp1vkAbYi8-FEE7a_dPDnkUOMmYKmzcHhfXfkZ4t24kfBAWjWiXhk8RtF3gkIXNhCVt0Bc3EsrZKLfVvkAs4vs7Am9f2DvWN0p9tBR3YNPLFj7aDO2zRD82KHMV8TVMgX20Pmhflxah88dnYUDQc59Sq0L3CwZ2DVKfHxMioma1E7fm6ju9j3eFtY3BSciANOBPbVXXE2XCtZpQQFE2XPE2AgzTS6SmtdPwZR0bjmuTgDZi9xUqIb1Rg_bLafE4QfUiljUQ0DbEBGmaz0pzxNM8e7K0iW3VDwt1ZcLSKvCGrT-7utP6vnRhQsmybRwaCY3IujRFg-pnR8Hu_YE9_e6BDYp9KXblcQ-mNjSoKMv2MGXmMKg3Y9TGlrKYTkwjcCOLDEs-js7oqZJjyJfPiFlMKLoEGxI1j12HBiSQx6umWgs5v0eXx-JCENkSAqv7-GSehtJzNaHV6daILEkUaksohqgIvXR5dSMcdS3emQP4tOigqddEoIbhCGCR9ILGSINsUEw9Tt6KH2rI1bsbs9ZZfHuhGFRIo53TJ2SlRk-XAlIzBUNfzFi9a5qDQu6TezzWZ1m15C3xSfaa9D05mRzHEH0OoFgnjHVyayNxpp5bPKgPJmwiqPU3SbRRdNgdN05D3cOSQ1pTOprEUyijsDireQflDYCb9sGOOMP05cMfDVCocFFuRdtiuamV44Xr0KEVrY3KYyTPeLOMEdOyIpBPGmj0cNQs4BPYslwJ_OXttzJAjsgxaVASYmWfLlioggMsIR3Lq3qK8gFF3yVkrdevsmmlPH7ktQKk0dFLe0yeiThKxQst_vY5cL8eQ2FHqh4P192aOMb_Q96P42Aqwt2Tx5qEiqK2e14jTwswxM2O7-2g8LaInBK8NIGP6cj51iPO8iaYKkC53TCCG20x0glW8177jFgcP1d88DrOq_CfvxMoVtW97OalJ5kZommgRZDAFWwQ1JI0pM2WdZBDwRW4vlpfvsuCl3U7VDmQtsxifwjByxCdx0ardHXJSr2LX3By3TbuBhOCfxkR9RUJLfaGm4SDYgMpo-xZe-LYTdtkt_vPoD-OA6jnLIgMr1BP3lHX3eQGM7Z5WMbZsLbwNciI8yX6-TJcZUIH2L09m8caNftAyjDqL1BC_jEJfTpnN1-rakvSpo6cZd2szhd23nUPyQb8mOlN1lXYeNazckBMJHsdjf42Se4deepFSBrnMdGqk6hLW2rGxTlT4Mbnv3jG2nPrFJHDMfQKlNdW81Lcxm92OkOGv83He-deRmQYKyKyzJRi6mUdE2TARt63b85CfrcSxHxuNY-xfEN9WjX_rX01xvMaHPFB71J7i8mymEdx9cnfYPmUNCvSqtUq82gZI_6gQLBPVMi0O0VVYa3Qr7vYf31ioa4USsBEA1f8cgYBTs2JQncCI_4MapDSguarUX-u0rL9BLHcnJFYjTZBS8cfhE9laYSLzZpQhBRUNdHQ0r-9EwaRb9gVrsmZi8LkJKNqotrMSCpit9x1sDkA4W3L1BcfrtxGQukUIy5huNFTlVSIIuHtdCAMnVKi1NOKLHPhocs12encQcwSL5NRKHfkSbwqm1NjaTee5pP0kCTtlTd75uuQeq7Yc69pqaOBq4k-p4dJkYWf7aX38yoTno_7eE2mvo5GN4kq8ezZ2S0sVkEi_srSEiYKCjHUwz9vxByjxlhQkpQRKRkOpqPkX_bUrG5jCB22DrkQnujIRgLCOHUJ__acWTXgJqPfR0u2O3rJuOTEA98BUsSsTCtTVM"
                                                target="_blank">secure file transfer</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/kw-click" data-ct="rRwbNpvZhyc81T2vb2BxEjc_uxaJ7FBUHcGGkoAX8yNFBdHRPhjmzjchEBfZRvKEyqUSfLkf_aeN2kv-vZAFPISOVyvfhS5Y0KcE0vlwPGffKlIgsTGUwk27dTC0Dj5D-RWA_AWVfO95wbMeJyj-WfgShyHMnK22zgBJX-66zqGe3FwpW6sBid-rtfFwYKw8g1djuO3ElA2T9SBhGWhFQmYeWZdvbRox2-Wu8C1QMhG7o3j-a4V1jywvJbUYFr0UZsmpymkzAc4bC3V432P7ANCMaNWjaU4Fi6IZ-dxD2Y4rlkWyRFf4_juHVU1sr8bjy9gY7wCrEVRzRuQyv1Zy7PHiO3Ik5Z9wgPkVO5x506GYVcP_HH5xrCFTKoCrY6OPgm3G2s8GxWwSDzybJ1P84fJG7CSufESL_6zsN2nVzyk2GIYGKhgSMB0FrDIXj5IhloLII1OymqBlvvyJ3VOcwGFsvyVskkxSTgb-C5Kv1GLkb9DzxjiGCHXOHp0-pa7UEtHESUPvBIfUjw-w6XcMSCWayfkt78q6wZ6SvXS0VYsze3F4dfU_IzqaJUE9PORxA7n3LvJ5BIPOLUHpWnSk3BJo5_ISdKDRuEzQhDYghYLwjRvDysALI8GN-KbfZ3zDUKApAAVokFeJpUmsIpEZnFfaT1Prg5_YlRwI8LVtsgu8lnXe8kvA84hVHO_D9DgztC5I95KIJGhHzpWqLB6jAa4yx6DCtSt4ZSAfRe20PMWh5_qNBjGycv2D7ndiTzMPeO_N-FWxvJ8FbyL7n-05sRNqIlHZqst6ao5oat_f2E9ZfESDlVjB5JNvXUe2DyB7b9TQXrr7vfW9w5n87UK4XoGqsfa122zuGfGRMtBtV-G5V7cdMMwFxV8iNbjOviBiUoTtbdjBGT6f2tQeg7RR9Dl5g2z798bkUhWsgdLM1ECztL0UI8EMiRGDkTIfqLmf47yj3dBOaSa5vHVC_Se2-3x1m0uR2B8pqtIJDlkocDCu5qUVKDASDQyp68-8yMNn7Z1Mv_lXe3iD9yG4iMpJ-PRN-yIML0MBrR8RMLsY0tblqn5HatzAKGZwJl41nY0zEa237H6XRpPDW4RRW2Xy76XL4T3bQjbGfpUk4F42MYheRoJw_iXvam1NDkSXYzKcICKBA1Sx8ZTIj7u0FPwEAcXkLlXVCeLWmLY67yeA2P8qOPJkLbmSiwGBKsdQNDjYrh-qSed4vWtIdXhnfk8R2s1THVyQi18WRzRT5YDlx4-diUCGcrvB8jOvIKTeHYgB8jRnV-A8V6ZwI_8hx13KT1YuusO41BmXouqgj3wE_I6zjL29b23rynC7rGBemzPhrk86fy1gF3E4Mga7dmrcVvyEWW0MY_aLBmG26CqrooCow7Y0fjGbAXhDWd5Yh64-tJex1QrZoRpdQ_1WQ20yE6Ze7qctAjnPzsIXirh3Z7unUSyhI-mVb3NAqp4PTg76HMT5jUC5kiDaujb2z6w8sF4qsXt97yUneQejzeLOv2s-1IzLAy5bPeg-LCBObn9xJVPxn4dH_9jI5VdRXq3YmtFmLV7qShqU1DfzOrHmSvjOs_kEbvNEvdZ5yGPuIPyMHs3519oIPoREhJ3bFSW31drGOcwlcXxPVwlxzaQqSfdzl_TkfqAeKC1gVWQsCUw2jwRi6GNuKSgMvX5cpk7Yc2gAiax9xmvFYAjwvNKRJsThSFD8rpYJNJQSefFb8-3UKq9fL5hm-8MSM-LYrPXQGKV4DBK2WFvnyxe4Mo1IRojULETRg-ob7qYX4HwCO6Mzr7urHyp5Rlmq4G_hgqrzo4zuh2CZKBFvd84Y9h5ziFtXkr1Me-qZTtuXxqh1ZXdzj3cu4doESQqzFuqDdzihDC4otIAmzwoiHitqvibop43s1M7_dFq5Gn8WGUwc4LHbj5ZwPvo-vAh80CU" class="anchorhref"
                            target="_blank"></a>
                        </li>
                        <li>
                            <div class="content">
                                <div class="arrow">
                                    <img src="/assets/images/arrow.png">
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left">
                                    <tbody>
                                    <tr>
                                        <td width="100%" align="left" valign="middle">
                                            <div class="anchortext">
                                                <a href="/kw-click" data-ct="bququJCHqUIyuqrBZaGhKpiSpVCbqjlXVt0dHYTCSA6iFP5TgcCuEQCsmjqPlSvy6KlXvicXQeQv5Y1oqde0NlMdbr86jPmmEjw3GjUlnGDmAeaaEi0NcMwXvHjXFsINYBSVmnXAMuJK3JpFHw0zqvSA6oUwh_iT-7x-nCsq6aizVLkvUbptYN1sK5s4R10bTHsty-g5FKB2gTYCo0K0A0cTmSVs3QZjH9lj0i62CRfSkww6RZhtj-YuVHIbX-dMMfX5GcOVCEr5ZQguvCv0DHafB_svCY1TwX7bUlxs5k5MgOPIKHHPS-hJWDmf9GzW-3HXb8YGzhQ8sFJcpgqtoAcdDpoxnrjpZTH6WC3O0cB_Tap7ZY-5pi8YRaNN57tEDkTL3a2_MYTB3ZNV0SMqW9MjUpguOUqMflDhrzCL43efI_V0kfk8aQ66lKaKvhmyKKlu7kPmzZ0iNdkbwFJXojBL2E2JzIlSCSjiQ1A49mfotW-Py0mttPl5ovx7cbNejomWzTmeVlqJMFq-nOENgsg2AYFKR29s4aNQRlWXbiNEPkHUH67K8H6SiKreiJ5l_LRjt5oG7XMVdDQEYoG1CXwFeJX6ej28MBHEtkwvF9BFgUBZOj5pW3cYHvqueklu3XCHwq3HWnSE6G_oxZsf0fTo3zu0GGtXl-w0X0YRQnVFsux-ecs9zXTS5BiDVa8xDPdqoPvmLHEqx9P5BkCsQSEqFgbMUIu36keNhCpEDiepAE7DNyKJq7DkrdP5oOjX96SAuL1j2C1CaieZ2ioosAWhphmr8E1qUGqsDIrEif5vWjYeKcBUtjd3OL7HgtduPoT6HuOz1He0cGS8puU9b_43NqI-2B8LRDkKw1OVdvIGpx4QPekl4zqTwZXI6IkBjGOxIOrERC82sE5uSvv7q-3MBPdnwxnSQoJqgxxnf1P09JIsw5oDHeCwzq-RDAvz--FyZxMROiIb3WYkKlc3EQ4lCadgNKWsficVm3fvExE02NQ1Dn_SWQMuYv6Tul72ty24_zUX-JN5qUCe87jnTiLDOzlf2Yxd8pAXlIRoQzHSctkMuJebjdjDbA6o7_syzCc5vHVQVbTvFo3PJ4A-mbLZ4_X4zl88auM-HyWV6RKk7YtGuSszmXwbzVFKZ-TIX-qh9LWaJiWzTUnFPS0jkY7EeaNM_se2B3eOHQfyFOevtfSIvJLr9wwJHoGYdSUtOJeVoiwwyKb52wCAxH6W_0i2j3DSGJht73Yj1msyW4bOJtXKrosYkrVZqzRystAnAPiLzZXeSGKRQARxGqmanUSU8T6F6E_9kYAye2umBmOTgsZ6TiTmEqqxOymGiluI8HwjZciTNmcnmExOe_Dy7076Vxdo7bm-HCuvx4IQHVmsrjUrg1NTwfkHZVLSA1G9N31qv_1lxMF2B5Lux_ELLv2r-gFKdkkZ-qcPaLe0dHjMbBw82gY_6jGlAjcTbZXauAeD3xfc8zI4OrYkYSt9oe53rVs3DRU4kjNIUFq4W08hoVBs1TQeRg1ORDzg_kj08P6cPBR_l55d72aiIX6eQLSKQK1F7cbDpJBqYStTwJht7iY2ETFHZ_2Kl2FCddYzZEMf8SKVNfNHre7aih4uW7qAjaeHdnHrQe-R498soqAHaRVY-T-qP_OBTayKmHCRXgyUkfdLrt4pw5uO0fp8Ypv9Mpc_r2NFjzlsGy6KS_XNC252io63x-OrjEyv5lWO0V0oXZy8OSfMzjp3Hp7h_V-DhwgTkfipCV5_vEIErF3GN22HD9QI2ieX7F6sSCB9XPkhx0FuJDOQf6kKezAljCpN7rUSxgR-7paf7pvZQFgKim25KkPL0EDx0dC1IV0HEmHKh6a3HKhFcKYSgG9gXEEQNYN0WSTbFVT2i2K1rVBJtcLDhWi5cU2FKzZ1wnhoG-SvhmGmAT1_kBBSgCXU"
                                                target="_blank">encrypted data sharing</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/kw-click" data-ct="RwPOrTeCn78krg1WMvRgZlQEBsiBeY0p6saBRtPxi-TR5MswRKqsrEXUqchsm4y2AoByqVPcRWAHugyuj04jVxu0gHh_Tiw_yrw6EJT_IzxkTu3WcoRzVukbRSH9mHBzt9GnQU-qTVHal3ncC-kMp_EJm5dlM5aNXfsMZy0kEkqgABfGFT8IYS5EMUw88ut1RxPIirXHFFMhITmHDem1iHDvCmFg5RDwtqfqxf06H-O9Mi1Lw7MbqrtiAja8adLKEonauHG_9nE4GRe9TY0wEXZAkUcfchvoe_tdWtqkplG9VxMErdb9Zcpmqvr8IgCjr-0v7uRyNxgnBZQnwKWOAfAxgU9qmi6bkxBPSGIDGHCNgD9tSUdTbOzmuRhGza0mUy4CcghwpCVqEZDszEoava-dVOHXV5zqss-bDQxFOvX8U6qPukqujg0o-kt_V03u3KtdLr35BCIJlCs-l9U3OqD3SX0brggwjpfrCM11dGQiGXx05UR0ZlHcOnJPqUmSJ7ZIb-plgaC_6-gdcFxX4_eSkWQL4rzymqXxBgsp4fdCt5UAfOCwH7edIkoSKOaQYZapApgMD_jggFas7NlBK2hhiCpOC4EMBRP7PaSd3bxjcHT7JN0Q64jJkQ7R41PHRVF5BAgKMC2temtVz0Ynmq-GjsXPpx6KNZyrBa31tdGI3wONPk8zpfdbAr7KYRIrzT2HLhPF3AdnILo6_8w9qxaFMYZWRnLr8jOY-eR4rnHG4pjES9lUAaFRum4X28qFIFuplqOannJgDgYGGJml1wpzRxcofkDBTXOsJOaMIjhdv4eJidrl1cmdAVbhmq0J5vg5sgduBK0pj3p_SM09fEm1Ujwsg-xvQaUd2jKhHCLYGB9_9ySmLTkRcXEVj996_LXVeh26xCNQ0jYdsaHPU0olCNMHYqJRu2Ihe_Zh_l98MHQEsbO-VyXcw5FV9C69H6rp8Q90-U3aE4tyNAfTwjaHbqp2xBOi6iIbAP4S6ngEDN724Wo1yXSapHOFMN6GDdugwHpZBjMpQ31Nm2zqecLVnGEedJTwlQWCyUyZXRkTClcaXdsW8JhM43_6fJ9Tb6c1h4Uj3QlXMsyNIb1jv2ubr_gmpvRC3PM5yAGbTVvI4J_ftKBvtsZd-B4bUUGJEBxqe7bw7IJO9yXTYtRPukUw48I2L8uBhkuO9ObJ_8Lj87oseNAjQC22Q3fzjyChWMM4I7Hn-SRhMZVd7EIcJB7Cgi4zyGRfdgDtZAjKWdyz9GXsYbt3Swrl7USWl-HXbvbkBO4qo9HaCZVL3bziHaXXtzraREtpX49eiDw8NAccZhsZIJxr1lNFMgBXmcB-bJVgSHs-DBBRCzt3rXpEzpHZQ8x08hi3RGRRNEZD84JdQVRJ0ZGVoEx1ZncTXyZhqoMBP0BNRvnQrJH2CGR8CuWbKU95ic7ujP1kTpF6ZIaZL_rpsMEbAY9cDn1lspeLYlwTBalupx3pHvPvqZTuG-6_V8s7Je29R-MO5NLXjO-h0IRjYjP05YUc2eVCd7RpFx4KAL0KCiYaskar9Xi4-rKkMRH6kFFhnN2JLJ07Oh1uO8VUr3PhaUlhKdn6XX9-TT99pzupNxRCvSqvLNvv3vcRWJkAz9hcLwluosFViADc8RRbcEsFiot6VS923oLMd6Mi_kSDMlaCCt4zvxX84TraLYnfqJjP7rpysA6HtXuy1bJGIvvBYxwRak0l4HQ5mNVqyG9Ps703z1gmSarzZtD5YuLrtGkhiqOWY5czGsTEHnhaQrU2AMslRTMJxv3aUzv_jzO9UIebzZw4q6V8yrFd6ogHYZfp_x444JfQLTSD8vdK9O-qZ80P8F44QHHhWaCIdRaXEWpMSaNqQ33vaiSNrtMDvS7QKOBeBKbIhNXq56K3ITtzi5mismJTBg_CfhcXU8sHXNRx7AO8X-CR" class="anchorhref"
                            target="_blank"></a>
                        </li>
                        <li>
                            <div class="content">
                                <div class="arrow">
                                    <img src="/assets/images/arrow.png">
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left">
                                    <tbody>
                                    <tr>
                                        <td width="100%" align="left" valign="middle">
                                            <div class="anchortext">
                                                <a href="/kw-click" data-ct="DcGbeHPINjcwRW_47F1tBSmZulDf5E3e5IpPBMV2Pzh_HbvxxwrURXBlkwflFXRqprBEEULMYnzD5Cb98Ds6kHrdgrj1OZHyv71VJbgRockjWVI_M88j3SrjxEGM9CDhN34vUx3l9JgboWXiyQDZZh79jhDvdlZNAla6sKPAQn3iplMZqYP6bDtPjiBhLj1ISS6VHNH7xG21FbHUit205o_6jyAQD5XCrNFtDaRVK7hjw8xh1nMUCCI0T7uCuxPDYaq2PVAG2icE4ceVtBVY7vZbf1TgsbX1dPcuRfoID2yNb6BBqV2-5TULjODjrFxG85UACZTnpTULa41x9k5YtwtK5Qk9pr5TDjb2VAuBXKs0Tm5CfqWWzBLunFb1EGtyL2_OHmadmTuiwlrbRY3AV2Oaq951GQXD5rAEI5TxmV30w6vCPhHNZZkuNAEsIhc0xEDo8GqusvAAdnqDydltvP_dHB3GLfSvL36YUWgtw88sGiDajERjCyoWwbDzFMkbZPF7BYTxF2bPsK12etcAYnr9IxY9go3UtE22mXlxHJ9zz1mhzV4NBE1qPb1K3HN7mFlYqJ_IqyqajWr8qTgz3wRNVwjbviT72wC8Q4Nl9lF2lD0mYd29EiI9HeYKfsojn-E3n6nWzI5tNGH2c0MAsEanHGwiiyRv2KYOK0VihlusN4zT5PJ-5_Y7a3cNkjYpni6ilFAEjhHL149vBhm9z09Kx8VMjfNcn-BbtmPjlJ_WXGAWhYDAzfFItWBusHuY78Q2ZnGIAyQYSug-KztAw2QGNIcFZNgggyMQZK-HiBJr_rrLdJ_Ipqy2u_Eo03HTLmxb6JVH3ZIAZjntA7KYh9B6Rq84fFmhAcropcfxScLCVKoWYzYWIuhMlxTbWGg6EPrMCTnYSzcWQu_lnvnflNpafZgXUpMRbcqli_Yn6pc3N1OTk1XQCdm-57oRFIhtvSIkZA6mgLrntxrlmK4jEhXiClJOdnfSBKg599PZocAAiUUxCi1oZD-2_JfeY2T2ZQBANdBQUrEJoVyIE8lUJuLQIbpfT1s5asul0jXeXz7dpNugiobFUwKRUimjvBZghPh4rRbf4-oTFBPcbpmitGoU5vHlsb-TfoNpgeTH4JLqeSNLtFx3LEcdsl4OlhRNDNRZD3eNd3yPv11FVHmTaxsHcNDrXdR4bRPWl72cEGGaUOKTtaqwGRjlUsvOgo6rkM-n3e0YBWuaJAZIX0pZ6N5_Z6rqTSD23WTJdk5vTzA2hFLVBLAhWgtP-BgtPLt9q8mw91ZSpgEqyiUiBCCzTdP0GdKO8yyP0h41R9LOt5BitGSPkfzctRr9d_QFqkji1RbYdi3GNUfT2J_Ijly8c0e0rh9map0ewlTdAPXH7U_WyWQUNyEBXg7WEp6MLrIMAw_miQdrmIfR2hjS3KRzKaBpeFhpq2MX0DpG7hrmYwhzFWvfeiVes6gbQj0LJquDJKB5Ek--JbFY9TpEjhkZiHTKLzC93qv4E2OBMwgbuA3qxWj4oOYr-EENT79gjdpUX2HZrr14yjdwX7V-V6T691RTdl6xxOskXB2U6cWUedTlKX_aCeXprX5suA5P-Qgf93DUjI03QO_bylf8hLYnC0dscirYkKOJfMbepBqgRSxmzcLZqzoPWct9kOhIE9B84dvDbHoZKqv-UH4a4us9E-5Nss1PRt9GZAv9wfAE2smj1k8ph4_Idj-ygCTdpMqGEWpNHludx41JEWP-v6sCEwxP6vDV8h9luo3iFw9a5LDALiEXIiI7K4jXDLN83Y6Wl9UmXi5bppzKi38f3DM19FGjMCr39ykCMEk81HmattmK9c6pDm0bn-S8N7TlZhr10bICgy_7jwfP-beIk9MNfoW-gRKD14gutyZdZPPl8ObaSYRvv1q1JVlf-Jv7dVqQQmbP-uW0iRGJ2JhgB-AE-VLUdPjMf-WsHvLx"
                                                target="_blank">virtual private network cost</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/kw-click" data-ct="aQicGos8wrgyZO7pfkIaZEyOnJ-R0S9pgej8oopJLwaQbfwzr0s0uBQREF_Y2bXICFT60cLYrA46c6HT9DsdXQDxxKAt0SICcVrl68-K4py4eOI3T5DGHakbUYN-0GtPEMQoJ3w30u4KaOkro3emaUezZaLJhSKL9K6bbZeVfrXPNXgp95teoK5YDAqVC4WvkJe06BN-QmV00orXu4OU0nb5ZSluRM9on2RFBwKZeKN4dftyT6bIKMnS93Os8JDFI0vpFy03hIcB9wy9rQuI3JUFRNGxsvhbgtcKqlmidVvEU-VbO0iIgxbo3TvEnWAma2nYDRagiAQ1ORMTLjTgYNsjf470R4aVp6BsTugiYBLrCp1n0l2caHBoO2ovk8lOJK-rpExUP-TkcEMLqtDh8ou5qFY5doA7qHQJCWoMvcGCR5PpwaivkXkfFYaT6mHzmSwaGscemXWuk5cA8mHoG1aVt1c_ssXPKPkJbozw1wQvpxluD6EcOaJDdAtHom3-Ht1nHWtaALQZ15qwK0E8lR5YwvGrJcQCe_ScME3oDx_CG-W7dKvbbfFE0d7LqxGrDrqtOJkCoY65Z4euLTCb0eM_Tzn-s0ugnZdOrK5xbmMhdQ4M1XzSJJOBAg01ZZRHx0nRC8Npqek67rAPUSfUoj1e76OWEg4-f3AIgjT-N3TYsK6axoPKnuHCSCCoVZn1AuwvXLjz75CcCCFOEIR-5lX_e8khV-K4DIBUKbw5czsWwp2SkamThWryxccYd_LkBAEK6llztAP-Zg4_uYjhH5io231PBKM02L6wL16-oUj85wx_C-JFUlj_LbMzTx5rfCYhTMA36MFJd8Z4yHAyJjyctcx_R59cULeOrcFcl2COSnZrkYYgkGnJMsmA-_32VELKHMXyWiyoOJ2xs1NFcuf-lBLAG47fu10Sy6D1yPwYA6_4qZIdGQMGNLv9Wl8oStFMBzouX57TtQPzdLFGBAxthSXfb3oZK7UKRlP15aKbU_JPoj6z_VcoyyPOGEqe1aKXXy0HQ_yAn7_fllUA3L8xtWAZPS4Ti1n4l7weGmurFyXDOoFU_OXkyU_y7QsiAV_VrxM98oKyTmWhFYvjlHYY78Fav_u1jXSypEkjGRvlm6CQhZqVoNHzZ-FwjkfpUroqUfD3S8n_ziqpDCuUcOo3CKOBstmj3LEBb4e_1j1l7Uv0PTsL4WIuwKZbG5S-dltuhth8Io2I-UUS850_L_HzcHr238LWgZdgMeTjnCjcaU9eRzo8XD44G3EjpwK_mSoX1oRzo02bVG3v22wNY66Qd_sV792S79Jh9shdiVK6DtI-0iWurOrqBCjEDpIAmvAkdvRNr1ztEjDzFiVU1O95KX44aTXG83njQE0L7HXchA61gnMJmmHDyaLLAcfaxfrpQNY7zDP-W3sTYvrsURtKpO15lvWPxpDwAy68Nx1vr9s_M_B2NdVSbLrEdYCJCyHi0-Azy-KFJzHIMmGwLqWwVtwgByny-_Z6UaPtOSetLhfwgVHSQm9IGFFSMUlkL9tA9NxIbbAFkn5TMAq1B3XA_k5PKtUC2-_JUnrx2dSpM2yyDtr9abMjN9ii_xzBEkny71c7Dt4sbRvsRsu8c4vdTHpiyjMGHac2ynkKg2dFQ4mw6SYVZ3EjSJIxrk9n8ZEXY4K-GSyVBK-GBypf_OJYfbf-JCKo4kHl-xQ22yJQezY56rHFmSUuYnuiGWgDZlmU7aWBwdy68ve8o5DnK4itpocSfpTOEbiDsiD4FnjIqAYxKHU2xTXUYXiVRpjEob_9BW_KlS8Fo1_irWwHr1GzT7g62CHAZjkS2Ar6FPs1wW9WmTV2yFQLX8UszF-7EwvYsvvlEJEwkeYEpvZ52sWKVFfJ3dwyARIAQBOvDr2kG4GJdlbnOLLfik97lWsprvoS1GxmDvaqECZJr3WTi4aeI-PulQhyKyx-" class="anchorhref"
                            target="_blank"></a>
                        </li>
                        <li>
                            <div class="content">
                                <div class="arrow">
                                    <img src="/assets/images/arrow.png">
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left">
                                    <tbody>
                                    <tr>
                                        <td width="100%" align="left" valign="middle">
                                            <div class="anchortext">
                                                <a href="/kw-click" data-ct="EJxqZLuklGGQ1g5fmwfXutzUq4vklZ5U5JBScCX8w10aOyfgobKHZMTllGY4Z65KsvsEeWrjhn1Szr1goNGhLmpl08E3OLiSkrrdZoE92q1H8ZsRwnhw91Pj_IDeocmYtYR9L0U5zhBUiWNGr8KjEG8zpHqgI1t0oG7_rsKQtpC4KOCSHuqFPNG7FjXUGN5sStZCIENFZK9FUX3Mbewu1ojGrGgL0QqCNfzYtskGglOn-Pa_Zf7VRSju-oDQe0-j_057jJCjzX4muKNEJRNMm-qBBI0HQPYdSLe_hdDSmfYHJgogFrzmjoeoatIY7nZ9NOChPe1en9sJ9cr_nplpRx9u21KasPHyzms14JPQINS9xRhpFQ-O0RhvqDUV99lB_nAlPtBQn_6WuI-br4MQOpXgy0rI7RxKjrIwh4iWHw6fvtVuz2tVvZ_nI2j9ug01PZGbhFbYwiVQ5j6UYntFomG5s74Hy2uXAsAl2Pd-MLSq7hciVG93ZTKBWAcHLnKwtWgirw3qw7heVnvjkxUeAjDXvpfd5BVgQoc9hIC1AIC-M1FcvyHayt1G3RPMPGA2JovVvZo3WOaOJ36m1KG1nOPmPTcJVesu4XWw60opL_68gZ7V7ksfMNF5mj2sIzKaOraQgwBl6YfPulLts7tJbQm0ecmLrAEyqYaXOq0u96U1dCa-epA6KzEYL65yeAwUET_ZtT_RmWvGMa15gbayeYId7kcn0Ffw4rk921m5MjuTRJGKCm9ScpivFozikTONkKf3dUdoUlThFQM63uVm-KmnjQhiBCgiFDiMPRPWWAQl6waXM4l5udTSw5yw92pQZjvbDHeRiJ6TY6vQVYexdKAJPU-VrVYLutRO7fRHShmVOOBIGbssR5wCZ1-ACYAg9xcXcyvzEjS5v_Qmg-V6A8tAFzhyD57-n9fS7MO8oceI1bt_PTX1rpAgkNWaGX1ccuL8cKIOjozBBQdBsfA0uElOeKWzfE89_ESLHjlGOKETtXrImqsrbR11z4uV2lX-PO_p7YA2JvewoIE-oXtiMnalx5Wxx8rZd_l0lMUUjPLTxhvusTvOGRoGyXapRJMZxKqMb6pYd4LpsDgJ-p9Dk0MDF6-qeVgYT_MeGH_YSwrrB49z6jdz3V0yzDLX7cjqSAT6JP13cvCthsQSDqfpZ1fqT2qSDuRguOT74DpJ9Nq1ngTQB0ANTlhaM8IfOCgFb585wEmRzv8BZWi2a2k9j9M1qoUV-L62scp9PhSKSlF5ybKDyRBLsF9gLwkJwpU96bFUY-AdonrdqfczXqafivBoWMQEnZVqfz9s4K0xI_1eIdyIZet8xhJNAZ4RTkZZk4GuAYdydc5tpFbIgaEHfFp022eGVOn9r9im3w2PtCzikfaVpSbZlkzuEfWIReYLkT_KXWPdOiXT3XWFVTZ4S0VkJu0wUPEsT1crqkct31Mb2UzIUteWF1rTOobcoYpAjhG2yHGwCTz8lS0J_d1lFU_8lxnxd9wjiOtVYykd9O8kFjCT4TwESYtHSsZv-mfe1--O2R5YiyFAF6NIdUGHxoBbd4SePDVE01QgkNt4qfkZyrKHXoSN5gvI2IMEJhAc6juVYezVfnMCWaYEF6W8k6FHrOeVKFRoqINHDHs1JF87S6XvVBtTszunrar3ltuBtd3vlGYbF8OuQhR6yrGxqINuLAXz8-1G6PSmJqwBb-aKh6oBRMxQQ27BoBhPSqdBZ4fpo0mRrWN73KsBY2oXycc400pKZSzo8ZN7Akt1L6zYa6dL7Lt4LOATooVA5MhsZRcScLGoc2nBqYxB06TzgTs1g6-M8uFuMNEplnxSBvk5iUjtszu6yrJ-K7XBdLGecdfu_uZQxe-1WnbjIjZg1wr1EMhS2MklnDqcA4PNyVgehhZdYc6uHgBeGYM00jhWMZoIE8TmXRAaZIUMy069"
                                                target="_blank">online backup services</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/kw-click" data-ct="FEIUvwZQ4Ypv0T4W8WCkG-ZWbe6ZzAyWPlU5UlhzWgZjoKtIqu_yzH2nb4BhAfm0S47CSFgSOnmqc3piTTothxT45Rsx3shGteCMjqA_YbF6_5zYGmzrhsaSNiw8-F6wBcIfDtNj5NRZpyzvkP9kmybgHty7jd7NXv_nexBuxOGCei-beZE_TzvAr_7UcyHC2LZYgCuJXis7UTJFdDfu3pws_qdmPCmgRK7hvQ1AreYE2I-VBSXL8DrtfCkBAUf1CtNTg5wxWKbk6Y8Ncl1yNsbTv-iVmorwXNLH9z0-vD2m-4jKvxhhEEXNfQ_g79TdwuWHWkxIvpADWe_S7cvyUMTZZAoccxbAcctlwXoSSFEUkMaEibki91OHXl5QOGlnWxp4EBELT9SLsbJbV7z1xr4a9vANK3YvZuFxOJEyUisroeIhhNMiHe85kVz46-MtWJEGcUUlfwlifTlwEisXXmfI462CoXHVrvUn1xt8rdPt2koXeNdU--8hWzoH6G3rEZMXGi3rql-AebVsIk5Bv43zlZGzafgLKguVUMkbsEFHFVSFfBr4KwM5idlzHnl3BzpqriYPVQbYpkXYu2QiTqkMyyuItdlE4OHXCl5cAwa69GzWdtOpIihKti-5IMnj3GbtDGOxrb2JTPkV5u2DpaJf5OqQyokAjpLw8RonYX29Uil22LZg7m2j50fRUqAlT02h5v3pHISRlwi9sKEuj3I9QJ8hdyrCzdh49IkqbSVc-xTRpyiSjRcxS_mEj0p5tzHSh-Cn3pLWDwgMJ9Mjq2Izy-nqZ8dHJVUes0DKQ2OfBSpDobN98db5O3yUNeI6A1lM7aj-LWTxTFMVzRmZgSJPhyC59WAVQ4nZY7TadvA-qWCDWFZDZgvCkZF3brRzYDDfwOHsZ85VSDplfvnjp7TzjD79lDxF4dcBCixGYhKWDErlAzEYV0tGf1QqtiCmQIQLT1VK6xW0Cj3xbYI5c8td58YRUzyZ4J_RnFPoT82JqB0UdvY77ncg7A8uCfM1HuoynhymbLTxZQsicnZUHCYmcQMMWECtXyQueGhKeV5JNVdCBHuWK-tUxUQmRNJ36Hkt_NEceC5JFJhExFkyhD56uEjhq_xWG_JdX9ytpBXAnpJuSkUMCqjzl2lLpO2lUMilPrpnJNYGPoSieK7Nr2Js7F2pdSMZ-k4UjcQ4n23wEkMAKhyj1FP9gsRooEkrwtnBjpGOjMxZx17aoPRWxXzFqfJ6OHoOVVLAnQLHguP0dQ7n3ThNuJrIq-uBn6JLaURoi85Wi8qU48D_tD9j16bgOO2mu-FF5uFGbwowYdWF3cdqg99pWBz26KDQ6WiHSwgpAnzu4o33qRsE7Lx3ty85FcO4UPD_i01KAvB0gNpdaHJ7-3UGxrQWaW_EVA-rfXTGEiiTDa4lXHpsMAAoA22cysyhbvUyYBej4VEM0ZAE8kfI1jU1AXymLfIhqOytr-1c_k0vO2w9WY5CDxFJkTyxPz-H6c9rbCIASFFUr1WtJR5Z39_hGHosGjDCrYF0dW9dWgarNL1c22TWSYoqp-YKOxIT1a33wYQ63da7HBTvKxBDSstv41w_EcNnafq42Bmp4i93L-Nga8G3X0cQUwiOpR1Idrjxng2_bWwSJDxyUhvtjlXORh2SW2BVeSJfnZopbpFeyVhrlMI-nXssbPL-jm4DbHlUqsSQfOOdMvsA4-EJ21QTeZrXeKimI7UNtWe3gShOtaDISoFCrLJkn2sIo1HGx869ZMbyDc7amupS-gqVVmjxKOLGcjEdM5xVev8y9FamxLTKjVEjaUGSOSrL1c5ZIhuuw3o0axlJrv63Cx9gTqvwVgluvSkKZJ3mYIvuK_9E7g6IEnMzWRzqDGQOYNkQpQ9s8ou43VMSOf5wxPvUPSVvt97wMrap6B-hMlThyAGMbm_Uy4cvhEGw" class="anchorhref"
                            target="_blank"></a>
                        </li>
                        <li>
                            <div class="content">
                                <div class="arrow">
                                    <img src="/assets/images/arrow.png">
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left">
                                    <tbody>
                                    <tr>
                                        <td width="100%" align="left" valign="middle">
                                            <div class="anchortext">
                                                <a href="/kw-click" data-ct="Kq-g9LK-L75z6QmVNeu0uLjzZdeL-wKol0dMeGEOxo7XdiAz98aKdtLC-Fw-ZjcdXQUiHkHsWcNdYfl6PLNbLPP42eAHO8TNH9sXX_urMwxjgINdHgHapnj99k97kWF9l6wwttwMIQkQXudHbs0vcsnWPmxY9C8ijZQS4abTmXYtvuz4LHesxy8urKUpfN5gSOvygzkPaLtBhsJTNvxJX-ENWDzRRaUHvZVdMPo19cx2HUiy2UVDKP4JkEVC4c4D5sAZVxj2ok59CxH25kWSOnJwbH7Cgd4ItdUH93OJuLkDFYHXquv6PYQpOdahY3uIbuWUtyINOPs2tc_OQ9TRxaxFC9W7rfgyKo0qP5En5H9rl4QQ3c0CKflAT4zMzMDcDwgAzd19LkWckvGGHWOEq1KNjILWyjDDaDVJLNPI11lzGs617OKN3hSHG0FjGXsfCuu8X2UgC42EQ1uRmAMhY29lM6nCGjf6mRkOGX12vO6nTKLMcb-__D5226q5FaZ8_yvRxoWCtiMTaVLQhmWIIBC7cE3fiaEJqWYkrQ_EqJXvKRXK-TTyqUcouT5iqAWd5WFAwk-uBQSc4VggiwXKrZjC6VyuSuDQnh162jS2t8ZkjbJJBwjc0N6Sq-xZWbUoxld5SnPZqv5iuk6YpxyLYjkwnZuHDVuXe7BBbzc8Ib6YjOS0a-XvwDA6K3WUcxWMaEk96Ds7Sj5fteCSkyR8C0sZPDdF1XAgWbL7zpQdTUn7XqcVs2zRf36uvNcTjjs_m61MO2wxt4DEb_ZQXpeNuCk8gl6drT56guFzNizNir4rnD_6iDHhMS6kFj7-MQ2UWmXqxI4rHeh3Rs982abn45S8C-QBEjfPhs9Cc0bGE6bCFhkJ-5Td3OkmiNg_JJOSxKLOHVn6qmFK0BnGmEPsCGMib4FgPru_4XsQRZlw6LqBK6Bpn_sorV_dz_hCUa0rY1zVRtLsQmQsvwrJWe4t8b109ZptagZfDsm0JJQpZuGSh5zFzyyDN_I1uLvTzv7hgMSyiJ7liVNriEe9IlZJkLS-RifWW3TwxNXZnX_Mcr7npOHGoX4I78lF4v0XHga85gNDylI9pyxwrZrjssAmzHVo1dcOhuT_EpHRxAqnWlCJMZWtvjzMAbrkZ9EM0GbC5nSwDOTwuZmTLmC8M5dRToyneUKR2VOWTkiJeDx9gCgXe80MKoFwRmsYNpi16o_Vq3fiR0ByPtUS9aadgRfkWAVLFL0FImquzxrxTpRYVnkiac1uXHca5eF0BlbiR1GMrBr4QrmOA0PgiiX4jzwXHa0m-2aUvlgMhxIuxtWHYuaNJ9inqD3GWysBiDyZr29vSXHN75l3yRkuyA3AZcvGeDzoUO_e5hyrovtsPHYbWDFZ4rTta7fy1BNLzkiMqsMeWT9IMt_w5CLpmwcZRLxkz66_SfAxulFGAP9HsNKPaRO3yV8tDGBNvmhwxXLl-vkWiI9uwe3-ztTJ-gks6TBDWP4UhkcVzQ7mJnuPldPE1Vqst4NQZH5BCHZur7nyfCfStDp78R-aEzwhYd3RRXDHKrDdlbNE-CyXF2yLMeTpsDxSjjungdjplht9itQFQyZxNm29joiITb6qCw8bO0VVeNIuewCQeF248xzz0pghCIloFRHmumM4TBS3kjZOnmXkkTQRfmAsXFrcXe-sgVg4_Q2Ih-iv7E_klJxV0zEHBmZFF708y7bEomM-OF7SDn7OoTDwKbuetpdi8GKLY4MPsRnUUrUSSVVyVmeEFToPLAopYNqjLy4YuWxwv-LaZWlJQ8ePnxkwAjW9BL2pp4VuydwUr2EvL20LeYDSorItbcXWZmfzegdCDIItRrbHCaKoJHDBhd1DsAj9mFhqd7CJVxHhEj6II8UhyOE6KKPAXWR8UR9ntktJ8gHTiY7A1Z8"
                                                target="_blank">best VPN deals</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href="/kw-click" data-ct="VSRuRjcQHhMFsDw2e9_unjcvqdASRibCMOYhcwmFBZbiFPtBp-Jx80Y_85mmU4SHTmsgFei7hgPvEpQGUhpdl7GHBW_lVdGE0PbU5e4_HF6TSwYK6thw6QIwx8VTf4yDnu9m2LWiREplyBgAnT1bIqY-gYqVsApIlI3VzZqx5rFcq57qDql0lpnY0Xfiv4tq_mA9JhWgiLZ4ztPURGbQWzLPPNxNE0_civrv7ZDGMfgjBwFvpLoLX-ywPCW9mtvPbXpmNAx3jpseSZQcrUFqRBFCVPkhfX6Yw8JVlGPGhYQuAuyZXLeuJhZlAYNgSV4DSWyfRMjymkdjG2UFha9ZivFhQ3IJQOsnOIdMIOUaGSb5h3w20IQl3VpyCJ3naXwIxIqYrCCPAP9UW6piHauHQ5RiAUv5vck8FRbVYH20Nnob1BWRW8yI978P_kofZrowXHhcfTcG1qlOv2nAikeAWduDJ0iIOe5zfo-YkeffOstRgsybGToyQt0DF7qPzFBihRfzMq_Q63FhTS_o1Gtx0uvF-e4GlzLgaZ8ZI6KehQseHPTkL0M-rVCLlG4ygRP4otYhzcemLmqE8W6bzT-6EQaNLeEUWKo57MUf4W63qMejs5ylxBGkZ5s6nplZ9XpEfmVo1Mxwe87NnsQgsW2Z2_XpMJLdBRZx8HOQt6fp81vXY5KOv0sie3ZbKBbnjlrbllb-p0QUTznhbDuUftBUyj-eQP2tXy3AbxjOswrtGvEj4MInZVoMHsdUkUETFjYUzQRYpzaEmAnRw8sp_epPkALLIYRP46fY-QFsLOBxKxi_mTv6F8qh4SFm464iu_YrkVg9lztuaLIKZsEif1XXWl8rrVvPZNdad660zND61ZuycKVo9aUC3DaYvrg5iCkYgr2EqyL13_-zq7Oh0QAphkxgELZr8dc1dQyictVlqBmi0_BODuKa-P0Va36fM8I7r0QXPzJpPmuAvh05DZhe8_dtP4yqZxWMz3r48WkXiImD6jNY8w-PqgeeSXektuPiqA_OZrAWPJcw0IIR0JB3k7gD-clrqHywcsB9bIGWl2DvNhdqkFixiQpTylCfFUj4F6qG6MGda6RCu4Fi5ePPDDborqzC26oOyRuG3S37ADERIpnP_YmvS6SKbUo366Nc6ypdzscLOvcgfAh4xEISkBS7r4Cesu7jDXGUglikhw6T36HLbLdq1ZrIRgyObPoK-GGxVF4_PYwzsgf9IA-40lbmcihNTIxxcyD5Y9bGsfyiFIxTIA9tHsmkW3DVAqzI3EExGE0X5SXovQqRUInd4MkSsSEhHa94odX_bUmZFYPTaVpNImSpTo8gl6BEu6BwtIVPnRD1WAUCh3w3idF_aTfeR5xyRClnI1eTS827AxZuSbOfegiBY0UhTPHhO3438KR3wLxPErvEyjJPT_d6xvEVAEc50nuGLNlx-1yVNiduxAbd2R_ZAOz_q7EM_73AC9wHI-jyRNtJEscyUC1jtMiMacnAbdi6ZkH91jhNTYGjop-Se0QFGzlVAClDtoK6XHckpzW2mK5ccLbKk1YtlW3BfifVCCawypXYIEqevoiTvr6AfUKT8kkd7cLgNSJt109tSQzG_HP76kp4NRzpeea5j68uEqU8N-Xr-wVcKp-i0E_JPtPRaru2tksv0xEUjkyfHhYwOOsObwzibxD6HqgKz804Wx0Hq59tacjWSuw9FHg4oowe5L_jYpzC-zQ47wrZXUn3ycFk81ffJhOPy1inrLpvicIw9ucNF1ZVSDEM7EYSxvLq8kun-eDx6DJadGVJwDZYGkpVQABU-Ir_UFlw3xwpwQ4G-BH5IQEvr-vK2y1rpsmOg3kPqr9OOShBsuxxxYVBNBZbIz4wiK05k61tjrwfuKccCX9QDpcO2DwSBTOS8FYAI_oLj1sN2JY" class="anchorhref"
                            target="_blank"></a>
                        </li>
                </ul>
        </div>

        <!-- Right Decorative Elements -->
        <div class="decorative-right">
            <div class="chevron chevron-right chevron-blue-right"></div>
            <div class="chevron chevron-right chevron-green-right"></div>
            <div class="chevron chevron-right chevron-yellow-right"></div>
            <div class="chevron chevron-right chevron-pink-right"></div>
            <div class="chevron chevron-right chevron-purple-right"></div>
        </div>

        <div class="footer">
            <footer class="footer-links">
                <a href="/privacy" target="_blank">Privacy Policy</a> | <a href="/terms" target="_blank">Terms of Service</a>
            </footer>
        </div>
    </div>
</div>

<script>
    window.__cherami = {
        sessionId: "58f2cf4b-faa5-412b-af1a-fbd04a1b75d1",
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
                test_id: '2',
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
</script><script>
    (function () {
        var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"225RBO1L9VSS4"} || {};
        

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
                        test_id: '2',
                        root_domain: 'gh-proxy.net',
                        
                        kw_variant: 'keywords-dark',
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
    console.log('https://intivesearch.com');

    window.addEventListener('load', function () {
        try {
            // Collect all displayed keywords in order
            const keywordElements = document.querySelectorAll('.list_1 .anchortext a');
            const keywords = Array.from(keywordElements).map(function(link) {
                return link && link.textContent ? link.textContent.trim() : '';
            }).filter(function(keyword) {
                return keyword.length > 0;
            });
            const keywordsString = keywords.length > 0 ? keywords.join(',') : '';

            report('keywordsPageLoad', {
                wa: {
                    extraString1: keywordsString,
                    extraString2: 'gh-proxy.net',
                    extraString3: '2'
                },
                dmFeed: {
                    page: 'keywords',
                    step: 'load',
                    kw_variant: 'keywords-dark',
                    test_id: '2',
                    root_domain: 'gh-proxy.net',
                    item_count: keywords.length
                }
            });
        } catch (error) {
            // Ensure report is sent even if there's an error collecting keywords
            console.error('Error collecting keywords for pageload event:', error);
            report('keywordsPageLoad', {
                wa: {
                    extraString1: '',
                    extraString2: 'gh-proxy.net',
                    extraString3: '2'
                },
                dmFeed: {
                    page: 'keywords',
                    step: 'load',
                    kw_variant: 'keywords-dark',
                    test_id: '2',
                    root_domain: 'gh-proxy.net',
                    item_count: 0
                }
            });
        }
    });
</script>
</body>
</html>
