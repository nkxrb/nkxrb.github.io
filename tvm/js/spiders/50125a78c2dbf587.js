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
                                <a href="/kw-click" data-ct="TE-h4GTMvLUh5qZs2-9glj_4f6S4DpAyyQTyMPwzm8MMZa2cmU78RZWrXQfragplNYOufsDy9PjBWpZwiCLobw-8JgZDhnHynAOTvmycF97rRmf2rWhfC_fh1w8ZzDndtEBVhbegA-BlunkyepRblwuY5cxiQrZxhLBSu-pYS2jm8aJcWCyXNKwUoKoX7fXvrjGxi82LPavKe4kA-Pz2vVneS2E6pADaj1Gy8KiKvs1vJOEfq3tOvjUDJ8y3Y4VAjGVWbnYBn4V7Pf8LoarSUTH57XFdn-iE9IWIrgW8Q4Aq6oDjDcG6oBlU0WoXnmYXENd7gN5eyEIXetgIbHaUcNuV1E4KtQEWTeswutMEt5VrAgp1SUFas5NoXY90AsEhFjytP_pg8BmXzeiM4kYSlRSfcKheG3VenXO76Nd0-oIzFJSBtPiX4oGszWkmVPFIAXfQJCFB9xknAlUzdicqA64_kobubGT_vNF6fiFNqLt4oRUuVBR7Bvb_3Qfh6ORRBQqJg_2_PRe9_Sy9zrAJjrKyCzJrADfgW19TAkCHTax09FXEuIQiOoU6il7hcZDZ3sVVs9FknS31v3eP-iz6nuejCePSRj1VkWLZTae57xTSmZ5z515pxqc94OGM8lbQEFXezZO4Rxi75Etaeijp12Xxcl9zpuzJf1v1Z4U14pnIaQO3AZyBRu5slGEzBMkIMXo0Dp8eOOhrzuBwgeiZGdROK5uzc4q4y3GBELvvNec3O7sclmr5mKHPJEcjfmlM97MEc1b1ma5LGxdGtreTVY6IJg_Vi7bfx_L1ncEiWFNneBHMQJEnxu84SIk9LSFe7DLxmI0UT10_PitxfjoSTQjXA2hbF9KWZOVifhGrPGhXLOW-p5aQS5LDNNPFKz6bi21J5O512PDHcaZfqMg7kquBO5MB3MoHk1hKX5MMtijqeK91Pvzz8Niov4rZ42fTprMjOYwsPpHjwYKqk7qDKIrKBQ--XTII3z_6pLty6dB44NUALIqESfLtewwZY0Ha0il22KpAod4iUJtXSkEhS5vhkTSxkvzGTn2x15X2ReN5dHRjnZkGMvgOkUZB2oC024C9aBhrZCMsHICNIoHg9hVjZJAyqOb-SxIlf6XzMK0PKEAh06pq2FGj2hIIBKnfvRY1DMF1vBwGrH9xIRldZ4G8KsObjvaDqpIGV7Ja2Of1N4EvtUE-4aH5Lu7VOGqyOLdEnLZCkMV3PZfLq17fAvQPu383GgeMzJYgOl8zwGXb4Su3qh0UzxyuEEBei-uccdIhpE-2hgDSepopPJcBcBVuWgoNJlich4Fxs4L41Gsi6OrjAev-vVVg_ZPMDAmyOKuSXQJQLpk98zS-haOWtltq7eAT17ADWq-L7y0C1jOtZeb04ozWDJ36DJKummxlFtqrAJePzsvZEEz12c-h6qPxcVPpqoUZ-wryGDz98z9-T9awnZIORwFUIaQbnGt_QJLL-4eI7yyv5BAcE3smULB_FR-UslmBYlWC3tLdRpH0YQ39SITLmv8_Xe6qtyL42nEkZF9vAJvYHRvBShypnawPq11HiF-BtJCHBGlHtGzwtXuhWLbgWRPBQeJ02ElfQxamdtgybHLVF4mgF_q9XxKa6KH5T-uSXDZpxQDOuL2MLrSe_F5TB2c5TT0ZU2UPaey2OzmbFpUE5QV9TQnx5C65Z79ZdFzm0h6vLKmDDxHIt-aaDx0LtE-49WjKpdTRChQWyP_s0R-RbeDy-LTgwEekBzLy-I9kvvsorXORLf9IvlVP_UemaBffUyCqUi9u7QF0bkBa21FYU85Ozl4JAHkqGh0ypxHmvsEaNCo1pWh5z-Cz5g4CtW_Zp3OLt8v3eL84LResZZv5e2EMgd7xaqoUVd0wmdRp3eeUlLuswJc-Fjz94FTohRvb_pzJhht1rK21SbyuKFg_7HQC9w" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="pLyy3xFmiSyp-Q3KdPffZgNfQ4ozoDYQ8rELTfTigSVBxyXpGwivwWZcdyDbHGfudmEP-7Ysx9XTA_go6Tyl1Vey-4s_LoSTIGbjrBI6ZIwS6AyjgbhA9cLflhnwmsHxpm7PW4j5zvZ13s72qFNu0ZM-Pbox3E3zNlNbdVeJPH0eVgR_i-5mujH52cSdlIqp6Q5-vrgRnwUQ20iau36mBu-DoVNcAyVL82NKb64bIOAsstugw0H6dQzJ0QomCxJ0cvHihH-XRwpW6vNqWJACkWNVRZ7NoPfedAT9J_pulNOITwEifr-BvK6WE_GGzuhH5PmrOJcM2vxOmnmQpTiCBEZxpO2m33et6pl3B87JsWvzaHbfRVSmIii1dnli8tTB_dEblv-V0NdWX_nUGVP4QKGYEIjJhVfj4rlCKLsOj61IGVYqjTRNYdZAt1Z_jg8YiEw9PL_DazElQgZlc7ANZ7HUhsvCY7bB4wHFpVOedWfQaZK1kaw7v1rMuekIiWIfjofzxBgOtwkafDDfuhugLSlVGBBYX_-4OAeDOuUPBNbXtipnY36iosRwmoY-gU3Hz__zRrlLBK1l27JNVHV5pX0hV4g3aVgyPWzhHb0igSxOzXPV7s0WYi4z51Ei4_Rdu5puCY0qYhlyMDXQrPzDpKwZ7CtRPo83ca_xcIJL_dEq9wQrv3-3TqPwbvW-wdqil4FnG58LzUt3M66f7KJmuS-sbofYYwS9fukVtc5YHlQgu08GeX572pAro8DEdcbzdZS0PfisZMgkT3z8e5EgScXFj_0AjusDtC6QdSjgDHNN9tcyPhnsfZRH0l5nTwhEvOX4DVALIoZVMex3wVXgy0RGLJaqhXb0x-4JXY-PkxNmcmMWskWRqs-ed52lm-jqDGLuS5EGwxhtJRhX3YD3D8sUjPQpw4nDVPG-0jS3RdZThiASe3xhj75Cv783o2OSv_Yw7xae6lfxFyA3YYvlBDK-P2CuZcSDYnMn61FZ9WdfbCZg6Hi1_oxZG-qTQk2mtgYtVBytSbfKQLydtOEQBcDLxAiRNBxW7KUqknmmyVvHcg7dewVfC2ftF_A1sBYKg-mipUt4G-o_YmKfHp4H4iGfHBaP6QLtcsh2zvKTTz1Ll0BeKHz3bNxwXAL8Elu_No4VN8ypdhgyc4yG8hmLztFSa_o4LFRK6z4ith7AkU79EM8-DeRbL_63LRIq_lqozeFLzGqPqXTHKz1ppLmnaefov98rxNZXTheeJtvWikcxdWvMWuOvCwVFKYUDXK6BjbDQ9uZCqKYbqtCqkNkgWyQH51IguEPIxJ4J16v5Q8lORu4Q3taQscPDGCQjaQ0BLPd1wDPSLP7tQAx-g9-oClzm8-o5erPj16UbwkB5v6KugV5OHIiUepq7UixbYXGrce6Dthfff-5UQpCUpDlA0PFSZnP2ZH8X4xLmibOVkne7IM2crSXN--psPY8PWH9W86dnGmFXaeaUV47te3ddNjixP60I_IYKoOEHkckkPbOyUAzA7wCIHEF7IQhJzJxNqFKx3J98puz0Dz1jD1eD1LYDNB52qDOWAaok8BDYJ-XogUa2c-UcsZai6YvtvgAg1tNd7kK5mT7Up3C-Dmfs4zS7Ss6eJSN09AB7oF7MgK6hQ6cmp519LAr7m3oXM8ZmamsuTUWXZbr3dr9oAiPlr4sn5wSpogsPZ4DJtEkaeQqfez8Pr-DOztzBAF5GVUScR6YnYk0LTXIhXuf2qxQLQ8HtjeE_DEcyh92S3Fj5oc81Y1Z2Cv24zgTDxS0hgvUGFv2CZMV9YDA8owQ8tTkOuPRopduBMAmMcqhR2T7pdqJwYb8_sjUBEztHBViVs5XsOH1WKX6qdeH8HsyVWVWH-EveitfiK-YWfiAkB7D1mQaFHR2SEWI_eYcNfDorK4r4Ncm4LYgzrK2DDaDX3qI-Nek" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="fbST1S1Kct2DQSHrQgfB4ZESrZ7SM07LGKhaCWoDkUkTk6Adlee67HKao4mbeT1UCOvp_1dQbrf-N7R-MEmBWZfNz14grdM08w6Pj6ZJo7YxbQciDlZLrGpCjtmTNxdZ3QnK0vp_pKz25uMjRA-Z5ZcpDGixwkxevNtsdmIOU_cudr8u2Yu7Bkcu1hv9tLeVg_qEZdgXQeNE9sHeawVQDhdwfiufb55v-dgbg-WQveYxwZIUbRKpdZBO_tGEgp4rOKzTl4BIMqI7-bQJUGBhC6sZq3dKhmjA0fwfirczg2L5dmay9flhGHkhNuvvSFlTMfWWJ3jN51BMnazTAzLHWmWpF6BKe4FN5g4cREit3thFUtvcbdnLkELSnD51gmodpXHhkxCK4bf725lZsqit02lYrB5hl_W8Q58eEZvYxsZkiTc7VH2vEPxB38UYvbxySOmkKXRI9AT2HyJGDxjqUn-XbzbIIS_F_5_lFpuqHNQYtSbnQKd_Kfk-OiVjGHMMd7w8fIXa09qtZhrZWM4GnxDq-y4a9_YL3PC_8w4gnyK9q_fS39aebSb9Se-hmDW1LGAi3uX79V8yrYqyhyAgNeYfhY30st8V8aecXgdc9RAb2fookPJ-M24BcRs70xhj9yGAbzUk8BodidbQ85HGe3dgB7xcp41NGF3Ny2VM-NP5IWI3ZDgrre-si4HxSL8xj_TQsj5u3tk-vj9KlheVyyRq-KwLB6qGO6ILPf-rYLmozApRY76a0u-MzOZbc2vJCVje-k2PHJLYfYj708pIXdauuWjXgKkcaG8lIdkZaOvXxfvr2jwIhQwBqtObOrzCCss_FTLJzBrIDaGklFRe1AH_An3e1-z2XtRDpvGE65bDK9JACbrxK19gD60Dk6X4otQ55TmI8ZpniODJTGrdODkX1at3CAB__WY0_eB7uBeKZWQUH98dQ9Yi8KU-dHJIDVwpSTj-K7g7k4gSZuYLAcAip_aSaAm_BdSeNGkkSRWtlIbtK4DSSlCDndfK7WK2_RpZYLik8sWRQQBpSdl--mOHSm39qyUrvIcaIn6YsDCPJwb2nHmeO7JQaE9WJuyxgZNt3iJabizIA_GqjHGoj1cG9xpcwRWiuvCpoEW_kXjN40GLg6synu4-pGIivcb80u6lv0AkIe20S79NEwoUQpRBBla6M8FviVsTA90QOdYHaAgly1_ZtL__nSlTBHnGcIJOsNWtFSCVfEXNNbDc4I4p_Ki_gJ-3N1ByR5m55EzP3-CNLxvlRIDtVyoASv3tOkZKjtmXKp9YiAIH3bEoV_hmfHNK7Rv0o4wbsjnsRaedSIJXKMKBXqoARRE2jX4jnRnuXuaGnw7EcjbOAZkL96LKSJivknqstLL-zLb5HGYCxjrITKQZ6bkEgyatMp531JWQVIVpfLlV2ldg3YTVRx6vBhVDRMMcS5ow-QJkF-erkq9ALh3VP0gwJbUzudQ0G1PRwhFOpQjLNcYwgM0HoaqsQ1XywkKchAGvC5vVhQAAC296iEUm9bnWWkNvhrc6uE_Kw1ltzya54fsMHYwUvfLNojElNPJVYzkwTfctCHAN81RwBjvV4nvSSd38RP8TsENew5O1p50eVzbZcuvf5y9MqWHkbj0LrNMedtAXQ26WBVDspL_Idy_AUFVZoknYOrEsHzcBdWtYa9x_UQkIudDYm6ZDElyiRWRhfogFeE2dP0zdG_ZM41utnL_w9b1ua3zgt6AqsxP8oebzu1q5n1l0Ycsn_cjRfl-Ramav1cp0di6FsyRcWYKmN4-382mZCi1F6dHyllCI_Y2TMOtwJJaktxD4vz5GYTS4EZTD1drmybf3dZa6t6qjsxXHKPCoDmW3i4Sc4D2vL8kA0d0HDQpcdlpg0UBD3VTE4riQoK9jM_hB7_G_as6EZ6HxfZ1C6fuh2tjBKfH2eLR1o1OsCat9C7tlvPnSe4zJfe8" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="1cdfHaGKlqL7pYnkbYH0JXqptpBcgq10Aa5OJmcQcBrMQ1gH2KUjI7oEMxppKRKP68nG-gyX0lGe-KYMV9ArvKDAkVsaf7mCSNwSyR63iIh1sB61DxZp5XAPBH2x-4ebiIEwxwO6RWuNmHG5TzRfOSTw8dmgauoi0hERFhbMIkqxtNNugaQIDETmaiCAh9CycfpKiwZZ9KGwlJAD249SQwtRL4vEBWmCrvvC1Su9cTQvQvePyk653BTiHqb4syUG7OWY2PMiYPcP0LumfcYOMaIYUstJ5JxXiWOWiFGZJ07DAYUTzFH5DcnFoOJkz0up1Dbbwx0oXfKB-SKhDv8dK_mcdxMbB508fneA_rvTn0QbV6Rfm-uRuFp6b8qb_-vzvuMnsaqlsjhNbCWA1krddXOJvT3IsBbn_jOKmU0YiXvRC0WjZ4gwcBcFe-DBg7mLV_jVwR27wl5Q3gNxlRZF8zzlNYsa-XEZ8yLrGEdzlb0yyuB1aAJoPnB9xAVfTxi2FrK2wUr5IGGS_OYXWD491mrHuc_loyCwVY9nX4AwYIXAz-DTN_wl0Tt6fTGnl9VSvSwcACLK1se0rRpMuDVyL9XUK8-SAfUnM_E5TTjH0zahZ0Gu-GUpxTcnu-U0ncme-zJsIkFiBnq5rsBXyIwkuNqAM9ypq5polC-gvW9E2MigzJzgLRW1l_9zRXu9iHq5dwLztSF67PtVLb25sCZCB0PUrmfaWU6F_rYLFBba2HEjg3vbEaOXXSjJpWrUB6DnE-cKyzHrW1LKi3oQP8YZk9ZCS63c-dz9k5XIblaLGkmmYgxaRXE2ZVia4_cVhtDGNOoYmz8R-3JyaVPqKrskUkqNHW06huOcomM6FOgH0Vq4xW4E96ZzNp42dUcjFM3LDAuWHA4axiGRad1TD4vEc3IO4AetURBCSlitae4azaa3eyu3yM5rAVCSYZSgfitCWlSNHBwoj0Ga5iyj5rGad3YIGNu2PqvLbEGnTOE4W8f5tS_6_nrEIBcBgpSm_My7eBpcxyaQSeFN3TxpI-tZcdwqalFtmk2fLy5oH9aKa4f1KpaJCtXacWv-c7oIio0sMfyOpL6fgzJ0Pge-XDZal0s2qG3lLC8lfpgVwMdKmDEGWjeCWrJV3LWQqg2jLRXT4wIDpIjbAZKeRIZrCEWhubPF3_eCMbhujYHTA_N3axqbMEAqbVpe9s23YMf1lZbgFtQ6TrAvn7QtEwodd4MEYOdqGjvd_YsosstNS-ysac-GVi2WZm4JUXQXMYDEGxYv4k5r6gfPX26C84CVWCfzPXifEYVi9XJPVQvNHXf4Gke9tYepoqkv2a0uWdOl-Do8JlubQrYAp735eZF8-OTBiAB116g49nEJF34pborSRCfc88VBFa5NuFplx8n-CrScPcuhlaIVSpu1fx4X8zkRRYy299ItjT5CB4AFPxqlzXrS2XZbehwaJQzkPgdTzpu1KyXonjzCts7nAZWkptNNcXWCPsxSOrqptGcgPqrRZakpG_zU5YHEyopcy7V98u7O9QCEJTaxlpaBYpDFELBeRij78xHSKsl4zSvQwKBNGKlBt8tbIAxcUnYrAsf1vIC7lw2FUvLJZhHe4LbpCl-x44ZrFuaV5y721KT28N6cP47m2jLULbF7LB-PqOtT6zRDr5szlME4kp2jXZNSG9DR1GvLeJ9pCFDVqjuQq1__fxNfNihkaFxfsGxaeoD4MyhaxZ0G2orHEzVdvEB6FA2O_Ae60Wlb8cYmd-DZZosHnRs0cazBGf_f_R7g5cdQqiAjQRsIh8QeGB0isVBtrOnkrXuCSO7BfSTnJ7nwY7uw2B92CUThKH2LALKZxchh_YTAKSayagHytHrcXxZW0NQYhVI8wIOWueFVIrVCPC5dF6qrVFyhsUTNsAUmcBeNKcC5Rt1zIxB5XfPdxwXrg7ZBJWw" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="awJZP5K83aJsfNujh1gJXwAGcne2IGB9ssQ62pMT_rR0Cqzw1YnReO1neRNo1M1LokBd-wqTvMIAnZGdJYx2W--KNepqYBFDMQf2VnN4ybovq64rKyVdoZOHiwSeq4gL__MDUZuHeMB33AqK569xaujg6QcZ-zjxupVkxWj-t6RzpYnfSVBfXlzNQh9HVzXy31t__uomJLNBBqcnEb4aAXUQLdjQGu1Li6a7ewhBCfWChEnOOHS1l5TAIfqAcY_LYCJhrT60Zzme-8BbLCbdR0IZeYuqoyPwlzhbSHPouRipiBg51FtJUsCpxohFS56wI2667m_omO3AM5XHxKfqdcNInz4MHejcDH-eHmLDVsPJIHRj0vLfuaxbAzFIgIam0gHBQUm-RfNItauk0mZqKsvSzZAM5IAE4_zzl0SpGb_m46wJUOXqbR3lTH-vQ5BTVP8UXLBxGjYCsMM80FAagOJ3vfzKFloyy5LDJI22mkfBmYMMkq03EgjVSON0WLMTIZ1gzn3PVPbZ06zLYNzTEdD__RaECKtwoyZ1U5myooQLowljuhQ64mq9QMX0HGT-8lJHN89uX99g_BpaVSXZEyaF49yy6fXwd2b7N4lmmDWV4UdYLQs8EbmHyICdu7s99OSv_m_cmXUmnQ8YV8CgDzR76ky1bCale63ZvYkj7jyLu0vnsNGbkjO2THc-8NtLRR40mQhOcvoGuOE8FrMZllOCEzYP6KTi029340NmoscjDGSGQxFhoDKAQjIFE5ZP-pXL4fpDoYt8gyKhSWkwfre3pcBGeGxUxxi6C5lFmUYcOKQLZKiBCYtQCUR74GboynidbkE8uLU8Jo-Vr6FPsxCj-_-ci47Kx_EdTcSiwux9me8L8GKbSsR9YXjgay56D8ti8GzDvoNoLDzojbVlkQdVPGmxApSZLq0y8o3aGunZlFitHlHqw7Tfls4zpFt3frsH0ahLZZTupuhSvinzIip1Bwekup9o53xX4k568Bdi2x3db5PX7oNmt2UUCI86VvLXiEQlaqlCix9xO1Y29FBTtnznVeISrNiuf4dOfoGWcq5F7AArear6kfTDud6hDyhqBW8x4BvQo2Bl-2xUlIGKwqBAwXzkpLLQhHAJe4wRczPBCvO0ACcJcSfUpbuHVe7Eu1xU3FI2NgCIbfN-xzkpcIgdQCRit-1FU0EkgJn4yatdZVlu44t7BGH24YOmxbhqNmYgtx25vMFuH046pMmaPQOJmN5ZEcxIuPF9nTj7baZ8Ld2rCL5hVI1brkMzuK8gpZFMOzz9KA6nwHGc_SPdYtHYBhdAcl_nPlRTLE9Eon5Sx9iO6G7K_sGQqpIydDINCdnIYEywk32ihQuucZLxuHGEWW1MkqQx0PV6aqHmzlECQCvtBQ-3YIqRz1hlI85DwLVcKkQgd4OMnt-Szfh9VZNZT8MxJ8ehKzPMlAFJGvY5rn1NhkpVtE2l6SCmue-kKZf8AtSoUkSu5yH2hP4ICCoWBQ1ghron6RuenHh2uc1PsfvkRlwa9ODujEtaIMzd4F_jYTMGNkdJ3311u2AUruA7dxAEiIoKV3Lu8-y_wphzQp_S1ANCk32FGOIhFiceMnoRzRY1HqzYOlrr-nu1YhqVim490_omXmYgxW11iCNWd5v_effItbB4BX1D9aAebzySRye9ie6DZTnHDc8qv-wLFmGTPCUq5KZeb_xPUzpQ9IfBHLJ67v9u0K3HJivvz03VZUtUa2Vld9e-MJcuFphpVhDuCHA1AXozgoX8qaHnsKuoMKzibYuitcyNbukmH1Pd0vU3Y-Bp8YUNImzoNRBTZpcT16zj8ppm87r0qZVRSWERma7bMJZKns0NvV5W-UENnSPq1oEPYT_DAlH-dK05KGZeZEwgG4v4o8tdL9fjYy6d1vIpad43NbUPW8Jp7x9_wQxyWlN9xCR5TKnbk9Gf6oZfm457" class="dir-link" target="_blank">
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
        <a href="https://intivesearch.com/privacy?dmn=gh-proxy.net&testId=17" target="_blank">Privacy Policy</a>
        <a href="https://intivesearch.com/terms?dmn=gh-proxy.net&testId=17" target="_blank">Terms of Service</a>
    </footer>

    <script>
        window.__cherami = {
            sessionId: "d6eb6b28-0ef6-4ec1-a6a6-5fc27a875fef",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"71OQ6J9LAE3U7"} || {};
            
    
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
