webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},W675:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/oeL"),s=n("Qa4U"),o=n("fc+i"),i=n("bm2B"),a=n("nVvX"),d=n("x8nq"),c=this&&this.__decorate||function(t,e,n,r){var s,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){this.Bitcore={btc:{lib:a,translateTo:"bch"},bch:{lib:d,translateTo:"btc"}}}return t.prototype.getAddressCoin=function(t){try{return new this.Bitcore.btc.lib.Address(t),"btc"}catch(e){try{return new this.Bitcore.bch.lib.Address(t),"bch"}catch(t){return null}}},t.prototype.translateAddress=function(t){var e=this.getAddressCoin(t);if(e){var n=new this.Bitcore[e].lib.Address(t),r=n.toObject(),s=this.Bitcore[e].translateTo,o=this.Bitcore[s].lib.Address.fromObject(r);return{origCoin:e.toUpperCase(),origAddress:t,resultCoin:s.toUpperCase(),resultAddress:o.toString()}}},t}();u=c([Object(r.B)(),l("design:paramtypes",[])],u);var p=this&&this.__decorate||function(t,e,n,r){var s,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(t){this.Translator=t,this.reset()}return t.prototype.translateAddress=function(t){this.result=this.Translator.translateAddress(t),this.result||(this.error="Could not translate address: "+t)},t.prototype.reset=function(){this.addressToTranslate=null,this.result=null},t}();v=p([Object(r.n)({selector:"app-root",template:n("efyd"),styles:[n("W675")],providers:[u]}),f("design:paramtypes",["function"==typeof(g=void 0!==u&&u)&&g||Object])],v);var g,h=this&&this.__decorate||function(t,e,n,r){var s,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},b=function(){function t(){}return t}();b=h([Object(r.L)({declarations:[v],imports:[o.a,i.a],providers:[],bootstrap:[v]})],b),{production:!0}.production&&Object(r._20)(),Object(s.a)().bootstrapModule(b).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='<div class="header">\n  <div class="header-content">\n    <img class="bitpay-logo" src="assets/img/bitpay-logo-negative.svg" alt="Bitpay">\n    <div class="header-center">\n      <h3 class="header-title">BCH Address Translator</h3>\n      <div class="repository-link">\n        <a href="https://github.com/JDonadio/address-translator" target="blank">\n          <img src="assets/img/github.png" alt="Github">\n        </a>\n      </div>\n    </div>\n    <img class="copay-logo" src="assets/img/copay-logo-negative.svg" alt="Copay">\n  </div>\n</div>\n\n<div class="container">\n  <form #translateForm="ngForm">\n    <div class="card">\n      <div class="card-block">\n        <h6 class="card-title">Original</h6>\n        <div class="row">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Address:</div>\n              <input type="text" class="form-control" id="addressToTranslate" name="addressToTranslate" [(ngModel)]="addressToTranslate" (ngModelChange)="translateAddress(addressToTranslate)">\n            </div>\n          </div>\n\n          <div class="form-group col-sm-4" *ngIf="result" [hidden]="true">\n            <div class="input-group">\n              <div class="input-group-addon">Coin:</div>\n              <input type="text" class="form-control" id="origCoin" name="origCoin" [(ngModel)]="result.origCoin" [disabled]="true">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="card" *ngIf="result">\n      <div class="card-block">\n        <h6 class="card-title">Translation</h6>\n        <div class="row">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Address:</div>\n              <input type="text" class="form-control" id="resultAddress" [disabled]="true" name="resultAddress" [(ngModel)]="result.resultAddress">\n            </div>\n          </div>\n\n          <div class="form-group col-sm-4" [hidden]="true">\n            <div class="input-group">\n              <div class="input-group-addon">Coin:</div>\n              <input type="text" class="form-control" id="resultCoin" name="resultCoin" [(ngModel)]="result.resultCoin" [disabled]="true">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type="button" (click)="reset()" class="btn btn-outline-primary btn-lg btn-block" *ngIf="result">Reset</button>\n  </form>\n</div>\n'},gFIY:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="gFIY"}},[0]);