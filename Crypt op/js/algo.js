function extendedeuclidian(){
		document.getElementById("a").defaultValue = 180;
		document.getElementById("b").defaultValue = 150;
		var a = document.getElementById("a").value;
		var b = document.getElementById("b").value;
		a=parseInt(a);
		b=parseInt(b);
		var q,r,t1=0,t2=1,t;
		while(b!=0){
			q=a/b;
			r=a%b;
			a=b;
			b=r;
			t=t1-q*t2;
			t1=t2;
			t2=t;
		}
		t1=toInt(a);
		if(t1<0){
			t1=(t1+b)%b;
		}
		document.getElementById("write").innerHTML=t1;
	}

	function toInt(a){
		return Math.floor(a);
	}

function euclidian(){
		document.getElementById("a").defaultValue = 180;
		document.getElementById("b").defaultValue = 150;
		var x = document.getElementById("a").value;
		var ba = document.getElementById("b").value;
		a=parseInt(a);
		b=parseInt(b);
		var sum=[];
		var q,r,t1=0,t2=1,t;
		for(var i=0;i<ba;i++){
			b=i;
			a=x;
			while(b!=0){
				q=a/b;
				r=a%b;
				a=b;
				b=r;
			}
			if(a==1){
				sum.push(i);
			}
		}
		document.getElementById("write").setAttribute("style","visibility:visible;text-align:right;float:right;width:750px;height:70px")
		document.getElementById("write").innerHTML=sum;
}


function calculate(){
		primitive=[];
		var x = document.getElementById("primitive").value;
		alert(x);
		n=parseInt(x);
		var sum=[];
		count = 0;
		if(isPrime(n))
			{
				sum=printPrimitiveRoots(n);
			}
		document.getElementById("primitivewrite").setAttribute("style","visibility:visible;text-align:right;float:right;width:750px;height:70px")
		document.getElementById("primitivewrite").innerHTML=sum;
}

	function isPrime(n){
		for(i=2;i<=Math.sqrt(n);i++)
		{
			if(n%i==0)
				return false;

		}
		alert("prime");
		return true;
	}

	function printPrimitiveRoots(x)
	{
		var sum=[];
		for(var k=2;k<x;k++){
			var comparingArray = new Array(x-1);
			var remainderArray = new Array(x-1) ;
			var c = 1;

			for(var i=0;i<comparingArray.length;i++)
			{
				comparingArray[i] = i+1;
			}
			
			power = k;
			remainderArray[0] = power;
			
			for(var j=1;j<x-1;j++)
			{
				power = (power*k)%n;
				remainderArray[j] = power;
			}	

			remainderArray.sort(function(a, b){return a-b});


			for(var i=0;i<remainderArray.length;i++){
			if(remainderArray[i]!=comparingArray[i]){
				c=0;
			}
		}

		if(c==1){
			sum.push(k);

		}	
		
		}

		alert(sum);
		return sum;
	}
