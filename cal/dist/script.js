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
    "cover": "https://staticshare.america.gov/uploads/2019/05/shutterstock_533100223.jpg",
    "description": "碳排放量:",
    "price": 0.00921,
    "open": false
  },
  {
    "name": "豬肉",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "https://veganbloghk.files.wordpress.com/2014/06/196941_10151148653825895_1479187050_n.jpg?w=770",
    "description": "碳排放量:",
    "price": 0.00216,
    "open": false
  },
  {
    "name": "雞肉",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "https://img.ltn.com.tw/Upload/liveNews/BigPic/600_phpdjFZSj.jpg",
    "description": "碳排放量:",
    "price": 0.00123,
    "open": false
  },
        {
    "name": "雞蛋",
    "amount":"",      
    "type": "蛋豆魚肉類",
    "cover": "https://cdn.hk01.com/di/media/images/2320168/org/968c7e54fee6f3ccd66acbe58c13dc8b.JPG/UAgqwAVDwPDke7zyGlO-sCOSxGwLgRM_5dTUiOXU1Ig?v=w1920",
    "description": "碳排放量:",
    "price": 0.00107,
    "open": false
  },{
    "name": "牛奶",
    "amount":"",
    "type": "奶類",
    "cover": "https://i.epochtimes.com/assets/uploads/2018/12/shutterstock_786220120-copy-600x400.jpg",
    "description": "碳排放量:",
    "price": 0.000139,
    "open": false
  },{
    "name": "魚",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "https://blog.ulifestyle.com.hk/blogger/takwah/wp-content/blogs.dir/0/7889/files/2017/05/%E9%B0%B9%E9%AD%9A.jpg",
    "description": "碳排放量:",
    "price": 0.001926,
    "open": false
  },{
    "name": "蝦",
    "amount":"",
    "type": "蛋豆魚肉類",
    "cover": "https://images.zi.org.tw/snoopyblog/2020/01/22185552/1579690551-9aa7d16610c8e5fbadfa8323d9712cf7.jpg",
    "description": "碳排放量:",
    "price": 0.002938,
    "open": false
  },{
    "name": "蔬菜",
    "amount":"",
    "type": "蔬菜類",
    "cover": "https://cdntwrunning.biji.co/800_5aba6cf5382d1181d6014f0159e95d6c.jpg",
    "description": "碳排放量:",
    "price": 0.000355,
    "open": false
  },{
    "name": "水果",
    "amount":"",
    "type": "水果類",
    "cover": "https://cw1.tw/CW/images/fck/F1445388155624.jpg",
    "description": "碳排放量:",
    "price": 0.000234,
    "open": false
  },{
    "name": "米飯",
    "amount":"",
    "type": "五穀根莖類",
    "cover": "https://s4.gigacircle.com/media/s4_5431a908ce4eb.jpg",
    "description": "碳排放量:",
    "price": 0.000099,
    "open": false
  },
        {
    "name": "澱粉類",
    "amount":"",      
    "type": "澱粉類",
    "cover": "https://s3-ap-northeast-1.amazonaws.com/static.iyp.tw/28533/files/f9c2b73f-84ac-44b4-b169-5867f56c3056.jpg",
    "description": "碳排放量:",
    "price": 0.000335,
    "open": false
  },
   {
    "name": "其他食物",
    "amount":"",  
    // "type": "蛋豆魚肉類",
    "cover": "https://img.icons8.com/bubbles/2x/food.png",
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
    "cover": "https://s.yimg.com/zp/images/FE8E4D0D49A258609374BB08615A623DB7C6172C",
    "description": "碳排放量:",
    "price": 492.72,
    "open": false
  },
   {
    "name": "吹風機",
    "amount":"", 
    "type": "消耗電力 800w</br>每年使用時間估計 30小時</br>年耗電量 24度<br/>",
    "cover": "https://www.watsons.com.tw/medias/-EH-ND24-152993.jpg?context=bWFzdGVyfGZyb250L3pvb218MTAxMjgyfGltYWdlL2pwZWd8ZnJvbnQvem9vbS85MjA1NTQ0OTc2NDE0LmpwZ3xhODA5ODczNDVkNDViMTU5MWVjOWNkNzVkZjVjNjM2ZWJiOTgzOWM0OGM5ZDlhYjRkNDZiMDc1YjQxNzU1N2Uw",
    "description": "碳排放量:",
    "price": 14.69,
    "open": false
  },
  {
    "name": "電暖爐",
    "amount":"",
    "type": "消耗電力 700w</br>每年使用時間估計 270小時</br>年耗電量 189度<br/>",
    "cover": "https://img.my-best.tw/press_component/item_part_images/06c6cfb5cd406a8fecaf751ee8b410eb.jpg?ixlib=rails-3.0.2&auto=compress&q=70&lossless=0&w=640&h=640&fit=clip",
    "description": "碳排放量:",
    "price": 115.67,
    "open": false
  },
  {
    "name": "除濕機",
    "amount":"",
    "type": "消耗電力 285w</br>每年使用時間估計 540小時</br>年耗電量 153.9度<br/>",
    "cover": "https://www.lg.com/tw/images/small-appliances/md05798249/gallery/2-RD151QPCO_Right_Side-S.jpg",
    "description": "碳排放量:",
    "price": 94.19,
    "open": false
  },
        {
    "name": "電扇",
    "amount":"",
    "type": "消耗電力 66w</br>每年使用時間估計 720小時</br>年耗電量 47.5度<br/>",
    "cover": "https://eshop.fayaque.com.tw/img/495x495/product/2017091504604120.jpg",
    "description": "碳排放量:",
    "price": 29.07,
    "open": false
  },{
    "name": "抽風機",
    "amount":"",
    "type": "消耗電力 30w</br>每年使用時間估計 480小時</br>年耗電量 14.4度<br/>",
    "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOKiSWJHvE7-Se0PiIOWkdJ-GiFap_rCvNXe8KbBE1tzEsLcsu",
    "description": "碳排放量:",
    "price": 8.81,
    "open": false
  },{
    "name": "燈泡",
    "amount":"",
    "type": "消耗電力 60w</br>每年使用時間估計 1080小時</br>年耗電量 64.8度<br/>",
    "cover": "https://www.omdhome.com/wp-content/uploads/2018/03/LED-5W-%E9%A1%9E%E9%8E%A2%E7%B5%B2%E7%87%88%E6%B3%A1.jpg",
    "description": "碳排放量:",
    "price": 39.66,
    "open": false
  },{
    "name": "日光燈",
    "amount":"",
    "type": "消耗電力 25w</br>每年使用時間估計 1800小時</br>年耗電量 45度<br/>",
    "cover": "https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Cropped/SalePage/5922691/0/085648?v=1",
    "description": "碳排放量:",
    "price": 27.54,
    "open": false
  },{
    "name": "省電燈泡",
    "amount":"",
    "type": "消耗電力 17w</br>每年使用時間估計 1800小時</br>年耗電量 30.6度<br/>",
    "cover": "https://pcm.trplus.com.tw/650x650/sys-master/productImages/h2f/h21/8808926969886/000000000009437009-gallery-01.jpg",
    "description": "碳排放量:",
    "price": 18.73,
    "open": false
  },{
    "name": "微波爐",
    "amount":"",
    "type": "消耗電力 1200w</br>每年使用時間估計 60小時</br>年耗電量 72度<br/>",
    "cover": "https://www.etungo.com.tw/files/TC_PSpec/PS_Thumb348/TMO-17MDss.png",
    "description": "碳排放量:",
    "price": 44.06,
    "open": false
  },{
    "name": "電磁爐",
    "amount":"",
    "type": "消耗電力 1200w</br>每年使用時間估計 24小時</br>年耗電量 28.8度<br/>",
    "cover": "https://pcm.trplus.com.tw/650x650/sys-master/productImages/hbf/h8e/9252259037214/000000000016206403-gallery-02-20190319170726988.jpg",
    "description": "碳排放量:",
    "price": 17.63,
    "open": false
  },
        {
    "name": "開飲機",
    "amount":"",
    "type": "消耗電力 800w</br>每年使用時間估計 120小時</br>年耗電量 576度<br/>",
    "cover": "https://lh3.googleusercontent.com/proxy/yoOu0hh6xpo1qDzzotpKhDzum2tmOtqTNweYZeiXsK5DArCLind_-bR4g97OcGTmrPOMtjFDr_vRkq8a1Yv57jJL01fKdIl-xW3mZm2WuvVOpCAQedXggXJ-oboTtoln",
    "description": "碳排放量:",
    "price": 352.51,
    "open": false
  },
    {
    "name": "電鍋",
    "amount":"",  
    "type": "消耗電力 800w</br>每年使用時間估計 180小時</br>年耗電量 144度<br/>",
    "cover": "https://www.etungo.com.tw/files/TC_PSpec/PS_Pic/TAC-10L-DRs.jpg",
    "description": "碳排放量:",
    "price": 88.13,
    "open": false
  }, 
   {
    "name": "電烤箱",
    "amount":"", 
    "type": "消耗電力 800w</br>每年使用時間估計 24小時</br>年耗電量 19.2度<br/>",
    "cover": "https://www.etungo.com.tw/files/TC_PSpec/PS_Pic/TOT-3007As.jpg",
    "description": "碳排放量:",
    "price": 11.75,
    "open": false
  },    
   {
    "name": "抽油煙機",
    "amount":"",
    "type": "消耗電力 350w</br>每年使用時間估計 120小時</br>年耗電量 42度<br/>",
    "cover": "https://cf.shopee.tw/file/cf61830443ca5cc1cf50dbea801e1f1b",
    "description": "碳排放量:",
    "price": 25.7,
    "open": false
  },    
   {
    "name": "果菜榨汁機",
    "amount":"", 
    "type": "消耗電力 210w</br>每年使用時間估計 12小時</br>年耗電量 2.5度<br/>",
    "cover": "https://lh3.googleusercontent.com/proxy/VA2ZrHeKoeHBhLLJTy3jomq1TD3ASQQr_Mf5Lfrk5VV_9aQgac7xZ-4U9O3woISzaoabCezdpeuiHaJmytbbsW7kkqnwLtvYng58qyYY",
    "description": "碳排放量:",
    "price": 1.53,
    "open": false
  },    
   {
    "name": "烘碗機",
    "amount":"", 
    "type": "消耗電力 200w</br>每年使用時間估計 180小時</br>年耗電量 36度<br/>",
    "cover": "https://s.yimg.com/zp/images/801B8E70B19DD90BF8FEBE7A7121044111423D08",
    "description": "碳排放量:",
    "price": 22.03,
    "open": false
  },    
   {
    "name": "電冰箱",
    "amount":"", 
    "type": "消耗電力 130w</br>每年使用時間估計 8640小時</br>年耗電量 1123.2度<br/>",
    "cover": "https://pcm.trplus.com.tw/650x650/sys-master/productImages/h04/h6c/9039810691102/000000000016136551-gallery-01-20180312132541992.jpg",
    "description": "碳排放量:",
    "price": 687.4,
    "open": false
  },    
   {
    "name": "烘衣機",
    "amount":"", 
    "type": "消耗電力 1200w</br>每年使用時間估計 33小時</br>年耗電量 39.6度<br/>",
    "cover": "https://tshop.r10s.com/302/0aa/baeb/58a1/406b/db47/8423/11fde992b40242ac110005.jpg?_ex=460x460",
    "description": "碳排放量:",
    "price": 24.24,
    "open": false
  },    
   {
    "name": "電熨斗",
    "amount":"", 
    "type": "消耗電力 800w</br>每年使用時間估計 36小時</br>年耗電量 28.8度<br/>",
    "cover": "https://d.ecimg.tw/items/DMAC09A9008V64T/000001_1554701555.jpg",
    "description": "碳排放量:",
    "price": 17.63,
    "open": false
  },    
   {
    "name": "洗衣機",
    "amount":"", 
    "type": "消耗電力 420w</br>每年使用時間估計 60小時</br>年耗電量 25.2度<br/>",
    "cover": "https://d.ecimg.tw/items/QBAR01A9009GZI3/000001_1539076824.jpg",
    "description": "碳排放量:",
    "price": 15.42,
    "open": false
  },    
   {
    "name": "電視",
    "amount":"", 
    "type": "消耗電力 140w</br>每年使用時間估計 1440小時</br>年耗電量 20.16度<br/>",
    "cover": "https://www.fuchia.tw/v2/data/media/8/13ed81a237b938bb59062fa118b0e634/fead0158983bea33c838f71ac805cac0_l.jpg",
    "description": "碳排放量:",
    "price": 12.34,
    "open": false
  },    
   {
    "name": "音響",
    "amount":"", 
    "type": "消耗電力 50w</br>每年使用時間估計 360小時</br>年耗電量 18度<br/>",
    "cover": "https://img.ruten.com.tw/s1/d/37/27/21740200095527_117.jpg",
    "description": "碳排放量:",
    "price": 12.34,
    "open": false
  },    
   {
    "name": "其他電器",
    "amount":"",  
    // "type": "蛋豆魚肉類",
    "cover": "https://i.pinimg.com/originals/90/88/48/908848054e8783f10179717b595027a9.png",
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
    "cover": "https://img-fnc.ebc.net.tw/EbcFnc/news/2018/07/18/1531934726_41784.jpg",
    "description": "碳排放量:",
    "price": 0.22,
    "open": false
  },
  {
    "name": "機車",
    "amount":"",
    "type": "1KM",
    "cover": "https://img.ruten.com.tw/s2/f/db/7c/21724488944508_370.jpg",
    "description": "碳排放量:",
    "price": 0.055,
    "open": false
  },
        {
    "name": "高鐵",
    "amount":"",      
    "type": "1KM",
    "cover": "https://www.taiwan.net.tw/userfiles/image/2018photo/heighway.jpg",
    "description": "碳排放量:",
    "price": 0.05,
    "open": false
  },{
    "name": "捷運",
    "amount":"",
    "type": "1KM",
    "cover": "https://s.newtalk.tw/album/news/130/5b33675d523fd.jpg",
    "description": "碳排放量:",
    "price": 0.07,
    "open": false
  },{
    "name": "公車",
    "amount":"",
    "type": "1KM",
    "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/%E5%8F%B0%E4%B8%AD%E5%AE%A2%E9%81%8B35%E8%B7%AFKKA-6265.jpg/300px-%E5%8F%B0%E4%B8%AD%E5%AE%A2%E9%81%8B35%E8%B7%AFKKA-6265.jpg",
    "description": "碳排放量:",
    "price": 0.08,
    "open": false
  },{
    "name": "汽油",
    "amount":"",
    "type": "1L",
    "cover": "https://i.epochtimes.com/assets/uploads/2014/10/1410280910352124.jpg",
    "description": "碳排放量:",
    "price": 2.24,
    "open": false
  },{
    "name": "柴油",
    "amount":"",
    "type": "1L",
    "cover": "https://attach.mobile01.com/attach/201212/mobile01-2bb34e99a723795f0088420457d55943.jpg",
    "description": "碳排放量:",
    "price": 2.7,
    "open": false
  },
   {
    "name": "其他交通工具",
    "amount":"",  
    // "type": "蛋豆魚肉類",
    "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSI3YElo1iQBdGiDKqTor9Ag1Ut-0jP0snaCT3OLfQYvrQomhlC",
    "description": "碳排放量:",
    // "price": 9.21,
    "open": false
  },     
];    
  },
  methods: {
    bgcss(url){
      return {'background-image': 'url('+url+')',
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