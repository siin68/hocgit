function get_abs(n){
	var abs;
    if (n < 0) {
	n = n * -1;
    }
    abs = n;
    return abs;
}
function run(n){
     console.log(get_abs(n));
}
 