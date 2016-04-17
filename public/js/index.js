window.onload = function() {
	
//	街舞大神
   $(".man_intro a").mouseover(function(){
   	$(this).children("div").css("display","block");
   });
   $(".man_intro a").mouseout(function(){
   	$(this).children("div").css("display","none");
   });
   
	
//	轮播图
	var autoid;
	var oPic = document.getElementById('lunbo');
	var oPrev = getByClass(oPic, 'prev')[0];
	var oNext = getByClass(oPic, 'next')[0];

	var aLi = oPic.getElementsByTagName('li');

	var arr = [];

	for (var i = 0; i < aLi.length; i++) {
		var oImg = aLi[i].getElementsByTagName('img')[0];

		arr.push([parseInt(getStyle(aLi[i], 'left')), parseInt(getStyle(aLi[i], 'top')),
			getStyle(aLi[i], 'zIndex'), oImg.width, parseFloat(getStyle(aLi[i], 'opacity') * 100)
		]);
	}
	//自动播放
	auto();

	//上一页
	oPrev.onclick = function() {
		clearInterval(autoid);
		goprev();
		again_auto();
	}

	//下一页
	oNext.onclick = function() {
		clearInterval(autoid);
		gonext();
		again_auto();
	}

	//无点击下一页或上一页后的操作
	function again_auto() {

		clearInterval(a);
		var timer = 5;
		var a = setInterval(function() {
			if (timer == 0) {
				clearInterval(autoid);
				auto();
			}
			timer--;
		}, 1000);
	}

	function getStyle(obj, name) {
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		} else {
			return getComputedStyle(obj, false)[name];
		}
	}

	function auto() {
		autoid = setInterval(gonext, 3000);
	}

	//调用下一页
	function gonext() {
		arr.unshift(arr[arr.length - 1]);
		arr.pop();
		for (var i = 0; i < aLi.length; i++) {
			var oImg = aLi[i].getElementsByTagName('img')[0];

			aLi[i].style.zIndex = arr[i][2];
			startMove(aLi[i], {
				left: arr[i][0],
				top: arr[i][1],
				opacity: arr[i][4]
			});
			startMove(oImg, {
				width: arr[i][3]
			});
		}
	}

	//调用上一页
	function goprev() {
		arr.push(arr[0]);
		arr.shift();
		for (var i = 0; i < aLi.length; i++) {
			var oImg = aLi[i].getElementsByTagName('img')[0];

			aLi[i].style.zIndex = arr[i][2];
			startMove(aLi[i], {
				left: arr[i][0],
				top: arr[i][1],
				opacity: arr[i][4]
			});
			startMove(oImg, {
				width: arr[i][3]
			});
		}
	}
}

function getByClass(oParent, sClass) {
	var aResult = [];
	var aEle = oParent.getElementsByTagName('*');

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, json, fnEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var bStop = true;
		for (var attr in json) {
			var cur = 0;

			if (attr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				cur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (cur != json[attr]) bStop = false;

			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}

		if (bStop) {
			clearInterval(obj.timer);
			if (fnEnd) fnEnd();
		}

	}, 50);

}