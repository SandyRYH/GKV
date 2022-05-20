const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1400, 1000]
};

const total_death = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
const maks_death = 100000;
const tahun = [
  [2010, 0, 0, 0],
  [2011, 0, 0, 0], 
  [2012, 0, 0, 0], 
  [2013, 0, 0, 0], 
  [2014, 0, 0, 0],
  [2015, 0, 0, 0]
];
var data = [
  ["Nama Penyebab", "Bencana Alam", 2010, 5000], 
  ["Nama Penyebab", "Bencana Non Alam", 2010, 2000],
  ["Nama Penyebab", "Bencana Sosial", 2010, 3000],
  ["Nama Penyebab", "Bencana Alam", 2011, 5000],
  ["Nama Penyebab", "Bencana Alam", 2011, 5000],
  ["Nama Penyebab", "Bencana Non Alam", 2013, 50000],
  ["Nama Penyebab", "Bencana Sosial", 2012, 15000],
  ["Nama Penyebab", "Bencana Non Alam", 2010, 7000],
  ["Nama Penyebab", "Bencana Alam", 2013, 21000],
  ["Nama Penyebab", "Bencana Non Alam", 2014, 18000],
  ["Nama Penyebab", "Bencana Alam", 2011, 8000],
  ["Nama Penyebab", "Bencana Non Alam", 2011, 12000],
  ["Nama Penyebab", "Bencana Non Alam", 2012, 10000],
  ["Nama Penyebab", "Bencana Non Alam", 2015, 18000],
  ["Nama Penyebab", "Bencana Sosial", 2012, 25000],
];

//ukuran bg chart
const maks_X = 1000;
const maks_Y = 800;

//jarak chart dengan bg belakang
const bot_gap = 110;
const left_gap = 120;

const grid_gap_X = maks_X / (tahun.length + 1);
const grid_gap_Y = maks_Y / (total_death.length + 1);

const sketch = () => {
  return ({ context, width, height }) => {
    //white background belakang
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    //create label di sumbu x dan y
    context.save();
    context.fillStyle = 'black';
    context.font = "20px Arial";
    for(var n = 0; n < total_death.length; n++){
      context.fillText(total_death[n], left_gap-30, height-bot_gap+8 - (n + 1)*grid_gap_Y);
    }
    for(var m = 0; m < tahun.length; m++){
      context.fillText(tahun[m][0], left_gap-20 + (m + 1)*grid_gap_X, height-bot_gap+30);
    }
    context.restore();

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
    context.fillText("Jumlah kematian (ribu)", 0, -55);
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
    
    //nyimpen data[jumlah kematian] di tahun
    for(var i = 0; i < data.length; i++){
      context.save();

      switch(data[i][2]){
        case 2010:
          if(data[i][1] == "Bencana Alam"){
            tahun[0][1] += data[i][3];
          }
          else if(data[i][1] == "Bencana Non Alam"){
            tahun[0][2] += data[i][3];
          }
          else if(data[i][1] == "Bencana Sosial"){
            tahun[0][3] += data[i][3];
          }
          break;
        
        case 2011:
          if(data[i][1] == "Bencana Alam"){
            tahun[1][1] += data[i][3];
          }
          else if(data[i][1] == "Bencana Non Alam"){
            tahun[1][2] += data[i][3];
          }
          else if(data[i][1] == "Bencana Sosial"){
            tahun[1][3] += data[i][3];
          }
          break;

        case 2012:
          if(data[i][1] == "Bencana Alam"){
            tahun[2][1] += data[i][3];
          }
          else if(data[i][1] == "Bencana Non Alam"){
            tahun[2][2] += data[i][3];
          }
          else if(data[i][1] == "Bencana Sosial"){
            tahun[2][3] += data[i][3];
          }
          break;

        case 2013:
          if(data[i][1] == "Bencana Alam"){
              tahun[3][1] += data[i][3];
          }
          else if(data[i][1] == "Bencana Non Alam"){
            tahun[3][2] += data[i][3];
          }
          else if(data[i][1] == "Bencana Sosial"){
            tahun[3][3] += data[i][3];
          }
          break;

        case 2014:
          if(data[i][1] == "Bencana Alam"){
            tahun[4][1] += data[i][3];
          }
          else if(data[i][1] == "Bencana Non Alam"){
            tahun[4][2] += data[i][3];
          }
          else if(data[i][1] == "Bencana Sosial"){
            tahun[4][3] += data[i][3];
          }
          break;

        case 2015:
          if(data[i][1] == "Bencana Alam"){
            tahun[5][1] += data[i][3];
          }
          else if(data[i][1] == "Bencana Non Alam"){
            tahun[5][2] += data[i][3];
          }
          else if(data[i][1] == "Bencana Sosial"){
            tahun[5][3] += data[i][3];
          }
          break;
      }
    }

    //bikin bar chart
    const bar_width = grid_gap_X / 4;

    for(var i = 0; i < tahun.length; i++){
      context.save();
      context.fillStyle = "Red"; //Bencana Alam
      context.fillRect(bar_width/2 - bar_width*2 + (grid_gap_X * (i + 1)), 0, bar_width, tahun[i][1] / maks_death * maks_Y);
      context.restore();

      context.save();
      context.fillStyle = "Green"; //Bencana Non Alam
      context.fillRect(bar_width/2 - bar_width + (grid_gap_X * (i + 1)), 0, bar_width, tahun[i][2] / maks_death * maks_Y);
      context.restore();

      context.save();
      context.fillStyle = "Blue"; //Bencana Sosial
      context.fillRect(bar_width/2 + (grid_gap_X * (i + 1)), 0, bar_width, tahun[i][3] / maks_death * maks_Y);
      context.restore();
    }
    
    //keterangan warna bar
    context.save();
    context.fillStyle = "Red";
    context.fillRect(maks_X + 25, maks_Y / 2 + 23, bar_width/2, bar_width/2);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Alam", maks_X + 50, (maks_Y / 2 + 25) * -1);
    context.restore();

    context.save();
    context.fillStyle = "Green";
    context.fillRect(maks_X + 25, maks_Y / 2 - 2, bar_width/2, bar_width/2);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Non Alam", maks_X + 50, (maks_Y / 2) * -1);
    context.restore();

    context.save();
    context.fillStyle = "Blue";
    context.fillRect(maks_X + 25, maks_Y / 2 - 27, bar_width/2, bar_width/2);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.scale(1, -1);
    context.fillText("Bencana Sosial", maks_X + 50, (maks_Y / 2 - 25) * -1);
    context.restore();

  };
};

canvasSketch(sketch, settings);
