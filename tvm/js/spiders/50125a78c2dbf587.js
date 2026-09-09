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
                                <a href="/kw-click" data-ct="h26GddUexOkvkeY9J95w_42WYcMvsIE4mSKDf0nAoRWyRdheYJAgtvH4sb0QRB-KtFwKb_eSWVSRElw1rvYDARrbqXUogpmGKoFiWik39oLctx_UlSdZGoXxlEjJXv3PLQtJvLrW5Si4zaYXYcR6nqb_lftQhZ7kntJvm7V2101aRg3vV-dxGTMOwxCeC9J_1nk6cqbFSYuFwvW3S1KdIyhklKimY3tLAAFkijNxnw04v84Z9wXCNdGWIiiYLfPKgGpdvEZWKVwfDJ9Egqal3qbtKpmHtFbXcOY3a1gT_nKYZj1FHN_NxZgU0V2U70pSOJkPrnrjJfGmAso5i8crX5DCahy8f7AJ3cdx0s-7yi0OR5b_QcomPRG8Pvbk1t-4McHKcvy4TcWjstkXshbliMBcrzFMCkYKwoq3uNQm0_aMFPc7G9RCiM0FHO8RXC962bf3cY8Nt-2UrAze2YcQKzM5DbS_Ca5VvkC2jnbE3eLXtMg5t3T_yxJuQqw0x2M270AvcA32Fk2YN2YvTM-VXTmJ8glRgZzoT6Nr2HUuenwkpWFbXLNMS-y2DEid-k9YMgfFq7qKFaxQk2J2n3GdW1sjofqzDkl6bxHXiynI8ilQd7dUYqtMsBWFutMvwwGKuh5GrfvEkxyg2VKH24vAyaK1nopIjcR9VsmGeM75_q8a_ixnqeASpGRO1ofKMVBCLaBoXKJHafyF1vH98sE-Wtm83cRo8V0UqR8jhjFOT5Ntqn1TQqSNa_SbSyT100HeCo_FxoefXq7ftKSVqIqgSPJuAAcpE5sW_Yt7P02x7hlmExRAa-zWp-SchUkvWNsGTjYx-4gaNvBo_QZVOox3vGyafZdpU7TSfBMBhb17ZaW65muXwMupxrMwjvmwVkcd8KifxmwYt9NPGICnvIXngGtDs8zEa-4837B4MN48BI2Yx6KvODoXrKHLo3mCRaZvK7n02Nz6LDw6ifebUBMviBdT9Gl2ejrZ2fesRm0EZ0h63XrNx2th09MTDXiD5oJ56QRPPMXLVeuZWY4chMKKZeeZMGabUqaSyos_noTvIQDe9-ZsatZUCafHgG7Zf9n-uKTSW8x1AQ8dFuUsqsLtiu8y-WYMTf5elzYjRq544lAl6oREhyGRtEiJlK996x64D3d1Ep5bMjHUwo5IjiJYoZMIr5BGuZp35IInMZ32T17I3PdgAc0ki7gxl2T9HfFjTXBoeEcwoO6GdZ1uA_VdhahC7upzcGhE9-OLXaCMJvKsfUAn1VoptmN6-VqaOCMdO8b1ZU-yeUhGP76hdg9a9Svz6yiA3363nlYW7PnzMtM0iDLjAF3nplca7PtazOvk4eK217LX6NQN-cLIujudOabu4zsp3_-MvoPip_1F7XoFfEoV4UzTwNPrvvDe4y8gFuzeJVRKyEnKyZmzDPsretok1HtR5MMaSarw88MGVU7JUEJsu8xTn_8uWZBRPuGSHOKBkfxJCPsiFSDd81Q9d1FPUPMvgGILflWjHJCedYCWBD2apXkMzplnroAmtfdrZUDhMO3H7ERkraYyYBEzjSNXSWDF4OH-86yYgZ8GoCyf0jW4Md-YYPJT_Erj77aoivQjaC_YCMexhb_4EEqvdcO0m2fwPaLsVWhP2xMX7ZGZtlLXmnGKUujlRwL2PugJGqQzUlfmy9gbDpK1h5imh2DNUx-efCBGhKJ5vADzHenqp0GhjNBir6lU_pHf0o6TaYv7Q-vLQS8melmTmnZ6r_Glts3O5XkUkyFboX3jdf4CJ8ikqv6rnvNVG9cWO1gWx20dQvlxpuedfNpjLuluAk0JEJy24dPUDxp94Y5Nl_kyePdfmuJieqdPYMoBYe4lZ0XPl_PPEavTnsydGIkOvb6rjWhQRX0xSHKqCCWowiljktGU1GauuQXoppkKTJqF3yoAIEbKitIPAfZPyDav" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="bWApCNo8SLJ1dwXJWCvaxXaVvoG2buEWcQek8rs5kOoQWdMCE-fCqO-FOeCK9fhAd3Qwk0miQ-8sx2NXty3oQqnesMPZ7pYfqr1WC0CL0w2HVwHqYopCXjjhLa6WQF25i6QPULZr-Yadx2KOnpLAFqVtYuY_t1K18NolG3gmAbkH9LIEsm2QqkEJvisvaxncQoAN8aqmLs3i3qGnbcgIg5EjZ9aJo2mrSJ2rrbRJwf7b2u8oWKomm2hHdr6eD8mxs8JTTq049WR5tOCBAZO4ZiKwcB-vVg-eYngGaAapn0R2ETlbX6RiOGNbA7EsY25lWdwem3Pz6HRtrpyM8ukt2nlgYPBRm2lKpKws_vBlFfg9MVLy8Nhn6OEHJ6CQteyj91LJ_QHe9JW2KLQpyTdzzWD_t6_1JMMrETeZowF0IfdAKvTxmZioJw8Pfk9NKx1Hsh3kix-XDYey8f7VxZZcNSQKKucATtz1JW4imLz_o5YChgpj5pm1VnODtI_bwBUk8nieIGR6RsCUjMNbTR1g9vxBacXuU-rRp4u4vtLaZCC0L9E74pWxIXlmvNJM4SE2090BjtOL3Fsmclh0sEIgsYUOp7LpfZduq5OIPwZw1kOPUGEHXjKQ50un1g3aFZQx8FZOE7RVBx5lVwsnHAA8EkdHlG23ml6As-Dg4cx56lqYj_J1hQ6j6GrZpicA8hu3CJJW5L5F4928p-O5401SbSAmXgMeY8y9_Xh-oAM2UI-EafV5qYLFVbgemmaQGAAhS7JwyxKHR9rBGpIWmzNHmYGSh6b4AvoQSFhmY6w67MFeKv_IGPCztcNwZtLyELSygpZgBFfCEM7ste5oTYZefttCvYZ0AhKAQQN9pea_Hhw5UMZrHYilJz1CrqU30HoTC03jSAzGnA7NcxmbZ4yKcs0fhH9VnrRQqqinK9V_Ce-PC-g3P2HcOa2dtzsRio5GSwUlezVpF9MteRP6m2ZqnVcE1LBzGIscIC_jcepVA6X3-etPWMHgeqHaulJrQePmg3JGNiCycvgPLeuu8OSHWdN7aYiJ0xtWnnTFz1FgG_1daCo0fpXhheAsGpuOb0SBGsHvQ-Gc7OE2-8cLGy40QBDFfjkNiki8hIRww9mLHx0ZEuF6gIIf48STDqvn1mLW6te9MF8FVE2OPKqwQ6jQ2rLtVlUumcEDx0s60mUvQvfabWqKglT7161JD0aT7l5Flndc8Bm6-Rw9_CROOpAab9yYMsw_BpxXtygle1DOTiVyjIy2RNaErCu1SZvZMZ2_M4b3AOHMIXvoSRH1GWXv3FfKXxYligy-bEWyxXP9td5fimlBxDCB4vIR9om1o6BrKgY3Xwram35MKhlWP4wt-PvRgrX965OXLbTXmk8MkBhwvweomWvnDghnXbsbQvPe_NBEvyowkup6qZlPySiDrbdVRZLHGpFpg5i6xZ3BvIaVY2iWaDMxj0fdqYZwQ3YutA8o_XQ__n1ossyRnG_IWZ9n11uUBcS5XVXI16BbRvFynjnWYw3k95ezraffANYIGvHqaP4_zGOKY333cirC_fi7_03qm8wUx3k8QsUdyjrx2yRQoMuC_I3zCC9h5TI5jLkevgA35rBgMGoMGvNisIXzBsCZUbSAj4RvzxDG7c0VoU3PEVpP7bfKmGEbyddcLfV3ni30lK3JgzQ9pCAWH0e8CVIA860c74UEBUl9W4tI_LWCrr8ZkjrZBwOvOZWef4OyX9s0rzHG8_plp3k3FfwvQBBZdVgycZYH4qj_SsKX-xe3Z8TwW1Or7RR8IkVVvAzZl3AyVDPOoc1IF_2DGxnc8z2htFdiPvrZTrSNYCSUzHGvdrboqRGCFNWscddJzE9ozZZ0TLFMq2PN3zmgkdlXg-mGtIKK5dHNZ77x8NbxC9-i93OL6OHGaCnGW8KQoyG4WrOdfgzyilOST6Q9VussPQ" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="SYiJtUKQWww8l5sl_1cONrLcxwAorjk9Bzr-4buLqgtBI4-qm7JmQ_MYnQbfC3k8D2kdEo1wO85Xdsha2JLAnpt2azzeGBGlTQOhHtKrvgoqkJuFDppg02l8M8A5cdeaxVhO_gA0Bckp5XpWhIOuwRrhzAOd3IIlFT_qLOvNl3mHpjw5WFl35dI8At10WaAxuHyiF6_mdABukNV59usafKo0SSUTsdp38-zh7iJmZNJgsUnhDjONaCJ4L3qmUtoHj_HYEVOet8U6mIK_MgzAzQ-t8LvK20XYrUpjkdoHhaZd0lAj7tEdqDgh21D7j9KmL5Y7nFtmJQAdZBWBG9_QmQwGL2Rg_AZikoRX-IXKHX67_QciCxp7xNJDcgjD9rJU8lhs8CguKNVvTmr_q-v-yrnm_znXBlGWsP6iSJwo2Dn_-rGLvKtF0iTrBAZPqfmUwc9EFIP_JV8Gv4Ha3TmynwRDFlj8CLZ8MOPOiaBXUUGsSIoFUyIfuhh6j44rSCoomV2kAkO8XKZF8GJ9CWq8d5XyalxXS3UBbyxSjxdcpCaQw9I-YMNiHyCUqiyMhASvpQ9WR7UWEWmr1M4It98YPPAtUZaTH3aEnnXDiNPdwTNoAF9oZjfhxiZb1JvvoZ3o3cx8BJ6NYKHMCEiBtN9hIPM3Bc344Vbx66Gp1fE7fq8WO6C9qVF-P2J2EXDwdMb8nriaYfAfWYb65XApmI50o8G0DAJPi519gXO3cxArGwKbKCWbf1LjcW8f7W77f7g36CkPZFFmP7iOoKSRzNT8GqQ-W2Xe7X7G2RHfqzNLjCYJjZjXOZsgrkqpWP_aH-MRhzfv1ovO3j3U17f2XOMcfPZk99z-b-RunuwITJTLMM0JNdZBI2IRjs-zAwpfQay7CL6dbxRS8UKo0ecqVEk1D0FepqTw4TsRywA-hEbRSPvceFDF779rzhDprRPV9WA-_kIHPYaiEOr0QtMxy4ymNo_VwgjH6I1InYrSk7IFzju2F-VWfQCIK3VlubZ1YgJ3_7QyUnULfLr00UDWjoLol1DRxQa3JxNBYEu0V4t3weOE-UrTPgktNJu-3dCLWq_tlSo5qo_cMhenBV-ViEkcTEUVnXn-QdkNZm4-A6UmaT6jdjGOgYLUnROc759HisRy-_AqLGZjT7tFM-y6axmwJuLGinoDg07cnGF4w5LADaufREtR2aWYjIuHSXtmYG5FABuzdsgcdNqBFWfxahOe5lcVbJy9Yhk4TeIajf8CDaaE-vVp5y014VgnT5yCZSHY6Xjuwp2orc9P7YGL7OjsfvSsyuKE_AHFpo5390z34Eh8QlE3xvNcI7ZdKn0Wy6Ey0cGXdueAghkF25lrGBDGMcO9aj-ZWc6cYH5WjpcSZYfEJA3cqA-BWrvsixiH0DNyz8bUtTGw0MH0wASakwF-R785Wp7F2GA2opVMKVlTyaCZ7uMI8Xue6yR5_APV3t8SXKFL-hl-1Cd8jchdUWAXv6iiUZCiaE5Ir9VwE1xz8Tbx_4-vxGKVLvMkmbonm55xhmLS77C1aUIJUESYc8GjTUo5gQwtSM23Ihm879IidZ9oXSNqSveBwOAXIA2dBO8qxdDkJd2zF47WP4An1mE8yGpLvAVdFmXLw4pJTCMOmibykWunP6VTb8V4dribvd-WoX3Awf3TalsZybj_JBjuxH3P8sYbO8CRpLvzBpKjRWSaRSr5PAk63MEIDBTsyeJ5LZRQSuDYh1b814C_ZFIsIfprtaJfLHTzS8co6SDP-8Mtu8AbPTso6K6H_gwv0ZJ6N8WLF_Lzwdmem7AXxxIEoDDqwe-UYqVH-De2aLJ1FYeTkXqEXpIjiNgiUFFnBuGLaHOf5QOvheZRSZBtF0ZjQLSVzsM9DRyCj6eGWedinY32fguL46k9eoriYTotLpDurUdiLwoT3RKbfalJUjppyXRkHpdMtwbFMLXMvb0n_w" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="tLQtQNnLA6-JOfRjSKXooraAlbxHHSx8wnSzdkwSiy4j9Xc0r1MewHiqo6U8k8rhKb3vXb42sbwqwGCjBPZMCqm32Ul_JbHMp1fthQk2hL78FL1cWbBs09JnyROUhI_f-ki2VxoHJy6_yQ0tcGrk-b2Cx6UIUMYjFBd_ANcH6BuuByiCsYt8w9_1qtOCSha8CnUJ1i5iTLskkd4UrgQTSPEGEH_YjkV9pgXXtdnqR8Bcf83LKrNi1kbLvZgW_Ll7qFoHJl4vimebv3RGPDU_VoBkG7oTJFHQXE0KnUoo2er5_IMVDLkq03SbxyPF5yuvICM2QXc7PXoKJUf6xemjmb7X207euuMQCCfz4zQbE69aty_n2bUI7usPa_lfYsPJfZATxI-oWxfzJ7BmbYj9_9rU2EIgiPtajOtRUAbDfmi9Bw7GFJsF23VfyOEjKHoYre3_mdSwN1GvciZq0GDqyhtCslrvyvzc5LugjpzVnkF45gSMQGtLjyVQKNgNACz-OeirLxsQRKYFsLtyJv1nx_3Y8XW-9t44rhnAENQW6rTAxilJkBZ4FnpK7R9tpinDeS_qHZu8dhwzhvtQ-qKQbrU5Dr46SnuGYzPF_xy3tAlssXKJY_sqNGEr2STco2n3uYZXlBndWp4BKaBFiVgsezX47PlIuS_cFsBUfHrLPFJT0STIzZhYk2MyFRkgIiHX3WGzbb8rUFz2j-RSgLhuDCZWNsOPEGCPdpxmqOEEVga4X6xjEjXeA4gnISQ3TvHhkVpHw1MlamfOpCqUrmJ7IU89wfrY0cy-oU0QaTSJzAfgDVNUVKDAJIANPDDkx8VXs8Neqlv-IZkr1dtPD1sqEnS1OO7suC_Urprf8nlDI91a4XndlMOS5skOcyzI_6ibSjzl8GiSge6bBDzhTStDioNkftxIJz-uDHNWqfBfeAxdzpSScG-CdqPiyCr4JFrrS_0FK3NevXda-6pruoXscXNkuJFxGOnnl7_qqVtuq26DqUf7git6taKpW5k4we4el446NKhx6bb_1LFx_Ij-FBerm32v-HRlKjr6IoGHJKltyuQ-rh9egoqKHcAdVz-hXyQ2fPSpqU6C0RXyLOSb7Np7tbYCr9M4Io3r2RywIJNv2-y6QzvATRuccRY2SalAefByUrfbIbj4kpkwz6Y_Bo_pF1FZ9HwOqFcJrE5Zdsp9gpbIEZa8nhPbnqjc-wA-Ph7MgYRkIvwNwyWqjkkphiJ3GZu158ht_EQ9maWve4X0Rl7kePPTUOMA9f3cMTk76AC3ub6Xv553LpQQ1iypJTF6v8OFtlHWwhIaQqnD8EUmsEQmYU_8uC3YtLsDY0soPCHZuOkX6vmq3QHmMoK2pPEqApNO4tN56Ey9Idr2xPQ0WPmU7fZWzX_JRHdCqASybUwE6zTDnRfCJ1r5ocNgieJHz2fjJvcuFKglVQ13nPhJaoU1vRy5h1-Jcy86fbE-PD6-znSj7xLMm8_dcrmIDCfyhgr5Izr0_Knt9UrJYZgmHQ_22BLCwKEm4FkD7Uvu5-Pl5quwsN4pxN9WtmC16EwBs0obrtTaA_UxB0TxeqcGJFkY2HJOG51Fe5X_YQ4Gab3DkqLyOmhP0moy0MBXS75S3_AUXXLYVprIu_Z209s7VGmV8T0-rEzskrgT0ySDwU9SIS5hVwSjsbhZup2ZoC-xbON8eBamvtBtbzNY54AxvneOtEocrg1jrS6k8kNG9iVUBYvHTdB8wPPHf37FCG8nS2uMa3e6o2sDgT1GiM0saaru9vyCmC8ZLntPBszWTCeIziK0xSqoPlbELKkUxypqcnkc0YhRuefbVgBqx2rIku0AnGNK7XsZvCCwtwL_X36AghEjqFbK6sSXOuSSlkfKXjhJSJxX-ryN40AbS7z8OCthcr1AsZH78DaRHqcI5c7gxpw1aA9RkU07TmQHIsV99A" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="uYxBPjOipEFbdVmYQcIQx3maCP0OCDwdZtHiXaoreHbl4Ua9qTDXSWzvaehR3ekaQ1EZFWP0n9DA2BgXSlTLBW1EgoeZZyXSz7q3SBeh19k0xlyG3cl_tzYgCo77gmUKrpj_ik1qyLSa0mLvQFGwcEwZP5kANCf55P7d1U8iHFSbCzD5wlw1-jgkn6AJgcetgEaZq7jjPwm84nMCY6legMeIoVQhUaTBrNTrlpi0QI2IGWl2MEVzndZvKcKxJOqSeTMQ45uL7pPWhcRTnw4aH3GAqpClC4j0LEcQwFiIar9q1KiIqkYhweUYsyz088UHyd96NNdTJYxEyTAySZQgUH3PSQQw0E_OUKZ5m78biwU2DNW15LUf1udgITjuFw-uKLR-UgH56YRhUK2YhWaS5oyjXd7NaYf0sNAsi9vKyA1rlVruwkrrsOrdLhIq7eDjVXFDotS4ry4cM3sx2rLICWVXdL7sxhjPSpznB3Y71D2s8EoQffN0o9XeqDQrevNMb4pk-RIWMGjKpIFVd9SfiPNp9uxnkhC4vyjxkKTUP862g4tyzS3TZq0Jr7VT0bIbdncktMgdfXU5BWp0Rqrah2DHH59ySBqqwrB_lth3tNncvdFRr3ORq0AQlR8GWqAhnz430l0feWRRn8gcK5WUT2QArVFQLcH6M6SszGZT_joshFNeiQ9sxxevFH095kSIeoOxl3jsVrDK3XbnwRsrihCGkMmj0lFdtUuQMDo9jA82OBmzzGLSrTjq3-VyD8iWJlvBaGJ8Fhm6EqB1BbGdRD-e99HU8DdOuu_4SMkJmB_tLn3L9oe27upf2vRT836l47xBGMrM826MlCKy76aSNd20mTSS2O0nIVscCl6rEz1VX4nA5V4Gq8ZPI5hJAo105v92W_vkEtjNiJ-KnZ3k1342gw1NVfRFWIIR6-yPOhz_dkIjRSJTCbB10PHedcGPsJxa62A8npCCUAKoAojaArXx-0aF-wGuqxUxLDEi4F_jI5U_Nb3Yd0Dn_FjBvelJO2uVA9rsSnlvR-QhKhbC_5TAS41k1a41smUl_YGjWG8jmdfi-cXPexmpNRuWpyqevsy0QeEgtyZ9mUWDq2AA7hgafh7YrgaHxMFI-hB7xxwj3N_ni_zRL0cXotilPD4_8haRp9MFMdZ4mVnjjh5hkG5G-3XMWEqvUxXwf-0fknIYAJVUO-QcyS9-CozakWN5RdIy20g7CXmK-iiOrSHWYuFC3-2HIqvPTxr96q-KIGiTRJF-X8_LIuTlGXsenMO1oJUNEtXmYifa4UCMiuUVkSkfxR6a9LdbGiu6yN6LHe6pHwDNznyiXwy3EPKeIzKDtMpe0Uz4QCJeDSiH-N0rcD5R2GnsmI-ncjBapQaXkbZHQ23I9vkGVlHy3_X_5-Q6tuY3DjpIQePPH_ljpVUg6vV44BnYYUZP-_Bs9BzuzTrseFyXQseRO3iFIH_2bkpNUwlZHht8YPswM-aJL9Hu6kImYRlds1msf-3NQ9CywecNuwq3-XC0BGFFpB-nHcrMUb7b9L3OT9aEE9Fn6F6G_M2ZFDUHrS_iG4dq9BTOLP0G9CjOAyLq9_9SNOFrvpIKmZdynOOC7cXvzXclnhSqRo_pFyddcFVYJav2KNTpSzeUMdXlmHWnYSFRLB3Q7kSjPghoJ3qkkePiI9nGU7u-lkfwwr-tXRC6RkQI3g7FUJC3zBX92MwvIKtVNn3IGNqRqamHX8d2iMN2z-8EVileegUW_ikf3UOm61N1LSzbqYN726BrRa8jZTdjeNw1Hvl9LLATtlH5fY44178fx5yiVMYCM3D6QhWJs5amBiT6YVUWzpTw_V9x4ApG8oox5qJOonKup-14-zYS-k3F6y9EsiiArJgx8ykhtl4H8pPk6_-Xgy2UB85GlWpWm5NRw6nRBtHZ" class="dir-link" target="_blank">
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
            sessionId: "c59d3729-7f88-409a-bb5f-d7649afe39cb",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"7DC3JA5LA3III"} || {};
            
    
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
