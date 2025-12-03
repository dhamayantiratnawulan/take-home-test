const input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

console.log(groupAnagram(input))

function groupAnagram(input) {
  // sort each string in the input array
  const inputSorted = []
  for (var i = 0; i < input.length; i++) {
    inputSorted[i] = sortStr(input[i])
  }

  // group index of anagram based on sorted string
  let groupIdx = [];
  inputSortedLoop: for (var i = 0; i < inputSorted.length; i++) {
    for (var j=0; j < groupIdx.length; j++) {
      if(inputSorted[groupIdx[j][0]] === inputSorted[i]) {
        groupIdx[j].push(i)
        continue inputSortedLoop
      }
    }
    
    groupIdx.push([i])
  }

  // build result based on groupIdx
  let result = [];
  for (var i =0; i < groupIdx.length; i++) {
    let r = [];
    for(var j = 0; j < groupIdx[i].length; j++) {
      r.push(input[groupIdx[i][j]])
    }

    result.push(r)
  }

  return result
}

function sortStr(str) {

  // Step 1: Manually convert string to array
  var arr = [];
  for (var i = 0; i < str.length; i++) {
      arr[i] = str.charAt(i);
  }

  // Step 2: Bubble sort
  for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }

  // Step 3: Manually build sorted string
  var sortedStr = "";
  for (var i = 0; i < arr.length; i++) {
      sortedStr += arr[i];
  }

  return sortedStr
}