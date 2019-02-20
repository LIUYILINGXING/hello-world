var score = 0;
var board = new Array();  //存储游戏数据
var add = new Array();

$(document).ready(function(){newGame()});  //页面加载完后激发函数






//棋盘初始化
function newGame(){
	in();
	generateOneNumber();
	generateOneNumber();
}

function in(){
	score = 0;
	document.getElementById("score").innerHTML = score;
	$("#gameover").css("display","none");   //隐藏样式
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			var gridCell = $("#grid-cell"+i+"-"+j);
			gridCell.css("top",getTop(i,j));
			gridCell.css("left",getLeft(i,j));
		}
	}	
	//设置格子定位
	function getTop(i,j){
		var top = 10 + i * 110;
		return top;
	}
	function getLeft(i,j){
		var left = 10 + i * 110;
	}

	//初始化格子数组
	for(var i = 0;i < 4;i++){
		board[i] = new Array();
		for(var j = 0;j < 4;j++){
			board[i][j] = 0;
		}
	}

	//初始化判定合并的数组
	for(var i = 0;i < 4;i++){
		add[i] = new Array();
		for(var j = 0;j < 4;j++){
			add[i][j] = 0;
		}
	}

	update();
}

function update(){
	$(".number-cell").remove(); //////////////////////////将所有的数字方块移除
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');//添加
			var theNumberCell = $('#number-cell-'+i+'-'+j);
			if(board[i][j] == 0){                
				theNumberCell.css('width','0px');                
				theNumberCell.css('height','0px');                
				theNumberCell.css('top',getPosTop(i,j));                
				theNumberCell.css('left',getPosLeft(i,j));            
			}else{
				theNumberCell.css('width','100px');              
				theNumberCell.css('hegiht','100px');                
				theNumberCell.css('top',getPosTop(i,j));                
				theNumberCell.css('left',getPosLeft(i,j));                //NumberCell覆盖                
				theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));//返回背景色                theNumberCell.css('color',getNumberColor(board[i][j]));//返回前景色                theNumberCell.text(board[i][j]);
				theNumberCell.css('color',getNumberColor(board[i][j]));//返回前景色
				theNumberCell.text(board[i][j]);

			}
		}
	}
}

function generateOneNumber(){
	if(nospace(board))
		return false;
	//随机一个位置
	var x = parseInt(Math.floor(Math.random()*4));
	var y = parseInt(Math.floor(Math.random()*4));
	while(true){
		if (board[x][y] == 0)
			break;
		x = parseInt(Math.floor(Math.random()*4));
		y = parseInt(Math.floor(Math.random()*4));
	}
	//随机一个数字（不相邻的两个整数中产生2或4）
	var randNumber = Math.random()<0.5 ? 2 : 4;
	//在随机位置显示随机数字
	board[x][y] = randNumber;
	animation(x,y,randNumber);
	return true;
}

//实现随机数字的样式变动
function animation(i,j,randNumber){
	
}