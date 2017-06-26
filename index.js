var assert = require("assert");


function ejercicio1(_arr,_num){
	var res=0;
	
	var res=_arr.reduce(function(_total,_actual){
		return _total * _actual;
	});
	if(isNaN(_num)){
		res= res*_num;
	}
	return res;
}
describe('ejercicio 1',function(){
	it('Prueba de [2,3] y 10',function(){
		//se llama ala funcion que ya se definio.
		assert.equal('60', ejercicio1([2,3],10));//el vALO Q debe dar al ejecutar la funcion es 60
	});
	it('Prueba de [2,3] y hola',function(){
		//se llama ala funcion que ya se definio.
		assert.equal('6', ejercicio1([2,3],"hola"));//el vALO Q debe dar al ejecutar la funcion es 60
	});
	it('Prueba de [2,3] y nada',function(){
		//se llama ala funcion que ya se definio.
		assert.equal('6', ejercicio1([2,3]));//el vALO Q debe dar al ejecutar la funcion es 60
	});
	it('Prueba de 2,3 y hola',function(){
		//se llama ala funcion que ya se definio.
		assert.equal('6', ejercicio1(2,3,"hola"));//el vALO Q debe dar al ejecutar la funcion es 60
	});


});