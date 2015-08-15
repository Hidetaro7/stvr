#pragma strict

function Start () {
	var x:int = Random.Range(0.0f, 3.0f);
	var y:int = Random.Range(0.0f, 3.0f);
	var z:int = Random.Range(0.0f, 3.0f);
	transform.position = new Vector3(x,y,z);
	transform.rotation = Quaternion.Euler(0,Random.Range(0f, 180f),0); 
	//transform.rotation = Random.rotation;
}

function Update () {
	 transform.Translate(transform.forward* 0.001);
}