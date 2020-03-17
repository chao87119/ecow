var food=[
      {
        "name": "牛肉",
        "amount":"",
        "type": "蛋豆魚肉類",
        "cover": "https://staticshare.america.gov/uploads/2019/05/shutterstock_533100223.jpg",
        "description": "碳排放量:",
        "price": 9.21,
        "open": false
      },
      {
        "name": "豬肉",
        "amount":"",
        "type": "蛋豆魚肉類",
        "cover": "https://veganbloghk.files.wordpress.com/2014/06/196941_10151148653825895_1479187050_n.jpg?w=770",
        "description": "碳排放量:",
        "price": 2.16,
        "open": false
      },
      {
        "name": "雞肉",
        "amount":"",
        "type": "蛋豆魚肉類",
        "cover": "https://lh3.googleusercontent.com/proxy/8E_NEpX2V4hUH3unR4S2J-lq2YvtBkWhtL66FhRAxmDVL1jvVq4kQlNehQrLSklKUdnXM9YeWdbtd8WbNlm5WOtbi4g9J4koRn9n4rWUwQsDhpINICxtv1CJTSuhBrwKP3WEWw",
        "description": "碳排放量:",
        "price": 1.23,
        "open": false
      },
            {
        "name": "雞蛋",
        "amount":"",      
        "type": "蛋豆魚肉類",
        "cover": "https://cdn.hk01.com/di/media/images/2320168/org/968c7e54fee6f3ccd66acbe58c13dc8b.JPG/UAgqwAVDwPDke7zyGlO-sCOSxGwLgRM_5dTUiOXU1Ig?v=w1920",
        "description": "碳排放量:",
        "price": 1.07,
        "open": false
      },{
        "name": "牛奶",
        "amount":"",
        "type": "奶類",
        "cover": "https://i.epochtimes.com/assets/uploads/2018/12/shutterstock_786220120-copy-600x400.jpg",
        "description": "碳排放量:",
        "price": 0.139,
        "open": false
      },{
        "name": "魚",
        "amount":"",
        "type": "蛋豆魚肉類",
        "cover": "https://blog.ulifestyle.com.hk/blogger/takwah/wp-content/blogs.dir/0/7889/files/2017/05/%E9%B0%B9%E9%AD%9A.jpg",
        "description": "碳排放量:",
        "price": 1.926,
        "open": false
      },{
        "name": "蝦",
        "amount":"",
        "type": "蛋豆魚肉類",
        "cover": "https://images.zi.org.tw/snoopyblog/2020/01/22185552/1579690551-9aa7d16610c8e5fbadfa8323d9712cf7.jpg",
        "description": "碳排放量:",
        "price": 2.938,
        "open": false
      },{
        "name": "蔬菜",
        "amount":"",
        "type": "蔬菜類",
        "cover": "https://cdntwrunning.biji.co/800_5aba6cf5382d1181d6014f0159e95d6c.jpg",
        "description": "碳排放量:",
        "price": 0.355,
        "open": false
      },{
        "name": "水果",
        "amount":"",
        "type": "水果類",
        "cover": "https://cw1.tw/CW/images/fck/F1445388155624.jpg",
        "description": "碳排放量:",
        "price": 0.234,
        "open": false
      },{
        "name": "米飯",
        "amount":"",
        "type": "五穀根莖類",
        "cover": "https://s4.gigacircle.com/media/s4_5431a908ce4eb.jpg",
        "description": "碳排放量:",
        "price": 0.099,
        "open": false
      },
            {
        "name": "澱粉類",
        "amount":"",      
        "type": "澱粉類",
        "cover": "https://s3-ap-northeast-1.amazonaws.com/static.iyp.tw/28533/files/f9c2b73f-84ac-44b4-b169-5867f56c3056.jpg",
        "description": "碳排放量:",
        "price": 0.335,
        "open": false
      },

    ];
  $(".btn1").hide()
  $(".btn2").click(function(){
  $(".box").show()  
  $(".btn2").hide()
  $(".btn1").show()  
  $("#rect").show()
  $("#tex").show() 
//   var food=[
//       {
//         "name": "牛肉",
//         "amount":"",
//         "type": "蛋豆魚肉類",
//         "cover": "https://staticshare.america.gov/uploads/2019/05/shutterstock_533100223.jpg",
//         "description": "碳排放量:",
//         "price": 9.21,
//         "open": false
//       },
//       {
//         "name": "豬肉",
//         "amount":"",
//         "type": "蛋豆魚肉類",
//         "cover": "https://veganbloghk.files.wordpress.com/2014/06/196941_10151148653825895_1479187050_n.jpg?w=770",
//         "description": "碳排放量:",
//         "price": 2.16,
//         "open": false
//       },
//       {
//         "name": "雞肉",
//         "amount":"",
//         "type": "蛋豆魚肉類",
//         "cover": "https://lh3.googleusercontent.com/proxy/8E_NEpX2V4hUH3unR4S2J-lq2YvtBkWhtL66FhRAxmDVL1jvVq4kQlNehQrLSklKUdnXM9YeWdbtd8WbNlm5WOtbi4g9J4koRn9n4rWUwQsDhpINICxtv1CJTSuhBrwKP3WEWw",
//         "description": "碳排放量:",
//         "price": 1.23,
//         "open": false
//       },
//             {
//         "name": "雞蛋",
//         "amount":"",      
//         "type": "蛋豆魚肉類",
//         "cover": "https://cdn.hk01.com/di/media/images/2320168/org/968c7e54fee6f3ccd66acbe58c13dc8b.JPG/UAgqwAVDwPDke7zyGlO-sCOSxGwLgRM_5dTUiOXU1Ig?v=w1920",
//         "description": "碳排放量:",
//         "price": 1.07,
//         "open": false
//       },{
//         "name": "牛奶",
//         "amount":"",
//         "type": "奶類",
//         "cover": "https://i.epochtimes.com/assets/uploads/2018/12/shutterstock_786220120-copy-600x400.jpg",
//         "description": "碳排放量:",
//         "price": 0.139,
//         "open": false
//       },{
//         "name": "魚",
//         "amount":"",
//         "type": "蛋豆魚肉類",
//         "cover": "https://blog.ulifestyle.com.hk/blogger/takwah/wp-content/blogs.dir/0/7889/files/2017/05/%E9%B0%B9%E9%AD%9A.jpg",
//         "description": "碳排放量:",
//         "price": 1.926,
//         "open": false
//       },{
//         "name": "蝦",
//         "amount":"",
//         "type": "蛋豆魚肉類",
//         "cover": "https://images.zi.org.tw/snoopyblog/2020/01/22185552/1579690551-9aa7d16610c8e5fbadfa8323d9712cf7.jpg",
//         "description": "碳排放量:",
//         "price": 2.938,
//         "open": false
//       },{
//         "name": "蔬菜",
//         "amount":"",
//         "type": "蔬菜類",
//         "cover": "https://cdntwrunning.biji.co/800_5aba6cf5382d1181d6014f0159e95d6c.jpg",
//         "description": "碳排放量:",
//         "price": 0.355,
//         "open": false
//       },{
//         "name": "水果",
//         "amount":"",
//         "type": "水果類",
//         "cover": "https://cw1.tw/CW/images/fck/F1445388155624.jpg",
//         "description": "碳排放量:",
//         "price": 0.234,
//         "open": false
//       },{
//         "name": "米飯",
//         "amount":"",
//         "type": "五穀根莖類",
//         "cover": "https://s4.gigacircle.com/media/s4_5431a908ce4eb.jpg",
//         "description": "碳排放量:",
//         "price": 0.099,
//         "open": false
//       },
//             {
//         "name": "澱粉類",
//         "amount":"",      
//         "type": "澱粉類",
//         "cover": "https://s3-ap-northeast-1.amazonaws.com/static.iyp.tw/28533/files/f9c2b73f-84ac-44b4-b169-5867f56c3056.jpg",
//         "description": "碳排放量:",
//         "price": 0.335,
//         "open": false
//       },

//     ];

    var svg = d3.select("svg")
    svg.attr("width",1024).attr("height",768)

    var scaleHeight = d3.scaleLinear()
          .domain([0,9.5])
          .range([0,540])
    var scaleColor = d3.scaleLinear()
          .domain([0,9.5])
          .range(['blue','#fc993c'])
    var groups = svg.selectAll("g.name")
       .data(food)
       .enter()
       .append("g")
    groups.append('text')
          .text(d=>d.name)
          .style("font-family","微軟正黑體")
          .attr("y",540)
          .attr("x",(d,i)=>i*80)
    groups.append("rect")
          .attr("x",(d,i)=>i*80)
          // .attr("height",(d)=>scaleHeight(d.price) )
          .attr("y",(d)=>-scaleHeight(d.price)+500 )
          .attr("fill",(d)=>scaleColor(d.price))
          .attr("width",30)
    .transition()
          .duration(1000) 
          .delay((d,i)=>i*100)
          .attr("height",(d)=>scaleHeight(d.price) )
    // groups.append("circle")
    //       .attr("cx",(d,i)=>i*100+20)
    //       .attr("cy",400)
    //       .attr("r",(d)=>0)
    //       .attr("fill",(d)=>scaleColor(d.price))
    //       .transition()
    //       .duration(1000)
    //       .delay((d,i)=>i*200)
    //       .attr("r",(d)=>scaleHeight(d.price)/10)
    //       .attr("cy",200)

    groups.append("text")
          .text(d=>d.price)
          .attr("x",(d,i)=>i*80-5)
          .attr("y", (d)=>480-scaleHeight(d.price))
          .style('font-size',"20px")
          .style("font-family","Caveat , cursive")
          .style("opacity",0)
    .transition()
          .duration(1000) 
          .delay((d,i)=>i*200)
          .style("opacity",1)
  })    
$(".btn1").click(function(){
      $(".btn1").hide()   
      $(".btn2").show()
      $(".box").hide()
      food=[]
})  
// })  
