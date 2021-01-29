/*! For license information please see ovenplayer-6f0c5a5.js.LICENSE */
(this.webpackJsonpOvenPlayer=this.webpackJsonpOvenPlayer||[]).push([[4],{125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(310)),o=n(306),a=n(1),u=(i(n(12)),n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var i={},s=null,l=null,c=null,E=null,f=null,T=!1,d=!1;try{var g={debug:!1,maxBufferLength:20,maxMaxBufferLength:30,fragLoadingMaxRetry:2,manifestLoadingMaxRetry:2,levelLoadingMaxRetry:2},S=t.getConfig().hlsConfig;if(S)for(var v in S)g[v]=S[v];s=new Hls(g),window.op_hls=s,s.attachMedia(e);var A={name:a.PROVIDER_HLS,element:e,mse:s,listener:null,isLoaded:!1,canSeek:!1,isLive:!1,seeking:!1,state:a.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n};i=(0,r.default)(A,t,function(e,n){OvenPlayerConsole.log("HLS : onExtendedLoad : ",e,"lastPlayPosition : "+n);var r=t.getConfig().loadingRetryCount;s.loadSource(e.file),s.once(Hls.Events.MANIFEST_LOADED,function(e,t){T=!0}),s.once(Hls.Events.LEVEL_LOADED,function(e,t){d=!0,f&&(clearTimeout(f),f=null),t.details.live?A.isLive=!0:n&&n>=0&&i.seek(n)}),s.on(Hls.Events.ERROR,function(e,t){if(t&&t.networkDetails&&202===t.networkDetails.status)f&&(clearTimeout(f),f=null),i.setState(a.STATE_LOADING),f=setTimeout(function(){s&&(i.stop(),s.stopLoad(),s.startLoad(),i.play())},1e3);else{if(s.once(Hls.Events.FRAG_LOADING,function(){i.setState(a.STATE_LOADING)}),t.type===Hls.ErrorTypes.MEDIA_ERROR&&!t.fatal)return;if(r>0)i.setState(a.STATE_LOADING),f&&(clearTimeout(f),f=null),r-=1,f=t.type===Hls.ErrorTypes.NETWORK_ERROR?setTimeout(function(){i.stop(),s&&(s.stopLoad(),s.startLoad()),i.play()},1e3):t.type===Hls.ErrorTypes.MEDIA_ERROR?setTimeout(function(){s&&s.recoverMediaError(),i.play()},1e3):setTimeout(function(){i.stop(),s&&(s.stopLoad(),s.startLoad()),i.play()},1e3);else{var n=u.PLAYER_UNKNWON_NETWORK_ERROR;t&&t.networkDetails&&400===t.networkDetails.status?n=u.PLAYER_BAD_REQUEST_ERROR:t&&t.networkDetails&&403===t.networkDetails.status?n=u.PLAYER_AUTH_FAILED_ERROR:t&&t.networkDetails&&406===t.networkDetails.status&&(n=u.PLAYER_NOT_ACCEPTABLE_ERROR);var l=a.ERRORS.codes[n];l.error=t.details,(0,o.errorTrigger)(l,i)}}}),i.on(a.PLAYER_STATE,function(e){d||e.prevstate!==a.STATE_LOADING||e.newstate!==a.STATE_IDLE||(f&&(clearTimeout(f),f=null),s&&s.stopLoad())})}),l=i.super("play"),E=i.super("destroy"),OvenPlayerConsole.log("HLS PROVIDER LOADED."),c=i.super("stop"),i.play=function(){if(T)l();else{var e=i.getSources()[i.getCurrentSource()].file;s&&s.loadSource(e)}},i.stop=function(){f&&(clearTimeout(f),f=null),s&&s.stopLoad(),c()},i.destroy=function(){f&&(clearTimeout(f),f=null),s&&s.destroy(),s=null,OvenPlayerConsole.log("HLS : PROVIDER DESTROUYED."),E()}}catch(e){var L=a.ERRORS.codes[a.INIT_HLSJS_NOTFOUND];throw L.error=e,L}return i}},310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(316)),o=l(n(317)),a=l(n(115)),u=l(n(311)),i=n(306),s=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("[Provider] loaded. ");var l={};(0,a.default)(l);var c=e.element,E=null,f=null;e.adTagUrl&&(OvenPlayerConsole.log("[Provider] Ad Client - ",t.getAdClient()),(E=t.getAdClient()===s.AD_CLIENT_VAST?(0,o.default)(c,l,t,e.adTagUrl):(0,r.default)(c,l,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),f=(0,u.default)(c,l,E?E.videoEndedCallback:null,t),c.playbackRate=c.defaultPlaybackRate=t.getPlaybackRate();var T=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,l.setVolume(t.getVolume()),e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=c.src;o.file!==a&&(c.src=o.file,(a||""===a)&&c.load(),r&&r>0&&l.seek(r)),r>0&&(l.seek(r),t.isAutoStart()),t.isAutoStart()}};return l.getName=function(){return e.name},l.getMse=function(){return e.mse},l.canSeek=function(){return e.canSeek},l.setCanSeek=function(t){e.canSeek=t},l.isSeeking=function(){return e.seeking},l.setSeeking=function(t){e.seeking=t},l.setMetaLoaded=function(){e.isLoaded=!0},l.metaLoaded=function(){return e.isLoaded},l.setState=function(t){if(e.state!==t){var n=e.state;if(OvenPlayerConsole.log("Provider : setState()",t),n===s.STATE_AD_PLAYING&&(t===s.STATE_ERROR||t===s.STATE_IDLE))return!1;switch(OvenPlayerConsole.log("Provider : triggerSatatus",t),t){case s.STATE_COMPLETE:l.trigger(s.PLAYER_COMPLETE);break;case s.STATE_PAUSED:l.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_PAUSED});break;case s.STATE_AD_PAUSED:l.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_AD_PAUSED});break;case s.STATE_PLAYING:l.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_PLAYING});case s.STATE_AD_PLAYING:l.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_AD_PLAYING})}e.state=t,l.trigger(s.PLAYER_STATE,{prevstate:n,newstate:e.state})}},l.getState=function(){return e.state},l.setBuffer=function(t){e.buffer=t},l.getBuffer=function(){return e.buffer},l.isLive=function(){return!!e.isLive||c.duration===1/0},l.getDuration=function(){return l.isLive()?1/0:c.duration},l.getPosition=function(){return c?c.currentTime:0},l.setVolume=function(e){if(!c)return!1;c.volume=e/100},l.getVolume=function(){return c?100*c.volume:0},l.setMute=function(e){return!!c&&(void 0===e?(c.muted=!c.muted,l.trigger(s.CONTENT_MUTE,{mute:c.muted})):(c.muted=e,l.trigger(s.CONTENT_MUTE,{mute:c.muted})),c.muted)},l.getMute=function(){return!!c&&c.muted},l.preload=function(n,r){return e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),T(r||0),new Promise(function(e,n){t.isMute()&&l.setMute(!0),t.getVolume()&&l.setVolume(t.getVolume()),e()})},l.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),T(e.sources.starttime||0)},l.play=function(){if(OvenPlayerConsole.log("Provider : play()"),!c)return!1;if(l.getState()!==s.STATE_PLAYING)if(E&&E.isActive()||E&&!E.started())E.play().then(function(e){OvenPlayerConsole.log("Provider : ads play success")}).catch(function(e){OvenPlayerConsole.log("Provider : ads play fail",e)});else{var e=c.play();void 0!==e?e.then(function(){OvenPlayerConsole.log("Provider : video play success")}).catch(function(e){OvenPlayerConsole.log("Provider : video play error",e.message)}):OvenPlayerConsole.log("Provider : video play success (ie)")}},l.pause=function(){if(OvenPlayerConsole.log("Provider : pause()"),!c)return!1;l.getState()===s.STATE_PLAYING?c.pause():l.getState()===s.STATE_AD_PLAYING&&E.pause()},l.seek=function(e){if(!c)return!1;c.currentTime=e},l.setPlaybackRate=function(e){return!!c&&(l.trigger(s.PLAYBACK_RATE_CHANGED,{playbackRate:e}),c.playbackRate=c.defaultPlaybackRate=e)},l.getPlaybackRate=function(){return c?c.playbackRate:0},l.getSources=function(){return c?e.sources.map(function(e,t){var n={file:e.file,type:e.type,label:e.label,index:t,sectionStart:e.sectionStart,sectionEnd:e.sectionEnd,gridThumbnail:e.gridThumbnail};return e.lowLatency&&(n.lowLatency=e.lowLatency),n}):[]},l.getCurrentSource=function(){return e.currentSource},l.setCurrentSource=function(n,r){if(n>-1&&e.sources&&e.sources.length>n)return OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,l.trigger(s.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceIndex(n),l.setState(s.STATE_IDLE),r&&T(c.currentTime||0),e.currentSource},l.getQualityLevels=function(){return c?e.qualityLevels:[]},l.getCurrentQuality=function(){return c?e.currentQuality:null},l.setCurrentQuality=function(e){},l.isAutoQuality=function(){},l.setAutoQuality=function(e){},l.getFramerate=function(){return e.framerate},l.setFramerate=function(t){return e.framerate=t},l.seekFrame=function(t){var n=e.framerate,r=(c.currentTime*n+t)/n;r+=1e-5,l.pause(),l.seek(r)},l.stop=function(){if(!c)return!1;for(OvenPlayerConsole.log("CORE : stop() "),c.removeAttribute("preload"),c.removeAttribute("src");c.firstChild;)c.removeChild(c.firstChild);l.pause(),l.setState(s.STATE_IDLE)},l.destroy=function(){if(!c)return!1;l.stop(),f.destroy(),E&&(E.destroy(),E=null),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(e){var t=l[e];return function(){return t.apply(l,arguments)}},l}},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(306);t.default=function(e,t,n,a){var u={};OvenPlayerConsole.log("EventListener loaded.",e,t);var i={},s=-1,l=e;return u.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},u.durationchange=function(){u.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},u.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),l.pause(),t.getState()!==r.STATE_IDLE&&t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},u.loadeddata=function(){},u.loadedmetadata=function(){var e=t.getSources(),n=t.getCurrentSource(),o=n>-1?e[n].type:"",a={duration:t.isLive()?1/0:l.duration,type:o};t.setMetaLoaded(),OvenPlayerConsole.log("EventListener : on loadedmetadata",a),t.trigger(r.CONTENT_META,a)},u.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!l.ended&&!l.error&&l.currentTime!==l.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},u.loadstart=function(){a&&!a.getConfig().showBigPlayButton&&a.getConfig().autoStart&&t.setState(r.STATE_LOADING)},u.play=function(){s=-1,l.paused||t.getState()===r.STATE_PLAYING||t.setState(r.STATE_LOADING)},u.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),s<0&&t.setState(r.STATE_PLAYING)},u.progress=function(){var e=l.buffered;if(!e)return!1;var n=l.duration,o=l.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);t.setBuffer(100*a),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:n}),OvenPlayerConsole.log("EventListener : on progress",100*a)},u.timeupdate=function(){var e=l.currentTime,n=l.duration;if(!isNaN(n)){if(e>n)return l.pause(),void t.setState(r.STATE_COMPLETE);var o=t.getSources()[t.getCurrentSource()].sectionStart;o&&e<o&&t.getState()===r.STATE_PLAYING&&t.seek(o);var a=t.getSources()[t.getCurrentSource()].sectionEnd;if(a&&e>a&&t.getState()===r.STATE_PLAYING)return t.stop(),void t.setState(r.STATE_COMPLETE);n>9e15&&(n=1/0),t.isSeeking()||l.paused||t.getState()!==r.STATE_STALLED&&t.getState()!==r.STATE_LOADING&&t.getState()!==r.STATE_AD_PLAYING||function(e,t){return e.toFixed(2)===t.toFixed(2)}(s,e)||(s=-1,t.setState(r.STATE_PLAYING)),o&&o>0&&(e-=o)<0&&(e=0),a&&(n=a),o&&(n-=o),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n})}},u.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",l.currentTime),t.trigger(r.CONTENT_SEEK,{position:l.currentTime})},u.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},u.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},u.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()===r.STATE_PLAYING&&(s=l.currentTime,t.setState(r.STATE_STALLED))},u.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*l.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*l.volume),mute:l.muted})},u.error=function(){var e=l.error&&l.error.code||0,n={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NETWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",n),(0,o.errorTrigger)(r.ERRORS.codes[n],t)},Object.keys(u).forEach(function(e){l.removeEventListener(e,u[e]),l.addEventListener(e,u[e])}),i.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(u).forEach(function(e){l.removeEventListener(e,u[e])})},i}}}]);