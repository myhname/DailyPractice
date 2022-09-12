function allSubsets(arr){
    let res = [[]];
    for(let i = 0; i < arr.length; i++){
    const tempRes = res.map(subset => {
    const one = subset.concat([]);
    one.push(arr[i]);
    // console.log(one)
    return one;
    })
    res = res.concat(tempRes);
    // console.log("ss:")
    // console.log(res)
    }
    return res;
    }

    // print(JSON.stringify(allSubsets(splitLine.map(Number))))
    allSubsets([1,2,3])