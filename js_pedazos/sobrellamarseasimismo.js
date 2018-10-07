var x() = function (){
	return this}
var ob = {thx: x}
this
x
x()
xob.x
ob.thx() {thx if}

var speaker = {
  hi: function() {console.log (this.name);},
  name: 'Oscar',
  bye: function() {console.log('Bye'+nombre+'and'+this.name)}
}

var y = {name: 'Javier'}

speaker.hi();
speaker.hi.call(y);
speaker.hi.call(y, 'Tony');

//

var thing = function(){this;}
var sing = function(){return this;}
var ding = ()=> return this;
var ding2 = ()=> this

thing() // doesnt return
sing() // return window
ding() // doesnt return
ding2() // returns window

xx = { hey: sing}
yy = { hey: ding2}
xx.hey()
yy.hey()
