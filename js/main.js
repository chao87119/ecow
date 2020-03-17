var careerism = {

	current_topic: 0,

	current_grade: 0,

	topic: [{

		t_n: '1',

		t_t: '鋁箔包是哪一類?可回收嗎?',

		t_o: {

			'可回收紙類 ': '0',

			'可回收紙容器 ': '1',

			'可回收塑膠容器': '0',

			'不可回收': '0'

		}



	}, {

		t_n: '2',

		t_t: '黏附其他物品的可樂罐(非塑膠瓶)是哪一類可回收嗎？',

		t_o: {

			'可回收塑膠容器': '0',

			'可回收鋁罐': '0',

			'可回收廢鐵': '0',

			'不可回收': '1'

		}

	}, {

		t_n: '3',

		t_t: '安全帽是哪一類?可回收嗎？',

		t_o: {

			'可回收塑膠': '1',

			'可回收廢鐵': '0',

			'可回收家電': '0',

			'不可回收': '0'

		}

	}, {

		t_n: '4',

		t_t: '陶瓷類馬桶是哪一類?可回收嗎？ ',

		t_o: {

			'可回收資訊物品': '0',

			'可回收家電物品': '0',

			'可回收大型家具': '0',

			'不可回收': '1',

		}

	}, {

		t_n: '5',

		t_t: '紙尿布是哪一類?可回收嗎？',

		t_o: {

			'可回收紙類': '0',

			'可回收紙容器': '0',

			'可回收舊衣': '0',

			'不可回收': '1',
		}

	}, {

		t_n: '6',

		t_t: '行動電源是哪一類?可回收嗎？',

		t_o: {

			'可回收電池': '1',

			'可回收紙容器': '0',

			'可回收廢鐵': '0',

			'不可回收': '0',

		}

	}, {

		t_n: '7',

		t_t: '計算機是哪一類?可回收嗎？',

		t_o: {

			'可回收資訊物品': '0',

			'可回收家電物品': '1',

			'可回收廢鐵': '0',

			'不可回收': '0',
		}

	}, {

		t_n: '8',

		t_t: '木製音箱是哪一類?可回收嗎？',

		t_o: {

			'可回收資訊物品': '0',

			'可回收家電物品': '0',

			'可回收紙類': '0',

			'不可回收': '1',

		}

	}, {

		t_n: '9',

		t_t: '沙發是哪一類?可回收嗎？',

		t_o: {

			'可回收資訊物品': '0',

			'可回收家電物品': '0',

			'可回收大型家具': '1',

			'不可回收': '0',

		}

	}, {

		t_n: '10',

		t_t: '保麗龍上如附著許多油污、青苔、泥土是哪一類?可回收嗎？',

		t_o: {

			'可回收保麗龍': '0',

			'可回收塑膠容器': '0',

			'可回收紙類': '0',

			'不可回收': '1',

		}

	}],

	res: [[

		'是不是都沒讀書啊!!|回去多讀一點再來吧~','有點遜喔~|要多加油了!','這個成績不太行窩~|看來要多讀書了'],['這分數..還行啦|再努力一點會更好','普普通通|看來應該多讀點書','我以為你會考更高呢|再讀一點吧'],['哇!不錯喔|真是高手呢','太厲害啦!!!|果然沒有辜負我的期待','快滿分了!!!|要回去看錯的地方喔~'],['太神啦|地球就是需要您這種人才啊','恭喜滿分!!|真的是太厲害了!!!']],

	init: function() {

		this.bindEvent();

	},

	initTopic: function () {

		var self = this;

		self.loadTopic(1);

	},

	loadTopic: function  (index) {

		var self = this;

		var topic = self.topic[index-1],

			topic_number = topic.t_n,

			topic_title = topic.t_t,

			topic_option = topic.t_o,

			option_html = '',

			i = 0;

		$('#curr_no').html(topic_number);

		$('#topic_title').html(topic_title);

		for(var id in topic_option){

			option_html += '<tr><td class="option_item" option_index="' + i + '" option_value="' + topic_option[id] + '">' + id + '</td><tr>';

			i++;

		}

		$('#topic_option').html(option_html);

		self.current_topic++;

	},

	loadOver: function () {

		var self = this;

		var grade = self.current_grade;

		var res = Number(grade);

		var show_data;

		var fanal_data;

		if(0 <= res && res < 4){

			show_data = self.res[0];

		}else if(4 <= res && res < 7){

			show_data = self.res[1];

		}else if(7 <= res && res < 10){

			show_data = self.res[2];

		}else{

			show_data = self.res[3];

		}

		var ran = Math.random() * 3 + 1;

		if(ran < 2){

			fanal_data = show_data[0];

		}else if(ran >= 3){

			fanal_data = show_data[2];

		}else{

			fanal_data = show_data[1];

		}

		var key_word = fanal_data.split('|')[0];

		var detail = fanal_data.split('|')[1];

		$('.grade_detail').html(res);

		$('.des_keyword').html(key_word);

		$('.des_detail').html(detail);

	},

	bindEvent: function () {

		var self = this;

		$('.wrap').on('click','.enter_btn',function () {

			$('.enter_wrap').css('display','none');

			$('.topic_wrap').css('display','block');

			self.initTopic();

		});

		$('.wrap').on('click','.option_item', function () {

			var _this = $(this);

			var value = Number(_this.attr('option_value'));

			self.current_grade = self.current_grade + value;

			_this.addClass('select');

			if(self.current_topic < 10){

				$('.fade_wrap').fadeOut('normal',function () {

					self.loadTopic(self.current_topic+1);

					$(this).fadeIn('normal');

				});

			}else{

				$('.topic_wrap').css('display','none');

				self.loadOver();

				$('.over_wrap').css('display','block');

			}

			

		});

		$('.wrap').on('click','.over_share',function () {

			var grade = self.current_grade;

			var res = 100 - Number(grade);

			$('.share_wrap').css('display','block');

			document.title = '注意！有个智商指数达'+ res +'分的超人潜藏在你的朋友圈';

		})

	}

}