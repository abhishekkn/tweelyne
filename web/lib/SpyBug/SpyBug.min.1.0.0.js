function SpyBug(){var isLoggingEnabled=true;this.INFO="info";this.DEBUG="debug";this.WARN="warn";this.ERROR="error";this.LOG="log";this.setLoggingStatus=function(val){switch(val){case false:isLoggingEnabled=false;break;case true:default:isLoggingEnabled=true;break;}}
this.getLoggingStatus=function(){return isLoggingEnabled;}
this.spy=function(message,type){if(isLoggingEnabled){if(typeof(console)!=='undefined'&&console!=null){var now=new Date();var timestamp=now.toLocaleDateString()+" "+
now.toLocaleTimeString()+": ";switch(type){case this.INFO:console.info(timestamp+message);break;case this.DEBUG:console.debug(timestamp+message);break;case this.WARN:console.warn(timestamp+message);break;case this.ERROR:console.error(timestamp+message);break;case this.LOG:default:console.log(timestamp+message);break;}}}}
this.toString=function(){return("SpyBug: Logging is "+
(this.getLoggingStatus()?"enabled":"disabled")+".");}}