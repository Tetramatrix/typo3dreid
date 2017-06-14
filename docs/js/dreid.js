//////////////////////////////////////////////////////////
// Disable Right Mouse Click                            //   
//////////////////////////////////////////////////////////
document.oncontextmenu = disableRightClick;
function disableRightClick(){
 return false;
}
var message=""
function click(e){
if (navigator.appName == "Netscape" &&
(e.which == 3 || e.which == 2))
return false;if (document.all){
if (event.button == 3){
return false;
}
if (event.button == 2){
return false;
}
}if (document.layers){
if (e.which == 3){
return false;
}
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);document.captureEvents(Event.MOUSEUP);
}
document.onmousedown=click;document.onmouseup=click;

//////////////////////////////////////////////////////////
// Sound                                                //   
//////////////////////////////////////////////////////////
//document.write('<div id="sound" style="position:absolute; left:1px; top:1px;padding:0px; visibility:hidden;z-index:0"><bgsound src="media/mindbomb.mid" loop="infinite"></div>');

//document.write('<div id="soundns" style="position:absolute; left:1px; top:1px;padding:0px; visibility:hidden;z-index:0"><embed src="media/mindbomb.mid" autostart="true" loop="true" hidden="true" height="0" width="0"></div>');
//////////////////////////////////////////////////////////
// Anzeige                                              //   
//////////////////////////////////////////////////////////
document.write('<div id="cpu" style="position:absolute;left:600px;top:522px;padding:0px;width:110px;height:10px;font-size:12px;visibility:show;z-index:10"></div>');

/******************************************************/
/* Vektorballs Version 1.0 09.01.2002                 */
/*             Version 1.1 11.01.2003                 */
/* (c) Chi Hoamg, 2003 All rights reserved            */
/* info@chihoang.de                                   */
/* http://www.chihoang.de                             */
/* Browser: MS Internet Explorer 6.x, Mozilla 1.1     */
/* Editor: EditPlus                                   */            
/******************************************************/ 

var Sin = new Array(360);for(i=0;i<360;i++)Sin[i]=Math.sin(i*3.1415927/180);
var Cos = new Array(360);for(i=0;i<360;i++)Cos[i]=Math.cos(i*3.1415927/180);

var Sprite = new Array(9);
Sprite[0] = new Image(); Sprite[0].src="gfx/ballrot.gif";
Sprite[1] = new Image(); Sprite[1].src="gfx/ballblau.gif";
Sprite[2] = new Image(); Sprite[2].src="gfx/ballgruen.gif";
Sprite[3] = new Image(); Sprite[3].src="gfx/ballgelb.gif";
Sprite[4] = new Image(); Sprite[4].src="gfx/ballora.gif";
Sprite[5] = new Image(); Sprite[5].src="gfx/balltuerk.gif";
Sprite[6] = new Image(); Sprite[6].src="gfx/ballmag.gif";
Sprite[7] = new Image(); Sprite[7].src="gfx/ballcya.gif";
Sprite[8] = new Image(); Sprite[8].src="gfx/ballgruen.gif";

var temp;
temp=Math.round(Math.random()*8);
for (i=0;i<56;i++) {
document.write('<div id="Sprite'+i+'" style="position:absolute; left:-100px; top:-100px;padding:0px; visibility:show;z-index:20"><img src="' + Sprite[temp].src + '"></div>');
}

var screenWidth=700; var wWidth=100; var wHeight=40; var A=(screenWidth-wWidth)/2; var stab=new Array(wHeight*6);
  for (i=0;i<stab.length;i++) {
   t=2*i*Math.PI/stab.length;
   stab[i]=Math.cos(t)*A*0.8+400;
  }

 var stab02=new Array(wHeight*6);
  for (i=0;i<stab02.length;i++) {
   t=2*i*Math.PI/stab02.length;
   stab02[i]=Math.sin(t)*A*0.8+400;
  }

 var stab03=new Array(wHeight*6);
  for (i=0;i<stab03.length;i++) {
   t=2*i*Math.PI/stab03.length;
   stab03[i]=Math.sin(t)*A*0.1+250;
  }

/*************************************************************************/
/*** Figur erstellen (Dot-Ball) (c) Elmar http://www.elmar-wisotzki.de ***/
/*************************************************************************/
/* geometrische Randbedingungen des Balls (variabel) */
var dpring     =  8; // dots pro Ring
var ringe      =  7; // ungerade, um Mittelring zu erhalten (zwingend!)
var min_radius = 50; // Radius des Mittelrings bei kleinstem zoom

/* geometrische Hilfsgroessen */ 
var vollkreis = 360;
var zwinkel   = 180/ringe;        // Winkel zwischen 2 Ringen vom Koordinatenursprung aus gesehen
var w_step    = vollkreis/dpring; // Winkelschritt zwischen 2 benachbarten Dots
/* Ball-Parameter Array */      
var xradien=new Array(ringe-1);   // x-Radien der einzelnen Ringe = y-Radien
var zhoehen=new Array(ringe-1);   // Hoehe in z-Richtung
/* oberer Halbkreis */
for (i=0; i<(ringe/2); ++i){
  k=(Math.PI*zwinkel*i)/180;
  xradien[i]=Math.cos(k)*min_radius;
  zhoehen[i]=Math.sin(k)*min_radius;
}
/* unterer Halbkreis*/
for (i=(ringe+1)/2; i<ringe; ++i){
  xradien[i]= xradien[i-(ringe-1)/2];
  zhoehen[i]=-zhoehen[i-(ringe-1)/2];
}
/* Figur anlegen */
var dots = dpring*ringe;        // alle vorhandenen Dots
var koor_x = new Array(dots-1); // jeder Dot wird durch (koor_x[nr],koor_y[nr],koor_z[nr]) angesprochen
var koor_y = new Array(dots-1);
var koor_z = new Array(dots-1);
for (j=0; j<ringe; ++j) // Dot-Ball
{
  for (i=0; i<vollkreis; i=i+w_step)
  {
    k=(Math.PI*i)/180;
    koor_x[i/w_step+j*dpring]=(Math.cos(k))*xradien[j];
    koor_y[i/w_step+j*dpring]=(Math.sin(k))*xradien[j];
    koor_z[i/w_step+j*dpring]=zhoehen[j];
  }
}
/* Ende Dot-Ball */

var Ortsvektor;

var Matrizen=new Array(56); for (i=0;i<56;i++) Matrizen[i] = new Array(3);
var hilfsMatrizen=new Array(56); for (i=0;i<56;i++) hilfsMatrizen[i] = new Array(3);

var Ortsvektor0=new Array(56); for (i=0;i<56;i++) Ortsvektor0[i] = new Array(3);
for (i=0;i<56;i++) {
Ortsvektor0[i][0]=koor_x[i];Ortsvektor0[i][1]=koor_y[i];Ortsvektor0[i][2]=koor_z[i];
}

/**************************************************/
// Figur Würfel by Michaël (_SoLO_) THOMAS  
// 21/07/99
// MikeJ51@hotmail.com
/**************************************************/

var temp=0;p=40, d=0; var Ortsvektor1=new Array(56);
for (i=0;i<4;i++) {
 Ortsvektor1[temp] = new Array(p,p,p-d);
 Ortsvektor1[temp+1] = new Array(p,-p+d,p);
 Ortsvektor1[temp+2] = new Array(-p+d,p,p);
 Ortsvektor1[temp+3] = new Array(-p,-p+d,p);
 Ortsvektor1[temp+4] = new Array(p-d,p,-p);
 Ortsvektor1[temp+5] = new Array(p,-p+d,-p);
 Ortsvektor1[temp+6] = new Array(-p,p,-p+d);
 Ortsvektor1[temp+7] = new Array(-p,-p+d,-p);
 temp+=8;d+=20;
}
temp=8*4;d=20;
for (i=0;i<3;i++) {
 Ortsvektor1[temp] = new Array(p,p,p);  //wird nicht gebraucht...
 Ortsvektor1[temp+1] = new Array(p,-p,p-d);  
 Ortsvektor1[temp+2] = new Array(-p,p,p); //wird nicht gebraucht...
 Ortsvektor1[temp+3] = new Array(-p+d,-p,p); 
 Ortsvektor1[temp+4] = new Array(p,p,-p); //wird nicht gebraucht...
 Ortsvektor1[temp+5] = new Array(p-d,-p,-p); 
 Ortsvektor1[temp+6] = new Array(-p,p,-p); //wird nicht gebraucht...
 Ortsvektor1[temp+7] = new Array(-p,-p,-p+d); 
 temp+=8;d+=20;
}

/**************************************************/
// Cone by Chi Hoang
// "Oh Gott, ich habe keine Ahnung von Maya."
// info@chihoang.de                                  
// http://www.chihoang.de                            
/**************************************************/

maya01=new Array(1.000000,0.000000,-0.000000,-1.000000,-0.000000,0.000000,0.174074,-0.000000,0.981495,0.762963,-0.000000,0.641500,0.666667,0.666667,-0.000000,0.508642,0.666667,0.427667,0.624691,0.666667,0.226663,0.937037,-0.000000,0.339995,0.333333,1.333333,0.000000,0.312346,1.333333,0.113332,0.254321,1.333333,0.213833,0.116049,0.666667,0.654330,0.500000,-0.000000,0.866025,0.333333,0.666667,0.577350,0.166667,1.333333,0.288675,0.058025,1.333333,0.327165,-0.500000,-0.000000,0.866025,-0.333333,0.666667,0.577350,-0.174074,-0.000000,0.981495,-0.116049,0.666667,0.654330,-0.058025,1.333333,0.327165,-0.166667,1.333333,0.288675,-0.762963,-0.000000,0.641500,-0.508642,0.666667,0.427667,-0.254321,1.333333,0.213833,-0.666667,0.666667,0.000000,-0.937037,-0.000000,0.339995,-0.624691,0.666667,0.226663,-0.312346,1.333333,0.113332,-0.333333,1.333333,0.000000,-0.174074,0.000000,-0.981495,-0.762963,0.000000,-0.641500,-0.508642,0.666667,-0.427667,-0.937037,0.000000,-0.339995,-0.624691,0.666667,-0.226663,-0.312346,1.333333,-0.113332,-0.254321,1.333333,-0.213833,-0.116049,0.666667,-0.654330,-0.500000,0.000000,-0.866025,-0.333333,0.666667,-0.577350,-0.166667,1.333333,-0.288675,-0.058025,1.333333,-0.327165,0.500000,0.000000,-0.866025,0.333333,0.666667,-0.577350,0.174074,0.000000,-0.981495,0.116049,0.666667,-0.654330,0.058025,1.333333,-0.327165,0.166667,1.333333,-0.288675,0.762963,0.000000,-0.641500,0.508642,0.666667,-0.427667,0.254321,1.333333,-0.213833,0.937037,0.000000,-0.339995,0.624691,0.666667,-0.226663,0.000000,2.000000,0.000000,0.312346,1.333333,-0.113332,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000,1.000000,0.000000,-0.000000);
var Ortsvektor2=new Array(56);  for (i=0;i<56;i++) Ortsvektor2[i] = new Array(3);
var scale=35;temp=0;
for (i=0;i<56;i++) {
Ortsvektor2[i][0]=maya01[temp]*scale;Ortsvektor2[i][1]=maya01[temp+1]*scale-15;Ortsvektor2[i][2]=maya01[temp+2]*scale;temp+=3;
}
// bißchen drehen...
Matrizen=Ortsvektor2;xRotation(180);


/**************************************************/
// Logo by Chi Hoang
// info@chihoang.de                                  
// http://www.chihoang.de                            
/**************************************************/

var p="*";
chi01=new Array(
0,p,p,p,p,p,0,0,
p,p,p,p,p,p,p,0,
p,p,0,0,0,0,0,0,
p,p,0,0,0,0,0,0,
p,p,0,0,0,0,0,0,
p,p,p,p,p,p,p,0,
0,p,p,p,p,p,0,0);

var Ortsvektor3=new Array(56);  for (i=0;i<56;i++) Ortsvektor3[i] = new Array(3);
var scale=35;temp=0;
for (r=0;r<7;r++ ){
for (i=0;i<8;i++) {
if (chi01[temp]==p){
Ortsvektor3[temp][0]=i*20;
Ortsvektor3[temp][1]=r*20;
Ortsvektor3[temp][2]=0;
} else {
Ortsvektor3[temp][0]=20;
Ortsvektor3[temp][1]=0;
Ortsvektor3[temp][2]=0;
}
temp+=1;
}
}
for (i=0;i<56;i++) {
Ortsvektor3[i][1]-=70;
}

/**************************************************/
// Atari Logo by Chi Hoang
// info@chihoang.de                                  
// http://www.chihoang.de                            
/**************************************************/

var p="*";
Logo01=new Array(
0,0,p,0,p,0,p,0,0,
0,0,p,0,p,0,p,0,0,
0,0,p,0,p,0,p,0,0,
0,0,p,0,p,0,p,0,0,
0,p,0,0,p,0,0,p,0,
p,0,0,0,p,0,0,0,p);

var Ortsvektor4=new Array(56);  for (i=0;i<56;i++) Ortsvektor4[i] = new Array(3);
var scale=35;temp=0;
for (r=0;r<6;r++ ){
for (i=0;i<9;i++) {
if (Logo01[temp]==p){
Ortsvektor4[temp][0]=i*10;
Ortsvektor4[temp][1]=r*10;
Ortsvektor4[temp][2]=0;
} else {
Ortsvektor4[temp][0]=-10;
Ortsvektor4[temp][1]=5*10;
Ortsvektor4[temp][2]=0;
}
temp+=1;
}
}
Ortsvektor4[temp][0]=-10;
Ortsvektor4[temp][1]=5*10;
Ortsvektor4[temp][2]=0;
temp+=1;
Ortsvektor4[temp][0]=9*10;
Ortsvektor4[temp][1]=5*10;
Ortsvektor4[temp][2]=0;
for (i=0;i<56;i++) {
Ortsvektor4[i][1]-=30;
}

/**************************************************/
// Smilie by Chi Hoang
// info@chihoang.de                                  
// http://www.chihoang.de                            
/**************************************************/

var p="*";
Logo02=new Array(
p,p,0,0,0,0,p,p,
p,p,0,0,0,0,p,p,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
p,p,0,0,0,0,p,p,
0,p,p,0,0,p,p,0,
0,0,p,p,p,p,0,0);

var Ortsvektor5=new Array(56);  for (i=0;i<56;i++) Ortsvektor5[i] = new Array(3);
var scale=35;temp=0;
for (r=0;r<7;r++ ){
for (i=0;i<8;i++) {
if (Logo02[temp]==p){
Ortsvektor5[temp][0]=i*10;
Ortsvektor5[temp][1]=r*10;
Ortsvektor5[temp][2]=0;
} else {
Ortsvektor5[temp][0]=0;
Ortsvektor5[temp][1]=0;
Ortsvektor5[temp][2]=0;
}
temp+=1;
}
}
for (i=0;i<56;i++) {
Ortsvektor5[i][1]-=35;
}

/**************************************************/
// Transform technique by Michaël (_SoLO_) THOMAS  
// 21/07/99
// MikeJ51@hotmail.com
/**************************************************/

var step=50; var Transform;

// Würfel -> Kugel
var Transform01=new Array(56);  for (i=0;i<56;i++) Transform01[i] = new Array(3);
for (i=0;i<56;i++) {
Transform01[i][0]=(Ortsvektor0[i][0]-Ortsvektor1[i][0])/step;
Transform01[i][1]=(Ortsvektor0[i][1]-Ortsvektor1[i][1])/step;
Transform01[i][2]=(Ortsvektor0[i][2]-Ortsvektor1[i][2])/step;
}

// Kugel -> Würfel
var Transform02=new Array(56);  for (i=0;i<56;i++) Transform02[i] = new Array(3);
for (i=0;i<56;i++) {
Transform02[i][0]=(Ortsvektor1[i][0]-Ortsvektor0[i][0])/step;
Transform02[i][1]=(Ortsvektor1[i][1]-Ortsvektor0[i][1])/step;
Transform02[i][2]=(Ortsvektor1[i][2]-Ortsvektor0[i][2])/step;
}

// Würfel -> Cone
var Transform03=new Array(56);  for (i=0;i<56;i++) Transform03[i] = new Array(3);
for (i=0;i<56;i++) {
Transform03[i][0]=(Ortsvektor2[i][0]-Ortsvektor1[i][0])/step;
Transform03[i][1]=(Ortsvektor2[i][1]-Ortsvektor1[i][1])/step;
Transform03[i][2]=(Ortsvektor2[i][2]-Ortsvektor1[i][2])/step;
}

// Cone -> Logo
var Transform04=new Array(56);  for (i=0;i<56;i++) Transform04[i] = new Array(3);
for (i=0;i<56;i++) {
Transform04[i][0]=(Ortsvektor3[i][0]-Ortsvektor2[i][0])/step;
Transform04[i][1]=(Ortsvektor3[i][1]-Ortsvektor2[i][1])/step;
Transform04[i][2]=(Ortsvektor3[i][2]-Ortsvektor2[i][2])/step;
}

// Logo -> Atari Logo
var Transform05=new Array(56);  for (i=0;i<56;i++) Transform05[i] = new Array(3);
for (i=0;i<56;i++) {
Transform05[i][0]=(Ortsvektor4[i][0]-Ortsvektor3[i][0])/step;
Transform05[i][1]=(Ortsvektor4[i][1]-Ortsvektor3[i][1])/step;
Transform05[i][2]=(Ortsvektor4[i][2]-Ortsvektor3[i][2])/step;
}

// Atari Logo -> Smilie
var Transform06=new Array(56);  for (i=0;i<56;i++) Transform06[i] = new Array(3);
for (i=0;i<56;i++) {
Transform06[i][0]=(Ortsvektor5[i][0]-Ortsvektor4[i][0])/step;
Transform06[i][1]=(Ortsvektor5[i][1]-Ortsvektor4[i][1])/step;
Transform06[i][2]=(Ortsvektor5[i][2]-Ortsvektor4[i][2])/step;
}

// Smilie -> Kugel
var Transform07=new Array(56);  for (i=0;i<56;i++) Transform07[i] = new Array(3);
for (i=0;i<56;i++) {
Transform07[i][0]=(Ortsvektor0[i][0]-Ortsvektor5[i][0])/step;
Transform07[i][1]=(Ortsvektor0[i][1]-Ortsvektor5[i][1])/step;
Transform07[i][2]=(Ortsvektor0[i][2]-Ortsvektor5[i][2])/step;
}

function transf() {
if (step>0) {
step--;
for (i=0;i<56;i++) {
Matrizen[i][0]+=Transform[i][0];Matrizen[i][1]+=Transform[i][1];Matrizen[i][2]+=Transform[i][2];
} 
} else {
step=50;hilf_transf=0;morph+=1; if (morph>6) morph=1
temp=Math.round(Math.random()*8);
temp=Sprite[temp].src; var hilf=0;
for (i=0;i<7;i++) {
eval("Vektor"+(hilf)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+1)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+2)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+3)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+4)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+5)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+6)).innerHTML='<img src="' + temp + '">';
eval("Vektor"+(hilf+7)).innerHTML='<img src="' + temp + '">';
hilf+=8;
}
}
}

var d = 500;

/*********************************************************************/
// Meine alten Routinen, ....
/*********************************************************************/
function Skalierung(Fx,Fy,Fz){
for (i=0;i<56;i++) {
Matrizen[i][0]=Matrizen[i][0]*Fx;Matrizen[i][1]=Matrizen[i][1]*Fy;Matrizen[i][2]=Matrizen[i][2]*Fz;
}
}
function zRotation(Theta){
hilf3=Cos[Theta];hilf4=Sin[Theta];
for (i=0;i<56;i++) {
hilf1=Matrizen[i][0];hilf2=Matrizen[i][1];
Matrizen[i][0]=hilf1*hilf3-hilf2*hilf4;Matrizen[i][1]=hilf1*hilf4+hilf2*hilf3;
}
}
function xRotation(Theta){
hilf3=Cos[Theta];hilf4=Sin[Theta];
for (i=0;i<56;i++) {
hilf1=Matrizen[i][1];hilf2=Matrizen[i][2];
Matrizen[i][1]=hilf1*hilf3-hilf2*hilf4;Matrizen[i][2]=hilf1*hilf4+hilf2*hilf3;
}
}
function yRotation(Theta){
hilf3=Cos[Theta];hilf4=Sin[Theta];
for (i=0;i<56;i++) {
hilf1=Matrizen[i][0];hilf2=Matrizen[i][2];
Matrizen[i][0]=hilf1*hilf3+hilf2*hilf4;Matrizen[i][2]=-(hilf1*hilf4)+hilf2*hilf3;
}
}
function perspektivischeAbbildung(hilf){
var tempz, tempx, tempy;
tempz=stab[hilf];tempx=stab02[hilf];tempy=stab03[hilf];
for (i=0;i<56;i++) {
hilf1=Matrizen[i][2]+tempz;
Matrizen[i][0]=d*Matrizen[i][0]/hilf1+tempx;Matrizen[i][1]=d*Matrizen[i][1]/hilf1+tempy;
}
}

/***********************************************************************************************************/
// 3d rout by Michaël (_SoLO_) THOMAS
// 21/07/99
// MikeJ51@hotmail.com
//
// Adapted by Chi Hoang 19.03.03
// Ursprünglich dreht dies rout (x,y,z). ich habe die perspektivische Abbildung und die Anzeige hinzugefügt.
// Leider kann man den code nicht mehr so gut lesen, es geht aber um die Schnelligkeit :)
// info@chihoang.de  
// http://www.chihoang.de 
/***********************************************************************************************************/

function rotation3d(hilf, angle_x, angle_y, angle_z) {
var temp=0, tempz, tempx, tempy;
tempz=stab[hilf];tempx=stab02[hilf];tempy=stab03[hilf];

hilf1=Cos[angle_x];hilf2=Sin[angle_x];hilf3=Cos[angle_z];hilf4=Sin[angle_z];hilf5=Cos[angle_y];hilf6=Sin[angle_y];

for (i=0;i<7;i++) {

temp1=Matrizen[temp][1];temp2=Matrizen[temp][2];temp3=Matrizen[temp][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+temp)) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+1][1];temp2=Matrizen[temp+1][2];temp3=Matrizen[temp+1][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+1))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+2][1];temp2=Matrizen[temp+2][2];temp3=Matrizen[temp+2][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+2))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+3][1];temp2=Matrizen[temp+3][2];temp3=Matrizen[temp+3][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+3))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+4][1];temp2=Matrizen[temp+4][2];temp3=Matrizen[temp+4][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+4))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+5][1];temp2=Matrizen[temp+5][2];temp3=Matrizen[temp+5][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+5))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+6][1];temp2=Matrizen[temp+6][2];temp3=Matrizen[temp+6][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+6))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}

temp1=Matrizen[temp+7][1];temp2=Matrizen[temp+7][2];temp3=Matrizen[temp+7][0];
roty1=temp1*hilf1-temp2*hilf2;rotz1=temp1*hilf2+temp2*hilf1;rotx2=temp3*hilf5+rotz1*hilf6;
temp_z=(-temp3*hilf6+rotz1*hilf5)+tempz;
temp_x=d*(rotx2*hilf3-roty1*hilf4)/temp_z+tempx;temp_y=d*(rotx2*hilf4+roty1*hilf3)/temp_z+tempy;
with (eval("Vektor"+(temp+7))) {style.left=temp_x;style.top=temp_y;style.zIndex=1000-temp_z}
temp+=8;
}
}

function MatrizenInit(){
for (i=0;i<56;i++) {
Matrizen[i][0]=Ortsvektor[i][0];Matrizen[i][1]=Ortsvektor[i][1];Matrizen[i][2]=Ortsvektor[i][2];
}
}

var rx=0,ry=0,rz=0;
Ortsvektor=Ortsvektor0;MatrizenInit();

var tempt=0, morph=1, hilf_transf=0; step=50, vbl=0, old_vbl=0, hilf_timer=0; 

function Juggler() {
var zeit01=new Date();var vorher=zeit01.getTime();

tempt+=1; 
if (tempt>wHeight*6-1){
tempt=0; hilf_transf+=1; if (hilf_transf>2) hilf_transf=0;
}
switch(hilf_transf) {
case 2:
switch (morph){
case 1:Transform=Transform02;transf();break;
case 2:Transform=Transform03;transf();break;
case 3:Transform=Transform04;transf();break;
case 4:Transform=Transform05;transf();break;
case 5:Transform=Transform06;transf();break;
case 6:Transform=Transform07;transf();break;
}
break;
}

rotation3d(tempt,rx,ry,rz);
rx+=2;ry+=4;rz+=2;
if (rx>359) rx=0;if (ry>359) ry=0;if (rz>359) rz=0;

var zeit02=new Date();var nachher=zeit02.getTime();temp=(nachher-vorher);vbl=temp/20;if (vbl>old_vbl) old_vbl=vbl;hilf_timer+=1;
switch(hilf_timer){
case 20: hilf_cpu.innerHTML='<span id="fussnote">VBL: '+(old_vbl).toFixed(2)+' (Peak)<br>VBL: '+(vbl).toFixed(2)+' (Current)</span>';hilf_timer=0;break;
}
}  

function Init() {

hilf_cpu = eval(document.getElementById("cpu"));

Vektor0 = eval(document.getElementById("Sprite0"));
Vektor1 = eval(document.getElementById("Sprite1"));
Vektor2 = eval(document.getElementById("Sprite2"));
Vektor3 = eval(document.getElementById("Sprite3"));
Vektor4 = eval(document.getElementById("Sprite4"));
Vektor5 = eval(document.getElementById("Sprite5"));
Vektor6 = eval(document.getElementById("Sprite6"));
Vektor7 = eval(document.getElementById("Sprite7"));
Vektor8 = eval(document.getElementById("Sprite8"));

Vektor9 = eval(document.getElementById("Sprite9"));
Vektor10 = eval(document.getElementById("Sprite10"));
Vektor11 = eval(document.getElementById("Sprite11"));
Vektor12 = eval(document.getElementById("Sprite12"));
Vektor13 = eval(document.getElementById("Sprite13"));
Vektor14 = eval(document.getElementById("Sprite14"));
Vektor15 = eval(document.getElementById("Sprite15"));
Vektor16 = eval(document.getElementById("Sprite16"));
Vektor17 = eval(document.getElementById("Sprite17"));

Vektor18 = eval(document.getElementById("Sprite18"));
Vektor19 = eval(document.getElementById("Sprite19"));
Vektor20 = eval(document.getElementById("Sprite20"));
Vektor21 = eval(document.getElementById("Sprite21"));
Vektor22 = eval(document.getElementById("Sprite22"));
Vektor23 = eval(document.getElementById("Sprite23"));
Vektor24 = eval(document.getElementById("Sprite24"));
Vektor25 = eval(document.getElementById("Sprite25"));
Vektor26 = eval(document.getElementById("Sprite26"));

Vektor27 = eval(document.getElementById("Sprite27"));
Vektor28 = eval(document.getElementById("Sprite28"));
Vektor29 = eval(document.getElementById("Sprite29"));
Vektor30 = eval(document.getElementById("Sprite30"));
Vektor31 = eval(document.getElementById("Sprite31"));
Vektor32 = eval(document.getElementById("Sprite32"));
Vektor33 = eval(document.getElementById("Sprite33"));
Vektor34 = eval(document.getElementById("Sprite34"));
Vektor35 = eval(document.getElementById("Sprite35"));

Vektor36 = eval(document.getElementById("Sprite36"));
Vektor37 = eval(document.getElementById("Sprite37"));
Vektor38 = eval(document.getElementById("Sprite38"));
Vektor39 = eval(document.getElementById("Sprite39"));
Vektor40 = eval(document.getElementById("Sprite40"));
Vektor41 = eval(document.getElementById("Sprite41"));
Vektor42 = eval(document.getElementById("Sprite42"));
Vektor43 = eval(document.getElementById("Sprite43"));
Vektor44 = eval(document.getElementById("Sprite44"));

Vektor45 = eval(document.getElementById("Sprite45"));
Vektor46 = eval(document.getElementById("Sprite46"));
Vektor47 = eval(document.getElementById("Sprite47"));
Vektor48 = eval(document.getElementById("Sprite48"));
Vektor49 = eval(document.getElementById("Sprite49"));
Vektor50 = eval(document.getElementById("Sprite50"));
Vektor51 = eval(document.getElementById("Sprite51"));
Vektor52 = eval(document.getElementById("Sprite52"));
Vektor53 = eval(document.getElementById("Sprite53"));

Vektor54 = eval(document.getElementById("Sprite54"));
Vektor55 = eval(document.getElementById("Sprite55"));

aktiv1 = window.setInterval("Juggler()",20);
}
