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
                                <a href="/kw-click" data-ct="cne3mXc2qpiWKHkofcsc9ccT2pqW5qAin8JR1h9VDcBm6povgZE3XsmhYhZNXJje7tZW2jEDBFW6LK_9dGAA8uBJsGAwgSi_jVaLKfjN4yl32quu2x6dvm51wsarpKaMAe-AH3_GlVeldzn1dD-Kk7IJH1IR51ATr9OYYrnJfFm9q0FDpRIwnheSYX7mei35l0aXUyo4WCYDCCX41qWtopkSRjD8uMP6n_X-iY9AgIk3uk5SpVnxcUb6r12gdtP8YQ_EOxHDMAwVGHfvGoXBgDJexxGxLo5eBpgfZgISDGKMQDaRL_KS8jdA5C6vXIUGrS72_vmH0TRSHatXP4HL3ALN4RzztqFcTKFW_6wRIu0Zyaz4Pwu4scM5s8O00sRUV4klnRq1c_57gYKiNuVg3VundvEQAZ0Qw3Ojxf88SvRdsc41VXqL2k-0NdSfCDL2osCPOVnf_LkI2bF87WfUTcmu1FoWFNQY_nXf9sYCNohfvJXTSkaR_dDafBj3Myx2Z702MbC0cSZedOD0U71xiIbsF1bVoX-vs3eSJFuzAemdNo2Epbk9b9t5x4ct_RjkHKM7r_xpL6I7VCul-8tQbv60E-AioTqv_V6LhivQQBMBPbi-RJW_PSfSQYHBv03nuxWbuq8UzDPmZFxmTlFvo9BEaTnpiVQKC4E0hZgYSyPRboEfzGBMnZ4pqduSPlFVx0NqnhpdupCxqpZ7SjBfYy5Lzg9DyA1pOOH0STdh9I3DoGSL4mbhmBQBB7E6zVyYC4rRomISz2MS7jPV0Gq2Vu2T8JA-WNqI4LNSWW7BI7I-qpZ-s0E-GguqCXDr1SYf5SoO5mSFg2FJsKG5_O85pmzGOh3LCA6sNZsGlFYcSUNHlsdXIUAM2M_Wp50I7IkVEu1AKzgfriK31bpCe3GQkh3n9jlsgokyZZc2oiBVPWzGqbqTK-NEVGgycNq3CnC8JtVzqCziTRDwa8vnMf2GZLT_qB7LcJH29Z6tBDuv27Pc1N9Hi7ZNNnEYWwJHo-tLklYzzsFeAc-QWETmkYd-2cRKy4qaVkcEGEjRvuaqRUJzwR_6FP0yof7UhDxmbU5hLKH6iWkMRJ4mCn1uiiIcmsMS253v-8oyr1dr1a1ytAnQpIYdz2SXCRk5TmR3NqnIqaTV7cIPZu3k2M0KNvQAbrcgwzkz29PmMqdjwPtpbTPNKh9yd9bfRT6wAK57I2fv_lfSy8oXpyImzaiUvdPScKKAYZ6JzNhTDXRkDGAjDQ7lcUe7gJbpuT9UNOZFfajgPm_qekHl6aWWwemkMRVCm95Fdiby8MppmmZzbQcToVpw9QEp0BZfEAMttvB00M9iCSGNO-772vHFfbvJaozs8PxOkPlxbRCl2ePyO_6cbto05OKfjgWzLUvOYE5e9rQq4Tyl4pxbYhiIjz3N-tmYOQedGt_KXrHiIe4w5Uz-sFqxz8o_OlODDpZd30D34ykNcfB6yS8CqXOGCIW7xGK_mDzRkutxX2TBRF6jHvm5f56v4Cvbf4fucBrqWe9ZxtqeS6Ii5xdtGpNhQpudOn5JWQXZMHQDun1PNC6YWdNg2xUqTUmH_16YlSnJ7T-TosbeHAFUvewGcQ969pyb_-eaFPHsOQo7K_gqszR0FeW8_ZRoQuf36m-DxCJuaM9ozyNK9wJvjwvwUn6-Ji4XmyhbHKoB3X03ntQbLW-vcQrOEj6JUUrGhTK_bzzf47VfASGXGmAhhISjvGWbwA5u6xBW_9eAfX53cllb-IhZ4XCd1W_B9yKW955bPNzbJQA1IBHijdCxdoAIoszACr5dbHc6g8YvdC4RcTm8XyWJt9Zx8UV5tzzeKG47Vg1YDJbpFzzr8JVbKmVWiIWc5Dfys2c-egiIyLHkOPMz2xoFS4kUDWK_doC9BqTauwoIuN4umuGjCymd8Jm6Z8Jo3PWAyv8H" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">secure file transfer</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="KXY4VZAsBzPVBKHHlN9cbMr5AqumU61YVozr1_pb-hZwNw7h8KEfIxlJZrLWrx-G0ikVuevovH0gGrlBg4B1W79V1hPSdmFGv2xni2Qgeu5nHDmLUQE12TYfgnqPsGaq_-aWVRMjMcvYpCFtkoMOn2n3GlvoWQwior7U0n1v0dBwE5K4RN1Ir5mUcv7JWQWyS3jgT0eDbsJ3Z5N8RoD5OOn7HB_xFs98hIYhNj88j9VxP2EN1Su-smAfjUoBP5V3xeaHpfQfHx9ZwvmZixUXsLqzpP6HzGPO3NvjuR3Wj2lUY4xs_MsSgZvleuriG2O3cy7MX9dn0lpVEUSXfm6c5E6wCcfRe1IEfeF8q5NctEMzdnXj5Hvk8r6sBpIeVxrMGJMVHwawaNOlLdYAF0V2n0WFfaFchOEREKA6pdyNePY-wiNc_XZpfjFr6mMu4mnUlkpBsQ-n_Bj3VjAUPyoMh2Lb64i94ZmH0dN1HIonss_TmWXAJg2osAgGPVs54c4hZ_v4Kd5CRtwv5nfaJpOJKu3e30DknkFDOFe5jgdW-8wdfHRfrNF2XFfQI9yFmUAz-P3o-3lfQwOtYaKcKToVz37U-lJQNWIi8JWpn7ATVHWiszm9FVx8RFxZfB7hAcKNsWmoWjo8Qd4CrMLuXoae9Q-JHSQl6HzgAuOD1uOEQnspuNj1ooYnVxLbt7bOal5DxpHWx4_smfumfZnkuG7M827utZAaTZUXRyoJhGOb5P8rTCGA2O3H6UX5_O8rQk3Gzwt0RGdkmN-2Ja1qapFP553_wIXLme8xPAhklyqf9oPCUr0UQfhIZvdpjaDPjw0c9LfvjncQBapMHAeYPZXWSOfyDBm_d-1meKWsbmrTVg7dM6v21ee1PL9Jq0YjOr8XcPne7ZoAR62IIUAjvPlGjHZ856DJixga022FqUZsnD2e1PoGXPzTOzUWLk1xXaP0kvEpxEbwWmx5Rry6fT1O3-qdR7n6y_lVwITmrymaAV_iL3J00w1TGwKZl07AwarIzRfHLMCn_nyuEMHxxUyYpZxx75TMx_SJXj7PVF-sxKIr8cSG9aKzOWuTKSMOIRUO6HtYv1yw3oXeMiES9c5cNnC53w2DTgarFkHLvpDFlEhHYFS_6f-IFwHEoGwrfq2uPyzeqxahgaKx8YTdrW_D4dxsX8A-nJqPzTHLjvqmT_6vjD2CdrQzlsN1qC3M2MdQ_mYaAvbY1eGOe8eYavdyng9YL4xC7RLr-6_NQed6d3t2_kE6cbtGyF3hgMzGoHVU1etDx8oiTN9qbUXY4ZjlIsea5cVrk19f9mf5kL4St7gVPl9daXPU3OFibkhox3EMV6foxyIdH8Q5DFnud6ujPxHIFuwld_lqFQzaCrR5NoAaYiYoCb4RzCIaqCXUxw0v3XBGagakNjNpZYr1FrqTdged0Ht7stHYUx9WUlJFziRF6ywm8F45tYoH9Q1vlBd-balpSbB9g8YkZZGd4Vxz8Ussq7ECGbs8TCwn7yc1UPe88kHxvOPB9uRkvhgnzuskDzsFtyD6TKeCNDPV7lJsnlD1cPTUB25YJxRckKvhXgTi7GvY9tghk1T-3qeU-4rfKAhzBP5V-WS314QWaRS_rNkVSV7zo4ZaL79LxDoX4rIVdjYijmxwGTgldvilon00aToynP7TZiDYF42irGw-F43FCfypKdXngVwkLFhuG1wF0iIB8A8dBduDCYBsHUt9fFkDmzOnPLG-DyGAiO_aHBKQTh1MoE-Ouey-x-gmA41VRZ0iVHkNx2RfqYJZqbt8_45QNwmpAp-93fhiGV3fD815gWRwy4OVmR6SBi2CqsmaOlOCcegOXEWZBJODuFOd2VEiU8cwMvxFoIu_7C8SdHX3XgeT1XmgyHyajaaWYV-f8LMBOTM-Ofj-C8vo1FGSCDNyJ-7zwVslJ1LRI5aEbkH_Mg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">encrypted data sharing</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="PH9h6q0x30S6kMNuSjw7CyWPoZuizLKSwHxFcNrPmiGx8nEhryEkCrys2UQm_sGH0B8MyAiRbXZTN3j0Utuvoen0z3C23m0F1wwrZVfl6Sxqcy_XiJDGeNEYH1Ar7b3tXR4crZh7SbbitnSEhG4NxWGbVWy2XEr-xGnwhWMEr8B48adPI6nKEhtOKAqj6iTCtOaJAp7HGPY_GiT_o1bS9qBoA1L8XtFWPb3xksUCOopqykpJWdOgl2ozHBPL4V1-WVNx-k2a4jicVNhuLgMw-cOu5NgZLvMWZ2KtjQcxgAbUkvU1TJLK_85UioOZohj2vDv0RV2rozVdHXjZUA151-9EZtCGHzoPpz5OE_Rl4CkZsO9VCDnttJWG-iCt6-7y1xFl7mR0-h3EIGyWfQW_slw9eiQqRym-bRVjen2uWr2flx3Qh9OmgQ-8IMrVBdUxuqrWYTG16xyy1Dfw_qmazTgo9yZimgzOaDM_aLgMsjL7hqLITnoxdPG-89x6OKV0vZQoKybhHK4CQ2_qvxAElSDTCxBKHO7VRP-klUhLA8dKZhiJnS8lMxnLDQx2XMSULQFBiX_cuQ3hMPLRPE6Ja4lhGwEd2eiehjbo84TAxuThnXFTXiX9WQLvZQazM0xqNiRnYsSA9fw_2o9UgCiNszCgscJEWxLHaUobw-ezv4tpDQL19MIP9G0pixSq5E7r7ycuQuDv2FR7S_CAg6EqNO9QyynEcDlhTL2gZEyWIK4Q913KfeVZ2vtAnGRRlR8gnOjYpfEr1llqUBxD32KryV0649tUqjFFESo5Ys7BGG6J8GbbFKL8dLnml_U1OcKjZ__jNtu3dI2aAkukgltd227nBoZl5zP3CPMbWxl0AXbPjpnMTlPkgL0-G0aRNSMTlaBGaE1965iPVbUtN52wGRfO4vrdViC-ieZpMi64m07JpzNChp__1OEha30dfukIv175Mz4NLa8Kz9r0t_eKxfwns1TEf67SId5kW1XVaYT0NIgfYFR1GgC6r9A-jnIH3Iky72qKr4vsXFtlafA11hCSeFcEnLCGc96GRM_VqMsaHL4wyvfD8HDvzmf9Fj8DkAXj2eCQXrHa6_L5tC7yFJOwkoU4-PROpM_JFo5OLOPF9wLjokEDKoFb2eXT_JGwERBmMOA7B6l4csTEMWzpyK80nCtjnn4Xau8-WALrkVr13uZFw26w4tQNPpNVmkJcrqvU7bVYGmJuYTWFQKj3tcYj3T45yQOLS1t36dJLJ-8ZhW3fMliwD_e2mbCzBGZMZvfuZQRrJBEPHhM_U7Juq06Q27-gWm4rVaTjwVNPtVZMYhI1LfATBRhH-oLZk6aFjc_WXLLYIZefqykkrI5P-j6tXcPqYTIdjW3_Fy2CKMpbfW17BAMGX5ZpawIATL1f2nFlSC0i7naIUQU3XkwOlGUxtxeob3nCNvkTARXtt6MY5ozXTa1sGPSQ6xMMT0AazBzRvrJepxmdubiw-A1nWsdGYqfr4CfGzwmywLWo0y0b4RxQI4MPxqO_OriyMfl8XJ_E7_dra0Inb8HBHBS8fW3kuhPETo0uDp3hVQVjn_wkKWcG2ynz04CJnsGVbzxIbLmQD56v_vNohM7TDFwmsLUpfAmf0XkbRRsKEbJ19Hcgr6VbmLsk0BpTjRIAN0_CcjqUp7EwJzBXnFXTkNCjmgMI0qJjkJAa8Gd6Boyxxe3b8137_6YBRVEJJEfjHMvpUraGQr6L438_H-VFvVd-ioW5d5d6AGU08dCOKF_G202ipcqk4bJpQZ5KmFAYfGD3lf5xhODv_Gl3sA06TApMkNHatis97DioAjL81jZ-nWkuTh3cCgkxZ_am-YjB-GlmnnwpyH0NwubjTxhFXsqxz29IwArw5ZCxHHpHLZa3yl3_E_g7-ay-3KR_XPusLMAIQrox-ytpj9c3CPrCFqoVhkYuozslqL-KJm_nP6ATlg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">virtual private network cost</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="LG5L-oMH3BwIG82M0GfnUX7oa5LRuegKKThrUzSj6iwrDMw1ncuhQcembfTB6hblc6IIAtBKgKQFIafM0fF0j-xgqeXijlDVnsJgh0-eiJ4-kDTNCOBBFTxeIq7lqKfKGe8w1kIF_sX-HlCE72GwHXVo2OE1w2VdSgkSR9eM_uXh8w1kILVNtYwPzH9gpYkBNI0ETsrGqQ-6YtBT9zlhrpWhVrBwRwVUz16dtGr0_YMIwNfF9Huwu2DFUrKBozagm4j2G18hFRPLFVrUmn620PZ-aaCoPJ8WbFhY0I5lIjbo-ou9U56LXVx3Y1iWRBkdn2DgZShYsLSJetEfgqdqGk79C_DhhzM1WkHY6tM66L8uX52ZIZBZBb5ryjXYaUQ38lhyyxksdIwEasmZNjg7p0bTBBAN2x-I8j8-mFhO0WYq_VKJhxKeO1o88qde4H5ypEUx_RsxKyqLtB91tomkotpAfXaAT8XGpXI8y2g7gk-11JtOtM6tjfuNFjW9il1J8wzZah17LM5SEBycCiCHS2IIDX9cUVnapupMcYjv_2K0_gqKS-HhLA9zGCsTqFCjNXhnuwaLml1TczV9gT8rWxluARqECnhs-dh_EitEx6nkArsClEhL_-ldXIIQIUzxJJ6DCDH-tBRnHB8FDOTwheoPn-gNVxR-H6MFtRa_pOLeezhtMSndMkn52f4xBv4Iy1hlLA7wBi34wtBwPKKJW6FgPNbxoNVmHRZTL6qya20nOsLbVDRhqg-Kv6KeceAr_FO3E0JkE_k4rYXznAE4_n_dIX_CgYHVrwdwBsWZWpe-mBbH88FjlFpWMGqSHjqDD0TzrTNHzP1t-UpREYPbYLI9awoRPqJZETrJJhp8F_J-aJLSj3bNUj7Z103DGeP-oRMlVJVJwRNG8P7l9uIJG5tP2Ro2rE3dY5wnMhM0g7oEeLtkQtwAarWJ8C39duPRKxP_14vjR_YAoybgkREyO5VRqKzyw2YPv8SLOIhl4u-MmglpM9zTXNsUKMWkuSkKgPu-5r6fTeK4s---UlmHCZqyik9eQBwxXQBbEeoPcKoEePQayz8eMZhJW7UbnRMCA5937wyiS-GlO34HJt3mMfCJjXFz9CwL-h4hwZyLulvL8UOB6_NQg3Cq1rtDfO8OgPq1UBOtrhKEqdwZcI9tYn1uFj9O5Wz3bfN0EvNlULKWK4Azgrg-4fLJ-azrTeOZ0ZPKDBz_6H3ekCZtBIy3zureA7HRYKitSiqI5JiMt18HqSYI80RkfVzedACnFZ-blegglwpcxBpieunShiGCKbhZLU_FvBW-4LTfd8BkZrgz8HRpGJMCLpsQmBDQ3A5vUrn8o9ggii_AdLOyrX-hvvMuiNjCZJPrdd2zd4hOEjZW2yErBu_OHm44GDVBC4XP82E59bGTkj-uX18vIgNfgRFdrds95qDxHF5MBIcdOkQdA1eP-2kpqlXEGKXRTAS9-9966vg5ZdZgKCEyET888mmJxfge5ty0P1knQTXYCCsozMEo_7XS0uMnN9_uUdjPQHANP9h_z74QM1rBtaN937CITq3UFxvs3aeg88HxAAxgq2v5otzle3HjZ86JoF8tCKLwWfreS88POro2JECEKVo_NH951G9gmzqwCSB3texd8kk5RwxMDfsCW7JBQra7A9nLu81qJrrrcmAcsbhnz-gkEuiA6uFQK7PQi-2WqaKQ83xq-5S2P819ybdzKBlaKSBquAprxkashPq-UnAxySLw2Xe02dK_0sXnald_A49LUhDPVjjK_ZE4U2QtGLgtlmugM4NNYuwixut7VvLiHECso2XViye2Tx4S5_nMr8M19d5W8WXiIC1UfYdu4M0Fq1z5oLXhE3GKUup9rIWJ2mwXQiAyr3i8WsYfEovTSZfxibXLE1gaGJVWSpjYsL4v51fTs2dgtwEbiM1X2e4OA6xBsg" class="dir-link" target="_blank">
                                    <div class="dir-content">
                                        <span class="kw-text">online backup services</span>
                                    </div>
                                    <div class="dir-icon">
                                        <svg viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                    </div>
                                </a>
                            </li>
                            <li class="list-item">
                                <a href="/kw-click" data-ct="6BbCRkfwWxuQA74rWepSn-g-dRXBG8MtxuyANSBQap7Cu27weGwI3D4ETj6rxffGlV0hjQWnPyacdmQv5fSl7zZqeoEglBfZ3AgAxYFHKXECSb2ERvnp9kIOaK-qu8kw8tx4iL4Pyf61tlhN-7nf6YTan9qqwTpxDdYaVFOE5UeHnwBTPwupEn8hRrvogf1OIiEmje2d-JR4UBrZv3EUEjRHGdHo3JXqydIjtNtCdb4dtHPxMoZLhU-xGOKLFGLkd0NoO2jhhhe0-XmsAmgKt2tGgQAYZoGXjzeALRE3gCWlC4r65M5QYf01RGN_uv8eoz4S5-ERulYuGcZCPLzpEKIUGaqP8oGqt8g6sZHt22RGmVGyAinmd7EldX-1_VPPqrIdzyDrnlQyf0nYaEu_QHhcCIVyr_sqb70CJtBU7aYIqKcOnVmmH002fXcrR0f7zud0LGk2-2qrHCujMfJYKhlfQprJYyR1-CjrZKvsmZYKniDSUdh95FbW_rgINgE6VaEV3iSimBOxOnpoOqBoO5_m_9m4vxjTVTr79o-5wD2RKLTHJqWPDJwH51zg8dU3mVuc65JJUfaYLR7zfFFNoYt0hScJhZO6leSIf7goITVPpnHX_-Zx7n3nVHaXfx3vn87-mc_-ghZdWtiLUKLVILQERDmDHwfY4CFwnZP-JEFyi0nRxAfR70u2kqSbhroRDUsUPTOmUFrjHA2pQcfra4WftmRm-4S4kscTyOrxe3YXjGf3di5Nnby3UO04BSMm8c7N9zu1b-R_ftaeZhbKmfJ38Ur-GURoGgWruJBoKQnamaxd6qF9RNTUCrcAE1aHRogynKmaEowsB_ZU3jUJXnrrBFWN3C6bI4HbAsd2Zv9wjNNehwbgOYE9wVzG94mnA4SSz61rW6adXz3i6VfQMq04eUv4xWI6_nBbXy7yA3ZGUgLArLaadYsAHQYYc34v2u1oGEtLLRtbEBvF3QSsvmBTsodFQqfTjYxf1q1UbPpCc3xtYO9EfQkFS6ppZioPguiPebTdHZot4G36uwqqRxm6QA9OJ3p_iYgXA8PHQc00C7jo_Pu2xluqzTavb73-0RMsYFvB2YCYefL2fd3ql-sZo6PcBRL3WBGRygo_v4SFCPN0d1k6vDiQ1XVK4beTY4Dw2s-lC49277U34yufSF2R9yyZt9Rth9i9QBsYx9fL5rp_rspTrr3cu-EKN-LQxGiERRCSg-QPX5E2qM_pvLnWhi-zAdwYgdaSL_1RMaN99VNll7BJ-5g4VEXva9-fjs3ANHTjuqBQ15aCpg-Dj6fGDXAfFfjMBDTPLUBLl9-Z-Mw1hegtuhX32ROHEBRYD9AsAu2dCF3ahc4cAmoxvcQfpS-WTTX_h_tNxDxa8kFEwrkmqsYtUnPbACMwpWtxDu5WEF1j9mrh07YWts-cbRf_fpGRyIYxrTTpbf70_JpTQcaincgmmBT04PYoD5FA9-jtf-FLF8o4kTg4GV2iw75DedRZztT8HjiUIRYJ1qaEhdQdKNXy_Zglg9gsfYPjobGuqhXVfgyOQC8JSm-Li5ASgCidrh4SwbIJby4r6bQqLLDejKCLfNPFXfhMDP5AVXR4aS-spDbC1OIThxBfnmyusRJFRlyAwYY_mzR3z87Z0G2-7E6u6A3Tg6bdG-_NxEzLSEsBa-QDIaK71PMLvu18iELr_-nyFSwYhWGVhhp8MGWzgmTAbOt9lWSJAFClDBP42QWYuRc7lwwYYiJtvhL2ZIgeUSaIc5ac15K6ttbEiX8cMGdN1-f-tW-pVE89SlFmDL-9Nl93aFJ08Jw7FU3RfmxQpL25bzr-NsftRuMdAYVO7HXIIkmerXOBd-1NvnCC6yicZviXxQyacsKCdXhC4JgQ8ILrTLlq_pKkpj1ROQsT0t3xs_zQdiGTt2plnPa0kb46Llybc0c1L7WDLNCGwKaDsSPKZSqkH-E" class="dir-link" target="_blank">
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
            sessionId: "f216d259-4968-4084-bdb4-e2b1cb57e212",
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
            var props = {"trafficSrc":"intango_park_dm_1638_1","ysid":"4SA5DU1LAFSNF"} || {};
            
    
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
