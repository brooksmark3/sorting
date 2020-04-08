//bubblesort code here
var counter;
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                counter++;
            }

        }
    }
    console.log(counter)
    return arr;
}
