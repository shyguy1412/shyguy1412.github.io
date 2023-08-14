import{dk as Y}from"./chunk-LYJN6WSL.js";import{a as s}from"./chunk-HUMC4NK7.js";var qe=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Ge=Object.getOwnPropertyNames,Je=Object.prototype.hasOwnProperty,Z=s((e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Ge(n))!Je.call(e,t)&&t!==i&&qe(e,t,{get:()=>n[t],enumerable:!(r=Qe(n,t))||r.enumerable});return e},"__copyProps"),Ye=s((e,n,i)=>(Z(e,n,"default"),i&&Z(i,n,"default")),"__reExport"),d={};Ye(d,Y);var Ze=2*60*1e3,Se=class{static{s(this,"WorkerManager")}_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>Ze&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=d.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>n)}},K;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(K||(K={}));var H;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(H||(H={}));var b;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=H.MAX_VALUE),t===Number.MAX_VALUE&&(t=H.MAX_VALUE),{line:r,character:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.objectLiteral(t)&&u.uinteger(t.line)&&u.uinteger(t.character)}s(i,"is"),e.is=i})(b||(b={}));var m;(function(e){function n(r,t,a,o){if(u.uinteger(r)&&u.uinteger(t)&&u.uinteger(a)&&u.uinteger(o))return{start:b.create(r,t),end:b.create(a,o)};if(b.is(r)&&b.is(t))return{start:r,end:t};throw new Error("Range#create called with invalid arguments["+r+", "+t+", "+a+", "+o+"]")}s(n,"create"),e.create=n;function i(r){var t=r;return u.objectLiteral(t)&&b.is(t.start)&&b.is(t.end)}s(i,"is"),e.is=i})(m||(m={}));var X;(function(e){function n(r,t){return{uri:r,range:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&m.is(t.range)&&(u.string(t.uri)||u.undefined(t.uri))}s(i,"is"),e.is=i})(X||(X={}));var ee;(function(e){function n(r,t,a,o){return{targetUri:r,targetRange:t,targetSelectionRange:a,originSelectionRange:o}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&m.is(t.targetRange)&&u.string(t.targetUri)&&(m.is(t.targetSelectionRange)||u.undefined(t.targetSelectionRange))&&(m.is(t.originSelectionRange)||u.undefined(t.originSelectionRange))}s(i,"is"),e.is=i})(ee||(ee={}));var B;(function(e){function n(r,t,a,o){return{red:r,green:t,blue:a,alpha:o}}s(n,"create"),e.create=n;function i(r){var t=r;return u.numberRange(t.red,0,1)&&u.numberRange(t.green,0,1)&&u.numberRange(t.blue,0,1)&&u.numberRange(t.alpha,0,1)}s(i,"is"),e.is=i})(B||(B={}));var te;(function(e){function n(r,t){return{range:r,color:t}}s(n,"create"),e.create=n;function i(r){var t=r;return m.is(t.range)&&B.is(t.color)}s(i,"is"),e.is=i})(te||(te={}));var re;(function(e){function n(r,t,a){return{label:r,textEdit:t,additionalTextEdits:a}}s(n,"create"),e.create=n;function i(r){var t=r;return u.string(t.label)&&(u.undefined(t.textEdit)||C.is(t))&&(u.undefined(t.additionalTextEdits)||u.typedArray(t.additionalTextEdits,C.is))}s(i,"is"),e.is=i})(re||(re={}));var R;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(R||(R={}));var ne;(function(e){function n(r,t,a,o,c){var l={startLine:r,endLine:t};return u.defined(a)&&(l.startCharacter=a),u.defined(o)&&(l.endCharacter=o),u.defined(c)&&(l.kind=c),l}s(n,"create"),e.create=n;function i(r){var t=r;return u.uinteger(t.startLine)&&u.uinteger(t.startLine)&&(u.undefined(t.startCharacter)||u.uinteger(t.startCharacter))&&(u.undefined(t.endCharacter)||u.uinteger(t.endCharacter))&&(u.undefined(t.kind)||u.string(t.kind))}s(i,"is"),e.is=i})(ne||(ne={}));var $;(function(e){function n(r,t){return{location:r,message:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&X.is(t.location)&&u.string(t.message)}s(i,"is"),e.is=i})($||($={}));var I;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(I||(I={}));var ie;(function(e){e.Unnecessary=1,e.Deprecated=2})(ie||(ie={}));var ae;(function(e){function n(i){var r=i;return r!=null&&u.string(r.href)}s(n,"is"),e.is=n})(ae||(ae={}));var U;(function(e){function n(r,t,a,o,c,l){var g={range:r,message:t};return u.defined(a)&&(g.severity=a),u.defined(o)&&(g.code=o),u.defined(c)&&(g.source=c),u.defined(l)&&(g.relatedInformation=l),g}s(n,"create"),e.create=n;function i(r){var t,a=r;return u.defined(a)&&m.is(a.range)&&u.string(a.message)&&(u.number(a.severity)||u.undefined(a.severity))&&(u.integer(a.code)||u.string(a.code)||u.undefined(a.code))&&(u.undefined(a.codeDescription)||u.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(u.string(a.source)||u.undefined(a.source))&&(u.undefined(a.relatedInformation)||u.typedArray(a.relatedInformation,$.is))}s(i,"is"),e.is=i})(U||(U={}));var M;(function(e){function n(r,t){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];var c={title:r,command:t};return u.defined(a)&&a.length>0&&(c.arguments=a),c}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.title)&&u.string(t.command)}s(i,"is"),e.is=i})(M||(M={}));var C;(function(e){function n(a,o){return{range:a,newText:o}}s(n,"replace"),e.replace=n;function i(a,o){return{range:{start:a,end:a},newText:o}}s(i,"insert"),e.insert=i;function r(a){return{range:a,newText:""}}s(r,"del"),e.del=r;function t(a){var o=a;return u.objectLiteral(o)&&u.string(o.newText)&&m.is(o.range)}s(t,"is"),e.is=t})(C||(C={}));var P;(function(e){function n(r,t,a){var o={label:r};return t!==void 0&&(o.needsConfirmation=t),a!==void 0&&(o.description=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t!==void 0&&u.objectLiteral(t)&&u.string(t.label)&&(u.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(u.string(t.description)||t.description===void 0)}s(i,"is"),e.is=i})(P||(P={}));var _;(function(e){function n(i){var r=i;return typeof r=="string"}s(n,"is"),e.is=n})(_||(_={}));var x;(function(e){function n(a,o,c){return{range:a,newText:o,annotationId:c}}s(n,"replace"),e.replace=n;function i(a,o,c){return{range:{start:a,end:a},newText:o,annotationId:c}}s(i,"insert"),e.insert=i;function r(a,o){return{range:a,newText:"",annotationId:o}}s(r,"del"),e.del=r;function t(a){var o=a;return C.is(o)&&(P.is(o.annotationId)||_.is(o.annotationId))}s(t,"is"),e.is=t})(x||(x={}));var O;(function(e){function n(r,t){return{textDocument:r,edits:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&V.is(t.textDocument)&&Array.isArray(t.edits)}s(i,"is"),e.is=i})(O||(O={}));var S;(function(e){function n(r,t,a){var o={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="create"&&u.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||u.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||u.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||_.is(t.annotationId))}s(i,"is"),e.is=i})(S||(S={}));var T;(function(e){function n(r,t,a,o){var c={kind:"rename",oldUri:r,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(c.options=a),o!==void 0&&(c.annotationId=o),c}s(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="rename"&&u.string(t.oldUri)&&u.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||u.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||u.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||_.is(t.annotationId))}s(i,"is"),e.is=i})(T||(T={}));var F;(function(e){function n(r,t,a){var o={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t&&t.kind==="delete"&&u.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||u.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||u.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||_.is(t.annotationId))}s(i,"is"),e.is=i})(F||(F={}));var q;(function(e){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(t){return u.string(t.kind)?S.is(t)||T.is(t)||F.is(t):O.is(t)}))}s(n,"is"),e.is=n})(q||(q={}));var W=function(){function e(n,i){this.edits=n,this.changeAnnotations=i}return s(e,"TextEditChangeImpl2"),e.prototype.insert=function(n,i,r){var t,a;if(r===void 0?t=C.insert(n,i):_.is(r)?(a=r,t=x.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.insert(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(n,i,r){var t,a;if(r===void 0?t=C.replace(n,i):_.is(r)?(a=r,t=x.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.replace(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(n,i){var r,t;if(i===void 0?r=C.del(n):_.is(i)?(t=i,r=x.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),r=x.del(n,t)),this.edits.push(r),t!==void 0)return t},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),oe=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return s(e,"ChangeAnnotations2"),e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,i){var r;if(_.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}(),ft=function(){function e(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new oe(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(O.is(r)){var t=new W(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=t}})):n.changes&&Object.keys(n.changes).forEach(function(r){var t=new W(n.changes[r]);i._textEditChanges[r]=t})):this._workspaceEdit={}}return s(e,"WorkspaceChange2"),Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(V.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),r=new W(t,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var t=[];this._workspaceEdit.changes[n]=t,r=new W(t),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new oe,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;P.is(i)||_.is(i)?t=i:r=i;var a,o;if(t===void 0?a=S.create(n,r):(o=_.is(t)?t:this._changeAnnotations.manage(t),a=S.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e.prototype.renameFile=function(n,i,r,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;P.is(r)||_.is(r)?a=r:t=r;var o,c;if(a===void 0?o=T.create(n,i,t):(c=_.is(a)?a:this._changeAnnotations.manage(a),o=T.create(n,i,t,c)),this._workspaceEdit.documentChanges.push(o),c!==void 0)return c},e.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;P.is(i)||_.is(i)?t=i:r=i;var a,o;if(t===void 0?a=F.create(n,r):(o=_.is(t)?t:this._changeAnnotations.manage(t),a=F.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e}(),se;(function(e){function n(r){return{uri:r}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)}s(i,"is"),e.is=i})(se||(se={}));var ue;(function(e){function n(r,t){return{uri:r,version:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)&&u.integer(t.version)}s(i,"is"),e.is=i})(ue||(ue={}));var V;(function(e){function n(r,t){return{uri:r,version:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)&&(t.version===null||u.integer(t.version))}s(i,"is"),e.is=i})(V||(V={}));var ce;(function(e){function n(r,t,a,o){return{uri:r,languageId:t,version:a,text:o}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.string(t.uri)&&u.string(t.languageId)&&u.integer(t.version)&&u.string(t.text)}s(i,"is"),e.is=i})(ce||(ce={}));var L;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(L||(L={}));(function(e){function n(i){var r=i;return r===e.PlainText||r===e.Markdown}s(n,"is"),e.is=n})(L||(L={}));var Q;(function(e){function n(i){var r=i;return u.objectLiteral(i)&&L.is(r.kind)&&u.string(r.value)}s(n,"is"),e.is=n})(Q||(Q={}));var h;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(h||(h={}));var G;(function(e){e.PlainText=1,e.Snippet=2})(G||(G={}));var de;(function(e){e.Deprecated=1})(de||(de={}));var ge;(function(e){function n(r,t,a){return{newText:r,insert:t,replace:a}}s(n,"create"),e.create=n;function i(r){var t=r;return t&&u.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)}s(i,"is"),e.is=i})(ge||(ge={}));var fe;(function(e){e.asIs=1,e.adjustIndentation=2})(fe||(fe={}));var le;(function(e){function n(i){return{label:i}}s(n,"create"),e.create=n})(le||(le={}));var he;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}s(n,"create"),e.create=n})(he||(he={}));var z;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}s(n,"fromPlainText"),e.fromPlainText=n;function i(r){var t=r;return u.string(t)||u.objectLiteral(t)&&u.string(t.language)&&u.string(t.value)}s(i,"is"),e.is=i})(z||(z={}));var ve;(function(e){function n(i){var r=i;return!!r&&u.objectLiteral(r)&&(Q.is(r.contents)||z.is(r.contents)||u.typedArray(r.contents,z.is))&&(i.range===void 0||m.is(i.range))}s(n,"is"),e.is=n})(ve||(ve={}));var pe;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}s(n,"create"),e.create=n})(pe||(pe={}));var me;(function(e){function n(i,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var o={label:i};return u.defined(r)&&(o.documentation=r),u.defined(t)?o.parameters=t:o.parameters=[],o}s(n,"create"),e.create=n})(me||(me={}));var D;(function(e){e.Text=1,e.Read=2,e.Write=3})(D||(D={}));var _e;(function(e){function n(i,r){var t={range:i};return u.number(r)&&(t.kind=r),t}s(n,"create"),e.create=n})(_e||(_e={}));var v;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(v||(v={}));var we;(function(e){e.Deprecated=1})(we||(we={}));var ke;(function(e){function n(i,r,t,a,o){var c={name:i,kind:r,location:{uri:a,range:t}};return o&&(c.containerName=o),c}s(n,"create"),e.create=n})(ke||(ke={}));var be;(function(e){function n(r,t,a,o,c,l){var g={name:r,detail:t,kind:a,range:o,selectionRange:c};return l!==void 0&&(g.children=l),g}s(n,"create"),e.create=n;function i(r){var t=r;return t&&u.string(t.name)&&u.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(t.detail===void 0||u.string(t.detail))&&(t.deprecated===void 0||u.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}s(i,"is"),e.is=i})(be||(be={}));var Ee;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Ee||(Ee={}));var xe;(function(e){function n(r,t){var a={diagnostics:r};return t!=null&&(a.only=t),a}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.typedArray(t.diagnostics,U.is)&&(t.only===void 0||u.typedArray(t.only,u.string))}s(i,"is"),e.is=i})(xe||(xe={}));var Ce;(function(e){function n(r,t,a){var o={title:r},c=!0;return typeof t=="string"?(c=!1,o.kind=t):M.is(t)?o.command=t:o.edit=t,c&&a!==void 0&&(o.kind=a),o}s(n,"create"),e.create=n;function i(r){var t=r;return t&&u.string(t.title)&&(t.diagnostics===void 0||u.typedArray(t.diagnostics,U.is))&&(t.kind===void 0||u.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||M.is(t.command))&&(t.isPreferred===void 0||u.boolean(t.isPreferred))&&(t.edit===void 0||q.is(t.edit))}s(i,"is"),e.is=i})(Ce||(Ce={}));var Ae;(function(e){function n(r,t){var a={range:r};return u.defined(t)&&(a.data=t),a}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&m.is(t.range)&&(u.undefined(t.command)||M.is(t.command))}s(i,"is"),e.is=i})(Ae||(Ae={}));var ye;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&u.uinteger(t.tabSize)&&u.boolean(t.insertSpaces)}s(i,"is"),e.is=i})(ye||(ye={}));var Ie;(function(e){function n(r,t,a){return{range:r,target:t,data:a}}s(n,"create"),e.create=n;function i(r){var t=r;return u.defined(t)&&m.is(t.range)&&(u.undefined(t.target)||u.string(t.target))}s(i,"is"),e.is=i})(Ie||(Ie={}));var Pe;(function(e){function n(r,t){return{range:r,parent:t}}s(n,"create"),e.create=n;function i(r){var t=r;return t!==void 0&&m.is(t.range)&&(t.parent===void 0||e.is(t.parent))}s(i,"is"),e.is=i})(Pe||(Pe={}));var Re;(function(e){function n(a,o,c,l){return new Ke(a,o,c,l)}s(n,"create"),e.create=n;function i(a){var o=a;return!!(u.defined(o)&&u.string(o.uri)&&(u.undefined(o.languageId)||u.string(o.languageId))&&u.uinteger(o.lineCount)&&u.func(o.getText)&&u.func(o.positionAt)&&u.func(o.offsetAt))}s(i,"is"),e.is=i;function r(a,o){for(var c=a.getText(),l=t(o,function(y,N){var J=y.range.start.line-N.range.start.line;return J===0?y.range.start.character-N.range.start.character:J}),g=c.length,p=l.length-1;p>=0;p--){var k=l[p],E=a.offsetAt(k.range.start),f=a.offsetAt(k.range.end);if(f<=g)c=c.substring(0,E)+k.newText+c.substring(f,c.length);else throw new Error("Overlapping edit");g=E}return c}s(r,"applyEdits"),e.applyEdits=r;function t(a,o){if(a.length<=1)return a;var c=a.length/2|0,l=a.slice(0,c),g=a.slice(c);t(l,o),t(g,o);for(var p=0,k=0,E=0;p<l.length&&k<g.length;){var f=o(l[p],g[k]);f<=0?a[E++]=l[p++]:a[E++]=g[k++]}for(;p<l.length;)a[E++]=l[p++];for(;k<g.length;)a[E++]=g[k++];return a}s(t,"mergeSort")})(Re||(Re={}));var Ke=function(){function e(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}return s(e,"FullTextDocument2"),Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},e.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,t=0;t<i.length;t++){r&&(n.push(t),r=!1);var a=i.charAt(t);r=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return b.create(0,n);for(;r<t;){var a=Math.floor((r+t)/2);i[a]>n?t=a:r=a+1}var o=r-1;return b.create(o,n-i[o])},e.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),u;(function(e){var n=Object.prototype.toString;function i(f){return typeof f<"u"}s(i,"defined"),e.defined=i;function r(f){return typeof f>"u"}s(r,"undefined2"),e.undefined=r;function t(f){return f===!0||f===!1}s(t,"boolean"),e.boolean=t;function a(f){return n.call(f)==="[object String]"}s(a,"string"),e.string=a;function o(f){return n.call(f)==="[object Number]"}s(o,"number"),e.number=o;function c(f,y,N){return n.call(f)==="[object Number]"&&y<=f&&f<=N}s(c,"numberRange"),e.numberRange=c;function l(f){return n.call(f)==="[object Number]"&&-2147483648<=f&&f<=2147483647}s(l,"integer2"),e.integer=l;function g(f){return n.call(f)==="[object Number]"&&0<=f&&f<=2147483647}s(g,"uinteger2"),e.uinteger=g;function p(f){return n.call(f)==="[object Function]"}s(p,"func"),e.func=p;function k(f){return f!==null&&typeof f=="object"}s(k,"objectLiteral"),e.objectLiteral=k;function E(f,y){return Array.isArray(f)&&f.every(y)}s(E,"typedArray"),e.typedArray=E})(u||(u={}));var lt=class{static{s(this,"DiagnosticsAdapter")}constructor(e,n,i){this._languageId=e,this._worker=n;let r=s(a=>{let o=a.getLanguageId();if(o!==this._languageId)return;let c;this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(c),c=window.setTimeout(()=>this._doValidate(a.uri,o),500)}),this._doValidate(a.uri,o)},"onModelAdd"),t=s(a=>{d.editor.setModelMarkers(a,this._languageId,[]);let o=a.uri.toString(),c=this._listener[o];c&&(c.dispose(),delete this._listener[o])},"onModelRemoved");this._disposables.push(d.editor.onDidCreateModel(r)),this._disposables.push(d.editor.onWillDisposeModel(t)),this._disposables.push(d.editor.onDidChangeModelLanguage(a=>{t(a.model),r(a.model)})),this._disposables.push(i(a=>{d.editor.getModels().forEach(o=>{o.getLanguageId()===this._languageId&&(t(o),r(o))})})),this._disposables.push({dispose:()=>{d.editor.getModels().forEach(t);for(let a in this._listener)this._listener[a].dispose()}}),d.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,n){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{let r=i.map(a=>tt(e,a)),t=d.editor.getModel(e);t&&t.getLanguageId()===n&&d.editor.setModelMarkers(t,n,r)}).then(void 0,i=>{console.error(i)})}};function et(e){switch(e){case I.Error:return d.MarkerSeverity.Error;case I.Warning:return d.MarkerSeverity.Warning;case I.Information:return d.MarkerSeverity.Info;case I.Hint:return d.MarkerSeverity.Hint;default:return d.MarkerSeverity.Info}}s(et,"toSeverity");function tt(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:et(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}s(tt,"toDiagnostics");var rt=class{static{s(this,"CompletionAdapter")}constructor(e,n){this._worker=e,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,n,i,r){let t=e.uri;return this._worker(t).then(a=>a.doComplete(t.toString(),A(n))).then(a=>{if(!a)return;let o=e.getWordUntilPosition(n),c=new d.Range(n.lineNumber,o.startColumn,n.lineNumber,o.endColumn),l=a.items.map(g=>{let p={label:g.label,insertText:g.insertText||g.label,sortText:g.sortText,filterText:g.filterText,documentation:g.documentation,detail:g.detail,command:at(g.command),range:c,kind:it(g.kind)};return g.textEdit&&(nt(g.textEdit)?p.range={insert:w(g.textEdit.insert),replace:w(g.textEdit.replace)}:p.range=w(g.textEdit.range),p.insertText=g.textEdit.newText),g.additionalTextEdits&&(p.additionalTextEdits=g.additionalTextEdits.map(j)),g.insertTextFormat===G.Snippet&&(p.insertTextRules=d.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:a.isIncomplete,suggestions:l}})}};function A(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}s(A,"fromPosition");function Te(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}s(Te,"fromRange");function w(e){if(e)return new d.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}s(w,"toRange");function nt(e){return typeof e.insert<"u"&&typeof e.replace<"u"}s(nt,"isInsertReplaceEdit");function it(e){let n=d.languages.CompletionItemKind;switch(e){case h.Text:return n.Text;case h.Method:return n.Method;case h.Function:return n.Function;case h.Constructor:return n.Constructor;case h.Field:return n.Field;case h.Variable:return n.Variable;case h.Class:return n.Class;case h.Interface:return n.Interface;case h.Module:return n.Module;case h.Property:return n.Property;case h.Unit:return n.Unit;case h.Value:return n.Value;case h.Enum:return n.Enum;case h.Keyword:return n.Keyword;case h.Snippet:return n.Snippet;case h.Color:return n.Color;case h.File:return n.File;case h.Reference:return n.Reference}return n.Property}s(it,"toCompletionItemKind");function j(e){if(e)return{range:w(e.range),text:e.newText}}s(j,"toTextEdit");function at(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}s(at,"toCommand");var Fe=class{static{s(this,"HoverAdapter")}constructor(e){this._worker=e}provideHover(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.doHover(r.toString(),A(n))).then(t=>{if(t)return{range:w(t.range),contents:st(t.contents)}})}};function ot(e){return e&&typeof e=="object"&&typeof e.kind=="string"}s(ot,"isMarkupContent");function De(e){return typeof e=="string"?{value:e}:ot(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}s(De,"toMarkdownString");function st(e){if(e)return Array.isArray(e)?e.map(De):[De(e)]}s(st,"toMarkedStringArray");var Le=class{static{s(this,"DocumentHighlightAdapter")}constructor(e){this._worker=e}provideDocumentHighlights(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.findDocumentHighlights(r.toString(),A(n))).then(t=>{if(t)return t.map(a=>({range:w(a.range),kind:ut(a.kind)}))})}};function ut(e){switch(e){case D.Read:return d.languages.DocumentHighlightKind.Read;case D.Write:return d.languages.DocumentHighlightKind.Write;case D.Text:return d.languages.DocumentHighlightKind.Text}return d.languages.DocumentHighlightKind.Text}s(ut,"toDocumentHighlightKind");var ht=class{static{s(this,"DefinitionAdapter")}constructor(e){this._worker=e}provideDefinition(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.findDefinition(r.toString(),A(n))).then(t=>{if(t)return[je(t)]})}};function je(e){return{uri:d.Uri.parse(e.uri),range:w(e.range)}}s(je,"toLocation");var vt=class{static{s(this,"ReferenceAdapter")}constructor(e){this._worker=e}provideReferences(e,n,i,r){let t=e.uri;return this._worker(t).then(a=>a.findReferences(t.toString(),A(n))).then(a=>{if(a)return a.map(je)})}},Ne=class{static{s(this,"RenameAdapter")}constructor(e){this._worker=e}provideRenameEdits(e,n,i,r){let t=e.uri;return this._worker(t).then(a=>a.doRename(t.toString(),A(n),i)).then(a=>ct(a))}};function ct(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){let r=d.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,versionId:void 0,textEdit:{range:w(t.range),text:t.newText}})}return{edits:n}}s(ct,"toWorkspaceEdit");var We=class{static{s(this,"DocumentSymbolAdapter")}constructor(e){this._worker=e}provideDocumentSymbols(e,n){let i=e.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:dt(t.kind),range:w(t.location.range),selectionRange:w(t.location.range),tags:[]}))})}};function dt(e){let n=d.languages.SymbolKind;switch(e){case v.File:return n.Array;case v.Module:return n.Module;case v.Namespace:return n.Namespace;case v.Package:return n.Package;case v.Class:return n.Class;case v.Method:return n.Method;case v.Property:return n.Property;case v.Field:return n.Field;case v.Constructor:return n.Constructor;case v.Enum:return n.Enum;case v.Interface:return n.Interface;case v.Function:return n.Function;case v.Variable:return n.Variable;case v.Constant:return n.Constant;case v.String:return n.String;case v.Number:return n.Number;case v.Boolean:return n.Boolean;case v.Array:return n.Array}return n.Function}s(dt,"toSymbolKind");var He=class{static{s(this,"DocumentLinkAdapter")}constructor(e){this._worker=e}provideLinks(e,n){let i=e.uri;return this._worker(i).then(r=>r.findDocumentLinks(i.toString())).then(r=>{if(r)return{links:r.map(t=>({range:w(t.range),url:t.target}))}})}},Ue=class{static{s(this,"DocumentFormattingEditProvider")}constructor(e){this._worker=e}provideDocumentFormattingEdits(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.format(r.toString(),null,Ve(n)).then(a=>{if(!(!a||a.length===0))return a.map(j)}))}},Oe=class{static{s(this,"DocumentRangeFormattingEditProvider")}constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,n,i,r){let t=e.uri;return this._worker(t).then(a=>a.format(t.toString(),Te(n),Ve(i)).then(o=>{if(!(!o||o.length===0))return o.map(j)}))}};function Ve(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}s(Ve,"fromFormattingOptions");var pt=class{static{s(this,"DocumentColorAdapter")}constructor(e){this._worker=e}provideDocumentColors(e,n){let i=e.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(t=>({color:t.color,range:w(t.range)}))})}provideColorPresentations(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.getColorPresentations(r.toString(),n.color,Te(n.range))).then(t=>{if(t)return t.map(a=>{let o={label:a.label};return a.textEdit&&(o.textEdit=j(a.textEdit)),a.additionalTextEdits&&(o.additionalTextEdits=a.additionalTextEdits.map(j)),o})})}},ze=class{static{s(this,"FoldingRangeAdapter")}constructor(e){this._worker=e}provideFoldingRanges(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.getFoldingRanges(r.toString(),n)).then(t=>{if(t)return t.map(a=>{let o={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(o.kind=gt(a.kind)),o})})}};function gt(e){switch(e){case R.Comment:return d.languages.FoldingRangeKind.Comment;case R.Imports:return d.languages.FoldingRangeKind.Imports;case R.Region:return d.languages.FoldingRangeKind.Region}}s(gt,"toFoldingRangeKind");var Xe=class{static{s(this,"SelectionRangeAdapter")}constructor(e){this._worker=e}provideSelectionRanges(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.getSelectionRanges(r.toString(),n.map(A))).then(t=>{if(t)return t.map(a=>{let o=[];for(;a;)o.push({range:w(a.range)}),a=a.parent;return o})})}},Be=class extends rt{static{s(this,"HTMLCompletionAdapter")}constructor(e){super(e,[".",":","<",'"',"=","/"])}};function mt(e){let n=new Se(e),i=s((...t)=>n.getLanguageServiceWorker(...t),"worker"),r=e.languageId;d.languages.registerCompletionItemProvider(r,new Be(i)),d.languages.registerHoverProvider(r,new Fe(i)),d.languages.registerDocumentHighlightProvider(r,new Le(i)),d.languages.registerLinkProvider(r,new He(i)),d.languages.registerFoldingRangeProvider(r,new ze(i)),d.languages.registerDocumentSymbolProvider(r,new We(i)),d.languages.registerSelectionRangeProvider(r,new Xe(i)),d.languages.registerRenameProvider(r,new Ne(i)),r==="html"&&(d.languages.registerDocumentFormattingEditProvider(r,new Ue(i)),d.languages.registerDocumentRangeFormattingEditProvider(r,new Oe(i)))}s(mt,"setupMode1");function _t(e){let n=[],i=[],r=new Se(e);n.push(r);let t=s((...o)=>r.getLanguageServiceWorker(...o),"worker");function a(){let{languageId:o,modeConfiguration:c}=e;$e(i),c.completionItems&&i.push(d.languages.registerCompletionItemProvider(o,new Be(t))),c.hovers&&i.push(d.languages.registerHoverProvider(o,new Fe(t))),c.documentHighlights&&i.push(d.languages.registerDocumentHighlightProvider(o,new Le(t))),c.links&&i.push(d.languages.registerLinkProvider(o,new He(t))),c.documentSymbols&&i.push(d.languages.registerDocumentSymbolProvider(o,new We(t))),c.rename&&i.push(d.languages.registerRenameProvider(o,new Ne(t))),c.foldingRanges&&i.push(d.languages.registerFoldingRangeProvider(o,new ze(t))),c.selectionRanges&&i.push(d.languages.registerSelectionRangeProvider(o,new Xe(t))),c.documentFormattingEdits&&i.push(d.languages.registerDocumentFormattingEditProvider(o,new Ue(t))),c.documentRangeFormattingEdits&&i.push(d.languages.registerDocumentRangeFormattingEditProvider(o,new Oe(t)))}return s(a,"registerProviders"),a(),n.push(Me(i)),Me(n)}s(_t,"setupMode");function Me(e){return{dispose:()=>$e(e)}}s(Me,"asDisposable");function $e(e){for(;e.length;)e.pop().dispose()}s($e,"disposeAll");export{rt as CompletionAdapter,ht as DefinitionAdapter,lt as DiagnosticsAdapter,pt as DocumentColorAdapter,Ue as DocumentFormattingEditProvider,Le as DocumentHighlightAdapter,He as DocumentLinkAdapter,Oe as DocumentRangeFormattingEditProvider,We as DocumentSymbolAdapter,ze as FoldingRangeAdapter,Fe as HoverAdapter,vt as ReferenceAdapter,Ne as RenameAdapter,Xe as SelectionRangeAdapter,Se as WorkerManager,A as fromPosition,Te as fromRange,_t as setupMode,mt as setupMode1,w as toRange,j as toTextEdit};
/*! Bundled license information:

monaco-editor/esm/vs/language/html/htmlMode.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/