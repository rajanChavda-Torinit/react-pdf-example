/*!
 * PSPDFKit for Web 2024.5.2 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[3610],{58258:(t,e,s)=>{s.r(e),s.d(e,{corePool:()=>c.m,customFontsPromiseRef:()=>w,default:()=>y,loadModule:()=>b,normalizeCoreOptions:()=>c.oc,validateStandaloneConfiguration:()=>c.MO});var a=s(35369),i=s(15359),n=s(75472),o=s(72110),r=s(68944),c=s(53392),l=s(67009),u=s(20063),d=s(12705),h=s(33383),m=s(95431),p=s(33907),f=s(80567);let g;class y extends c.ZP{constructor(t){const e=t.baseUrl||(0,r.SV)(window.document),s=t.baseCoreUrl||e,a=t.baseProcessorEngineUrl||e,n={...t,baseUrl:e,baseCoreUrl:s,baseProcessorEngineUrl:a};if("string"!=typeof n.baseUrl)throw new i.p2("`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`");if("string"!=typeof n.document&&!(n.document instanceof ArrayBuffer))throw new i.p2("document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`");if(g&&g!==n.licenseKey)throw new i.p2("Trying to re-use instance with a different licenseKey.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.");if("string"==typeof n.licenseKey&&n.licenseKey.startsWith("TRIAL-"))throw new i.p2("You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.");super(n),this.destroyed=!1}async load(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=.2;t.progressCallback&&t.progressCallback("loading",e),this._isPDFJavaScriptEnabled=t.isPDFJavaScriptEnabled;const s=(0,m.D4)(this._state.baseUrl,this._state.document,this._state.productId,(()=>{e+=.3,t.progressCallback&&t.progressCallback("loading",e)})),n=await b(this.client,this._state).finally((()=>{e+=.3,t.progressCallback&&t.progressCallback("loading",e)}));(0,i.kG)(n);const{features:r,signatureFeatureAvailability:c}=n;if(this._state.productId===h.x.SharePoint&&"string"==typeof this._state.document&&Array.isArray(n.afu)){const t=new URL(this._state.document,this._state.baseUrl);if(!n.afu.some((e=>t.hostname.match(e))))throw new i.p2(`The document origin ${t.hostname} is not authorized.`)}const f=c===u.H.ELECTRONIC_SIGNATURES&&(0,d.Vz)(r)&&this._state.forceLegacySignaturesFeature?u.H.LEGACY_SIGNATURES:c;this._state=this._state.set("features",(0,a.aV)(r)).set("signatureFeatureAvailability",f),g=this._state.licenseKey;const y=await s;let w,_=y.slice(0);try{this.destroyed?(_=null,w=await new Promise((()=>{}))):(w=await this.client.openDocument(y,t.password,"number"==typeof t.initialPageIndex?t.initialPageIndex:0),_=null)}catch(e){if("INVALID_PASSWORD"===e.message&&this._state.document instanceof ArrayBuffer&&(this._state=this._state.set("document",e.callArgs[0])),"IMAGE_DOCUMENTS_NOT_LICENSED"===e.message&&(e.message="The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for your product."),!(e instanceof i.p2&&e.message.includes("File not in PDF format or corrupted.")&&this._state.productId!==h.x.Salesforce))throw e;{(0,i.kG)(_);let s,a=(0,p.xE)();try{a||(a=(0,p.Un)({baseUrl:this._state.baseProcessorEngineUrl,mainThreadOrigin:this._state.appName||(0,o.$u)()||window.location.origin,licenseKey:this._state.licenseKey||void 0,customFonts:this._state.customFonts||void 0,dynamicFonts:this._state.dynamicFonts||void 0,fontSubstitutions:this._state.fontSubstitutions,processorEngine:this._state.processorEngine}),(0,p.Nt)(a)),s=await a,(0,i.kG)(s);const e=await s.toPdf(_);w=await this.client.openDocument(e,t.password,"number"==typeof t.initialPageIndex?t.initialPageIndex:0)}catch(t){throw"INVALID_PASSWORD"===t.message&&this._state.document instanceof ArrayBuffer&&(this._state=this._state.set("document",e.callArgs[0])),"IMAGE_DOCUMENTS_NOT_LICENSED"===t.message&&(t.message="The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for your product."),t}finally{_=null,s?.destroy(),(0,p.Nt)(null)}}}if(this._isPDFJavaScriptEnabled&&(this._initialChanges=await this.client.enablePDFJavaScriptSupport()),this._XFDF&&await this.client.importXFDF(this._XFDF.source,this._XFDF.keepCurrentAnnotations,this._XFDF.ignorePageRotation),this._instantJSON&&this._instantJSON.pdfId&&w.ID.permanent){const t=this._instantJSON.pdfId,e=w.ID;if(t.permanent!==e.permanent)throw new i.p2("Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");if(t.changing!==e.changing)throw new i.p2("Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/")}if(this._trustedCAsCallback)try{const t=await this._trustedCAsCallback();if(!Array.isArray(t))throw new i.p2("Certificates response must be an array");if(t.some((t=>!(t instanceof ArrayBuffer)&&"string"!=typeof t)))throw new i.p2("All certificates must be passed as ArrayBuffer (DER) or string (PEM)");await this.client.loadCertificates(t.map(l.uF))}catch(t){throw new i.p2(`Could not retrieve certificates for digital signatures validation: ${t.message}.`)}return this._state=this._state.set("documentResponse",w),{features:this._state.features,signatureFeatureAvailability:this._state.signatureFeatureAvailability,hasPassword:!!t.password,allowedTileScales:"all",evaluation:n.evaluation}}destroy(){this.destroyed=!0,super.destroy()}getCustomFontsPromise(){return w}}const w={current:void 0};async function b(t,e){w.current=w.current||(e.customFonts?(0,f.x6)(e.customFonts):void 0);const s=(0,r.J8)(e.appName);return t.loadNativeModule(e.baseCoreUrl,{mainThreadOrigin:s,disableWebAssemblyStreaming:e.disableWebAssemblyStreaming,enableAutomaticLinkExtraction:e.enableAutomaticLinkExtraction,overrideMemoryLimit:e.overrideMemoryLimit,workerSpawnerFn:()=>(0,n.$u)(e.inlineWorkers)}).then((async()=>t.load(e.baseCoreUrl,e.licenseKey,{mainThreadOrigin:s,...w.current?{customFonts:await w.current}:null,dynamicFonts:e.dynamicFonts,productId:e.productId})))}}}]);