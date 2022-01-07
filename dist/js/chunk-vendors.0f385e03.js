(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),s=n("c65b"),o=n("e330"),a=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=i.Error,h=o(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return h(this,e);var n=s(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?s(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(t){return o(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):s(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},"07d6":function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Xs})),n.d(t,"b",(function(){return Js})),n.d(t,"c",(function(){return Vo})),n.d(t,"d",(function(){return Bo})),n.d(t,"e",(function(){return eo})),n.d(t,"f",(function(){return zo})),n.d(t,"g",(function(){return Lo})),n.d(t,"h",(function(){return Po})),n.d(t,"i",(function(){return Ho}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(m);h.debug(`Firestore (${l}): ${e}`,...n)}}function p(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(m);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(m);h.warn(`Firestore (${l}): ${e}`,...n)}}function m(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function y(e,t){e||v()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class I{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(y("string"==typeof t.accessToken),new E(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return y(null===e||"string"==typeof e),new u(e)}}class O{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class S{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new O(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable(()=>(e=>(null!=e.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message),t(e.token)))(n))};const n=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(y("string"==typeof e.token),new C(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.I=-1;class N{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function P(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return D.fromMillis(Date.now())}static fromDate(e){return D.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new D(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new D(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function U(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends V{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new _(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends V{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new _(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new _(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return P(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new $(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new $(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");const W=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function G(e){if(y(!!e),"string"==typeof e){let t=0;const n=W.exec(e);if(y(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:K(e.seconds),nanos:K(e.nanos)}}function K(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function X(e){return"string"==typeof e?$.fromBase64String(e):$.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Y(e){const t=e.mapValue.fields.__previous_value__;return J(t)?Y(t):t}function Q(e){const t=G(e.mapValue.fields.__local_write_time__.timestampValue);return new D(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return null==e}function ee(e){return 0===e&&1/e==-1/0}function te(e){return"number"==typeof e&&Number.isInteger(e)&&!ee(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(q.fromString(e))}static fromName(e){return new ne(q.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new q(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?J(e)?4:10:v()}function ie(e,t){const n=re(e);if(n!==re(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Q(e).isEqual(Q(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=G(e.timestampValue),r=G(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return X(e.bytesValue).isEqual(X(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return K(e.geoPointValue.latitude)===K(t.geoPointValue.latitude)&&K(e.geoPointValue.longitude)===K(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return K(e.integerValue)===K(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=K(e.doubleValue),r=K(t.doubleValue);return n===r?ee(n)===ee(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return P(e.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ie(n[i],r[i])))return!1;return!0}(e,t);default:return v()}}function se(e,t){return void 0!==(e.values||[]).find(e=>ie(e,t))}function oe(e,t){const n=re(e),r=re(t);if(n!==r)return j(n,r);switch(n){case 0:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=K(e.integerValue||e.doubleValue),r=K(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ae(e.timestampValue,t.timestampValue);case 4:return ae(Q(e),Q(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=X(e),r=X(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=j(n[i],r[i]);if(0!==e)return e}return j(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(K(e.latitude),K(t.latitude));return 0!==n?n:j(K(e.longitude),K(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=oe(n[i],r[i]);if(e)return e}return j(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=j(r[o],s[o]);if(0!==e)return e;const t=oe(n[r[o]],i[s[o]]);if(0!==t)return t}return j(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function ae(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=G(e),r=G(t),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function ce(e){return ue(e)}function ue(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=G(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?X(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ne.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ue(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ue(e.fields[i])}`;return n+"}"}(e.mapValue):v();var t,n}function le(e){return!!e&&"integerValue"in e}function he(e){return!!e&&"arrayValue"in e}function de(e){return!!e&&"nullValue"in e}function fe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pe(e){return!!e&&"mapValue"in e}function ge(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return U(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ge(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ge(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.value=e}static empty(){return new me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ge(t)}setAll(e){let t=H.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ge(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());pe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ie(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];pe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){U(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new me(ge(this.value))}}function ve(e){const t=[];return U(e.fields,(e,n)=>{const r=new H([e]);if(pe(n)){const e=ve(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new z(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ye{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ye(e,0,L.min(),me.empty(),0)}static newFoundDocument(e,t,n){return new ye(e,1,t,n,0)}static newNoDocument(e,t){return new ye(e,2,t,me.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,me.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ye(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function we(e,t=null,n=[],r=[],i=null,s=null,o=null){return new be(e,t,n,r,i,s,o)}function _e(e){const t=b(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Oe(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Z(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Le(t.startAt)),t.endAt&&(e+="|ub:",e+=Le(t.endAt)),t.R=e}return t.R}function Te(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ce(t.value)}`;var t}).join(", ")}]`),Z(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Le(e.startAt)),e.endAt&&(t+=", endAt: "+Le(e.endAt)),`Target(${t})`}function Ee(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ue(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ie(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ve(e.startAt,t.startAt)&&Ve(e.endAt,t.endAt)}function ke(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ie extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Se(e,t,n):"array-contains"===t?new Re(e,n):"in"===t?new Ne(e,n):"not-in"===t?new je(e,n):"array-contains-any"===t?new Pe(e,n):new Ie(e,t,n)}static P(e,t,n){return"in"===t?new Ce(e,n):new xe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(oe(t,this.value)):null!==t&&re(this.value)===re(t)&&this.v(oe(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Oe(e){return e.field.canonicalString()+e.op.toString()+ce(e.value)}class Se extends Ie{constructor(e,t,n){super(e,t,n),this.key=ne.fromName(n.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.v(t)}}class Ce extends Ie{constructor(e,t){super(e,"in",t),this.keys=Ae("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xe extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=Ae("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ae(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ne.fromName(e.referenceValue))}class Re extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return he(t)&&se(t.arrayValue,this.value)}}class Ne extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&se(this.value.arrayValue,t)}}class je extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!se(this.value.arrayValue,t)}}class Pe extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!he(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>se(this.value.arrayValue,e))}}class De{constructor(e,t){this.position=e,this.before=t}}function Le(e){return`${e.before?"b":"a"}:${e.position.map(e=>ce(e)).join(",")}`}class Me{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ue(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Fe(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ne.comparator(ne.fromName(o.referenceValue),n.key):oe(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Ve(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ie(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Be(e,t,n,r,i,s,o,a){return new qe(e,t,n,r,i,s,o,a)}function He(e){return new qe(e)}function ze(e){return!Z(e.limit)&&"F"===e.limitType}function $e(e){return!Z(e.limit)&&"L"===e.limitType}function We(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ge(e){for(const t of e.filters)if(t.V())return t.field;return null}function Ke(e){return null!==e.collectionGroup}function Xe(e){const t=b(e);if(null===t.S){t.S=[];const e=Ge(t),n=We(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Me(e)),t.S.push(new Me(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Me(H.keyField(),e))}}}return t.S}function Je(e){const t=b(e);if(!t.D)if("F"===t.limitType)t.D=we(t.path,t.collectionGroup,Xe(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Xe(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Me(i.field,t))}const n=t.endAt?new De(t.endAt.position,!t.endAt.before):null,r=t.startAt?new De(t.startAt.position,!t.startAt.before):null;t.D=we(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Ye(e,t,n){return new qe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qe(e,t){return Ee(Je(e),Je(t))&&e.limitType===t.limitType}function Ze(e){return`${_e(Je(e))}|lt:${e.limitType}`}function et(e){return`Query(target=${Te(Je(e))}; limitType=${e.limitType})`}function tt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ne.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Fe(e.startAt,Xe(e),t))&&(!e.endAt||!Fe(e.endAt,Xe(e),t))}(e,t)}function nt(e){return(t,n)=>{let r=!1;for(const i of Xe(e)){const e=rt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function rt(e,t,n){const r=e.field.isKeyField()?ne.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?oe(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ee(t)?"-0":t}}function st(e){return{integerValue:""+e}}function ot(e,t){return te(t)?st(t):it(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this._=void 0}}function ct(e,t,n){return e instanceof ht?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof dt?ft(e,t):e instanceof pt?gt(e,t):function(e,t){const n=lt(e,t),r=vt(n)+vt(e.N);return le(n)&&le(e.N)?st(r):it(e.k,r)}(e,t)}function ut(e,t,n){return e instanceof dt?ft(e,t):e instanceof pt?gt(e,t):n}function lt(e,t){return e instanceof mt?le(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ht extends at{}class dt extends at{constructor(e){super(),this.elements=e}}function ft(e,t){const n=yt(t);for(const r of e.elements)n.some(e=>ie(e,r))||n.push(r);return{arrayValue:{values:n}}}class pt extends at{constructor(e){super(),this.elements=e}}function gt(e,t){let n=yt(t);for(const r of e.elements)n=n.filter(e=>!ie(e,r));return{arrayValue:{values:n}}}class mt extends at{constructor(e,t){super(),this.k=e,this.N=t}}function vt(e){return K(e.integerValue||e.doubleValue)}function yt(e){return he(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof dt&&t instanceof dt||e instanceof pt&&t instanceof pt?P(e.elements,t.elements,ie):e instanceof mt&&t instanceof mt?ie(e.N,t.N):e instanceof ht&&t instanceof ht}(e.transform,t.transform)}class wt{constructor(e,t){this.version=e,this.transformResults=t}}class _t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Et{}function kt(e,t,n){e instanceof xt?function(e,t,n){const r=e.value.clone(),i=Nt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof At?function(e,t,n){if(!Tt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Nt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Rt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function It(e,t,n){e instanceof xt?function(e,t,n){if(!Tt(e.precondition,t))return;const r=e.value.clone(),i=jt(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Ct(t),r).setHasLocalMutations()}(e,t,n):e instanceof At?function(e,t,n){if(!Tt(e.precondition,t))return;const r=jt(e.fieldTransforms,n,t),i=t.data;i.setAll(Rt(e)),i.setAll(r),t.convertToFoundDocument(Ct(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Tt(e.precondition,t)&&t.convertToNoDocument(L.min())}(e,t)}function Ot(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=lt(r.transform,e||null);null!=i&&(null==n&&(n=me.empty()),n.set(r.field,i))}return n||null}function St(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&P(e,t,(e,t)=>bt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ct(e){return e.isFoundDocument()?e.version:L.min()}class xt extends Et{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class At extends Et{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Rt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Nt(e,t,n){const r=new Map;y(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ut(o,a,n[i]))}return r}function jt(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,ct(e,s,t))}return r}class Pt extends Et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Dt extends Et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Ut;function Ft(e){switch(e){default:return v();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Vt(e){if(void 0===e)return p("GRPC error has no .code"),w.UNKNOWN;switch(e){case Mt.OK:return w.OK;case Mt.CANCELLED:return w.CANCELLED;case Mt.UNKNOWN:return w.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return w.INTERNAL;case Mt.UNAVAILABLE:return w.UNAVAILABLE;case Mt.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Mt.NOT_FOUND:return w.NOT_FOUND;case Mt.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Mt.ABORTED:return w.ABORTED;case Mt.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Mt.DATA_LOSS:return w.DATA_LOSS;default:return v()}}(Ut=Mt||(Mt={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new qt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new qt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bt(this.root,e,this.comparator,!0)}}class Bt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:Ht.EMPTY,this.right=null!=i?i:Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ht.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1,Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(e){this.comparator=e,this.data=new qt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $t(this.data.getIterator())}getIteratorFrom(e){return new $t(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof zt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class $t{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new qt(ne.comparator);function Gt(){return Wt}const Kt=new qt(ne.comparator);function Xt(){return Kt}const Jt=new qt(ne.comparator);function Yt(){return Jt}const Qt=new zt(ne.comparator);function Zt(...e){let t=Qt;for(const n of e)t=t.add(n);return t}const en=new zt(j);function tn(){return en}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,rn.createSynthesizedTargetChangeForCurrentChange(e,t)),new nn(L.min(),n,tn(),Gt(),Zt())}}class rn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new rn($.EMPTY_BYTE_STRING,t,Zt(),Zt(),Zt())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class on{constructor(e,t){this.targetId=e,this.O=t}}class an{constructor(e,t,n=$.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class cn{constructor(){this.M=0,this.L=hn(),this.B=$.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Zt(),t=Zt(),n=Zt();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new rn(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=hn()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class un{constructor(e){this.et=e,this.nt=new Map,this.st=Gt(),this.it=ln(),this.rt=new zt(j)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach((e,n)=>{this.lt(n)&&t(n)})}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(ke(e))if(0===n){const n=new ne(e.path);this.ct(t,n,ye.newNoDocument(n,L.min()))}else y(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&ke(i.target)){const t=new ne(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,ye.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}});let n=Zt();this.it.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))});const r=new nn(e,t,this.rt,this.st,n);return this.st=Gt(),this.it=ln(),this.rt=new zt(j),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new cn,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new zt(j),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new cn),this.et.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function ln(){return new qt(ne.comparator)}function hn(){return new qt(ne.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),fn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class pn{constructor(e,t){this.databaseId=e,this.C=t}}function gn(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mn(e,t){return e.C?t.toBase64():t.toUint8Array()}function vn(e,t){return gn(e,t.toTimestamp())}function yn(e){return y(!!e),L.fromTimestamp(function(e){const t=G(e);return new D(t.seconds,t.nanos)}(e))}function bn(e,t){return function(e){return new q(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function wn(e){const t=q.fromString(e);return y($n(t)),t}function _n(e,t){return bn(e.databaseId,t.path)}function Tn(e,t){const n=wn(t);if(n.get(1)!==e.databaseId.projectId)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ne(On(n))}function En(e,t){return bn(e.databaseId,t)}function kn(e){const t=wn(e);return 4===t.length?q.emptyPath():On(t)}function In(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function On(e){return y(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Sn(e,t,n){return{name:_n(e,t),fields:n.value.mapValue.fields}}function Cn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(y(void 0===t||"string"==typeof t),$.fromBase64String(t||"")):(y(void 0===t||t instanceof Uint8Array),$.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?w.UNKNOWN:Vt(e.code);return new _(t,e.message||"")}(o);n=new an(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tn(e,r.document.name),s=yn(r.document.updateTime),o=new me({mapValue:{fields:r.document.fields}}),a=ye.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new sn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Tn(e,r.document),s=r.readTime?yn(r.readTime):L.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Tn(e,r.document),s=r.removedTargetIds||[];n=new sn([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Lt(r),s=e.targetId;n=new on(s,i)}}return n}function xn(e,t){let n;if(t instanceof xt)n={update:Sn(e,t.key,t.value)};else if(t instanceof Pt)n={delete:_n(e,t.key)};else if(t instanceof At)n={update:Sn(e,t.key,t.data),updateMask:zn(t.fieldMask)};else{if(!(t instanceof Dt))return v();n={verify:_n(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ht)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof dt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof mt)return{fieldPath:t.field.canonicalString(),increment:n.N};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:vn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function An(e,t){return e&&e.length>0?(y(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?yn(e.updateTime):yn(t);return n.isEqual(L.min())&&(n=yn(t)),new wt(n,e.transformResults||[])}(e,t))):[]}function Rn(e,t){return{documents:[En(e,t.path)]}}function Nn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=En(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=En(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(fe(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NAN"}};if(de(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(fe(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NAN"}};if(de(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(e.field),op:Fn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Vn(e.field),direction:Un(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Z(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Ln(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Ln(t.endAt)),n}function jn(e){let t=kn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Dn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new Me(qn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Z(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Mn(n.startAt));let u=null;return n.endAt&&(u=Mn(n.endAt)),Be(t,i,o,s,a,"F",c,u)}function Pn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Dn(e){return e?void 0!==e.unaryFilter?[Hn(e)]:void 0!==e.fieldFilter?[Bn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Dn(e)).reduce((e,t)=>e.concat(t)):v():[]}function Ln(e){return{before:e.before,values:e.position}}function Mn(e){const t=!!e.before,n=e.values||[];return new De(n,t)}function Un(e){return dn[e]}function Fn(e){return fn[e]}function Vn(e){return{fieldPath:e.canonicalString()}}function qn(e){return H.fromServerFormat(e.fieldPath)}function Bn(e){return Ie.create(qn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}function Hn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=qn(e.unaryFilter.field);return Ie.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=qn(e.unaryFilter.field);return Ie.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qn(e.unaryFilter.field);return Ie.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qn(e.unaryFilter.field);return Ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function zn(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $n(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Kn(t)),t=Gn(e.get(n),t);return Kn(t)}function Gn(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Kn(e){return e+""}class Xn{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Xn.store="owner",Xn.key="owner";class Jn{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Jn.store="mutationQueues",Jn.keyPath="userId";class Yn{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Yn.store="mutations",Yn.keyPath="batchId",Yn.userMutationsIndex="userMutationsIndex",Yn.userMutationsKeyPath=["userId","batchId"];class Qn{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Wn(t)]}static key(e,t,n){return[e,Wn(t),n]}}Qn.store="documentMutations",Qn.PLACEHOLDER=new Qn;class Zn{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Zn.store="remoteDocuments",Zn.readTimeIndex="readTimeIndex",Zn.readTimeIndexPath="readTime",Zn.collectionReadTimeIndex="collectionReadTimeIndex",Zn.collectionReadTimeIndexPath=["parentPath","readTime"];class er{constructor(e){this.byteSize=e}}er.store="remoteDocumentGlobal",er.key="remoteDocumentGlobalKey";class tr{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class nr{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}nr.store="targetDocuments",nr.keyPath=["targetId","path"],nr.documentTargetsIndex="documentTargetsIndex",nr.documentTargetsKeyPath=["path","targetId"];class rr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}rr.key="targetGlobalKey",rr.store="targetGlobal";class ir{constructor(e,t){this.collectionId=e,this.parent=t}}ir.store="collectionParents",ir.keyPath=["collectionId","parent"];class sr{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}sr.store="clientMetadata",sr.keyPath="clientId";class or{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}or.store="bundles",or.keyPath="bundleId";class ar{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}ar.store="namedQueries",ar.keyPath="name";Jn.store,Yn.store,Qn.store,Zn.store,tr.store,Xn.store,rr.store,nr.store,sr.store,er.store,ir.store,or.store,ar.store;const cr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ur{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new lr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof lr?t:lr.resolve(t)}catch(e){return lr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):lr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):lr.reject(t)}static resolve(e){return new lr((t,n)=>{t(e)})}static reject(e){return new lr((t,n)=>{n(e)})}static waitFor(e){return new lr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=lr.resolve(!1);for(const n of e)t=t.next(e=>e?lr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&kt(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&It(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&It(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(L.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Zt())}isEqual(e){return this.batchId===e.batchId&&P(this.mutations,e.mutations,(e,t)=>St(e,t))&&P(this.baseMutations,e.baseMutations,(e,t)=>St(e,t))}}class fr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){y(e.mutations.length===n.length);let r=Yt();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new fr(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,n,r,i=L.min(),s=L.min(),o=$.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.Gt=e}}function mr(e){const t=jn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ye(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(){this.zt=new yr}addToCollectionParentIndex(e,t){return this.zt.add(t),lr.resolve()}getCollectionParents(e,t){return lr.resolve(this.zt.getEntries(t))}}class yr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new zt(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new zt(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new br(e,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br.DEFAULT_COLLECTION_PERCENTILE=10,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,br.DEFAULT=new br(41943040,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),br.DISABLED=new br(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new wr(0)}static re(){return new wr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _r(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==cr)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){U(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return F(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.changes=new Tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:L.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ye.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?lr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Pn(e,t,n))}Pn(e,t,n){return this.Je.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}vn(e,t){return this.Je.getEntries(e,t).next(t=>this.Vn(e,t).next(()=>t))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):Ke(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new ne(t)).next(e=>{let t=Xt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Dn(e,t,n){const r=t.collectionGroup;let i=Xt();return this.Jt.getCollectionParents(e,r).next(s=>lr.forEach(s,s=>{const o=function(e,t){return new qe(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(i=t,this.Nn(e,i,r).next(e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ye.newInvalidDocument(n),r=r.insert(n,i)),It(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((e,n)=>{tt(t,n)||(r=r.remove(e))}),r))}Nn(e,t,n){let r=Zt();for(const s of t)for(const e of s.mutations)e instanceof At&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(e,r).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Zt(),r=Zt();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ir(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(L.min())?this.Mn(e,t):this.On.vn(e,r).next(i=>{const o=this.Ln(t,i);return(ze(t)||$e(t))&&this.Bn(t.limitType,o,r,n)?this.Mn(e,t):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),et(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Ln(e,t){let n=new zt(nt(e));return t.forEach((t,r)=>{tt(e,r)&&(n=n.add(r))}),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",et(t)),this.On.getDocumentsMatchingQuery(e,t,L.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new qt(j),this.Kn=new Tr(e=>_e(e),Ee),this.jn=L.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new kr(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qn))}}function Cr(e,t,n,r){return new Sr(e,t,n,r)}async function xr(e,t){const n=b(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.An.getAllMutationBatches(e).next(o=>(s=o,r=n.persistence.getMutationQueue(t),i=new kr(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let o=Zt();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next(e=>({Gn:e,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function Ar(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=lr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);y(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))})}),o.next(()=>e.An.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}function Rr(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.He.getLastRemoteSnapshotVersion(e))}function Nr(e,t){const n=b(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next(()=>n.He.addMatchingKeys(e,t.addedDocuments,s)));const c=t.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,u),function(e,t,n){return y(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,t)&&o.push(n.He.updateTargetData(e,u))}});let a=Gt();if(t.documentUpdates.forEach((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(jr(e,s,t.documentUpdates,r,void 0).next(e=>{a=e})),!r.isEqual(L.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next(t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return lr.waitFor(o).next(()=>s.apply(e)).next(()=>n.Wn.Vn(e,a)).next(()=>a)}).then(e=>(n.qn=i,e))}function jr(e,t,n,r,i){let s=Zt();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=Gt();return n.forEach((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(L.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Pr(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t)))}function Dr(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.He.getTargetData(e,t).next(i=>i?(r=i,lr.resolve(r)):n.He.allocateTargetId(e).next(i=>(r=new pr(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e})}async function Lr(e,t,n){const r=b(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!hr(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Mr(e,t,n){const r=b(e);let i=L.min(),s=Zt();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=b(e),i=r.Kn.get(n);return void 0!==i?lr.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Je(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:L.min(),n?s:Zt())).next(e=>({documents:e,zn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return lr.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:yn(n.createTime)}),lr.resolve()}getNamedQuery(e,t){return lr.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:mr(e.bundledQuery),readTime:yn(e.readTime)}}(t)),lr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.ts=new zt(Vr.es),this.ns=new zt(Vr.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Vr(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.os(new Vr(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}us(e){const t=new ne(new q([])),n=new Vr(t,e),r=new Vr(t,e+1),i=[];return this.ns.forEachInRange([n,r],e=>{this.os(e),i.push(e.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new ne(new q([])),n=new Vr(t,e),r=new Vr(t,e+1);let i=Zt();return this.ns.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Vr(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Vr{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return ne.comparator(e.key,t.key)||j(e.fs,t.fs)}static ss(e,t){return j(e.fs,t.fs)||ne.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new zt(Vr.es)}checkEmpty(e){return lr.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new dr(i,t,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new Vr(o.key,i)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return lr.resolve(s)}lookupMutationBatch(e,t){return lr.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return lr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return lr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return lr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Vr(t,0),r=new Vr(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],e=>{const t=this._s(e.fs);i.push(t)}),lr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new zt(j);return t.forEach(e=>{const t=new Vr(e,0),r=new Vr(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],e=>{n=n.add(e.fs)})}),lr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ne.isDocumentKey(i)||(i=i.child(""));const s=new Vr(new ne(i),0);let o=new zt(j);return this.ws.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)},s),lr.resolve(this.ys(o))}ys(e){const t=[];return e.forEach(e=>{const n=this._s(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){y(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return lr.forEach(t.mutations,r=>{const i=new Vr(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=n})}ee(e){}containsKey(e,t){const n=new Vr(t,0),r=this.ws.firstAfterOrEqual(n);return lr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,lr.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new qt(ne.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return lr.resolve(n?n.document.clone():ye.newInvalidDocument(t))}getEntries(e,t){let n=Gt();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():ye.newInvalidDocument(e))}),lr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Gt();const i=new ne(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||tt(t,i)&&(r=r.insert(i.key,i.clone()))}return lr.resolve(r)}Es(e,t){return lr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Hr(this)}getSize(e){return lr.resolve(this.size)}}class Hr extends Er{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),lr.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.persistence=e,this.Is=new Tr(e=>_e(e),Ee),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.As=0,this.Rs=new Fr,this.targetCount=0,this.Ps=wr.ie()}forEachTarget(e,t){return this.Is.forEach((e,n)=>t(n)),lr.resolve()}getLastRemoteSnapshotVersion(e){return lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return lr.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),lr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),lr.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new wr(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,lr.resolve()}updateTargetData(e,t){return this.ce(t),lr.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,lr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),lr.waitFor(i).next(()=>r)}getTargetCount(e){return lr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return lr.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),lr.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),lr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),lr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return lr.resolve(n)}containsKey(e,t){return lr.resolve(this.Rs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.bs={},this.Be=new A(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new zr(this),this.Jt=new vr,this.Je=function(e,t){return new Br(e,t)}(this.Jt,e=>this.referenceDelegate.vs(e)),this.k=new gr(t),this.Ye=new Ur(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new qr(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new Wr(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(e=>this.referenceDelegate.Ss(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ds(e,t){return lr.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,t)))}}class Wr extends ur{constructor(e){super(),this.currentSequenceNumber=e}}class Gr{constructor(e){this.persistence=e,this.Cs=new Fr,this.Ns=null}static ks(e){return new Gr(e)}get xs(){if(this.Ns)return this.Ns;throw v()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),lr.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),lr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),lr.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lr.forEach(this.xs,n=>{const r=ne.fromPath(n);return this.$s(e,r).next(e=>{e||t.removeEntry(r)})}).next(()=>(this.Ns=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}vs(e){return 0}$s(e,t){return lr.or([()=>lr.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.activeTargetIds=tn()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xr{constructor(){this.pi=new Kr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Kr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);f("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then(e=>(f("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Ui(e,t){const n=Qr[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),s(new _(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(t)>=0?t:w.UNKNOWN}(e.status);s(new _(t,e.message))}else s(new _(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new _(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{f("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,t,n),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const p=new Zr({Vi:e=>{d?f("Connection","Not sending because WebChannel is closed:",e):(h||(f("Connection","Opening WebChannel transport."),l.open(),h=!0),f("Connection","WebChannel sending:",e),l.send(e))},Si:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Fi())}),m(l,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),p.Fi(new _(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];y(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){f("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Mt[e];if(void 0!==t)return Vt(t)}(e),n=i.message;void 0===t&&(t=w.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,p.Fi(new _(t,n)),l.close()}else f("Connection","WebChannel received:",n),p.Oi(n)}}),m(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){return new pn(e,!0)}class ri{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new ri(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.rr===t&&this.Ir(e,n)},t=>{e(()=>{const e=new _(w.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)})})}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(e=>{n(()=>this.Ar(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget(()=>this.rr===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class si extends ii{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=Cn(this.k,e),n=function(e){if(!("targetChange"in e))return L.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?L.min():t.readTime?yn(t.readTime):L.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=In(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=ke(r)?{documents:Rn(e,r)}:{query:Nn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=mn(e,t.resumeToken):t.snapshotVersion.compareTo(L.min())>0&&(n.readTime=gn(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=Pn(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=In(this.k),t.removeTarget=e,this.gr(t)}}class oi extends ii{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=An(e.writeResults,e.commitTime),n=yn(e.commitTime);return this.listener.Cr(n,t)}return y(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=In(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>xn(this.k,e))};this.gr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(w.UNKNOWN,e.toString())})}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(w.UNKNOWN,e.toString())})}terminate(){this.$r=!0}}class ci{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+e.toString()),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(t),this.Lr=!1):f("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(e=>{n.enqueueAndForget(async()=>{yi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.Gr.add(4),await hi(t),t.Jr.set("Unknown"),t.Gr.delete(4),await li(t)}(this))})}),this.Jr=new ci(n,r)}}async function li(e){if(yi(e))for(const t of e.zr)await t(!0)}async function hi(e){for(const t of e.zr)await t(!1)}function di(e,t){const n=b(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),vi(n)?mi(n):Di(n).lr()&&pi(n,t))}function fi(e,t){const n=b(e),r=Di(n);n.Wr.delete(t),r.lr()&&gi(n,t),0===n.Wr.size&&(r.lr()?r._r():yi(n)&&n.Jr.set("Unknown"))}function pi(e,t){e.Yr.X(t.targetId),Di(e).br(t)}function gi(e,t){e.Yr.X(t),Di(e).vr(t)}function mi(e){e.Yr=new un({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Di(e).start(),e.Jr.Br()}function vi(e){return yi(e)&&!Di(e).hr()&&e.Wr.size>0}function yi(e){return 0===b(e).Gr.size}function bi(e){e.Yr=void 0}async function wi(e){e.Wr.forEach((t,n)=>{pi(e,t)})}async function _i(e,t){bi(e),vi(e)?(e.Jr.Kr(t),mi(e)):e.Jr.set("Unknown")}async function Ti(e,t,n){if(e.Jr.set("Online"),t instanceof an&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ei(e,n)}else if(t instanceof sn?e.Yr.ot(t):t instanceof on?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(L.min()))try{const t=await Rr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),gi(e,t);const r=new pr(n.target,t,1,n.sequenceNumber);pi(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await Ei(e,t)}}async function Ei(e,t,n){if(!hr(t))throw t;e.Gr.add(1),await hi(e),e.Jr.set("Offline"),n||(n=()=>Rr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await li(e)})}function ki(e,t){return t().catch(n=>Ei(e,n,t))}async function Ii(e){const t=b(e),n=Li(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;Oi(t);)try{const e=await Pr(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,Si(t,e)}catch(e){await Ei(t,e)}Ci(t)&&xi(t)}function Oi(e){return yi(e)&&e.Qr.length<10}function Si(e,t){e.Qr.push(t);const n=Li(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Ci(e){return yi(e)&&!Li(e).hr()&&e.Qr.length>0}function xi(e){Li(e).start()}async function Ai(e){Li(e).kr()}async function Ri(e){const t=Li(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Ni(e,t,n){const r=e.Qr.shift(),i=fr.from(r,t,n);await ki(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ii(e)}async function ji(e,t){t&&Li(e).Sr&&await async function(e,t){if(n=t.code,Ft(n)&&n!==w.ABORTED){const n=e.Qr.shift();Li(e).wr(),await ki(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Ii(e)}var n}(e,t),Ci(e)&&xi(e)}async function Pi(e,t){const n=b(e);t?(n.Gr.delete(2),await li(n)):t||(n.Gr.add(2),await hi(n),n.Jr.set("Unknown"))}function Di(e){return e.Xr||(e.Xr=function(e,t,n){const r=b(e);return r.Fr(),new si(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Di:wi.bind(null,e),Ni:_i.bind(null,e),Pr:Ti.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),vi(e)?mi(e):e.Jr.set("Unknown")):(await e.Xr.stop(),bi(e))})),e.Xr}function Li(e){return e.Zr||(e.Zr=function(e,t,n){const r=b(e);return r.Fr(),new oi(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:Ai.bind(null,e),Ni:ji.bind(null,e),Nr:Ri.bind(null,e),Cr:Ni.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await Ii(e)):(await e.Zr.stop(),e.Qr.length>0&&(f("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mi{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Mi(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ui(e,t){if(p("AsyncQueue",`${t}: ${e}`),hr(e))return new _(w.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ne.comparator(t.key,n.key):(e,t)=>ne.comparator(e.key,t.key),this.keyedMap=Xt(),this.sortedSet=new qt(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fi))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fi;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.eo=new qt(ne.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):v():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal((t,n)=>{e.push(n)}),e}}class qi{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new qi(e,t,Fi.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qe(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.so=void 0,this.listeners=[]}}class Hi{constructor(){this.queries=new Tr(e=>Ze(e),Qe),this.onlineState="Unknown",this.io=new Set}}async function zi(e,t){const n=b(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bi),i)try{s.so=await n.onListen(r)}catch(e){const n=Ui(e,`Initialization of query '${et(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&Ki(n)}async function $i(e,t){const n=b(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Wi(e,t){const n=b(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(i)&&(r=!0);t.so=i}}r&&Ki(n)}function Gi(e,t,n){const r=b(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Ki(e){e.io.forEach(e=>{e.next()})}class Xi{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new qi(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.key=e}}class Yi{constructor(e){this.key=e}}class Qi{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Zt(),this.mutatedKeys=Zt(),this.Ao=nt(e),this.Ro=new Fi(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new Vi,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ze(this.query)&&r.size===this.query.limit?r.last():null,c=$e(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=tt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),ze(this.query)||$e(this.query))for(;s.size>this.query.limit;){const e=ze(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ao(e.doc,t.doc)),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new qi(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Vi,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(e=>this.To=this.To.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.To=this.To.delete(e)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Zt(),this.Ro.forEach(e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))});const t=[];return e.forEach(e=>{this.Io.has(e)||t.push(new Yi(e))}),this.Io.forEach(n=>{e.has(n)||t.push(new Ji(n))}),t}ko(e){this.To=e.zn,this.Io=Zt();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return qi.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Zi{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class es{constructor(e){this.key=e,this.$o=!1}}class ts{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new Tr(e=>Ze(e),Qe),this.Mo=new Map,this.Lo=new Set,this.Bo=new qt(ne.comparator),this.Uo=new Map,this.qo=new Fr,this.Ko={},this.jo=new Map,this.Qo=wr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ns(e,t){const n=_s(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await Dr(n.localStore,Je(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await rs(n,t,r,"current"===s),n.isPrimaryClient&&di(n.remoteStore,e)}return i}async function rs(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await Mr(e.localStore,t.query,!1).then(({documents:e})=>t.view.bo(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return gs(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Mr(e.localStore,t,!0),s=new Qi(t,i.zn),o=s.bo(i.documents),a=rn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);gs(e,n,c.Co);const u=new Zi(t,n,s);return e.Oo.set(t,u),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}async function is(e,t){const n=b(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(e=>!Qe(e,t))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fi(n.remoteStore,r.targetId),fs(n,r.targetId)}).catch(_r)):(fs(n,r.targetId),await Lr(n.localStore,r.targetId,!0))}async function ss(e,t,n){const r=Ts(e);try{const e=await function(e,t){const n=b(e),r=D.now(),i=t.reduce((e,t)=>e.add(t.key),Zt());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Wn.vn(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=Ot(e,s.get(e.key));null!=t&&o.push(new At(e.key,t,ve(t.value.mapValue),_t.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new qt(j)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await ys(r,e.changes),await Ii(r.remoteStore)}catch(e){const t=Ui(e,"Failed to persist write");n.reject(t)}}async function os(e,t){const n=b(e);try{const e=await Nr(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Uo.get(t);r&&(y(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?y(r.$o):e.removedDocuments.size>0&&(y(r.$o),r.$o=!1))}),await ys(n,e,t)}catch(e){await _r(e)}}function as(e,t,n){const r=b(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=b(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.ro(t)&&(r=!0)}),r&&Ki(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cs(e,t,n){const r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new qt(ne.comparator);e=e.insert(s,ye.newNoDocument(s,L.min()));const n=Zt().add(s),i=new nn(L.min(),new Map,new zt(j),e,n);await os(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),vs(r)}else await Lr(r.localStore,t,!1).then(()=>fs(r,t,n)).catch(_r)}async function us(e,t){const n=b(e),r=t.batch.batchId;try{const e=await Ar(n.localStore,t);ds(n,r,null),hs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ys(n,e)}catch(e){await _r(e)}}async function ls(e,t,n){const r=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.An.lookupMutationBatch(e,t).next(t=>(y(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t))).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}(r.localStore,t);ds(r,t,n),hs(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ys(r,e)}catch(n){await _r(n)}}function hs(e,t){(e.jo.get(t)||[]).forEach(e=>{e.resolve()}),e.jo.delete(t)}function ds(e,t,n){const r=b(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function fs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(t=>{e.qo.containsKey(t)||ps(e,t)})}function ps(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(fi(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),vs(e))}function gs(e,t,n){for(const r of n)r instanceof Ji?(e.qo.addReference(r.key,t),ms(e,r)):r instanceof Yi?(f("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||ps(e,r.key)):v()}function ms(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(f("SyncEngine","New document in limbo: "+n),e.Lo.add(r),vs(e))}function vs(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new ne(q.fromString(t)),r=e.Qo.next();e.Uo.set(r,new es(n)),e.Bo=e.Bo.insert(n,r),di(e.remoteStore,new pr(Je(He(n.path)),r,2,A.I))}}async function ys(e,t,n){const r=b(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((e,a)=>{o.push(r.Go(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ir.$n(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>lr.forEach(t,t=>lr.forEach(t.kn,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>lr.forEach(t.xn,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!hr(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function bs(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await xr(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach(e=>{e.forEach(e=>{e.reject(new _(w.CANCELLED,t))})}),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ys(n,e.Gn)}}function ws(e,t){const n=b(e),r=n.Uo.get(t);if(r&&r.$o)return Zt().add(r.key);{let e=Zt();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}function _s(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=os.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ws.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cs.bind(null,t),t.Fo.Pr=Wi.bind(null,t.eventManager),t.Fo.zo=Gi.bind(null,t.eventManager),t}function Ts(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=us.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ls.bind(null,t),t}class Es{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=ni(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Cr(this.persistence,new Or,e.initialUser,this.k)}Yo(e){return new $r(Gr.ks,this.k)}Jo(e){return new Xr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ks{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>as(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=bs.bind(null,this.syncEngine),await Pi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Hi}createDatastore(e){const t=ni(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ei(r));var r;return function(e,t,n,r){return new ai(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>as(this.syncEngine,e,0),s=Yr.bt()?new Yr:new Jr,new ui(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ts(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);f("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await hi(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ui(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ss(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await xr(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Cs(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xs(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>async function(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.Gr.add(3),await hi(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await li(n)}(t.remoteStore,e)),e.onlineComponents=t}async function xs(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ss(e,new Es)),e.offlineComponents}async function As(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Cs(e,new ks)),e.onlineComponents}function Rs(e){return As(e).then(e=>e.syncEngine)}async function Ns(e){const t=await As(e),n=t.eventManager;return n.onListen=ns.bind(null,t.syncEngine),n.onUnlisten=is.bind(null,t.syncEngine),n}function js(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Is({next:s=>{t.enqueueAndForget(()=>$i(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new _(w.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new _(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Xi(He(n.path),s,{includeMetadataChanges:!0,wo:!0});return zi(e,o)}(await Ns(e),e.asyncQueue,t,n,r)),r.promise}function Ps(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Is({next:n=>{t.enqueueAndForget(()=>$i(e,o)),n.fromCache&&"server"===r.source?i.reject(new _(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Xi(n,s,{includeMetadataChanges:!0,wo:!0});return zi(e,o)}(await Ns(e),e.asyncQueue,t,n,r)),r.promise}class Ds{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ls{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e,t,n){if(!n)throw new _(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Fs(e,t,n,r){if(!0===t&&!0===r)throw new _(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Vs(e){if(!ne.isDocumentKey(e))throw new _(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qs(e){if(ne.isDocumentKey(e))throw new _(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Bs(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function Hs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bs(e);throw new _(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new _(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Fs("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zs({}),this._settingsFrozen=!1,e instanceof Ls?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(e.options.projectId)}(e))}get app(){if(!this._app)throw new _(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zs(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"gapi":const t=e.client;return y(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new S(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new _(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ms.get(e);t&&(f("ComponentProvider","Removing Datastore"),Ms.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ws(this.firestore,e,this._key)}}class Gs{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Gs(this.firestore,e,this._query)}}class Ks extends Gs{constructor(e,t,n){super(e,t,He(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ws(this.firestore,null,new ne(e))}withConverter(e){return new Ks(this.firestore,e,this._path)}}function Xs(e,t,...n){if(e=Object(o["k"])(e),Us("collection","path",t),e instanceof $s){const r=q.fromString(t,...n);return qs(r),new Ks(e,null,r)}{if(!(e instanceof Ws||e instanceof Ks))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return qs(r),new Ks(e.firestore,null,r)}}function Js(e,t,...n){if(e=Object(o["k"])(e),1===arguments.length&&(t=N.A()),Us("doc","path",t),e instanceof $s){const r=q.fromString(t,...n);return Vs(r),new Ws(e,null,new ne(r))}{if(!(e instanceof Ws||e instanceof Ks))throw new _(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return Vs(r),new Ws(e.firestore,e instanceof Ks?e.converter:null,new ne(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new ri(this,"async_queue_retry"),this.Ra=()=>{const e=ti();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=ti();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=ti();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const t=new T;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!hr(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const t=this.ma.then(()=>(this.Ea=!0,e().catch(e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw p("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ea=!1,e))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=Mi.createAndSchedule(this,e,t,n,e=>this.Va(e));return this.pa.push(r),r}Pa(){this.Ta&&v()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}function Qs(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Zs extends $s{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Ys,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||no(this),this._firestoreClient.terminate()}}function eo(e=Object(r["getApp"])()){return Object(r["_getProvider"])(e,"firestore").getImmediate()}function to(e){return e._firestoreClient||no(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function no(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ds(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Os(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new io($.fromBase64String(e))}catch(e){throw new _(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new io($.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=/^__.*__$/;class co{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new xt(e,this.data,t,this.fieldTransforms)}}function uo(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class lo{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return To(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(uo(this.xa)&&ao.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class ho{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||ni(e)}ja(e,t,n,r=!1){return new lo({xa:e,methodName:t,Ka:n,path:H.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function fo(e){const t=e._freezeSettings(),n=ni(e._databaseId);return new ho(e._databaseId,!!t.ignoreUndefinedProperties,n)}function po(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);yo("Data must be an object, but it was:",o,r);const a=mo(r,o);let c,u;if(s.merge)c=new z(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=bo(t,r,n);if(!o.contains(i))throw new _(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Eo(e,i)||e.push(i)}c=new z(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new co(new me(a),c,u)}function go(e,t){if(vo(e=Object(o["k"])(e)))return yo("Unsupported field value:",t,e),mo(e,t);if(e instanceof so)return function(e,t){if(!uo(t.xa))throw t.Ua(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Ua(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=go(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ot(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=D.fromDate(e);return{timestampValue:gn(t.k,n)}}if(e instanceof D){const n=new D(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:gn(t.k,n)}}if(e instanceof oo)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof io)return{bytesValue:mn(t.k,e._byteString)};if(e instanceof Ws){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:bn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua("Unsupported field value: "+Bs(e))}(e,t)}function mo(e,t){const n={};return F(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):U(e,(e,r)=>{const i=go(r,t.Fa(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function vo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof D||e instanceof oo||e instanceof io||e instanceof Ws||e instanceof so)}function yo(e,t,n){if(!vo(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Bs(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function bo(e,t,n){if((t=Object(o["k"])(t))instanceof ro)return t._internalPath;if("string"==typeof t)return _o(e,t);throw To("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const wo=new RegExp("[~\\*/\\[\\]]");function _o(e,t,n){if(t.search(wo)>=0)throw To(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ro(...t.split("."))._internalPath}catch(r){throw To(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function To(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new _(w.INVALID_ARGUMENT,a+e+c)}function Eo(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ws(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Io(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oo("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Io extends ko{data(){return super.data()}}function Oo(e,t){return"string"==typeof t?_o(e,t):t instanceof ro?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Co extends ko{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Oo("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class xo extends Co{data(e={}){return super.data(e)}}class Ao{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new So(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new xo(this._firestore,this._userDataWriter,n.key,n,new So(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new xo(e._firestore,e._userDataWriter,n.doc.key,n.doc,new So(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new xo(e._firestore,e._userDataWriter,t.doc.key,t.doc,new So(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Ro(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ro(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function No(e){if($e(e)&&0===e.explicitOrderBy.length)throw new _(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jo{}function Po(e,...t){for(const n of t)e=n._apply(e);return e}class Do extends jo{constructor(e,t){super(),this.Ga=e,this.Ja=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new _(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new _(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Me(t,n);return function(e,t){if(null===We(e)){const n=Ge(e);null!==n&&Mo(e,n,t.field)}}(e,r),r}(e._query,this.Ga,this.Ja);return new Gs(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new qe(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Lo(e,t="asc"){const n=t,r=Oo("orderBy",e);return new Do(r,n)}function Mo(e,t,n){if(!n.isEqual(t))throw new _(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{convertValue(e,t="none"){switch(re(e)){case 0:return null;case 1:return e.booleanValue;case 2:return K(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(X(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return U(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oo(K(e.latitude),K(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Y(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Q(e));default:return null}}convertTimestamp(e){const t=G(e);return new D(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=q.fromString(e);y($n(n));const r=new Ls(n.get(1),n.get(3)),i=new ne(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vo(e){e=Hs(e,Ws);const t=Hs(e.firestore,Zs);return js(to(t),e._key).then(n=>Wo(t,e,n))}class qo extends Uo{constructor(e){super(),this.firestore=e}convertBytes(e){return new io(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ws(this.firestore,null,t)}}function Bo(e){e=Hs(e,Gs);const t=Hs(e.firestore,Zs),n=to(t),r=new qo(t);return No(e._query),Ps(n,e._query).then(n=>new Ao(t,r,e,n))}function Ho(e,t,n){e=Hs(e,Ws);const r=Hs(e.firestore,Zs),i=Fo(e.converter,t,n);return $o(r,[po(fo(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,_t.none())])}function zo(e,...t){var n,r,i;e=Object(o["k"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||Qs(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Qs(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Ws)l=Hs(e.firestore,Zs),h=He(e._key.path),u={next:n=>{t[a]&&t[a](Wo(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Hs(e,Gs);l=Hs(n.firestore,Zs),h=n._query;const r=new qo(l);u={next:e=>{t[a]&&t[a](new Ao(l,r,n,e))},error:t[a+1],complete:t[a+2]},No(e._query)}return function(e,t,n,r){const i=new Is(r),s=new Xi(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>zi(await Ns(e),s)),()=>{i.na(),e.asyncQueue.enqueueAndForget(async()=>$i(await Ns(e),s))}}(to(l),h,c,u)}function $o(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>ss(await Rs(e),t,n)),n.promise}(to(e),t)}function Wo(e,t,n){const r=n.docs.get(t._key),i=new qo(e);return new Co(e,i,t._key,r,new So(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Zs(r,new I(e.getProvider("auth-internal")),new x(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.1",e),Object(r["registerVersion"])(c,"3.4.1","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===u||i(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=Math.floor,o=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,g=l;return void 0!==h&&(h=i(h),g=u),a(d,g,(function(i,a){var u;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,f);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var d=s(l/10);return 0===d?i:d<=p?void 0===r[d-1]?o(a,1):r[d-1]+o(a,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1157:function(e,t,n){var r,i;
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */(function(t,n){"use strict";"object"===typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!==typeof window?window:this,(function(n,s){"use strict";var o=[],a=Object.getPrototypeOf,c=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,h=o.indexOf,d={},f=d.toString,p=d.hasOwnProperty,g=p.toString,m=g.call(Object),v={},y=function(e){return"function"===typeof e&&"number"!==typeof e.nodeType&&"function"!==typeof e.item},b=function(e){return null!=e&&e===e.window},w=n.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function T(e,t,n){n=n||w;var r,i,s=n.createElement("script");if(s.text=e,t)for(r in _)i=t[r]||t.getAttribute&&t.getAttribute(r),i&&s.setAttribute(r,i);n.head.appendChild(s).parentNode.removeChild(s)}function E(e){return null==e?e+"":"object"===typeof e||"function"===typeof e?d[f.call(e)]||"object":typeof e}var k="3.6.0",I=function(e,t){return new I.fn.init(e,t)};function O(e){var t=!!e&&"length"in e&&e.length,n=E(e);return!y(e)&&!b(e)&&("array"===n||0===t||"number"===typeof t&&t>0&&t-1 in e)}I.fn=I.prototype={jquery:k,constructor:I,length:0,toArray:function(){return c.call(this)},get:function(e){return null==e?c.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=I.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return I.each(this,e)},map:function(e){return this.pushStack(I.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(I.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(I.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},I.extend=I.fn.extend=function(){var e,t,n,r,i,s,o=arguments[0]||{},a=1,c=arguments.length,u=!1;for("boolean"===typeof o&&(u=o,o=arguments[a]||{},a++),"object"===typeof o||y(o)||(o={}),a===c&&(o=this,a--);a<c;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&o!==r&&(u&&r&&(I.isPlainObject(r)||(i=Array.isArray(r)))?(n=o[t],s=i&&!Array.isArray(n)?[]:i||I.isPlainObject(n)?n:{},i=!1,o[t]=I.extend(u,s,r)):void 0!==r&&(o[t]=r));return o},I.extend({expando:"jQuery"+(k+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==f.call(e))&&(t=a(e),!t||(n=p.call(t,"constructor")&&t.constructor,"function"===typeof n&&g.call(n)===m))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){T(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(O(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(O(Object(e))?I.merge(n,"string"===typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:h.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],s=0,o=e.length,a=!n;s<o;s++)r=!t(e[s],s),r!==a&&i.push(e[s]);return i},map:function(e,t,n){var r,i,s=0,o=[];if(O(e))for(r=e.length;s<r;s++)i=t(e[s],s,n),null!=i&&o.push(i);else for(s in e)i=t(e[s],s,n),null!=i&&o.push(i);return u(o)},guid:1,support:v}),"function"===typeof Symbol&&(I.fn[Symbol.iterator]=o[Symbol.iterator]),I.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()}));var S=
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(e){var t,n,r,i,s,o,a,c,u,l,h,d,f,p,g,m,v,y,b,w="sizzle"+1*new Date,_=e.document,T=0,E=0,k=ce(),I=ce(),O=ce(),S=ce(),C=function(e,t){return e===t&&(h=!0),0},x={}.hasOwnProperty,A=[],R=A.pop,N=A.push,j=A.push,P=A.slice,D=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",U="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\["+M+"*("+U+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+U+"))|)"+M+"*\\]",V=":("+U+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",q=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),H=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),$=new RegExp(M+"|>"),W=new RegExp(V),G=new RegExp("^"+U+"$"),K={ID:new RegExp("^#("+U+")"),CLASS:new RegExp("^\\.("+U+")"),TAG:new RegExp("^("+U+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+V),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=function(){d()},oe=we((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{j.apply(A=P.call(_.childNodes),_.childNodes),A[_.childNodes.length].nodeType}catch(Se){j={apply:A.length?function(e,t){N.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ae(e,t,r,i){var s,a,u,l,h,p,v,y=t&&t.ownerDocument,_=t?t.nodeType:9;if(r=r||[],"string"!==typeof e||!e||1!==_&&9!==_&&11!==_)return r;if(!i&&(d(t),t=t||f,g)){if(11!==_&&(h=Z.exec(e)))if(s=h[1]){if(9===_){if(!(u=t.getElementById(s)))return r;if(u.id===s)return r.push(u),r}else if(y&&(u=y.getElementById(s))&&b(t,u)&&u.id===s)return r.push(u),r}else{if(h[2])return j.apply(r,t.getElementsByTagName(e)),r;if((s=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return j.apply(r,t.getElementsByClassName(s)),r}if(n.qsa&&!S[e+" "]&&(!m||!m.test(e))&&(1!==_||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===_&&($.test(e)||z.test(e))){y=ee.test(e)&&ve(t.parentNode)||t,y===t&&n.scope||((l=t.getAttribute("id"))?l=l.replace(re,ie):t.setAttribute("id",l=w)),p=o(e),a=p.length;while(a--)p[a]=(l?"#"+l:":scope")+" "+be(p[a]);v=p.join(",")}try{return j.apply(r,y.querySelectorAll(v)),r}catch(T){S(e,!0)}finally{l===w&&t.removeAttribute("id")}}}return c(e.replace(B,"$1"),t,r,i)}function ce(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function ue(e){return e[w]=!0,e}function le(e){var t=f.createElement("fieldset");try{return!!e(t)}catch(Se){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function he(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&oe(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ue((function(t){return t=+t,ue((function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))}))}))}function ve(e){return e&&"undefined"!==typeof e.getElementsByTagName&&e}for(t in n=ae.support={},s=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!X.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,i,o=e?e.ownerDocument||e:_;return o!=f&&9===o.nodeType&&o.documentElement?(f=o,p=f.documentElement,g=!s(f),_!=f&&(i=f.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",se,!1):i.attachEvent&&i.attachEvent("onunload",se)),n.scope=le((function(e){return p.appendChild(e).appendChild(f.createElement("div")),"undefined"!==typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=le((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=le((function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Q.test(f.getElementsByClassName),n.getById=le((function(e){return p.appendChild(e).id=w,!f.getElementsByName||!f.getElementsByName(w).length})),n.getById?(r.filter["ID"]=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find["ID"]=function(e,t){if("undefined"!==typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter["ID"]=function(e){var t=e.replace(te,ne);return function(e){var n="undefined"!==typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find["ID"]=function(e,t){if("undefined"!==typeof t.getElementById&&g){var n,r,i,s=t.getElementById(e);if(s){if(n=s.getAttributeNode("id"),n&&n.value===e)return[s];i=t.getElementsByName(e),r=0;while(s=i[r++])if(n=s.getAttributeNode("id"),n&&n.value===e)return[s]}return[]}}),r.find["TAG"]=n.getElementsByTagName?function(e,t){return"undefined"!==typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if("*"===e){while(n=s[i++])1===n.nodeType&&r.push(n);return r}return s},r.find["CLASS"]=n.getElementsByClassName&&function(e,t){if("undefined"!==typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(f.querySelectorAll))&&(le((function(e){var t;p.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+L+")"),e.querySelectorAll("[id~="+w+"-]").length||m.push("~="),t=f.createElement("input"),t.setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),le((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=f.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Q.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&le((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",V)})),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(p.compareDocumentPosition),b=t||Q.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},C=t?function(e,t){if(e===t)return h=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==f||e.ownerDocument==_&&b(_,e)?-1:t==f||t.ownerDocument==_&&b(_,t)?1:l?D(l,e)-D(l,t):0:4&r?-1:1)}:function(e,t){if(e===t)return h=!0,0;var n,r=0,i=e.parentNode,s=t.parentNode,o=[e],a=[t];if(!i||!s)return e==f?-1:t==f?1:i?-1:s?1:l?D(l,e)-D(l,t):0;if(i===s)return de(e,t);n=e;while(n=n.parentNode)o.unshift(n);n=t;while(n=n.parentNode)a.unshift(n);while(o[r]===a[r])r++;return r?de(o[r],a[r]):o[r]==_?-1:a[r]==_?1:0},f):f},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(Se){S(t,!0)}return ae(t,f,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=f&&d(e),b(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=f&&d(e);var i=r.attrHandle[t.toLowerCase()],s=i&&x.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==s?s:n.attributes||!g?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},ae.escape=function(e){return(e+"").replace(re,ie)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,r=[],i=0,s=0;if(h=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(C),h){while(t=e[s++])t===e[s]&&(i=r.push(s));while(i--)e.splice(r[i],1)}return l=null,e},i=ae.getText=function(e){var t,n="",r=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"===typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===s||4===s)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},r=ae.selectors={cacheLength:50,createPseudo:ue,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&k(e,(function(e){return t.test("string"===typeof e.className&&e.className||"undefined"!==typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=ae.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(q," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var u,l,h,d,f,p,g=s!==o?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!c&&!a,b=!1;if(m){if(s){while(g){d=t;while(d=d[g])if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&y){d=m,h=d[w]||(d[w]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),u=l[e]||[],f=u[0]===T&&u[1],b=f&&u[2],d=f&&m.childNodes[f];while(d=++f&&d&&d[g]||(b=f=0)||p.pop())if(1===d.nodeType&&++b&&d===t){l[e]=[T,f,b];break}}else if(y&&(d=t,h=d[w]||(d[w]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),u=l[e]||[],f=u[0]===T&&u[1],b=f),!1===b)while(d=++f&&d&&d[g]||(b=f=0)||p.pop())if((a?d.nodeName.toLowerCase()===v:1===d.nodeType)&&++b&&(y&&(h=d[w]||(d[w]={}),l=h[d.uniqueID]||(h[d.uniqueID]={}),l[e]=[T,b]),d===t))break;return b-=i,b===r||b%r===0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return i[w]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue((function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=D(e,s[o]),e[r]=!(n[r]=s[o])})):function(e){return i(e,0,n)}):i}},pseudos:{not:ue((function(e){var t=[],n=[],r=a(e.replace(B,"$1"));return r[w]?ue((function(e,t,n,i){var s,o=r(e,null,i,[]),a=e.length;while(a--)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,i,s){return t[0]=e,r(t,null,s,n),t[0]=null,!n.pop()}})),has:ue((function(e){return function(t){return ae(e,t).length>0}})),contains:ue((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:ue((function(e){return G.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos["empty"](e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}},r.pseudos["nth"]=r.pseudos["eq"],{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function we(e,t,n){var r=t.dir,i=t.next,s=i||r,o=n&&"parentNode"===s,a=E++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i);return!1}:function(t,n,c){var u,l,h,d=[T,a];if(c){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,c))return!0}else while(t=t[r])if(1===t.nodeType||o)if(h=t[w]||(t[w]={}),l=h[t.uniqueID]||(h[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((u=l[s])&&u[0]===T&&u[1]===a)return d[2]=u[2];if(l[s]=d,d[2]=e(t,n,c))return!0}return!1}}function _e(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Te(e,t,n){for(var r=0,i=t.length;r<i;r++)ae(e,t[r],n);return n}function Ee(e,t,n,r,i){for(var s,o=[],a=0,c=e.length,u=null!=t;a<c;a++)(s=e[a])&&(n&&!n(s,r,i)||(o.push(s),u&&t.push(a)));return o}function ke(e,t,n,r,i,s){return r&&!r[w]&&(r=ke(r)),i&&!i[w]&&(i=ke(i,s)),ue((function(s,o,a,c){var u,l,h,d=[],f=[],p=o.length,g=s||Te(t||"*",a.nodeType?[a]:a,[]),m=!e||!s&&t?g:Ee(g,d,e,a,c),v=n?i||(s?e:p||r)?[]:o:m;if(n&&n(m,v,a,c),r){u=Ee(v,f),r(u,[],a,c),l=u.length;while(l--)(h=u[l])&&(v[f[l]]=!(m[f[l]]=h))}if(s){if(i||e){if(i){u=[],l=v.length;while(l--)(h=v[l])&&u.push(m[l]=h);i(null,v=[],u,c)}l=v.length;while(l--)(h=v[l])&&(u=i?D(s,h):d[l])>-1&&(s[u]=!(o[u]=h))}}else v=Ee(v===o?v.splice(p,v.length):v),i?i(null,o,v,c):j.apply(o,v)}))}function Ie(e){for(var t,n,i,s=e.length,o=r.relative[e[0].type],a=o||r.relative[" "],c=o?1:0,l=we((function(e){return e===t}),a,!0),h=we((function(e){return D(t,e)>-1}),a,!0),d=[function(e,n,r){var i=!o&&(r||n!==u)||((t=n).nodeType?l(e,n,r):h(e,n,r));return t=null,i}];c<s;c++)if(n=r.relative[e[c].type])d=[we(_e(d),n)];else{if(n=r.filter[e[c].type].apply(null,e[c].matches),n[w]){for(i=++c;i<s;i++)if(r.relative[e[i].type])break;return ke(c>1&&_e(d),c>1&&be(e.slice(0,c-1).concat({value:" "===e[c-2].type?"*":""})).replace(B,"$1"),n,c<i&&Ie(e.slice(c,i)),i<s&&Ie(e=e.slice(i)),i<s&&be(e))}d.push(n)}return _e(d)}function Oe(e,t){var n=t.length>0,i=e.length>0,s=function(s,o,a,c,l){var h,p,m,v=0,y="0",b=s&&[],w=[],_=u,E=s||i&&r.find["TAG"]("*",l),k=T+=null==_?1:Math.random()||.1,I=E.length;for(l&&(u=o==f||o||l);y!==I&&null!=(h=E[y]);y++){if(i&&h){p=0,o||h.ownerDocument==f||(d(h),a=!g);while(m=e[p++])if(m(h,o||f,a)){c.push(h);break}l&&(T=k)}n&&((h=!m&&h)&&v--,s&&b.push(h))}if(v+=y,n&&y!==v){p=0;while(m=t[p++])m(b,w,o,a);if(s){if(v>0)while(y--)b[y]||w[y]||(w[y]=R.call(c));w=Ee(w)}j.apply(c,w),l&&!s&&w.length>0&&v+t.length>1&&ae.uniqueSort(c)}return l&&(T=k,u=_),b};return n?ue(s):s}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,o=ae.tokenize=function(e,t){var n,i,s,o,a,c,u,l=I[e+" "];if(l)return t?0:l.slice(0);a=e,c=[],u=r.preFilter;while(a){for(o in n&&!(i=H.exec(a))||(i&&(a=a.slice(i[0].length)||a),c.push(s=[])),n=!1,(i=z.exec(a))&&(n=i.shift(),s.push({value:n,type:i[0].replace(B," ")}),a=a.slice(n.length)),r.filter)!(i=K[o].exec(a))||u[o]&&!(i=u[o](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):I(e,c).slice(0)},a=ae.compile=function(e,t){var n,r=[],i=[],s=O[e+" "];if(!s){t||(t=o(e)),n=t.length;while(n--)s=Ie(t[n]),s[w]?r.push(s):i.push(s);s=O(e,Oe(i,r)),s.selector=e}return s},c=ae.select=function(e,t,n,i){var s,c,u,l,h,d="function"===typeof e&&e,f=!i&&o(e=d.selector||e);if(n=n||[],1===f.length){if(c=f[0]=f[0].slice(0),c.length>2&&"ID"===(u=c[0]).type&&9===t.nodeType&&g&&r.relative[c[1].type]){if(t=(r.find["ID"](u.matches[0].replace(te,ne),t)||[])[0],!t)return n;d&&(t=t.parentNode),e=e.slice(c.shift().value.length)}s=K["needsContext"].test(e)?0:c.length;while(s--){if(u=c[s],r.relative[l=u.type])break;if((h=r.find[l])&&(i=h(u.matches[0].replace(te,ne),ee.test(c[0].type)&&ve(t.parentNode)||t))){if(c.splice(s,1),e=i.length&&be(c),!e)return j.apply(n,i),n;break}}}return(d||a(e,f))(i,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=w.split("").sort(C).join("")===w,n.detectDuplicates=!!h,d(),n.sortDetached=le((function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))})),le((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||he("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&le((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||he("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),le((function(e){return null==e.getAttribute("disabled")}))||he(L,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ae}(n);I.find=S,I.expr=S.selectors,I.expr[":"]=I.expr.pseudos,I.uniqueSort=I.unique=S.uniqueSort,I.text=S.getText,I.isXMLDoc=S.isXML,I.contains=S.contains,I.escapeSelector=S.escape;var C=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&I(e).is(n))break;r.push(e)}return r},x=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=I.expr.match.needsContext;function R(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return y(t)?I.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?I.grep(e,(function(e){return e===t!==n})):"string"!==typeof t?I.grep(e,(function(e){return h.call(t,e)>-1!==n})):I.filter(t,e,n)}I.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?I.find.matchesSelector(r,e)?[r]:[]:I.find.matches(e,I.grep(t,(function(e){return 1===e.nodeType})))},I.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!==typeof e)return this.pushStack(I(e).filter((function(){for(t=0;t<r;t++)if(I.contains(i[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)I.find(e,i[t],n);return r>1?I.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"===typeof e&&A.test(e)?I(e):e||[],!1).length}});var P,D=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,L=I.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||P,"string"===typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:D.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof I?t[0]:t,I.merge(this,I.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:w,!0)),N.test(r[1])&&I.isPlainObject(t))for(r in t)y(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=w.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(I):I.makeArray(e,this)};L.prototype=I.fn,P=I(w);var M=/^(?:parents|prev(?:Until|All))/,U={children:!0,contents:!0,next:!0,prev:!0};function F(e,t){while((e=e[t])&&1!==e.nodeType);return e}I.fn.extend({has:function(e){var t=I(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(I.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,s=[],o="string"!==typeof e&&I(e);if(!A.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&I.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?I.uniqueSort(s):s)},index:function(e){return e?"string"===typeof e?h.call(I(e),this[0]):h.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(I.uniqueSort(I.merge(this.get(),I(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),I.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,n){return C(e,"parentNode",n)},next:function(e){return F(e,"nextSibling")},prev:function(e){return F(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,n){return C(e,"nextSibling",n)},prevUntil:function(e,t,n){return C(e,"previousSibling",n)},siblings:function(e){return x((e.parentNode||{}).firstChild,e)},children:function(e){return x(e.firstChild)},contents:function(e){return null!=e.contentDocument&&a(e.contentDocument)?e.contentDocument:(R(e,"template")&&(e=e.content||e),I.merge([],e.childNodes))}},(function(e,t){I.fn[e]=function(n,r){var i=I.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"===typeof r&&(i=I.filter(r,i)),this.length>1&&(U[e]||I.uniqueSort(i),M.test(e)&&i.reverse()),this.pushStack(i)}}));var V=/[^\x20\t\r\n\f]+/g;function q(e){var t={};return I.each(e.match(V)||[],(function(e,n){t[n]=!0})),t}function B(e){return e}function H(e){throw e}function z(e,t,n,r){var i;try{e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}I.Callbacks=function(e){e="string"===typeof e?q(e):I.extend({},e);var t,n,r,i,s=[],o=[],a=-1,c=function(){for(i=i||e.once,r=t=!0;o.length;a=-1){n=o.shift();while(++a<s.length)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1)}e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},u={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){I.each(n,(function(n,r){y(r)?e.unique&&u.has(r)||s.push(r):r&&r.length&&"string"!==E(r)&&t(r)}))}(arguments),n&&!t&&c()),this},remove:function(){return I.each(arguments,(function(e,t){var n;while((n=I.inArray(t,s,n))>-1)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?I.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=o=[],n||t||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],o.push(n),t||c()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!r}};return u},I.extend({Deferred:function(e){var t=[["notify","progress",I.Callbacks("memory"),I.Callbacks("memory"),2],["resolve","done",I.Callbacks("once memory"),I.Callbacks("once memory"),0,"resolved"],["reject","fail",I.Callbacks("once memory"),I.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return I.Deferred((function(n){I.each(t,(function(t,r){var i=y(e[r[4]])&&e[r[4]];s[r[1]]((function(){var e=i&&i.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,r,i){var s=0;function o(e,t,r,i){return function(){var a=this,c=arguments,u=function(){var n,u;if(!(e<s)){if(n=r.apply(a,c),n===t.promise())throw new TypeError("Thenable self-resolution");u=n&&("object"===typeof n||"function"===typeof n)&&n.then,y(u)?i?u.call(n,o(s,t,B,i),o(s,t,H,i)):(s++,u.call(n,o(s,t,B,i),o(s,t,H,i),o(s,t,B,t.notifyWith))):(r!==B&&(a=void 0,c=[n]),(i||t.resolveWith)(a,c))}},l=i?u:function(){try{u()}catch(n){I.Deferred.exceptionHook&&I.Deferred.exceptionHook(n,l.stackTrace),e+1>=s&&(r!==H&&(a=void 0,c=[n]),t.rejectWith(a,c))}};e?l():(I.Deferred.getStackHook&&(l.stackTrace=I.Deferred.getStackHook()),n.setTimeout(l))}}return I.Deferred((function(n){t[0][3].add(o(0,n,y(i)?i:B,n.notifyWith)),t[1][3].add(o(0,n,y(e)?e:B)),t[2][3].add(o(0,n,y(r)?r:H))})).promise()},promise:function(e){return null!=e?I.extend(e,i):i}},s={};return I.each(t,(function(e,n){var o=n[2],a=n[5];i[n[1]]=o.add,a&&o.add((function(){r=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),o.add(n[3].fire),s[n[0]]=function(){return s[n[0]+"With"](this===s?void 0:this,arguments),this},s[n[0]+"With"]=o.fireWith})),i.promise(s),e&&e.call(s,s),s},when:function(e){var t=arguments.length,n=t,r=Array(n),i=c.call(arguments),s=I.Deferred(),o=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?c.call(arguments):n,--t||s.resolveWith(r,i)}};if(t<=1&&(z(e,s.done(o(n)).resolve,s.reject,!t),"pending"===s.state()||y(i[n]&&i[n].then)))return s.then();while(n--)z(i[n],o(n),s.reject);return s.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;I.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&$.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},I.readyException=function(e){n.setTimeout((function(){throw e}))};var W=I.Deferred();function G(){w.removeEventListener("DOMContentLoaded",G),n.removeEventListener("load",G),I.ready()}I.fn.ready=function(e){return W.then(e).catch((function(e){I.readyException(e)})),this},I.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--I.readyWait:I.isReady)||(I.isReady=!0,!0!==e&&--I.readyWait>0||W.resolveWith(w,[I]))}}),I.ready.then=W.then,"complete"===w.readyState||"loading"!==w.readyState&&!w.documentElement.doScroll?n.setTimeout(I.ready):(w.addEventListener("DOMContentLoaded",G),n.addEventListener("load",G));var K=function(e,t,n,r,i,s,o){var a=0,c=e.length,u=null==n;if("object"===E(n))for(a in i=!0,n)K(e,t,a,n[a],!0,s,o);else if(void 0!==r&&(i=!0,y(r)||(o=!0),u&&(o?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(I(e),n)})),t))for(;a<c;a++)t(e[a],n,o?r:r.call(e[a],a,t(e[a],n)));return i?e:u?t.call(e):c?t(e[0],n):s},X=/^-ms-/,J=/-([a-z])/g;function Y(e,t){return t.toUpperCase()}function Q(e){return e.replace(X,"ms-").replace(J,Y)}var Z=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function ee(){this.expando=I.expando+ee.uid++}ee.uid=1,ee.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Z(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"===typeof t)i[Q(t)]=n;else for(r in t)i[Q(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][Q(t)]},access:function(e,t,n){return void 0===t||t&&"string"===typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(Q):(t=Q(t),t=t in r?[t]:t.match(V)||[]),n=t.length;while(n--)delete r[t[n]]}(void 0===t||I.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!I.isEmptyObject(t)}};var te=new ee,ne=new ee,re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ie=/[A-Z]/g;function se(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:re.test(e)?JSON.parse(e):e)}function oe(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ie,"-$&").toLowerCase(),n=e.getAttribute(r),"string"===typeof n){try{n=se(n)}catch(i){}ne.set(e,t,n)}else n=void 0;return n}I.extend({hasData:function(e){return ne.hasData(e)||te.hasData(e)},data:function(e,t,n){return ne.access(e,t,n)},removeData:function(e,t){ne.remove(e,t)},_data:function(e,t,n){return te.access(e,t,n)},_removeData:function(e,t){te.remove(e,t)}}),I.fn.extend({data:function(e,t){var n,r,i,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(i=ne.get(s),1===s.nodeType&&!te.get(s,"hasDataAttrs"))){n=o.length;while(n--)o[n]&&(r=o[n].name,0===r.indexOf("data-")&&(r=Q(r.slice(5)),oe(s,r,i[r])));te.set(s,"hasDataAttrs",!0)}return i}return"object"===typeof e?this.each((function(){ne.set(this,e)})):K(this,(function(t){var n;if(s&&void 0===t)return n=ne.get(s,e),void 0!==n?n:(n=oe(s,e),void 0!==n?n:void 0);this.each((function(){ne.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){ne.remove(this,e)}))}}),I.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=te.get(e,t),n&&(!r||Array.isArray(n)?r=te.access(e,t,I.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=I.queue(e,t),r=n.length,i=n.shift(),s=I._queueHooks(e,t),o=function(){I.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return te.get(e,n)||te.access(e,n,{empty:I.Callbacks("once memory").add((function(){te.remove(e,[t+"queue",n])}))})}}),I.fn.extend({queue:function(e,t){var n=2;return"string"!==typeof e&&(t=e,e="fx",n--),arguments.length<n?I.queue(this[0],e):void 0===t?this:this.each((function(){var n=I.queue(this,e,t);I._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&I.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){I.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=I.Deferred(),s=this,o=this.length,a=function(){--r||i.resolveWith(s,[s])};"string"!==typeof e&&(t=e,e=void 0),e=e||"fx";while(o--)n=te.get(s[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var ae=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ce=new RegExp("^(?:([+-])=|)("+ae+")([a-z%]*)$","i"),ue=["Top","Right","Bottom","Left"],le=w.documentElement,he=function(e){return I.contains(e.ownerDocument,e)},de={composed:!0};le.getRootNode&&(he=function(e){return I.contains(e.ownerDocument,e)||e.getRootNode(de)===e.ownerDocument});var fe=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&he(e)&&"none"===I.css(e,"display")};function pe(e,t,n,r){var i,s,o=20,a=r?function(){return r.cur()}:function(){return I.css(e,t,"")},c=a(),u=n&&n[3]||(I.cssNumber[t]?"":"px"),l=e.nodeType&&(I.cssNumber[t]||"px"!==u&&+c)&&ce.exec(I.css(e,t));if(l&&l[3]!==u){c/=2,u=u||l[3],l=+c||1;while(o--)I.style(e,t,l+u),(1-s)*(1-(s=a()/c||.5))<=0&&(o=0),l/=s;l*=2,I.style(e,t,l+u),n=n||[]}return n&&(l=+l||+c||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=l,r.end=i)),i}var ge={};function me(e){var t,n=e.ownerDocument,r=e.nodeName,i=ge[r];return i||(t=n.body.appendChild(n.createElement(r)),i=I.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ge[r]=i,i)}function ve(e,t){for(var n,r,i=[],s=0,o=e.length;s<o;s++)r=e[s],r.style&&(n=r.style.display,t?("none"===n&&(i[s]=te.get(r,"display")||null,i[s]||(r.style.display="")),""===r.style.display&&fe(r)&&(i[s]=me(r))):"none"!==n&&(i[s]="none",te.set(r,"display",n)));for(s=0;s<o;s++)null!=i[s]&&(e[s].style.display=i[s]);return e}I.fn.extend({show:function(){return ve(this,!0)},hide:function(){return ve(this)},toggle:function(e){return"boolean"===typeof e?e?this.show():this.hide():this.each((function(){fe(this)?I(this).show():I(this).hide()}))}});var ye=/^(?:checkbox|radio)$/i,be=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,we=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=w.createDocumentFragment(),t=e.appendChild(w.createElement("div")),n=w.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),v.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",v.option=!!t.lastChild})();var _e={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Te(e,t){var n;return n="undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!==typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&R(e,t)?I.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)te.set(e[n],"globalEval",!t||te.get(t[n],"globalEval"))}_e.tbody=_e.tfoot=_e.colgroup=_e.caption=_e.thead,_e.th=_e.td,v.option||(_e.optgroup=_e.option=[1,"<select multiple='multiple'>","</select>"]);var ke=/<|&#?\w+;/;function Ie(e,t,n,r,i){for(var s,o,a,c,u,l,h=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if(s=e[f],s||0===s)if("object"===E(s))I.merge(d,s.nodeType?[s]:s);else if(ke.test(s)){o=o||h.appendChild(t.createElement("div")),a=(be.exec(s)||["",""])[1].toLowerCase(),c=_e[a]||_e._default,o.innerHTML=c[1]+I.htmlPrefilter(s)+c[2],l=c[0];while(l--)o=o.lastChild;I.merge(d,o.childNodes),o=h.firstChild,o.textContent=""}else d.push(t.createTextNode(s));h.textContent="",f=0;while(s=d[f++])if(r&&I.inArray(s,r)>-1)i&&i.push(s);else if(u=he(s),o=Te(h.appendChild(s),"script"),u&&Ee(o),n){l=0;while(s=o[l++])we.test(s.type||"")&&n.push(s)}return h}var Oe=/^([^.]*)(?:\.(.+)|)/;function Se(){return!0}function Ce(){return!1}function xe(e,t){return e===Ae()===("focus"===t)}function Ae(){try{return w.activeElement}catch(e){}}function Re(e,t,n,r,i,s){var o,a;if("object"===typeof t){for(a in"string"!==typeof n&&(r=r||n,n=void 0),t)Re(e,a,n,r,t[a],s);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"===typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ce;else if(!i)return e;return 1===s&&(o=i,i=function(e){return I().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=I.guid++)),e.each((function(){I.event.add(this,t,i,r,n)}))}function Ne(e,t,n){n?(te.set(e,t,!1),I.event.add(e,t,{namespace:!1,handler:function(e){var r,i,s=te.get(this,t);if(1&e.isTrigger&&this[t]){if(s.length)(I.event.special[t]||{}).delegateType&&e.stopPropagation();else if(s=c.call(arguments),te.set(this,t,s),r=n(this,t),this[t](),i=te.get(this,t),s!==i||r?te.set(this,t,!1):i={},s!==i)return e.stopImmediatePropagation(),e.preventDefault(),i&&i.value}else s.length&&(te.set(this,t,{value:I.event.trigger(I.extend(s[0],I.Event.prototype),s.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===te.get(e,t)&&I.event.add(e,t,Se)}I.event={global:{},add:function(e,t,n,r,i){var s,o,a,c,u,l,h,d,f,p,g,m=te.get(e);if(Z(e)){n.handler&&(s=n,n=s.handler,i=s.selector),i&&I.find.matchesSelector(le,i),n.guid||(n.guid=I.guid++),(c=m.events)||(c=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return"undefined"!==typeof I&&I.event.triggered!==t.type?I.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(V)||[""],u=t.length;while(u--)a=Oe.exec(t[u])||[],f=g=a[1],p=(a[2]||"").split(".").sort(),f&&(h=I.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,h=I.event.special[f]||{},l=I.extend({type:f,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&I.expr.match.needsContext.test(i),namespace:p.join(".")},s),(d=c[f])||(d=c[f]=[],d.delegateCount=0,h.setup&&!1!==h.setup.call(e,r,p,o)||e.addEventListener&&e.addEventListener(f,o)),h.add&&(h.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),I.event.global[f]=!0)}},remove:function(e,t,n,r,i){var s,o,a,c,u,l,h,d,f,p,g,m=te.hasData(e)&&te.get(e);if(m&&(c=m.events)){t=(t||"").match(V)||[""],u=t.length;while(u--)if(a=Oe.exec(t[u])||[],f=g=a[1],p=(a[2]||"").split(".").sort(),f){h=I.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,d=c[f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;while(s--)l=d[s],!i&&g!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(d.splice(s,1),l.selector&&d.delegateCount--,h.remove&&h.remove.call(e,l));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,p,m.handle)||I.removeEvent(e,f,m.handle),delete c[f])}else for(f in c)I.event.remove(e,f+t[u],n,r,!0);I.isEmptyObject(c)&&te.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,s,o,a=new Array(arguments.length),c=I.event.fix(e),u=(te.get(this,"events")||Object.create(null))[c.type]||[],l=I.event.special[c.type]||{};for(a[0]=c,t=1;t<arguments.length;t++)a[t]=arguments[t];if(c.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,c)){o=I.event.handlers.call(this,c,u),t=0;while((i=o[t++])&&!c.isPropagationStopped()){c.currentTarget=i.elem,n=0;while((s=i.handlers[n++])&&!c.isImmediatePropagationStopped())c.rnamespace&&!1!==s.namespace&&!c.rnamespace.test(s.namespace)||(c.handleObj=s,c.data=s.data,r=((I.event.special[s.origType]||{}).handle||s.handler).apply(i.elem,a),void 0!==r&&!1===(c.result=r)&&(c.preventDefault(),c.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,c),c.result}},handlers:function(e,t){var n,r,i,s,o,a=[],c=t.delegateCount,u=e.target;if(c&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(s=[],o={},n=0;n<c;n++)r=t[n],i=r.selector+" ",void 0===o[i]&&(o[i]=r.needsContext?I(i,this).index(u)>-1:I.find(i,this,null,[u]).length),o[i]&&s.push(r);s.length&&a.push({elem:u,handlers:s})}return u=this,c<t.length&&a.push({elem:u,handlers:t.slice(c)}),a},addProp:function(e,t){Object.defineProperty(I.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[I.expando]?e:new I.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ye.test(t.type)&&t.click&&R(t,"input")&&Ne(t,"click",Se),!1},trigger:function(e){var t=this||e;return ye.test(t.type)&&t.click&&R(t,"input")&&Ne(t,"click"),!0},_default:function(e){var t=e.target;return ye.test(t.type)&&t.click&&R(t,"input")&&te.get(t,"click")||R(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},I.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},I.Event=function(e,t){if(!(this instanceof I.Event))return new I.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Se:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&I.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[I.expando]=!0},I.Event.prototype={constructor:I.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Se,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Se,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Se,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},I.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},I.event.addProp),I.each({focus:"focusin",blur:"focusout"},(function(e,t){I.event.special[e]={setup:function(){return Ne(this,e,xe),!1},trigger:function(){return Ne(this,e),!0},_default:function(){return!0},delegateType:t}})),I.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){I.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;return i&&(i===r||I.contains(r,i))||(e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t),n}}})),I.fn.extend({on:function(e,t,n,r){return Re(this,e,t,n,r)},one:function(e,t,n,r){return Re(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,I(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!==typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each((function(){I.event.remove(this,e,n,t)}))}});var je=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,De=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return R(e,"table")&&R(11!==t.nodeType?t:t.firstChild,"tr")&&I(e).children("tbody")[0]||e}function Me(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ue(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,s,o,a,c;if(1===t.nodeType){if(te.hasData(e)&&(s=te.get(e),c=s.events,c))for(i in te.remove(t,"handle events"),c)for(n=0,r=c[i].length;n<r;n++)I.event.add(t,i,c[i][n]);ne.hasData(e)&&(o=ne.access(e),a=I.extend({},o),ne.set(t,a))}}function Ve(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ye.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function qe(e,t,n,r){t=u(t);var i,s,o,a,c,l,h=0,d=e.length,f=d-1,p=t[0],g=y(p);if(g||d>1&&"string"===typeof p&&!v.checkClone&&Pe.test(p))return e.each((function(i){var s=e.eq(i);g&&(t[0]=p.call(this,i,s.html())),qe(s,t,n,r)}));if(d&&(i=Ie(t,e[0].ownerDocument,!1,e,r),s=i.firstChild,1===i.childNodes.length&&(i=s),s||r)){for(o=I.map(Te(i,"script"),Me),a=o.length;h<d;h++)c=i,h!==f&&(c=I.clone(c,!0,!0),a&&I.merge(o,Te(c,"script"))),n.call(e[h],c,h);if(a)for(l=o[o.length-1].ownerDocument,I.map(o,Ue),h=0;h<a;h++)c=o[h],we.test(c.type||"")&&!te.access(c,"globalEval")&&I.contains(l,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?I._evalUrl&&!c.noModule&&I._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},l):T(c.textContent.replace(De,""),c,l))}return e}function Be(e,t,n){for(var r,i=t?I.filter(t,e):e,s=0;null!=(r=i[s]);s++)n||1!==r.nodeType||I.cleanData(Te(r)),r.parentNode&&(n&&he(r)&&Ee(Te(r,"script")),r.parentNode.removeChild(r));return e}I.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,s,o,a=e.cloneNode(!0),c=he(e);if(!v.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!I.isXMLDoc(e))for(o=Te(a),s=Te(e),r=0,i=s.length;r<i;r++)Ve(s[r],o[r]);if(t)if(n)for(s=s||Te(e),o=o||Te(a),r=0,i=s.length;r<i;r++)Fe(s[r],o[r]);else Fe(e,a);return o=Te(a,"script"),o.length>0&&Ee(o,!c&&Te(e,"script")),a},cleanData:function(e){for(var t,n,r,i=I.event.special,s=0;void 0!==(n=e[s]);s++)if(Z(n)){if(t=n[te.expando]){if(t.events)for(r in t.events)i[r]?I.event.remove(n,r):I.removeEvent(n,r,t.handle);n[te.expando]=void 0}n[ne.expando]&&(n[ne.expando]=void 0)}}}),I.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return K(this,(function(e){return void 0===e?I.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return qe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.appendChild(e)}}))},prepend:function(){return qe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return qe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return qe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(I.cleanData(Te(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return I.clone(this,e,t)}))},html:function(e){return K(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"===typeof e&&!je.test(e)&&!_e[(be.exec(e)||["",""])[1].toLowerCase()]){e=I.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(I.cleanData(Te(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return qe(this,arguments,(function(t){var n=this.parentNode;I.inArray(this,e)<0&&(I.cleanData(Te(this)),n&&n.replaceChild(t,this))}),e)}}),I.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){I.fn[e]=function(e){for(var n,r=[],i=I(e),s=i.length-1,o=0;o<=s;o++)n=o===s?this:this.clone(!0),I(i[o])[t](n),l.apply(r,n.get());return this.pushStack(r)}}));var He=new RegExp("^("+ae+")(?!px)[a-z%]+$","i"),ze=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},$e=function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=s[i];return r},We=new RegExp(ue.join("|"),"i");function Ge(e,t,n){var r,i,s,o,a=e.style;return n=n||ze(e),n&&(o=n.getPropertyValue(t)||n[t],""!==o||he(e)||(o=I.style(e,t)),!v.pixelBoxStyles()&&He.test(o)&&We.test(t)&&(r=a.width,i=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=n.width,a.width=r,a.minWidth=i,a.maxWidth=s)),void 0!==o?o+"":o}function Ke(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}(function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",le.appendChild(u).appendChild(l);var e=n.getComputedStyle(l);r="1%"!==e.top,c=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),i=36===t(e.width),l.style.position="absolute",s=12===t(l.offsetWidth/3),le.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var r,i,s,o,a,c,u=w.createElement("div"),l=w.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,I.extend(v,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),c},scrollboxSize:function(){return e(),s},reliableTrDimensions:function(){var e,t,r,i;return null==a&&(e=w.createElement("table"),t=w.createElement("tr"),r=w.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",r.style.height="9px",r.style.display="block",le.appendChild(e).appendChild(t).appendChild(r),i=n.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,le.removeChild(e)),a}}))})();var Xe=["Webkit","Moz","ms"],Je=w.createElement("div").style,Ye={};function Qe(e){var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;while(n--)if(e=Xe[n]+t,e in Je)return e}function Ze(e){var t=I.cssProps[e]||Ye[e];return t||(e in Je?e:Ye[e]=Qe(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt=/^--/,nt={position:"absolute",visibility:"hidden",display:"block"},rt={letterSpacing:"0",fontWeight:"400"};function it(e,t,n){var r=ce.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function st(e,t,n,r,i,s){var o="width"===t?1:0,a=0,c=0;if(n===(r?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(c+=I.css(e,n+ue[o],!0,i)),r?("content"===n&&(c-=I.css(e,"padding"+ue[o],!0,i)),"margin"!==n&&(c-=I.css(e,"border"+ue[o]+"Width",!0,i))):(c+=I.css(e,"padding"+ue[o],!0,i),"padding"!==n?c+=I.css(e,"border"+ue[o]+"Width",!0,i):a+=I.css(e,"border"+ue[o]+"Width",!0,i));return!r&&s>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-c-a-.5))||0),c}function ot(e,t,n){var r=ze(e),i=!v.boxSizingReliable()||n,s=i&&"border-box"===I.css(e,"boxSizing",!1,r),o=s,a=Ge(e,t,r),c="offset"+t[0].toUpperCase()+t.slice(1);if(He.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&s||!v.reliableTrDimensions()&&R(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===I.css(e,"display",!1,r))&&e.getClientRects().length&&(s="border-box"===I.css(e,"boxSizing",!1,r),o=c in e,o&&(a=e[c])),a=parseFloat(a)||0,a+st(e,t,n||(s?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}I.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,s,o,a=Q(t),c=tt.test(t),u=e.style;if(c||(t=Ze(a)),o=I.cssHooks[t]||I.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:u[t];s=typeof n,"string"===s&&(i=ce.exec(n))&&i[1]&&(n=pe(e,t,i),s="number"),null!=n&&n===n&&("number"!==s||c||(n+=i&&i[3]||(I.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,r))||(c?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,s,o,a=Q(t),c=tt.test(t);return c||(t=Ze(a)),o=I.cssHooks[t]||I.cssHooks[a],o&&"get"in o&&(i=o.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in rt&&(i=rt[t]),""===n||n?(s=parseFloat(i),!0===n||isFinite(s)?s||0:i):i}}),I.each(["height","width"],(function(e,t){I.cssHooks[t]={get:function(e,n,r){if(n)return!et.test(I.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,t,r):$e(e,nt,(function(){return ot(e,t,r)}))},set:function(e,n,r){var i,s=ze(e),o=!v.scrollboxSize()&&"absolute"===s.position,a=o||r,c=a&&"border-box"===I.css(e,"boxSizing",!1,s),u=r?st(e,t,r,c,s):0;return c&&o&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-st(e,t,"border",!1,s)-.5)),u&&(i=ce.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=I.css(e,t)),it(e,n,u)}}})),I.cssHooks.marginLeft=Ke(v.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-$e(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),I.each({margin:"",padding:"",border:"Width"},(function(e,t){I.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s="string"===typeof n?n.split(" "):[n];r<4;r++)i[e+ue[r]+t]=s[r]||s[r-2]||s[0];return i}},"margin"!==e&&(I.cssHooks[e+t].set=it)})),I.fn.extend({css:function(e,t){return K(this,(function(e,t,n){var r,i,s={},o=0;if(Array.isArray(t)){for(r=ze(e),i=t.length;o<i;o++)s[t[o]]=I.css(e,t[o],!1,r);return s}return void 0!==n?I.style(e,t,n):I.css(e,t)}),e,t,arguments.length>1)}}),I.Tween=at,at.prototype={constructor:at,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||I.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(I.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=I.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}},at.prototype.init.prototype=at.prototype,at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=I.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){I.fx.step[e.prop]?I.fx.step[e.prop](e):1!==e.elem.nodeType||!I.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:I.style(e.elem,e.prop,e.now+e.unit)}}},at.propHooks.scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},I.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},I.fx=at.prototype.init,I.fx.step={};var ct,ut,lt=/^(?:toggle|show|hide)$/,ht=/queueHooks$/;function dt(){ut&&(!1===w.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(dt):n.setTimeout(dt,I.fx.interval),I.fx.tick())}function ft(){return n.setTimeout((function(){ct=void 0})),ct=Date.now()}function pt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=ue[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function gt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),s=0,o=i.length;s<o;s++)if(r=i[s].call(n,t,e))return r}function mt(e,t,n){var r,i,s,o,a,c,u,l,h="width"in t||"height"in t,d=this,f={},p=e.style,g=e.nodeType&&fe(e),m=te.get(e,"fxshow");for(r in n.queue||(o=I._queueHooks(e,"fx"),null==o.unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,I.queue(e,"fx").length||o.empty.fire()}))}))),t)if(i=t[r],lt.test(i)){if(delete t[r],s=s||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}f[r]=m&&m[r]||I.style(e,r)}if(c=!I.isEmptyObject(t),c||!I.isEmptyObject(f))for(r in h&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=m&&m.display,null==u&&(u=te.get(e,"display")),l=I.css(e,"display"),"none"===l&&(u?l=u:(ve([e],!0),u=e.style.display||u,l=I.css(e,"display"),ve([e]))),("inline"===l||"inline-block"===l&&null!=u)&&"none"===I.css(e,"float")&&(c||(d.done((function(){p.display=u})),null==u&&(l=p.display,u="none"===l?"":l)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),c=!1,f)c||(m?"hidden"in m&&(g=m.hidden):m=te.access(e,"fxshow",{display:u}),s&&(m.hidden=!g),g&&ve([e],!0),d.done((function(){for(r in g||ve([e]),te.remove(e,"fxshow"),f)I.style(e,r,f[r])}))),c=gt(g?m[r]:0,r,d),r in m||(m[r]=c.start,g&&(c.end=c.start,c.start=0))}function vt(e,t){var n,r,i,s,o;for(n in e)if(r=Q(n),i=t[r],s=e[n],Array.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=I.cssHooks[r],o&&"expand"in o)for(n in s=o.expand(s),delete e[r],s)n in e||(e[n]=s[n],t[n]=i);else t[r]=i}function yt(e,t,n){var r,i,s=0,o=yt.prefilters.length,a=I.Deferred().always((function(){delete c.elem})),c=function(){if(i)return!1;for(var t=ct||ft(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,s=1-r,o=0,c=u.tweens.length;o<c;o++)u.tweens[o].run(s);return a.notifyWith(e,[u,s,n]),s<1&&c?n:(c||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:I.extend({},t),opts:I.extend(!0,{specialEasing:{},easing:I.easing._default},n),originalProperties:t,originalOptions:n,startTime:ct||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=I.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),l=u.props;for(vt(l,u.opts.specialEasing);s<o;s++)if(r=yt.prefilters[s].call(u,e,l,u.opts),r)return y(r.stop)&&(I._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;return I.map(l,gt,u),y(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),I.fx.timer(I.extend(c,{elem:e,anim:u,queue:u.opts.queue})),u}I.Animation=I.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return pe(n.elem,e,ce.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(V);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[mt],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),I.speed=function(e,t,n){var r=e&&"object"===typeof e?I.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return I.fx.off?r.duration=0:"number"!==typeof r.duration&&(r.duration in I.fx.speeds?r.duration=I.fx.speeds[r.duration]:r.duration=I.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&I.dequeue(this,r.queue)},r},I.fn.extend({fadeTo:function(e,t,n,r){return this.filter(fe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=I.isEmptyObject(e),s=I.speed(t,n,r),o=function(){var t=yt(this,I.extend({},e),s);(i||te.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!==typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",s=I.timers,o=te.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&ht.test(i)&&r(o[i]);for(i=s.length;i--;)s[i].elem!==this||null!=e&&s[i].queue!==e||(s[i].anim.stop(n),t=!1,s.splice(i,1));!t&&n||I.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=te.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=I.timers,o=r?r.length:0;for(n.finish=!0,I.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),I.each(["toggle","show","hide"],(function(e,t){var n=I.fn[t];I.fn[t]=function(e,r,i){return null==e||"boolean"===typeof e?n.apply(this,arguments):this.animate(pt(t,!0),e,r,i)}})),I.each({slideDown:pt("show"),slideUp:pt("hide"),slideToggle:pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){I.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),I.timers=[],I.fx.tick=function(){var e,t=0,n=I.timers;for(ct=Date.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||I.fx.stop(),ct=void 0},I.fx.timer=function(e){I.timers.push(e),I.fx.start()},I.fx.interval=13,I.fx.start=function(){ut||(ut=!0,dt())},I.fx.stop=function(){ut=null},I.fx.speeds={slow:600,fast:200,_default:400},I.fn.delay=function(e,t){return e=I.fx&&I.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}}))},function(){var e=w.createElement("input"),t=w.createElement("select"),n=t.appendChild(w.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=n.selected,e=w.createElement("input"),e.value="t",e.type="radio",v.radioValue="t"===e.value}();var bt,wt=I.expr.attrHandle;I.fn.extend({attr:function(e,t){return K(this,I.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){I.removeAttr(this,e)}))}}),I.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return"undefined"===typeof e.getAttribute?I.prop(e,t,n):(1===s&&I.isXMLDoc(e)||(i=I.attrHooks[t.toLowerCase()]||(I.expr.match.bool.test(t)?bt:void 0)),void 0!==n?null===n?void I.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=I.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&R(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(V);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),bt={set:function(e,t,n){return!1===t?I.removeAttr(e,n):e.setAttribute(n,n),n}},I.each(I.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=wt[t]||I.find.attr;wt[t]=function(e,t,r){var i,s,o=t.toLowerCase();return r||(s=wt[o],wt[o]=i,i=null!=n(e,t,r)?o:null,wt[o]=s),i}}));var _t=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;function Et(e){var t=e.match(V)||[];return t.join(" ")}function kt(e){return e.getAttribute&&e.getAttribute("class")||""}function It(e){return Array.isArray(e)?e:"string"===typeof e&&e.match(V)||[]}I.fn.extend({prop:function(e,t){return K(this,I.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[I.propFix[e]||e]}))}}),I.extend({prop:function(e,t,n){var r,i,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&I.isXMLDoc(e)||(t=I.propFix[t]||t,i=I.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=I.find.attr(e,"tabindex");return t?parseInt(t,10):_t.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(I.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),I.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){I.propFix[this.toLowerCase()]=this})),I.fn.extend({addClass:function(e){var t,n,r,i,s,o,a,c=0;if(y(e))return this.each((function(t){I(this).addClass(e.call(this,t,kt(this)))}));if(t=It(e),t.length)while(n=this[c++])if(i=kt(n),r=1===n.nodeType&&" "+Et(i)+" ",r){o=0;while(s=t[o++])r.indexOf(" "+s+" ")<0&&(r+=s+" ");a=Et(r),i!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,s,o,a,c=0;if(y(e))return this.each((function(t){I(this).removeClass(e.call(this,t,kt(this)))}));if(!arguments.length)return this.attr("class","");if(t=It(e),t.length)while(n=this[c++])if(i=kt(n),r=1===n.nodeType&&" "+Et(i)+" ",r){o=0;while(s=t[o++])while(r.indexOf(" "+s+" ")>-1)r=r.replace(" "+s+" "," ");a=Et(r),i!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"===typeof t&&r?t?this.addClass(e):this.removeClass(e):y(e)?this.each((function(n){I(this).toggleClass(e.call(this,n,kt(this),t),t)})):this.each((function(){var t,i,s,o;if(r){i=0,s=I(this),o=It(e);while(t=o[i++])s.hasClass(t)?s.removeClass(t):s.addClass(t)}else void 0!==e&&"boolean"!==n||(t=kt(this),t&&te.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":te.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+Et(kt(n))+" ").indexOf(t)>-1)return!0;return!1}});var Ot=/\r/g;I.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=y(e),this.each((function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,I(this).val()):e,null==i?i="":"number"===typeof i?i+="":Array.isArray(i)&&(i=I.map(i,(function(e){return null==e?"":e+""}))),t=I.valHooks[this.type]||I.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=I.valHooks[i.type]||I.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"===typeof n?n.replace(Ot,""):null==n?"":n)):void 0}}),I.extend({valHooks:{option:{get:function(e){var t=I.find.attr(e,"value");return null!=t?t:Et(I.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],c=o?s+1:i.length;for(r=s<0?c:o?s:0;r<c;r++)if(n=i[r],(n.selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!R(n.parentNode,"optgroup"))){if(t=I(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,s=I.makeArray(t),o=i.length;while(o--)r=i[o],(r.selected=I.inArray(I.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),I.each(["radio","checkbox"],(function(){I.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=I.inArray(I(e).val(),t)>-1}},v.checkOn||(I.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),v.focusin="onfocusin"in n;var St=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};I.extend(I.event,{trigger:function(e,t,r,i){var s,o,a,c,u,l,h,d,f=[r||w],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[];if(o=d=a=r=r||w,3!==r.nodeType&&8!==r.nodeType&&!St.test(g+I.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),u=g.indexOf(":")<0&&"on"+g,e=e[I.expando]?e:new I.Event(g,"object"===typeof e&&e),e.isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:I.makeArray(t,[e]),h=I.event.special[g]||{},i||!h.trigger||!1!==h.trigger.apply(r,t))){if(!i&&!h.noBubble&&!b(r)){for(c=h.delegateType||g,St.test(c+g)||(o=o.parentNode);o;o=o.parentNode)f.push(o),a=o;a===(r.ownerDocument||w)&&f.push(a.defaultView||a.parentWindow||n)}s=0;while((o=f[s++])&&!e.isPropagationStopped())d=o,e.type=s>1?c:h.bindType||g,l=(te.get(o,"events")||Object.create(null))[e.type]&&te.get(o,"handle"),l&&l.apply(o,t),l=u&&o[u],l&&l.apply&&Z(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=g,i||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(f.pop(),t)||!Z(r)||u&&y(r[g])&&!b(r)&&(a=r[u],a&&(r[u]=null),I.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,Ct),r[g](),e.isPropagationStopped()&&d.removeEventListener(g,Ct),I.event.triggered=void 0,a&&(r[u]=a)),e.result}},simulate:function(e,t,n){var r=I.extend(new I.Event,n,{type:e,isSimulated:!0});I.event.trigger(r,null,t)}}),I.fn.extend({trigger:function(e,t){return this.each((function(){I.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return I.event.trigger(e,t,n,!0)}}),v.focusin||I.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){I.event.simulate(t,e.target,I.event.fix(e))};I.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=te.access(r,t);i||r.addEventListener(e,n,!0),te.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=te.access(r,t)-1;i?te.access(r,t,i):(r.removeEventListener(e,n,!0),te.remove(r,t))}}}));var xt=n.location,At={guid:Date.now()},Rt=/\?/;I.parseXML=function(e){var t,r;if(!e||"string"!==typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(i){}return r=t&&t.getElementsByTagName("parsererror")[0],t&&!r||I.error("Invalid XML: "+(r?I.map(r.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var Nt=/\[\]$/,jt=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;function Lt(e,t,n,r){var i;if(Array.isArray(t))I.each(t,(function(t,i){n||Nt.test(e)?r(e,i):Lt(e+"["+("object"===typeof i&&null!=i?t:"")+"]",i,n,r)}));else if(n||"object"!==E(t))r(e,t);else for(i in t)Lt(e+"["+i+"]",t[i],n,r)}I.param=function(e,t){var n,r=[],i=function(e,t){var n=y(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!I.isPlainObject(e))I.each(e,(function(){i(this.name,this.value)}));else for(n in e)Lt(n,e[n],t,i);return r.join("&")},I.fn.extend({serialize:function(){return I.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=I.prop(this,"elements");return e?I.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!I(this).is(":disabled")&&Dt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!ye.test(e))})).map((function(e,t){var n=I(this).val();return null==n?null:Array.isArray(n)?I.map(n,(function(e){return{name:t.name,value:e.replace(jt,"\r\n")}})):{name:t.name,value:n.replace(jt,"\r\n")}})).get()}});var Mt=/%20/g,Ut=/#.*$/,Ft=/([?&])_=[^&]*/,Vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Bt=/^(?:GET|HEAD)$/,Ht=/^\/\//,zt={},$t={},Wt="*/".concat("*"),Gt=w.createElement("a");function Kt(e){return function(t,n){"string"!==typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(V)||[];if(y(n))while(r=s[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Xt(e,t,n,r){var i={},s=e===$t;function o(a){var c;return i[a]=!0,I.each(e[a]||[],(function(e,a){var u=a(t,n,r);return"string"!==typeof u||s||i[u]?s?!(c=u):void 0:(t.dataTypes.unshift(u),o(u),!1)})),c}return o(t.dataTypes[0])||!i["*"]&&o("*")}function Jt(e,t){var n,r,i=I.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&I.extend(!0,e,r),e}function Yt(e,t,n){var r,i,s,o,a=e.contents,c=e.dataTypes;while("*"===c[0])c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){c.unshift(i);break}if(c[0]in n)s=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){s=i;break}o||(o=i)}s=s||o}if(s)return s!==c[0]&&c.unshift(s),n[s]}function Qt(e,t,n,r){var i,s,o,a,c,u={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)u[o.toLowerCase()]=e.converters[o];s=l.shift();while(s)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=s,s=l.shift(),s)if("*"===s)s=c;else if("*"!==c&&c!==s){if(o=u[c+" "+s]||u["* "+s],!o)for(i in u)if(a=i.split(" "),a[1]===s&&(o=u[c+" "+a[0]]||u["* "+a[0]],o)){!0===o?o=u[i]:!0!==u[i]&&(s=a[0],l.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+c+" to "+s}}}return{state:"success",data:t}}Gt.href=xt.href,I.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:qt.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":I.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Jt(Jt(e,I.ajaxSettings),t):Jt(I.ajaxSettings,e)},ajaxPrefilter:Kt(zt),ajaxTransport:Kt($t),ajax:function(e,t){"object"===typeof e&&(t=e,e=void 0),t=t||{};var r,i,s,o,a,c,u,l,h,d,f=I.ajaxSetup({},t),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?I(p):I.event,m=I.Deferred(),v=I.Callbacks("once memory"),y=f.statusCode||{},b={},_={},T="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(u){if(!o){o={};while(t=Vt.exec(s))o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return u?s:null},setRequestHeader:function(e,t){return null==u&&(e=_[e.toLowerCase()]=_[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==u&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(u)E.always(e[E.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||T;return r&&r.abort(t),k(0,t),this}};if(m.promise(E),f.url=((e||f.url||xt.href)+"").replace(Ht,xt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(V)||[""],null==f.crossDomain){c=w.createElement("a");try{c.href=f.url,c.href=c.href,f.crossDomain=Gt.protocol+"//"+Gt.host!==c.protocol+"//"+c.host}catch(O){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!==typeof f.data&&(f.data=I.param(f.data,f.traditional)),Xt(zt,f,t,E),u)return E;for(h in l=I.event&&f.global,l&&0===I.active++&&I.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Bt.test(f.type),i=f.url.replace(Ut,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Mt,"+")):(d=f.url.slice(i.length),f.data&&(f.processData||"string"===typeof f.data)&&(i+=(Rt.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(Ft,"$1"),d=(Rt.test(i)?"&":"?")+"_="+At.guid+++d),f.url=i+d),f.ifModified&&(I.lastModified[i]&&E.setRequestHeader("If-Modified-Since",I.lastModified[i]),I.etag[i]&&E.setRequestHeader("If-None-Match",I.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&E.setRequestHeader("Content-Type",f.contentType),E.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Wt+"; q=0.01":""):f.accepts["*"]),f.headers)E.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,E,f)||u))return E.abort();if(T="abort",v.add(f.complete),E.done(f.success),E.fail(f.error),r=Xt($t,f,t,E),r){if(E.readyState=1,l&&g.trigger("ajaxSend",[E,f]),u)return E;f.async&&f.timeout>0&&(a=n.setTimeout((function(){E.abort("timeout")}),f.timeout));try{u=!1,r.send(b,k)}catch(O){if(u)throw O;k(-1,O)}}else k(-1,"No Transport");function k(e,t,o,c){var h,d,b,w,_,T=t;u||(u=!0,a&&n.clearTimeout(a),r=void 0,s=c||"",E.readyState=e>0?4:0,h=e>=200&&e<300||304===e,o&&(w=Yt(f,E,o)),!h&&I.inArray("script",f.dataTypes)>-1&&I.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),w=Qt(f,w,E,h),h?(f.ifModified&&(_=E.getResponseHeader("Last-Modified"),_&&(I.lastModified[i]=_),_=E.getResponseHeader("etag"),_&&(I.etag[i]=_)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=w.state,d=w.data,b=w.error,h=!b)):(b=T,!e&&T||(T="error",e<0&&(e=0))),E.status=e,E.statusText=(t||T)+"",h?m.resolveWith(p,[d,T,E]):m.rejectWith(p,[E,T,b]),E.statusCode(y),y=void 0,l&&g.trigger(h?"ajaxSuccess":"ajaxError",[E,f,h?d:b]),v.fireWith(p,[E,T]),l&&(g.trigger("ajaxComplete",[E,f]),--I.active||I.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return I.get(e,t,n,"json")},getScript:function(e,t){return I.get(e,void 0,t,"script")}}),I.each(["get","post"],(function(e,t){I[t]=function(e,n,r,i){return y(n)&&(i=i||r,r=n,n=void 0),I.ajax(I.extend({url:e,type:t,dataType:i,data:n,success:r},I.isPlainObject(e)&&e))}})),I.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),I._evalUrl=function(e,t,n){return I.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){I.globalEval(e,t,n)}})},I.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=I(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return y(e)?this.each((function(t){I(this).wrapInner(e.call(this,t))})):this.each((function(){var t=I(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=y(e);return this.each((function(n){I(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){I(this).replaceWith(this.childNodes)})),this}}),I.expr.pseudos.hidden=function(e){return!I.expr.pseudos.visible(e)},I.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},I.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Zt={0:200,1223:204},en=I.ajaxSettings.xhr();v.cors=!!en&&"withCredentials"in en,v.ajax=en=!!en,I.ajaxTransport((function(e){var t,r;if(v.cors||en&&!e.crossDomain)return{send:function(i,s){var o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];for(o in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(o,i[o]);t=function(e){return function(){t&&(t=r=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!==typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Zt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!==typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),r=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){t&&r()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(c){if(t)throw c}},abort:function(){t&&t()}}})),I.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),I.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return I.globalEval(e),e}}}),I.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),I.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=I("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),w.head.appendChild(t[0])},abort:function(){n&&n()}}}));var tn=[],nn=/(=)\?(?=&|$)|\?\?/;I.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tn.pop()||I.expando+"_"+At.guid++;return this[e]=!0,e}}),I.ajaxPrefilter("json jsonp",(function(e,t,r){var i,s,o,a=!1!==e.jsonp&&(nn.test(e.url)?"url":"string"===typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&nn.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(nn,"$1"+i):!1!==e.jsonp&&(e.url+=(Rt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return o||I.error(i+" was not called"),o[0]},e.dataTypes[0]="json",s=n[i],n[i]=function(){o=arguments},r.always((function(){void 0===s?I(n).removeProp(i):n[i]=s,e[i]&&(e.jsonpCallback=t.jsonpCallback,tn.push(i)),o&&y(s)&&s(o[0]),o=s=void 0})),"script"})),v.createHTMLDocument=function(){var e=w.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),I.parseHTML=function(e,t,n){return"string"!==typeof e?[]:("boolean"===typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?(t=w.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=w.location.href,t.head.appendChild(r)):t=w),i=N.exec(e),s=!n&&[],i?[t.createElement(i[1])]:(i=Ie([e],t,s),s&&s.length&&I(s).remove(),I.merge([],i.childNodes)));var r,i,s},I.fn.load=function(e,t,n){var r,i,s,o=this,a=e.indexOf(" ");return a>-1&&(r=Et(e.slice(a)),e=e.slice(0,a)),y(t)?(n=t,t=void 0):t&&"object"===typeof t&&(i="POST"),o.length>0&&I.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(r?I("<div>").append(I.parseHTML(e)).find(r):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},I.expr.pseudos.animated=function(e){return I.grep(I.timers,(function(t){return e===t.elem})).length},I.offset={setOffset:function(e,t,n){var r,i,s,o,a,c,u,l=I.css(e,"position"),h=I(e),d={};"static"===l&&(e.style.position="relative"),a=h.offset(),s=I.css(e,"top"),c=I.css(e,"left"),u=("absolute"===l||"fixed"===l)&&(s+c).indexOf("auto")>-1,u?(r=h.position(),o=r.top,i=r.left):(o=parseFloat(s)||0,i=parseFloat(c)||0),y(t)&&(t=t.call(e,n,I.extend({},a))),null!=t.top&&(d.top=t.top-a.top+o),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):h.css(d)}},I.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){I.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===I.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===I.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&(i=I(e).offset(),i.top+=I.css(e,"borderTopWidth",!0),i.left+=I.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-I.css(r,"marginTop",!0),left:t.left-i.left-I.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){var e=this.offsetParent;while(e&&"static"===I.css(e,"position"))e=e.offsetParent;return e||le}))}}),I.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;I.fn[e]=function(r){return K(this,(function(e,r,i){var s;if(b(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===i)return s?s[t]:e[r];s?s.scrollTo(n?s.pageXOffset:i,n?i:s.pageYOffset):e[r]=i}),e,r,arguments.length)}})),I.each(["top","left"],(function(e,t){I.cssHooks[t]=Ke(v.pixelPosition,(function(e,n){if(n)return n=Ge(e,t),He.test(n)?I(e).position()[t]+"px":n}))})),I.each({Height:"height",Width:"width"},(function(e,t){I.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){I.fn[r]=function(i,s){var o=arguments.length&&(n||"boolean"!==typeof i),a=n||(!0===i||!0===s?"margin":"border");return K(this,(function(t,n,i){var s;return b(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===i?I.css(t,n,a):I.style(t,n,i,a)}),t,o?i:void 0,o)}}))})),I.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){I.fn[t]=function(e){return this.on(t,e)}})),I.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),I.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){I.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var rn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;I.proxy=function(e,t){var n,r,i;if("string"===typeof t&&(n=e[t],t=e,e=n),y(e))return r=c.call(arguments,2),i=function(){return e.apply(t||this,r.concat(c.call(arguments)))},i.guid=e.guid=e.guid||I.guid++,i},I.holdReady=function(e){e?I.readyWait++:I.ready(!0)},I.isArray=Array.isArray,I.parseJSON=JSON.parse,I.nodeName=R,I.isFunction=y,I.isWindow=b,I.camelCase=Q,I.type=E,I.now=Date.now,I.isNumeric=function(e){var t=I.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},I.trim=function(e){return null==e?"":(e+"").replace(rn,"")},r=[],i=function(){return I}.apply(t,r),void 0===i||(e.exports=i);var sn=n.jQuery,on=n.$;return I.noConflict=function(e){return n.$===I&&(n.$=on),e&&n.jQuery===I&&(n.jQuery=sn),I},"undefined"===typeof s&&(n.jQuery=n.$=I),I}))},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("825a"),o=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=i(n,e,t);return null!==r&&s(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"w",(function(){return A})),n.d(t,"E",(function(){return C}));var r=n("2ac4");n.d(t,"a",(function(){return r["b"]})),n.d(t,"b",(function(){return r["d"]})),n.d(t,"c",(function(){return r["g"]})),n.d(t,"d",(function(){return r["h"]})),n.d(t,"e",(function(){return r["k"]})),n.d(t,"f",(function(){return r["i"]})),n.d(t,"g",(function(){return r["e"]})),n.d(t,"h",(function(){return r["m"]})),n.d(t,"i",(function(){return r["j"]})),n.d(t,"j",(function(){return r["qb"]})),n.d(t,"k",(function(){return r["sb"]})),n.d(t,"l",(function(){return r["l"]})),n.d(t,"m",(function(){return r["J"]})),n.d(t,"n",(function(){return r["n"]})),n.d(t,"o",(function(){return r["o"]})),n.d(t,"p",(function(){return r["bb"]})),n.d(t,"q",(function(){return r["H"]})),n.d(t,"r",(function(){return r["X"]})),n.d(t,"s",(function(){return r["I"]})),n.d(t,"t",(function(){return r["cb"]})),n.d(t,"u",(function(){return r["F"]})),n.d(t,"v",(function(){return r["db"]})),n.d(t,"x",(function(){return r["w"]})),n.d(t,"y",(function(){return r["fb"]})),n.d(t,"z",(function(){return r["ob"]})),n.d(t,"A",(function(){return r["u"]})),n.d(t,"B",(function(){return r["x"]})),n.d(t,"C",(function(){return r["v"]})),n.d(t,"D",(function(){return r["c"]})),n.d(t,"F",(function(){return r["z"]})),n.d(t,"G",(function(){return r["xb"]})),n.d(t,"H",(function(){return r["E"]})),n.d(t,"I",(function(){return r["Q"]})),n.d(t,"J",(function(){return r["R"]})),n.d(t,"K",(function(){return r["nb"]})),n.d(t,"L",(function(){return r["f"]})),n.d(t,"M",(function(){return r["mb"]})),n.d(t,"N",(function(){return r["C"]})),n.d(t,"O",(function(){return r["r"]})),n.d(t,"P",(function(){return r["pb"]})),n.d(t,"Q",(function(){return r["hb"]})),n.d(t,"R",(function(){return r["kb"]})),n.d(t,"S",(function(){return r["S"]})),n.d(t,"T",(function(){return r["s"]})),n.d(t,"U",(function(){return r["tb"]})),n.d(t,"V",(function(){return r["ib"]})),n.d(t,"W",(function(){return r["lb"]})),n.d(t,"X",(function(){return r["K"]})),n.d(t,"Y",(function(){return r["a"]})),n.d(t,"Z",(function(){return r["B"]})),n.d(t,"ab",(function(){return r["p"]})),n.d(t,"bb",(function(){return r["q"]})),n.d(t,"cb",(function(){return r["t"]})),n.d(t,"db",(function(){return r["A"]})),n.d(t,"eb",(function(){return r["D"]})),n.d(t,"fb",(function(){return r["ub"]})),n.d(t,"gb",(function(){return r["gb"]})),n.d(t,"hb",(function(){return r["jb"]})),n.d(t,"ib",(function(){return r["P"]})),n.d(t,"jb",(function(){return r["N"]})),n.d(t,"kb",(function(){return r["O"]})),n.d(t,"lb",(function(){return r["wb"]})),n.d(t,"mb",(function(){return r["M"]})),n.d(t,"nb",(function(){return r["L"]})),n.d(t,"ob",(function(){return r["y"]}));var i=n("1fd5");n("589b"),n("e691"),n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function s(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=2e3;async function a(e,t,n){var i;const{BuildInfo:o}=s();Object(r["U"])(t.sessionId,"AuthEvent did not contain a session ID");const a=await d(t.sessionId),c={};return Object(r["V"])()?c["ibi"]=o.packageName:Object(r["W"])()?c["apn"]=o.packageName:Object(r["X"])(e,"operation-not-supported-in-this-environment"),o.displayName&&(c["appDisplayName"]=o.displayName),c["sessionId"]=a,Object(r["Y"])(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,c)}async function c(e){const{BuildInfo:t}=s(),n={};Object(r["V"])()?n.iosBundleId=t.packageName:Object(r["W"])()?n.androidPackageName=t.packageName:Object(r["X"])(e,"operation-not-supported-in-this-environment"),await Object(r["Z"])(e,n)}function u(e){const{cordova:t}=s();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let s=null;i?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,Object(r["T"])()?"_blank":"_system","location=yes"),n(s)})})}async function l(e,t,n){const{cordova:i}=s();let a=()=>{};try{await new Promise((s,c)=>{let u=null;function l(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function h(){u||(u=window.setTimeout(()=>{c(Object(r["ab"])(e,"redirect-cancelled-by-user"))},o))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&h()}t.addPassiveListener(l),document.addEventListener("resume",h,!1),Object(r["W"])()&&document.addEventListener("visibilitychange",d,!1),a=()=>{t.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}})}finally{a()}}function h(e){var t,n,i,o,a,c,u,l,h,d;const f=s();Object(r["bb"])("function"===typeof(null===(t=null===f||void 0===f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Object(r["bb"])("undefined"!==typeof(null===(n=null===f||void 0===f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Object(r["bb"])("function"===typeof(null===(a=null===(o=null===(i=null===f||void 0===f?void 0:f.cordova)||void 0===i?void 0:i.plugins)||void 0===o?void 0:o.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(r["bb"])("function"===typeof(null===(l=null===(u=null===(c=null===f||void 0===f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(r["bb"])("function"===typeof(null===(d=null===(h=null===f||void 0===f?void 0:f.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function d(e){const t=f(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function f(e){if(Object(r["U"])(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=20;class g extends r["eb"]{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function m(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:w(),postBody:null,tenantId:e.tenantId,error:Object(r["ab"])(e,"no-auth-event")}}function v(e,t){return _()._set(T(e),t)}async function y(e){const t=await _()._get(T(e));return t&&await _()._remove(T(e)),t}function b(e,t){var n,i;const s=k(t);if(s.includes("/__/auth/callback")){const t=I(s),o=t["firebaseError"]?E(decodeURIComponent(t["firebaseError"])):null,a=null===(i=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],c=a?Object(r["ab"])(a):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function w(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<p;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function _(){return Object(r["cb"])(r["fb"])}function T(e){return Object(r["db"])("authEvent",e.config.apiKey,e.name)}function E(e){try{return JSON.parse(e)}catch(t){return null}}function k(e){const t=I(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=I(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=I(i)["link"];return s||i||r||n||e}function I(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(i["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=500;class S{constructor(){this._redirectPersistence=r["u"],this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r["F"]}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new g(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Object(r["X"])(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){h(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Object(r["G"])(),await this._originValidation(e);const o=m(e,n,i);await v(e,o);const c=await a(e,o,t),d=await u(c);return l(e,s,d)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=s(),o=setTimeout(async()=>{await y(e),t.onEvent(x())},O),a=async n=>{clearTimeout(o);const r=await y(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=b(r,n["url"])),t.onEvent(i||x())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,a);const c=r,u=i.packageName.toLowerCase()+"://";s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&a({url:e}),"function"===typeof c)try{c(e)}catch(t){console.error(t)}}}}const C=S;function x(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Object(r["ab"])("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){Object(r["H"])(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return D})),n.d(t,"k",(function(){return V})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return A})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return g})),n.d(t,"u",(function(){return y})),n.d(t,"v",(function(){return T})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return j})),n.d(t,"y",(function(){return P}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function g(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function m(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function T(){return!g()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new I(r,o,n);return a}}function S(e,t){return e.replace(C,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(N(n)&&N(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function P(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(e,t){this.stopped=e,this.result=t},m=g.prototype;e.exports=function(e,t,n){var r,v,y,b,w,_,T,E=n&&n.that,k=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),O=!(!n||!n.INTERRUPTED),S=i(t,E),C=function(e){return r&&f(r,"normal",e),new g(!0,e)},x=function(e){return k?(o(e),O?S(e[0],e[1],C):S(e[0],e[1])):O?S(e,C):S(e)};if(I)r=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(y=0,b=u(e);b>y;y++)if(w=x(e[y]),w&&l(m,w))return w;return new g(!1)}r=h(e,v)}_=r.next;while(!(T=s(_,r)).done){try{w=x(T.value)}catch(A){f(r,"throw",A)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"24ee":function(e,t,n){"use strict";var r=n("7ded"),i=n("e0fc"),s=n("22e5");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new o(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new o(t,this,this._ref))},t)}on(e,t,n,r){let i=void 0;return t&&(i="function"===typeof t?e=>t(new o(e,this,this._ref)):{next:t.next?e=>t.next(new o(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class c{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new u(e,this._service))}get items(){return this._delegate.items.map(e=>new u(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Object(i["h"])(this._delegate,e);return new u(t,this.storage)}get root(){return new u(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new u(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new a(Object(i["s"])(this._delegate,e,t),this)}putString(e,t=i["a"].RAW,n){this._throwIfRoot("putString");const r=Object(i["g"])(t,e),s=Object.assign({},n);return null==s["contentType"]&&null!=r.contentType&&(s["contentType"]=r.contentType),new a(new i["f"](this._delegate,new i["b"](r.data,!0),s),this)}listAll(){return Object(i["p"])(this._delegate).then(e=>new c(e,this.storage))}list(e){return Object(i["o"])(this._delegate,e||void 0).then(e=>new c(e,this.storage))}getMetadata(){return Object(i["n"])(this._delegate)}updateMetadata(e){return Object(i["r"])(this._delegate,e)}getDownloadURL(){return Object(i["m"])(this._delegate)}delete(){return this._throwIfRoot("delete"),Object(i["l"])(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw Object(i["j"])(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(h(e))throw Object(i["i"])("ref() expected a child path but got a URL, use refFromURL instead.");return new u(Object(i["q"])(this._delegate,e),this)}refFromURL(e){if(!h(e))throw Object(i["i"])("refFromURL() expected a full URL but got a child path, use ref() instead.");try{i["c"].makeFromUrl(e,this._delegate.host)}catch(t){throw Object(i["i"])("refFromUrl() expected a valid full URL but got an invalid one.")}return new u(Object(i["q"])(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Object(i["k"])(this._delegate,e,t,n)}}function h(e){return/^[A-Za-z]+:\/\//.test(e)}const d="@firebase/storage-compat",f="0.1.8",p="storage-compat";function g(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new l(n,r);return i}function m(e){const t={TaskState:i["e"],TaskEvent:i["d"],StringFormat:i["a"],Storage:l,Reference:u};e.INTERNAL.registerComponent(new s["a"](p,g,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(d,f)}m(r["a"])},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},"2ac4":function(e,t,n){"use strict";n.d(t,"a",(function(){return Bt})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return Pe})),n.d(t,"d",(function(){return Fe})),n.d(t,"e",(function(){return et})),n.d(t,"f",(function(){return fe})),n.d(t,"g",(function(){return lt})),n.d(t,"h",(function(){return pt})),n.d(t,"i",(function(){return gt})),n.d(t,"j",(function(){return Pr})),n.d(t,"k",(function(){return mt})),n.d(t,"l",(function(){return Or})),n.d(t,"m",(function(){return ft})),n.d(t,"n",(function(){return wt})),n.d(t,"o",(function(){return _t})),n.d(t,"p",(function(){return It})),n.d(t,"q",(function(){return Pt})),n.d(t,"r",(function(){return Dt})),n.d(t,"s",(function(){return Lt})),n.d(t,"t",(function(){return Ut})),n.d(t,"u",(function(){return Pn})),n.d(t,"v",(function(){return Ht})),n.d(t,"w",(function(){return zt})),n.d(t,"x",(function(){return $t})),n.d(t,"y",(function(){return Wt})),n.d(t,"z",(function(){return Gt})),n.d(t,"A",(function(){return Kt})),n.d(t,"B",(function(){return Xt})),n.d(t,"C",(function(){return Jt})),n.d(t,"D",(function(){return Yt})),n.d(t,"E",(function(){return Zt})),n.d(t,"F",(function(){return ai})),n.d(t,"G",(function(){return Yr})),n.d(t,"H",(function(){return Ne})),n.d(t,"I",(function(){return Mn})),n.d(t,"J",(function(){return yt})),n.d(t,"K",(function(){return en})),n.d(t,"L",(function(){return tn})),n.d(t,"M",(function(){return rn})),n.d(t,"N",(function(){return sn})),n.d(t,"O",(function(){return on})),n.d(t,"P",(function(){return xt})),n.d(t,"Q",(function(){return gn})),n.d(t,"R",(function(){return bn})),n.d(t,"S",(function(){return In})),n.d(t,"T",(function(){return Ie})),n.d(t,"U",(function(){return k})),n.d(t,"V",(function(){return ke})),n.d(t,"W",(function(){return _e})),n.d(t,"X",(function(){return v})),n.d(t,"Y",(function(){return qi})),n.d(t,"Z",(function(){return pi})),n.d(t,"ab",(function(){return y})),n.d(t,"bb",(function(){return T})),n.d(t,"cb",(function(){return O})),n.d(t,"db",(function(){return pe})),n.d(t,"eb",(function(){return li})),n.d(t,"fb",(function(){return Nn})),n.d(t,"gb",(function(){return Br})),n.d(t,"hb",(function(){return zr})),n.d(t,"ib",(function(){return Hr})),n.d(t,"jb",(function(){return ei})),n.d(t,"kb",(function(){return ii})),n.d(t,"lb",(function(){return ni})),n.d(t,"mb",(function(){return sr})),n.d(t,"nb",(function(){return oi})),n.d(t,"ob",(function(){return $i})),n.d(t,"pb",(function(){return Ar})),n.d(t,"qb",(function(){return Ki})),n.d(t,"rb",(function(){return es})),n.d(t,"sb",(function(){return c})),n.d(t,"tb",(function(){return Rr})),n.d(t,"ub",(function(){return xr})),n.d(t,"vb",(function(){return mn})),n.d(t,"wb",(function(){return jr})),n.d(t,"xb",(function(){return d}));var r=n("1fd5"),i=n("589b"),s=n("9ab4"),o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),g=new o["b"]("@firebase/auth");function m(e,...t){g.logLevel<=o["a"].ERROR&&g.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw _(e,...t)}function y(e,...t){return _(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function T(e,t,...n){if(!e)throw _(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function k(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Map;function O(e){k(e instanceof Function,"Expected a class definition");let t=I.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,I.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){const n=Object(i["_getProvider"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["h"])(i,null!==t&&void 0!==t?t:{}))return e;v(e,"already-initialized")}const s=n.initialize({options:t});return s}function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(O);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function j(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["s"])()||Object(r["u"])()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},U=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,s={}){return q(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["x"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),L.fetch()(H(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function q(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new z(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(s){if(s instanceof r["c"])throw s;v(e,"network-request-failed")}}async function B(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function H(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"timeout")),U.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return V(e,"POST","/v1/accounts:update",t)}async function K(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t=!1){const n=Object(r["k"])(e),i=await n.getIdToken(t),s=Q(i);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:X(Y(s.auth_time)),issuedAtTime:X(Y(s.iat)),expirationTime:X(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(s){return m("Caught error parsing JWT payload as JSON",s),null}}function Z(e){const t=Q(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&te(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=X(this.lastLoginAt),this.creationTime=X(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,K(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=Object(r["k"])(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function ae(e){return e.map(e=>{var{providerId:t}=e,n=Object(s["a"])(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await q(e,{},async()=>{const n=Object(r["x"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=H(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",L.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Object(s["a"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return se(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:E}=t;T(y&&E,e,"internal-error");const k=ue.fromJSON(this.name,E);T("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),T("boolean"===typeof b,e,"internal-error"),T("boolean"===typeof w,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(g,e.name),le(m,e.name),le(v,e.name);const I=new he({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:v});return _&&Array.isArray(_)&&(I.providerData=_.map(e=>Object.assign({},e))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ge{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ge(O(fe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||O(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new ge(i,e,n)):new ge(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Te(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=Object(r["l"])()){return/firefox\//i.test(e)}function ye(e=Object(r["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=Object(r["l"])()){return/crios\//i.test(e)}function we(e=Object(r["l"])()){return/iemobile/i.test(e)}function _e(e=Object(r["l"])()){return/android/i.test(e)}function Te(e=Object(r["l"])()){return/blackberry/i.test(e)}function Ee(e=Object(r["l"])()){return/webos/i.test(e)}function ke(e=Object(r["l"])()){return/iphone|ipad|ipod/i.test(e)}function Ie(e=Object(r["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Oe(e=Object(r["l"])()){var t;return ke(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return Object(r["q"])()&&10===document.documentMode}function Ce(e=Object(r["l"])()){return ke(e)||_e(e)||Ee(e)||Te(e)||/windows phone/i.test(e)||we(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=me(Object(r["l"])());break;case"Worker":n=`${me(Object(r["l"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["k"])(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(O(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ne(e){return Object(r["k"])(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const r=Ne(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=De(t),{host:o,port:a}=Le(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ue()}function De(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Le(e){const t=De(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Me(t)}}}function Me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ue(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function qe(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Be(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){return B(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function ze(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function $e(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Je(e,t){return B(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Fe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return He(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xe(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return B(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="http://localhost";class et extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Object(s["a"])(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new et(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:Ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["x"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function nt(e,t){return B(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function rt(e,t){const n=await B(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return B(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=Object(r["y"])(Object(r["j"])(e))["link"],n=t?Object(r["y"])(Object(r["j"])(t))["deep_link_id"]:null,i=Object(r["y"])(Object(r["j"])(e))["deep_link_id"],s=i?Object(r["y"])(Object(r["j"])(i))["link"]:null;return s||i||n||t||e}class ut{constructor(e){var t,n,i,s,o,a;const c=Object(r["y"])(Object(r["j"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(i=c["mode"])&&void 0!==i?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return T(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new ft(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="http://localhost";class yt extends Fe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class wt extends ht{constructor(e){T(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return wt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tt(e,t){return B(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=kt(n),o=new Et({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=kt(n);return new Et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e){var t;const n=Ne(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Tt(n,{returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ot(e,t,n,r)}}function St(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ot._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t){const n=Object(r["k"])(e);await Rt(!0,n,t);const{providerUserInfo:i}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ct(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function At(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Et._forOperation(e,"link",r)}async function Rt(e,t,n){await ie(t);const r=Ct(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,St(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=Q(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Et._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t,n=!1){const r="signIn",i=await St(e,r,t),s=await Et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Pt(e,t){return jt(Ne(e),t)}async function Dt(e,t){const n=Object(r["k"])(e);return await Rt(!1,n,t.providerId),At(n,t)}async function Lt(e,t){return Nt(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t){return B(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){const n=Ne(e),r=await Mt(n,{token:t,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Vt._fromServerResponse(e,t):v(e,"internal-error")}}class Vt extends Ft{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Vt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t,n){const i=Object(r["k"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&qt(i,s,n),await We(i,s)}async function Ht(e,t,n){await Ve(Object(r["k"])(e),{oobCode:t,newPassword:n})}async function zt(e,t){await Be(Object(r["k"])(e),{oobCode:t})}async function $t(e,t){const n=Object(r["k"])(e),i=await Ve(n,{oobCode:t}),s=i.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(i.mfaInfo,n,"internal-error");default:T(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ft._fromServerResponse(Ne(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Wt(e,t){const{data:n}=await $t(Object(r["k"])(e),t);return n.email}async function Gt(e,t,n){const r=Ne(e),i=await Tt(r,{returnSecureToken:!0,email:t,password:n}),s=await Et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Kt(e,t,n){return Pt(Object(r["k"])(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t,n){const i=Object(r["k"])(e),s={requestType:"EMAIL_SIGNIN",email:t};T(n.handleCodeInApp,i,"argument-error"),n&&qt(i,s,n),await Ge(i,s)}function Jt(e,t){const n=ut.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Yt(e,t,n){const i=Object(r["k"])(e),s=lt.credentialWithLink(t,n||x());return T(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=A()?x():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Qt(Object(r["k"])(e),i);return s||[]}async function en(e,t){const n=Object(r["k"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&qt(n.auth,s,t);const{email:o}=await $e(n.auth,s);o!==e.email&&await e.reload()}async function tn(e,t,n){const i=Object(r["k"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&qt(i.auth,o,n);const{email:a}=await Ke(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["k"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(i,nn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function sn(e,t){return an(Object(r["k"])(e),t,null)}function on(e,t){return an(Object(r["k"])(e),null,t)}async function an(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,qe(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new un(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new hn(s,i);case"github.com":return new dn(s,i);case"google.com":return new fn(s,i);case"twitter.com":return new pn(s,i,e.screenName||null);case"custom":case"anonymous":return new un(s,null);default:return new un(s,r,i)}}class un{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ln extends un{constructor(e,t,n,r){super(e,t,n),this.username=r}}class hn extends un{constructor(e,t){super(e,"facebook.com",t)}}class dn extends ln{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class fn extends un{constructor(e,t){super(e,"google.com",t)}}class pn extends ln{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t,n,i){return Object(r["k"])(e).onAuthStateChanged(t,n,i)}class vn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new vn("enroll",e)}static _fromMfaPendingCredential(e){return new vn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ne(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Ft._fromServerResponse(n,e));T(r.mfaPendingCredential,n,"internal-error");const s=vn._fromMfaPendingCredential(r.mfaPendingCredential);return new yn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Et._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Et._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bn(e,t){var n;const i=Object(r["k"])(e),s=t;return T(t.customData.operationType,i,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),yn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function _n(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Tn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class En{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Ft._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new En(e)}async getSession(){return vn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,Tn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const kn=new WeakMap;function In(e){const t=Object(r["k"])(e);return kn.has(t)||kn.set(t,En._fromUser(t)),kn.get(t)}const On="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(On,"1"),this.storage.removeItem(On),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const e=Object(r["l"])();return ye(e)||ke(e)}const xn=1e3,An=10;class Rn extends Sn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&xe(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,An):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rn.type="LOCAL";const Nn=Rn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Sn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jn.type="SESSION";const Pn=jn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ln(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Dn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.receivers=[];class Un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Mn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function Vn(e){Fn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return"undefined"!==typeof Fn()["WorkerGlobalScope"]&&"function"===typeof Fn()["importScripts"]}async function Bn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Hn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function zn(){return qn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="firebaseLocalStorageDb",Wn=1,Gn="firebaseLocalStorage",Kn="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jn(e,t){return e.transaction([Gn],t?"readwrite":"readonly").objectStore(Gn)}function Yn(){const e=indexedDB.deleteDatabase($n);return new Xn(e).toPromise()}function Qn(){const e=indexedDB.open($n,Wn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Gn,{keyPath:Kn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Gn)?t(n):(n.close(),await Yn(),t(await Qn()))})})}async function Zn(e,t,n){const r=Jn(e,!0).put({[Kn]:t,value:n});return new Xn(r).toPromise()}async function er(e,t){const n=Jn(e,!1).get(t),r=await new Xn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Jn(e,!0).delete(t);return new Xn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(zn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bn(),!this.activeServiceWorker)return;this.sender=new Un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Hn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Zn(e,On,"1"),await tr(e,On),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>er(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Jn(e,!1).getAll();return new Xn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function ar(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ur().appendChild(r)})}function hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=500,fr=6e4,pr=1e12;class gr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new mr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class mr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=vr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},fr)},dr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=hr("rcb"),br=new P(3e4,6e4),wr="https://www.google.com/recaptcha/api.js?";class _r{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fn().grecaptcha}load(e,t=""){return T(Tr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Fn().grecaptcha):new Promise((n,i)=>{const s=Fn().setTimeout(()=>{i(y(e,"network-request-failed"))},br.get());Fn()[yr]=()=>{Fn().clearTimeout(s),delete Fn()[yr];const r=Fn().grecaptcha;if(!r)return void i(y(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${wr}?${Object(r["x"])({onload:yr,render:"explicit",hl:t})}`;lr(o).catch(()=>{clearTimeout(s),i(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Tr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Er{async load(e){return new gr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="recaptcha",Ir={theme:"light",type:"image"};class Or{constructor(e,t=Object.assign({},Ir),n){this.parameters=t,this.type=kr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Er:new _r,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Fn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(A()&&!qn(),this.auth,"internal-error"),await Sr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cr(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Sr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function xr(e,t,n){const i=Ne(e),s=await Nr(i,t,Object(r["k"])(n));return new Cr(s,e=>Pt(i,e))}async function Ar(e,t,n){const i=Object(r["k"])(e);await Rt(!1,i,"phone");const s=await Nr(i.auth,t,Object(r["k"])(n));return new Cr(s,e=>Dt(i,e))}async function Rr(e,t,n){const i=Object(r["k"])(e),s=await Nr(i.auth,t,Object(r["k"])(n));return new Cr(s,e=>Lt(i,e))}async function Nr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===kr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await wn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function jr(e,t){await At(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Nr(this.auth,e,Object(r["k"])(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dr(e,t){return t?O(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class Lr extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mr(e){return jt(e.auth,new Lr(e),e.bypassAuthState)}function Ur(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Nt(n,new Lr(e),e.bypassAuthState)}async function Fr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),At(n,new Lr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return Fr;case"reauthViaPopup":case"reauthViaRedirect":return Ur;default:v(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new P(2e3,1e4);async function Br(e,t,n){const r=Ne(e);w(e,t,ht);const i=Dr(r,n),s=new $r(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Hr(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,ht);const s=Dr(i.auth,n),o=new $r(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function zr(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,ht);const s=Dr(i.auth,n),o=new $r(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class $r extends Vr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,qr.get())};e()}}$r.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wr="pendingRedirect",Gr=new Map;class Kr extends Vr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const t=await Xr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Xr(e,t){const n=Zr(t),r=Qr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Jr(e,t){return Qr(e)._set(Zr(t),"true")}function Yr(){Gr.clear()}function Qr(e){return O(e._redirectPersistence)}function Zr(e){return pe(Wr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const r=Ne(e);w(e,t,ht);const i=Dr(r,n);return await Jr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ni(e,t,n){return ri(e,t,n)}async function ri(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,ht);const s=Dr(i.auth,n);await Jr(s,i.auth);const o=await ci(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ii(e,t,n){return si(e,t,n)}async function si(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,ht);const s=Dr(i.auth,n);await Rt(!1,i,t.providerId),await Jr(s,i.auth);const o=await ci(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function oi(e,t){return await Ne(e)._initializationPromise,ai(e,t,!1)}async function ai(e,t,n=!1){const r=Ne(e),i=Dr(r,t),s=new Kr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ci(e){const t=Mn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=6e5;class li{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!di(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ui&&this.cachedEventUids.clear(),this.cachedEventUids.has(hi(e))}saveEventToCache(e){this.cachedEventUids.add(hi(e)),this.lastProcessedEventTime=Date.now()}}function hi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function di({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function fi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return di(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mi=/^https?/;async function vi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pi(e);for(const r of t)try{if(yi(r))return}catch(n){}v(e,"unauthorized-domain")}function yi(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!mi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new P(3e4,6e4);function wi(){const e=Fn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function _i(e){return new Promise((t,n)=>{var r,i,s;function o(){wi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wi(),n(y(e,"network-request-failed"))},timeout:bi.get()})}if(null===(i=null===(r=Fn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fn().gapi)||void 0===s?void 0:s.load)){const t=hr("iframefcb");return Fn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},lr("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Ti=null,e})}let Ti=null;function Ei(e){return Ti=Ti||_i(e),Ti}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new P(5e3,15e3),Ii="__/auth/iframe",Oi="emulator/auth/iframe",Si={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ci=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xi(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Oi):`https://${e.config.authDomain}/${Ii}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=Ci.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["x"])(s).slice(1)}`}async function Ai(e){const t=await Ei(e),n=Fn().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:xi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Si,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),s=Fn().setTimeout(()=>{r(i)},ki.get());function o(){Fn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ni=500,ji=600,Pi="_blank",Di="http://localhost";class Li{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mi(e,t,n,i=Ni,s=ji){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ri),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=be(l)?Pi:n),ve(l)&&(t=t||Di,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Oe(l)&&"_self"!==c)return Ui(t||"",c),new Li(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Li(d)}function Ui(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="__/auth/handler",Vi="emulator/auth/handler";function qi(e,t,n,s,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["p"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Bi(e)}?${Object(r["x"])(u).slice(1)}`}function Bi({config:e}){return e.emulator?D(e,Vi):`https://${e.authDomain}/${Fi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="webStorageSupport";class zi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=ai}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=qi(e,t,n,x(),r);return Mi(e,s,Mn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Vn(qi(e,t,n,x(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ai(e),n=new li(e);return t.register("authEvent",t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Hi,{type:Hi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Hi];void 0!==i&&t(!!i),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||ke()}}const $i=zi;class Wi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Gi extends Wi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gi(e)}_finalizeEnroll(e,t,n){return _n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ki{constructor(){}static assertion(e){return Gi._fromCredential(e)}}Ki.FACTOR_ID="phone";var Xi="@firebase/auth",Ji="0.19.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zi(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{T(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),T(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},o=new Re(t,r);return C(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Yi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Xi,Ji,Qi(e)),Object(i["registerVersion"])(Xi,Ji,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e=Object(i["getApp"])()){const t=Object(i["_getProvider"])(e,"auth");return t.isInitialized()?t.getImmediate():S(e,{popupRedirectResolver:$i,persistence:[sr,Nn,Pn]})}Zi("Browser")},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,s=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,T=a.Function,E=a.MessageChannel,k=a.String,I=0,O={},S="onreadystatechange";try{r=a.location}catch(N){}var C=function(e){if(h(O,e)){var t=O[e];delete O[e],t()}},x=function(e){return function(){C(e)}},A=function(e){C(e.data)},R=function(e){a.postMessage(k(e),r.protocol+"//"+r.host)};y&&b||(y=function(e){var t=p(arguments,1);return O[++I]=function(){c(l(e)?e:T(e),void 0,t)},i(I),I},b=function(e){delete O[e]},v?i=function(e){w.nextTick(x(e))}:_&&_.now?i=function(e){_.now(x(e))}:E&&!m?(s=new E,o=s.port2,s.port1.onmessage=A,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,a.addEventListener("message",A,!1)):i=S in g("script")?function(e){f.appendChild(g("script"))[S]=function(){f.removeChild(this),C(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:y,clear:b}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=o(t),c=a(t),u=c.length,l=0;while(u>l)i.f(e,n=c[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},"466d":function(e,t,n){"use strict";var r=n("c65b"),i=n("d784"),s=n("825a"),o=n("50c4"),a=n("577e"),c=n("1d80"),u=n("dc4a"),l=n("8aa5"),h=n("14c3");i("match",(function(e,t,n){return[function(t){var n=c(this),i=void 0==t?void 0:u(t,e);return i?r(i,t,n):new RegExp(t)[e](a(n))},function(e){var r=s(this),i=a(e),c=n(t,r,i);if(c.done)return c.value;if(!r.global)return h(r,i);var u=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=h(r,i))){var g=a(d[0]);f[p]=g,""===g&&(r.lastIndex=l(i,o(r.lastIndex),u)),p++}return 0===p?null:f}]}))},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=s(e),u=i(t,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),s=n("e330"),o=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),h=n("50c4"),d=n("577e"),f=n("1d80"),p=n("8aa5"),g=n("dc4a"),m=n("0cb2"),v=n("14c3"),y=n("b622"),b=y("replace"),w=Math.max,_=Math.min,T=s([].concat),E=s([].push),k=s("".indexOf),I=s("".slice),O=function(e){return void 0===e?e:String(e)},S=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),x=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=C?"$":"$0";return[function(e,n){var r=f(this),s=void 0==e?void 0:g(e,b);return s?i(s,e,r,n):i(t,d(r),e,n)},function(e,i){var o=c(this),a=d(e);if("string"==typeof i&&-1===k(i,s)&&-1===k(i,"$<")){var f=n(t,o,a,i);if(f.done)return f.value}var g=u(i);g||(i=d(i));var y=o.global;if(y){var b=o.unicode;o.lastIndex=0}var S=[];while(1){var C=v(o,a);if(null===C)break;if(E(S,C),!y)break;var x=d(C[0]);""===x&&(o.lastIndex=p(a,h(o.lastIndex),b))}for(var A="",R=0,N=0;N<S.length;N++){C=S[N];for(var j=d(C[0]),P=w(_(l(C.index),a.length),0),D=[],L=1;L<C.length;L++)E(D,O(C[L]));var M=C.groups;if(g){var U=T([j],D,P,a);void 0!==M&&E(U,M);var F=d(r(i,void 0,U))}else F=m(j,a,P,D,M,i);P>=R&&(A+=I(a,R,P)+F,R=P+j.length)}return A+I(a,R)}]}),!x||!S||C)},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},"588e":function(e,t,n){"use strict";n("e0fc")},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return X})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return L})),n.d(t,"_addComponent",(function(){return V})),n.d(t,"_addOrOverwriteComponent",(function(){return q})),n.d(t,"_apps",(function(){return U})),n.d(t,"_clearComponents",(function(){return $})),n.d(t,"_components",(function(){return F})),n.d(t,"_getProvider",(function(){return H})),n.d(t,"_registerComponent",(function(){return B})),n.d(t,"_removeServiceInstance",(function(){return z})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return Y})),n.d(t,"getApps",(function(){return Q})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.11",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",T="@firebase/installations",E="@firebase/installations-compat",k="@firebase/messaging",I="@firebase/messaging-compat",O="@firebase/performance",S="@firebase/performance-compat",C="@firebase/remote-config",x="@firebase/remote-config-compat",A="@firebase/storage",R="@firebase/storage-compat",N="@firebase/firestore",j="@firebase/firestore-compat",P="firebase",D="9.6.1",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[T]:"fire-iid",[E]:"fire-iid-compat",[k]:"fire-fcm",[I]:"fire-fcm-compat",[O]:"fire-perf",[S]:"fire-perf-compat",[C]:"fire-rc",[x]:"fire-rc-compat",[A]:"fire-gcs",[R]:"fire-gcs-compat",[N]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},U=new Map,F=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of U.values())V(n,e);return!0}function H(e,t){return e.container.getProvider(t)}function z(e,t,n=L){H(e,t).clearInstance(n)}function $(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=D;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=U.get(i);if(o){if(Object(s["h"])(e,o.options)&&Object(s["h"])(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of F.values())a.addComponent(r);const c=new K(e,n,a);return U.set(i,c),c}function Y(e=L){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function Q(){return Array.from(U.values())}async function Z(e){const t=e.name;U.has(t)&&(U.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}re("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["l"])()){return/Edge\/\d+/.test(e)}function g(e=Object(s["l"])()){return f()||p(e)}function m(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!g()||Object(s["r"])()}catch(e){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(s["n"])()||h())&&!d()&&m()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={LOCAL:"local",NONE:"none",SESSION:"session"},T=r["p"],E="persistence";function k(e,t){T(Object.values(_).includes(t),e,"invalid-persistence-type"),Object(s["u"])()?T(t!==_.SESSION,e,"unsupported-persistence-type"):Object(s["t"])()?T(t===_.NONE,e,"unsupported-persistence-type"):v()?T(t===_.NONE||t===_.LOCAL&&Object(s["r"])(),e,"unsupported-persistence-type"):T(t===_.NONE||m(),e,"unsupported-persistence-type")}async function I(e){await e._initializationPromise;const t=S(),n=r["v"](E,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function O(e,t){const n=S();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const i=r["v"](E,e,t),s=n.sessionStorage.getItem(i);switch(s){case _.NONE:return[r["L"]];case _.LOCAL:return[r["M"],r["A"]];case _.SESSION:return[r["A"]];default:return[]}}function S(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=r["p"];class x{constructor(){this.browserResolver=r["t"](r["z"]),this.cordovaResolver=r["t"](r["E"]),this.underlyingResolver=null,this._redirectPersistence=r["A"],this._completeRedirectFn=r["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return C(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return e.unwrap()}function R(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return P(e)}function j(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new M(e,r["J"](e,t))}else if(i){const e=P(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function P(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function D(e,t){return t.catch(t=>{throw t instanceof s["c"]&&j(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:N(e),additionalUserInfo:r["I"](e),user:U.getOrCreate(n)}})}async function L(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>D(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=R(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return D(A(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this._delegate=e,this.multiFactor=r["S"](e)}static getOrCreate(e){return U.USER_MAP.has(e)||U.USER_MAP.set(e,new U(e)),U.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return D(this.auth,r["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return L(this.auth,r["P"](this._delegate,e,t))}async linkWithPopup(e){return D(this.auth,r["Q"](this._delegate,e,x))}async linkWithRedirect(e){return await I(r["q"](this.auth)),r["R"](this._delegate,e,x)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return D(this.auth,r["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return L(this.auth,r["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return D(this.auth,r["V"](this._delegate,e,x))}async reauthenticateWithRedirect(e){return await I(r["q"](this.auth)),r["W"](this._delegate,e,x)}sendEmailVerification(e){return r["X"](this._delegate,e)}async unlink(e){return await r["ib"](this._delegate,e),this}updateEmail(e){return r["jb"](this._delegate,e)}updatePassword(e){return r["kb"](this._delegate,e)}updatePhoneNumber(e){return r["lb"](this._delegate,e)}updateProfile(e){return r["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}U.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=r["p"];class V{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;F(n,"invalid-api-key",{appName:e.name});let i=[r["L"]];if("undefined"!==typeof window){i=O(n,e.name);for(const e of[r["M"],r["y"],r["A"]])i.includes(e)||i.push(e)}F(n,"invalid-api-key",{appName:e.name});const s="undefined"!==typeof window?x:void 0;this._delegate=t.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(r["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?U.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["D"](this._delegate,e,t)}applyActionCode(e){return r["x"](this._delegate,e)}checkActionCode(e){return r["B"](this._delegate,e)}confirmPasswordReset(e,t){return r["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return D(this._delegate,r["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["H"](this._delegate,e)}isSignInWithEmailLink(e){return r["N"](this._delegate,e)}async getRedirectResult(){F(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["K"](this._delegate,x);return e?D(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(k(this._delegate,e),e){case _.SESSION:t=r["A"];break;case _.LOCAL:const e=await r["t"](r["M"])._isAvailable();t=e?r["M"]:r["y"];break;case _.NONE:t=r["L"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return D(this._delegate,r["ab"](this._delegate))}signInWithCredential(e){return D(this._delegate,r["bb"](this._delegate,e))}signInWithCustomToken(e){return D(this._delegate,r["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return D(this._delegate,r["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return D(this._delegate,r["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return L(this._delegate,r["fb"](this._delegate,e,t))}async signInWithPopup(e){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),D(this._delegate,r["gb"](this._delegate,e,x))}async signInWithRedirect(e){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),await I(this._delegate),r["hb"](this._delegate,e,x)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function q(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&U.getOrCreate(e));return{next:s,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V.Persistence=_;class B{constructor(){this.providerId="phone",this._delegate=new r["i"](A(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}B.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,B.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H=r["p"];class z{constructor(e,n,i=t["a"].app()){var s;H(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="auth-compat";function W(e){e.INTERNAL.registerComponent(new i["a"]($,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new V(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:B,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:z,TwitterAuthProvider:r["o"],Auth:V,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}W(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},"5c40":function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return et})),n.d(t,"c",(function(){return rt})),n.d(t,"d",(function(){return pn})),n.d(t,"f",(function(){return dt})),n.d(t,"g",(function(){return It})),n.d(t,"h",(function(){return ht})),n.d(t,"i",(function(){return yt})),n.d(t,"j",(function(){return He})),n.d(t,"k",(function(){return Be})),n.d(t,"l",(function(){return kt})),n.d(t,"m",(function(){return Et})),n.d(t,"n",(function(){return bt})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return Ft})),n.d(t,"q",(function(){return R})),n.d(t,"r",(function(){return Xn})),n.d(t,"s",(function(){return Jn})),n.d(t,"t",(function(){return _})),n.d(t,"u",(function(){return Xt})),n.d(t,"v",(function(){return An})),n.d(t,"x",(function(){return L})),n.d(t,"y",(function(){return z})),n.d(t,"z",(function(){return M})),n.d(t,"A",(function(){return $})),n.d(t,"B",(function(){return X})),n.d(t,"C",(function(){return G})),n.d(t,"D",(function(){return ot})),n.d(t,"E",(function(){return w})),n.d(t,"H",(function(){return Rt})),n.d(t,"I",(function(){return Je})),n.d(t,"J",(function(){return S})),n.d(t,"K",(function(){return A})),n.d(t,"O",(function(){return T})),n.d(t,"P",(function(){return an})),n.d(t,"Q",(function(){return zn})),n.d(t,"R",(function(){return Bn})),n.d(t,"S",(function(){return h})),n.d(t,"T",(function(){return Ae}));var r=n("a1e9");n.d(t,"e",(function(){return r["c"]})),n.d(t,"F",(function(){return r["k"]})),n.d(t,"G",(function(){return r["l"]})),n.d(t,"L",(function(){return r["o"]})),n.d(t,"N",(function(){return r["s"]}));var i=n("9ff4");n.d(t,"w",(function(){return i["I"]})),n.d(t,"M",(function(){return i["L"]}));new Set;new Map;function s(e,t,...n){const r=e.vnode.props||i["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=r[e]||i["b"];o?s=n.map(e=>e.trim()):t&&(s=n.map(i["N"]))}let c;let u=r[c=Object(i["M"])(t)]||r[c=Object(i["M"])(Object(i["e"])(t))];!u&&o&&(u=r[c=Object(i["M"])(Object(i["l"])(t))]),u&&pn(u,e,6,s);const l=r[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,pn(l,e,6,s)}}function o(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const a=e.emits;let c={},u=!1;if(!Object(i["p"])(e)){const r=e=>{const n=o(e,t,!0);n&&(u=!0,Object(i["h"])(c,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||u?(Object(i["o"])(a)?a.forEach(e=>c[e]=null):Object(i["h"])(c,a),r.set(e,c),c):(r.set(e,null),null)}function a(e,t){return!(!e||!Object(i["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(i["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(i["k"])(e,Object(i["l"])(t))||Object(i["k"])(e,t))}let c=null,u=null;function l(e){const t=c;return c=e,u=e&&e.type.__scopeId||null,t}function h(e,t=c,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&ut(-1);const i=l(t),s=e(...n);return l(i),r._d&&ut(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function d(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:h,render:d,renderCache:g,data:m,setupState:v,ctx:y,inheritAttrs:b}=e;let w,_;const T=l(e);try{if(4&n.shapeFlag){const e=s||r;w=Ot(d.call(e,e,g,o,v,m,y)),_=u}else{const e=t;0,w=Ot(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),_=t.props?u:f(u)}}catch(k){it.length=0,gn(k,e,1),w=bt(nt)}let E=w;if(_&&!1!==b){const e=Object.keys(_),{shapeFlag:t}=E;e.length&&7&t&&(a&&e.some(i["u"])&&(_=p(_,a)),E=Tt(E,_))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),w=E,l(T),w}const f=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(i["w"])(n))&&((t||(t={}))[n]=e[n]);return t},p=(e,t)=>{const n={};for(const r in e)Object(i["u"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function g(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:c,patchFlag:u}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&u>=0))return!(!i&&!c||c&&c.$stable)||r!==o&&(r?!o||m(r,o,l):!!o);if(1024&u)return!0;if(16&u)return r?m(r,o,l):!!o;if(8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!a(l,n))return!0}}return!1}function m(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!a(n,s))return!0}return!1}function v({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const y=e=>e.__isSuspense;function b(e,t){t&&t.pendingBranch?Object(i["o"])(e)?t.effects.push(...e):t.effects.push(e):Mn(e)}function w(e,t){if(Ut){let n=Ut.provides;const r=Ut.parent&&Ut.parent.provides;r===n&&(n=Ut.provides=Object.create(r)),n[e]=t}else 0}function _(e,t,n=!1){const r=Ut||c;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(i["p"])(t)?t.call(r.proxy):t}else 0}function T(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $(()=>{e.isMounted=!0}),K(()=>{e.isUnmounting=!0}),e}const E=[Function,Array],k={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:E,onEnter:E,onAfterEnter:E,onEnterCancelled:E,onBeforeLeave:E,onLeave:E,onAfterLeave:E,onLeaveCancelled:E,onBeforeAppear:E,onAppear:E,onAfterAppear:E,onAppearCancelled:E},setup(e,{slots:t}){const n=Ft(),i=T();let s;return()=>{const o=t.default&&R(t.default(),!0);if(!o||!o.length)return;const a=Object(r["p"])(e),{mode:c}=a;const u=o[0];if(i.isLeaving)return C(u);const l=x(u);if(!l)return C(u);const h=S(l,a,i,n);A(l,h);const d=n.subTree,f=d&&x(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==nt&&(!pt(l,f)||p)){const e=S(f,a,i,n);if(A(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},C(u);"in-out"===c&&l.type!==nt&&(e.delayLeave=(e,t,n)=>{const r=O(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return u}}},I=k;function O(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function S(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),w=O(n,e),_=(e,t)=>{e&&pn(e,r,9,t)},T={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const s=w[b];s&&pt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=c,r=u,s=l;if(!n.isMounted){if(!i)return;t=m||c,r=v||u,s=y||l}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return S(e,t,n,r)}};return T}function C(e){if(P(e))return e=Tt(e),e.children=null,e}function x(e){return P(e)?e.children?e.children[0]:void 0:e}function A(e,t){6&e.shapeFlag&&e.component?A(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function R(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===et?(128&s.patchFlag&&r++,n=n.concat(R(s.children,t))):(t||s.type!==nt)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function N(e){return Object(i["p"])(e)?{setup:e,name:e.name}:e}const j=e=>!!e.type.__asyncLoader;const P=e=>e.type.__isKeepAlive;RegExp,RegExp;function D(e,t){return Object(i["o"])(e)?e.some(e=>D(e,t)):Object(i["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function L(e,t){U(e,"a",t)}function M(e,t){U(e,"da",t)}function U(e,t,n=Ut){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(B(t,r,n),n){let e=n.parent;while(e&&e.parent)P(e.parent.vnode)&&F(r,t,n,e),e=e.parent}}function F(e,t,n,r){const s=B(t,e,r,!0);X(()=>{Object(i["K"])(r[t],s)},n)}function V(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function q(e){return 128&e.shapeFlag?e.ssContent:e}function B(e,t,n=Ut,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Object(r["i"])(),Vt(n);const s=pn(t,n,e,i);return qt(),Object(r["m"])(),s});return i?s.unshift(o):s.push(o),o}}const H=e=>(t,n=Ut)=>(!$t||"sp"===e)&&B(e,t,n),z=H("bm"),$=H("m"),W=H("bu"),G=H("u"),K=H("bum"),X=H("um"),J=H("sp"),Y=H("rtg"),Q=H("rtc");function Z(e,t=Ut){B("ec",e,t)}let ee=!0;function te(e){const t=se(e),n=e.proxy,s=e.ctx;ee=!1,t.beforeCreate&&re(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:T,unmounted:E,render:k,renderTracked:I,renderTriggered:O,errorCaptured:S,serverPrefetch:C,expose:x,inheritAttrs:A,components:R,directives:N,filters:j}=t,P=null;if(h&&ne(h,s,P,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];Object(i["p"])(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(i["v"])(t)&&(e.data=Object(r["k"])(t))}if(ee=!0,a)for(const w in a){const e=a[w],t=Object(i["p"])(e)?e.bind(n,n):Object(i["p"])(e.get)?e.get.bind(n,n):i["d"];0;const o=!Object(i["p"])(e)&&Object(i["p"])(e.set)?e.set.bind(n):i["d"],c=Object(r["c"])({get:t,set:o});Object.defineProperty(s,w,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)ie(u[r],s,n,r);if(l){const e=Object(i["p"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{w(t,e[t])})}function D(e,t){Object(i["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&re(d,e,"c"),D(z,f),D($,p),D(W,g),D(G,m),D(L,v),D(M,y),D(Z,S),D(Q,I),D(Y,O),D(K,_),D(X,E),D(J,C),Object(i["o"])(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});k&&e.render===i["d"]&&(e.render=k),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),N&&(e.directives=N)}function ne(e,t,n=i["d"],s=!1){Object(i["o"])(e)&&(e=le(e));for(const o in e){const n=e[o];let a;a=Object(i["v"])(n)?"default"in n?_(n.from||o,n.default,!0):_(n.from||o):_(n),Object(r["g"])(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function re(e,t,n){pn(Object(i["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ie(e,t,n,r){const s=r.includes(".")?Gn(n,r):()=>n[r];if(Object(i["D"])(e)){const n=t[e];Object(i["p"])(n)&&zn(s,n)}else if(Object(i["p"])(e))zn(s,e.bind(n));else if(Object(i["v"])(e))if(Object(i["o"])(e))e.forEach(e=>ie(e,t,n,r));else{const r=Object(i["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(i["p"])(r)&&zn(s,r,e)}else 0}function se(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>oe(c,e,o,!0)),oe(c,t,o)):c=t,s.set(t,c),c}function oe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&oe(e,s,n,!0),i&&i.forEach(t=>oe(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=ae[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ae={data:ce,props:de,emits:de,methods:de,computed:de,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:de,directives:de,watch:fe,provide:ce,inject:ue};function ce(e,t){return t?e?function(){return Object(i["h"])(Object(i["p"])(e)?e.call(this,this):e,Object(i["p"])(t)?t.call(this,this):t)}:t:e}function ue(e,t){return de(le(e),le(t))}function le(e){if(Object(i["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function de(e,t){return e?Object(i["h"])(Object(i["h"])(Object.create(null),e),t):t}function fe(e,t){if(!e)return t;if(!t)return e;const n=Object(i["h"])(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function pe(e,t,n,s=!1){const o={},a={};Object(i["g"])(a,gt,1),e.propsDefaults=Object.create(null),me(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:Object(r["n"])(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ge(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=Object(r["p"])(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;me(e,t,o,a)&&(h=!0);for(const s in u)t&&(Object(i["k"])(t,s)||(r=Object(i["l"])(s))!==s&&Object(i["k"])(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ve(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&Object(i["k"])(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=t[s];if(l)if(Object(i["k"])(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=Object(i["e"])(s);o[t]=ve(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&Object(r["r"])(e,"set","$attrs")}function me(e,t,n,s){const[o,c]=e.propsOptions;let u,l=!1;if(t)for(let r in t){if(Object(i["z"])(r))continue;const h=t[r];let d;o&&Object(i["k"])(o,d=Object(i["e"])(r))?c&&c.includes(d)?(u||(u={}))[d]=h:n[d]=h:a(e.emitsOptions,r)||r in s&&h===s[r]||(s[r]=h,l=!0)}if(c){const t=Object(r["p"])(n),s=u||i["b"];for(let r=0;r<c.length;r++){const a=c[r];n[a]=ve(o,t,a,s[a],e,!Object(i["k"])(s,a))}}return l}function ve(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=Object(i["k"])(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&Object(i["p"])(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Vt(s),r=i[n]=e.call(null,t),qt())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==Object(i["l"])(n)||(r=!0))}return r}function ye(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!Object(i["p"])(e)){const r=e=>{u=!0;const[n,r]=ye(e,t,!0);Object(i["h"])(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i["a"]),i["a"];if(Object(i["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(i["e"])(o[h]);be(e)&&(a[e]=i["b"])}else if(o){0;for(const e in o){const t=Object(i["e"])(e);if(be(t)){const n=o[e],r=a[t]=Object(i["o"])(n)||Object(i["p"])(n)?{type:n}:n;if(r){const e=Te(Boolean,r.type),n=Te(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||Object(i["k"])(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function be(e){return"$"!==e[0]}function we(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function _e(e,t){return we(e)===we(t)}function Te(e,t){return Object(i["o"])(t)?t.findIndex(t=>_e(t,e)):Object(i["p"])(t)&&_e(t,e)?0:-1}const Ee=e=>"_"===e[0]||"$stable"===e,ke=e=>Object(i["o"])(e)?e.map(Ot):[Ot(e)],Ie=(e,t,n)=>{const r=h((...e)=>ke(t(...e)),n);return r._c=!1,r},Oe=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ee(s))continue;const n=e[s];if(Object(i["p"])(n))t[s]=Ie(s,n,r);else if(null!=n){0;const e=ke(n);t[s]=()=>e}}},Se=(e,t)=>{const n=ke(t);e.slots.default=()=>n},Ce=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Object(r["p"])(t),Object(i["g"])(t,"_",n)):Oe(t,e.slots={})}else e.slots={},t&&Se(e,t);Object(i["g"])(e.slots,gt,1)},xe=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(i["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,Oe(t,s)),a=t}else t&&(Se(e,t),a={default:1});if(o)for(const i in s)Ee(i)||i in a||delete s[i]};function Ae(e,t){const n=c;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i["b"]]=t[o];Object(i["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&Kn(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Re(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&(Object(r["i"])(),pn(u,n,8,[e.el,c,e,t]),Object(r["m"])())}}function Ne(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let je=0;function Pe(e,t){return function(n,r=null){null==r||Object(i["v"])(r)||(r=null);const s=Ne(),o=new Set;let a=!1;const c=s.app={_uid:je++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Yn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(i["p"])(e.install)?(o.add(e),e.install(c,...t)):Object(i["p"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){const l=bt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Zt(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function De(e,t,n,s,o=!1){if(Object(i["o"])(e))return void e.forEach((e,r)=>De(e,t&&(Object(i["o"])(t)?t[r]:t),n,s,o));if(j(s)&&!o)return;const a=4&s.shapeFlag?Zt(s.component)||s.component.proxy:s.el,c=o?null:a,{i:u,r:l}=e;const h=t&&t.r,d=u.refs===i["b"]?u.refs={}:u.refs,f=u.setupState;if(null!=h&&h!==l&&(Object(i["D"])(h)?(d[h]=null,Object(i["k"])(f,h)&&(f[h]=null)):Object(r["g"])(h)&&(h.value=null)),Object(i["p"])(l))fn(l,u,12,[c,d]);else{const t=Object(i["D"])(l),s=Object(r["g"])(l);if(t||s){const s=()=>{if(e.f){const n=t?d[l]:l.value;o?Object(i["o"])(n)&&Object(i["K"])(n,a):Object(i["o"])(n)?n.includes(a)||n.push(a):t?d[l]=[a]:(l.value=[a],e.k&&(d[e.k]=l.value))}else t?(d[l]=c,Object(i["k"])(f,l)&&(f[l]=c)):Object(r["g"])(l)&&(l.value=c,e.k&&(d[e.k]=c))};c?(s.id=-1,qe(s,n)):s()}else 0}}let Le=!1;const Me=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,Ue=e=>8===e.nodeType;function Fe(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:s,parentNode:o,remove:a,insert:c,createComment:u}}=e,l=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),void Fn();Le=!1,h(t.firstChild,e,null,null,null),Fn(),Le&&console.error("Hydration completed but contains mismatches.")},h=(n,r,i,a,c,u=!1)=>{const l=Ue(n)&&"["===n.data,v=()=>g(n,r,i,a,c,l),{type:y,ref:b,shapeFlag:w}=r,_=n.nodeType;r.el=n;let T=null;switch(y){case tt:3!==_?T=v():(n.data!==r.children&&(Le=!0,n.data=r.children),T=s(n));break;case nt:T=8!==_||l?v():s(n);break;case rt:if(1===_){T=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=T.outerHTML),t===r.staticCount-1&&(r.anchor=T),T=s(T);return T}T=v();break;case et:T=l?p(n,r,i,a,c,u):v();break;default:if(1&w)T=1!==_||r.type.toLowerCase()!==n.tagName.toLowerCase()?v():d(n,r,i,a,c,u);else if(6&w){r.slotScopeIds=c;const e=o(n);if(t(r,e,null,i,a,Me(e),u),T=l?m(n):s(n),j(r)){let t;l?(t=bt(et),t.anchor=T?T.previousSibling:e.lastChild):t=3===n.nodeType?Et(""):bt("div"),t.el=n,r.component.subTree=t}}else 64&w?T=8!==_?v():r.type.hydrate(n,r,i,a,c,u,e,f):128&w&&(T=r.type.hydrate(n,r,i,a,Me(o(n)),c,u,e,h))}return null!=b&&De(b,null,a,r),T},d=(e,t,n,s,o,c)=>{c=c||!!t.dynamicChildren;const{type:u,props:l,patchFlag:h,shapeFlag:d,dirs:p}=t,g="input"===u&&p||"option"===u;if(g||-1!==h){if(p&&Re(t,null,n,"created"),l)if(g||!c||48&h)for(const t in l)(g&&t.endsWith("value")||Object(i["w"])(t)&&!Object(i["z"])(t))&&r(e,t,null,l[t],!1,void 0,n);else l.onClick&&r(e,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&At(u,n,t),p&&Re(t,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||p)&&b(()=>{u&&At(u,n,t),p&&Re(t,null,n,"mounted")},s),16&d&&(!l||!l.innerHTML&&!l.textContent)){let r=f(e.firstChild,t,e,n,s,o,c);while(r){Le=!0;const e=r;r=r.nextSibling,a(e)}}else 8&d&&e.textContent!==t.children&&(Le=!0,e.textContent=t.children)}return e.nextSibling},f=(e,t,r,i,s,o,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let l=0;l<u;l++){const t=a?c[l]:c[l]=Ot(c[l]);if(e)e=h(e,t,i,s,o,a);else{if(t.type===tt&&!t.children)continue;Le=!0,n(null,t,r,null,i,s,Me(r),o)}}return e},p=(e,t,n,r,i,a)=>{const{slotScopeIds:l}=t;l&&(i=i?i.concat(l):l);const h=o(e),d=f(s(e),t,h,n,r,i,a);return d&&Ue(d)&&"]"===d.data?s(t.anchor=d):(Le=!0,c(t.anchor=u("]"),h,d),d)},g=(e,t,r,i,c,u)=>{if(Le=!0,t.el=null,u){const t=m(e);while(1){const n=s(e);if(!n||n===t)break;a(n)}}const l=s(e),h=o(e);return a(e),n(null,t,h,l,r,i,Me(h),c),l},m=e=>{let t=0;while(e)if(e=s(e),e&&Ue(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return s(e);t--}return e};return[l,h]}function Ve(){}const qe=b;function Be(e){return ze(e)}function He(e){return ze(e,Fe)}function ze(e,t){Ve();const n=Object(i["i"])();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=i["d"],cloneNode:b,insertStaticContent:w}=e,_=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!pt(e,t)&&(r=Y(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case tt:T(e,t,n,r);break;case nt:E(e,t,n,r);break;case rt:null==e&&k(t,n,r,o);break;case et:L(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,Z)}null!=l&&i&&De(l,e&&e.ref,s,t||e,!t)},T=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},E=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=w(e.children,t,n,r)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=m(e),s(e,n,r),e=i;s(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=m(e),o(e),e=n;o(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},C=(e,t,n,r,o,u,l,h)=>{let d,p;const{type:g,props:m,shapeFlag:v,transition:y,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==b&&-1===w)d=e.el=b(e.el);else{if(d=e.el=c(e.type,u,m&&m.is,m),8&v?f(d,e.children):16&v&&A(e.children,d,null,r,o,u&&"foreignObject"!==g,l,h),_&&Re(e,null,r,"created"),m){for(const t in m)"value"===t||Object(i["z"])(t)||a(d,t,null,m[t],u,e.children,r,o,J);"value"in m&&a(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&At(p,r,e)}x(d,e,e.scopeId,l,r)}_&&Re(e,null,r,"beforeMount");const T=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;T&&y.beforeEnter(d),s(d,t,n),((p=m&&m.onVnodeMounted)||T||_)&&qe(()=>{p&&At(p,r,e),T&&y.enter(d),_&&Re(e,null,r,"mounted")},o)},x=(e,t,n,r,i)=>{if(n&&y(e,n),r)for(let s=0;s<r.length;s++)y(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?St(e[u]):Ot(e[u]);_(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=t;l|=16&e.patchFlag;const p=e.props||i["b"],g=t.props||i["b"];let m;n&&$e(n,!1),(m=g.onVnodeBeforeUpdate)&&At(m,n,t,e),d&&Re(t,e,n,"beforeUpdate"),n&&$e(n,!0);const v=s&&"foreignObject"!==t.type;if(h?N(e.dynamicChildren,h,u,n,r,v,o):c||B(e,t,u,null,n,r,v,o,!1),l>0){if(16&l)D(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,J)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=h||D(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&qe(()=>{m&&At(m,n,t,e),d&&Re(t,e,n,"updated")},r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===et||!pt(c,u)||70&c.shapeFlag)?p(c.el):n;_(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,c)=>{if(n!==r){for(const u in r){if(Object(i["z"])(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,J)}if(n!==i["b"])for(const u in n)Object(i["z"])(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,J);"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),A(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&We(e,t,!0)):B(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):U(t,n,r,i,s,o,c):F(e,t,c)},U=(e,t,n,r,i,s,o)=>{const a=e.component=Mt(e,r,i);if(P(e)&&(a.ctx.renderer=Z),Wt(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=bt(nt);E(null,e,t,n)}}else V(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(g(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,t,n);r.next=t,Pn(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,$e(e,!1),n?(n.el=l.el,q(e,n,c)):n=l,r&&Object(i["n"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&At(t,u,n,l),$e(e,!0);const f=d(e);0;const g=e.subTree;e.subTree=f,_(g,f,p(g.el),Y(g),e,o,a),n.el=f.el,null===h&&v(e,f.el),s&&qe(s,o),(t=n.props&&n.props.onVnodeUpdated)&&qe(()=>At(t,u,n,l),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:f}=e,p=j(t);if($e(e,!1),l&&Object(i["n"])(l),!p&&(r=u&&u.onVnodeBeforeMount)&&At(r,f,t),$e(e,!0),c&&te){const n=()=>{e.subTree=d(e),te(c,e.subTree,e,o,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=d(e);0,_(null,r,n,s,e,o,a),t.el=r.el}if(h&&qe(h,o),!p&&(r=u&&u.onVnodeMounted)){const e=t;qe(()=>At(r,f,e),o)}256&t.shapeFlag&&e.a&&qe(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r["b"](u,()=>Nn(e.update),e.scope),h=e.update=l.run.bind(l);h.id=e.uid,$e(e,!0),h()},q=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ge(e,t.props,i,n),xe(e,t.children,n),Object(r["i"])(),Un(void 0,e.update),Object(r["m"])()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void z(u,h,n,r,i,s,o,a,c);if(256&d)return void H(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&f(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&f(n,""),16&p&&A(h,n,r,i,s,o,a,c))},H=(e,t,n,r,s,o,a,c,u)=>{e=e||i["a"],t=t||i["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?St(t[f]):Ot(t[f]);_(e[f],r,n,null,s,o,a,c,u)}l>h?J(e,s,o,!0,!1,d):A(t,n,r,s,o,a,c,u,d)},z=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?St(t[l]):Ot(t[l]);if(!pt(r,i))break;_(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?St(t[f]):Ot(t[f]);if(!pt(r,i))break;_(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)_(null,t[l]=u?St(t[l]):Ot(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?St(t[l]):Ot(t[l]);null!=e.key&&m.set(e.key,l)}let v,y=0;const b=f-g+1;let w=!1,T=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(y>=b){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===E[v-g]&&pt(r,t[v])){i=v;break}void 0===i?W(r,s,o,!0):(E[i-g]=l+1,i>=T?T=i:w=!0,_(r,t[i],n,null,s,o,a,c,u),y++)}const k=w?Ge(E):i["a"];for(v=k.length-1,l=b-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?_(null,i,n,d,s,o,a,c,u):w&&(v<0||l!==k[v]?$(i,n,d,2):v--)}}},$=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void $(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,Z);if(a===et){s(o,t,n);for(let e=0;e<u.length;e++)$(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===rt)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),qe(()=>c.enter(o),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,()=>{a(),i&&i()})};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&De(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!j(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&At(g,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Re(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,Z,r):u&&(s!==et||h>0&&64&h)?J(u,t,n,!1,!0):(s===et&&384&h||!i&&16&l)&&J(c,t,n),r&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&qe(()=>{g&&At(g,t,e),f&&Re(e,null,t,"unmounted")},n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===et)return void K(n,r);if(t===rt)return void O(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},K=(e,t)=>{let n;while(e!==t)n=m(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&Object(i["n"])(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&qe(c,t),qe(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),Fn(),t._vnode=e},Z={p:_,um:W,m:$,r:G,mt:U,mc:A,pc:B,pbc:N,n:Y,o:e};let ee,te;return t&&([ee,te]=t(Z)),{render:Q,hydrate:ee,createApp:Pe(Q,ee)}}function $e({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function We(e,t,n=!1){const r=e.children,s=t.children;if(Object(i["o"])(r)&&Object(i["o"])(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=St(s[i]),t.el=e.el),n||We(e,t))}}function Ge(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Ke=e=>e.__isTeleport;const Xe="components";function Je(e,t){return Qe(Xe,e,!0,t)||e}const Ye=Symbol();function Qe(e,t,n=!0,r=!1){const s=c||Ut;if(s){const n=s.type;if(e===Xe){const e=nn(n);if(e&&(e===t||e===Object(i["e"])(t)||e===Object(i["f"])(Object(i["e"])(t))))return n}const o=Ze(s[e]||n[e],t)||Ze(s.appContext[e],t);return!o&&r?n:o}}function Ze(e,t){return e&&(e[t]||e[Object(i["e"])(t)]||e[Object(i["f"])(Object(i["e"])(t))])}const et=Symbol(void 0),tt=Symbol(void 0),nt=Symbol(void 0),rt=Symbol(void 0),it=[];let st=null;function ot(e=!1){it.push(st=e?null:[])}function at(){it.pop(),st=it[it.length-1]||null}let ct=1;function ut(e){ct+=e}function lt(e){return e.dynamicChildren=ct>0?st||i["a"]:null,at(),ct>0&&st&&st.push(e),e}function ht(e,t,n,r,i,s){return lt(yt(e,t,n,r,i,s,!0))}function dt(e,t,n,r,i){return lt(bt(e,t,n,r,i,!0))}function ft(e){return!!e&&!0===e.__v_isVNode}function pt(e,t){return e.type===t.type&&e.key===t.key}const gt="__vInternal",mt=({key:e})=>null!=e?e:null,vt=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(i["D"])(e)||Object(r["g"])(e)||Object(i["p"])(e)?{i:c,r:e,k:t,f:!!n}:e:null;function yt(e,t=null,n=null,r=0,s=null,o=(e===et?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mt(t),ref:t&&vt(t),scopeId:u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Ct(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(i["D"])(n)?8:16),ct>0&&!a&&st&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&st.push(l),l}const bt=wt;function wt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ye||(e=nt),ft(e)){const r=Tt(e,t,!0);return n&&Ct(r,n),r}if(sn(e)&&(e=e.__vccOpts),t){t=_t(t);let{class:e,style:n}=t;e&&!Object(i["D"])(e)&&(t.class=Object(i["I"])(e)),Object(i["v"])(n)&&(Object(r["d"])(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),t.style=Object(i["J"])(n))}const c=Object(i["D"])(e)?1:y(e)?128:Ke(e)?64:Object(i["v"])(e)?4:Object(i["p"])(e)?2:0;return yt(e,t,n,s,o,c,a,!0)}function _t(e){return e?Object(r["d"])(e)||gt in e?Object(i["h"])({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?xt(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&mt(c),ref:t&&t.ref?n&&s?Object(i["o"])(s)?s.concat(vt(t)):[s,vt(t)]:vt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==et?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Et(e=" ",t=0){return bt(tt,null,e,t)}function kt(e,t){const n=bt(rt,null,e);return n.staticCount=t,n}function It(e="",t=!1){return t?(ot(),dt(nt,null,e)):bt(nt,null,e)}function Ot(e){return null==e||"boolean"===typeof e?bt(nt):Object(i["o"])(e)?bt(et,null,e.slice()):"object"===typeof e?St(e):bt(tt,null,String(e))}function St(e){return null===e.el||e.memo?e:Tt(e)}function Ct(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(i["o"])(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Ct(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||gt in t?3===r&&c&&(1===c.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=c}}else Object(i["p"])(t)?(t={default:t,_ctx:c},n=32):(t=String(t),64&r?(n=16,t=[Et(t)]):n=8);e.children=t,e.shapeFlag|=n}function xt(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(i["I"])([t.class,r.class]));else if("style"===e)t.style=Object(i["J"])([t.style,r.style]);else if(Object(i["w"])(e)){const n=t[e],s=r[e];n===s||Object(i["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function At(e,t,n,r=null){pn(e,t,7,[n,r])}function Rt(e,t,n,r){let s;const o=n&&n[r];if(Object(i["o"])(e)||Object(i["D"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(i["v"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Nt=e=>e?Bt(e)?Zt(e)||e.proxy:Nt(e.parent):null,jt=Object(i["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nt(e.parent),$root:e=>Nt(e.root),$emit:e=>e.emit,$options:e=>se(e),$forceUpdate:e=>()=>Nn(e.update),$nextTick:e=>An.bind(e.proxy),$watch:e=>Wn.bind(e)}),Pt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i["b"]&&Object(i["k"])(s,t))return c[t]=1,s[t];if(o!==i["b"]&&Object(i["k"])(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&Object(i["k"])(h,t))return c[t]=3,a[t];if(n!==i["b"]&&Object(i["k"])(n,t))return c[t]=4,n[t];ee&&(c[t]=0)}}const d=jt[t];let f,p;return d?("$attrs"===t&&Object(r["q"])(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i["b"]&&Object(i["k"])(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,Object(i["k"])(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==i["b"]&&Object(i["k"])(s,t))s[t]=n;else if(r!==i["b"]&&Object(i["k"])(r,t))r[t]=n;else if(Object(i["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i["b"]&&Object(i["k"])(e,a)||t!==i["b"]&&Object(i["k"])(t,a)||(c=o[0])&&Object(i["k"])(c,a)||Object(i["k"])(r,a)||Object(i["k"])(jt,a)||Object(i["k"])(s.config.globalProperties,a)}};const Dt=Ne();let Lt=0;function Mt(e,t,n){const a=e.type,c=(t?t.appContext:e.appContext)||Dt,u={uid:Lt++,vnode:e,type:a,parent:t,appContext:c,root:null,next:null,subTree:null,effect:null,update:null,scope:new r["a"](!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(c.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ye(a,c),emitsOptions:o(a,c),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:a.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=t?t.root:u,u.emit=s.bind(null,u),e.ce&&e.ce(u),u}let Ut=null;const Ft=()=>Ut||c,Vt=e=>{Ut=e,e.scope.on()},qt=()=>{Ut&&Ut.scope.off(),Ut=null};function Bt(e){return 4&e.vnode.shapeFlag}let Ht,zt,$t=!1;function Wt(e,t=!1){$t=t;const{props:n,children:r}=e.vnode,i=Bt(e);pe(e,n,i,t),Ce(e,r);const s=i?Gt(e,t):void 0;return $t=!1,s}function Gt(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Object(r["h"])(new Proxy(e.ctx,Pt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Qt(e):null;Vt(e),Object(r["i"])();const o=fn(s,e,0,[e.props,n]);if(Object(r["m"])(),qt(),Object(i["y"])(o)){if(o.then(qt,qt),t)return o.then(n=>{Kt(e,n,t)}).catch(t=>{gn(t,e,0)});e.asyncDep=o}else Kt(e,o,t)}else Jt(e,t)}function Kt(e,t,n){Object(i["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(i["v"])(t)&&(e.setupState=Object(r["j"])(t)),Jt(e,n)}const Xt=()=>!Ht;function Jt(e,t,n){const s=e.type;if(!e.render){if(!t&&Ht&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:o},r),a);s.render=Ht(t,c)}}e.render=s.render||i["d"],zt&&zt(e)}Vt(e),Object(r["i"])(),te(e),Object(r["m"])(),qt()}function Yt(e){return new Proxy(e.attrs,{get(t,n){return Object(r["q"])(e,"get","$attrs"),t[n]}})}function Qt(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Yt(e))},slots:e.slots,emit:e.emit,expose:t}}function Zt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Object(r["j"])(Object(r["h"])(e.exposed)),{get(t,n){return n in t?t[n]:n in jt?jt[n](e):void 0}}))}const en=/(?:^|[-_])(\w)/g,tn=e=>e.replace(en,e=>e.toUpperCase()).replace(/[-_]/g,"");function nn(e){return Object(i["p"])(e)&&e.displayName||e.name}function rn(e,t,n=!1){let r=nn(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?tn(r):n?"App":"Anonymous"}function sn(e){return Object(i["p"])(e)&&"__vccOpts"in e}const on=[];function an(e,...t){Object(r["i"])();const n=on.length?on[on.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=cn();if(i)fn(i,n,11,[e+t.join(""),n&&n.proxy,s.map(({vnode:e})=>`at <${rn(n,e.type)}>`).join("\n"),s]);else{const n=["[Vue warn]: "+e,...t];s.length&&n.push("\n",...un(s)),console.warn(...n)}Object(r["m"])()}function cn(){let e=on[on.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function un(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...ln(e))}),t}function ln({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=" at <"+rn(e.component,e.type,r),s=">"+n;return e.props?[i,...hn(e.props),s]:[i+s]}function hn(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...dn(n,e[n]))}),n.length>3&&t.push(" ..."),t}function dn(e,t,n){return Object(i["D"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:Object(r["g"])(t)?(t=dn(e,Object(r["p"])(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(i["p"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Object(r["p"])(t),n?t:[e+"=",t])}function fn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){gn(s,t,n)}return i}function pn(e,t,n,r){if(Object(i["p"])(e)){const s=fn(e,t,n,r);return s&&Object(i["y"])(s)&&s.catch(e=>{gn(e,t,n)}),s}const s=[];for(let i=0;i<e.length;i++)s.push(pn(e[i],t,n,r));return s}function gn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void fn(o,null,10,[e,i,s])}mn(e,n,i,r)}function mn(e,t,n,r=!0){console.error(e)}let vn=!1,yn=!1;const bn=[];let wn=0;const _n=[];let Tn=null,En=0;const kn=[];let In=null,On=0;const Sn=Promise.resolve();let Cn=null,xn=null;function An(e){const t=Cn||Sn;return e?t.then(this?e.bind(this):e):t}function Rn(e){let t=wn+1,n=bn.length;while(t<n){const r=t+n>>>1,i=Vn(bn[r]);i<e?t=r+1:n=r}return t}function Nn(e){bn.length&&bn.includes(e,vn&&e.allowRecurse?wn+1:wn)||e===xn||(null==e.id?bn.push(e):bn.splice(Rn(e.id),0,e),jn())}function jn(){vn||yn||(yn=!0,Cn=Sn.then(qn))}function Pn(e){const t=bn.indexOf(e);t>wn&&bn.splice(t,1)}function Dn(e,t,n,r){Object(i["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),jn()}function Ln(e){Dn(e,Tn,_n,En)}function Mn(e){Dn(e,In,kn,On)}function Un(e,t=null){if(_n.length){for(xn=t,Tn=[...new Set(_n)],_n.length=0,En=0;En<Tn.length;En++)Tn[En]();Tn=null,En=0,xn=null,Un(e,t)}}function Fn(e){if(kn.length){const e=[...new Set(kn)];if(kn.length=0,In)return void In.push(...e);for(In=e,In.sort((e,t)=>Vn(e)-Vn(t)),On=0;On<In.length;On++)In[On]();In=null,On=0}}const Vn=e=>null==e.id?1/0:e.id;function qn(e){yn=!1,vn=!0,Un(e),bn.sort((e,t)=>Vn(e)-Vn(t));i["d"];try{for(wn=0;wn<bn.length;wn++){const e=bn[wn];e&&!1!==e.active&&fn(e,null,14)}}finally{wn=0,bn.length=0,Fn(e),vn=!1,Cn=null,(bn.length||_n.length||kn.length)&&qn(e)}}function Bn(e,t){return $n(e,null,{flush:"post"})}const Hn={};function zn(e,t,n){return $n(e,t,n)}function $n(e,t,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:c}=i["b"]){const u=Ut;let l,h,d=!1,f=!1;if(Object(r["g"])(e)?(l=()=>e.value,d=!!e._shallow):Object(r["e"])(e)?(l=()=>e,s=!0):Object(i["o"])(e)?(f=!0,d=e.some(r["e"]),l=()=>e.map(e=>Object(r["g"])(e)?e.value:Object(r["e"])(e)?Kn(e):Object(i["p"])(e)?fn(e,u,2):void 0)):l=Object(i["p"])(e)?t?()=>fn(e,u,2):()=>{if(!u||!u.isUnmounted)return h&&h(),pn(e,u,3,[p])}:i["d"],t&&s){const e=l;l=()=>Kn(e())}let p=e=>{h=y.onStop=()=>{fn(e,u,4)}};if($t)return p=i["d"],t?n&&pn(t,u,3,[l(),f?[]:void 0,p]):l(),i["d"];let g=f?[]:Hn;const m=()=>{if(y.active)if(t){const e=y.run();(s||d||(f?e.some((e,t)=>Object(i["j"])(e,g[t])):Object(i["j"])(e,g)))&&(h&&h(),pn(t,u,3,[e,g===Hn?void 0:g,p]),g=e)}else y.run()};let v;m.allowRecurse=!!t,v="sync"===o?m:"post"===o?()=>qe(m,u&&u.suspense):()=>{!u||u.isMounted?Ln(m):m()};const y=new r["b"](l,v);return t?n?m():g=y.run():"post"===o?qe(y.run.bind(y),u&&u.suspense):y.run(),()=>{y.stop(),u&&u.scope&&Object(i["K"])(u.scope.effects,y)}}function Wn(e,t,n){const r=this.proxy,s=Object(i["D"])(e)?e.includes(".")?Gn(r,e):()=>r[e]:e.bind(r,r);let o;Object(i["p"])(t)?o=t:(o=t.handler,n=t);const a=Ut;Vt(this);const c=$n(s,o.bind(r),n);return a?Vt(a):qt(),c}function Gn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Kn(e,t){if(!Object(i["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Object(r["g"])(e))Kn(e.value,t);else if(Object(i["o"])(e))for(let n=0;n<e.length;n++)Kn(e[n],t);else if(Object(i["B"])(e)||Object(i["t"])(e))e.forEach(e=>{Kn(e,t)});else if(Object(i["x"])(e))for(const n in e)Kn(e[n],t);return e}function Xn(e,t,n){const r=arguments.length;return 2===r?Object(i["v"])(t)&&!Object(i["o"])(t)?ft(t)?bt(e,null,[t]):bt(e,t):bt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ft(n)&&(n=[n]),bt(e,t,n))}Symbol("");function Jn(){return void 0}const Yn="3.2.26"},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var g,m=h(arguments[o++]),v=d?p(a(m),d(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},6547:function(e,t,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},m=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),T=c(w.has),E=c(w.set);r=function(e,t){if(T(w,e))throw new m(g);return t.facade=e,E(w,e,t),t},i=function(e){return _(w,e)||{}},s=function(e){return T(w,e)}}else{var k=f("state");p[k]=!0,r=function(e,t){if(h(e,k))throw new m(g);return t.facade=e,l(e,k,t),t},i=function(e){return h(e,k)?e[k]:{}},s=function(e){return h(e,k)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return rt})),n.d(t,"d",(function(){return nt}));var r=n("7a23");n("abc5");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>i?Symbol(e):"_vr_"+e,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const m=/\/$/,v=e=>e.replace(m,"");function y(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=O(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function _(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&T(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function T(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function O(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var S,C;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(C||(C={}));function x(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const A=/^[^#]+#/;function R(e,t){return e.replace(A,"#")+t}function N(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const j=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=N(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function D(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function M(e,t){L.set(e,t)}function U(e){const t=L.get(e);return L.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function q(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?C.forward:C.back:C.unknown})})};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:j()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?j():null}}function H(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=f({},i.value,t.state,{forward:e,scroll:j()});s(o.current,o,!0);const a=f({},B(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function z(e){e=x(e);const t=H(e),n=q(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:R.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function $(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=s("nf");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function J(e,t){return f(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||Q;if(h!==Q){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},se=/[a-zA-Z0-9_]/;function oe(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ae(e,t,n){const r=te(oe(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw J(1,{location:e});o=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw J(1,{location:e,currentLocation:t});o=i.record.name,a=f({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ge=/#/g,me=/&/g,ve=/\//g,ye=/=/g,be=/\?/g,we=/\+/g,_e=/%5B/g,Te=/%5D/g,Ee=/%5E/g,ke=/%60/g,Ie=/%7B/g,Oe=/%7C/g,Se=/%7D/g,Ce=/%20/g;function xe(e){return encodeURI(""+e).replace(Oe,"|").replace(_e,"[").replace(Te,"]")}function Ae(e){return xe(e).replace(Ie,"{").replace(Se,"}").replace(Ee,"^")}function Re(e){return xe(e).replace(we,"%2B").replace(Ce,"+").replace(ge,"%23").replace(me,"%26").replace(ke,"`").replace(Ie,"{").replace(Se,"}").replace(Ee,"^")}function Ne(e){return Re(e).replace(ye,"%3D")}function je(e){return xe(e).replace(ge,"%23").replace(be,"%3F")}function Pe(e){return null==e?"":je(e).replace(ve,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(we," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Re(e)):[r&&Re(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(J(4,{from:n,to:t})):e instanceof Error?a(e):$(e)?a(J(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function qe(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Be(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Ve(c,n,r,s,e))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Ve(c,n,r,s,e)()}))}}return i}function Be(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=Object(r["n"])(c),n=Object(r["n"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["B"])(e.to))),s=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(T.bind(null,r));if(o>-1)return o;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&s[s.length-1].path!==a?s.findIndex(T.bind(null,e[t-2])):o}),o=Object(r["b"])(()=>s.value>-1&&Ge(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return We(n)?t[Object(r["B"])(e.replace)?"replace":"push"](Object(r["B"])(e.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const ze=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=Object(r["v"])(He(e)),{options:i}=Object(r["n"])(c),s=Object(r["b"])(()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$e=ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Je=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["n"])(l),s=Object(r["b"])(()=>e.route||i.value),c=Object(r["n"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["u"])(a,c+1),Object(r["u"])(o,u),Object(r["u"])(l,s);const h=Object(r["w"])();return Object(r["D"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&T(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:i});const l=o.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["m"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Ye(n.default,{Component:g,route:i})||g}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Je;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Le,i=e.stringifyQuery||Me,s=e.history;const o=Fe(),a=Fe(),d=Fe(),m=Object(r["z"])(G);let v=G;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,e=>""+e),T=p.bind(null,Pe),E=p.bind(null,De);function k(e,n){let r,i;return W(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map(e=>e.record)}function C(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=f({},r||m.value),"string"===typeof e){const i=y(n,e,r.path),o=t.resolve({path:i.path},r),a=s.createHref(i.fullPath);return f(i,o,{params:E(o.params),hash:De(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:y(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:T(e.params)}),r.params=T(r.params)}const a=t.resolve(o,r),c=e.hash||"";a.params=w(E(a.params));const u=b(i,f({},e,{hash:Ae(c),path:a.path})),l=s.createHref(u);return f({fullPath:u,hash:c,query:i===Me?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function A(e){return"string"===typeof e?y(n,e,m.value.path):f({},e)}function R(e,t){if(v!==e)return J(8,{from:t,to:e})}function N(e){return V(e)}function L(e){return N(f(A(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=v=x(e),r=m.value,s=e.state,o=e.force,a=!0===e.replace,c=F(n);if(c)return V(f(A(c),{state:s,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&_(i,r,n)&&(l=J(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(f(A(e.to),{state:s,force:o,replace:a}),t||u)}else e=z(u,r,!0,a,s);return H(u,r,e),e})}function q(e,t){const n=R(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,s]=tt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=q.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of o.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ve(i,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=qe(s,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const r of d.list())r(e,t,n)}function z(e,t,n,r,i){const o=R(e,t);if(o)return o;const a=t===G,c=h?history.state:{};n&&(r||a?s.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),m.value=e,re(e,t,n,a),ne()}let $;function K(){$=s.listen((e,t,n)=>{const r=x(e),i=F(r);if(i)return void V(f(i,{replace:!0}),r).catch(g);v=r;const o=m.value;h&&M(D(o.fullPath,n.delta),j()),B(r,o).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===S.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),ee(e,r,o))).then(e=>{e=e||z(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===S.pop&&Y(e,20)&&s.go(-1,!1)),H(r,o,e)}).catch(g)})}let X,Q=Fe(),Z=Fe();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return X&&m.value!==G?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){X||(X=!0,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,i,s){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!i&&U(D(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>o(t,n,a)).then(e=>e&&P(e)).catch(e=>ee(e,t,n))}const ie=e=>s.go(e);let se;const oe=new Set,ae={currentRoute:m,addRoute:k,removeRoute:I,hasRoute:C,getRoutes:O,resolve:x,options:e,push:N,replace:L,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",$e),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["B"])(m)}),h&&!se&&m.value===G&&(se=!0,N(s.location).catch(e=>{0}));const n={};for(const s in G)n[s]=Object(r["b"])(()=>m.value[s]);e.provide(c,t),e.provide(u,Object(r["v"])(n)),e.provide(l,m);const i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(v=G,$&&$(),m.value=G,se=!1,X=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>T(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>T(e,a))||i.push(a))}return[n,r,i]}function nt(){return Object(r["n"])(c)}function rt(){return Object(r["n"])(u)}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),e!==r?(h?!g&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"b",(function(){return r["e"]})),n.d(t,"v",(function(){return r["F"]})),n.d(t,"w",(function(){return r["G"]})),n.d(t,"z",(function(){return r["L"]})),n.d(t,"B",(function(){return r["N"]})),n.d(t,"p",(function(){return r["w"]})),n.d(t,"A",(function(){return r["M"]})),n.d(t,"a",(function(){return r["b"]})),n.d(t,"d",(function(){return r["f"]})),n.d(t,"e",(function(){return r["g"]})),n.d(t,"f",(function(){return r["h"]})),n.d(t,"g",(function(){return r["i"]})),n.d(t,"h",(function(){return r["l"]})),n.d(t,"i",(function(){return r["m"]})),n.d(t,"j",(function(){return r["n"]})),n.d(t,"k",(function(){return r["o"]})),n.d(t,"l",(function(){return r["p"]})),n.d(t,"m",(function(){return r["r"]})),n.d(t,"n",(function(){return r["t"]})),n.d(t,"o",(function(){return r["v"]})),n.d(t,"q",(function(){return r["x"]})),n.d(t,"r",(function(){return r["z"]})),n.d(t,"s",(function(){return r["B"]})),n.d(t,"t",(function(){return r["D"]})),n.d(t,"u",(function(){return r["E"]})),n.d(t,"x",(function(){return r["H"]})),n.d(t,"y",(function(){return r["I"]})),n.d(t,"D",(function(){return r["Q"]})),n.d(t,"E",(function(){return r["S"]})),n.d(t,"F",(function(){return r["T"]})),n.d(t,"c",(function(){return de})),n.d(t,"C",(function(){return re})),n.d(t,"G",(function(){return ce})),n.d(t,"H",(function(){return oe}));var r=n("5c40"),i=n("9ff4");n("a1e9");const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=new Map,c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=a.get(e);if(!s){const t=o.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}a.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const r=e.style,s=Object(i["D"])(n);if(n&&!s){for(const e in n)d(r,e,n[e]);if(t&&!Object(i["D"])(t))for(const e in t)null==n[e]&&d(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const h=/\s*!important$/;function d(e,t,n){if(Object(i["o"])(n))n.forEach(n=>d(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=g(e,t);h.test(n)?e.setProperty(Object(i["l"])(r),n.replace(h,""),"important"):e[r]=n}}const f=["Webkit","Moz","ms"],p={};function g(e,t){const n=p[t];if(n)return n;let r=Object(i["e"])(t);if("filter"!==r&&r in e)return p[t]=r;r=Object(i["f"])(r);for(let i=0;i<f.length;i++){const n=f[i]+r;if(n in e)return p[t]=n}return t}const m="http://www.w3.org/1999/xlink";function v(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(m,t.slice(6,t.length)):e.setAttributeNS(m,t,n);else{const r=Object(i["C"])(t);null==n||r&&!Object(i["m"])(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function y(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if("boolean"===r)return void(e[t]=Object(i["m"])(n));if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let b=Date.now,w=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);w=!!(e&&Number(e[1])<=53)}let _=0;const T=Promise.resolve(),E=()=>{_=0},k=()=>_||(T.then(E),_=b());function I(e,t,n,r){e.addEventListener(t,n,r)}function O(e,t,n,r){e.removeEventListener(t,n,r)}function S(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=x(t);if(r){const o=s[t]=A(r,i);I(e,n,o,a)}else o&&(O(e,n,o,a),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function x(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(i["l"])(e.slice(2)),t]}function A(e,t){const n=e=>{const i=e.timeStamp||b();(w||i>=n.attached-1)&&Object(r["d"])(R(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function R(e,t){if(Object(i["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const N=/^on[a-z]/,j=(e,t,n,r,s=!1,o,a,c,h)=>{"class"===t?u(e,r,s):"style"===t?l(e,n,r):Object(i["w"])(t)?Object(i["u"])(t)||S(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,r,s))?y(e,t,r,o,a,c,h):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),v(e,t,r,s))};function P(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&Object(i["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!Object(i["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",L="animation",M=(e,{slots:t})=>Object(r["r"])(r["a"],q(e),t);M.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(M.props=Object(i["h"])({},r["a"].props,U),(e,t=[])=>{Object(i["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),V=e=>!!e&&(Object(i["o"])(e)?e.some(e=>e.length>1):e.length>1);function q(e){const t={};for(const i in e)i in U||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,g=B(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:T,onBeforeAppear:E=y,onAppear:k=b,onAppearCancelled:I=w}=t,O=(e,t,n)=>{$(e,t?h:c),$(e,t?l:a),n&&n()},S=(e,t)=>{$(e,p),$(e,f),t&&t()},C=e=>(t,n)=>{const i=e?k:b,s=()=>O(t,e,n);F(i,[t,s]),W(()=>{$(t,e?u:o),z(t,e?h:c),V(i)||K(t,r,m,s)})};return Object(i["h"])(t,{onBeforeEnter(e){F(y,[e]),z(e,o),z(e,a)},onBeforeAppear(e){F(E,[e]),z(e,u),z(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const n=()=>S(e,t);z(e,d),Q(),z(e,f),W(()=>{$(e,d),z(e,p),V(_)||K(e,r,v,n)}),F(_,[e,n])},onEnterCancelled(e){O(e,!1),F(w,[e])},onAppearCancelled(e){O(e,!0),F(I,[e])},onLeaveCancelled(e){S(e),F(T,[e])}})}function B(e){if(null==e)return null;if(Object(i["v"])(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=Object(i["N"])(e);return t}function z(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function $(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let G=0;function K(e,t,n,r){const i=e._endId=++G,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=X(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function X(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(D+"Delay"),s=r(D+"Duration"),o=J(i,s),a=r(L+"Delay"),c=r(L+"Duration"),u=J(a,c);let l=null,h=0,d=0;t===D?o>0&&(l=D,h=o,d=s.length):t===L?u>0&&(l=L,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?D:L:null,d=l?l===D?s.length:c.length:0);const f=l===D&&/\b(transform|all)(,|$)/.test(n[D+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>Y(t)+Y(e[n])))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return Object(i["o"])(t)?e=>Object(i["n"])(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Z(s);const o=r||s.props&&"number"===s.props.type;I(e,t?"change":"input",t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():o&&(r=Object(i["N"])(r)),e._assign(r)}),n&&I(e,"change",()=>{e.value=e.value.trim()}),t||(I(e,"compositionstart",ee),I(e,"compositionend",te),I(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(i["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ie=["ctrl","shift","alt","meta"],se={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ie.some(n=>e[n+"Key"]&&!t.includes(n))},oe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=se[t[e]];if(r&&r(n,t))return}return e(n,...r)},ae={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ce=(e,t)=>n=>{if(!("key"in n))return;const r=Object(i["l"])(n.key);return t.some(e=>e===r||ae[e]===r)?e(n):void 0};const ue=Object(i["h"])({patchProp:j},c);let le;function he(){return le||(le=Object(r["k"])(ue))}const de=(...e)=>{const t=he().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=fe(e);if(!r)return;const s=t._component;Object(i["p"])(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function fe(e){if(Object(i["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),s=r.Object;e.exports=function(e){return s(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=w(),void 0===t?n:s(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),T="keys",E="values",k="entries",I=function(){return this};e.exports=function(e,t,n,o,p,m,O){c(n,t,o);var S,C,x,A=function(e){if(e===p&&D)return D;if(!w&&e in j)return j[e];switch(e){case T:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",N=!1,j=e.prototype,P=j[_]||j["@@iterator"]||p&&j[p],D=!w&&P||A(p),L="Array"==t&&j.entries||P;if(L&&(S=u(L.call(new e)),S!==Object.prototype&&S.next&&(s||u(S)===b||(l?l(S,b):a(S[_])||f(S,_,I)),h(S,R,!0,!0),s&&(g[R]=I))),v&&p==E&&P&&P.name!==E&&(!s&&y?d(j,"name",E):(N=!0,D=function(){return i(P,this)})),p)if(C={values:A(E),keys:m?D:A(T),entries:A(k)},O)for(x in C)(w||N||!(x in j))&&f(j,x,C[x]);else r({target:t,proto:!0,forced:w||N},C);return s&&!O||j[_]===D||f(j,_,D,{name:p}),g[t]=D,C}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["i"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["g"],ErrorFactory:r["b"],deepExtend:r["i"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",g="0.1.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){Object(s["registerVersion"])(p,g,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;m()},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},"854a":function(e,t,n){var r,i;(function(s){r=[n("1157")],i=function(e){return function(){var t,n,r,i=0,s={error:"error",info:"info",success:"success",warning:"warning"},o={clear:f,remove:p,error:a,getContainer:c,info:u,options:{},subscribe:l,success:h,version:"2.1.4",warning:d};return o;function a(e,t,n){return w({type:s.error,iconClass:_().iconClasses.error,message:e,optionsOverride:n,title:t})}function c(n,r){return n||(n=_()),t=e("#"+n.containerId),t.length||r&&(t=v(n)),t}function u(e,t,n){return w({type:s.info,iconClass:_().iconClasses.info,message:e,optionsOverride:n,title:t})}function l(e){n=e}function h(e,t,n){return w({type:s.success,iconClass:_().iconClasses.success,message:e,optionsOverride:n,title:t})}function d(e,t,n){return w({type:s.warning,iconClass:_().iconClasses.warning,message:e,optionsOverride:n,title:t})}function f(e,n){var r=_();t||c(r),m(e,r,n)||g(r)}function p(n){var r=_();t||c(r),n&&0===e(":focus",n).length?T(n):t.children().length&&t.remove()}function g(n){for(var r=t.children(),i=r.length-1;i>=0;i--)m(e(r[i]),n)}function m(t,n,r){var i=!(!r||!r.force)&&r.force;return!(!t||!i&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){T(t)}}),!0)}function v(n){return t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass),t.appendTo(e(n.target)),t}function y(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function b(e){n&&n(e)}function w(n){var s=_(),o=n.iconClass||s.iconClass;if("undefined"!==typeof n.optionsOverride&&(s=e.extend(s,n.optionsOverride),o=n.optionsOverride.iconClass||o),!R(s,n)){i++,t=c(s,!0);var a=null,u=e("<div/>"),l=e("<div/>"),h=e("<div/>"),d=e("<div/>"),f=e(s.closeHtml),p={intervalId:null,hideEta:null,maxHideTime:null},g={toastId:i,state:"visible",startTime:new Date,options:s,map:n};return v(),E(),w(),b(g),s.debug&&console&&console.log(g),u}function m(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(){k(),O(),S(),C(),x(),A(),I(),y()}function y(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}u.attr("aria-live",e)}function w(){s.closeOnHover&&u.hover(P,j),!s.onclick&&s.tapToDismiss&&u.click(N),s.closeButton&&f&&f.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),s.onCloseClick&&s.onCloseClick(e),N(!0)})),s.onclick&&u.click((function(e){s.onclick(e),N()}))}function E(){u.hide(),u[s.showMethod]({duration:s.showDuration,easing:s.showEasing,complete:s.onShown}),s.timeOut>0&&(a=setTimeout(N,s.timeOut),p.maxHideTime=parseFloat(s.timeOut),p.hideEta=(new Date).getTime()+p.maxHideTime,s.progressBar&&(p.intervalId=setInterval(D,10)))}function k(){n.iconClass&&u.addClass(s.toastClass).addClass(o)}function I(){s.newestOnTop?t.prepend(u):t.append(u)}function O(){if(n.title){var e=n.title;s.escapeHtml&&(e=m(n.title)),l.append(e).addClass(s.titleClass),u.append(l)}}function S(){if(n.message){var e=n.message;s.escapeHtml&&(e=m(n.message)),h.append(e).addClass(s.messageClass),u.append(h)}}function C(){s.closeButton&&(f.addClass(s.closeClass).attr("role","button"),u.prepend(f))}function x(){s.progressBar&&(d.addClass(s.progressClass),u.prepend(d))}function A(){s.rtl&&u.addClass("rtl")}function R(e,t){if(e.preventDuplicates){if(t.message===r)return!0;r=t.message}return!1}function N(t){var n=t&&!1!==s.closeMethod?s.closeMethod:s.hideMethod,r=t&&!1!==s.closeDuration?s.closeDuration:s.hideDuration,i=t&&!1!==s.closeEasing?s.closeEasing:s.hideEasing;if(!e(":focus",u).length||t)return clearTimeout(p.intervalId),u[n]({duration:r,easing:i,complete:function(){T(u),clearTimeout(a),s.onHidden&&"hidden"!==g.state&&s.onHidden(),g.state="hidden",g.endTime=new Date,b(g)}})}function j(){(s.timeOut>0||s.extendedTimeOut>0)&&(a=setTimeout(N,s.extendedTimeOut),p.maxHideTime=parseFloat(s.extendedTimeOut),p.hideEta=(new Date).getTime()+p.maxHideTime)}function P(){clearTimeout(a),p.hideEta=0,u.stop(!0,!0)[s.showMethod]({duration:s.showDuration,easing:s.showEasing})}function D(){var e=(p.hideEta-(new Date).getTime())/p.maxHideTime*100;d.width(e+"%")}}function _(){return e.extend({},y(),o.options)}function T(e){t||(t=c()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),r=void 0))}}()}.apply(t,r),void 0===i||(e.exports=i)})(n("07d6"))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Cr})),n.d(t,"b",(function(){return Ar})),n.d(t,"c",(function(){return xr})),n.d(t,"d",(function(){return Nr})),n.d(t,"e",(function(){return Rr})),n.d(t,"f",(function(){return jr})),n.d(t,"g",(function(){return Pr})),n.d(t,"h",(function(){return Or})),n.d(t,"i",(function(){return Sr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},E=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function k(e){e:{var t=Bn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function I(e){return Array.prototype.concat.apply([],arguments)}function O(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e){return/^[\s\xa0]*$/.test(e)}var C,x=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return-1!=e.indexOf(t)}function R(e,t){return e<t?-1:e>t?1:0}e:{var N=a.navigator;if(N){var j=N.userAgent;if(j){C=j;break e}}C=""}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function D(e){const t={};for(const n in e)t[n]=e[n];return t}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function U(e){return U[" "](e),e}function F(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}U[" "]=c;var V,q=A(C,"Opera"),B=A(C,"Trident")||A(C,"MSIE"),H=A(C,"Edge"),z=H||B,$=A(C,"Gecko")&&!(A(C.toLowerCase(),"webkit")&&!A(C,"Edge"))&&!(A(C,"Trident")||A(C,"MSIE"))&&!A(C,"Edge"),W=A(C.toLowerCase(),"webkit")&&!A(C,"Edge");function G(){var e=a.document;return e?e.documentMode:void 0}e:{var K="",X=function(){var e=C;return $?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):q?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(X&&(K=X?X[1]:""),B){var J=G();if(null!=J&&J>parseFloat(K)){V=String(J);break e}}V=K}var Y,Q={};function Z(){return F((function(){let e=0;const t=x(String(V)).split("."),n=x("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=R(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==i[2].length,0==s[2].length)||R(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&B){var ee=G();Y=ee||(parseInt(V,10)||void 0)}else Y=void 0;var te=Y,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{U(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},y(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=T(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function ge(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ge(e,t[s],n,r,i);return null}return n=Ie(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}var t=Te;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Ie(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Ie(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Te(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Ee(e){return e=e[fe],e instanceof le?e:null}var ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(e){return"function"===typeof e?e:(e[ke]||(e[ke]=function(t){return e.handleEvent(t)}),e[ke])}function Oe(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Se(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ce(o,r,!0,t)&&i}if(o=t.g=e,i=Ce(o,r,!0,t)&&i,i=Ce(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ce(o,r,!1,t)&&i}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(Oe,b),Oe.prototype[oe]=!0,Oe.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Oe.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Oe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=a.JSON.stringify;function Ae(){var e=Fe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=je.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ne,je=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Pe,e=>e.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){a.setTimeout(()=>{throw e},0)}function Le(e,t){Ne||Me(),Ue||(Ne(),Ue=!0),Fe.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Ne=function(){e.then(Ve)}}var Ue=!1,Fe=new Re;function Ve(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){De(n)}var t=je;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ue=!1}function qe(e,t){Oe.call(this),this.h=e||1,this.g=t||a,this.j=m(this.kb,this),this.l=Date.now()}function Be(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ze(e){e.g=He(()=>{e.g=null,e.i&&(e.i=!1,ze(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(qe,Oe),r=qe.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Se(this,"tick"),this.da&&(Be(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qe.Z.M.call(this),Be(this),delete this.g};class $e extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(e){b.call(this),this.h=e,this.g={}}y(We,b);var Ge=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(Ge[0]=n.toString()),n=Ge);for(var i=0;i<n.length;i++){var s=ge(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Xe(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Ye(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xe(n)}catch(a){return t}}We.prototype.M=function(){We.Z.M.call(this),Xe(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new Oe}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();Se(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Se(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(st,re),nt.STAT_EVENT="statevent",y(at,re),nt.Na="timingevent",y(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function gt(){}ft.prototype.h=null;var mt,vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new We(this),this.P=Et,e=z?125:void 0,this.W=new qe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}y(yt,re),y(bt,re),y(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var Et=45e3,kt={},It={};function Ot(e,t,n){e.K=1,e.v=Yt($t(t)),e.s=n,e.U=!0,St(e,null)}function St(e,t){e.F=Date.now(),Rt(e),e.A=$t(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Tt,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new $e(m(e.Ia,e,e.g),e.O)),Ke(e.V,e.g,"readystatechange",e.gb),t=e.H?D(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Ye(e.j,e.u,e.A,e.m,e.X,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function xt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==It){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==kt){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}Ct(e)&&r!=It&&r!=kt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Pt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?kt:(r+=1,r+n>t.length?It:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.Y=Date.now()+e.P,Nt(e,e.P)}function Nt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(m(e.eb,e),t)}function jt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||pr(e.l,e)}function Dt(e){jt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.W),Xe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((e.J||n.g==e)&&fr(n),!S(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(A(e,"spdy")||A(e,"quic")||A(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Jt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){En(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(jt(a),Rt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)E(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Ft(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ft)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Vt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];qt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],qt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Kn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Kn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),jt(this);var n=this.g.ba();this.N=n;t:if(Ct(this)){var r=Xn(this.g);e="";var i=r.length,s=4==Kn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Pt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Dt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.U?(xt(this,h,o),z&&this.i&&3==h&&(Ke(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Lt(this,o)),4==h&&Dt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Dt(this),Pt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Kn(this.g),t=this.g.ga();this.C<t.length&&(jt(this),xt(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.I=!0,Dt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Dt(this),this.o=2,Pt(this)):Nt(this,this.Y-e)},r=Ft.prototype,r.R=function(){Vt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Vt(this),this.g.concat()},r.get=function(e,t){return qt(this.h,e)?this.h[e]:t},r.set=function(e,t){qt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Bt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zt){this.g=void 0!==t?t:e.g,Wt(this,e.j),this.s=e.s,Gt(this,e.i),Kt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Ft(t.g),n.h=t.h),Xt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.g=!!t,Wt(this,n[1]||"",!0),this.s=en(n[2]||""),Gt(this,n[3]||"",!0),Kt(this,n[4]),this.l=en(n[5]||"",!0),Xt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function $t(e){return new zt(e)}function Wt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Gt(e,t,n){e.i=n?en(t,!0):t}function Kt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xt(e,t,n){t instanceof un?(e.h=t,gn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Jt(e,t,n){e.h.set(t,n)}function Yt(e){return Jt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qt(e){return e instanceof zt?$t(e):new zt(e,void 0)}function Zt(e,t,n,r){var i=new zt(null,void 0);return e&&Wt(i,e),t&&Gt(i,t),n&&Kt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Ft,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),qt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,qt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vt(e)))}function dn(e,t){return ln(e),t=pn(e,t),qt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),O(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){E(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=I(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=I(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var mn=class{constructor(e,t){this.h=e,this.g=t}};function vn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Tn(e,t){e.g?e.g.add(t):e.h=t}function En(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function kn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function In(){}function On(){this.g=new In}function Sn(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let i=e;l(e)&&(i=xe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cn(e,t){const n=new Je;if(a.Image){const r=new Image;r.onload=v(xn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(xn,n,r,"TestLoadImage: error",!1,t),r.onabort=v(xn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(xn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function xn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function An(e){this.l=e.$b||null,this.j=e.ib||!1}function Rn(e,t){Oe.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},In.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},In.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(An,ft),An.prototype.g=function(){return new Rn(this.l,this.j)},An.prototype.i=function(e){return function(){return e}}({}),y(Rn,Oe);var Nn=0;function jn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Dn(e)}function Dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Rn.prototype,r.open=function(e,t){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Dn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Nn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pn(this):Dn(this),3==this.readyState&&jn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Pn(this))},r.Ta=function(e){this.g&&(this.response=e,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(e){Oe.call(this),this.headers=new Ft,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}y(Mn,Oe);var Un="",Fn=/^https?$/i,Vn=["POST","PUT"];function qn(e){return B&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Bn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zn(e),Wn(e)}function zn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function $n(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Kn(e)||2!=e.ba()))if(e.v&&4==Kn(e))He(e.Fa,0,e);else if(Se(e,"readystatechange"),4==Kn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Bt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Fn.test(i?i.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var c=2<Kn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",zn(e)}}finally{Wn(e)}}}function Wn(e,t){if(e.g){Gn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Gn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Kn(e){return e.g?e.g.readyState:0}function Xn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Un:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Jn(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Yn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Jt(e,t,n))}function Qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Je,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qn("baseRetryDelayMs",5e3,e),this.$a=Qn("retryDelaySeedMs",1e4,e),this.Ya=Qn("forwardChannelMaxRetries",2,e),this.ra=Qn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(e&&e.concurrentRequestLimit),this.Ca=new On,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=$t(e.F);Jt(n,"SID",e.J),Jt(n,"RID",t),Jt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Yt($t(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Rt(t)}vr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new mn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,Le(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(m(e.Ha,e,t),gr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=$t(e.F);Jt(r,"SID",e.J),Jt(r,"RID",n),Jt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Yn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Tn(e.i,n),Ot(n,r,t)}function ar(e,t){e.j&&Ut({},(function(e,n){Jt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{Sn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Le(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(m(e.Ga,e),gr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=$t(e.oa);Jt(t,"RID","rpc"),Jt(t,"SID",e.J),Jt(t,"CI",e.N?"0":"1"),Jt(t,"AID",e.U),ar(e,t),Jt(t,"TYPE","xmlhttp"),e.o&&e.s&&Yn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Yt($t(t)),n.s=null,n.U=!0,St(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,En(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Se(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:mr(e,5);break;case 4:mr(e,10);break;case 3:mr(e,6);break;default:mr(e,2)}}function gr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function mr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Wt(n,"https"),Yt(n)),Cn(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),vr(e),nr(e)}function vr(e){e.G=0,e.I=-1,e.j&&(0==kn(e.i).length&&0==e.l.length||(e.i.i.length=0,O(e.l),e.l.length=0),e.j.ua())}function yr(e,t,n){let r=Qt(n);if(""!=r.i)t&&Gt(r,t+"."+r.i),Kt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&P(e.aa,(function(e,t){Jt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Jt(r,t,n),Jt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new An({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function _r(){if(B&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Tr(e,t){Oe.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ir(this)}function Er(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function kr(){bt.call(this),this.status=1}function Ir(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?pt(this.u):pt(mt),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Hn(this,s)}e=n||"";const i=new Ft(this.headers);r&&Ut(r,(function(e,t){i.set(t,e)})),r=k(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=T(Vn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?$n(this):this.cb())},r.cb=function(){$n(this)},r.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ln(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=D(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=$t(this.F),Jt(n,"RID",e),Jt(n,"CVER",22),this.D&&Jt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),Tn(this.i,i),this.Ra&&Jt(n,"TYPE","init"),this.ja?(Jt(n,"$req",t),Jt(n,"SID","null"),i.$=!0,Ot(i,n,null)):Ot(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(m(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Tr(e,t)},y(Tr,Oe),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Le(m(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yr(e,null,e.W),ir(e)},Tr.prototype.close=function(){er(this.g)},Tr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=xe(e),rr(this.g,t)):rr(this.g,e)},Tr.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Tr.Z.M.call(this)},y(Er,yt),y(kr,bt),y(Ir,wr),Ir.prototype.xa=function(){Se(this.g,"a")},Ir.prototype.wa=function(e){Se(this.g,new Er(e))},Ir.prototype.va=function(e){Se(this.g,new kr(e))},Ir.prototype.ua=function(){Se(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",gt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Oe.prototype.listen=Oe.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Or=s.createWebChannelTransport=function(){return new _r},Sr=s.getStatEventTarget=function(){return it()},Cr=s.ErrorCode=ht,xr=s.EventType=dt,Ar=s.Event=nt,Rr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=s.FetchXmlHttpFactory=An,jr=s.WebChannel=gt,Pr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),s=n("577e"),o=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,T=void 0!==/()??/.exec("")[1],E=w||T||_||h||d;E&&(g=function(e){var t,n,i,a,c,h,d,E=this,k=l(E),I=s(e),O=k.raw;if(O)return O.lastIndex=E.lastIndex,t=r(g,O,I),E.lastIndex=O.lastIndex,t;var S=k.groups,C=_&&E.sticky,x=r(o,E),A=E.source,R=0,N=I;if(C&&(x=y(x,"y",""),-1===v(x,"g")&&(x+="g"),N=b(I,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==m(I,E.lastIndex-1))&&(A="(?: "+A+")",N=" "+N,R++),n=new RegExp("^(?:"+A+")",x)),T&&(n=new RegExp("^"+A+"$(?!\\s)",x)),w&&(i=E.lastIndex),a=r(p,C?n:E,N),C?a?(a.input=b(a.input,R),a[0]=b(a[0],R),a.index=E.lastIndex,E.lastIndex+=a[0].length):E.lastIndex=0:w&&a&&(E.lastIndex=E.global?a.index+a[0].length:i),T&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&S)for(a.groups=h=u(null),c=0;c<S.length;c++)d=S[c],h[d[0]]=a[d[1]];return a}),e.exports=g},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,s=Object.create(i.prototype),o=new x(r||[]);return s._invoke=I(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(A([])));_&&_!==n&&r.call(_,s)&&(b=_);var T=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,s,o,a){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function I(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return R()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=O(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function A(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:t,done:!0}}return v.prototype=y,c(T,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},E(k.prototype),c(k.prototype,o,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new k(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(T),c(T,a,"Generator"),c(T,s,(function(){return this})),c(T,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",y=i.TypeError,b=p>=51||!s((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),w=d("concat"),_=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:o(e)},T=!b||!w;r({target:"Array",proto:!0,forced:T},{concat:function(e){var t,n,r,i,s,o=c(this),a=h(o,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?o:arguments[t],_(s)){if(i=u(s),d+i>m)throw y(v);for(n=0;n<i;n++,d++)n in s&&l(a,d,s[n])}else{if(d>=m)throw y(v);l(a,d++,s)}return a.length=d,a}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(i(n,e));throw u(a(e)+" is not iterable")}},"9ab4":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;t.f=i?u:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:s(+!u,n)}),o(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return P})),n.d(t,"p",(function(){return U})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return D})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return q})),n.d(t,"w",(function(){return C})),n.d(t,"x",(function(){return W})),n.d(t,"y",(function(){return B})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return v})),n.d(t,"B",(function(){return L})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return F})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return w})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return R})),n.d(t,"L",(function(){return _})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return se})),n.d(t,"O",(function(){return $}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=F(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return F(e)||q(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(F(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=P(e),r=P(t),n||r)return!(!n||!r)&&y(e,t);if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>b(e,t))}const _=e=>null==e?"":P(e)||q(e)&&(e.toString===H||!U(e.toString))?JSON.stringify(e,T,2):String(e),T=(e,t)=>t&&t.__v_isRef?T(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!q(t)||P(t)||W(t)?t:String(t),E={},k=[],I=()=>{},O=()=>!1,S=/^on[^a-z]/,C=e=>S.test(e),x=e=>e.startsWith("onUpdate:"),A=Object.assign,R=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},N=Object.prototype.hasOwnProperty,j=(e,t)=>N.call(e,t),P=Array.isArray,D=e=>"[object Map]"===z(e),L=e=>"[object Set]"===z(e),M=e=>e instanceof Date,U=e=>"function"===typeof e,F=e=>"string"===typeof e,V=e=>"symbol"===typeof e,q=e=>null!==e&&"object"===typeof e,B=e=>q(e)&&U(e.then)&&U(e.catch),H=Object.prototype.toString,z=e=>H.call(e),$=e=>z(e).slice(8,-1),W=e=>"[object Object]"===z(e),G=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,Y=X(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,Z=X(e=>e.replace(Q,"-$1").toLowerCase()),ee=X(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=X(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oe;const ae=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a1e9:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return $e})),n.d(t,"d",(function(){return xe})),n.d(t,"e",(function(){return Se})),n.d(t,"f",(function(){return Ce})),n.d(t,"g",(function(){return Le})),n.d(t,"h",(function(){return Re})),n.d(t,"i",(function(){return I})),n.d(t,"j",(function(){return He})),n.d(t,"k",(function(){return Ee})),n.d(t,"l",(function(){return Me})),n.d(t,"m",(function(){return S})),n.d(t,"n",(function(){return ke})),n.d(t,"o",(function(){return Ue})),n.d(t,"p",(function(){return Ae})),n.d(t,"q",(function(){return C})),n.d(t,"r",(function(){return R})),n.d(t,"s",(function(){return qe}));var r=n("9ff4");let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&g)>0,l=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~g,i.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const b=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),O(),g=1<<++p,p<=m?h(this):T(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,S(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const k=[];function I(){k.push(E),E=!1}function O(){k.push(E),E=!0}function S(){const e=k.pop();E=void 0===e||e}function C(e,t,n){if(!x())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;A(i,s)}function x(){return E&&void 0!==y}function A(e,t){let n=!1;p<=m?l(e)||(e.n|=g,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function R(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(w)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(w)));break;case"set":Object(r["t"])(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&N(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);N(c(e))}}function N(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const j=Object(r["H"])("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),D=V(),L=V(!1,!0),M=V(!0),U=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){I();const n=Ae(this)[t].apply(this,e);return S(),n}}),e}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&s===(e?t?we:be:t?ye:ve).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(U,i))return Reflect.get(U,i,s);const a=Reflect.get(n,i,s);if(Object(r["E"])(i)?P.has(i):j(i))return a;if(e||C(n,"get",i),t)return a;if(Le(a)){const e=!o||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Ie(a):Ee(a):a}}const q=H(),B=H(!0);function H(e=!1){return function(t,n,i,s){let o=t[n];if(!e&&!Ce(i)&&(i=Ae(i),o=Ae(o),!Object(r["o"])(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?Object(r["j"])(i,o)&&R(t,"set",n,i,o):R(t,"add",n,i)),c}}function z(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&R(e,"delete",t,void 0,i),s}function $(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&P.has(t)||C(e,"has",t),n}function W(e){return C(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const G={get:D,set:q,deleteProperty:z,has:$,ownKeys:W},K={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},X=Object(r["h"])({},G,{get:L,set:B}),J=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);t!==s&&!n&&C(i,"get",t),!n&&C(i,"get",s);const{has:o}=Y(i),a=r?J:n?je:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return e!==i&&!t&&C(r,"has",e),!t&&C(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&C(Ae(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=Ae(e);const t=Ae(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function ne(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=Y(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function re(e){const t=Ae(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&R(t,"delete",e,void 0,s),o}function ie(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?J:e?je:Ne;return!e&&C(o,"iterate",b),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=Object(r["t"])(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?J:t?je:Ne;return!t&&C(o,"iterate",u?w:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)}),[e,n,t,r]}const[ue,le,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?le:ue;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},ge={get:fe(!1,!0)},me={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,be=new WeakMap,we=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Te(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e(Object(r["O"])(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:Oe(e,!1,G,pe,ve)}function ke(e){return Oe(e,!1,X,ge,ye)}function Ie(e){return Oe(e,!0,K,me,be)}function Oe(e,t,n,i,s){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Te(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Se(e){return Ce(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return Se(e)||Ce(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Re(e){return Object(r["g"])(e,"__v_skip",!0),e}const Ne=e=>Object(r["v"])(e)?Ee(e):e,je=e=>Object(r["v"])(e)?Ie(e):e;function Pe(e){x()&&(e=Ae(e),e.dep||(e.dep=c()),A(e.dep))}function De(e,t){e=Ae(e),e.dep&&N(e.dep)}function Le(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Fe(e,!1)}function Ue(e){return Fe(e,!0)}function Fe(e,t){return Le(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return Pe(this),this._value}set value(e){e=this._shallow?e:Ae(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ne(e),De(this,e))}}function qe(e){return Le(e)?e.value:e}const Be={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return Se(e)?e:new Proxy(e,Be)}class ze{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(e,()=>{this._dirty||(this._dirty=!0,De(this))}),this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Pe(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t){let n,i;const s=Object(r["p"])(e);s?(n=e,i=r["d"]):(n=e.get,i=e.set);const o=new ze(n,i,s||!i);return o}Promise.resolve()},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),v=n("3a9b"),y=n("d9b5"),b=n("825a"),w=n("7b0b"),_=n("fc6a"),T=n("a04b"),E=n("577e"),k=n("5c6c"),I=n("7c73"),O=n("df75"),S=n("241c"),C=n("057f"),x=n("7418"),A=n("06cf"),R=n("9bf2"),N=n("d1e7"),j=n("f36a"),P=n("6eeb"),D=n("5692"),L=n("f772"),M=n("d012"),U=n("90e3"),F=n("b622"),V=n("e538"),q=n("746f"),B=n("d44e"),H=n("69f3"),z=n("b727").forEach,$=L("hidden"),W="Symbol",G="prototype",K=F("toPrimitive"),X=H.set,J=H.getterFor(W),Y=Object[G],Q=i.Symbol,Z=Q&&Q[G],ee=i.TypeError,te=i.QObject,ne=s("JSON","stringify"),re=A.f,ie=R.f,se=C.f,oe=N.f,ae=c([].push),ce=D("symbols"),ue=D("op-symbols"),le=D("string-to-symbol-registry"),he=D("symbol-to-string-registry"),de=D("wks"),fe=!te||!te[G]||!te[G].findChild,pe=l&&d((function(){return 7!=I(ie({},"a",{get:function(){return ie(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=re(Y,t);r&&delete Y[t],ie(e,t,n),r&&e!==Y&&ie(Y,t,r)}:ie,ge=function(e,t){var n=ce[e]=I(Z);return X(n,{type:W,tag:e,description:t}),l||(n.description=t),n},me=function(e,t,n){e===Y&&me(ue,t,n),b(e);var r=T(t);return b(n),f(ce,r)?(n.enumerable?(f(e,$)&&e[$][r]&&(e[$][r]=!1),n=I(n,{enumerable:k(0,!1)})):(f(e,$)||ie(e,$,k(1,{})),e[$][r]=!0),pe(e,r,n)):ie(e,r,n)},ve=function(e,t){b(e);var n=_(t),r=O(n).concat(Te(n));return z(r,(function(t){l&&!a(be,n,t)||me(e,t,n[t])})),e},ye=function(e,t){return void 0===t?I(e):ve(I(e),t)},be=function(e){var t=T(e),n=a(oe,this,t);return!(this===Y&&f(ce,t)&&!f(ue,t))&&(!(n||!f(this,t)||!f(ce,t)||f(this,$)&&this[$][t])||n)},we=function(e,t){var n=_(e),r=T(t);if(n!==Y||!f(ce,r)||f(ue,r)){var i=re(n,r);return!i||!f(ce,r)||f(n,$)&&n[$][r]||(i.enumerable=!0),i}},_e=function(e){var t=se(_(e)),n=[];return z(t,(function(e){f(ce,e)||f(M,e)||ae(n,e)})),n},Te=function(e){var t=e===Y,n=se(t?ue:_(e)),r=[];return z(n,(function(e){!f(ce,e)||t&&!f(Y,e)||ae(r,ce[e])})),r};if(h||(Q=function(){if(v(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,t=U(e),n=function(e){this===Y&&a(n,ue,e),f(this,$)&&f(this[$],t)&&(this[$][t]=!1),pe(this,t,k(1,e))};return l&&fe&&pe(Y,t,{configurable:!0,set:n}),ge(t,e)},Z=Q[G],P(Z,"toString",(function(){return J(this).tag})),P(Q,"withoutSetter",(function(e){return ge(U(e),e)})),N.f=be,R.f=me,A.f=we,S.f=C.f=_e,x.f=Te,V.f=function(e){return ge(F(e),e)},l&&(ie(Z,"description",{configurable:!0,get:function(){return J(this).description}}),u||P(Y,"propertyIsEnumerable",be,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Q}),z(O(de),(function(e){q(e)})),r({target:W,stat:!0,forced:!h},{for:function(e){var t=E(e);if(f(le,t))return le[t];var n=Q(t);return le[t]=n,he[n]=t,n},keyFor:function(e){if(!y(e))throw ee(e+" is not a symbol");if(f(he,e))return he[e]},useSetter:function(){fe=!0},useSimple:function(){fe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:ye,defineProperty:me,defineProperties:ve,getOwnPropertyDescriptor:we}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:_e,getOwnPropertySymbols:Te}),r({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(w(e))}}),ne){var Ee=!h||d((function(){var e=Q();return"[null]"!=ne([e])||"{}"!=ne({a:e})||"{}"!=ne(Object(e))}));r({target:"JSON",stat:!0,forced:Ee},{stringify:function(e,t,n){var r=j(arguments),i=t;if((m(t)||void 0!==e)&&!y(e))return p(t)||(t=function(e,t){if(g(i)&&(t=a(i,this,e,t)),!y(t))return t}),r[1]=t,o(ne,null,r)}})}if(!Z[K]){var ke=Z.valueOf;P(Z,K,(function(e){return a(ke,this)}))}B(Q,W),M[$]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,T=h.Promise,E=f(h,"queueMicrotask"),k=E&&E.value;k||(r=function(){var e,t;y&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},g||y||v||!b||!w?!m&&T&&T.resolve?(u=T.resolve(void 0),u.constructor=T,l=d(u.then,u),o=function(){l(r)}):y?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=k||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,m,v){for(var y,b,w=o(p),_=s(w),T=r(g,m),E=a(_),k=0,I=v||c,O=t?I(p,E):n||d?I(p,0):void 0;E>k;k++)if((f||k in _)&&(y=_[k],b=T(y,k,w),e))if(t)O[k]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return k;case 2:u(O,y)}else switch(e){case 4:return!1;case 7:u(O,y)}return h?-1:i||l?l:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),s=n("9263"),o=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=r(/./[d]),m=t(d,""[e],(function(e,t,n,i,o){var a=r(e),c=t.exec;return c===s||c===l.exec?f&&!o?{done:!0,value:g(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,m[0]),i(l,d,m[1])}h&&c(l[d],"sham",!0)}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e0fc:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne})),n.d(t,"b",(function(){return de})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return Qe})),n.d(t,"e",(function(){return Ze})),n.d(t,"f",(function(){return at})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return Lt})),n.d(t,"i",(function(){return O})),n.d(t,"j",(function(){return C})),n.d(t,"k",(function(){return Mt})),n.d(t,"l",(function(){return Pt})),n.d(t,"m",(function(){return jt})),n.d(t,"n",(function(){return xt})),n.d(t,"o",(function(){return Rt})),n.d(t,"p",(function(){return Nt})),n.d(t,"q",(function(){return Dt})),n.d(t,"r",(function(){return At})),n.d(t,"s",(function(){return Ct}));var r=n("589b"),i=n("1fd5"),s=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;class l extends i["c"]{constructor(e,t){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function f(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new l("canceled","User canceled the upload/download.")}function w(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function T(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function E(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(){return new l("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function I(){return new l("no-download-url","The given file does not have any download URLs.")}function O(e){return new l("invalid-argument",e)}function S(){return new l("app-deleted","The Firebase app was deleted.")}function C(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new l("invalid-format","String does not match format '"+e+"': "+t)}function A(e){throw new l("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=R.makeFromUrl(e,t)}catch(r){return new R(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<b.length;o++){const t=b[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new R(e,i),t.postModify(n);break}}if(null==n)throw w(e);return n}}class N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function P(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return void 0!==e}function L(e){return"function"===typeof e}function M(e){return"object"===typeof e&&!Array.isArray(e)}function U(e){return"string"===typeof e||e instanceof String}function F(e){return V()&&e instanceof Blob}function V(){return"undefined"!==typeof Blob}function q(e,t,n,r){if(r<t)throw O(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw O(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function H(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(z||(z={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t,n,r,i,s,o,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===z.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===z.ABORT;return void e(!1,new W(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new W(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());D(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?S():b();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new W(!1,null,!0)):this.backoffId_=j(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class W{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function G(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function K(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function X(e,t){t&&(e["X-Firebase-GMPID"]=t)}function J(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Y(e,t,n,r,i,s){const o=H(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return X(c,t),G(c,n),K(c,s),J(c,r),new $(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...e){const t=Q();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(V())return new Blob(e);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ee(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,t){this.data=e,this.contentType=t||null}}function ie(e,t){switch(e){case ne.RAW:return new re(se(t));case ne.BASE64:case ne.BASE64URL:return new re(ae(e,t));case ne.DATA_URL:return new re(ue(t),le(t))}throw d()}function se(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function oe(e){let t;try{t=decodeURIComponent(e)}catch(n){throw x(ne.DATA_URL,"Malformed data URL.")}return se(t)}function ae(e,t){switch(e){case ne.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw x(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ne.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw x(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=te(t)}catch(i){throw x(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ce{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw x(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=he(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ue(e){const t=new ce(e);return t.base64?ae(ne.BASE64,t.rest):oe(t.rest)}function le(e){const t=new ce(e);return t.contentType}function he(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){let n=0,r="";F(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(F(this.data_)){const n=this.data_,r=ee(n,e,t);return null===r?null:new de(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new de(n,!0)}}static getBlob(...e){if(V()){const t=e.map(e=>e instanceof de?e.data_:e);return new de(Z.apply(null,t))}{const t=e.map(e=>U(e)?ie(ne.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new de(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return M(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ge(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function me(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ve}}let be=null;function we(e){return!U(e)||e.length<2?e:me(e)}function _e(){if(be)return be;const e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new ye("size");return i.xform=r,e.push(i),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),be=e,be}function Te(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new R(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ee(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Te(r,e),r}function ke(e,t,n){const r=fe(t);if(null===r)return null;const i=r;return Ee(e,i,n)}function Ie(e,t,n,r){const i=fe(t);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=B(a,n,r),u=H({alt:"media",token:t});return c+u});return c[0]}function Oe(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="prefixes",Ce="items";function xe(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Se])for(const i of n[Se]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new R(t,n));r.prefixes.push(s)}if(n[Ce])for(const i of n[Ce]){const n=e._makeStorageReference(new R(t,i["name"]));r.items.push(n)}return r}function Ae(e,t,n){const r=fe(n);if(null===r)return null;const i=r;return xe(e,t,i)}class Re{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){if(!e)throw d()}function je(e,t){function n(n,r){const i=ke(e,r,t);return Ne(null!==i),i}return n}function Pe(e,t){function n(n,r){const i=Ae(e,t,r);return Ne(null!==i),i}return n}function De(e,t){function n(n,r){const i=ke(e,r,t);return Ne(null!==i),Ie(i,r,e.host,e._protocol)}return n}function Le(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===t.getStatus()?p(e.bucket):403===t.getStatus()?v(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Me(e){const t=Le(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ue(e,t,n){const r=t.fullServerUrl(),i=B(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Re(i,s,je(e,n),o);return a.errorHandler=Me(t),a}function Fe(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=B(o,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Re(a,c,Pe(e,t.bucket),u);return l.urlParams=s,l.errorHandler=Le(t),l}function Ve(e,t,n){const r=t.fullServerUrl(),i=B(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Re(i,s,De(e,n),o);return a.errorHandler=Me(t),a}function qe(e,t,n,r){const i=t.fullServerUrl(),s=B(i,e.host,e._protocol),o="PATCH",a=Oe(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Re(s,o,je(e,r),u);return l.headers=c,l.body=a,l.errorHandler=Me(t),l}function Be(e,t){const n=t.fullServerUrl(),r=B(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new Re(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Me(t),a}function He(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function ze(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=He(null,t)),r}function $e(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ze(t,r,i),l=Oe(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=de.getBlob(h,r,d);if(null===f)throw E();const p={name:u["fullPath"]},g=B(s,e.host,e._protocol),m="POST",v=e.maxUploadRetryTime,y=new Re(g,m,je(e,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Le(t),y}class We{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ge(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Ne(!1)}const r=t||["active"];return Ne(!!n&&-1!==r.indexOf(n)),n}function Ke(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=ze(t,r,i),a={name:o["fullPath"]},c=B(s,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Oe(o,n),d=e.maxUploadRetryTime;function f(e){let t;Ge(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Ne(!1)}return Ne(U(t)),t}const p=new Re(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Le(t),p}function Xe(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=Ge(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Ne(!1)}n||Ne(!1);const i=Number(n);return Ne(!isNaN(i)),new We(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Re(n,o,s,a);return c.headers=i,c.errorHandler=Le(t),c}const Je=262144;function Ye(e,t,n,r,i,s,o,a){const c=new We(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw k();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},g=r.slice(h,d);if(null===g)throw E();function m(e,n){const i=Ge(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?je(t,s)(e,n):null,new We(o,a,"final"===i,u)}const v="POST",y=t.maxUploadRetryTime,b=new Re(n,v,m,y);return b.headers=p,b.body=g.uploadData(),b.progressCallback=a||null,b.errorHandler=Le(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={STATE_CHANGED:"state_changed"},Ze={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function et(e){switch(e){case"running":case"pausing":case"canceling":return Ze.RUNNING;case"paused":return Ze.PAUSED;case"success":return Ze.SUCCESS;case"canceled":return Ze.CANCELED;case"error":return Ze.ERROR;default:return Ze.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,n){const r=L(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=null;class it{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=z.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=z.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=z.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw A("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw A("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw A("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw A("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw A("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class st extends it{initXhr(){this.xhr_.responseType="text"}}function ot(){return rt?rt():new st}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=_e(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Ke(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ot,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=Xe(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,ot,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Je*this._chunkMultiplier,t=new We(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Ye(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ot,r,i);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=Je*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=Ue(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ot,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ot,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=b(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=et(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new tt(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(et(this._state)){case Ze.SUCCESS:nt(this._resolve.bind(null,this.snapshot))();break;case Ze.CANCELED:case Ze.ERROR:const t=this._reject;nt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=et(this._state);switch(t){case Ze.RUNNING:case Ze.PAUSED:e.next&&nt(e.next.bind(e,this.snapshot))();break;case Ze.SUCCESS:e.complete&&nt(e.complete.bind(e))();break;case Ze.CANCELED:case Ze.ERROR:e.error&&nt(e.error.bind(e,this._error))();break;default:e.error&&nt(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this._service=e,this._location=t instanceof R?t:R.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ct(e,t)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return me(this._location.path)}get storage(){return this._service}get parent(){const e=pe(this._location.path);if(null===e)return null;const t=new R(this._location.bucket,e);return new ct(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function ut(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new at(e,new de(t),n)}function lt(e){const t={prefixes:[],items:[]};return ht(e,t).then(()=>t)}async function ht(e,t,n){const r={pageToken:n},i=await dt(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await ht(e,t,i.nextPageToken)}function dt(e,t){null!=t&&"number"===typeof t.maxResults&&q("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Fe(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,ot)}function ft(e){e._throwIfRoot("getMetadata");const t=Ue(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,ot)}function pt(e,t){e._throwIfRoot("updateMetadata");const n=qe(e.storage,e._location,t,_e());return e.storage.makeRequestWithTokens(n,ot)}function gt(e){e._throwIfRoot("getDownloadURL");const t=Ve(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,ot).then(e=>{if(null===e)throw I();return e})}function mt(e){e._throwIfRoot("deleteObject");const t=Be(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ot)}function vt(e,t){const n=ge(e._location.path,t),r=new R(e._location.bucket,n);return new ct(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){return/^[A-Za-z]+:\/\//.test(e)}function bt(e,t){return new ct(e,t)}function wt(e,t){if(e instanceof kt){const n=e;if(null==n._bucket)throw T();const r=new ct(n,n._bucket);return null!=t?wt(r,t):r}return void 0!==t?vt(e,t):e}function _t(e,t){if(t&&yt(t)){if(e instanceof kt)return bt(e,t);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return wt(e,t)}function Tt(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:R.makeFromBucketSpec(n,e)}function Et(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:Object(i["f"])(s,e.app.options.projectId))}class kt{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?R.makeFromBucketSpec(r,this._host):Tt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Tt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){q("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){q("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ct(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new N(S());{const i=Y(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const It="@firebase/storage",Ot="0.9.0",St="storage";function Ct(e,t,n){return e=Object(i["k"])(e),ut(e,t,n)}function xt(e){return e=Object(i["k"])(e),ft(e)}function At(e,t){return e=Object(i["k"])(e),pt(e,t)}function Rt(e,t){return e=Object(i["k"])(e),dt(e,t)}function Nt(e){return e=Object(i["k"])(e),lt(e)}function jt(e){return e=Object(i["k"])(e),gt(e)}function Pt(e){return e=Object(i["k"])(e),mt(e)}function Dt(e,t){return e=Object(i["k"])(e),_t(e,t)}function Lt(e,t){return vt(e,t)}function Mt(e,t,n,r={}){Et(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new kt(n,i,s,t,r["SDK_VERSION"])}function Ft(){Object(r["_registerComponent"])(new s["a"](St,Ut,"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(It,Ot,""),Object(r["registerVersion"])(It,Ot,"esm2017")}Ft()},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(i(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,s=r&&r.bind(i);e.exports=r?function(e){return e&&s(i,e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),T=n("8925"),E=n("2266"),k=n("1c7e"),I=n("4840"),O=n("2cf4").set,S=n("b575"),C=n("cdf9"),x=n("44de"),A=n("f069"),R=n("e667"),N=n("69f3"),j=n("94ca"),P=n("b622"),D=n("6069"),L=n("605d"),M=n("2d00"),U=P("species"),F="Promise",V=N.getterFor(F),q=N.set,B=N.getterFor(F),H=d&&d.prototype,z=d,$=H,W=u.TypeError,G=u.document,K=u.process,X=A.f,J=X,Y=!!(G&&G.createEvent&&u.dispatchEvent),Q=b(u.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,re=2,ie=1,se=2,oe=!1,ae=j(F,(function(){var e=T(z),t=e!==String(z);if(!t&&66===M)return!0;if(c&&!$["finally"])return!0;if(M>=51&&/native code/.test(e))return!1;var n=new z((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,oe=n.then((function(){}))instanceof r,!oe||!t&&D&&!Q})),ce=ae||!k((function(e){z.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!w(e)||!b(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;S((function(){var r=e.value,i=e.state==ne,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,d=u.resolve,f=u.reject,p=u.domain;try{l?(i||(e.rejection===se&&pe(e),e.rejection=ie),!0===l?o=r:(p&&p.enter(),o=l(r),p&&(p.exit(),c=!0)),o===u.promise?f(W("Promise-chain cycle")):(a=ue(o))?h(a,o,d,f):d(o)):f(r)}catch(g){p&&!c&&p.exit(),f(g)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var r,i;Y?(r=G.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Q&&(i=u["on"+e])?i(r):e===Z&&x("Unhandled promise rejection",n)},de=function(e){h(O,u,(function(){var t,n=e.facade,r=e.value,i=fe(e);if(i&&(t=R((function(){L?K.emit("unhandledRejection",r,n):he(Z,n,r)})),e.rejection=L||fe(e)?se:ie,t.error))throw t.value}))},fe=function(e){return e.rejection!==ie&&!e.parent},pe=function(e){h(O,u,(function(){var t=e.facade;L?K.emit("rejectionHandled",t):he(ee,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},me=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,le(e,!0))},ve=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw W("Promise can't be resolved itself");var r=ue(t);r?S((function(){var n={done:!1};try{h(r,t,ge(ve,n,e),ge(me,n,e))}catch(i){me(n,i,e)}})):(e.value=t,e.state=ne,le(e,!1))}catch(i){me({done:!1},i,e)}}};if(ae&&(z=function(e){_(this,$),y(e),h(r,this);var t=V(this);try{e(ge(ve,t),ge(me,t))}catch(n){me(t,n)}},$=z.prototype,r=function(e){q(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},r.prototype=p($,{then:function(e,t){var n=B(this),r=n.reactions,i=X(I(this,z));return i.ok=!b(e)||e,i.fail=b(t)&&t,i.domain=L?K.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=te&&le(n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=V(e);this.promise=e,this.resolve=ge(ve,t),this.reject=ge(me,t)},A.f=X=function(e){return e===z||e===s?new i(e):J(e)},!c&&b(d)&&H!==Object.prototype)){o=H.then,oe||(f(H,"then",(function(e,t){var n=this;return new z((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(H,"catch",$["catch"],{unsafe:!0}));try{delete H.constructor}catch(ye){}g&&g(H,$)}a({global:!0,wrap:!0,forced:ae},{Promise:z}),m(z,F,!1,!0),v(F),s=l(F),a({target:F,stat:!0,forced:ae},{reject:function(e){var t=X(this);return h(t.reject,void 0,e),t.promise}}),a({target:F,stat:!0,forced:c||ae},{resolve:function(e){return C(c&&this===s?z:this,e)}}),a({target:F,stat:!0,forced:ce},{all:function(e){var t=this,n=X(t),r=n.resolve,i=n.reject,s=R((function(){var n=y(t.resolve),s=[],o=0,a=1;E(e,(function(e){var c=o++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,s[c]=e,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,i=R((function(){var i=y(t.resolve);E(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(e,t,n){"use strict";var r=n("0829");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]})),n.d(t,"g",(function(){return r["g"]})),n.d(t,"h",(function(){return r["h"]})),n.d(t,"i",(function(){return r["i"]}))},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return r["rb"]})),n.d(t,"b",(function(){return r["vb"]})),n.d(t,"c",(function(){return r["a"]}));var r=n("2ac4");n("1fd5"),n("589b"),n("e691"),n("22e5")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.0f385e03.js.map