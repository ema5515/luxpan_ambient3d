// Garden Gnome Software - Skin
// Pano2VR 6.1.15/18116
// Filename: bot�es.ggsk
// Generated 2022-12-09T16:09:48

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 194px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 194px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onmouseover=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.style.opacity='1';
			me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
		}
		me._image_1.onmouseout=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.style.opacity='0.5';
			me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_12=document.createElement('div');
		els=me._button_12__img=document.createElement('img');
		els.className='ggskin ggskin_button_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 13px;';
		hs+='left : 74px;';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_12.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._button_12.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._button_12);
		el=me._button_11=document.createElement('div');
		els=me._button_11__img=document.createElement('img');
		els.className='ggskin ggskin_button_11';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 13px;';
		hs+='left : 154px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_11.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._button_11.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._button_11);
		el=me._button_10=document.createElement('div');
		els=me._button_10__img=document.createElement('img');
		els.className='ggskin ggskin_button_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 13px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_10.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._button_10.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._button_10);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 13px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._button_1);
		me.divSkin.appendChild(me._image_1);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0'+
			'Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMz'+
			'A4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwx'+
			'LjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2'+
			'MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYs'+
			'MS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMT'+
			'QuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCww'+
			'Ljg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41Mz'+
			'EtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0w'+
			'LjIyMSwwLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LD'+
			'E5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLj'+
			'IyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40Nj'+
			'IsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwx'+
			'LjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOT'+
			'YtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLD'+
			'AtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni'+
			'0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45Mj'+
			'R6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS'+
			'4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAu'+
			'MjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7SDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMT'+
			'k1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5O0MzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDku'+
			'OTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLD'+
			'YuNjg0LDE2LjEyMiw2LjY4NHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O1MyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5'+
			'LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7QzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LD'+
			'E4LjE4OXogTTI4LjE0OSw3LjAzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0'+
			'Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNS'+
			'wxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHog'+
			'TTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjljMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC'+
			'40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTImI3hkOyYj'+
			'eGE7JiN4OTsmI3g5O2MwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LD'+
			'EuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7QzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOT'+
			'ZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7UzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLj'+
			'Y2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2gtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni'+
			'0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLj'+
			'UzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjAuNTI1LDIzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7QzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC'+
			'44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0Niww'+
			'LjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC'+
			'40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LD'+
			'E4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LT'+
			'AuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEs'+
			'MC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLj'+
			'I1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEu'+
			'MTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC'+
			'43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeT0iMHB4IiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjAgMCAzMi'+
			'AzMiIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAu'+
			'MzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LD'+
			'EuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEu'+
			'MTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40Mj'+
			'gtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQu'+
			'ODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLj'+
			'E4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0'+
			'Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aD'+
			'IwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4x'+
			'OTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC'+
			'4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYj'+
			'eGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMT'+
			'YsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		me._image_1.style[domTransition]='none';
		me._image_1.style.opacity='0.5';
		me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._tt_fullscreen.logicBlock_text();
	me._tt_fullscreen.logicBlock_position();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('configloaded', function(args) { me._tt_fullscreen.logicBlock_position(); });
	player.addListener('hastouch', function(args) { me._tt_fullscreen.logicBlock_position(); });
	me.skinTimerEvent();
};