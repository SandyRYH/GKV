const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [4200, 2000]
};

const total_death = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
const maks_death = 100000;
const tahun = [
  ["2010 - 2011", 1478, 51776, 67],
  ["2012 - 2013", 174, 4451, 65], 
  ["2014 - 2015", 215, 5038, 45], 
  ["2016 - 2017", 611, 4208, 26], 
  ["2018 - 2019", 4091, 16190, 32],
  ["2020 - 2021", 236, 159779, 4]
];

//Data bencana alam
var data_top = [
  ["Gempa", 3895],
  ["Tsunami", 3557],
  ["Banjir", 1228],
  ["Longsor", 939],
  ["Gunung Meletus", 465]
];

//Data bencana non-alam (penyakit)
var data_top1 = [
  ["Covid-19", 144094],
  ["Kecelakaan Lalu Lintas", 29952],
  ["Tuberkolosis", 25167],
  ["Demam Berdarah", 10638],
  ["Rabies", 6213]
];

//Data bencana sosial
var data_top2 = [
  ["Konflik Sosial", 201],
  ["Terorisme", 38]
];

//ukuran bg chart
const maks_X = 1000;
const maks_Y = 800;

const line_X = 1000;
const line_Y = 800;

const top_Alam_X = 1000;
const top_Alam_Y = 800;

const top1_Alam_X = 1000;
const top1_Alam_Y = 800;

const top2_Alam_X = 1000;
const top2_Alam_Y = 800;

//jarak chart dengan bg belakang
const bot_gap = 1110;
const left_gap = 120;

const line_bot_gap = 1110;
const line_left_gap = 1520;

const top_Alam_bot_gap = 110;
const top_Alam_left_gap = 220;

const top1_Alam_bot_gap = 110;
const top1_Alam_left_gap = 1620;

const top2_Alam_bot_gap = 110;
const top2_Alam_left_gap = 3120;

const grid_gap_X = maks_X / (tahun.length + 1);
const grid_gap_Y = maks_Y / (total_death.length + 1);

const line_grid_gap_X = line_X / (tahun.length + 1);
const line_grid_gap_Y = line_Y / (total_death.length + 1);

const top_Alam_grid_gap_X = top_Alam_X / (total_death.length + 1);
const top_Alam_grid_gap_Y = top_Alam_Y / (data_top.length + 1);

const top1_Alam_grid_gap_X = top1_Alam_X / (total_death.length + 1);
const top1_Alam_grid_gap_Y = top1_Alam_Y / (data_top1.length + 1);

const top2_Alam_grid_gap_X = top2_Alam_X / (total_death.length + 1);
const top2_Alam_grid_gap_Y = top2_Alam_Y / (data_top2.length + 1);



// //nyimpen data[jumlah kematian] di tahun
// for(var i = 0; i < data.length; i++){

//   switch(data[i][2]){
//     case 2010:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[0][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[0][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[0][3] += data[i][3];
//       }
//       break;

//     case 2011:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[0][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[0][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[0][3] += data[i][3];
//       }
//       break;
    
//     case 2012:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[1][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[1][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[1][3] += data[i][3];
//       }
//       break;

//     case 2013:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[1][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[1][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[1][3] += data[i][3];
//       }
//       break;  

//     case 2014:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[2][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[2][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[2][3] += data[i][3];
//       }
//       break;

//     case 2015:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[2][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[2][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[2][3] += data[i][3];
//       }
//       break;  

//     case 2016:      
//       if(data[i][1] == "Bencana Alam"){
//           tahun[3][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[3][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[3][3] += data[i][3];
//       }
//       break;

//     case 2017:      
//       if(data[i][1] == "Bencana Alam"){
//           tahun[3][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[3][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[3][3] += data[i][3];
//       }
//       break;

//     case 2018:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[4][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[4][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[4][3] += data[i][3];
//       }
//       break;

//     case 2019:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[4][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[4][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[4][3] += data[i][3];
//       }
//       break;

//     case 2020:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[5][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[5][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[5][3] += data[i][3];
//       }
//       break;

//     case 2021:
//       if(data[i][1] == "Bencana Alam"){
//         tahun[5][1] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Non Alam"){
//         tahun[5][2] += data[i][3];
//       }
//       else if(data[i][1] == "Bencana Sosial"){
//         tahun[5][3] += data[i][3];
//       }
//       break;
//   }
// }


const sketch = () => {
  return ({ context, width, height }) => {
    //white background belakang
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
   //BUAT HORIZONTAL
    //Color pallete 1 (buat bencana alam) merah -> gradH1
    var gradH1 = context.createLinearGradient(0,0,700,0);
    gradH1.addColorStop(0, "#cf3e5d");
    gradH1.addColorStop(1, "#b645d6");

    //Color pallete 2 (buat bencana non-alam) hijau -> gradH2
    var gradH2 = context.createLinearGradient(0,0,700,0);
    gradH2.addColorStop(0, "#b645d6");
    gradH2.addColorStop(1, "#efd0f7");

    //Color pallete 3 (buat bencana sosial) biru -> gradH3
    var gradH3 = context.createLinearGradient(0,0,700,0);
    gradH3.addColorStop(0, "#5485ff");
    gradH3.addColorStop(1, "#91f8ff");


  //BUAT VERTIKAL
    //Color pallete 1 (buat bencana alam) merah -> gradV1
    var gradV1 = context.createLinearGradient(0,0,0,700);
    gradV1.addColorStop(0, "#cf3e5d");
    gradV1.addColorStop(1, "#b645d6");

    //Color pallete 2 (buat bencana non-alam) hijau -> gradV2
    var gradV2 = context.createLinearGradient(0,0,0,700);
    gradV2.addColorStop(0, "#b645d6");
    gradV2.addColorStop(1, "#efd0f7");

    //Color pallete 3 (buat bencana sosial) biru -> gradV3
    var gradV3 = context.createLinearGradient(0,0,0,700);
    gradV3.addColorStop(0, "#5485ff");
    gradV3.addColorStop(1, "#91f8ff");

  //BUAT SELURUH AREA
  //Color pallete 1 (buat bencana alam) merah -> gradR1
    var gradR1 = context.createLinearGradient(0,0,700,700);
    gradR1.addColorStop(0, "#cf3e5d");
    gradR1.addColorStop(1, "#b645d6");

    //Color pallete 2 (buat bencana non-alam) hijau -> gradR2
    var gradR2 = context.createLinearGradient(0,0,700,700);
    gradR2.addColorStop(0, "#b645d6");
    gradR2.addColorStop(1, "#efd0f7");

    //Color pallete 3 (buat bencana sosial) biru -> gradR3
    var gradR3 = context.createLinearGradient(0,0,700,700);
    gradR3.addColorStop(0, "#5485ff");
    gradR3.addColorStop(1, "#91f8ff");

      
  function barchart(){
//bar chart
    //create label di sumbu x dan y
    context.save();
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.textAlign = 'right';
    for(var n = 0; n < total_death.length; n++){
      context.fillText(total_death[n], left_gap-10, height-bot_gap+8 - (n + 1)*grid_gap_Y);
    }
    context.textAlign = 'center';
    for(var m = 0; m < tahun.length; m++){
      context.fillText(tahun[m][0], left_gap + (m + 1)*grid_gap_X, height-bot_gap+30);
    }
    context.restore();

    //move 0, 0 position
    context.translate(left_gap, height-bot_gap);
    context.scale(1, -1);

    //keterangan sumbu y
    context.save();
    context.scale(1, -1);
    context.translate(0, -1 * maks_Y / 2);
    context.rotate(-90 * Math.PI / 180);
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.textAlign = 'center';
    context.fillText("Jumlah kematian", 0, -55);
    context.restore();

    //keterangan sumbu x
    context.save();
    context.scale(1, -1);
    context.translate(maks_X / 2, 0);
    context.rotate(-0 * Math.PI / 180);
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.textAlign = 'center';
    context.fillText("Tahun", 0, 75);
    context.restore();

    //bikin grid
    context.beginPath();  //garis di sumbu 0 x & y
    context.lineWidth = 1;
    context.moveTo(0, 0);
    context.lineTo(0, maks_Y);
    context.moveTo(0, 0);
    context.lineTo(maks_X, 0);
    context.stroke();

    context.lineWidth = 0.1;  //grid kotak kotak
    for(var  g = grid_gap_X; g < maks_X; g += grid_gap_X){
      context.moveTo(g, 0);
      context.lineTo(g, maks_Y);
    }
    for(var f = grid_gap_Y; f < maks_Y; f += grid_gap_Y){
      context.moveTo(0, f);
      context.lineTo(maks_X, f);
    }
    context.stroke();

    //bikin bar chart
    var bar_width = grid_gap_X / 4;
    
    for(var i = 0; i < tahun.length; i++){

      /*
      if(tahun[i][1] < min_death){
        var death_data = (tahun[i][1] /);
      }

      (Math.log3(death_data/min_death) + 1) / (total_death.lenght + 1) * maks_X;
      */     
      context.save();
      context.fillStyle = gradV1; //Bencana Alam
      context.fillRect(bar_width/2 - bar_width*2 + (grid_gap_X * (i + 1)), 0, bar_width, tahun[i][1] / maks_death * maks_Y);
      context.restore();

      context.save();
      context.fillStyle = gradV2; //Bencana Non Alam
      context.fillRect(bar_width/2 - bar_width + (grid_gap_X * (i + 1)), 0, bar_width, tahun[i][2] / maks_death * maks_Y);
      context.restore();

      context.save();
      context.fillStyle = gradV3; //Bencana Sosial
      context.fillRect(bar_width/2 + (grid_gap_X * (i + 1)), 0, bar_width, tahun[i][3] / maks_death * maks_Y);
      context.restore();
    }
    
    //keterangan warna bar
    context.save();
    context.fillStyle = gradV1;
    context.fillRect(maks_X + 25, maks_Y / 2 + 23, bar_width/2, bar_width/2);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Alam", maks_X + 50, (maks_Y / 2 + 25) * -1);
    context.restore();

    context.save();
    context.fillStyle = gradV2;
    context.fillRect(maks_X + 25, maks_Y / 2 - 2, bar_width/2, bar_width/2);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Non Alam", maks_X + 50, (maks_Y / 2) * -1);
    context.restore();

    context.save();
    context.fillStyle = gradV3;
    context.fillRect(maks_X + 25, maks_Y / 2 - 27, bar_width/2, bar_width/2);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Sosial", maks_X + 50, (maks_Y / 2 - 25) * -1);
    context.restore();

    //reset position
    context.translate(-left_gap, height-bot_gap);
    context.scale(1, -1);
  }
  
   function topchart0(){
//Top 5 Bencana Alam Side bar chart
    //create label di sumbu x
    context.save();
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.textAlign = 'right';
    for(var n = 0; n < data_top.length; n++){
      context.fillText(data_top[n][0], top_Alam_left_gap-25, height-top_Alam_bot_gap+8 - (data_top.length - n)*top_Alam_grid_gap_Y);
    }
    context.textAlign = 'center';
    for(var m = 0; m < total_death.length; m++){
      context.fillText(total_death[m], top_Alam_left_gap + (m + 1)*top_Alam_grid_gap_X, height-top_Alam_bot_gap+30);
    }
    context.restore();

    //move 0, 0 position
    context.translate(top_Alam_left_gap, height-top_Alam_bot_gap);
    context.scale(1, -1);

    //keterangan sumbu x
    context.save();
    context.scale(1, -1);
    context.translate(top_Alam_X / 2, 0);
    context.rotate(-0 * Math.PI / 180);
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.textAlign = 'center';
    context.fillText("Jumlah kematian (ribu)", 0, 75);
    context.restore();

    //bikin grid
    context.beginPath();  //garis di sumbu 0 x & y
    context.lineWidth = 1;
    context.moveTo(0, 0);
    context.lineTo(0, top_Alam_Y);
    context.moveTo(0, 0);
    context.lineTo(top_Alam_X, 0);
    context.stroke();

    context.lineWidth = 0.1;  //grid kotak kotak
    for(var  g = top_Alam_grid_gap_X; g < top_Alam_X; g += top_Alam_grid_gap_X){
      context.moveTo(g, 0);
      context.lineTo(g, top_Alam_Y);
    }
    for(var f = top_Alam_grid_gap_Y; f < top_Alam_Y; f += top_Alam_grid_gap_Y){
      context.moveTo(0, f);
      context.lineTo(top_Alam_X, f);
    }
    context.stroke();

    //bikin side bar chart
    for(var i = 0; i < data_top.length; i++){
      context.save();
      context.fillStyle = gradH1; 
      context.fillRect(0, top_Alam_grid_gap_Y * (data_top.length - i) - top_Alam_grid_gap_Y/4, data_top[i][1] / maks_death * top_Alam_X, top_Alam_grid_gap_Y/2);
      context.restore();
    }

    //reset position
    context.translate(-top_Alam_left_gap, height-top_Alam_bot_gap);
    context.scale(1, -1);
   }

       function topchart1(){
        //Top 5 Bencana Alam Side bar chart
            //create label di sumbu x
            context.save();
            context.fillStyle = 'black';
            context.font = "20px Arial";
            context.textAlign = 'right';
            for(var n = 0; n < data_top1.length; n++){
              context.fillText(data_top1[n][0], top1_Alam_left_gap-25, height-top1_Alam_bot_gap+8 - (data_top.length - n)*top1_Alam_grid_gap_Y);
            }
            context.textAlign = 'center';
            for(var m = 0; m < total_death.length; m++){
              context.fillText(total_death[m], top1_Alam_left_gap + (m + 1)*top1_Alam_grid_gap_X, height-top1_Alam_bot_gap+30);
            }
            context.restore();
        
            //move 0, 0 position
            context.translate(top1_Alam_left_gap, height-top1_Alam_bot_gap);
            context.scale(1, -1);
        
            //keterangan sumbu x
            context.save();
            context.scale(1, -1);
            context.translate(top1_Alam_X / 2, 0);
            context.rotate(-0 * Math.PI / 180);
            context.fillStyle = 'black';
            context.font = "30px Arial";
            context.textAlign = 'center';
            context.fillText("Jumlah kematian (ribu)", 0, 75);
            context.restore();
        
            //bikin grid
            context.beginPath();  //garis di sumbu 0 x & y
            context.lineWidth = 1;
            context.moveTo(0, 0);
            context.lineTo(0, top1_Alam_Y);
            context.moveTo(0, 0);
            context.lineTo(top1_Alam_X, 0);
            context.stroke();
        
            context.lineWidth = 0.1;  //grid kotak kotak
            for(var  g = top1_Alam_grid_gap_X; g < top1_Alam_X; g += top1_Alam_grid_gap_X){
              context.moveTo(g, 0);
              context.lineTo(g, top1_Alam_Y);
            }
            for(var f = top1_Alam_grid_gap_Y; f < top1_Alam_Y; f += top1_Alam_grid_gap_Y){
              context.moveTo(0, f);
              context.lineTo(top1_Alam_X, f);
            }
            context.stroke();
        
            //bikin side bar chart
            for(var i = 0; i < data_top1.length; i++){
              context.save();
              context.fillStyle = gradH2; 
              context.fillRect(0, top1_Alam_grid_gap_Y * (data_top1.length - i) - top1_Alam_grid_gap_Y/4, data_top1[i][1] / maks_death * top1_Alam_X, top1_Alam_grid_gap_Y/2);
              context.restore();
            }
        
            //reset position
            context.translate(-top1_Alam_left_gap, height-top1_Alam_bot_gap);
            context.scale(1, -1);
           }

    function topchart2(){
    //Top 5 Bencana Alam Side bar chart
        //create label di sumbu x
        context.save();
        context.fillStyle = 'black';
        context.font = "20px Arial";
        context.textAlign = 'right';
        for(var n = 0; n < data_top2.length; n++){
          context.fillText(data_top2[n][0], top2_Alam_left_gap-25, height-top2_Alam_bot_gap+8 - (data_top2.length - n)*top2_Alam_grid_gap_Y);
        }
        context.textAlign = 'center';
        for(var m = 0; m < total_death.length; m++){
          context.fillText(total_death[m], top2_Alam_left_gap + (m + 1)*top2_Alam_grid_gap_X, height-top2_Alam_bot_gap+30);
        }
        context.restore();
    
        //move 0, 0 position
        context.translate(top2_Alam_left_gap, height-top2_Alam_bot_gap);
        context.scale(1, -1);
    
        //keterangan sumbu x
        context.save();
        context.scale(1, -1);
        context.translate(top2_Alam_X / 2, 0);
        context.rotate(-0 * Math.PI / 180);
        context.fillStyle = 'black';
        context.font = "30px Arial";
        context.textAlign = 'center';
        context.fillText("Jumlah kematian (ribu)", 0, 75);
        context.restore();
    
        //bikin grid
        context.beginPath();  //garis di sumbu 0 x & y
        context.lineWidth = 1;
        context.moveTo(0, 0);
        context.lineTo(0, top2_Alam_Y);
        context.moveTo(0, 0);
        context.lineTo(top2_Alam_X, 0);
        context.stroke();
    
        context.lineWidth = 0.1;  //grid kotak kotak
        for(var  g = top2_Alam_grid_gap_X; g < top2_Alam_X; g += top2_Alam_grid_gap_X){
          context.moveTo(g, 0);
          context.lineTo(g, top2_Alam_Y);
        }
        for(var f = top2_Alam_grid_gap_Y; f < top2_Alam_Y; f += top2_Alam_grid_gap_Y){
          context.moveTo(0, f);
          context.lineTo(top2_Alam_X, f);
        }
        context.stroke();
    
        //bikin side bar chart
        for(var i = 0; i < data_top2.length; i++){
          context.save();
          context.fillStyle = gradH3; 
          context.fillRect(0, top2_Alam_grid_gap_Y * (data_top2.length - i) - top2_Alam_grid_gap_Y/4, data_top2[i][1] / maks_death * top2_Alam_X, top2_Alam_grid_gap_Y/2);
          context.restore();
        }
    
        //reset position
        context.translate(-top2_Alam_left_gap, height-top2_Alam_bot_gap);
        context.scale(1, -1);
       }
       
   function linechart(){
    //line chart
    //create label di sumbu x dan y
    context.save();
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.textAlign = 'right';
    for(var n = 0; n < total_death.length; n++){
      context.fillText(total_death[n], line_left_gap-10, height-line_bot_gap+8 - (n + 1)*line_grid_gap_Y);
    }
    context.textAlign = 'center';
    for(var m = 0; m < tahun.length; m++){
      context.fillText(tahun[m][0], line_left_gap + (m + 1)*line_grid_gap_X, height-line_bot_gap+30);
    }
    context.restore();

    context.translate(line_left_gap, height-line_bot_gap);
    context.scale(1, -1);

    //keterangan sumbu y
    context.save();
    context.scale(1, -1);
    context.translate(0, -1 * line_Y / 2);
    context.rotate(-90 * Math.PI / 180);
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.textAlign = 'center';
    context.fillText("Jumlah kematian (ribu)", 0, -55);
    context.restore();

    //keterangan sumbu x
    context.save();
    context.scale(1, -1);
    context.translate(line_X / 2, 0);
    context.rotate(-0 * Math.PI / 180);
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.textAlign = 'center';
    context.fillText("Tahun", 0, 75);
    context.restore();

    //bikin grid
    context.beginPath();  //garis di sumbu 0 x & y
    context.lineWidth = 1;
    context.moveTo(0, 0);
    context.lineTo(0, line_Y);
    context.moveTo(0, 0);
    context.lineTo(line_X, 0);
    context.stroke();

    context.lineWidth = 0.1;  //grid kotak kotak
    for(var  g = line_grid_gap_X; g < line_X; g += line_grid_gap_X){
      context.moveTo(g, 0);
      context.lineTo(g, line_Y);
    }
    for(var f = line_grid_gap_Y; f < line_Y; f += line_grid_gap_Y){
      context.moveTo(0, f);
      context.lineTo(line_X, f);
    }
    context.stroke();

    //keterangan warna line
    context.save();
    context.fillStyle = gradR1;
    context.fillRect(line_X + 25, line_Y / 2 + 29, line_grid_gap_X/8, line_grid_gap_X/25);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Alam", line_X + 50, (line_Y / 2 + 25) * -1);
    context.restore();

    context.save();
    context.fillStyle = gradR2;
    context.fillRect(line_X + 25, line_Y / 2 + 4, line_grid_gap_X/8, line_grid_gap_X/25);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Non Alam", line_X + 50, (line_Y / 2) * -1);
    context.restore();

    context.save();
    context.fillStyle = gradR3;
    context.fillRect(line_X + 25, line_Y / 2 - 21, line_grid_gap_X/8, line_grid_gap_X/25);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Sosial", line_X + 50, (line_Y / 2 - 25) * -1);
    context.restore();

    //bikin line chart
    context.lineWidth = line_grid_gap_X / 25;
    for(var i = 0; i < tahun.length; i++){
      context.save();
      context.beginPath();
      context.strokeStyle = gradR1; //Bencana Alam
      context.moveTo(line_grid_gap_X*(i+1), tahun[i][1] / maks_death * line_Y);
      context.lineTo(line_grid_gap_X*(i+2), tahun[i+1][1] / maks_death * line_Y);
      context.stroke();
      context.restore();

      context.save();
      context.beginPath();
      context.strokeStyle = gradR2; //Bencana Non Alam
      context.moveTo(line_grid_gap_X*(i+1), tahun[i][2] / maks_death * line_Y);
      context.lineTo(line_grid_gap_X*(i+2), tahun[i+1][2] / maks_death * line_Y);
      context.stroke();
      context.restore();

      context.save();
      context.beginPath();
      context.strokeStyle = gradR3; //Bencana Sosial
      context.moveTo(line_grid_gap_X*(i+1), tahun[i][3] / maks_death * line_Y);
      context.lineTo(line_grid_gap_X*(i+2), tahun[i+1][3] / maks_death * line_Y);
      context.stroke();
      context.restore();
    }
   }
   barchart();
   topchart0();
   topchart1();
   topchart2();
   linechart();


  

    

  

  };
};

canvasSketch(sketch, settings);
