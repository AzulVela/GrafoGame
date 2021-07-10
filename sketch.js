let grafo;
function setup() {
	createCanvas(400,400);
	grafo = new Grafo();
	crearTest();
}

function draw() {
	background(0);
	grafo.show();
}
function mousePressed(){
	grafo.pintarNodo(mouseX,mouseY,color(255,0,0));

}
function crearTest(){
	let n1 = new Nodo(100,10);
	let n2=new Nodo(200,200);
	let n3 = new Nodo(300,50);
	let n4= new Nodo(200,300);
	let n5=new Nodo(20,150);
	let a12=new Arco(n1,n2);
	let a23=new Arco(n2,n3);
	let a34=new Arco(n3,n4);
	let a45=new Arco(n4,n5);
	grafo.agregarArco(a12);
	grafo.agregarArco(a23);
	grafo.agregarArco(a34);
	grafo.agregarArco(a45);
}
function crearEstrella(){
		let n1=new Nodo(200,10);
	let n2=new Nodo(230,100);
	let a12=new Arco(n1,n2);
	grafo.agregarArco(a12);
	let n3=new Nodo(390,110);
	let a23=new Arco(n2,n3);
	grafo.agregarArco(a23);
	let n4=new Nodo(300,220);
	let a34=new Arco(n3,n4);
	grafo.agregarArco(a34);
	let n5=new Nodo(350,390);
	let a45=new Arco(n4,n5);
	grafo.agregarArco(a45);
	let n6=new Nodo(200,350);
	let a56=new Arco(n5,n6);
	grafo.agregarArco(a56);
	let n7=new Nodo(50,390);
	let a67=new Arco(n6,n7);
	grafo.agregarArco(a67);
	let n8=new Nodo(100,220);
	let a78=new Arco(n7,n8);
	grafo.agregarArco(a78);
	let n9=new Nodo(10,110);
	let a89=new Arco(n8,n9);
	grafo.agregarArco(a89);
	let n10=new Nodo(170,100);
	let a910=new Arco(n9,n10);
	grafo.agregarArco(a910);
	let a101=new Arco(n10,n1);
	grafo.agregarArco(a101);
}