(function(){function t(t,o,r){return function(){return(r||t)[o].apply(t,arguments)}}var o;window.w=window,w.d=document,w.ls=localStorage,w.dId=t(d,"getElementById"),w.getCwd=function(t){return t.slice(0,t.lastIndexOf("/"))},w.goToRoot=function(){w.location=getCwd(w.location.href)},w.CDate=o=function(){function t(t,o,r){t=0|t,o=0|o,r=0|r,this._val=new Date(t,o,r),this._val.valueOf()?this.year()===t&&this.month()===o&&this.day()===r?this.isGood=!0:this.error="Nonexistent date":this.error="Bad input"}t.displayName="CDate";var o=(t.prototype,t);return o.fromString=function(o){var r,n,e,i;return r=o.split("-"),n=r[0],e=r[1],i=r[2],new t(n,e-1,i)},t.prototype.valueOf=function(){if(this.isGood)return this._val.valueOf();throw new Error(this.error)},t.prototype.toString=function(){return this.isGood?this._val.toJSON().slice(0,10):this.error},t.prototype.year=function(){return this._val.getFullYear()},t.prototype.month=function(){return this._val.getMonth()},t.prototype.day=function(){return this._val.getDate()},t}(),w.birthday=null!=ls.birthday?o.fromString(ls.birthday):{isGood:!1}}).call(this);