var vm = new Vue({
  el: "#app",
  data: {
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
    p6: false,
    p7: false,
    p8: false,
    p9: false,
    food: true,
    appli: false,
    tra: false,
    isCartOpen: false,
    movies: [],
    appliance: [],
    traffic: [],
    keyword: "",
    cart: [],
    currentMovie: null,
    carbon:[],
  },
  //取得電影資料
  created(){
  this.movies=[
  {
    "name": "牛肉",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/cow.jpg",
    "description": "碳排放量:",
    "price": 0.00921,
    "open": false
  },
  {
    "name": "豬肉",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/pig.jpg",
    "description": "碳排放量:",
    "price": 0.00216,
    "open": false
  },
  {
    "name": "雞肉",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/chicken.jpg",
    "description": "碳排放量:",
    "price": 0.00123,
    "open": false
  },
        {
    "name": "雞蛋",
    "amount":"",      
    "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/egg.jpeg",
    "description": "碳排放量:",
    "price": 0.00107,
    "open": false
  },{
    "name": "牛奶",
    "amount":"",
    "type": "奶類",
    "cover": "/ecow/cal/img/milk.jpg",
    "description": "碳排放量:",
    "price": 0.000139,
    "open": false
  },{
    "name": "魚",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/fish.jpg",
    "description": "碳排放量:",
    "price": 0.001926,
    "open": false
  },{
    "name": "蝦",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/shrimp.jpg",
    "description": "碳排放量:",
    "price": 0.002938,
    "open": false
  },{
    "name": "蔬菜",
    "amount":"",
    "type": "蔬菜類",
    "cover": "/ecow/cal/img/vegetable.jpg",
    "description": "碳排放量:",
    "price": 0.000355,
    "open": false
  },{
    "name": "水果",
    "amount":"",
    "type": "水果類",
    "cover": "/ecow/cal/img/fruit.jpg",
    "description": "碳排放量:",
    "price": 0.000234,
    "open": false
  },{
    "name": "米飯",
    "amount":"",
    "type": "五穀根莖類",
    "cover": "/ecow/cal/img/rice.jpg",
    "description": "碳排放量:",
    "price": 0.000099,
    "open": false
  },
        {
    "name": "澱粉類",
    "amount":"",      
    "type": "澱粉類",
    "cover": "/ecow/cal/img/澱粉.jpg",
    "description": "碳排放量:",
    "price": 0.000335,
    "open": false
  },
   {
    "name": "其他食物",
    "amount":"",  
    // "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/otherfood.png",
    "description": "碳排放量:",
    // "price": 9.21,
    "open": false
  },     
];
 this.appliance=[
  {
    "name": "冷氣機",
    "amount":"",
    "type": "消耗電力 900w</br>每年使用時間估計 900小時</br>年耗電量 810度<br/>",
    "cover": "/ecow/cal/img/冷氣機.jpeg",
    "description": "碳排放量:",
    "price": 492.72,
    "open": false
  },
   {
    "name": "吹風機",
    "amount":"", 
    "type": "消耗電力 800w</br>每年使用時間估計 30小時</br>年耗電量 24度<br/>",
    "cover": "/ecow/cal/img/吹風機.webp",
    "description": "碳排放量:",
    "price": 14.69,
    "open": false
  },
  {
    "name": "電暖爐",
    "amount":"",
    "type": "消耗電力 700w</br>每年使用時間估計 270小時</br>年耗電量 189度<br/>",
    "cover": "/ecow/cal/img/電暖爐.jpg",
    "description": "碳排放量:",
    "price": 115.67,
    "open": false
  },
  {
    "name": "除濕機",
    "amount":"",
    "type": "消耗電力 285w</br>每年使用時間估計 540小時</br>年耗電量 153.9度<br/>",
    "cover": "/ecow/cal/img/除濕機.jpg",
    "description": "碳排放量:",
    "price": 94.19,
    "open": false
  },
        {
    "name": "電扇",
    "amount":"",
    "type": "消耗電力 66w</br>每年使用時間估計 720小時</br>年耗電量 47.5度<br/>",
    "cover": "/ecow/cal/img/電扇.jpg",
    "description": "碳排放量:",
    "price": 29.07,
    "open": false
  },{
    "name": "抽風機",
    "amount":"",
    "type": "消耗電力 30w</br>每年使用時間估計 480小時</br>年耗電量 14.4度<br/>",
    "cover": "/ecow/cal/img/抽風機.jpeg",
    "description": "碳排放量:",
    "price": 8.81,
    "open": false
  },{
    "name": "燈泡",
    "amount":"",
    "type": "消耗電力 60w</br>每年使用時間估計 1080小時</br>年耗電量 64.8度<br/>",
    "cover": "/ecow/cal/img/燈泡.jpg",
    "description": "碳排放量:",
    "price": 39.66,
    "open": false
  },{
    "name": "日光燈",
    "amount":"",
    "type": "消耗電力 25w</br>每年使用時間估計 1800小時</br>年耗電量 45度<br/>",
    "cover": "/ecow/cal/img/日光燈.jpeg",
    "description": "碳排放量:",
    "price": 27.54,
    "open": false
  },{
    "name": "省電燈泡",
    "amount":"",
    "type": "消耗電力 17w</br>每年使用時間估計 1800小時</br>年耗電量 30.6度<br/>",
    "cover": "/ecow/cal/img/省電燈泡.jpg",
    "description": "碳排放量:",
    "price": 18.73,
    "open": false
  },{
    "name": "微波爐",
    "amount":"",
    "type": "消耗電力 1200w</br>每年使用時間估計 60小時</br>年耗電量 72度<br/>",
    "cover": "/ecow/cal/img/微波爐.png",
    "description": "碳排放量:",
    "price": 44.06,
    "open": false
  },{
    "name": "電磁爐",
    "amount":"",
    "type": "消耗電力 1200w</br>每年使用時間估計 24小時</br>年耗電量 28.8度<br/>",
    "cover": "/ecow/cal/img/電磁爐.jpg",
    "description": "碳排放量:",
    "price": 17.63,
    "open": false
  },
        {
    "name": "開飲機",
    "amount":"",
    "type": "消耗電力 800w</br>每年使用時間估計 120小時</br>年耗電量 576度<br/>",
    "cover": "/ecow/cal/img/開飲機.jpg",
    "description": "碳排放量:",
    "price": 352.51,
    "open": false
  },
    {
    "name": "電鍋",
    "amount":"",  
    "type": "消耗電力 800w</br>每年使用時間估計 180小時</br>年耗電量 144度<br/>",
    "cover": "/ecow/cal/img/電鍋.jpg",
    "description": "碳排放量:",
    "price": 88.13,
    "open": false
  }, 
   {
    "name": "電烤箱",
    "amount":"", 
    "type": "消耗電力 800w</br>每年使用時間估計 24小時</br>年耗電量 19.2度<br/>",
    "cover": "/ecow/cal/img/電烤箱.jpg",
    "description": "碳排放量:",
    "price": 11.75,
    "open": false
  },    
   {
    "name": "抽油煙機",
    "amount":"",
    "type": "消耗電力 350w</br>每年使用時間估計 120小時</br>年耗電量 42度<br/>",
    "cover": "/ecow/cal/img/抽油煙機.jpeg",
    "description": "碳排放量:",
    "price": 25.7,
    "open": false
  },    
   {
    "name": "果菜榨汁機",
    "amount":"", 
    "type": "消耗電力 210w</br>每年使用時間估計 12小時</br>年耗電量 2.5度<br/>",
    "cover": "/ecow/cal/img/果菜榨汁機.jpg",
    "description": "碳排放量:",
    "price": 1.53,
    "open": false
  },    
   {
    "name": "烘碗機",
    "amount":"", 
    "type": "消耗電力 200w</br>每年使用時間估計 180小時</br>年耗電量 36度<br/>",
    "cover": "/ecow/cal/img/烘碗機.jpeg",
    "description": "碳排放量:",
    "price": 22.03,
    "open": false
  },    
   {
    "name": "電冰箱",
    "amount":"", 
    "type": "消耗電力 130w</br>每年使用時間估計 8640小時</br>年耗電量 1123.2度<br/>",
    "cover": "/ecow/cal/img/電冰箱.jpg",
    "description": "碳排放量:",
    "price": 687.4,
    "open": false
  },    
   {
    "name": "烘衣機",
    "amount":"", 
    "type": "消耗電力 1200w</br>每年使用時間估計 33小時</br>年耗電量 39.6度<br/>",
    "cover": "/ecow/cal/img/烘衣機.jpg",
    "description": "碳排放量:",
    "price": 24.24,
    "open": false
  },    
   {
    "name": "電熨斗",
    "amount":"", 
    "type": "消耗電力 800w</br>每年使用時間估計 36小時</br>年耗電量 28.8度<br/>",
    "cover": "/ecow/cal/img/電熨斗.jpg",
    "description": "碳排放量:",
    "price": 17.63,
    "open": false
  },    
   {
    "name": "洗衣機",
    "amount":"", 
    "type": "消耗電力 420w</br>每年使用時間估計 60小時</br>年耗電量 25.2度<br/>",
    "cover": "/ecow/cal/img/wm.jpg",
    "description": "碳排放量:",
    "price": 15.42,
    "open": false
  },    
   {
    "name": "電視",
    "amount":"", 
    "type": "消耗電力 140w</br>每年使用時間估計 1440小時</br>年耗電量 20.16度<br/>",
    "cover": "/ecow/cal/img/tv.jpg",
    "description": "碳排放量:",
    "price": 12.34,
    "open": false
  },    
   {
    "name": "音響",
    "amount":"", 
    "type": "消耗電力 50w</br>每年使用時間估計 360小時</br>年耗電量 18度<br/>",
    "cover": "/ecow/cal/img/音響.jpg",
    "description": "碳排放量:",
    "price": 12.34,
    "open": false
  },    
   {
    "name": "其他電器",
    "amount":"",  
    // "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/otherapp.png",
    "description": "碳排放量:",
    // "price": 9.21,
    "open": false
  },     
]; 
 this.traffic=[
  {
    "name": "汽車",
    "amount":"",
    "type": "1KM",
    "cover": "/ecow/cal/img/car.jpg",
    "description": "碳排放量:",
    "price": 0.22,
    "open": false
  },
  {
    "name": "機車",
    "amount":"",
    "type": "1KM",
    "cover": "/ecow/cal/img/motor.jpg",
    "description": "碳排放量:",
    "price": 0.055,
    "open": false
  },
        {
    "name": "高鐵",
    "amount":"",      
    "type": "1KM",
    "cover": "/ecow/cal/img/hsr.jpg",
    "description": "碳排放量:",
    "price": 0.05,
    "open": false
  },{
    "name": "捷運",
    "amount":"",
    "type": "1KM",
    "cover": "/ecow/cal/img/mrt.jpg",
    "description": "碳排放量:",
    "price": 0.07,
    "open": false
  },{
    "name": "公車",
    "amount":"",
    "type": "1KM",
    "cover": "/ecow/cal/img/bus.jpg",
    "description": "碳排放量:",
    "price": 0.08,
    "open": false
  },{
    "name": "汽油",
    "amount":"",
    "type": "1L",
    "cover": "/ecow/cal/img/gas.jpg",
    "description": "碳排放量:",
    "price": 2.24,
    "open": false
  },{
    "name": "柴油",
    "amount":"",
    "type": "1L",
    "cover": "/ecow/cal/img/柴油.jpg",
    "description": "碳排放量:",
    "price": 2.7,
    "open": false
  },
   {
    "name": "其他交通工具",
    "amount":"",  
    // "type": "蛋豆魚肉類",
    "cover": "/ecow/cal/img/其他交通.jpeg",
    "description": "碳排放量:",
    // "price": 9.21,
    "open": false
  },     
];    
  },
  methods: {
    bgcss(url){
      return {'background-image': 'url("cal/img/"+url)',
             'background-size': '100% 100%',
             'background-position': 'center center'}
    },
    forward(){
      $(".cards").animate({"left":"-=400px"},500)
    },
    backward(){
      $(".cards").animate({"left":"+=400px"},500)
    },
    wheel(evt){
      console.log(evt.deltaY)
      TweenMax.to(".cards",0.8,{
        left: "-="+evt.deltaY*4+"px"
      })
    },
    addCart(movie,evt){
      movie.add= true
      this.currentMovie=movie
      this.$nextTick(()=>{
        TweenMax.from(".buybox",0.8,{
          left: $(evt.target).offset().left,
          top: $(evt.target).offset().top,
          opacity: 1,
          ease: Power1.easeIn
        })
        setTimeout(()=>{
          this.cart.push(movie)
        },800)
      })    
    },
    remove(movie,id){
      this.cart.splice(id,1)
      movie.add=false
    }
    
  },
  computed: {
    totalPrice(){
      return this.cart
      .map(movie=>(movie.name!="其他食物" && movie.name!="其他電器" && movie.name!="其他交通") ? movie.price*movie.amount : this.carbon*movie.amount)
      .reduce((total,p)=>total+p,0)
    }
  },
  watch: {
    cart(){
      TweenMax.from(".fa-shopping-cart",0.3,{
        scale: 0.5
      })
    }
  }
})