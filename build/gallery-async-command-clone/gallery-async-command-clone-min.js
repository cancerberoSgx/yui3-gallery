YUI.add("gallery-async-command-clone",function(a){(function(c){var b=c.extend(function(d){b.superclass.constructor.call(this,d);},c.Plugin.Base,{clone:function(){var d=this.get("host").getAttrs(["args","ctx","fn"]);d.args=d.args.slice(1);return new c.AsyncCommand(d);}},{NAME:"async-command-clone",NS:"clone"});c.Plugin.AsyncCommandClone=b;}(a));},"gallery-2012.01.11-21-03",{requires:["gallery-async-command","plugin"],skinnable:false});