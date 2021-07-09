
class Nodo{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.color=color(255,255,255);
		this.arcos=[];
	}
	agregarArco(arco){
		this.arcos.push(arco);
	}
	setColor(color){
		this.color=color;
	}
	show(){
		fill(this.color);
		ellipse(this.x,this.y,20,20);
		fill(0);
	}
	esNodo(x,y){
		let enX=(x<= (this.x+10))&&(x>=(this.x-10));
		let enY=(y<= (this.y+10))&&(y>=(this.y-10))
		return enX&&enY;
	}
	
	
}
class Arco{
	constructor(ndesde,nhasta){
		this.ndesde=ndesde;
		this.nhasta=nhasta;
		this.nodoSeleccionado;
	}
	esArco(nhasta,ndesde){
		return (this.ndesde.esNodo(ndesde)&&this.nhasta.esNodo(nhasta))||(this.ndesde.esNodo(nhasta)&&this.nhasta.esNodo(ndesde));
	}
	show(){
		this.ndesde.show();
		this.nhasta.show();
		stroke(255);
		strokeWeight(6);9
		let xi=this.xInic(this.ndesde.x,this.ndesde.y,this.nhasta.x,this.nhasta.y);
		let yi=this.yInic(this.ndesde.x,this.ndesde.y,this.nhasta.x,this.nhasta.y);
		let xf=this.xFin(this.ndesde.x,this.ndesde.y,this.nhasta.x,this.nhasta.y);
		let yf=this.yFin(this.ndesde.x,this.ndesde.y,this.nhasta.x,this.nhasta.y);
		line(xi,yi,xf,yf);
		strokeWeight(1);
		fill(0);
	}
	//En radianes
	calcularAngulo(x1,y1,x2,y2){
		let x=x2-x1;
		let y=y2-y1;
		let angulo=atan(abs(y)/abs(x));
		let deg=degrees(angulo);
		let lado;
		//-1 izquierdo,1 derecho
		let techo;
		//-1 abajo,1 arriba
		lado=1;
		if(x<0){
			lado=-1;
		}
		techo=1;
		if(y<0){
			techo=-1;
		}
		
		if(lado==-1&&techo==1){
			deg=180-deg;
		}
		if(lado==1&&techo==-1){
			deg=360-deg;
		}
		if(lado==-1&&techo==-1){
			deg=180+deg;
		}
		return radians(deg);
		
	}
	xInic(x1,y1,x2,y2){
		return x1+5*this.calcularAngulo(x1,y1,x2,y2);
	}
	yInic(x1,y1,x2,y2){
		return y1+5*this.calcularAngulo(x1,y1,x2,y2);
	}
	xFin(x1,y1,x2,y2){
		return x2-5*this.calcularAngulo(x1,y1,x2,y2);
	}
	yFin(x1,y1,x2,y2){
		return y2-5*this.calcularAngulo(x1,y1,x2,y2);
	}
	nodoSelec(){
		return this.nodoSeleccionado;
	}
	esNodo(x,y){
		let isNodoDesde=this.ndesde.esNodo(x,y); 
		let isNodoHasta=this.nhasta.esNodo(x,y);
		if(isNodoDesde){
			this.nodoSeleccionado=this.ndesde;
		}
		if(isNodoHasta){
			this.nodoSeleccionado=this.nhasta;
		}
		return isNodoDesde||isNodoHasta;
	}
	
	
	
}
class Grafo{
	constructor(){
		this.arcos=[];
		this.arcosSize=0;
	}
	agregarArco(arco){
		this.arcos.push(arco);
		this.arcosSize++;
	}
	show(){
		for(let i=0;i<this.arcosSize;i++){
			this.arcos[i].show();
		}
	}
	pintarNodo(x,y,color){
		
		for(let i=0;i<this.arcosSize;i++){
			if(this.arcos[i].esNodo(x,y)){
				let nodo=this.arcos[i].nodoSelec();
				nodo.setColor(color);
				break;
			}
		}
	}
	
}